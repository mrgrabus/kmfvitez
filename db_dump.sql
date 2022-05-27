CREATE DATABASE  IF NOT EXISTS `kmf_vitez` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kmf_vitez`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: kmf_vitez
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `isHome` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `teamId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `teamId` (`teamId`),
  CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`teamId`) REFERENCES `teams` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (1,'2022-04-27 08:00:00','Vitez s','1',1,'2022-02-20 10:56:31','2022-03-15 23:49:36',1),(11,'2022-04-20 07:44:00','Gradska Sportska Dvorana Vitez','3',1,'2022-03-05 20:44:58','2022-04-02 22:23:31',3),(12,'2022-04-28 08:54:00','sad ','1',0,'2022-03-05 20:51:34','2022-03-15 23:50:06',3),(18,'2022-03-29 21:00:00','asdassad','1',0,'2022-03-07 22:00:45','2022-03-07 22:00:45',1),(19,'2022-03-28 09:00:00','Travnik','1',0,'2022-03-07 22:00:52','2022-03-11 00:36:58',1),(20,'2022-03-29 21:00:00','asd','1',0,'2022-03-07 22:01:00','2022-03-10 20:13:48',1),(21,'2020-02-01 23:00:00','Neka lokacija','1',0,'2022-03-10 21:39:07','2022-03-10 21:39:07',2),(22,'2020-02-01 23:00:00','Neka lokacija','1',0,'2022-03-12 20:17:22','2022-03-12 20:17:22',1),(23,'2020-02-01 23:00:00','Neka lokacija','2',0,'2022-03-12 20:17:26','2022-03-12 20:17:26',1),(24,'2020-02-01 23:00:00','Neka lokacija','2',0,'2022-03-12 20:17:29','2022-03-12 20:17:29',1),(25,'2020-02-01 23:00:00','Neka lokacija','2',0,'2022-03-12 20:17:33','2022-03-12 20:17:33',1);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `text` text,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (30,'Neki tekst','neki tekst','uploads\\nesto.jpg','2022-03-01 19:31:57','2022-03-07 21:37:53','2'),(33,'Neki jako jako jako dug title koji prelazi u dva reda','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel lacinia eros. Aliquam dictum ipsum augue, gravida suscipit sem placerat eget. Vestibulum mi erat, suscipit at mauris id, rhoncus tristique nulla. Nullam et feugiat est. Praesent placerat gravida urna, in finibus ligula ultricies dapibus. Phasellus blandit, eros eu maximus efficitur, lorem diam porttitor mi, nec tincidunt nibh sem at turpis. Ut laoreet bibendum libero a efficitur. Phasellus id cursus enim, non cursus sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\r\n\r\nVestibulum ac erat ante. Donec nec dui ut dui iaculis eleifend quis et nibh. Ut dapibus sodales neque quis malesuada. Pellentesque volutpat velit augue, ut fermentum urna sollicitudin eu. Suspendisse semper arcu eu blandit suscipit. In ut nulla leo. Praesent dapibus sed metus at lacinia. Aliquam erat volutpat. Maecenas interdum nibh in purus eleifend sagittis.\r\n\r\nMaecenas placerat, mauris et commodo tristique, neque risus condimentum turpis, ac efficitur libero arcu sed neque. Aliquam mattis aliquam ornare. In risus lacus, egestas ac ligula et, blandit mollis purus. Fusce commodo, nunc id mollis accumsan, nibh leo pretium erat, ac euismod leo urna ut sapien. Vestibulum accumsan at nibh eget vestibulum. Cras neque turpis, consequat eget lectus vitae, dictum rutrum quam. Aliquam eleifend tincidunt mi ac fringilla. Nulla in massa et massa tincidunt bibendum at dictum lorem. Donec semper tristique lacus eget porttitor. Cras sit amet egestas massa. Pellentesque in convallis turpis. Sed sit amet felis finibus, ornare nisi in, pulvinar turpis. Vestibulum eu ultrices eros, in varius urna.','uploads\\nesto.jpg','2022-03-06 16:39:48','2022-03-06 17:28:24','1'),(34,'Neka nova vijest koja nije','wserw','uploads\\img1.png','2022-03-06 17:30:08','2022-03-15 23:54:10','1'),(37,'nek ititle','erw rw','uploads\\nesto.jpg','2022-03-06 18:26:21','2022-03-11 00:39:12','1'),(38,'8 mart','tekst ','uploads\\8mart.png','2022-03-10 21:39:25','2022-03-10 21:39:25','2'),(39,'Neka nova vijest neka','sasdasd','uploads\\news\\cestitka2.png','2022-04-01 19:05:46','2022-04-01 19:05:46','1'),(40,'Neka nova vijest neka','sasdasd','uploads\\news\\cestitka2.png','2022-04-01 19:05:49','2022-04-01 19:05:49','1');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `facebookLink` varchar(255) DEFAULT NULL,
  `instagramLinkg` varchar(255) DEFAULT NULL,
  `description` text,
  `placeOfBirth` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `positionId` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `positionId` (`positionId`),
  CONSTRAINT `players_ibfk_1` FOREIGN KEY (`positionId`) REFERENCES `positions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,'John','Doe','nestonesto','nestonesto','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor dolor, cursus at tempus nec, tincidunt at nunc. Ut sed ante maximus, condimentum augue non, dictum tellus. Etiam tristique risus eu erat ultrices placerat. Duis pulvinar diam enim, vel placerat nulla vulputate at. Nam vehicula eget orci at commodo. Etiam tortor purus, lobortis ac efficitur eu, condimentum at nisi. Phasellus egestas dolor quis augue eleifend, eget aliquam orci commodo. ','Travnik, Federation of BiH','2022-01-29 19:07:37','2022-03-11 19:12:46',1,'uploads\\playerpreview.png'),(2,'Edin','Doe','nestonesto','nestonesto','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor dolor, cursus at tempus nec, tincidunt at nunc. Ut sed ante maximus, condimentum augue non, dictum tellus. Etiam tristique risus eu erat ultrices placerat. Duis pulvinar diam enim, vel placerat nulla vulputate at. Nam vehicula eget orci at commodo. Etiam tortor purus, lobortis ac efficitur eu, condimentum at nisi. Phasellus egestas dolor quis augue eleifend, eget aliquam orci commodo. ','Travnik, Federation of BiH','2022-01-29 19:07:37','2022-03-11 19:14:17',2,'uploads\\playerpreview.png'),(3,'Mirzad','Doe','nestonesto','nestonesto','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor dolor, cursus at tempus nec, tincidunt at nunc. Ut sed ante maximus, condimentum augue non, dictum tellus. Etiam tristique risus eu erat ultrices placerat. Duis pulvinar diam enim, vel placerat nulla vulputate at. Nam vehicula eget orci at commodo. Etiam tortor purus, lobortis ac efficitur eu, condimentum at nisi. Phasellus egestas dolor quis augue eleifend, eget aliquam orci commodo. ','Travnik, Federation of BiH','2022-01-29 19:07:37','2022-01-29 19:07:37',1,'uploads\\playerpreview.png'),(4,'John','Doe','nestonesto','nestonesto','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor dolor, cursus at tempus nec, tincidunt at nunc. Ut sed ante maximus, condimentum augue non, dictum tellus. Etiam tristique risus eu erat ultrices placerat. Duis pulvinar diam enim, vel placerat nulla vulputate at. Nam vehicula eget orci at commodo. Etiam tortor purus, lobortis ac efficitur eu, condimentum at nisi. Phasellus egestas dolor quis augue eleifend, eget aliquam orci commodo. ','Travnik, Federation of BiH','2022-01-29 19:07:37','2022-01-29 19:07:37',2,'uploads\\playerpreview.png'),(5,'Edin','Doe','nestonesto','nestonesto','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor dolor, cursus at tempus nec, tincidunt at nunc. Ut sed ante maximus, condimentum augue non, dictum tellus. Etiam tristique risus eu erat ultrices placerat. Duis pulvinar diam enim, vel placerat nulla vulputate at. Nam vehicula eget orci at commodo. Etiam tortor purus, lobortis ac efficitur eu, condimentum at nisi. Phasellus egestas dolor quis augue eleifend, eget aliquam orci commodo. ','Travnik, Federation of BiH','2022-01-29 19:07:37','2022-01-29 19:07:37',1,'uploads\\playerpreview.png'),(6,'Mirzad','Doe','nestonesto','nestonesto','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor dolor, cursus at tempus nec, tincidunt at nunc. Ut sed ante maximus, condimentum augue non, dictum tellus. Etiam tristique risus eu erat ultrices placerat. Duis pulvinar diam enim, vel placerat nulla vulputate at. Nam vehicula eget orci at commodo. Etiam tortor purus, lobortis ac efficitur eu, condimentum at nisi. Phasellus egestas dolor quis augue eleifend, eget aliquam orci commodo. ','Travnik, Federation of BiH','2022-01-29 19:07:37','2022-01-29 19:07:37',2,'uploads\\playerpreview.png');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `positions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `positions`
