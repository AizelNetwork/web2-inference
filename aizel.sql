-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 06, 2024 at 03:30 AM
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
(1, 1, 'aizel', 'INFERENCE', '0x313bE302AB078e3207f74559d63eF316c0B0670D'),
(2, 1, 'aizel', 'MODEL', '0x71dDC9354996C63b0890C162A61b06a38DA73d00'),
(3, 1, 'aizel', 'INFERENCE_NODE', '0xeDAcF93Fdb89e1eC1339f634DBACAF13349C32AC'),
(4, 1, 'aizel', 'DATA_NODE', '0x091127641258C02F771AD849FE1a1d0a4665387C'),
(5, 1, 'aizel', 'VERIFIER_NODE', '0xb10Df9F366C02ddBF203d20Ce6EfbDC454d8BC18'),
(6, 1, 'aizel', 'VERIFIER', '0xd70e4cc974d2CA9d75A6e0E5B22D97Dc66266336'),
(7, 1, 'aizel', 'AGENT_TRANSFER', '0x90cDdb34B3b79d769FfDF69b78480026fB66356b'),
(8, 2, 'bsc', 'INFERENCE', '0x9571919E73600644E75a3ACf11d273cB1c143067'),
(9, 2, 'bsc', 'MODEL', '0x13d8b99A54211D4579E0FdBF778De22d920839f0'),
(10, 2, 'bsc', 'INFERENCE_NODE', '0xe874A97F3e51F4B5Ff43e715dEEa9B9D7a0fe4c7'),
(11, 2, 'bsc', 'DATA_NODE', '0x9819621B69ff18cd6DF4a18Da1A5C7B8c00E5D05'),
(12, 2, 'bsc', 'VERIFIER_NODE', '0x99f5Fd523011D2977F483b54C238CFc8D81d8CA6'),
(13, 2, 'bsc', 'VERIFIER', '0xd8056C06a9AAF21DBEE31d781F382CCA1F130507'),
(14, 3, 'avax', 'INFERENCE', '0x04ea5Eab273a93359064FdC2862801cAf6Dc0D8a'),
(15, 3, 'avax', 'MODEL', '0xA0ACa4a019cD5029EBAD5fE87DbD6B5e1bF31a44'),
(16, 3, 'avax', 'INFERENCE_NODE', '0xc62621afF8f2FCb90E0422f5D0EBD26AB39617f8'),
(17, 3, 'avax', 'DATA_NODE', '0x9BF9F6E7970De55AeCa9E5724922c6DBAF94731f'),
(18, 3, 'avax', 'VERIFIER_NODE', '0x5596361a6c62A849FF411fEEd4b8a09C53aB1A95'),
(19, 3, 'avax', 'VERIFIER', '0x3D00E76279349B8b282b9c31393eC57BCdd892cd'),
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
(32, 6, 'peaq', 'INFERENCE', '0xAbc45c9a260b11823b96a255Ec040a19c7bc217a'),
(33, 6, 'peaq', 'MODEL', '0x471f1c394Eb729DE4DE9B58f4d44b8Abf9b48504'),
(34, 6, 'peaq', 'INFERENCE_NODE', '0x68B6ee757582ecd72F7841ec8eb2aa8B9E9dB308'),
(35, 6, 'peaq', 'DATA_NODE', '0xEC747164b829B0629C30daC9b088e359De512bAC'),
(36, 6, 'peaq', 'VERIFIER_NODE', '0x31F4629a30791dE907704EC9DF85E9b209a4D2d3'),
(37, 6, 'peaq', 'VERIFIER', '0x8135590aE3838c7b3d92da48D448857c032beF16'),
(38, 7, 'reddio', 'INFERENCE', '0xE4243378f83adD046f577c23Fe13e5e72C8d1C38'),
(39, 7, 'reddio', 'MODEL', '0x3B2b1a22B69aB47483239AbaB15869C36160d959'),
(40, 7, 'reddio', 'INFERENCE_NODE', '0x228696D741565F4d0E965F877172098Ed576bf60'),
(41, 7, 'reddio', 'DATA_NODE', '0x12f621306c90F8Aed014d6B1CA8aFaAc2E59F0e7'),
(42, 7, 'reddio', 'VERIFIER_NODE', '0x325A45574860FD1FD20913f96464c9d43F6073F4'),
(43, 7, 'reddio', 'VERIFIER', '0xa5ca405BACCAA348d04DA105F51eC70e05f8FC22'),
(44, 7, 'reddio', 'TransferAgent', '0x0B9d5B4C9B95675a944B6c5Ee83fAbBD9256eAFF');

-- --------------------------------------------------------

--
-- Table structure for table `faucet_requests`
--

CREATE TABLE `faucet_requests` (
  `id` int NOT NULL,
  `address` varchar(255) NOT NULL,
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
(7, 'reddio', 50341, 'https://reddio-dev.reddio.com', 0);

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
  ADD UNIQUE KEY `address` (`address`);

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `faucet_requests`
--
ALTER TABLE `faucet_requests`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `networks`
--
ALTER TABLE `networks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

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
