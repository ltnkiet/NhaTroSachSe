-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2024 at 06:45 PM
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
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `areas`
--

INSERT INTO `areas` (`id`, `code`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 'ON2E', 'Dưới 20m', '2023-12-13 01:13:27', '2023-12-13 01:13:27.897'),
(2, '2UMD', 'Từ 20m - 30m', '2023-12-13 01:13:27', '2023-12-13 01:13:27.897'),
(3, '3UMD', 'Từ 30m - 50m', '2023-12-13 01:13:27', '2023-12-13 01:13:27.897'),
(4, '5UMD', 'Từ 50m - 70m', '2023-12-13 01:13:27', '2023-12-13 01:13:27.897'),
(5, '7UMD', 'Từ 70m - 90m', '2023-12-13 01:13:27', '2023-12-13 01:13:27.897'),
(6, 'EN9E', 'Trên 90m', '2023-12-13 01:13:27', '2023-12-13 01:13:27.897');

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` varchar(255) NOT NULL,
  `price` varchar(255) DEFAULT NULL,
  `acreage` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`id`, `price`, `acreage`, `createdAt`, `updatedAt`) VALUES
('004f16aa-2936-4f69-902a-e114a3032e7d', '4 triệu/tháng', '20m2', '2023-12-12 23:26:03', '2024-01-17 15:45:04.000'),
('02b50508-b8b2-4706-8f42-26cbefe708fd', '8 triệu/tháng', '80m2', '2023-12-12 23:26:03', '2024-01-12 13:08:42.000'),
('050f2979-752e-4dbd-90fe-1c289266dd6a', '10 triệu/tháng', '50m2', '2024-01-12 14:39:47', '2024-01-12 14:39:47.000'),
('09ba9402-6786-4fcf-a1dc-4996598314c8', '20 triệu/tháng', '300m2', '2023-12-12 23:26:03', '2023-12-12 23:26:03.549'),
('0ad96ac3-38fb-43ba-aab6-a9244d1c90d3', '1 triệu/tháng', '20m2', '2024-03-11 16:37:03', '2024-03-11 16:37:03.000'),
('119eb651-0c76-4595-bdd2-2519b4120e06', '22.22 triệu/tháng', '55m2', '2024-03-12 17:51:50', '2024-03-12 17:51:50.000'),
('13c3042d-313f-4154-bdd6-1aeeada09207', '104 triệu/tháng', '24m2', '2024-03-12 15:27:19', '2024-03-12 15:48:05.000'),
('18e24082-a365-481d-a714-70749474dee0', '20 triệu/tháng', '40m2', '2023-12-26 10:54:02', '2023-12-26 10:54:02.000'),
('260e9a62-941d-42fc-8922-bb0cdd0aadb6', '12.222222 triệu/tháng', '12m2', '2024-01-19 14:12:52', '2024-01-19 14:12:52.000'),
('367a0f80-6184-470f-ac37-4cf6e190d75d', '2 triệu/tháng', '16m2', '2023-12-12 23:26:03', '2024-01-12 13:09:32.000'),
('37cdd89f-7e65-42aa-aef2-bc3d8bb550fd', '40 triệu/tháng', '40m2', '2023-12-30 02:54:27', '2023-12-30 02:54:27.000'),
('40032337-8186-43da-911a-bd12646e33ad', '3 triệu/tháng', '10m2', '2024-01-17 17:01:01', '2024-01-17 17:01:01.000'),
('445cb930-0765-40c0-8897-b4466aecbb35', '50 triệu/tháng', '200m2', '2024-01-19 14:08:21', '2024-01-19 14:08:21.000'),
('46b37db8-9542-43bd-a66f-93c9bda3aaa5', '3.3 triệu/tháng', '20m2', '2024-01-11 12:42:03', '2024-01-17 15:49:25.000'),
('523f2b58-10f9-44ae-ba5f-3ba9c478a2bc', '100 triệu/tháng', '200m2', '2024-03-11 16:31:14', '2024-03-11 16:31:14.000'),
('58f014d4-e50b-46f5-a53c-a7a9c0b0a64b', '3.5 đồng/tháng', '23m2', '2024-03-10 17:24:33', '2024-03-10 17:24:33.000'),
('5ce022d5-59ac-4ea1-aaea-66956732b9b9', '1.2 triệu/tháng', '12m2', '2024-01-19 14:25:55', '2024-01-19 14:25:55.000'),
('61872afe-c199-453c-9b4e-d64d25e2689b', '50 triệu/tháng', '80m2', '2024-01-17 16:45:14', '2024-03-12 15:58:09.000'),
('632ab6d6-6ffe-46b9-ab46-c5e7fd2997f7', '20 triệu/tháng', '20m2', '2024-03-11 17:17:31', '2024-03-11 17:17:31.000'),
('7438cb1e-5c98-4297-b15b-3267f31daa80', '3.3 triệu/tháng', '20m2', '2024-01-10 15:44:09', '2024-01-25 08:48:57.000'),
('754ed003-c157-4b33-af28-96f77b06e473', '10 triệu/tháng', '50m2', '2024-01-12 10:41:30', '2024-01-12 14:06:28.000'),
('77a6073c-0e3a-4777-ba93-d02f9c9e0f52', '3 triệu/tháng', '30m2', '2024-01-03 14:10:11', '2024-01-03 14:10:11.000'),
('7957ffb3-b84f-41b4-b1db-29815a521939', '1 triệu/tháng', '20m2', '2024-01-04 08:46:45', '2024-01-04 08:46:45.000'),
('7cf2de39-b543-4e97-a055-d4eeb8127641', '120000 đồng/tháng', '12m2', '2024-01-17 17:01:27', '2024-01-17 17:01:27.000'),
('8e77c383-af11-4cb2-af44-733a7d97ea90', '10 triệu/tháng', '50m2', '2024-01-12 10:45:55', '2024-01-12 10:45:55.000'),
('aaa8079f-dc60-496f-a2e8-eb45cb578699', '30 triệu/tháng', '60m2', '2023-12-30 02:40:01', '2023-12-30 02:40:01.000'),
('ba8aa4ec-db61-4cc4-b0ff-6d88c251e894', '20000 đồng/tháng', '50m2', '2023-12-30 02:35:37', '2023-12-30 02:35:37.000'),
('c6334813-ab13-40b3-a729-8ebc89ea547a', '22.22 triệu/tháng', '55m2', '2024-03-12 15:54:17', '2024-03-12 17:59:37.000'),
('c64868ca-de7e-464e-8783-a47e9f05cbd6', '22 triệu/tháng', '42m2', '2024-03-12 15:17:47', '2024-03-12 15:50:47.000'),
('ca7eeed0-b9b6-4578-be12-2fa9f58afecc', '50 triệu/tháng', '200m2', '2024-01-23 10:57:16', '2024-02-28 11:26:34.000'),
('d40f4a88-0614-429a-90a3-88701574416e', '5 triệu/tháng', '50m2', '2024-03-10 17:27:18', '2024-03-11 10:37:19.000'),
('da844fe3-9471-4ec2-bedd-1bb2e71d19ac', '100 triệu/tháng', '50000m2', '2023-12-28 09:57:49', '2023-12-28 09:57:49.000'),
('f226d0b7-3060-4a01-85fe-23185283c185', '200 triệu/tháng', '2000m2', '2024-01-19 14:10:03', '2024-01-19 14:10:03.000');

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
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `code`, `value`, `header`, `subheader`, `createdAt`, `updatedAt`) VALUES
(1, 'CTCH', 'Cho thuê căn hộ', 'Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, Mới Nhất 2024', 'Cho thuê căn hộ - Kênh đăng tin cho thuê căn hộ số 1: giá rẻ, chính chủ, đầy đủ tiện nghi. Cho thuê chung cư với nhiều mức giá, diện tích cho thuê khác nhau.', '2023-12-12 23:26:56', '2023-12-12 23:26:56.625'),
(2, 'CTMB', 'Cho thuê mặt bằng', 'Cho Thuê Mặt Bằng, Cho Thuê Văn Phòng, Cửa Hàng, Kiot, Mới Nhất 2024', 'Cho thuê mặt bằng - Kênh đăng tin cho thuê mặt bằng, cho thuê cửa hàng, cho thuê kiot số 1: giá rẻ, mặt tiền, khu đông dân cư, phù hợp kinh doanh.', '2023-12-12 23:26:56', '2023-12-12 23:26:56.625'),
(3, 'CTPT', 'Cho thuê phòng trọ', 'Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2024', 'Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất năm 2024. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.', '2023-12-12 23:26:56', '2023-12-12 23:26:56.625'),
(4, 'NCT', 'Nhà cho thuê', 'Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2024', 'Cho thuê nhà nguyên căn - Kênh đăng tin cho thuê nhà số 1: giá rẻ, chính chủ, miễn trung gian, đầy đủ tiện nghi, mức giá, diện tích cho thuê khác nhau.', '2023-12-12 23:26:56', '2023-12-12 23:26:56.625'),
(15, 'TNOG', 'Tìm người ở ghép', 'Tìm Người Ở Ghép, Tìm Nam Ở Ghép, Tìm Nữ Ở Ghép, Mới Nhất 2024', 'Cho thuê căn hộ - Kênh đăng tin cho thuê căn hộ số 1: giá rẻ, chính chủ, đầy đủ tiện nghi. Cho thuê chung cư với nhiều mức giá, diện tích cho thuê khác nhau.', '2024-03-20 00:27:05', '2024-03-20 00:27:05.000');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` varchar(255) NOT NULL,
  `image` longtext DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `image`, `createdAt`, `updatedAt`) VALUES
