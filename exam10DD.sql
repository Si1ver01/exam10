CREATE DATABASE  IF NOT EXISTS `news` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `news`;
-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: news
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_news` int(11) NOT NULL,
  `author` char(100) DEFAULT NULL,
  `text` text,
  PRIMARY KEY (`id`),
  KEY `comments_ibfk_1` (`id_news`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`id_news`) REFERENCES `news` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,'Anonymous','Пишем сообщение через сайт'),(2,1,'Tester','Пишем сообщение через сайт 2'),(3,1,'Tester','Пишем сообщение через сайт 3'),(4,3,'Anonymous','Пишем сообщение через сайт ко второй новости'),(5,3,'Anonymous','Пишем сообщение через сайт 3'),(6,3,'Anonymous','123');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` char(100) NOT NULL,
  `text` text NOT NULL,
  `image` char(255) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'Первая новость','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tellus eget erat mattis gravida. Maecenas ac viverra libero. Nulla ac aliquam nunc. Cras imperdiet vestibulum quam ut varius. Praesent fermentum bibendum libero, in lacinia nisl imperdiet sit amet. Aliquam posuere dapibus urna ut lacinia. Vestibulum et magna mauris. Ut non pellentesque mi, in venenatis elit. Maecenas convallis massa feugiat hendrerit facilisis. Sed vulputate, urna in porttitor ullamcorper, neque orci mollis turpis, vel accumsan lectus augue sed metus. Maecenas nec eleifend mi. Suspendisse faucibus fermentum dolor quis semper. Duis nec laoreet risus, et aliquam magna. In sed massa faucibus lorem vulputate rhoncus id sed nisi. Proin ac molestie arcu.','tiSoGO3sf0WcT8p9kOwmA.jpg','2020-02-22 13:45:40'),(3,'Вторая новость','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tellus eget erat mattis gravida. Maecenas ac viverra libero. Nulla ac aliquam nunc. Cras imperdiet vestibulum quam ut varius. Praesent fermentum bibendum libero, in lacinia nisl imperdiet sit amet. Aliquam posuere dapibus urna ut lacinia. Vestibulum et magna mauris. Ut non pellentesque mi, in venenatis elit. Maecenas convallis massa feugiat hendrerit facilisis. Sed vulputate, urna in porttitor ullamcorper, neque orci mollis turpis, vel accumsan lectus augue sed metus. Maecenas nec eleifend mi. Suspendisse faucibus fermentum dolor quis semper. Duis nec laoreet risus, et aliquam magna. In sed massa faucibus lorem vulputate rhoncus id sed nisi. Proin ac molestie arcu.','a6bh3CahFzY5LYI965TmC.jpg','2020-02-22 14:21:28'),(5,'Третья новость','123321',NULL,'2020-02-22 15:31:35'),(6,'Четвертая новость','3213213123',NULL,'2020-02-22 15:33:44'),(7,'Пята новость','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tellus eget erat mattis gravida. Maecenas ac viverra libero. Nulla ac aliquam nunc. Cras imperdiet vestibulum quam ut varius. Praesent fermentum bibendum libero, in lacinia nisl imperdiet sit amet. Aliquam posuere dapibus urna ut lacinia. Vestibulum et magna mauris. Ut non pellentesque mi, in venenatis elit. Maecenas convallis massa feugiat hendrerit facilisis. Sed vulputate, urna in porttitor ullamcorper, neque orci mollis turpis, vel accumsan lectus augue sed metus. Maecenas nec eleifend mi. Suspendisse faucibus fermentum dolor quis semper. Duis nec laoreet risus, et aliquam magna. In sed massa faucibus lorem vulputate rhoncus id sed nisi. Proin ac molestie arcu.','qBf8NJGoL2P18CNCDbjrz.jpg','2020-02-22 15:35:38');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-22 16:03:43
