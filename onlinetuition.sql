-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 09, 2018 at 07:59 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinetuition`
--

-- --------------------------------------------------------

--
-- Table structure for table `standard`
--

DROP TABLE IF EXISTS `standard`;
CREATE TABLE IF NOT EXISTS `standard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `studentdetail`
--

DROP TABLE IF EXISTS `studentdetail`;
CREATE TABLE IF NOT EXISTS `studentdetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `teacherDetailId` int(11) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdDate` date NOT NULL,
  `updatedDate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkUserId` (`userId`),
  KEY `fkTeacherDetailId` (`teacherDetailId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
CREATE TABLE IF NOT EXISTS `subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `standardId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `discription` varchar(300) DEFAULT NULL,
  `noOfDays` int(11) DEFAULT NULL,
  `createdDate` date NOT NULL,
  `createdBy` int(11) NOT NULL,
  `updatedDate` date DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fkStandardId` (`standardId`),
  KEY `fkcreatedBy` (`createdBy`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teacherdetail`
--

DROP TABLE IF EXISTS `teacherdetail`;
CREATE TABLE IF NOT EXISTS `teacherdetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `subjectId` int(11) NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `noOfStudent` int(11) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdDate` date NOT NULL,
  `updateDate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkUserId` (`userId`),
  KEY `fkSubjectId` (`subjectId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `gender` tinyint(1) NOT NULL,
  `DOB` date NOT NULL,
  `phoneNo` varchar(15) NOT NULL,
  `alternatePhoneNo` varchar(15) DEFAULT NULL,
  `address` varchar(300) NOT NULL,
  `role` int(1) NOT NULL,
  `timeZone` varchar(10) DEFAULT NULL,
  `comment` varchar(300) DEFAULT NULL,
  `qoutes` varchar(200) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdDate` date NOT NULL,
  `updatedDate` date DEFAULT NULL,
  `isApproved` tinyint(1) NOT NULL DEFAULT '0',
  `approvedBy` int(11) DEFAULT NULL,
  `approvedDate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uEmail` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `password`, `photo`, `gender`, `DOB`, `phoneNo`, `alternatePhoneNo`, `address`, `role`, `timeZone`, `comment`, `qoutes`, `isActive`, `createdDate`, `updatedDate`, `isApproved`, `approvedBy`, `approvedDate`) VALUES
(1, 'Admin', 'Admin', 'admin@admin.com', 'admin', 'admin', 1, '2018-03-09', '9998886661', NULL, 'admin', 1, '+5.30', NULL, NULL, 1, '2018-03-09', NULL, 1, NULL, NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `studentdetail`
--
ALTER TABLE `studentdetail`
  ADD CONSTRAINT `fkTeacherDetailId` FOREIGN KEY (`teacherDetailId`) REFERENCES `teacherdetail` (`id`),
  ADD CONSTRAINT `fkuserIds` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `subject`
--
ALTER TABLE `subject`
  ADD CONSTRAINT `fkStandardId` FOREIGN KEY (`standardId`) REFERENCES `standard` (`id`),
  ADD CONSTRAINT `fkcreatedBy` FOREIGN KEY (`createdBy`) REFERENCES `user` (`id`);

--
-- Constraints for table `teacherdetail`
--
ALTER TABLE `teacherdetail`
  ADD CONSTRAINT `fkSubjectId` FOREIGN KEY (`subjectId`) REFERENCES `subject` (`id`),
  ADD CONSTRAINT `fkUserId` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