`('005c6702-48be-41d8-916e-6f82138ece26', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/2_1660029255.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/4_1660029256.jpg\"]', '2023-12-12 23:28:19', '2024-01-17 15:45:04.000'),
('00be6b9a-34d0-4949-9454-7a3f9bb8dbde', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/5021c4a9a35c45021c4d_1658997058.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/toa-nha-52_1658997059.jpg\"]', '2023-12-12 23:28:19', '2024-01-12 13:08:42.000'),
('00da55c0-5363-4623-a26e-b734bfd0122b', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1710233647/nhatrosachse/exzs6vb2by7lnzlbyx1a.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710233648/nhatrosachse/lsgl9wnqfcndvlpwqnyk.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710233649/nhatrosachse/hnikepea3wquxsafxkme.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710233651/nhatrosachse/brnce1mk7lgf2d8skll2.jpg\"]', '2024-03-12 17:51:50', '2024-03-12 17:51:50.000'),
('02694872-9c58-4367-b11f-b269bb610d5c', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1710066417/nhatrosachse/vrgmtsi1tq6nlxu46rbb.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710066420/nhatrosachse/tv28pkfck4v06jtwboe9.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710066423/nhatrosachse/vufiejlzhpl9aegwucsp.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710066430/nhatrosachse/xbbigqr6jedcpy8bkwfm.jpg\"]', '2024-03-10 17:27:18', '2024-03-11 10:37:19.000'),
('073f4f58-6cd4-402e-bcf2-e933001d5280', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1705484533/nhatrosachse/lflrfjwufedubf1zxsae.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705484534/nhatrosachse/hhiz641jtzrxe9zdlhrp.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705484535/nhatrosachse/m6gm46drku8nbtc01l8d.jpg\"]', '2024-01-10 15:44:09', '2024-01-25 08:48:57.000'),
('0b2f0453-fb7b-49a8-9d0a-0f9b4dc91c2f', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/d16e16a95147ad19f45656_1660100664.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/8e3cfdecba02465c1f1355_1660100658.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/68bc8867cf8933d76a9857_1660100660.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/b814b5c8f2260e78573758_1660100662.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/04/25/b813c8f58f1b73452a0a60_1650874569.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/04/25/b54529b46e5a9204cb4b61_1650874571.jpg\"]', '2023-12-12 23:28:19', '2024-01-12 13:09:32.000'),
('0bd0e6a2-528a-43b8-8dbf-681df86e5d7e', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/photo-2022-08-08-185454-result_1659959756.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153410-8805-wm-1-result_1659959755.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153411-4b75-wm-result_1659959755.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153424-6c25-wm-result_1659959755.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153424-0984-wm-result_1659959755.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153424-eea5-wm-result_1659959756.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153425-84fb-wm-result_1659959756.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153518-e5d4-wm-result_1659959756.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/photo-2022-08-08-185454-result_1659959756.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20210106153410-8805-wm-1-result_1659959755.jpg\"]', '2023-12-12 23:28:19', '2023-12-12 23:28:19.334'),
('0f13fd4a-182f-4eae-bd9f-51f2a99e2382', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1710232036/nhatrosachse/wntjjy5xonq4fgjvhnfk.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710232037/nhatrosachse/pzh4wui7hpdsswjvdcss.jpg\"]', '2024-03-12 15:27:19', '2024-03-12 15:48:05.000'),
('1ad8f34c-4138-4dff-9b1c-a410afb6e1ac', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1710231456/nhatrosachse/j1majpstdd5t9sya77rf.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710231457/nhatrosachse/mol7a0pkxw8rcm2e4dhp.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710231459/nhatrosachse/czhydstdnx439ntytpuc.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710231466/nhatrosachse/zurtvqusfwgrct59vk2a.jpg\"]', '2024-03-12 15:17:47', '2024-03-12 15:50:47.000'),
('1ee8a3b3-671e-4856-8d24-5e7de339c770', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1705648369/nhatrosachse/gpoqoqdzm1jmka7c1kmo.jpg\"]', '2024-01-19 14:12:52', '2024-01-19 14:12:52.000'),
('2622a08b-ca67-4956-8bbc-f2ae1a989a1e', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1705649152/nhatrosachse/qfzxicntpprs4detzpfc.jpg\"]', '2024-01-19 14:25:55', '2024-01-19 14:25:55.000'),
('3a0cea6f-1457-4519-9345-74245cbae0d7', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1704951718/nhatrosachse/ymvdet7jcoqdto1gyzao.png\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705045185/nhatrosachse/oibupcnjlahmesxaa0qm.png\"]', '2024-01-12 14:39:47', '2024-01-12 14:39:47.000'),
('40cbcccb-c792-4d97-9505-c8984dd8c131', '[\\\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/03/507ce676-0681-4fe6-bac3-55a7eef70fc3_1656803285.jpg\\\",\\\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/03/f6480ee4-11fc-453b-882b-25f03a2bd77e_1656803279.jpg\\\"]', '2024-03-10 17:18:34', '0000-00-00 00:00:00.000'),
('42398177-ecd4-4297-aa2d-a1ab663147e1', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1705485685/nhatrosachse/rqqs59syflifbht7uxgi.jpg\"]', '2024-01-17 17:01:27', '2024-01-17 17:01:27.000'),
('4d1ed4b7-368c-4787-8a48-572c585dd821', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1705485638/nhatrosachse/yjoq0ooiquthest24s6o.jpg\"]', '2024-01-17 17:01:01', '2024-01-17 17:01:01.000'),
('66099f36-0895-40a3-9bd4-a40e28695969', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1710152247/nhatrosachse/edmiqukzuel3wwcpdr7o.jpg\"]', '2024-03-11 17:17:31', '2024-03-11 17:17:31.000'),
('6cbb5e53-9b30-45a2-9a78-8667507efd13', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1710149468/nhatrosachse/btx42hywsbjjinyhqc1p.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710149469/nhatrosachse/usreurubd7aygvxxt1hm.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710149470/nhatrosachse/r7skcnb69uzcx30zdnnq.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710149471/nhatrosachse/rqkx7kqgpjp13yehou5x.jpg\"]', '2024-03-11 16:31:14', '2024-03-11 16:31:14.000'),
('77fcaaef-0be7-41fd-becb-ed201a382cd4', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1710149821/nhatrosachse/zjwozurgnw8jfmyon90e.jpg\"]', '2024-03-11 16:37:03', '2024-03-11 16:37:03.000'),
('88ea3743-8650-4ec9-a083-172d9bfc43a9', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1705484709/nhatrosachse/tsqg2rgnhmprxmucdkeo.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705484710/nhatrosachse/ebjogzxr8ux5buc2co0h.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705484711/nhatrosachse/s3pyxh4o5k5brkueura8.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705484712/nhatrosachse/j0ln8aa0ml7ba0mimzdm.jpg\"]', '2024-01-17 16:45:14', '2024-03-12 15:58:09.000'),
('93e04a99-9f58-4609-9129-b0ce375941d3', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1705648200/nhatrosachse/ifw23fqrtrz9tcv4buc9.jpg\"]', '2024-01-19 14:10:03', '2024-01-19 14:10:03.000'),
('a9c093f6-f889-4bf9-8e13-9305477d2d1b', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1704951717/nhatrosachse/f3qy1buhw2hr1bpr9tkx.png\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1704951718/nhatrosachse/ymvdet7jcoqdto1gyzao.png\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1704951719/nhatrosachse/my9sv6iimn0xj2fwwypk.png\"]', '2024-01-12 10:45:55', '2024-01-12 10:45:55.000'),
('bac8ada7-d1dc-4e6f-9283-6ca4c9b8d2fb', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1705044147/nhatrosachse/pmrq6petbp8zvjhq7to0.png\"]', '2024-01-11 12:42:03', '2024-01-17 15:49:25.000'),
('cb4f4129-ba74-4e85-98ab-53f1978945cf', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1705648092/nhatrosachse/sef9j4cwmchfznvfqp7v.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705648093/nhatrosachse/qvhscp8gxbqaojt7neyr.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705648094/nhatrosachse/rr1nyqgne94tv2iyz13n.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705648095/nhatrosachse/uualc8hbkbozycej8ca2.jpg\"]', '2024-01-19 14:08:21', '2024-01-19 14:08:21.000'),
('cf501e89-af96-46d5-89c9-463ed466b8b0', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1710233647/nhatrosachse/exzs6vb2by7lnzlbyx1a.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710233648/nhatrosachse/lsgl9wnqfcndvlpwqnyk.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710233649/nhatrosachse/hnikepea3wquxsafxkme.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710233651/nhatrosachse/brnce1mk7lgf2d8skll2.jpg\"]', '2024-03-12 15:54:17', '2024-03-12 17:59:37.000'),
('d0b79f4a-adb1-440d-8687-e6503122df6d', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1704951718/nhatrosachse/ymvdet7jcoqdto1gyzao.png\"]', '2024-01-12 10:41:30', '2024-01-12 14:06:28.000'),
('d534d018-8e8a-4da9-b327-b0f1eb2144b0', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1705982176/nhatrosachse/yop5xa2gmvmhke8bg811.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705982181/nhatrosachse/adkh2zvpqq8urqfbevze.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705982186/nhatrosachse/w9yqhqpplutnqzdj5b7y.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1705982192/nhatrosachse/yh6djxqkjv9uhhphynhj.jpg\"]', '2024-01-23 10:57:16', '2024-02-28 11:26:34.000'),
('f83aae27-00f0-4fa7-b2d7-a9ce25494fe3', '[\"https://res.cloudinary.com/ltnkiet/image/upload/v1710066252/nhatrosachse/s08y4fn2czswgw29f6wj.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710066254/nhatrosachse/zpdcxp3ilkueins9jro9.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710066257/nhatrosachse/ka3vzt6hoofhsxpiid4o.jpg\",\"https://res.cloudinary.com/ltnkiet/image/upload/v1710066259/nhatrosachse/fedeurpnpakthnbosrmt.jpg\"]', '2024-03-10 17:24:33', '2024-03-10 17:24:33.000')`;

