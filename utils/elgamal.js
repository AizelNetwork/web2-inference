// elgamal.js

const crypto = require('crypto-browserify');
const { Buffer } = require('buffer');
const elliptic = require('elliptic');

const sha256 = (msg) => {
    const hasher = crypto.createHash('sha256');
    hasher.update(msg);
    return hasher.digest();
};

class Elgamal {
    encrypt(msg, pk) {
        console.log('Encrypting:', { msg, pk }); // Debugging line

        // Compress the public key if it's uncompressed
        if (pk.length === 65 && pk[0] === 0x04) {
            const EC = new elliptic.ec('secp256k1');
            const key = EC.keyFromPublic(pk);
            pk = Buffer.from(key.getPublic().encodeCompressed());
        }

        if (msg instanceof Buffer && pk instanceof Buffer && pk.length === 33) {
            const EC = new elliptic.ec('secp256k1');
            const otherPk = EC.keyFromPublic(pk).getPublic();
            const tempKey = EC.genKeyPair();
            const shared = otherPk.mul(tempKey.getPrivate());
            const buffer = Buffer.alloc(64);
            const xBuffer = shared.getX().toArrayLike(Buffer);
            const yBuffer = shared.getY().toArrayLike(Buffer);
            xBuffer.copy(buffer, 32 - xBuffer.length);
            yBuffer.copy(buffer, 32 + 32 - yBuffer.length);

            const key = sha256(buffer).slice(0, 16);
            const iv = crypto.randomBytes(12);
            const cipher = crypto.createCipheriv('aes-128-gcm', key, iv);
            const ct = Buffer.concat([cipher.update(msg), cipher.final()]);
            const authTag = cipher.getAuthTag();
            const aesCt = Buffer.concat([iv, ct, authTag]);
            const elgamal_ct = Buffer.concat([Buffer.from(tempKey.getPublic().encodeCompressed()), aesCt]);
            return elgamal_ct.toString('hex');
        } else {
            console.error('Invalid parameters for Elgamal encryption:', { msg, pk });
            throw new Error("Elgamal encrypt: Invalid Parameters");
        }
    }

    decrypt(ciphertext, sk) {
        if (ciphertext instanceof Buffer && sk instanceof Buffer && sk.length === 32) {
            const EC = new elliptic.ec('secp256k1');
            const otherPkSlice = ciphertext.slice(0, 33);
            const aesCt = ciphertext.slice(33);
            const otherPk = EC.keyFromPublic(otherPkSlice).getPublic();
            const shared = otherPk.mul(EC.keyFromPrivate(sk).getPrivate());
            const buffer = Buffer.alloc(64);
            const xBuffer = shared.getX().toArrayLike(Buffer);
            const yBuffer = shared.getY().toArrayLike(Buffer);
            xBuffer.copy(buffer, 32 - xBuffer.length);
            yBuffer.copy(buffer, 32 + 32 - yBuffer.length);
            const key = sha256(buffer).slice(0, 16);
            const iv = aesCt.slice(0, 12);
            const decipher = crypto.createDecipheriv('aes-128-gcm', key, iv);
            const authTag = aesCt.slice(-16);
            decipher.setAuthTag(authTag);
            let c = aesCt.slice(12, aesCt.length - 16);
            const plain = Buffer.concat([decipher.update(c), decipher.final()]);
            return plain.toString('hex');
        } else {
            throw new Error("Elgamal decrypt: Invalid Parameters");
        }
    }
}

module.exports = Elgamal;

