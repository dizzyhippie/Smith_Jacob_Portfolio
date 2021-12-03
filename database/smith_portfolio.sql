-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 03, 2021 at 01:01 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smith_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `ID` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `industry` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `link` varchar(100) NOT NULL,
  `tools` varchar(100) NOT NULL,
  `img` varchar(50) NOT NULL,
  `img2` varchar(20) NOT NULL,
  `img3` varchar(20) NOT NULL,
  `about` varchar(10) NOT NULL,
  `develop` varchar(10) NOT NULL,
  `design` varchar(10) NOT NULL,
  `abtitle` varchar(15) NOT NULL,
  `abinfo` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`ID`, `name`, `industry`, `description`, `link`, `tools`, `img`, `img2`, `img3`, `about`, `develop`, `design`, `abtitle`, `abinfo`) VALUES
(1, 'Music Mixer', 'Front End | Javascript', 'An interactive web app where users can drag and drop pre recorded loops onto a sound board which creates mini songs.', 'https://github.com/dizzyhippie/Smith_Jacob_MusicMixer', 'HTML & CSS | JAVASCRIPT', 'music-1.png', 'music-2.png', 'music-3.png', 'true', 'true', 'false', 'About', 'I am a creative individual from London, Ontario with skills in Front End Development, Animation and Graphic Design. Click on the \"Developer\" and \"Designer\" tabs to learn more about my specific skills!'),
(3, 'Mini Cooper', 'Front End | Vue.js', 'This application was created as a re design of the Mini Cooper site. Using Vue the user can click on various Mini models to see more information about that specific vehicle. The information is displayed via a modal and changes dynamically using Vue and Fetch API.', 'https://github.com/dizzyhippie/Smith_Jacob_Mini', 'HTML & CSS | Vue.Js | PHP & SQL', 'mini-1.png', 'mini-2.png', 'mini-3.png', 'true', 'true', 'false', 'Designer', 'I\'ve worked with various clients across many different industries while freelancing. I have experience working with Print & Web Design | Social Media | Package & Product Design | Animation.'),
(4, 'Ingersoll Products', 'Graphic Design | Client Work', 'Ingersoll Products is a small plastic manufacturer in Ingersoll, Ontario. I worked there as a Marketing Coordinator where I helped them launch products on Amazon, run ads on social platforms, and completed a re brand to be more friendly for the \'DIY\'er.', 'https://ingersollproducts.com/', 'Adobe Creative Suite | Social Media Marketing', 'ingersoll-1.png', 'ingersoll-2.png', 'ingersoll-3.png', 'true', 'false', 'true', 'Developer', 'I really enjoy creating applications for the internet and making them look pretty! My Github link is below where you can take a look at all of my projects. I use Vue.JS | HTML & CSS | PHP & SQL | NODE.JS | SCSS & GULP'),
(5, 'Game of Thrones', 'Front End | Javascript', 'This is an interactive web app where the user can learn about the houses from the show Game of Thrones. The user clicks on a house banner and is shown a video about that house. The application switches videos and loads content with vanilla javascript.', 'https://github.com/dizzyhippie/Smith_J_GOT', 'HTML & CSS | JAVASCRIPT', 'got-1.png', 'got-2.png', 'got-3.png', 'false', 'true', 'false', '', ''),
(6, 'Flipside', 'Illustration | Client Work', 'Flipside is a DJ based in Dublin, Ireland. I created a series of posters and social graphics for him to promote his shows with partnering DJs. These are some of my favourite projects as I was always given complete creative freedom while working on the design.', 'https://www.instagram.com/jsmith266/', 'Procreate | Adobe Creative Suite', 'flipside-1.png', 'flipside-2.png', 'flipside-3.png', '', 'false', 'true', 'false', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