-- --------------------------------------------------------

--
-- Table structure for table `labels`
--

CREATE TABLE `labels` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `labels`
--

INSERT INTO `labels` (`id`, `code`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 'OAHN', 'Cho thuê phòng trọ Quận Tân Bình', '2023-12-12 23:28:51', '2023-12-12 23:28:51.288'),
(2, 'OUHO', 'Cho thuê nhà Quận Gò Vấp', '2023-12-12 23:28:51', '2023-12-12 23:28:51.288'),
(3, 'OOPN', 'Cho thuê phòng trọ Quận 7', '2023-12-12 23:28:51', '2023-12-12 23:28:51.288'),
(4, 'ONAB', 'Cho thuê mặt bằng Quận Tân Bình', '2023-12-12 23:28:51', '2023-12-12 23:28:51.288'),
(11, 'ACHG', 'Nhà cho thuê Quận Cầu Giấy', '2023-12-14 15:06:19', '2023-12-14 15:06:19.000'),
(12, 'ANHN', 'Nhà cho thuê Huyện Lộc Ninh', '2023-12-26 10:54:02', '2023-12-26 10:54:02.000'),
(13, 'OUMA', 'Cho thuê mặt bằng Huyện An Lão', '2023-12-28 09:57:49', '2023-12-28 09:57:49.000'),
(14, 'OUHA', 'Cho thuê phòng trọ Quận Cầu Giấy', '2023-12-30 02:35:37', '2023-12-30 02:35:37.000'),
(15, 'OECN', 'Cho thuê căn hộ Huyện Đông Sơn', '2023-12-30 02:40:01', '2023-12-30 02:40:01.000'),
(16, 'OIAO', 'Cho thuê mặt bằng Thị xã Gò Công', '2023-12-30 02:54:27', '2023-12-30 02:54:27.000'),
(17, 'OOOH', 'Cho thuê phòng trọ Phường Thắng Tam', '2024-01-03 14:10:11', '2024-01-03 14:10:11.000'),
(18, 'OEOA', 'Cho thuê phòng trọ Huyện Châu Thành', '2024-01-10 15:44:09', '2024-01-10 15:44:09.000'),
(19, 'OYHA', 'Cho thuê phòng trọ Huyện Nam Đông', '2024-01-11 12:42:03', '2024-01-11 12:42:03.000'),
(20, 'OYHO', 'Cho thuê phòng trọ Huyện Lộc Ninh', '2024-01-12 13:04:11', '2024-01-12 13:04:11.000'),
(21, 'AUON', 'Nhà cho thuê Quận 2', '2024-01-12 13:08:42', '2024-01-12 13:08:42.000'),
(22, 'OREU', 'Cho thuê phòng trọ Quận 7', '2024-01-12 13:09:32', '2024-01-12 13:09:32.000'),
(25, 'OYAH', 'Cho thuê mặt bằng Huyện Chợ Đồn', '2024-01-12 14:06:28', '2024-01-12 14:06:28.000'),
(27, 'OYHI', 'Cho thuê phòng trọ Huyện Diễn Châu', '2024-01-12 14:22:29', '2024-01-12 14:22:29.000'),
(28, 'ATHB', 'Nhà cho thuê Quận Tân Bình', '2024-01-17 16:45:14', '2024-01-17 16:45:14.000'),
(29, 'OEAN', 'Cho thuê mặt bằng Huyện Đan Phượng', '2024-01-17 17:01:01', '2024-01-17 17:01:01.000'),
(30, 'OUHP', 'Cho thuê phòng trọ Huyện Phú Tân', '2024-01-17 17:01:27', '2024-01-17 17:01:27.000'),
(31, 'ONAO', 'Cho thuê mặt bằng Thành phố Mỹ Tho', '2024-01-19 14:08:21', '2024-01-19 14:08:21.000'),
(32, 'OEAA', 'Cho thuê mặt bằng Huyện Châu Thành', '2024-01-19 14:10:03', '2024-01-19 14:10:03.000'),
(33, 'OGEA', 'Cho thuê mặt bằng Quận 1', '2024-01-19 14:12:52', '2024-01-19 14:12:52.000'),
(34, 'OPTO', 'Cho thuê mặt bằng Thành phố Long Xuyên', '2024-01-23 10:57:16', '2024-01-23 10:57:16.000'),
(35, 'OOPA', 'Cho thuê phòng trọ Quận 12', '2024-03-10 17:27:18', '2024-03-10 17:27:18.000'),
(36, 'OECH', 'Cho thuê căn hộ Huyện Chợ Mới', '2024-03-11 16:31:14', '2024-03-11 16:31:14.000'),
(37, 'OECA', 'Cho thuê căn hộ Huyện Cát Hải', '2024-03-11 16:37:03', '2024-03-11 16:37:03.000'),
(38, 'OUMC', 'Cho thuê mặt bằng Quận Cẩm Lệ', '2024-03-11 17:17:31', '2024-03-11 17:17:31.000'),
(39, 'OUMG', 'Cho thuê mặt bằng Quận Gò Vấp', '2024-03-12 15:17:47', '2024-03-12 15:17:47.000'),
(40, 'OQEN', 'Cho thuê căn hộ Quận 9', '2024-03-12 15:27:19', '2024-03-12 15:27:19.000'),
(41, 'OACA', 'Cho thuê căn hộ Quận Tây Hồ', '2024-03-12 15:54:17', '2024-03-12 15:54:17.000');

