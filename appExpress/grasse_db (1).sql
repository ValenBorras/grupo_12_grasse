-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2022 at 12:46 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grasse_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Abercrombie'),
(2, 'Al Hamarain'),
(3, 'Arianna Grande'),
(4, 'Bond N°9'),
(5, 'Boucheron'),
(6, 'Britney Spears'),
(7, 'Burberry'),
(8, 'Bvlgari'),
(9, 'Cacharel'),
(10, 'Calvin Klein'),
(11, 'Carolina Herrera'),
(12, 'Cartier'),
(13, 'Chanel'),
(14, 'Clinique'),
(15, 'Creed'),
(16, 'Custo'),
(17, 'Davidoff'),
(18, 'Diesel'),
(19, 'Dior'),
(20, 'DKNY'),
(21, 'Dolce & Gabbana'),
(22, 'Elizabeth Taylor'),
(23, 'Escada'),
(24, 'Fred Hayman'),
(25, 'Giorgio Armani'),
(26, 'Givenchy'),
(27, 'Gucci'),
(28, 'Issey Miyake'),
(29, 'Lacoste'),
(30, 'Lancome'),
(31, 'Le Labo'),
(32, 'Louis Vuitton'),
(33, 'Maison Franchis Kurkdjian'),
(34, 'Mancera'),
(35, 'Montale'),
(36, 'Moschino'),
(37, 'Paco Rabbane'),
(38, 'Paris Hilton'),
(39, 'Perry Ellis'),
(40, 'Ralph Lauren'),
(41, 'Tommy Hilfiger'),
(42, 'Versace'),
(43, 'Guess');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Cremas'),
(2, 'Perfumes'),
(3, 'Kits');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `intro` varchar(1000) NOT NULL,
  `content` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `presentations`
--

CREATE TABLE `presentations` (
  `id` int(11) NOT NULL,
  `size` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `presentations`
--

INSERT INTO `presentations` (`id`, `size`) VALUES
(1, '85g'),
(2, '280g'),
(3, '50ml'),
(4, '100ml'),
(5, '100ml y 280g'),
(6, '50ml y 85g');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `presentation_id` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `presentation_id`, `price`, `description`, `img`) VALUES
(1, 'Crema Hidratante y Nutritiva Grasse 280g', 1, 2, '39999', 'Cuida tu piel y deja que los demás lo sientan', '/images/Crema-280gr.png'),
(2, 'Crema Hidratante y Nutritiva Grasse 85g', 1, 1, '21999', 'Lleva tu crema corporal a todas partes en tu bolso', '/images/Crema-85g.png'),
(3, 'Perfume Grasse 100ml', 2, 4, '59999', 'Perfume de alta duración y fijación', '/images/Perfume.png'),
(4, 'Perfume Grasse 50ml', 2, 3, '39999', 'Perfume de alta duración y fijación', '/images/Perfume.png'),
(5, 'Kit - Perfume 100ml y Crema Hidratante y Nutritiva 280g  ', 3, 5, '82999', 'Kit Grasse para tocador  ', '/images/kit-crema-y-perfume-grandes.png'),
(6, 'Kit - Perfume 50ml y Crema Hidratante y Nutritiva 85g ', 3, 6, '9', 'Kit Grasse para llevar en tu bolso ', '/images/kit-crema-y-perfume-pequeños.png');

-- --------------------------------------------------------

--
-- Table structure for table `referencies`
--

