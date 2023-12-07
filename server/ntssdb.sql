-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2023 at 10:29 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ntssdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `areas`
--

CREATE TABLE `areas` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `areas`
--

INSERT INTO `areas` (`id`, `code`, `order`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 'ON2E', 1, 'Dưới 20m', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, '2UMD', 2, 'Từ 20m - 30m', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, '3UMD', 3, 'Từ 30m - 50m', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, '5UMD', 4, 'Từ 50m - 70m', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, '7UMD', 5, 'Từ 70m - 90m', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'EN9E', 6, 'Trên 90m', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` varchar(255) NOT NULL,
  `price` varchar(255) DEFAULT NULL,
  `acreage` varchar(255) DEFAULT NULL,
  `published` varchar(255) DEFAULT NULL,
  `hashtag` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`id`, `price`, `acreage`, `published`, `hashtag`, `createdAt`, `updatedAt`) VALUES
('004f16aa-2936-4f69-902a-e114a3032e7d', '4.5 triệu/tháng', '22m2', 'Hôm nay', '83144', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('02b50508-b8b2-4706-8f42-26cbefe708fd', '3.5 triệu/tháng', '24m2', 'Hôm nay', '282621', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('05a73856-34a3-4563-a17c-e20ce887f0e7', '7 triệu/tháng', '40m2', 'Hôm nay', '605524', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('09ba9402-6786-4fcf-a1dc-4996598314c8', '20 triệu/tháng', '363m2', 'Hôm nay', '604998', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('427a6116-53ea-43f1-8cc9-50605c983f70', '17 triệu/tháng', '112m2', '1 giờ trước', '283266', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `subheader` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `code`, `value`, `header`, `subheader`, `createdAt`, `updatedAt`) VALUES
(1, 'CTCH', 'Cho thuê căn hộ', 'Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, Mới Nhất 2024', 'Cho thuê căn hộ - Kênh đăng tin cho thuê căn hộ số 1: giá rẻ, chính chủ, đầy đủ tiện nghi. Cho thuê chung cư với nhiều mức giá, diện tích cho thuê khác nhau.', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'CTMB', 'Cho thuê mặt bằng', 'Cho Thuê Mặt Bằng, Cho Thuê Văn Phòng, Cửa Hàng, Kiot, Mới Nhất 2024', 'Cho thuê mặt bằng - Kênh đăng tin cho thuê mặt bằng, cho thuê cửa hàng, cho thuê kiot số 1: giá rẻ, mặt tiền, khu đông dân cư, phù hợp kinh doanh.', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'CTPT', 'Cho thuê phòng trọ', 'Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2024', 'Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất năm 2024. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'NCT', 'Nhà cho thuê', 'Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2024', 'Cho thuê nhà nguyên căn - Kênh đăng tin cho thuê nhà số 1: giá rẻ, chính chủ, miễn trung gian, đầy đủ tiện nghi, mức giá, diện tích cho thuê khác nhau.', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` varchar(255) NOT NULL,
  `image` longtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `image`, `createdAt`, `updatedAt`) VALUES