-- --------------------------------------------------------

--
-- Table structure for table `overviews`
--

CREATE TABLE `overviews` (
  `id` varchar(255) NOT NULL,
  `area` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `overviews`
--

INSERT INTO `overviews` (`id`, `area`, `type`, `createdAt`, `updatedAt`) VALUES
('01d9b2f4-d055-453a-bf0e-c94584e6c974', 'Cho thuê phòng trọ Quận Tân Bình', 'Cho thuê phòng trọ', '2023-12-12 23:29:37', '2024-01-17 15:45:04.000'),
('09cee10f-e897-40d9-9a28-cb6c8f07d6f9', 'Cho thuê căn hộ Quận 9', 'Cho thuê căn hộ', '2024-03-12 15:27:19', '2024-03-12 15:48:05.000'),
('09d612db-2b96-4c7f-940a-32579939f38f', 'Nhà cho thuê Quận 2', 'Nhà cho thuê', '2023-12-12 23:29:37', '2024-01-12 13:08:42.000'),
('1c07f73e-9b44-4223-872e-e552ca90cb67', 'Cho thuê phòng trọ Quận 7', 'Cho thuê phòng trọ', '2024-03-10 17:24:33', '2024-03-10 17:24:33.000'),
('1c898676-940d-4b17-bc44-1b2966aca065', 'Cho thuê căn hộ Quận Tây Hồ', 'Cho thuê căn hộ', '2024-03-12 15:54:17', '2024-03-12 17:59:37.000'),
('2210ccf3-b02f-45a3-8763-22b2a73091e5', 'Cho thuê căn hộ Huyện Cát Hải', 'Cho thuê căn hộ', '2024-03-11 16:37:03', '2024-03-11 16:37:03.000'),
('23d5ef14-9028-4dce-b531-1d3a1fc40003', 'Cho thuê phòng trọ Quận Tân Bình', 'Cho thuê phòng trọ', '2024-01-10 15:44:09', '2024-01-25 08:48:57.000'),
('2b40472a-24b3-42f7-b17b-0f83ffd36598', 'Cho thuê căn hộ Huyện Chợ Mới', 'Cho thuê căn hộ', '2024-03-11 16:31:14', '2024-03-11 16:31:14.000'),
('3945ce0b-e31f-4e44-b608-a0ccd8a7bace', 'Cho thuê mặt bằng Huyện An Lão', 'Cho thuê mặt bằng', '2023-12-28 09:57:49', '2023-12-28 09:57:49.000'),
('3deafbe2-57a9-4914-b609-a4ec74223301', 'Cho thuê mặt bằng Huyện Chợ Đồn', 'Cho thuê mặt bằng', '2024-01-12 10:41:30', '2024-01-12 14:06:28.000'),
('4d9771ce-c5b7-4bab-8c27-e26dc2b7d7d3', 'Cho thuê căn hộ Huyện Đông Sơn', 'Cho thuê căn hộ', '2023-12-30 02:40:01', '2023-12-30 02:40:01.000'),
('71122f10-98e0-4c22-a064-2d6f6da01e7d', 'Cho thuê phòng trọ Quận 12', 'Cho thuê phòng trọ', '2024-03-10 17:27:18', '2024-03-11 10:37:19.000'),
('71ccb2c5-732d-4399-8adf-087730852b5d', 'Cho thuê mặt bằng Huyện Chợ Đồn', 'Cho thuê mặt bằng', '2024-01-12 14:39:47', '2024-01-12 14:39:47.000'),
('72444ef5-4ac4-4881-8f25-cfd45b1bc32c', 'Cho thuê phòng trọ Quận Cầu Giấy', 'Cho thuê phòng trọ', '2023-12-30 02:35:37', '2023-12-30 02:35:37.000'),
('7ed9cac5-9ad3-4c28-8418-a5b7ac9ee871', 'Cho thuê mặt bằng Quận Cẩm Lệ', 'Cho thuê mặt bằng', '2024-03-11 17:17:31', '2024-03-11 17:17:31.000'),
('87a65a97-1b96-45fe-8699-430a3ebc8734', 'Nhà cho thuê Huyện Lộc Ninh', 'Nhà cho thuê', '2023-12-26 10:54:02', '2023-12-26 10:54:02.000'),
('8e64af35-bc53-459d-8ac6-ba15b897cf12', 'Cho thuê mặt bằng Thành phố Long Xuyên', 'Cho thuê mặt bằng', '2024-01-23 10:57:16', '2024-02-28 11:26:34.000'),
('97354231-2277-48fd-892b-459b8eb08b41', 'Nhà cho thuê Quận Tân Bình', 'Nhà cho thuê', '2024-01-17 16:45:14', '2024-03-12 15:58:09.000'),
('a093f317-4565-43ea-8377-73b4adab64ca', 'Cho thuê mặt bằng Huyện Châu Thành', 'Cho thuê mặt bằng', '2024-01-19 14:10:03', '2024-01-19 14:10:03.000'),
('aace06e3-0421-4f54-96e5-c15af3c6f47a', 'Cho thuê mặt bằng Quận Gò Vấp', 'Cho thuê mặt bằng', '2024-03-12 15:17:47', '2024-03-12 15:50:47.000'),
('b02df600-d3b6-44eb-bb1b-0e3de56c36a1', 'Cho thuê phòng trọ Huyện Phú Tân', 'Cho thuê phòng trọ', '2024-01-17 17:01:27', '2024-01-17 17:01:27.000'),
('bf8b82ac-1048-4a60-92e0-9ff4e3c64a2c', 'Cho thuê mặt bằng Huyện Đan Phượng', 'Cho thuê mặt bằng', '2024-01-17 17:01:01', '2024-01-17 17:01:01.000'),
('cc399247-90c6-41af-800d-9811038fad2c', 'Cho thuê phòng trọ Quận Hải Châu', 'Cho thuê phòng trọ', '2024-01-04 08:46:45', '2024-01-04 08:46:45.000'),
('cc6cdae3-4346-42d0-a8ee-e9a5ec2b949d', 'Cho thuê mặt bằng Thị xã Gò Công', 'Cho thuê mặt bằng', '2023-12-30 02:54:27', '2023-12-30 02:54:27.000'),
('d01e43e0-8e5d-479f-9c62-59ee35518af7', 'Cho thuê mặt bằng Quận 1', 'Cho thuê mặt bằng', '2024-01-19 14:12:52', '2024-01-19 14:12:52.000'),
('d11e765e-9c59-4e74-81ce-e48e07dedaeb', 'Cho thuê mặt bằng Quận 10', 'Cho thuê mặt bằng', '2024-01-19 14:25:55', '2024-01-19 14:25:55.000'),
('ddb7e14b-db00-4bff-a781-ef1ce2beb2ce', 'Cho thuê mặt bằng Thành phố Mỹ Tho', 'Cho thuê mặt bằng', '2024-01-19 14:08:21', '2024-01-19 14:08:21.000'),
('de5ec38a-3d26-4585-98d0-efb724c75761', 'Cho thuê phòng trọ Phường Thắng Tam', 'Cho thuê phòng trọ', '2024-01-03 14:10:11', '2024-01-03 14:10:11.000'),
('ec2ead47-56a6-4d0b-a3f5-26cf571e31c7', 'Cho thuê căn hộ Quận Tây Hồ', 'Cho thuê căn hộ', '2024-03-12 17:51:50', '2024-03-12 17:51:50.000'),
('f726114c-bc65-45b7-9bac-f1828522284b', 'Cho thuê phòng trọ Huyện Diễn Châu', 'Cho thuê phòng trọ', '2024-01-11 12:42:03', '2024-01-17 15:49:25.000');

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
  `status` enum('pending','active') DEFAULT 'pending',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `labelCode`, `address`, `attributesId`, `categoryCode`, `priceCode`, `areaCode`, `provinceCode`, `description`, `userId`, `overviewId`, `imagesId`, `reviewId`, `priceNumber`, `areaNumber`, `status`, `createdAt`, `updatedAt`) VALUES