CREATE TABLE `referencies` (
  `id` int(11) NOT NULL,
  `name` varchar(5000) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `referencies`
--

INSERT INTO `referencies` (`id`, `name`, `brand_id`) VALUES
(1, 'Perfume N°1 Undone', 1),
(2, 'Amber Oud Gold', 2),
(3, 'Cloud', 3),
(4, 'REM', 3),
(5, 'Sweet Like Candy', 3),
(6, 'Thank U Next', 3),
(7, 'New York Amber', 4),
(8, 'Boucheron', 5),
(9, 'Fantasy', 6),
(10, 'Fantasy in Bloom', 6),
(11, 'Midnight', 6),
(12, 'Prerogative', 6),
(13, 'Burberry', 7),
(14, 'Burberry Her', 7),
(15, 'Bvlgari Pour Femme', 8),
(16, 'Omnia Amethyste', 8),
(17, 'Omnia Coral', 8),
(18, 'Omnia Crystalline', 8),
(19, 'Omnia Paraiba', 8),
(20, 'Omnia Pink Sapphire', 8),
(21, 'Amor Amor', 9),
(22, 'Scarlette', 9),
(30, 'Ck All', 10),
(31, 'Ck Everyone', 10),
(32, 'Ck In 2U', 10),
(33, 'Ck One', 10),
(34, 'Eternity', 10),
(35, 'Eternity Now', 10),
(36, 'Euphoria', 10),
(37, 'Euphoria Intense', 10),
(38, '212', 11),
(39, '212 Sexy', 11),
(40, '212 VIP', 11),
(41, '212 VIP Party Fever', 11),
(42, '212 VIP Rose', 11),
(43, '212 VIP Rose Extra', 11),
(44, '212 VIP Rose Red', 11),
(45, '212 VIP Wins', 11),
(46, 'Carolina Herrera', 11),
(47, 'CH', 11),
(48, 'CH L´eau', 11),
(49, 'Good Girl', 11),
(50, 'Good Girl Legéré', 11),
(51, 'Good Girl Supreme', 11),
(52, 'Good Girl Velvet Fatale', 11),
(53, 'Very Good Girl', 11),
(54, 'Eau D´Cartier', 12),
(55, 'Must de Cartier', 12),
(56, 'Chance', 13),
(57, 'Chance Eau Fraiche', 13),
(58, 'Chance Eau Tendre', 13),
(59, 'Chanel 5', 13),
(60, 'Coco Mademoiselle', 13),
(61, 'Gabrielle', 13),
(62, 'Happy', 14),
(63, 'Royal Princess Oud', 15),
(64, 'Custo Barcelona', 16),
(65, 'Cool Water', 17),
(66, 'Zero Plus', 18),
(67, 'Addict 2', 19),
(68, 'Jadore', 19),
(69, 'Joy By Dior', 19),
(70, 'Be Delicius', 20),
(71, 'Dolce', 21),
(72, 'Dolce & Gabbana', 21),
(73, 'L´Emperatrice', 21),
(74, 'Light Blue', 21),
(75, 'The One', 21),
(76, 'The Only One', 21),
(77, 'White Diamonds', 22),
(78, 'Agua de Sol', 23),
(79, 'Born In Paradise', 23),
(80, 'Celebrate NOW', 23),
(81, 'Cherry In The Air', 23),
(82, 'Fiesta Carioca', 23),
(83, 'Flor de Sol', 23),
(84, 'Joyful', 23),
(85, 'Miami Blossom', 23),
(86, 'Moon Sparkle', 23),
(87, 'Rock In Rio', 23),
(88, 'Sorbetto Rosso', 23),
(89, 'Taj Sunset', 23),
(90, '273', 24),
(91, 'Acqua Di Gio', 25),
(92, 'Acqua Di Gioia', 25),
(93, 'Code Absolu', 25),
(94, 'Si Armani', 25),
(95, 'Amarige', 26),
(96, 'Ange Ou Demon', 26),
(97, 'L´Interdit 2018', 26),
(98, 'Live Irresistible', 26),
(99, 'Gucci Gulty', 27),
(100, 'Gucci Gulty Absolute Pour Femme', 27),
(101, 'Rush Gucci', 27),
(102, 'Guess', 43),
(103, 'Guess Gold', 43),
(104, 'L´eau D´issey', 28),
(105, 'Eau de Lacoste L12.12 Pour Elle Magnetic', 29),
(106, 'Touch Of Pink', 29),
(107, 'La Vie Est Belle', 30),
(108, 'Santal 33', 31),
(109, 'On The Beach', 32),
(110, 'Baccarat Rouge 540', 33),
(111, 'Aoud Vanille', 34),
(112, 'Black Vanilla', 34),
(113, 'Cedrat Boise', 34),
(114, 'Gold Intensive', 34),
(115, 'Instant Crush', 34),
(116, 'Red Tobacco', 34),
(117, 'Wild Fruits', 34),
(118, 'Intense Café', 35),
(119, 'Nepal Aoud', 35),
(120, 'Ristretto Intense Café', 35),
(121, 'Starry Night', 35),
(122, 'Funny', 36),
(123, 'Toy 2', 36),
(124, 'Black XS', 37),
(125, 'Lady Million', 37),
(126, 'Olympea', 37),
(127, 'Can Can', 38),
(128, 'Dazzle', 38),
(129, 'Electrify', 38),
(130, 'Gold Rush', 38),
(131, 'Heiress', 38),
(132, 'Paris Hilton', 38),
(133, 'Passport Paris', 38),
(134, 'Pink Rush', 38),
(135, 'Platinum Rush', 38),
(136, 'Rose Rush', 38),
(137, '360°', 39),
(138, '360° Red', 39),
(139, '360° Purple', 39),
(140, 'Ralph', 40),
(141, 'Woman', 40),
(142, 'Tommy Girl', 41),
(143, 'Bright Crystal', 42),
(144, 'Dylan Blue', 42),
(145, 'Eros Pour Femme', 42),
(146, 'Yellow Diamond', 42);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `img`, `admin`) VALUES
(1, 'Valentina', 'Borras', 'valen@grasse.com.co', '$2a$10$O49h/uKBUxmixz9Z5oaF4.NqUbhoD0hi0kdxMFQqZG8mMjJ0TJD1i', 'img-1666050914563-221570463.png', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `presentations`
--
ALTER TABLE `presentations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `presentation_id` (`presentation_id`);

--
-- Indexes for table `referencies`
--
ALTER TABLE `referencies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `presentations`
--
ALTER TABLE `presentations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `referencies`
--
ALTER TABLE `referencies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`presentation_id`) REFERENCES `presentations` (`id`);

--
-- Constraints for table `referencies`
--
ALTER TABLE `referencies`
  ADD CONSTRAINT `referencies_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;