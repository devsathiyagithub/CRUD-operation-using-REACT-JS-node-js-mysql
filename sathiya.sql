-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2022 at 04:39 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sathiya`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `password` varchar(200) NOT NULL,
  `agree` varchar(200) NOT NULL DEFAULT 'true',
  `id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`name`, `email`, `date`, `password`, `agree`, `id`) VALUES
('a', 'sathiya@gmail.com', '2022-11-09', 'Kathir@99', '', 25),
('b', 'sathiya@gmail.com', '2022-11-07', 'Kathir@99', '', 26),
('c', 'sathiya@gmail.com', '2022-11-15', 'Kathir@99', '', 27),
('d', 'sathiya@gmail.com', '2022-11-15', 'Kathir@99', '', 28),
('sathiyapriya', 'sathiyap@gmail.com', '2022-11-10', 'SAthiya@118', '', 29),
('SATHIYA118', 'sathiya118@gmail.com', '2022-11-10', 'Priya', '', 30);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