('0888954d-6f87-4542-ba20-08e1753860f3', 'Cho thuê mặt bằng ở mặt tiền đường Nguyễn Oanh, phường 7, Gò Vấp', 'OUMG', '90 Đường Nguyễn Oanh, Phường 07, Quận Gò Vấp, Thành phố Hồ Chí Minh', 'c64868ca-de7e-464e-8783-a47e9f05cbd6', 'CTMB', 'EU5N', '3UMD', 'CHIT', 
'["Mặt bằng kinh doanh 42m^2 ở mặt tiền đường Nguyễn Oanh, phường 7, Gò Vấp","Thuận tiện buôn bán, kinh doanh nhiều ngành nghề Có sẵn đèn điện, quạt, máy lạnh","Có 1 nhà vệ sinh Dài 4m, rộng 10m Giá 22tr/tháng (thương lượng cho khách thiện chí)","Thông tin liên hệ: 0395216889"]', 
'ad9c55eb-f3fe-4774-a67c-cf18e2985113', 'aace06e3-0421-4f54-96e5-c15af3c6f47a', '1ad8f34c-4138-4dff-9b1c-a410afb6e1ac', 22, 42, 'active', '2024-03-12 15:17:47', '2024-03-12 15:55:32.000'),

('10a3a6c8-1ad1-4971-8896-9e730b65a507', 'Phòng trọ đầy đủ tiện nghi riêng tư an ninh Phạm Cự Lương', 'OUHA', '50 Đường Phạm Cự Lượng, Phường 02, Quận Tân Bình, Thành phố Hồ Chí Minh', '004f16aa-2936-4f69-902a-e114a3032e7d', 'CTPT', '3U5N', '2UMD', 'CUID', 
'["Phòng trọ đầy đủ tiện nghi riêng tư an ninh 24/24.","KTX, phòng trọ cao cấp ngay Phổ Quang (50 Phạm Cự Lượng)","Xách vali vào ở ngay.","Vị Trí Trung Tâm Quận tân Bình","Ngay bệnh viện Tâm Anh","Ưu đãi tháng đầu chỉ còn 1.400.000đ cho 10 bạn đăng kí sớm nhất","Giá bình thường các tháng 1tr6/tháng/người (Bao chi phí điện nước, wifi, máy lạnh, nước uống, rác, ).","Vị trí đẹp thuận lợi:","- Thuận tiện di chuyển sân bay, Cộng Hòa, Hoàng Hoa Thám, Ngã Tư Phú Nhuận, Quận 1, Quận 11, Quaanj 10...","Phòng được trang bị sẵn đầy đủ tiện ích:","- Giường riêng biệt, nệm cao su + drap.","- Tủ quần áo, tủ đồ riêng.","- Đèn học, ổ cắm điện.","- WC riêng, sạch sẽ.","- Khu vực bếp nấu ăn chung (Đầy đủ dụng cụ - lò vi sóng - bếp - xoong nồi... ).","- Nước uống I - On miễn phí","- Wifi siêu tốc.","- Ra vào cửa vân tay.","- Bảo vệ, quản lý 24/7.","- Dọn vệ sinh hằng ngày","\- Thang máy, máy giặt, nơi phơi đồ riêng.","- Hệ thống camera an ninh.","- Chỗ sinh hoạt luôn được vệ sinh sạch sẽ.","Địa chỉ: Cs1: 50 Phạm Cự Lượng, Phường 2, Tân Bình","CS2: 69/38/11 Nguyễn Gia Trí, P. 25, Bình Thạnh..","CS3: 60/18A Huỳnh Khương An, Phường 5, Gò Vấp.","Liên Hệ: 0896.119.779 ( Zalo + SDT )"]', 
'f2a0c343-dce5-46aa-8543-dfb406026699', '01d9b2f4-d055-453a-bf0e-c94584e6c974', '005c6702-48be-41d8-916e-6f82138ece26',  4, 20, 'active', '2023-12-12 23:33:48', '2024-03-11 19:40:36.000'),

('1233ee51-a501-4fd2-9694-d3af48622623', 'Nhà cấp 4 nguyên căn, 47/7 đường Số 2, Quận 2 - Ngay cầu SG', 'AUON', '2 Đường Phạm Ngũ Lão, Phường Bình An, Quận 2, Thành phố Hồ Chí Minh', '02b50508-b8b2-4706-8f42-26cbefe708fd', 'NCT', '7U0N', '7UMD', 'CUID', 
'["- Nhà cấp 4 nguyên căn (80m2) + gác lửng (20m2).","- Đường container vào được cách nhà 10m, hẻm xe 6 chỗ vào được.","- Khu dân cư trí thức, rất ít nhà cho thuê.","- Cả Quận 2 (Tp Thủ Đức) không tìm được căn nào tốt hơn, không tin cứ đến check.","- Ở là thích, phù hợp gia đình hoặc nhóm từ 4 - 6 người.","- Quyết định nhanh thì còn, chậm thì vào ô mất lượt.","- Có chỗ tập thể dục, trẻ con vui chơi siêu thích.","- Trong vòng bán kính 200m có Siêu thị Co. Oop, Big C, Metro + 1 chợ truyền thống.","- 02 Trường mầm non cách nhà 10 m, tiểu học, trung học cơ sở, phổ thông cách nhà 200m.","- Công viên gần nhà có 05 công viên (bán kính 200m) + công viên Vinhome (qua cầu Sài gòn) - người lớn, trẻ con có full chỗ vui chơi.","- Có thể dọn vào ở ngay, hợp đồng từ 12 tháng trở lên.","- Gọi trực tiếp để xem nhà, không tiếp trung gian.","- Liên hệ: 093 848 5116 (Cô Luật)."]', 
'f2a0c343-dce5-46aa-8543-dfb406026699', '09d612db-2b96-4c7f-940a-32579939f38f', '00be6b9a-34d0-4949-9454-7a3f9bb8dbde',  8, 80, 'active', '2023-12-12 23:33:48', '2024-03-11 19:40:38.000'),

