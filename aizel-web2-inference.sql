-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 12, 2024 at 03:14 AM
-- Server version: 8.0.39-0ubuntu0.20.04.1
-- PHP Version: 7.4.3-4ubuntu2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aizel`
--

-- --------------------------------------------------------

--
-- Table structure for table `contracts`
--

CREATE TABLE `contracts` (
  `id` int NOT NULL,
  `network_id` int NOT NULL,
  `network_name` varchar(255) NOT NULL,
  `smart_contract_name` varchar(255) NOT NULL,
  `smart_contract_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contracts`
--

INSERT INTO `contracts` (`id`, `network_id`, `network_name`, `smart_contract_name`, `smart_contract_address`) VALUES
(1, 10, 'aizel-old', 'INFERENCE', '0x313bE302AB078e3207f74559d63eF316c0B0670D'),
(2, 10, 'aizel-old', 'MODEL', '0x71dDC9354996C63b0890C162A61b06a38DA73d00'),
(3, 10, 'aizel-old', 'INFERENCE_NODE', '0xeDAcF93Fdb89e1eC1339f634DBACAF13349C32AC'),
(4, 10, 'aizel-old', 'DATA_NODE', '0x091127641258C02F771AD849FE1a1d0a4665387C'),
(5, 10, 'aizel-old', 'VERIFIER_NODE', '0xb10Df9F366C02ddBF203d20Ce6EfbDC454d8BC18'),
(6, 10, 'aizel-old', 'VERIFIER', '0xd70e4cc974d2CA9d75A6e0E5B22D97Dc66266336'),
(7, 10, 'aizel-old', 'AGENT_TRANSFER', '0x90cDdb34B3b79d769FfDF69b78480026fB66356b'),
(8, 2, 'bsc', 'INFERENCE', '0x9571919E73600644E75a3ACf11d273cB1c143067'),
(9, 2, 'bsc', 'MODEL', '0x13d8b99A54211D4579E0FdBF778De22d920839f0'),
(10, 2, 'bsc', 'INFERENCE_NODE', '0xe874A97F3e51F4B5Ff43e715dEEa9B9D7a0fe4c7'),
(11, 2, 'bsc', 'DATA_NODE', '0x9819621B69ff18cd6DF4a18Da1A5C7B8c00E5D05'),
(12, 2, 'bsc', 'VERIFIER_NODE', '0x99f5Fd523011D2977F483b54C238CFc8D81d8CA6'),
(13, 2, 'bsc', 'VERIFIER', '0xd8056C06a9AAF21DBEE31d781F382CCA1F130507'),
(14, 3, 'avax', 'INFERENCE', '0xd9EF757A92F142c38e89DfccC19C02b7C3F192d6'),
(15, 3, 'avax', 'MODEL', '0x3B2b1a22B69aB47483239AbaB15869C36160d959'),
(16, 3, 'avax', 'INFERENCE_NODE', '0x228696D741565F4d0E965F877172098Ed576bf60'),
(17, 3, 'avax', 'DATA_NODE', '0x12f621306c90F8Aed014d6B1CA8aFaAc2E59F0e7'),
(18, 3, 'avax', 'VERIFIER_NODE', '0x325A45574860FD1FD20913f96464c9d43F6073F4'),
(19, 3, 'avax', 'VERIFIER', '0xa5ca405BACCAA348d04DA105F51eC70e05f8FC22'),
(20, 4, 'arbitrum', 'INFERENCE', '0xB06BF077Bd74bC217bDF62dCC065f5b16bd08D6F'),
(21, 4, 'arbitrum', 'MODEL', '0xfEe003D3e9DaeE3D7afA0a558725AaeB6561a83c'),
(22, 4, 'arbitrum', 'INFERENCE_NODE', '0x9Bc2796feFB4DaF05e0255Ba82f99e0A5F19f520'),
(23, 4, 'arbitrum', 'DATA_NODE', '0x74d1b3699d84fFF6bbbaa648B5Db2A36c46052da'),
(24, 4, 'arbitrum', 'VERIFIER_NODE', '0x9471939f9C8824aa7186Fc5d79374beF807B3c03'),
(25, 4, 'arbitrum', 'VERIFIER', '0xf3182e6863000c8679ff082Aa494dB755520aF60'),
(26, 5, 'krest', 'INFERENCE', '0x73A7B03aEb6eE81108f5080FBbf7Be8f6bA6FD10'),
(27, 5, 'krest', 'MODEL', '0x999C3593067e86879652DEc6A2CAa8b01ecf07F2'),
(28, 5, 'krest', 'INFERENCE_NODE', '0xFC7F3629c1A9AC16bd2951b84F8920Ad2C39087C'),
(29, 5, 'krest', 'DATA_NODE', '0x013b58142b9cBEadDBFdD5371cBF1295ff8b1A7A'),
(30, 5, 'krest', 'VERIFIER_NODE', '0x2663A3Aefa90b82558d428d5B496b7B87Bb70C4A'),
(31, 5, 'krest', 'VERIFIER', '0xB5883ddD795230e2ecAC5C58e74c04887C9aaD24'),
(32, 6, 'peaq', 'INFERENCE', '0xCb01eA32cf44eBf61DCF3B66BAaca8064f77798C'),
(33, 6, 'peaq', 'MODEL', '0x792aee8F36Fbe582f04BcE7d14b02957Fd6354f2'),
(34, 6, 'peaq', 'INFERENCE_NODE', '0x589B88E566205ebAA4E11d00b619d0E9Ae2F7dE9'),
(35, 6, 'peaq', 'DATA_NODE', '0xf545F8485A7DB13Cfad373B2C6c7d567C2C4e4FC'),
(36, 6, 'peaq', 'VERIFIER_NODE', '0x97aaA42284933a3bc7eF1d0430EfE22ca3C4C219'),
(37, 6, 'peaq', 'VERIFIER', '0x9EE8ECabb155DcA617b8F4A25eb9032aFA893ad9'),
(38, 7, 'reddio', 'INFERENCE', '0x390113cF01a6040dF24e0fB1Be2602daC4Bf46d4'),
(39, 7, 'reddio', 'MODEL', '0x4BB2c7C82edA32966bDC530B2784A2D3e3ffD4eF'),
(40, 7, 'reddio', 'INFERENCE_NODE', '0x53d28426cc1C21bd5ED9d63A250f7B18e1489f54'),
(41, 7, 'reddio', 'DATA_NODE', '0x3DCc30b2D5Cb97a31263c81a81DA9726173066a6'),
(42, 7, 'reddio', 'VERIFIER_NODE', '0xD0345670F1DD5bc22d6db9eae343e13A054B7bAB'),
(43, 7, 'reddio', 'VERIFIER', '0xa7eba8705A07ab08E78B5497B37785b9e2d77727'),
(44, 7, 'reddio', 'AGENT_TRANSFER', '0x8Ab70dDD2bf8ae9dE4Af623A8e40101938E744Ea'),
(46, 8, 'testnet', 'INFERENCE', '0x7a971bffAB1D6067a25900aCBa445f31C1c791ec'),
(47, 8, 'testnet', 'MODEL', '0xECaE5ba39d697753D1936D76a3852FeB08c11d82'),
(48, 8, 'testnet', 'INFERENCE_NODE', '0xE92b90978b410fB712cA2C32329D8bDfcA38300C'),
(49, 8, 'testnet', 'DATA_NODE', '0x1Ea61D8c8a25F20Dca5C6f058Fd3E6CfF702E37D'),
(50, 8, 'testnet', 'VERIFIER_NODE', '0x51339a0ab025f00fE05cF082670668A33758a185'),
(51, 8, 'testnet', 'VERIFIER', '0xcaD9f1E5d0E886625731cbA9DCfF2f9B80d85eB2'),
(52, 8, 'testnet', 'AGENT_TRANSFER', '0xe92299Bb9C9Aef6697649FAdb598AFc690AF8197'),
(53, 8, 'testnet', 'FEE_MANAGER', '0x1fe9447d0e9cd31776Ff31C27BadDCA131B13F33'),
(54, 9, 'peaq-old', 'INFERENCE', '0xAbc45c9a260b11823b96a255Ec040a19c7bc217a'),
(55, 9, 'peaq-old', 'MODEL', '0x471f1c394Eb729DE4DE9B58f4d44b8Abf9b48504'),
(56, 9, 'peaq-old', 'INFERENCE_NODE', '0x68B6ee757582ecd72F7841ec8eb2aa8B9E9dB308'),
(57, 9, 'peaq-old', 'DATA_NODE', '0xEC747164b829B0629C30daC9b088e359De512bAC'),
(58, 9, 'peaq-old', 'VERIFIER_NODE', '0x31F4629a30791dE907704EC9DF85E9b209a4D2d3'),
(59, 9, 'peaq-old', 'VERIFIER', '0x8135590aE3838c7b3d92da48D448857c032beF16'),
(60, 6, 'peaq', 'AGENT_TRANSFER', '0x53CeEcca021d2ccF7735bF2Ae44eE053603Ff127'),
(61, 6, 'peaq', 'FEE_MANAGER', '0x54B721d8DDdDE3a5C5329038F90A7372Bb789078'),
(62, 6, 'peaq', 'FEE_MANAGER_PRO', '0xb87701d9c325995Dc11b07690bb4de80d26f756A'),
(63, 8, 'testnet', 'FEE_MANAGER_PRO', '0x31D9f5506B2a3140E715fCAeF8D241c040AA739F'),
(64, 7, 'reddio', 'FEE_MANAGER', '0xedbB80C534990F8Ae701928BADdeeFd0B50A4C64'),
(65, 7, 'reddio', 'FEE_MANAGER_PRO', '0x6f28f78F5b1391b47b1aea16Fe89C5CE4D308892'),
(66, 3, 'avax', 'AGENT_TRANSFER', '0x971F21493AC3d2C0F0e619bD79c9c75e7a6Dd02e'),
(67, 3, 'avax', 'FEE_MANAGER', '0xE4243378f83adD046f577c23Fe13e5e72C8d1C38'),
(68, 3, 'avax', 'FEE_MANAGER_PRO', '0x0B9d5B4C9B95675a944B6c5Ee83fAbBD9256eAFF'),
(69, 1, 'aizel', 'INFERENCE', '0xC9d5cF6e4d453Ad7a62aB51E4F02bAdd2AF50a25'),
(70, 1, 'aizel', 'MODEL', '0x75DB7a2627c7B8A8804B90607F021E59C7717663'),
(71, 1, 'aizel', 'INFERENCE_NODE', '0x53CeEcca021d2ccF7735bF2Ae44eE053603Ff127'),
(72, 1, 'aizel', 'DATA_NODE', '0xCb01eA32cf44eBf61DCF3B66BAaca8064f77798C'),
(73, 1, 'aizel', 'VERIFIER_NODE', '0x792aee8F36Fbe582f04BcE7d14b02957Fd6354f2'),
(74, 1, 'aizel', 'VERIFIER', '0x54B721d8DDdDE3a5C5329038F90A7372Bb789078'),
(75, 1, 'aizel', 'AGENT_TRANSFER', '0x224Ce888204947a69dF54fb8291079D9Ef1c19DC'),
(76, 1, 'aizel', 'FEE_MANAGER', '0x5992bde35f600812931617Bc74B984ADc5013d66'),
(77, 1, 'aizel', 'FEE_MANAGER_PRO', '0xf9b3CA8e2Dc39cf171Eb69d653677AC477519e2c'),
(78, 11, 'mevm', 'INFERENCE', '0xd9EF757A92F142c38e89DfccC19C02b7C3F192d6'),
(79, 11, 'mevm', 'MODEL', '0x3B2b1a22B69aB47483239AbaB15869C36160d959'),
(80, 11, 'mevm', 'INFERENCE_NODE', '0x228696D741565F4d0E965F877172098Ed576bf60'),
(81, 11, 'mevm', 'DATA_NODE', '0x12f621306c90F8Aed014d6B1CA8aFaAc2E59F0e7'),
(82, 11, 'mevm', 'VERIFIER_NODE', '0x325A45574860FD1FD20913f96464c9d43F6073F4'),
(83, 11, 'mevm', 'VERIFIER', '0xa5ca405BACCAA348d04DA105F51eC70e05f8FC22'),
(84, 11, 'mevm', 'AGENT_TRANSFER', '0x971F21493AC3d2C0F0e619bD79c9c75e7a6Dd02e'),
(85, 11, 'mevm', 'FEE_MANAGER', '0xE4243378f83adD046f577c23Fe13e5e72C8d1C38'),
(86, 11, 'mevm', 'FEE_MANAGER_PRO', '0x0B9d5B4C9B95675a944B6c5Ee83fAbBD9256eAFF');

-- --------------------------------------------------------

--
-- Table structure for table `faucet_requests`
--

CREATE TABLE `faucet_requests` (
  `id` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `chain` varchar(55) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_request` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `networks`
