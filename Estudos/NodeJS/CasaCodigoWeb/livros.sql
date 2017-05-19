-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 08-Nov-2016 às 01:40
-- Versão do servidor: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `casadocodigo`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `descricao` text,
  `preco` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `titulo`, `descricao`, `preco`) VALUES
(1, 'Começando com NodeJS', 'Livro sobre NodeJS', '40.00'),
(4, 'Começando com Javascript', 'Livro sobre Javascript', '40.00'),
(5, 'Começando com express', 'Livro sobre express', '39.90'),
(6, 'Indo alem com Javascript', 'Livro de Javascript avançado', '42.50'),
(7, 'NodeJs Primeiros passos', 'Livro de nodejs  básico', '53.00'),
(8, 'Quebre a cabeça JavaScritp', 'Livro de javascript da série quebrando a cabeça', '43.00'),
(9, 'Mais sobre nodeJS', 'Node, JavaScript e um pouco do protocolo Http', '87.50'),
(10, 'Samurai JavaScript', 'JavaScript Nija dos Paranauê', '150.50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `titulo` (`titulo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