('14570cbc-c22e-4c66-b114-20fee1eb113f', 'Phòng 2 triệu tại q7, phòng mới, yên tĩnh, phòng riêng biệt, giờ giấc tự do', 'OREU', '106 Văn Kiệt, Phường Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh', '367a0f80-6184-470f-ac37-4cf6e190d75d', 'CTPT', '2U3N', 'ON2E', 'CHIT', 
'["Phòng trọ giá bình dân tại Q7","▪︎ phòng 1tr6 không có gác ( có giường)","▪︎ phòng 1tr9 có gác","▪︎ phòng 2tr có gác, có ban công","Địa chỉ: hẻm 77/49A đường chuyên dùng 9, phú mỹ q7, tphcm, ( gần siêu thị Coopmart)","Phòng có vệ sinh và nấu ăn riêng biệt, không chung chủ","phòng theo thiết kế cầu thang dễ đi, phòng nhỏ xinh, sạch sẽ, an ninh, phòng đã gắn 1 số thiết bị cần sử dụng như: gương, chỗ để bàn chài đánh răng, móc, có chỗ nấu ăn, kệ chén...","điện 3/kg, nước 20khoi, rác 20k, wifi miễn phí, nhà xe có bảo vệ trông nom","- Giờ giấc tự do","- Điện thoại: 0909634270 Kim Cúc","- Lưu ý: phòng chỗ mình k nuôi thú cưng, k kéo bạn bè về ăn nhậu hát hò.","Cọc 1 tháng"]', 
'f2a0c343-dce5-46aa-8543-dfb406026699', '01d9b2f4-d055-453a-bf0e-c94584e6c974', '0b2f0453-fb7b-49a8-9d0a-0f9b4dc91c2f',  2, 16, 'active', '2023-12-12 23:33:48', '2024-03-11 19:40:40.000'),

('2ade5f5e-2bf3-4604-9522-14620c9cc81c', 'Nhà nguyên căn 1 trệt HXH 8M 269/45 Phan Huy Ích, P.14, Q.Gò Vấp, DT: 4X14M, 2PN - Tiện ở, Làm VP hoặc KD Online', 'OUHO', '269/45 Phan Huy Ích, Phường 14, Quận Gò Vấp, Thành phố Hồ Chí Minh', '09ba9402-6786-4fcf-a1dc-4996598314c8', 'NCT', 'EU5N', 'EN9E', 'CUID', 
'["Cho thuê nhà nguyên căn thiết kế đẹp hoàn hảo hẻm 1 trục xe tải 8m 269/45 Phan Huy Ích, Phường 14, Quận Gò Vấp, TP. HCM. (Hẻm 1 trục 2 xe hơi tránh nhau cách Phan Huy Ích 50m)","- DT: 4 x 14m, gồm: 1 trệt.","+ 2 Phòng ngủ rộng thiết kế rất đẹp mới hoàn toàn, WC riêng","+ Phòng khách hoặc mặt bằng để mở văn phòng kinh doanh rất rộng rãi.","+ Nhà thiết kế sang trọng, hiện đại, cửa, cầu thang gỗ sang trọng.","+ Khu dân cư an ninh, đông đúc, hẻm rộng 8m ô tô ra vào thoải mái","+ Rất tiện lợi cho gia đình ở, mở văn phòng công ty hay kinh doanh online ...","Giá chỉ: 7.5 triệu/tháng (hình ảnh thật).","LH: 0937554570 A. Hoàng.","Tìm kiếm theo từ khóa: Cho thuê nhà phường 14 quận Gò Vấp , Cho thuê nhà đường Phan Huy Ích , Cho thuê nhà đường Phan Huy Ích quận Gò Vấp , Cho thuê nhà phường 14 , Cho thuê nhà đường Phan Huy Ích phường 14, Cho thuê nhà quận Gò Vấp, Nhà cho thuê Quận Gò Vấp, cho thue nha quan go vap."]', 'f2a0c343-dce5-46aa-8543-dfb406026699', '09d612db-2b96-4c7f-940a-32579939f38f', '0bd0e6a2-528a-43b8-8dbf-681df86e5d7e',  20, 300, 'active', '2023-12-12 23:33:48', '2024-03-11 19:40:42.000'),

('5a6df63c-aab1-4a5f-b1a8-8225ca8acd2e', 'SHOP DIỆN TÍCH LỚN HƠN 100M2 CHO THUÊ GIÁ CHỈ 24 TRIỆU/THÁNG TẠI VHGP QUẬN 9', 'OQEN', 'D9 64 The Manhattan Vinhomes Grand Park, Phường Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh', '13c3042d-313f-4154-bdd6-1aeeada09207', 'CTCH', 'EU5N', '2UMD', 'CHIT', 
'["Loại hình: SHOPhouse , nhà phố thương mại","Giá thuê: 20 triệu đồng","Diện tích: 104m2","Tình trạng nội thất: thô","Địa chỉ: Dự án Vinhomes Grand Park - Quận 9 - TP Thủ Đức - TPHCM","Vinhomes Grand Park là nơi đáng để sống và kinh doanh vì có đầy đủ tiện ích để phục vụ cho cư dân, bãi đậu xe, hầm gửi xe, hồ bơi, khu vui chơi dành cho trẻ em, hồ cá Koi, công viên vườn Nhật Bản, an ninh, thoáng mát, khu ẩm thực chợ đêm, công viên ánh sáng, ngoài ra còn là vùng đất kinh tế tiềm năng, thuận lợi cho việc kinh doanh lợi lượng dân cư đông và nguồn cầu cao...","Liên hệ: 0 9 0 1 0 0 2 0 0 6 - Đỗ Hoàng Sin","Địa chỉ văn phòng: D9 - 64 The Manhattan - Vinhomes Grand Park - TP Thủ Đức - TPHCM","Tư vấn nhiệt tình - Uy Tín."]', 
'ad9c55eb-f3fe-4774-a67c-cf18e2985113', '09cee10f-e897-40d9-9a28-cb6c8f07d6f9', '0f13fd4a-182f-4eae-bd9f-51f2a99e2382',  104, 24, 'active', '2024-03-12 15:27:19', '2024-03-12 15:55:30.000'),

('6ef5580f-eeec-4797-9bbb-e0517555a45b', 'Phòng trọ chung cư Long Sơn mặt tiền Huỳnh Tấn Phát , Quận 7. An ninh- Thoáng mát.', 'OREU', '1349 Đường Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7, Thành phố Hồ Chí Minh', '58f014d4-e50b-46f5-a53c-a7a9c0b0a64b', 'CTPT', 'OU1N', '2UMD', 'CUID', '["Mình còn phòng master Căn hộ chung cư Long Sơn Building , Huỳnh Tấn Phát , Phú Thuận , Quận 7.","Phòng rộng 23m2 tolet riêng trong phòng cửa sổ hướng nam , có ít nội thất cơ bản ở được tầm 3 bạn, có tủ lạnh máy giặt khu phơi đồ bên ngoài chung. ( Phòng studio xung quanh trên mặt đường Huỳnh Tấn Phát này giá đã từ 5tr5-6tr5 )","Ngoài ra mình còn phòng 1tr7 -2tr4 tolet chung trong căn hộ.","Những điểm mạnh của tại chung cư là mặt tiền đường lớn thuận tiện đi lại, không ngập nước, 2 hầm xe rộng rãi để gửi ô tô và xe máy, camera an ninh từng tầng, thang thoát hiểm phòng rác phòng điện phòng nước quản lỹ riêng biệt. Đặc biệt ít khách thuê phòng đa số là cư dân thuê nguyên căn hộ nên đi lại nhanh chóng, dân trí cao. Trong căn hộ có thông gió lấy sáng , gần bờ sông nên thoáng mát nhiều gió.","- Không chung chủ, Giờ giấc tự do. Có tủ lạnh bảo quản thức ăn - nước uống và máy giặt dùng chung cho 1 căn hộ. Bảo vệ an ninh camera 24/24 ngoài hàng lang thang máy và trong căn hộ, mỗi tầng chỉ có 6 căn hộ, thiết kế căn hộ riêng biệt nên rất yên tĩnh.","Wifi 5G mạnh vi vu. Có 2 tầng hầm gửi xe.","Tiện ích ngay chung cư:","- Có 8 tầng trung tâm thương mại cho thuê phía trước.","- Kinh doanh Phòng Gym Power - Fisnet yoga, Sân chơi Gold 3D, Trung tâm anh ngữ ila, Văn phòng công ty","- Ngay cạnh Phú Mỹ Hưng, Quận 7, Co. Op Mart, Crescent Mall, Cầu Phú Mỹ,...","- Ngay mặt tiền đường Huỳnh Tấn Phát bán kính 100m xung quanh đầy đủ quắn ăn, cafe, gara, tạp hoá, siêu thị đầy đủ.","Liên hệ hoặc nhắn zalo để thêm thông tin và hẹn xem phòng.","Vui lòng đọc kỹ bài viết . Xin cảm ơn..!"]', 'f2a0c343-dce5-46aa-8543-dfb406026699', '1c07f73e-9b44-4223-872e-e552ca90cb67', 'f83aae27-00f0-4fa7-b2d7-a9ce25494fe3',  0.0000035, 23, 'active', '2024-03-10 17:24:33', '2024-03-12 20:40:37.000'),