--

CREATE TABLE `networks` (
  `id` int NOT NULL,
  `network_name` varchar(255) NOT NULL,
  `evm_chain_id` int NOT NULL,
  `rpc_url` varchar(255) NOT NULL,
  `is_active` tinyint DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `networks`
--

INSERT INTO `networks` (`id`, `network_name`, `evm_chain_id`, `rpc_url`, `is_active`) VALUES
(1, 'aizel', 1281, 'http://34.124.144.235:9946', 1),
(2, 'bsc', 97, 'https://data-seed-prebsc-2-s3.binance.org:8545', 1),
(3, 'avax', 43113, 'https://api.avax-test.network/ext/bc/C/rpc', 1),
(4, 'arbitrum', 421614, 'https://arbitrum-sepolia.gateway.tenderly.co', 1),
(5, 'krest', 2241, 'https://erpc-krest.peaq.network', 1),
(6, 'peaq', 3338, 'https://peaq.api.onfinality.io/public', 1),
(7, 'reddio', 50341, 'https://reddio-dev.reddio.com', 1),
(8, 'testnet', 20151225, 'http://34.124.144.235:9957', 1),
(9, 'peaq-old', 3338, 'https://peaq.api.onfinality.io/public', 1),
(10, 'aizel-old', 1281, 'http://34.124.144.235:9946', 1),
(11, 'mevm', 30732, 'https://mevm.devnet.imola.movementlabs.xyz', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `app_key` varchar(255) NOT NULL,
  `private_key` varchar(255) NOT NULL,
  `public_key` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `app_key`, `private_key`, `public_key`, `address`) VALUES
(1, 'Mr. Lee', '35a7c90c53c351aab052953e52ec40c556bb7bff16194b38336dab4bd29c3cc8', '0xdec4eb3dd4c6a5cbae199a1f3d2f5271414d250418ff55bf06cc14425cbfc7d3', '0x03d5bdfdceb40839b95d50319956ba558ff30d8c04ede1ecc5b4d8a48c614859cd', '0x9420474A1964E1A593b77b3FEfc349e1d85121B4'),
(2, 'Mr. Lee', '9df856775ae6d6a4915e78becf51f822c931358e2cc30ef472253043b2d7d8b3', '0x2e95484db6375a398d2f9a4f61694425e43a5a2366dfc48c650c595c5c7bb265', '0x0333c5060b0c409e5e41553f4bdede8cc3838cfc50bd96d22e6c7445c9d2873823', '0x764f2AB1F3390D98C2b169d66C93AdD9F358EDcB'),
(3, 'Mr. Lee', '11a90e45694c42c8421be88a97c6d6c20cd4eb2c143f0dfe1e517b498b960864', '0xb9474b88ad04f5dd8189482556d726b63936eb212eaff5553254edac1eb8cc35', '0x0320dc5d09bdeab34451e63d66598a69f3dfe9f3ed06b02fb9aeb6950d4b01f940', '0x85c09baaA93A1d9893624953df585d7F4f0311C7'),
(4, 'Mr. Lee', '56eb1ebc1abb0faf9dd98e587f3024756866553b6cd0b5fd54520704eb150fda', '0x6715c4dbabd3c185d496d0b2ecac1d9e1f8291a9688582a455baf0e6e118727b', '0x025b2252dcdeeab0861b0093f84eacdad5784182e656c2d47e716e4e9796b5e8e9', '0xB333A51872b658304F01ac9dA1D31071717B74aC'),
(5, 'Mr. Lee', 'aef8832032ea1ba486ac3af0313d4d3094caec4525742f4a32c2fd918a05c49a', '0x773587cb6609d2e89a7ebbd8bb62485477631661892ca515f836c5306ecb9a50', '0x03d3fb81ce295551aa1e8ea6ff633ca8f54fe2e8af321efeed9456f4431e98c13d', '0xe982b8CFc47E73515895c0A65568ca8D12Cf7b02'),
(6, 'Mr. Lee', '60eaf2d4b428fff66fa882e4e0465718e8f36be8d5aa965f1fae810a51625bf4', '0x21040b0939a49b09ccea123a46929290dc4756803eb97bbe9b9969880f7fa507', '0x027b16e746bda2ff96021efe8b491ce9685b42de07df5f1512f864ee7599734f67', '0xaF44C7759915729631eEFEe756Df0Ce93859d3b3'),
(7, 'Limit Shawn', 'd87ad9624220d824cf0f074a87be60715aa1ba64d62727f43315aa6f45a28e16', '0xf6c5943cebc235889c568b848a58758421aa3caf2ea1466e9ad471c83287d356', '0x02dff08a3e19317e9161ace60491c6f80c96def458f9b9f89e3c0eb79220e52c0d', '0x22654489cf60c6D6425206193F3a4dC8B3dC3a25'),
(8, 'Krest tester', 'e331b97879cd389fbda3ab299ee0cbe3823643b1f0c05b7568d157c1cc59e53e', '0xa9241b358d9442dddcb8005162897c4fbc0dd5332a059255fbab17f9e56a2364', '0x02a335e792fc42d168bc72ea148161a86d19b0348030a61aec16f26b30406f8166', '0x50F48f661B3A3330Db93bb6D534CFb009291d86c'),
(9, 'Krest tester', 'ee2b01223d373f3620a0109bbee9c8b098abe4773f873b9d5e80edb61bbe3a17', '0x2e1e46899f131f3e162ddcb263f2af9d02e3463582daa5bc78fdf0ac91816b7f', '0x02a8eb58be523386a6f7a92c443ea33bf7318cd29704461999a0e467392bf3a6e2', '0x642779Fb3D10C8a7C7E396a584E4996818189e90'),
(10, 'Mr. Lee', 'ba1308d218f6804058d7ba6d2177350562aea51a1b2f10eff06d8e4ef78f48e5', '0x15d6391efeb90eccdbda48fb97f44c9b687fa45f99280d0435580134308b65b2', '0x02e0ad9fc2e469068629e399ab3e65ae99a7bb0b0ca42e466960fa3c408ecb3a00', '0xF3B11F8B337334821482E0Ff41473A3EA319FDA1'),
(11, 'tester', 'bd738dff081867dae8f0b8e8a641f48d55809edd956b40a6429affe6ca7c3b9f', '0xb8a7c7aba5cde34b01fa02da42f5c5801e036ab2de5bf19001068e830d84eaf4', '0x02926da54e16797ea92646629059318d496d4a053d60b9ce550b662ea81be59135', '0xF62e3cC5B41de8b7451230319F640aCdc85E307E'),
(12, 'Krest tester', '0df74333079e027869f9c7fccfa00a6e48d0532156a3f8baae5ad5344c254d5b', '0xb88cd6c94512ff90ffa18db80665f1259313d3617108b6ca6a19af29bb26d11d', '0x0277283eec1d600d9773e1f8bc87b98280e7b547aacc8a0fbd125d17da4aa70cdc', '0xc0E1BE347cE7D706c0F910F956dd300F717e527e'),
(13, 'Mr. Jiang', 'f8009c9592009fc60b27742c67ef712530ecf607ff1df0b47d82f6514dc4677f', '0x0974f17a2932c96f2f8a5c1809b9f0aa1a4f4ff20e3af40d7c796041fa5abd3c', '0x02a75470db951e6dc1fdf864aabb7b0e8cd0457ee4105cf9333b251813005121b1', '0x5fc32EE20389004f8Ebb4f1A80DF46709Ab0fa79'),
(14, 'Krest tester', 'f04a951b53396cfa547ee78fbe5b92698cf8a93ea9f49a6e837bd84bc8a40a54', '0x322b7966f53a365e6353fb3af9cf5cfc0e170e87ec6785dbbb189862135e2f11', '0x0272b5704986cf0c18b11920e2516a67fc95d108d031646852ef6811423fe20596', '0x030FF35e99002C439A5676cef5D0e1e17D9A1d87'),
(15, 'peaq-energy-agent', '61fbb6a43135726714ace166e0a477c557108b578dbca1a9e535f240672be3dd', '0xb89756b46bb2702aae989f3d824dc1827ffbdf6f21c68cbbc4f94ff2cdb2bde3', '0x02f2ae9d17545113f75ceb9708d3c3638256121c281efc6c96b6ac22e530426e75', '0x405fC8915D47D2d9B559ecbde8b8035b078DB084'),
(16, 'SJ', 'ac5d08badcf525e9f4472933618b3a5ba344ae85795d44fa4084cc067ca7f10c', '0xe25ebec5f30c007c92dffdeedf2692d8f662140b5f413f0828b6ec768c5f7ad9', '0x0292b9ed58ca2fb664f3bcc7b067f744916f88b27858cb68f13bcc01ae0316cbee', '0x73642C7959258c25a3fe156767D1f56Fe889918E'),
(17, 'John Doe', '2981d3e8b9cafc3816d8168b0db4a56d42b810120d3d8e798f213f0bd9a9c22b', '0xe88cae669ca1a48d11a8a427eda167be4f6d5b2b195366c97247adc04dca7b79', '0x0213eef37b44fd427da97d2c418b5df11c128960fe586a2c4f52cd18bafc939420', '0xD6aa9AA349CcAb278337a12D5fdB3b93e21858eE'),
(18, 'Jay', 'e8695d84d8fbb79827737673a8e9345145502b4344b7e224f6c957ec69db61fe', '0x76fcb9dd1d88dd0a3afd33f30dec2cadced723a03b223d57d3fb1fa71d5ca111', '0x03ecf6964ffec3c243e207b938ab3771a5a46d282177fb933eeeca21b8dcaff014', '0xd8956d65a5B4B8a93a4a97e8898f49B8200D3c2A'),
(19, 'Mr. Jiang', '2d501dad6564efdf2b0349ba5ada4185c27aece7679207fa7c15b5d4b619cc08', '0xb7cc4092e15ac5cdc4912a004d60b151d8b9890f9eaa6cd6b4794cc2a64996b7', '0x0350f7115401da3f821b030bfbd526344e6535c053f270453d1aa96fc27445e13a', '0xA59318C6A3805AECE0043f285EdfE2682753e384'),
(20, 'API Monitor', '6d010741ae8c6089576bbe826f8c97a98f7c65d646399d1fa8619cb81806aea6', '0xd39e7613fb6f77a5ca787c3658e24bbf9bb9fa98d0f15096fcf758c84fc7552c', '0x0385789b6666916dcc3da1b2778dfd55aca53007fad1211f91e2698829ac301341', '0xb7E885948834Cf72ed0cf99e940B2fCd37B863DE'),
(21, 'tester', '4b210e045f642501ef445040b3d198473d2ded1056d9521b600a4ed31f59f4bc', '0x085f82bad2cd443671833727b3c0b249dac2aa8a14e8b2747db75ca02b116cb7', '0x0203e8507c8e38d10d2e6a711e5ea8e0a15d54dde097ebab0a0d438ac59a940174', '0xFe043fADAeC293427CEC4b5ff553FC800B657a24'),
(22, 'John Doe', 'a02287d7de4bdac5653da2432c7abd9fb059a92ac6083f4d35c36ae61b7d0aa8', '0x9407a2afeaaf82c9e3de5e5d3618d81d204604a7011d4660cc8e24cb78b5b9fe', '0x026316ac32989633f53269497ee45a3275f51285f0731b4603f66203187f3355d2', '0xf73b42d138253438a2BC1B13074287dA2c7307c9'),
(23, 'John Doe', '9cc15c289e59a3491e2959cf87c06b026fec13585de1908ac2a543b40fb433e9', '0x9c6b6a524158e7d49641794b69b865bb746a59cc7f6893caf385055f9e428ef7', '0x035aed5c0413bc4fb425ecb46bccd5d5bf53209156f711fd406657c28459b09045', '0x2AB3162E28C63fe26f50a62C5E1Ed80ED17b08f3'),
(24, 'tester', 'e88b75e04a64f0443a24a8e25cc14137d8958432d1b6dc0ee28b4e8592a2fe8c', '0xbdbc91f403988b6e19444f6a20660fc3bded75561e13c916e9b342928951a25e', '0x0274668c2cb1041c1f4fc5cecc2348def937a97302fcd8d4215f623a87f7156dc9', '0xC9205E1A0425A0944B2B8BFBacAF20fd01ACd0cc'),
(25, 'tester4', 'b4f9016cc9d9c504b54ec4af8c2b6cfc11bba4e921f753e2815adf3c619f9fe9', '0xc2598c4c33d96468f279cb4636759f8737ecc8df615ff4b14c8cefa48105f837', '0x021a547256de47557066bfc294b38baecc213cbde5caaf374748d9faf13cf16d3d', '0x7A654EEf5f139730289C6F09578c30A4fb93099a'),
(26, 'price model tester', '9ebc82c3125cfdd3d8c7034affe9d5d562b43f0fe9082c286301e55a299d89ec', '0x41f3eda293a88e29778653c53beeaae2351e5af48310471f88a3717085bf3ac3', '0x029b700995d2c36e27da63d78a5f84072b68fa82364c5cd465ae1b2d3dec7d7630', '0x6C4415bD858Dba4c32fb248eD3ea08D7a916fdaA'),
(27, 'API Monitor', 'f454754e759d1d506eb763ede12dea0b771947cc5cd6f9bd439f82158f0ba8ad', '0x279c819488d0547d7d88603917f8b5a2f3cc1fd6e1133f77b0365e79ccf6cf4c', '0x029abdc5da3af13dd10ae9f10455366477f8c0f3b08216582c0101fce918c5448b', '0xcD61eBC53100A17d798B8239cC3803D15B96b19A');

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `user_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`user_id`, `name`, `password`, `email`, `phone`, `avatar`) VALUES
(1, 'Mr. Lee', '$2b$10$HwTNGU7zed2gUHCXlhxJGebGglJIVODtizeNFaZ4AHAM2xHojNo02', 'newemail@example.com', '0987654321', 'http://3example.com/new-avatar.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contracts`
--
ALTER TABLE `contracts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `network_id` (`network_id`);

--
-- Indexes for table `faucet_requests`
--
ALTER TABLE `faucet_requests`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `address_2` (`address`,`chain`);

--
-- Indexes for table `networks`
--
ALTER TABLE `networks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `app_key` (`app_key`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contracts`
--
ALTER TABLE `contracts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `faucet_requests`
--
ALTER TABLE `faucet_requests`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `networks`
--
ALTER TABLE `networks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contracts`
--
ALTER TABLE `contracts`
  ADD CONSTRAINT `contracts_ibfk_1` FOREIGN KEY (`network_id`) REFERENCES `networks` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_info`
--
ALTER TABLE `user_info`
  ADD CONSTRAINT `user_info_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
