-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2023 at 05:24 PM
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
('004f16aa-2936-4f69-902a-e114a3032e7d', '4 triệu/tháng', '20m2', 'Hôm nay', '83144', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('02b50508-b8b2-4706-8f42-26cbefe708fd', '8 triệu/tháng', '80m2', 'Hôm nay', '282621', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('09ba9402-6786-4fcf-a1dc-4996598314c8', '20 triệu/tháng', '300m2', 'Hôm nay', '604998', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('367a0f80-6184-470f-ac37-4cf6e190d75d', '2 triệu/tháng', '16m2', 'Hôm nay', '605524', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('427a6116-53ea-43f1-8cc9-50605c983f70', '3.3 triệu/tháng', '10m2', '1 giờ trước', '283266', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
('0c338459-e0e5-4928-b141-f15cba1546a6', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1695621179/toystore/rnddcithaumuhtumpxzo.png\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1695620383/toystore/v0i7rqnjbdt5i8ihskbl.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1695619771/toystore/gswigkl2oh8lqb46vrth.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1695620315/toystore/n1btvqnlgphxkzo3sfeu.jpg\"]', '2023-11-11 05:02:39', '2023-11-11 05:02:39');

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
(1, 'OAHN', 'Cho thuê phòng trọ Quận Tân Bình', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(2, 'OUHO', 'Cho thuê nhà Quận Gò Vấp', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(3, 'OOPN', 'Cho thuê phòng trọ Quận 7', '2023-11-11 05:02:39', '2023-11-11 05:02:39'),
(4, 'ONAB', 'Cho thuê mặt bằng Quận Tân Bình', '2023-11-11 05:02:39', '2023-11-11 05:02:39');

-- --------------------------------------------------------

--
-- Table structure for table `overviews`
--

CREATE TABLE `overviews` (
  `id` varchar(255) NOT NULL,
  `area` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `expired` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `overviews`
--

INSERT INTO `overviews` (`id`, `area`, `type`, `expired`, `createdAt`, `updatedAt`) VALUES
('01d9b2f4-d055-453a-bf0e-c94584e6c974', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('04932302-4255-4caa-926a-1d2b376d08b9', 'Cho thuê căn hộ mini Hồ Chí Minh', 'Cho thuê căn hộ', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('09d612db-2b96-4c7f-940a-32579939f38f', 'Cho thuê căn hộ Hồ Chí Minh', 'Cho thuê căn hộ', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('1195eea1-543d-4bc9-80ef-e4de17534eb8', 'Cho thuê căn hộ mini Hồ Chí Minh', 'Cho thuê căn hộ mini', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('126d6dae-dd28-45da-9945-0ab61f348919', 'Cho thuê nhà Hồ Chí Minh', 'Nhà thuê nguyên căn', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('13c421db-5484-4131-a1c9-2b5d3d5c9ff7', 'Cho thuê mặt bằng Hồ Chí Minh', 'Cho thuê mặt bằng', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
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
  `reviewId` varchar(255) DEFAULT NULL,
  `priceNumber` float DEFAULT NULL,
  `areaNumber` float DEFAULT NULL,
  `status` enum('pending','active') NOT NULL DEFAULT 'pending',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `labelCode`, `address`, `attributesId`, `categoryCode`, `priceCode`, `areaCode`, `provinceCode`, `description`, `userId`, `overviewId`, `imagesId`, `reviewId`, `priceNumber`, `areaNumber`, `status`, `createdAt`, `updatedAt`) VALUES
('10a3a6c8-1ad1-4971-8896-9e730b65a507', 'PHÒNG TRỌ ĐẦY ĐỦ TIỆN NGHI RIÊNG TƯ AN NINH 24/24', 'OAHN', 'Địa chỉ: 50 Đường Phạm Cự Lượng, Phường 2, Quận Tân Bình, Hồ Chí Minh', '004f16aa-2936-4f69-902a-e114a3032e7d', 'CTPT', '3U5N', '2UMD', 'CUID', '[\"Phòng trọ đầy đủ tiện nghi riêng tư an ninh 24/24.\",\"KTX, phòng trọ cao cấp ngay Phổ Quang (50 Phạm Cự Lượng)\",\"Xách vali vào ở ngay.\",\"Vị Trí Trung Tâm Quận tân Bình\",\"Ngay bệnh viện Tâm Anh\",\"Ưu đãi tháng đầu chỉ còn 1.400.000đ cho 10 bạn đăng kí sớm nhất\",\"Giá bình thường các tháng 1tr6/tháng/người (Bao chi phí điện nước, wifi, máy lạnh, nước uống, rác, ).\",\"Vị trí đẹp thuận lợi:\",\"- Thuận tiện di chuyển sân bay, Cộng Hòa, Hoàng Hoa Thám, Ngã Tư Phú Nhuận, Quận 1, Quận 11, Quaanj 10...\",\"Phòng được trang bị sẵn đầy đủ tiện ích:\",\"- Giường riêng biệt, nệm cao su + drap.\",\"- Tủ quần áo, tủ đồ riêng.\",\"- Đèn học, ổ cắm điện.\",\"- WC riêng, sạch sẽ.\",\"- Khu vực bếp nấu ăn chung (Đầy đủ dụng cụ - lò vi sóng - bếp - xoong nồi... ).\",\"- Nước uống I - On miễn phí\",\"- Wifi siêu tốc.\",\"- Ra vào cửa vân tay.\",\"- Bảo vệ, quản lý 24/7.\",\"- Dọn vệ sinh hằng ngày\",\"- Thang máy, máy giặt, nơi phơi đồ riêng.\",\"- Hệ thống camera an ninh.\",\"- Chỗ sinh hoạt luôn được vệ sinh sạch sẽ.\",\"Địa chỉ: Cs1: 50 Phạm Cự Lượng, Phường 2, Tân Bình\",\"CS2: 69/38/11 Nguyễn Gia Trí, P. 25, Bình Thạnh..\",\"CS3: 60/18A Huỳnh Khương An, Phường 5, Gò Vấp.\",\"Liên Hệ: 0896.119.779 ( Zalo + SDT )\"]', 'f2a0c343-dce5-46aa-8543-dfb406026699', '01d9b2f4-d055-453a-bf0e-c94584e6c974', '005c6702-48be-41d8-916e-6f82138ece26', NULL, 4, 20, 'active', '2023-11-09 14:24:54', '2023-11-09 14:24:54'),
('1233ee51-a501-4fd2-9694-d3af48622623', 'Nhà cấp 4 nguyên căn, 47/7 đường Số 2, Quận 2 - Ngay cầu SG', 'OQMN', 'Địa chỉ: 2, Phường Bình An, Quận 2, Hồ Chí Minh', '02b50508-b8b2-4706-8f42-26cbefe708fd', 'NCT', '7U0N', '7UMD', 'CUID', '[\"- Nhà cấp 4 nguyên căn (80m2) + gác lửng (20m2).\",\"- Đường container vào được cách nhà 10m, hẻm xe 6 chỗ vào được.\",\"- Khu dân cư trí thức, rất ít nhà cho thuê.\",\"- Cả Quận 2 (Tp Thủ Đức) không tìm được căn nào tốt hơn, không tin cứ đến check.\",\"- Ở là thích, phù hợp gia đình hoặc nhóm từ 4 - 6 người.\",\"- Quyết định nhanh thì còn, chậm thì vào ô mất lượt.\",\"- Có chỗ tập thể dục, trẻ con vui chơi siêu thích.\",\"- Trong vòng bán kính 200m có Siêu thị Co. Oop, Big C, Metro + 1 chợ truyền thống.\",\"- 02 Trường mầm non cách nhà 10 m, tiểu học, trung học cơ sở, phổ thông cách nhà 200m.\",\"- Công viên gần nhà có 05 công viên (bán kính 200m) + công viên Vinhome (qua cầu Sài gòn) - người lớn, trẻ con có full chỗ vui chơi.\",\"- Có thể dọn vào ở ngay, hợp đồng từ 12 tháng trở lên.\",\"- Gọi trực tiếp để xem nhà, không tiếp trung gian.\",\"- Liên hệ: 093 848 5116 (Cô Luật).\"]', 'f2a0c343-dce5-46aa-8543-dfb406026699', '126d6dae-dd28-45da-9945-0ab61f348919', '00be6b9a-34d0-4949-9454-7a3f9bb8dbde', NULL, 8, 80, 'active', '2023-11-09 14:24:54', '2023-11-09 14:24:54'),
('14570cbc-c22e-4c66-b114-20fee1eb113f', 'Phòng 2 triệu tại q7, phòng mới, yên tĩnh, phòng riêng biệt, giờ giấc tự do', 'OOPN', 'Địa chỉ: Phường Phú Mỹ, Quận 7, Hồ Chí Minh', '367a0f80-6184-470f-ac37-4cf6e190d75d', 'CTPT', '2U3N', 'ON2E', 'CUID', '[\"Phòng trọ giá bình dân tại Q7\",\"▪︎ phòng 1tr6 không có gác ( có giường)\",\"▪︎ phòng 1tr9 có gác\",\"▪︎ phòng 2tr có gác, có ban công\",\"Địa chỉ: hẻm 77/49A đường chuyên dùng 9, phú mỹ q7, tphcm, ( gần siêu thị Coopmart)\",\"Phòng có vệ sinh và nấu ăn riêng biệt, không chung chủ\",\"phòng theo thiết kế cầu thang dễ đi, phòng nhỏ xinh, sạch sẽ, an ninh, phòng đã gắn 1 số thiết bị cần sử dụng như: gương, chỗ để bàn chài đánh răng, móc, có chỗ nấu ăn, kệ chén...\",\"điện 3/kg, nước 20khoi, rác 20k, wifi miễn phí, nhà xe có bảo vệ trông nom\",\"- Giờ giấc tự do\",\"- Điện thoại: 0909634270 Kim Cúc\",\"- Lưu ý: phòng chỗ mình k nuôi thú cưng, k kéo bạn bè về ăn nhậu hát hò.\",\"Cọc 1 tháng\"]', 'f2a0c343-dce5-46aa-8543-dfb406026699', '01d9b2f4-d055-453a-bf0e-c94584e6c974', '0b2f0453-fb7b-49a8-9d0a-0f9b4dc91c2f', NULL, 2, 16, 'active', '2023-11-09 14:24:54', '2023-11-09 14:24:54'),
('2ade5f5e-2bf3-4604-9522-14620c9cc81c', 'Nhà nguyên căn 1 trệt HXH 8M 269/45 Phan Huy Ích, P.14, Q.Gò Vấp, DT: 4X14M, 2PN - Tiện ở, Làm VP hoặc KD Online', 'OUHO', 'Địa chỉ: 269/45 Phan Huy Ích, Phường 14, Quận Gò Vấp, Hồ Chí Minh', '09ba9402-6786-4fcf-a1dc-4996598314c8', 'NCT', 'EU5N', 'EN9E', 'CUID', '[\"Cho thuê nhà nguyên căn thiết kế đẹp hoàn hảo hẻm 1 trục xe tải 8m 269/45 Phan Huy Ích, Phường 14, Quận Gò Vấp, TP. HCM. (Hẻm 1 trục 2 xe hơi tránh nhau cách Phan Huy Ích 50m)\\\",\\\"- DT: 4 x 14m, gồm: 1 trệt.\\\",\\\"+ 2 Phòng ngủ rộng thiết kế rất đẹp mới hoàn toàn, WC riêng\\\",\\\"+ Phòng khách hoặc mặt bằng để mở văn phòng kinh doanh rất rộng rãi.\\\",\\\"+ Nhà thiết kế sang trọng, hiện đại, cửa, cầu thang gỗ sang trọng.\\\",\\\"+ Khu dân cư an ninh, đông đúc, hẻm rộng 8m ô tô ra vào thoải mái.\\\",\\\"+ Rất tiện lợi cho gia đình ở, mở văn phòng công ty hay kinh doanh online ...\\\",\\\"Giá chỉ: 7.5 triệu/tháng (hình ảnh thật).\\\",\\\"LH: 0937554570 A. Hoàng.\\\",\\\"Tìm kiếm theo từ khóa: Cho thuê nhà phường 14 quận Gò Vấp , Cho thuê nhà đường Phan Huy Ích , Cho thuê nhà đường Phan Huy Ích quận Gò Vấp , Cho thuê nhà phường 14 , Cho thuê nhà đường Phan Huy Ích phường 14, Cho thuê nhà quận Gò Vấp, Nhà cho thuê Quận Gò Vấp, cho thue nha quan go vap.\"]', 'f2a0c343-dce5-46aa-8543-dfb406026699', '126d6dae-dd28-45da-9945-0ab61f348919', '0bd0e6a2-528a-43b8-8dbf-681df86e5d7e', NULL, 20, 300, 'active', '2023-12-07 16:38:41', '2023-12-07 16:38:41'),
('379b5054-7219-44af-98df-a4e378f7a471', 'Phòng trọ sạch sẽ, quận Tân Bình', 'OAHN', '449/17, Trường Chinh, Phường 14, Quận Tân Bình, TP Hồ Chí Minh', '427a6116-53ea-43f1-8cc9-50605c983f70', 'CTPT', '3U5N', 'ON2E', 'CUID', '[\"Tiện ích đầy đủ, có thang máy, máy giặt, máy lạnh\"]', 'f96da284-78dd-4fe1-89bc-245fc47890de', '	\r\n01d9b2f4-d055-453a-bf0e-c94584e6c974', '0c338459-e0e5-4928-b141-f15cba1546a6', NULL, 3, 10, 'active', '2023-12-07 23:13:00', '2023-12-07 00:00:00');

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
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` varchar(255) NOT NULL,
  `postId` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `star` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

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
('20231110110417-create-province.js'),
('20231207094119-create-review.js');

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
  `role` enum('user','admin') DEFAULT 'user',
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
('f2a0c343-dce5-46aa-8543-dfb406026699', 'Đinh Minh Hiếu', '0384029072', 'muradryomalqm@gmail.com', '$2b$12$LD4UdP46ApObxNMbFHJQtufbdZvzFU1.G7hSF0gS5Vq9MRuuS7SHa', NULL, NULL, NULL, 'user', NULL, '1701951663972', NULL, NULL, '2023-12-07 10:13:08', '2023-12-07 12:21:03'),
('f96da284-78dd-4fe1-89bc-245fc47890de', 'Lê Tuấn Kiệt', '0357725474', 'ltnkietviii@gmail.com', '$2b$12$7m0Eu7K7ON9LuloWuFP0.O6PO9EziN0lJivIqFTb9GMRsKiHUFS.G', NULL, NULL, NULL, 'admin', NULL, '1701950799542', 'f9b666a7e640e9c041477ef4ca97278fa7a36b234bc4994af4929acf052a3acf', '1701950848410', '2023-12-07 10:13:52', '2023-12-07 12:07:23');

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
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