('769f6bf1-fa76-4ea5-97c5-707e8eec5a03', 'Cho thuê nhà rộng, mặt tiền Bạch Đằng', 'ATHB', '54/37 Đường Bạch Đằng, Phường 02, Quận Tân Bình, Thành phố Hồ Chí Minh', '61872afe-c199-453c-9b4e-d64d25e2689b', 'NCT', 'EU5N', '7UMD', 'CHIT', '["Khu nhà siêu chill, view xanh mát kế công viên Gia Định","Đối diện Phi công Bay Việt, gần sân bay","Sạch sẽ, hiện đại, an toàn, thang thoát hiểm chắc chắn và nhiều góc thư giãn","Vị trí đắc địa thuận tiện di chuyển đến các khu vực lân cận."]', 'ad9c55eb-f3fe-4774-a67c-cf18e2985113', '97354231-2277-48fd-892b-459b8eb08b41', '88ea3743-8650-4ec9-a083-172d9bfc43a9',  50, 80, 'active', '2024-01-17 16:45:14', '2024-03-12 15:58:09.000'),

('9baca20d-1b53-40be-8643-8307fc4e8278', 'Chính chủ cho thuê căn 2PN, 1WC, nội thất mới, thoáng mát tại Tân Thới Hiệp quận 12!', 'OOPA', '113/62 khu phố 3 Đường Trương Thị Hoa, Phường Tân Thới Hiệp, Quận 12, Thành phố Hồ Chí Minh', 'd40f4a88-0614-429a-90a3-88701574416e', 'CTPT', '5U7N', '5UMD', 'CUID', '["Gần công viên phần mềm Quang Trung, nhà máy bia Heineken ","Diện tích 50m2","2 phòng ngủ, 1 phòng khách, 1 toliet riêng","Phòng mới, nội thất đầy đủ, mới hoàn toàn","Sử dụng khóa vân tay, có camera","Giờ giấc tự do","Có wifi","Dùng nước máy","Khu dân cư yên tĩnh, an ninh","Gia đình hoặc nhóm bạn từ 4 người ở thoải mái","Giá 5tr","Liên hệ: 0938743288 - Hưng"]', 'f2a0c343-dce5-46aa-8543-dfb406026699', '71122f10-98e0-4c22-a064-2d6f6da01e7d', '02694872-9c58-4367-b11f-b269bb610d5c',  5, 50, 'active', '2024-03-10 17:27:18', '2024-03-17 16:12:57.000'),