--

LOCK TABLES `positions` WRITE;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
INSERT INTO `positions` VALUES (1,'goalkeepers','2022-01-29 19:07:37','2022-01-29 19:07:37'),(2,'strikers','2022-01-29 19:07:37','2022-01-29 19:07:37');
/*!40000 ALTER TABLE `positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220129184629-create-user.js'),('20220129191611-create-players.js'),('20220131201804-create-news.js'),('20220203195621-create-position.js'),('20220213131758-modify_news_add_new_fields.js'),('20220223220442-create-teams.js'),('20220223220641-create-matches.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `teamName` varchar(255) DEFAULT NULL,
  `grb` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'FK Sarajevo','uploads\\grbdemo.png','2022-01-29 19:07:37','2022-01-29 19:07:37'),(2,'Demo klub','uploads\\grbdemo.png','2022-01-29 19:07:37','2022-01-29 19:07:37'),(3,'MNK Klub','uploads\\grbdemo.png','2022-01-29 19:07:37','2022-01-29 19:07:37');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Edin','Grabus','edin@gmail.com','$2b$10$YTi8z/B.j5VZ.D7C3yqUHOOtmXEv8vxhjXPuHGXn/o5YmgApdDfyq','2022-02-19 23:42:14','2022-02-19 23:42:14');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-27 20:19:02