('005c6702-48be-41d8-916e-6f82138ece26', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/8_1660029257.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/1_1660029255.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/2_1660029255.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/4_1660029256.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/5_1660029256.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/6_1660029257.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/7_1660029257.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/8_1660029257.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/1_1660029255.jpg\"]', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
('00be6b9a-34d0-4949-9454-7a3f9bb8dbde', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/7041eddc052cff72a63d_1658997072.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/c97b82136820907ec931_1658997073.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/5021c4a9a35c45021c4d_1658997058.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/toa-nha-52_1658997059.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/3fbaab5943a9b9f7e0b8_1658997071.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/5c7e95137f20877ede31_1658997071.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/7041eddc052cff72a63d_1658997072.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/c97b82136820907ec931_1658997073.jpg\"]', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
('0b2f0453-fb7b-49a8-9d0a-0f9b4dc91c2f', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/23c9422905c7f999a0d659_1660100658.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/d16e16a95147ad19f45656_1660100664.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/8e3cfdecba02465c1f1355_1660100658.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/68bc8867cf8933d76a9857_1660100660.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/b814b5c8f2260e78573758_1660100662.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/04/25/b813c8f58f1b73452a0a60_1650874569.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/04/25/b54529b46e5a9204cb4b61_1650874571.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/z3632027092979-8daa593c24da8a845acbbb1bb58060ca_1660100628.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/z3632027093110-d8e20724215b376ef771964808900f4e_1660100628.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/23c9422905c7f999a0d659_1660100658.jpg\"]', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
('0bd0e6a2-528a-43b8-8dbf-681df86e5d7e', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/photo-2022-08-08-185454-result_1659959756.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153410-8805-wm-1-result_1659959755.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153411-4b75-wm-result_1659959755.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153424-6c25-wm-result_1659959755.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153424-0984-wm-result_1659959755.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153424-eea5-wm-result_1659959756.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153425-84fb-wm-result_1659959756.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153518-e5d4-wm-result_1659959756.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/photo-2022-08-08-185454-result_1659959756.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153410-8805-wm-1-result_1659959755.jpg\"]', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
('0c338459-e0e5-4928-b141-f15cba1546a6', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/02/27/pp10_1582776285.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/02/27/pp22_1582776045.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/02/27/pp32_1582776058.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/02/27/pp9_1582776078.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/02/27/pp37_1582776086.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/02/27/tm1_1582776272.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/02/27/pp10_1582776285.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/02/27/pp22_1582776045.jpg\"]', '2023-11-11 05:02:39', '2023-11-11 05:02:39');

-- --------------------------------------------------------

--
-- Table structure for table `labels`
--

CREATE TABLE `labels` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `labels`
--

INSERT INTO `labels` (`id`, `code`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 'OAHU', 'Cho thuê phòng trọ Quận Thủ Đức', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(2, 'OAHN', 'Cho thuê phòng trọ Quận Tân Bình', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(3, 'OUHO', 'Cho thuê phòng trọ Quận Gò Vấp', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(4, 'OOPN', 'Cho thuê phòng trọ Quận 7', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(5, 'OQPN', 'Cho thuê phòng trọ Quận 10', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(6, 'ONOT', 'Cho thuê phòng trọ Quận Bình Thạnh', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(7, 'OYHH', 'Cho thuê phòng trọ Huyện Nhà Bè', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(8, 'ONAB', 'Cho thuê mặt bằng Quận Tân Bình', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(9, 'OQMN', 'Cho thuê mặt bằng Quận 4', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(10, 'ONTU', 'Cho thuê mặt bằng Quận Nam Từ Liêm', '2023-11-11 05:02:39', '2023-11-11 05:02:39');

-- --------------------------------------------------------

--
-- Table structure for table `overviews`
--

CREATE TABLE `overviews` (
  `id` varchar(255) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `expired` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `overviews`
--

INSERT INTO `overviews` (`id`, `code`, `area`, `type`, `created`, `expired`, `createdAt`, `updatedAt`) VALUES
('01d9b2f4-d055-453a-bf0e-c94584e6c974', '#603145', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('04932302-4255-4caa-926a-1d2b376d08b9', '#605467', 'Cho thuê căn hộ mini Hồ Chí Minh', 'Cho thuê căn hộ', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('09d612db-2b96-4c7f-940a-32579939f38f', '#296453', 'Cho thuê căn hộ Hồ Chí Minh', 'Cho thuê căn hộ', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('0d1baedc-6f3b-42d5-8d6c-8cbdeb47ce77', '#604998', 'Cho thuê nhà Bình Dương', 'Nhà thuê nguyên căn', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('1155f137-e229-432c-b9c3-0d9270f65dad', '#602626', 'Cho thuê căn hộ dịch vụ Hồ Chí Minh', 'Cho thuê căn hộ dịch vụ', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('1195eea1-543d-4bc9-80ef-e4de17534eb8', '#605489', 'Cho thuê căn hộ mini Hồ Chí Minh', 'Cho thuê căn hộ mini', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('126d6dae-dd28-45da-9945-0ab61f348919', '#605585', 'Cho thuê nhà Hồ Chí Minh', 'Nhà thuê nguyên căn', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('13c421db-5484-4131-a1c9-2b5d3d5c9ff7', '#605337', 'Cho thuê mặt bằng Hồ Chí Minh', 'Cho thuê mặt bằng', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('13fd781e-3065-4604-8aab-5d14f447414c', '#603516', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `star` varchar(255) DEFAULT '0',
  `labelCode` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `attributesId` varchar(255) DEFAULT NULL,
  `categoryCode` varchar(255) DEFAULT NULL,
  `priceCode` varchar(255) DEFAULT NULL,
  `areaCode` varchar(255) DEFAULT NULL,
  `provinceCode` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `overviewId` varchar(255) DEFAULT NULL,
  `imagesId` varchar(255) DEFAULT NULL,
  `priceNumber` float DEFAULT NULL,
  `areaNumber` float DEFAULT NULL,
  `status` enum('pending','active') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `prices`
--

CREATE TABLE `prices` (
  `id` int(11) NOT NULL,
  `order` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `prices`
--

INSERT INTO `prices` (`id`, `order`, `code`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'OU1N', 'Dưới 1 triệu', '2023-11-11 17:56:38', '2023-11-11 17:56:38'),
(2, 2, '1U2N', 'Từ 1 - 2 triệu', '2023-11-11 17:56:38', '2023-11-11 17:56:38'),
(3, 3, '2U3N', 'Từ 2 - 3 triệu', '2023-11-11 17:56:38', '2023-11-11 17:56:38'),
(4, 4, '3U5N', 'Từ 3 - 5 triệu', '2023-11-11 17:56:38', '2023-11-11 17:56:38'),
(5, 5, '5U7N', 'Từ 5 - 7 triệu', '2023-11-11 17:56:38', '2023-11-11 17:56:38'),
(6, 6, '7U0N', 'Từ 7 - 10 triệu', '2023-11-11 17:56:38', '2023-11-11 17:56:38'),
(7, 7, '1E1N', 'Từ 10 - 15 triệu', '2023-11-11 17:56:38', '2023-11-11 17:56:38'),
(8, 8, 'EU5N', 'Trên 15 triệu', '2023-11-11 17:56:38', '2023-11-11 17:56:38');

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `code`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 'CUID', 'Hồ Chí Minh', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(2, 'NDOE', 'Hà Nội', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(3, 'NUDD', 'Bình Dương', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(4, 'NNAE', 'Đà Nẵng', '2023-11-11 05:02:39', '2023-11-11 05:02:39');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20231110094620-create-user.js'),
('20231110102647-create-post.js'),
('20231110110159-create-area.js'),
('20231110110225-create-attribute.js'),
('20231110110258-create-category.js'),
('20231110110312-create-image.js'),
('20231110110332-create-label.js'),
('20231110110349-create-overview.js'),
('20231110110405-create-price.js'),
('20231110110417-create-province.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `zalo` varchar(255) DEFAULT NULL,
  `fbUrl` varchar(255) DEFAULT NULL,
  `avatar` longblob DEFAULT NULL,
  `role` enum('user','admin') DEFAULT NULL,
  `refreshToken` varchar(255) DEFAULT NULL,
  `passwordChangedAt` varchar(255) DEFAULT NULL,
  `passwordResetToken` varchar(255) DEFAULT NULL,
  `passwordResetExpires` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `password`, `zalo`, `fbUrl`, `avatar`, `role`, `refreshToken`, `passwordChangedAt`, `passwordResetToken`, `passwordResetExpires`, `createdAt`, `updatedAt`) VALUES
('78d02898-9d2b-4e29-9827-1d2535d311cf', 'Đinh Minh Hiếu', '0384029072', 'muradryomaqlm@gmail.com', '$2b$12$Qy.t4iAAurWYEyVNC1szYudXVlLt1JfIpDb1X3dtns5UKJTY4hBH.', NULL, NULL, NULL, 'user', NULL, NULL, NULL, NULL, '2023-12-07 06:42:42', '2023-12-07 06:42:42'),
('d7e74be3-913d-40c0-af61-118ca1ede96a', 'Lê Tuấn Kiệt', '0357725474', 'ltnkietviii@gmail.com', '$2b$12$DF9Y3pRz0qzvnpjwU6l8.ec/EDxS/j0no4FQah82si2ukIN58Q3Ri', NULL, NULL, NULL, 'admin', NULL, '1701924504995', 'c53033a7b30bda9121c1233f4d545b0ed2be1a1ff7923a7432c91ba90c49f02e', '1701925326485', '2023-12-07 03:10:06', '2023-12-07 04:48:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `labels`
--
ALTER TABLE `labels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `overviews`
--
ALTER TABLE `overviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `areas`
--
ALTER TABLE `areas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `labels`
--
ALTER TABLE `labels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