('a75df626-dd07-4653-93c1-a20dcb3738a6', 'KHÁCH SẠN CĂN HỘ VNAHOMES APARTHOTEL SANG TRỌNG', 'OACA', 'VNAHOMES APARTHOTEL Võng Thị, Phường Bưởi, Quận Tây Hồ, Thành phố Hà Nội', 'c6334813-ab13-40b3-a729-8ebc89ea547a', 'CTCH', 'EU5N', '5UMD', 'NTOS', '
["- Với sứ mệnh mang lại trải nghiệm lưu trú cao cấp, hoàn hảo phục vụ nhu cầu công tác, nghỉ ngơi, du lịch đến khách hàng trong và ngoài nước: Thương hiệu VNAHOMES APARTHOTEL ra đời","- Tọa lạc tại địa chỉ: Số 30 Phố Võng Thị, Phường Bưởi, Quận Tây Hồ, Thành phố Hà Nội","VNAHOMES APARTHOTEL tự tin đem đến cho Khách Hàng không gian lưu trú với mức giá phù hợp nhất ngay giữa trung tâm Quận Tây Hồ ngay cạnh Hồ Tây","- Toà nhà VNAHOMES APARTHOTEL có đầy đủ Hầm Để Xe, Sảnh Lễ Tân, Phòng Gym, Ghế Massage, Dịch vụ cho thuê xe máy, xe đạp cùng với 20 phòng khách sạn căn hộ trang bị hệ thống lọc nước toàn tòa nhà diện tích từ 35m2 đến 80m2 bao gồm các phân khúc phòng: Standard Suite (Phòng Studio 35m2)","Junior Suite (Phòng 1 khách 1 ngủ 38m2), Executive Suite (Phòng 1 khách 1 ngủ 40m2), One - Bedroom Apartment (phòng 1 khách 1 ngủ 55m2), Two - Bedroom Apartment (phòng 1 khách 2 ngủ 80m2 có phòng Xông Hơi)","- Tất cả các phòng khách sạn căn hộ được trang bị điều hòa Daikin 2 chiều, nội thất gỗ, thiết bị điện tử cao cấp: Smart Android TV, máy giặt sấy, nồi cơm điện, lò vi sóng..","Đến các đồ dùng cơ bản như cốc, chén, đĩa..","Khách hàng hoàn toàn chủ động trong việc sinh hoạt, chế biến đồ ăn..","Như trong 1 căn hộ cao cấp đi kèm với dịch vụ tiêu chuẩn khách sạn 4 sao","* Giá đặt phòng từ 799.000VNĐ - 1.699.000 VNĐ / ngày (Giá thuê tùy thuộc vào phân khúc phòng và thời điểm đặt phòng)","Khách Hàng có thể chủ động đặt phòng qua các nền tảng Booking, Agoda, Facebook..","VNAHOMES APARTHOTEL","hoặc liên hệ trưc tiếp Hotline","Nhân viên tư vấn sẽ hỗ trợ đặt phòng sớm nhất","(VNAHOMES APARTHOTEL có xuất hóa đơn công ty theo yêu cầu của quý khách)","* VNAHOMES - Hệ Thống Quản Lý Vận Hành Cho Thuê Khách Sạn Căn Hộ"]', 'ad9c55eb-f3fe-4774-a67c-cf18e2985113', '1c898676-940d-4b17-bc44-1b2966aca065', 'cf501e89-af96-46d5-89c9-463ed466b8b0', 22.22, 55, 'pending', '2024-03-12 15:54:17', '2024-03-20 00:41:16.000'),

('eb434dc2-e443-4b98-bd6c-a2e003ee7d7b', 'Nhà trọ sạch sẽ Trường Chinh', 'OUHA', '449/17 Trường Chinh, Phường 14, Quận Tân Bình, Thành phố Hồ Chí Minh', '7438cb1e-5c98-4297-b15b-3267f31daa80', 'CTPT', '3U5N', '2UMD', 'CUID', '[" Khóa cổng vân tay"," Camera an ninh"," Nước uống miễn phí"," Wifi tốc độ cao"," Cây xanh, ghế đá"," Chỗ phơi quần áo","Máy giặt trả tiền","Vệ sinh hàng ngày","N.viên trực 24/7","Kệ giày hành lang"," Chỗ đậu xe máy"," Sửa chữa nhanh"," Tiện ích thang máy"," Cấp sáng đầy đủ"]', 'ad9c55eb-f3fe-4774-a67c-cf18e2985113', '23d5ef14-9028-4dce-b531-1d3a1fc40003', '073f4f58-6cd4-402e-bcf2-e933001d5280',  3.3, 20, 'active', '2024-01-10 15:44:09', '2024-03-11 16:08:34.061'),

('f21b7e0f-5617-4e8f-8ec8-acddd325c64b', 'Lotteria Long Xuyên, Mặt tiền đường Nguyễn Trãi', 'OPTO', '92 Nguyễn Trãi, Phường Mỹ Long, Thành phố Long Xuyên, Tỉnh An Giang', 'ca7eeed0-b9b6-4578-be12-2fa9f58afecc', 'CTMB', 'EU5N', 'EN9E', 'GNIT', '["Quán nằm ngay đèn 4 ngọn. ","Phục vụ nhiệt tình. ","Mới vừa ăn xong. Ăn 4 món gà rán, mì ý, hum bơ rơ , piza nướng phô mai. ","Có bãi đậu xe máy rộng rãi. Chỗ đậu ô tô thì ko có.","Đồ ăn ở lotteria rất ngon tuy nhiên gà lại hơi bột một chút,khoai tây chiên ở đây rất là giòn nha.","Thái độ nhân viên rất là tốt lun ý.Em rất thích những anh chị ở lotteria nè.","10/10"]', 'f2a0c343-dce5-46aa-8543-dfb406026699', '8e64af35-bc53-459d-8ac6-ba15b897cf12', 'd534d018-8e8a-4da9-b327-b0f1eb2144b0',  50, 200, 'active', '2024-01-23 10:57:16', '2024-03-12 11:25:56.000');

-- --------------------------------------------------------

--
-- Table structure for table `prices`
--

CREATE TABLE `prices` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `prices`
--

INSERT INTO `prices` (`id`, `code`, `value`, `createdAt`, `updatedAt`) VALUES
  (1, 'OU1N', 'Dưới 1 triệu', '2023-12-12 23:30:47', '2023-12-12 23:30:47.220'),
  (2, '1U2N', 'Từ 1 - 2 triệu', '2023-12-12 23:30:47', '2023-12-12 23:30:47.220'),
  (3, '2U3N', 'Từ 2 - 3 triệu', '2023-12-12 23:30:47', '2023-12-12 23:30:47.220'),
  (4, '3U5N', 'Từ 3 - 5 triệu', '2023-12-12 23:30:47', '2023-12-12 23:30:47.220'),
  (5, '5U7N', 'Từ 5 - 7 triệu', '2023-12-12 23:30:47', '2023-12-12 23:30:47.220'),
  (6, '7U0N', 'Từ 7 - 10 triệu', '2023-12-12 23:30:47', '2023-12-12 23:30:47.220'),
  (7, '1E1N', 'Từ 10 - 15 triệu', '2023-12-12 23:30:47', '2023-12-12 23:30:47.220'),
  (8, 'EU5N', 'Trên 15 triệu', '2023-12-12 23:30:47', '2023-12-12 23:30:47.220');

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `code`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 'CUID', 'Hồ Chí Minh', '2023-12-12 23:31:18', '2023-12-12 23:31:18.756'),
(9, 'NTOS', 'Hà Nội', '2023-12-14 15:06:19', '2023-12-14 15:06:19.000'),
(10, 'NCPT', 'Bình Phước', '2023-12-26 10:54:02', '2023-12-26 10:54:02.000'),
(11, 'IGPT', 'Hải Phòng', '2023-12-28 09:57:49', '2023-12-28 09:57:49.000'),
(12, 'AANT', 'Thanh Hóa', '2023-12-30 02:40:01', '2023-12-30 02:40:01.000'),
(13, 'EGGT', 'Tiền Giang', '2023-12-30 02:54:27', '2023-12-30 02:54:27.000'),
(14, 'RT-U', 'Bà Rịa - Vũng Tàu', '2024-01-03 14:10:11', '2024-01-03 14:10:11.000'),
(15, 'NNAS', 'Đà Nẵng', '2024-01-04 08:46:45', '2024-01-04 08:46:45.000'),
(16, 'ANVT', 'Trà Vinh', '2024-01-10 15:44:09', '2024-01-10 15:44:09.000'),
(17, 'UHTE', 'Thừa Thiên Huế', '2024-01-11 12:42:03', '2024-01-11 12:42:03.000'),
(18, 'CNKS', 'Bắc Kạn', '2024-01-12 14:06:28', '2024-01-12 14:06:28.000'),
(19, 'HNES', 'Nghệ An', '2024-01-12 14:22:29', '2024-01-12 14:22:29.000'),
(20, 'GNIT', 'An Giang', '2024-01-17 17:01:27', '2024-01-17 17:01:27.000');

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
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
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
  `avatar` varchar(255) DEFAULT NULL,
  `role` enum('0','1') NOT NULL DEFAULT '0',
  `passwordChangedAt` varchar(255) DEFAULT NULL,
  `passwordResetToken` varchar(255) DEFAULT NULL,
  `passwordResetExpires` varchar(255) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `password`, `zalo`, `fbUrl`, `avatar`, `role`, `passwordChangedAt`, `passwordResetToken`, `passwordResetExpires`, `createdAt`, `updatedAt`) VALUES
('ad9c55eb-f3fe-4774-a67c-cf18e2985113', 'Phúc An', '0384029074', 'mikikep401@darkse.com', '$2b$12$7t7NbQV/0Q.gWYd1z3eQoe.lWsw7mgvq1PstbbvuEeVWSQLySeXXe', '0384029074', 'https://github.com/ltnkiet', 'https://res.cloudinary.com/ltnkiet/image/upload/v1705642457/nhatrosachse/gsxeqqjs8uimv19eosiy.jpg', '0', '1710231315187', NULL, NULL, '2024-01-10 15:31:26.000', '2024-03-12 15:15:15.000'),
('f2a0c343-dce5-46aa-8543-dfb406026699', 'Minh Hiếu', '0384029072', 'muradryomalqm@gmail.com', '$2b$12$ZZbfYKBrKnR04PH1Q/uSKuCuHPHHwC6TamuLEGUQn3yjasqu2lpL2', '0384029072', 'https://www.facebook.com/kewtiiemusic', 'https://res.cloudinary.com/ltnkiet/image/upload/v1705573806/nhatrosachse/fkhhhtptmy60i81ypbkp.jpg', '0', '1704015364181', 'c5cc3bfca0b3a63e8eab4cdbff1bad78a925319efcbbc0e78a33d153af1cf8c0', '1705979729695', '2023-12-12 23:32:48.413', '2024-01-23 10:10:29.000'),
('f96da284-78dd-4fe1-89bc-245fc47890de', 'Lê Tuấn Kiệt', '0357725474', 'ltnkietviii@gmail.com', '$2b$12$zLtFQ28FPXdkIj8.VmV07exFEreS58nLm92sSu/KRRL95C4x8q1bm', '0357725474', 'facebook.com/ltnkt8', 'https://res.cloudinary.com/ltnkiet/image/upload/v1709038214/nhatrosachse/uhp8yo8l5st3sipmkfvc.jpg', '1', '1703705298384', '0dbf1c47281d057cf7eda76e14d627ee20b1d6be124a401e4608489253b08c59', '1704787659998', '2023-12-12 23:32:48.413', '2024-02-27 19:50:38.000');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `labels`
--
ALTER TABLE `labels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
