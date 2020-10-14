-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 14 Octobre 2020 à 04:16
-- Version du serveur :  10.1.44-MariaDB-0+deb9u1
-- Version de PHP :  7.1.33-15+0~20200419.36+debian9~1.gbp2384b3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `intranetv3`
--

-- --------------------------------------------------------

--
-- Structure de la table `absence`
--

CREATE TABLE `absence` (
  `id` int(11) NOT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `matiere_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `dateHeure` datetime(6) NOT NULL,
  `duree` time NOT NULL,
  `justifie` tinyint(1) NOT NULL,
  `date_justifie` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `absence`
--

INSERT INTO `absence` (`id`, `personnel_id`, `matiere_id`, `etudiant_id`, `annee_universitaire_id`, `created`, `updated`, `uuid`, `dateHeure`, `duree`, `justifie`, `date_justifie`) VALUES
(1, 4, 1, 4, 1, '2020-01-14 08:20:28', '2020-01-14 08:20:28', 0x7219607506c749599d1336778954838a, '2020-10-12 08:00:00.000000', '01:30:00', 0, NULL),
(7, 4, 1, 1, 1, '2020-01-14 09:47:12', '2020-01-14 09:47:12', 0xe4fef2d564fe45b19b3eb8a417af0593, '2020-10-12 09:47:12.000000', '01:30:00', 0, NULL),
(14, 4, 1, 2, 1, '2020-01-14 10:09:11', '2020-02-09 17:45:17', 0x6fa2a5d55cb84d8b8b0c279a321ef156, '2020-10-12 10:09:11.000000', '01:30:00', 1, NULL),
(20, 4, 1, 5, 1, '2020-01-15 03:39:09', '2020-01-15 03:39:09', 0x797b4ea25c7e4fc49179a91e764dd5a5, '2020-10-12 03:39:09.000000', '01:30:00', 0, NULL),
(21, 4, 1, 5, 1, '2020-01-15 03:39:12', '2020-01-15 03:39:12', 0xf0ad5e91769941ea9a3dc34003efb3e6, '2020-10-12 03:39:12.000000', '01:30:00', 0, NULL),
(25, 4, 1, 5, 1, '2020-01-15 03:47:27', '2020-01-15 03:47:27', 0x554971c2d99247778862887da588bbcb, '2020-10-12 09:15:00.000000', '01:30:00', 0, NULL),
(26, 4, 1, 8, 1, '2020-01-15 03:50:33', '2020-01-15 03:50:33', 0x778db630aac040ebac0b668a11678f33, '2020-10-12 08:15:00.000000', '01:30:00', 0, NULL),
(36, 4, 1, 2, 1, '2020-01-15 10:13:30', '2020-01-15 10:13:30', 0xd551c2ab784c419a9664dbbb1d38ad2f, '2020-10-12 10:13:30.000000', '01:30:00', 0, NULL),
(37, 4, 1, 4, 1, '2020-01-15 10:13:32', '2020-01-15 10:13:32', 0x50a04b5c20f04d749f764e3c5aa1e5cb, '2020-10-12 10:13:32.000000', '01:30:00', 0, NULL),
(41, 5, 1, 10, 1, '2020-01-16 03:39:30', '2020-01-16 03:40:00', 0xde2a40ab3662419faa264a5f15bd35f4, '2020-10-12 08:00:00.000000', '01:30:00', 1, NULL),
(43, 4, 1, 3, 1, '2020-01-16 05:55:35', '2020-01-16 05:55:35', 0xa80a7b749add42b39807135ae0edab91, '2020-10-12 12:00:00.000000', '01:30:00', 0, NULL),
(45, 2, 1, 28, 1, '2020-01-22 03:12:34', '2020-01-22 03:12:41', 0xe4450b5552604e099f02fffe77473240, '2020-10-12 08:00:00.000000', '01:30:00', 0, NULL),
(46, 4, 1, 1, 1, '2020-01-22 07:52:20', '2020-01-22 07:52:20', 0x6406dd781a1c4560823cbc28ac3ae0d7, '2020-10-12 08:00:00.000000', '01:30:00', 0, NULL),
(51, 4, 1, 2, 1, '2020-01-22 07:56:43', '2020-01-22 07:56:43', 0x1924c5f1dfa949f99cec2802c21c5694, '2020-10-12 10:30:00.000000', '01:30:00', 0, NULL),
(52, 4, 1, 4, 1, '2020-01-22 07:56:57', '2020-01-22 07:56:57', 0x3b1531f9f77a4f3b9be3d13efa814630, '2020-10-12 10:30:00.000000', '01:30:00', 0, NULL),
(53, 4, 1, 4, 1, '2020-01-22 10:26:54', '2020-01-22 10:26:54', 0x4d0ccc6e6bba44dcb2ba079c85208998, '2020-10-12 10:26:54.000000', '01:30:00', 0, NULL),
(54, 4, 1, 1, 1, '2020-01-22 10:27:37', '2020-01-22 10:27:37', 0xe85aa30979b34babaeeb6f956265c635, '2020-10-12 10:27:37.000000', '01:30:00', 0, NULL),
(57, 4, 1, 5, 1, '2020-01-22 12:35:46', '2020-01-22 12:35:46', 0x2d684266cf9141c1b4445ca84f9b630c, '2020-10-12 08:00:00.000000', '01:30:00', 0, NULL),
(58, 4, 1, 5, 1, '2020-01-22 12:37:46', '2020-01-22 12:37:46', 0x86ec48ffbbbf4d36a85109cf437dac79, '2020-10-12 09:00:00.000000', '01:30:00', 0, NULL),
(60, 2, 2, 1, 1, '2020-10-12 11:56:54', '2020-10-12 11:56:54', 0x801e3747210d4e6db0168f0bf17825d0, '2020-10-12 11:56:00.000000', '01:30:00', 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `absence_justificatif`
--

CREATE TABLE `absence_justificatif` (
  `id` int(11) NOT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `motif` longtext NOT NULL,
  `etat` varchar(1) NOT NULL,
  `fichier_name` varchar(50) DEFAULT NULL,
  `date_heure_debut` datetime(6) NOT NULL,
  `date_heure_fin` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `actualite`
--

CREATE TABLE `actualite` (
  `id` int(11) NOT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `titre` varchar(150) NOT NULL,
  `texte` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `actualite`
--

INSERT INTO `actualite` (`id`, `departement_id`, `created`, `updated`, `titre`, `texte`) VALUES
(2, 1, '2020-02-09 18:09:33', '2020-02-09 18:09:33', 'Une actu de dingue !', '<h1>Quel dinguerie !!</h1>\r\nL\'intranet est en test mais sera bientôt disponible, c\'est fantastique :D');

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--

CREATE TABLE `adresse` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `adresse1` varchar(255) DEFAULT NULL,
  `adresse2` varchar(255) DEFAULT NULL,
  `adresse3` varchar(255) DEFAULT NULL,
  `code_postal` varchar(10) DEFAULT NULL,
  `ville` varchar(100) DEFAULT NULL,
  `pays` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `adresse`
--

INSERT INTO `adresse` (`id`, `created`, `updated`, `adresse1`, `adresse2`, `adresse3`, `code_postal`, `ville`, `pays`) VALUES
(3, '2019-11-25 09:43:52', '2019-11-25 09:43:52', NULL, NULL, NULL, NULL, NULL, 'France'),
(4, '2019-11-26 04:17:39', '2019-11-26 04:17:39', NULL, NULL, NULL, NULL, NULL, 'France'),
(5, '2019-11-26 04:18:17', '2019-11-26 04:18:17', NULL, NULL, NULL, NULL, NULL, 'France'),
(6, '2019-11-26 04:19:01', '2019-11-26 04:19:01', NULL, NULL, NULL, NULL, NULL, 'France'),
(7, '2019-11-26 04:20:39', '2019-11-26 04:20:39', '9 Rue de Québec', 'CS90396', NULL, '10026', 'Troyes Cedex', 'France'),
(8, '2020-02-09 18:11:02', '2020-02-09 18:11:02', NULL, NULL, NULL, NULL, NULL, 'France'),
(9, '2020-02-16 08:09:31', '2020-02-16 08:11:22', '9 rue de Quebec', NULL, NULL, '10000', 'Troyes', 'France');

-- --------------------------------------------------------

--
-- Structure de la table `alternance`
--

CREATE TABLE `alternance` (
  `id` int(11) NOT NULL,
  `entreprise_id` int(11) DEFAULT NULL,
  `tuteur_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `tuteur_universitaire_id` int(11) DEFAULT NULL,
  `annee_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `type_contrat` varchar(20) NOT NULL,
  `etat` varchar(10) NOT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `adresse_alternance_id` int(11) DEFAULT NULL,
  `sujet` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `alternance_fiche_suivi`
--

CREATE TABLE `alternance_fiche_suivi` (
  `id` int(11) NOT NULL,
  `alternance_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `methode` varchar(1) NOT NULL,
  `commentaire` longtext NOT NULL,
  `missions` longtext NOT NULL,
  `integration` int(11) NOT NULL,
  `initiative` int(11) NOT NULL,
  `adaptation` int(11) NOT NULL,
  `performance` int(11) NOT NULL,
  `delais` int(11) NOT NULL,
  `comportement` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `annee`
--

CREATE TABLE `annee` (
  `id` int(11) NOT NULL,
  `diplome_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `ordre` int(11) NOT NULL,
  `libelle_long` varchar(150) DEFAULT NULL,
  `opt_alternance` tinyint(1) NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `couleur` varchar(30) NOT NULL,
  `code_etape` varchar(20) NOT NULL,
  `code_version` varchar(10) NOT NULL,
  `code_departement` varchar(10) NOT NULL,
  `code_diplome` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `annee`
--

INSERT INTO `annee` (`id`, `diplome_id`, `created`, `updated`, `libelle`, `ordre`, `libelle_long`, `opt_alternance`, `actif`, `couleur`, `code_etape`, `code_version`, `code_departement`, `code_diplome`) VALUES
(1, 1, '2019-11-26 04:33:15', '2019-11-26 04:33:15', 'MMI1', 1, '1ere année du DUT MMI', 0, 1, '#011993', '3TS984A', '101', '985', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `annee_universitaire`
--

CREATE TABLE `annee_universitaire` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(30) NOT NULL,
  `annee` int(11) NOT NULL,
  `commentaire` longtext,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `annee_universitaire`
--

INSERT INTO `annee_universitaire` (`id`, `created`, `updated`, `libelle`, `annee`, `commentaire`, `active`) VALUES
(1, '2019-11-25 08:53:48', '2019-11-25 08:53:48', '2019-2020', 2019, NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `apc_apprentissage_critique`
--

CREATE TABLE `apc_apprentissage_critique` (
  `id` int(11) NOT NULL,
  `niveau_id` int(11) DEFAULT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `apc_competence`
--

CREATE TABLE `apc_competence` (
  `id` int(11) NOT NULL,
  `diplome_id` int(11) DEFAULT NULL,
  `libelle` varchar(255) NOT NULL,
  `nom_court` varchar(50) NOT NULL,
  `couleur` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `apc_composante_essentielle`
--

CREATE TABLE `apc_composante_essentielle` (
  `id` int(11) NOT NULL,
  `competence_id` int(11) DEFAULT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `apc_niveau`
--

CREATE TABLE `apc_niveau` (
  `id` int(11) NOT NULL,
  `competence_id` int(11) DEFAULT NULL,
  `annee_id` int(11) DEFAULT NULL,
  `libelle` varchar(255) NOT NULL,
  `ordre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `categorie_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `titre` varchar(255) NOT NULL,
  `texte` longtext NOT NULL,
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `ArticleLike`
--

CREATE TABLE `ArticleLike` (
  `id` int(11) NOT NULL,
  `article_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `article_categorie`
--

CREATE TABLE `article_categorie` (
  `id` int(11) NOT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `article_etudiant`
--

CREATE TABLE `article_etudiant` (
  `article_id` int(11) NOT NULL,
  `etudiant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `article_semestre`
--

CREATE TABLE `article_semestre` (
  `article_id` int(11) NOT NULL,
  `semestre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `bac`
--

CREATE TABLE `bac` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(30) NOT NULL,
  `libelle_long` varchar(255) NOT NULL,
  `code_apogee` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `bac`
--

INSERT INTO `bac` (`id`, `created`, `updated`, `libelle`, `libelle_long`, `code_apogee`) VALUES
(1, '2019-11-25 08:53:48', '2019-11-25 08:53:48', 'S', 'Scientifique', NULL),
(2, '2019-11-25 08:53:48', '2019-11-25 08:53:48', 'L', 'Littéraire', NULL),
(3, '2019-11-25 08:53:48', '2019-11-25 08:53:48', 'ES', 'Economique et Social', NULL),
(4, '2019-11-25 08:53:48', '2019-11-25 08:53:48', 'Pro', 'Professionnel', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `borne`
--

CREATE TABLE `borne` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `icone` varchar(20) NOT NULL,
  `couleur` varchar(20) NOT NULL,
  `message` longtext NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `date_debut_publication` datetime NOT NULL,
  `date_fin_publication` datetime NOT NULL,
  `visible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `borne_semestre`
--

CREATE TABLE `borne_semestre` (
  `borne_id` int(11) NOT NULL,
  `semestre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `cahier_texte`
--

CREATE TABLE `cahier_texte` (
  `id` int(11) NOT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `matiere_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(150) NOT NULL,
  `description` longtext NOT NULL,
  `date_retour` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `cahier_texte_fichier`
--

CREATE TABLE `cahier_texte_fichier` (
  `cahier_texte_id` int(11) NOT NULL,
  `fichier_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `calendrier`
--

CREATE TABLE `calendrier` (
  `id` int(11) NOT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `semaine_formation` int(11) NOT NULL,
  `semaine_reelle` int(11) NOT NULL,
  `date_lundi` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `calendrier`
--

INSERT INTO `calendrier` (`id`, `annee_universitaire_id`, `created`, `updated`, `semaine_formation`, `semaine_reelle`, `date_lundi`) VALUES
(1, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 0, 35, '2019-08-26 00:00:00'),
(2, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 1, 36, '2019-09-02 00:00:00'),
(3, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 2, 37, '2019-09-09 00:00:00'),
(4, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 3, 38, '2019-09-16 00:00:00'),
(5, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 4, 39, '2019-09-23 00:00:00'),
(6, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 5, 40, '2019-09-30 00:00:00'),
(7, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 6, 41, '2019-10-07 00:00:00'),
(8, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 7, 42, '2019-10-14 00:00:00'),
(9, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 8, 43, '2019-10-21 00:00:00'),
(10, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 9, 44, '2019-10-28 00:00:00'),
(11, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 10, 45, '2019-11-04 00:00:00'),
(12, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 11, 46, '2019-11-11 00:00:00'),
(13, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 12, 47, '2019-11-18 00:00:00'),
(14, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 13, 48, '2019-11-25 00:00:00'),
(15, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 14, 49, '2019-12-02 00:00:00'),
(16, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 15, 50, '2019-12-09 00:00:00'),
(17, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 16, 51, '2019-12-16 00:00:00'),
(18, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 17, 52, '2019-12-23 00:00:00'),
(19, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 18, 1, '2019-12-30 00:00:00'),
(20, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 19, 2, '2020-01-06 00:00:00'),
(21, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 20, 3, '2020-01-13 00:00:00'),
(22, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 21, 4, '2020-01-20 00:00:00'),
(23, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 22, 5, '2020-01-27 00:00:00'),
(24, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 23, 6, '2020-02-03 00:00:00'),
(25, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 24, 7, '2020-02-10 00:00:00'),
(26, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 25, 8, '2020-02-17 00:00:00'),
(27, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 26, 9, '2020-02-24 00:00:00'),
(28, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 27, 10, '2020-03-02 00:00:00'),
(29, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 28, 11, '2020-03-09 00:00:00'),
(30, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 29, 12, '2020-03-16 00:00:00'),
(31, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 30, 13, '2020-03-23 00:00:00'),
(32, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 31, 14, '2020-03-30 00:00:00'),
(33, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 32, 15, '2020-04-06 00:00:00'),
(34, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 33, 16, '2020-04-13 00:00:00'),
(35, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 34, 17, '2020-04-20 00:00:00'),
(36, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 35, 18, '2020-04-27 00:00:00'),
(37, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 36, 19, '2020-05-04 00:00:00'),
(38, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 37, 20, '2020-05-11 00:00:00'),
(39, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 38, 21, '2020-05-18 00:00:00'),
(40, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 39, 22, '2020-05-25 00:00:00'),
(41, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 40, 23, '2020-06-01 00:00:00'),
(42, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 41, 24, '2020-06-08 00:00:00'),
(43, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 42, 25, '2020-06-15 00:00:00'),
(44, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 43, 26, '2020-06-22 00:00:00'),
(45, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 44, 27, '2020-06-29 00:00:00'),
(46, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 45, 28, '2020-07-06 00:00:00'),
(47, 1, '2020-01-04 00:00:00', '2020-01-04 00:00:00', 46, 29, '2020-07-13 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `celcat_calendrier`
--

CREATE TABLE `celcat_calendrier` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `semaine_formation` int(11) NOT NULL,
  `semaine_reelle` int(11) NOT NULL,
  `date_lundi` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `celcat_event`
--

CREATE TABLE `celcat_event` (
  `id` int(11) NOT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `event_id` int(11) NOT NULL,
  `jour` int(11) NOT NULL,
  `debut` datetime NOT NULL,
  `fin` datetime NOT NULL,
  `semaine_formation` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `code_module` varchar(20) NOT NULL,
  `lib_module` varchar(255) NOT NULL,
  `code_personnel` varchar(20) NOT NULL,
  `lib_personnel` varchar(255) NOT NULL,
  `departement_id` int(11) NOT NULL,
  `code_salle` varchar(20) NOT NULL,
  `lib_salle` varchar(255) NOT NULL,
  `code_groupe` varchar(30) NOT NULL,
  `lib_groupe` varchar(30) NOT NULL,
  `update_event` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `celcat_events`
--

CREATE TABLE `celcat_events` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `event_id` int(11) NOT NULL,
  `jour` int(11) NOT NULL,
  `debut` datetime NOT NULL,
  `fin` datetime NOT NULL,
  `semaine_formation` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `code_module` varchar(20) NOT NULL,
  `lib_module` varchar(255) NOT NULL,
  `code_personnel` varchar(20) NOT NULL,
  `lib_personnel` varchar(255) NOT NULL,
  `departement_id` int(11) NOT NULL,
  `code_salle` varchar(20) NOT NULL,
  `lib_salle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `code_insee`
--

CREATE TABLE `code_insee` (
  `id` int(11) NOT NULL,
  `code_insee` varchar(6) NOT NULL,
  `code_postal` varchar(60) NOT NULL,
  `ville` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `competence`
--

CREATE TABLE `competence` (
  `id` int(11) NOT NULL,
  `diplome_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `code` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `configuration`
--

CREATE TABLE `configuration` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `cle` varchar(50) NOT NULL,
  `valeur` varchar(255) NOT NULL,
  `type` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `configuration`
--

INSERT INTO `configuration` (`id`, `created`, `updated`, `cle`, `valeur`, `type`) VALUES
(1, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'MAIL_FROM', 'intranet@iut-troyes.univ-reims.fr', 'T'),
(2, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'NOM_IUT', 'IUT de Troyes', 'T'),
(3, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'NOM_UNIVERSITE', 'Université de Reims Champagne-Ardenne', 'T'),
(4, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'LOGO_IUT', 'logo_iut.png', 'T'),
(5, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'SITE_IUT', 'https://iut-troyes.univ-reims.fr', 'T'),
(6, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'SITE_INTRANET_IUT', 'https://intranet.iut-troyes.univ-reims.fr', 'T'),
(7, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'ADRESSE_IUT', 'Iut de Troyes, 9, Rue de Québec, CS90396, 10026 Troyes Cedex', 'T'),
(8, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'BASE_PATH', 'upload/', 'T'),
(9, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'LOGO_UNIVERSITE', 'urca.jpeg', 'T'),
(10, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'COLOR_IUT', '#FAB001', 'T'),
(11, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'MODIFICATION_PPN', '1', 'T'),
(12, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'MODIFICATION_GROUPE', '1', 'T'),
(13, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'LOGO_INTRANET_IUT', 'logo_intranet_iut_troyes.svg', 'T'),
(14, '2020-06-07 18:57:59', '2020-06-07 18:57:59', 'GRATIFICATION_HEURE_STAGE', '3.90', 'T'),
(15, '2019-11-25 10:49:20', '2019-11-25 10:49:20', 'MAIL_DEBUG', 'contact@univ-reims.fr', 'T');

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `fonction` varchar(255) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `portable` varchar(20) DEFAULT NULL,
  `civilite` varchar(3) NOT NULL,
  `fax` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `courrier`
--

CREATE TABLE `courrier` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `texte` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `creneau_bloque`
--

CREATE TABLE `creneau_bloque` (
  `id` int(11) NOT NULL,
  `creneau_id` int(11) DEFAULT NULL,
  `semaine_id` int(11) DEFAULT NULL,
  `texte` varchar(255) DEFAULT NULL,
  `obligatoire` tinyint(1) NOT NULL,
  `type` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `creneau_cours`
--

CREATE TABLE `creneau_cours` (
  `id` int(11) NOT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `jour` int(11) NOT NULL,
  `debut` time NOT NULL,
  `fin` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `date`
--

CREATE TABLE `date` (
  `id` int(11) NOT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `texte` longtext,
  `date_debut` date NOT NULL,
  `heure_debut` time DEFAULT NULL,
  `date_fin` date NOT NULL,
  `heure_fin` time DEFAULT NULL,
  `lieu` varchar(150) NOT NULL,
  `allday` tinyint(1) NOT NULL,
  `qui` varchar(1) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `date_semestre`
--

CREATE TABLE `date_semestre` (
  `date_id` int(11) NOT NULL,
  `semestre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `departement`
--

CREATE TABLE `departement` (
  `id` int(11) NOT NULL,
  `ufr_id` int(11) DEFAULT NULL,
  `respri_id` int(11) DEFAULT NULL,
  `annee_universitaire_prepare_id` int(11) DEFAULT NULL,
  `resp_materiel_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `libelle` varchar(255) NOT NULL,
  `logo_name` varchar(50) NOT NULL,
  `tel_contact` varchar(16) DEFAULT NULL,
  `fax` varchar(16) DEFAULT NULL,
  `couleur` varchar(16) DEFAULT NULL,
  `site_web` varchar(255) DEFAULT NULL,
  `description` longtext,
  `opt_update_celcat` tinyint(1) NOT NULL,
  `opt_agence` tinyint(1) NOT NULL,
  `opt_materiel` tinyint(1) NOT NULL,
  `opt_edt` tinyint(1) NOT NULL,
  `opt_stage` tinyint(1) NOT NULL,
  `opt_synthese` tinyint(1) NOT NULL,
  `opt_messagerie` tinyint(1) NOT NULL,
  `opt_annee_previsionnel` int(11) NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `preparation_annee` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `departement`
--

INSERT INTO `departement` (`id`, `ufr_id`, `respri_id`, `annee_universitaire_prepare_id`, `resp_materiel_id`, `created`, `updated`, `uuid`, `libelle`, `logo_name`, `tel_contact`, `fax`, `couleur`, `site_web`, `description`, `opt_update_celcat`, `opt_agence`, `opt_materiel`, `opt_edt`, `opt_stage`, `opt_synthese`, `opt_messagerie`, `opt_annee_previsionnel`, `actif`, `preparation_annee`) VALUES
(1, 1, 3, NULL, NULL, '2019-11-26 04:21:39', '2020-10-12 11:56:54', 0x6df2b5cfc40047b1b4e1355e4613f921, 'MMI', '5ddceea328ee3321808794.png', '0321457896', NULL, '#005493', NULL, 'Département MMI', 0, 1, 1, 1, 1, 1, 1, 2019, 1, 0),
(2, 1, 6, NULL, NULL, '2020-02-16 08:01:12', '2020-02-16 09:20:12', 0xadb2a2e165754148a759fbe4db94c5fb, 'PANDA', '5e493d18d938f325568758.png', NULL, NULL, '#ff0080', 'https://amazon.fr', 'Une description de dingue !!! héhé :)\r\n<h1>Faille (ou pas)</h1>', 1, 1, 1, 1, 1, 1, 1, 2020, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `diplome`
--

CREATE TABLE `diplome` (
  `id` int(11) NOT NULL,
  `responsable_diplome_id` int(11) DEFAULT NULL,
  `assistant_diplome_id` int(11) DEFAULT NULL,
  `type_diplome_id` int(11) DEFAULT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `opt_nb_jours_saisie` int(11) NOT NULL,
  `opt_dilpome_decale` tinyint(1) NOT NULL,
  `opt_suppr_absence` tinyint(1) NOT NULL,
  `opt_methode_calcul` varchar(10) NOT NULL,
  `opt_anonymat` tinyint(1) NOT NULL,
  `opt_commentaires_releve` tinyint(1) NOT NULL,
  `opt_espace_perso_visible` tinyint(1) NOT NULL,
  `volume_horaire` int(11) NOT NULL,
  `code_celcat_departement` int(11) NOT NULL,
  `sigle` varchar(40) NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `opt_semaines_visibles` int(11) NOT NULL,
  `code_etape` varchar(20) NOT NULL,
  `code_version` varchar(10) NOT NULL,
  `code_departement` varchar(10) NOT NULL,
  `code_diplome` varchar(20) DEFAULT NULL,
  `opt_responsable_qualite_id` int(11) DEFAULT NULL,
  `opt_certifie_qualite` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `diplome`
--

INSERT INTO `diplome` (`id`, `responsable_diplome_id`, `assistant_diplome_id`, `type_diplome_id`, `departement_id`, `annee_universitaire_id`, `created`, `updated`, `libelle`, `opt_nb_jours_saisie`, `opt_dilpome_decale`, `opt_suppr_absence`, `opt_methode_calcul`, `opt_anonymat`, `opt_commentaires_releve`, `opt_espace_perso_visible`, `volume_horaire`, `code_celcat_departement`, `sigle`, `actif`, `opt_semaines_visibles`, `code_etape`, `code_version`, `code_departement`, `code_diplome`, `opt_responsable_qualite_id`, `opt_certifie_qualite`) VALUES
(1, 2, 1, 1, 1, 1, '2019-11-26 04:31:54', '2020-02-16 09:03:40', 'Métiers du Multimédia et de l\'Internet', 15, 0, 1, 'moymodules', 0, 0, 1, 1800, 721, 'MMI', 1, 2, '3TS984', '945', '101', '1', NULL, 0);

-- --------------------------------------------------------

--
-- Structure de la table `disponibilite`
--

CREATE TABLE `disponibilite` (
  `id` int(11) NOT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `jour` int(11) NOT NULL,
  `heure` varchar(10) NOT NULL,
  `etat` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `document`
--

CREATE TABLE `document` (
  `id` int(11) NOT NULL,
  `type_document_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `taille` double NOT NULL,
  `type_fichier` varchar(100) NOT NULL,
  `description` longtext,
  `libelle` varchar(100) NOT NULL,
  `document_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `document`
--

INSERT INTO `document` (`id`, `type_document_id`, `created`, `updated`, `uuid`, `taille`, `type_fichier`, `description`, `libelle`, `document_name`) VALUES
(1, NULL, '2020-02-09 17:30:34', '2020-02-09 17:30:34', 0x427434d2c3a5461e9228b9025f8eb3ac, 7284, 'image/png', 'Dance monkey héé :)\r\n<h1>MONKEY !</h1>', 'Test document', '5e40880a640f0186220698.png'),
(2, 1, '2020-02-09 17:33:01', '2020-02-09 17:33:01', 0xb69c1e01acf44e60b21f9eb60cae12e6, 24960, 'image/jpeg', '<script>alert(\'Ceci est une faille de sécurité...\');</script>', 'Attention', '5e40889d6b4d6661378579.jpg'),
(3, 1, '2020-02-09 17:43:16', '2020-02-09 17:43:50', 0x5e6d3587d26d4641b7d8d0cd74303844, 772450, 'text/x-php', 'Fail', 'Fail', '5e408b04d6793623431898.php');

-- --------------------------------------------------------

--
-- Structure de la table `DocumentFavori`
--

CREATE TABLE `DocumentFavori` (
  `id` int(11) NOT NULL,
  `document_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `document_semestre`
--

CREATE TABLE `document_semestre` (
  `document_id` int(11) NOT NULL,
  `semestre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `document_semestre`
--

INSERT INTO `document_semestre` (`document_id`, `semestre_id`) VALUES
(1, 1),
(2, 1),
(3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `edt_planning`
--

CREATE TABLE `edt_planning` (
  `id` int(11) NOT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `matiere_id` int(11) DEFAULT NULL,
  `intervenant_id` int(11) DEFAULT NULL,
  `jour` int(11) NOT NULL,
  `salle` varchar(30) NOT NULL,
  `ordre` varchar(20) NOT NULL,
  `debut` int(11) NOT NULL,
  `fin` int(11) NOT NULL,
  `semaine` int(11) NOT NULL,
  `evaluation` tinyint(1) NOT NULL,
  `texte` varchar(150) DEFAULT NULL,
  `groupe` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `commentaire` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `edt_planning`
--

INSERT INTO `edt_planning` (`id`, `semestre_id`, `matiere_id`, `intervenant_id`, `jour`, `salle`, `ordre`, `debut`, `fin`, `semaine`, `evaluation`, `texte`, `groupe`, `type`, `commentaire`) VALUES
(1, 1, NULL, 4, 1, '', '0', 3, 9, 24, 0, 'Atelier Loisirs', 1, 'CM', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `Emprunt`
--

CREATE TABLE `Emprunt` (
  `id` int(11) NOT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `date_debut` datetime NOT NULL,
  `date_fin` datetime NOT NULL,
  `motif` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `etat` varchar(10) NOT NULL,
  `date_sortie` datetime DEFAULT NULL,
  `date_retour` datetime DEFAULT NULL,
  `date_validation` datetime DEFAULT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `emprunt_materiel`
--

CREATE TABLE `emprunt_materiel` (
  `id` int(11) NOT NULL,
  `emprunt_id` int(11) DEFAULT NULL,
  `materiel_id` int(11) DEFAULT NULL,
  `etat` varchar(5) NOT NULL,
  `datesortie` datetime DEFAULT NULL,
  `daterentree` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `entreprise`
--

CREATE TABLE `entreprise` (
  `id` int(11) NOT NULL,
  `adresse_id` int(11) DEFAULT NULL,
  `responsable_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `siret` varchar(30) NOT NULL,
  `raison_sociale` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `id` int(11) NOT NULL,
  `adresse_id` int(11) DEFAULT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `adresse_parentale_id` int(11) DEFAULT NULL,
  `bac_id` int(11) DEFAULT NULL,
  `roles` longtext NOT NULL,
  `created` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `photo_name` varchar(50) NOT NULL,
  `num_etudiant` varchar(20) NOT NULL,
  `num_ine` varchar(20) DEFAULT NULL,
  `annee_bac` int(11) DEFAULT NULL,
  `boursier` tinyint(1) NOT NULL,
  `demandeur_emploi` tinyint(1) NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  `amenagements_particuliers` longtext,
  `promotion` int(11) NOT NULL,
  `intitule_securite_sociale` varchar(255) DEFAULT NULL,
  `adresse_securite_sociale` varchar(255) DEFAULT NULL,
  `annee_sortie` int(11) NOT NULL,
  `username` varchar(75) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `type_user` varchar(75) NOT NULL,
  `nom` varchar(75) NOT NULL,
  `prenom` varchar(75) NOT NULL,
  `mail_univ` varchar(255) NOT NULL,
  `site_univ` varchar(255) DEFAULT NULL,
  `mail_perso` varchar(255) DEFAULT NULL,
  `site_perso` varchar(255) DEFAULT NULL,
  `civilite` varchar(3) NOT NULL DEFAULT 'M.',
  `date_naissance` date DEFAULT NULL,
  `tel1` varchar(20) DEFAULT NULL,
  `tel2` varchar(20) DEFAULT NULL,
  `remarque` longtext,
  `signature` longtext,
  `visible` tinyint(1) NOT NULL,
  `updated` datetime NOT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `reset_token` varchar(255) DEFAULT NULL,
  `login_specifique` varchar(50) DEFAULT NULL,
  `formation_continue` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `etudiant`
--

INSERT INTO `etudiant` (`id`, `adresse_id`, `semestre_id`, `adresse_parentale_id`, `bac_id`, `roles`, `created`, `uuid`, `photo_name`, `num_etudiant`, `num_ine`, `annee_bac`, `boursier`, `demandeur_emploi`, `deleted`, `amenagements_particuliers`, `promotion`, `intitule_securite_sociale`, `adresse_securite_sociale`, `annee_sortie`, `username`, `password`, `slug`, `type_user`, `nom`, `prenom`, `mail_univ`, `site_univ`, `mail_perso`, `site_perso`, `civilite`, `date_naissance`, `tel1`, `tel2`, `remarque`, `signature`, `visible`, `updated`, `departement_id`, `reset_token`, `login_specifique`, `formation_continue`) VALUES
(1, NULL, 1, NULL, 1, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x38303100000000000000000000000000, 'allard_gabriel.jpg', '1851.3071833656236', '5325339837B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'alla0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'gabriel.allard', 'ETUDIANT', 'ALLARD', 'Gabriel', 'gabriel.allard@etudiant.univ-reims.fr', '', 'gabriel.allard@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-10-12 11:56:54', 1, '', NULL, 0),
(2, NULL, 1, NULL, 2, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x37310000000000000000000000000000, 'aucoin_noemie.jpg', '1091.3090138615194', '6434381902B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'auco0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'noemie.aucoin', 'ETUDIANT', 'AUCOIN', 'Noémie', 'noemie.aucoin@etudiant.univ-reims.fr', '', 'noemie.aucoin@gmail.com', '', 'Mme', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:46:09', 1, '', NULL, 0),
(3, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x39343100000000000000000000000000, 'bergeron_armand.jpg', '9902.623826547175', '560207284B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'berg0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'armand.bergeron', 'ETUDIANT', 'BERGERON', 'Armand', 'armand.bergeron@etudiant.univ-reims.fr', '', 'armand.bergeron@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(4, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x32313500000000000000000000000000, 'courtois_aude.jpg', '6239.192398487769', '8629207761B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'cour0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'aude.courtois', 'ETUDIANT', 'COURTOIS', 'Aude', 'aude.courtois@etudiant.univ-reims.fr', '', 'aude.courtois@gmail.com', '', 'Mme', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(5, NULL, 1, NULL, 4, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x34363900000000000000000000000000, 'covillon_theo.jpg', '1488.0908201337706', '7110637702B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'covi0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'theo.covillon', 'ETUDIANT', 'COVILLON', 'Théo', 'theo.covillon@etudiant.univ-reims.fr', '', 'theo.covillon@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(6, NULL, 1, NULL, 1, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x32353600000000000000000000000000, 'delacruz_antonio.jpg', '8722.877212541995', '5858850127B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'dela0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'antonio.delacruz', 'ETUDIANT', 'DELACRUZ', 'Antonio', 'antonio.delacruz@etudiant.univ-reims.fr', '', 'antonio.delacruz@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(7, NULL, 1, NULL, 2, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x37363800000000000000000000000000, 'deserres_thibault.jpg', '9150.113909645112', '9382246676B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'dese0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'thibault.deserres', 'ETUDIANT', 'DESERRES', 'Thibault', 'thibault.deserres@etudiant.univ-reims.fr', '', 'thibault.deserres@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(8, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x38373300000000000000000000000000, 'etienne_caroline.jpg', '9581.938217936025', '3490853562B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'etie0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'caroline.etienne', 'ETUDIANT', 'ETIENNE', 'Caroline', 'caroline.etienne@etudiant.univ-reims.fr', '', 'caroline.etienne@gmail.com', '', 'Mme', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(9, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x38343500000000000000000000000000, 'fondue_robert.jpg', '459.34966808124415', '1603680354B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'fond0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'robert.fondue', 'ETUDIANT', 'FONDUE', 'Robert', 'robert.fondue@etudiant.univ-reims.fr', '', 'robert.fondue@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(10, NULL, 1, NULL, 4, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x31393900000000000000000000000000, 'gauvin_lucas.jpg', '3550.9339939345923', '2927336349B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'gauv0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'lucas.gauvin', 'ETUDIANT', 'GAUVIN', 'Lucas', 'lucas.gauvin@etudiant.univ-reims.fr', '', 'lucas.gauvin@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(11, NULL, 1, NULL, 1, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x34393400000000000000000000000000, 'gosselin_quentin.jpg', '6376.621272765679', '4621034283B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'goss0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'quentin.gosselin', 'ETUDIANT', 'GOSSELIN', 'Quentin', 'quentin.gosselin@etudiant.univ-reims.fr', '', 'quentin.gosselin@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(12, NULL, 1, NULL, 2, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x37353400000000000000000000000000, 'huard_romane.jpg', '1230.3046893610663', '725304074B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'huar0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'romane.huard', 'ETUDIANT', 'HUARD', 'Romane', 'romane.huard@etudiant.univ-reims.fr', '', 'romane.huard@gmail.com', '', 'Mme', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(13, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x31373200000000000000000000000000, 'janer_pierre.jpg', '7021.659935844745', '5596307304B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'jane0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'pierre.janer', 'ETUDIANT', 'JANER', 'Pierre', 'pierre.janer@etudiant.univ-reims.fr', '', 'pierre.janer@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(14, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x39353300000000000000000000000000, 'lavalle_karine.jpg', '1417.3859184769783', '3873343355B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'lava0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'karine.lavalle', 'ETUDIANT', 'LAVALLE', 'Karine', 'karine.lavalle@etudiant.univ-reims.fr', '', 'karine.lavalle@gmail.com', '', 'Mme', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(15, NULL, 1, NULL, 4, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x35343800000000000000000000000000, 'lavoie_charline.jpg', '6021.950092187105', '1212153695B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'lavo0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'charline.lavoie', 'ETUDIANT', 'LAVOIE', 'Charline', 'charline.lavoie@etudiant.univ-reims.fr', '', 'charline.lavoie@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(16, NULL, 1, NULL, 1, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x31393000000000000000000000000000, 'louis_nicolas.jpg', '5857.593012841039', '4005594995B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'loui0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'nicolas.louis', 'ETUDIANT', 'LOUIS', 'Nicolas', 'nicolas.louis@etudiant.univ-reims.fr', '', 'nicolas.louis@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(17, NULL, 1, NULL, 2, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x36303300000000000000000000000000, 'mazure_lea.jpg', '1222.1150949803323', '4832109665B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'mazu0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'lea.mazure', 'ETUDIANT', 'MAZURE', 'Léa', 'lea.mazure@etudiant.univ-reims.fr', '', 'lea.mazure@gmail.com', '', 'Mme', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(18, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x36303600000000000000000000000000, 'meziere_jeanne.jpg', '8537.796743714993', '4268997901B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'mezi0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'jeanne.meziere', 'ETUDIANT', 'MEZIERE', 'Jeanne', 'jeanne.meziere@etudiant.univ-reims.fr', '', 'jeanne.meziere@gmail.com', '', 'Mme', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(19, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x31373000000000000000000000000000, 'monty_timothee.jpg', '9022.638740970417', '7734707579B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'mont0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'thimotee.monty', 'ETUDIANT', 'MONTY', 'Timothée', 'thimotee.monty@etudiant.univ-reims.fr', '', 'thimotee.monty@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(20, NULL, 1, NULL, 4, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x34393600000000000000000000000000, 'nadeau_emilie.jpg', '9499.803781043556', '6265805296B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'nade0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'emilie.nadeau', 'ETUDIANT', 'NADEAU', 'Emilie', 'emilie.nadeau@etudiant.univ-reims.fr', '', 'emilie.nadeau@gmail.com', '', 'Mme', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(21, NULL, 1, NULL, 1, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x31333800000000000000000000000000, 'payet_kevin.jpg', '431.10298964297675', '104757294B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'paye0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'kevin.payet', 'ETUDIANT', 'PAYET', 'Kevin', 'kevin.payet@etudiant.univ-reims.fr', '', 'kevin.payet@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(22, NULL, 1, NULL, 2, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x35333600000000000000000000000000, 'perrault_nicolas.jpg', '3656.1039124206677', '1645017048B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'perr0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'nicolas.perrault', 'ETUDIANT', 'PERRAULT', 'Nicolas', 'nicolas.perrault@etudiant.univ-reims.fr', '', 'nicolas.perrault@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(23, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x37393000000000000000000000000000, 'riviera_tiago.jpg', '6987.210900510858', '3361615048B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'rivi0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'tiago.riviera', 'ETUDIANT', 'RIVIERA', 'Tiago', 'tiago.riviera@etudiant.univ-reims.fr', '', 'tiago.riviera@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(24, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x32313700000000000000000000000000, 'robillard_fabien.jpg', '3967.7430726287357', '7195042771B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'robi0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'fabien.robillard', 'ETUDIANT', 'ROBILLARD', 'Fabien', 'fabien.robillard@etudiant.univ-reims.fr', '', 'fabien.robillard@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(25, NULL, 1, NULL, 4, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x34333800000000000000000000000000, 'savigny_charles.jpg', '8877.082968947556', '2393425503B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'savi0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'charles.savigny', 'ETUDIANT', 'SAVIGNY', 'Charles', 'charles.savigny@etudiant.univ-reims.fr', '', 'charles.savigny@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(26, NULL, 1, NULL, 1, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x32343100000000000000000000000000, 'tougas_agathe.jpg', '2482.1859341880177', '2661139424B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'toug0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'agathe.tougas', 'ETUDIANT', 'TOUGAS', 'Agathe', 'agathe.tougas@etudiant.univ-reims.fr', '', 'agathe.tougas@gmail.com', '', 'Mme', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(27, NULL, 1, NULL, 2, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x39313700000000000000000000000000, 'truchet_thomas.jpg', '5779.6810714338735', '5687187264B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'truc0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'thomas.truchet', 'ETUDIANT', 'TRUCHET', 'Thomas', 'thomas.truchet@etudiant.univ-reims.fr', '', 'thomas.truchet@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(28, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x34363300000000000000000000000000, 'vanaken_mathieu.jpg', '1451.8478619417622', '6638093897B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'vana0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'mathieu.vanaken', 'ETUDIANT', 'VANAKEN', 'Mathieu', 'mathieu.vanaken@etudiant.univ-reims.fr', '', 'mathieu.vanaken@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0),
(29, NULL, 1, NULL, 3, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x33353000000000000000000000000000, 'vignon_pauline.jpg', '9920.196402743642', '3859177141B', 2019, 0, 0, 1, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'vign0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'pauline.vignon', 'ETUDIANT', 'VIGNON', 'Pauline', 'pauline.vignon@etudiant.univ-reims.fr', '', 'pauline.vignon@gmail.com', '', 'Mme', '1999-01-10', '', '', '', '', 1, '2020-02-16 08:49:05', 1, '', NULL, 0),
(30, NULL, 1, NULL, 4, '[\"ROLE_ETUDIANT\"]', '2020-01-10 00:00:00', 0x32373100000000000000000000000000, 'zurie_antoine.jpg', '5245.438735229372', '3422117156B', 2019, 0, 0, 0, '', 2019, 'LMDE', 'Rue de la mutualité, 10000 Troyes', 0, 'zuri0001', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'antoine.zurie', 'ETUDIANT', 'ZURIE', 'Antoine', 'antoine.zurie@etudiant.univ-reims.fr', '', 'antoine.zurie@gmail.com', '', 'M.', '1999-01-10', '', '', '', '', 1, '2020-02-09 17:26:55', 1, '', NULL, 0);

-- --------------------------------------------------------

--
-- Structure de la table `etudiant_groupe`
--

CREATE TABLE `etudiant_groupe` (
  `etudiant_id` int(11) NOT NULL,
  `groupe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `etudiant_groupe`
--

INSERT INTO `etudiant_groupe` (`etudiant_id`, `groupe_id`) VALUES
(1, 1),
(1, 3),
(1, 6),
(2, 1),
(2, 3),
(2, 7),
(3, 1),
(3, 3),
(3, 7),
(4, 1),
(4, 2),
(4, 4),
(5, 1),
(5, 2),
(5, 5),
(6, 1),
(6, 3),
(6, 6),
(7, 1),
(7, 3),
(7, 6),
(8, 1),
(8, 2),
(8, 5),
(9, 1),
(9, 3),
(9, 7),
(10, 1),
(10, 3),
(10, 7),
(11, 1),
(11, 3),
(11, 6),
(12, 1),
(12, 2),
(12, 4),
(13, 1),
(13, 2),
(13, 5),
(14, 1),
(14, 2),
(14, 4),
(15, 1),
(15, 3),
(15, 7),
(16, 1),
(16, 2),
(16, 5),
(17, 1),
(17, 3),
(17, 6),
(18, 1),
(18, 3),
(18, 7),
(19, 1),
(19, 2),
(19, 5),
(20, 1),
(20, 2),
(20, 4),
(21, 1),
(21, 2),
(21, 5),
(22, 1),
(22, 3),
(22, 6),
(23, 1),
(23, 2),
(23, 4),
(24, 1),
(24, 2),
(24, 5),
(25, 1),
(25, 3),
(25, 6),
(26, 1),
(26, 2),
(26, 4),
(27, 1),
(27, 3),
(27, 7),
(28, 1),
(28, 2),
(28, 4),
(29, 1),
(29, 2),
(29, 4),
(30, 1),
(30, 2),
(30, 5);

-- --------------------------------------------------------

--
-- Structure de la table `evaluation`
--

CREATE TABLE `evaluation` (
  `id` int(11) NOT NULL,
  `matiere_id` int(11) DEFAULT NULL,
  `personnel_auteur_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `type_groupe_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `date_evaluation` date NOT NULL,
  `visible` tinyint(1) NOT NULL,
  `modifiable` tinyint(1) NOT NULL,
  `coefficient` double NOT NULL,
  `commentaire` varchar(255) DEFAULT NULL,
  `libelle` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `evaluation`
--

INSERT INTO `evaluation` (`id`, `matiere_id`, `personnel_auteur_id`, `parent_id`, `type_groupe_id`, `annee_universitaire_id`, `created`, `updated`, `uuid`, `date_evaluation`, `visible`, `modifiable`, `coefficient`, `commentaire`, `libelle`) VALUES
(3, 1, 4, NULL, 1, 1, '2020-01-16 06:10:02', '2020-01-16 06:10:02', 0x80b8f2eeeb3849b5af9872fe2e20e299, '2020-01-16', 1, 1, 2, 'Votre premier examen de mathématiques en MMI', 'Partiel de Bimestre N°1'),
(4, 1, 4, NULL, 2, 1, '2020-01-21 03:30:32', '2020-01-21 03:30:32', 0x03b212902c0a47a9ab158c9075e8f7d1, '2020-01-21', 1, 1, 2, 'dede', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `evaluation_personnel`
--

CREATE TABLE `evaluation_personnel` (
  `evaluation_id` int(11) NOT NULL,
  `personnel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `favori`
--

CREATE TABLE `favori` (
  `id` int(11) NOT NULL,
  `etudiant_demandeur_id` int(11) DEFAULT NULL,
  `etudiant_demande_id` int(11) DEFAULT NULL,
  `date_ajout` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `favori`
--

INSERT INTO `favori` (`id`, `etudiant_demandeur_id`, `etudiant_demande_id`, `date_ajout`) VALUES
(2, 1, 1, '2020-01-18 12:22:48');

-- --------------------------------------------------------

--
-- Structure de la table `fichier`
--

CREATE TABLE `fichier` (
  `id` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `taille` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `formation`
--

CREATE TABLE `formation` (
  `id` int(11) NOT NULL,
  `site_id` int(11) DEFAULT NULL,
  `respri_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `logo_name` varchar(50) NOT NULL,
  `tel_contact` varchar(16) DEFAULT NULL,
  `fax` varchar(16) DEFAULT NULL,
  `couleur` varchar(16) DEFAULT NULL,
  `site_web` varchar(255) DEFAULT NULL,
  `description` longtext,
  `opt_update_celcat` tinyint(1) NOT NULL,
  `opt_agence` tinyint(1) NOT NULL,
  `opt_materiel` tinyint(1) NOT NULL,
  `opt_edt` tinyint(1) NOT NULL,
  `opt_stage` tinyint(1) NOT NULL,
  `opt_synthese` tinyint(1) NOT NULL,
  `opt_messagerie` tinyint(1) NOT NULL,
  `opt_infos` tinyint(1) NOT NULL,
  `opt_annee_previsionnel` int(11) NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `actif` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `formation`
--

INSERT INTO `formation` (`id`, `site_id`, `respri_id`, `created`, `updated`, `libelle`, `logo_name`, `tel_contact`, `fax`, `couleur`, `site_web`, `description`, `opt_update_celcat`, `opt_agence`, `opt_materiel`, `opt_edt`, `opt_stage`, `opt_synthese`, `opt_messagerie`, `opt_infos`, `opt_annee_previsionnel`, `uuid`, `actif`) VALUES
(1, 1, 1, '2018-08-26 01:59:30', '2018-08-26 01:59:30', 'MMI', '5b8241c2c4ac7334266441.png', '0321457896', '0321457869', '#0096ff', 'http://mmi.iut-troyes.univ-reims.fr', 'Formation du web et du multilédia', 0, 1, 0, 1, 1, 1, 1, 0, 2018, 0x00000000000000000000000000000000, 0);

-- --------------------------------------------------------

--
-- Structure de la table `groupe`
--

CREATE TABLE `groupe` (
  `id` int(11) NOT NULL,
  `type_groupe_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(50) NOT NULL,
  `code_apogee` varchar(50) NOT NULL,
  `ordre` int(11) NOT NULL,
  `parcours_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `groupe`
--

INSERT INTO `groupe` (`id`, `type_groupe_id`, `parent_id`, `created`, `updated`, `libelle`, `code_apogee`, `ordre`, `parcours_id`) VALUES
(1, 1, NULL, '2020-01-13 13:34:28', '2020-01-13 13:34:28', 'CM', '3TW435CM', 1, NULL),
(2, 2, 1, '2020-01-13 13:34:28', '2020-01-13 13:34:28', 'TD-AB', '3TW435TDAB', 1, NULL),
(3, 2, 1, '2020-01-13 13:34:28', '2020-01-13 13:34:28', 'TD-CD', '3TW435TDCD', 2, NULL),
(4, 3, 2, '2020-01-13 13:34:28', '2020-01-13 13:34:28', 'TP-A', '3TW435TPA', 1, NULL),
(5, 3, 2, '2020-01-13 13:34:28', '2020-01-13 13:34:28', 'TP-B', '3TW435TPB', 2, NULL),
(6, 3, 3, '2020-01-13 13:34:28', '2020-01-13 13:34:28', 'TP-C', '3TW435TPC', 3, NULL),
(7, 3, 3, '2020-01-13 13:34:28', '2020-01-13 13:34:28', 'TP-D', '3TW435TPD', 4, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `help`
--

CREATE TABLE `help` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `titre` varchar(255) NOT NULL,
  `texte` longtext NOT NULL,
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `hrs`
--

CREATE TABLE `hrs` (
  `id` int(11) NOT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `diplome_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `type_hrs_id` int(11) DEFAULT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `nb_heures_td` double NOT NULL,
  `libelle` varchar(150) NOT NULL,
  `annee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `indisponibilite_personnel`
--

CREATE TABLE `indisponibilite_personnel` (
  `id` int(11) NOT NULL,
  `creneau_id` int(11) DEFAULT NULL,
  `semaine_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `priorite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `materiel`
--

CREATE TABLE `materiel` (
  `id` int(11) NOT NULL,
  `type_materiel_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `photo_name` varchar(50) DEFAULT NULL,
  `codebarre` varchar(50) DEFAULT NULL,
  `empruntable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `materiel`
--

INSERT INTO `materiel` (`id`, `type_materiel_id`, `created`, `updated`, `libelle`, `description`, `photo_name`, `codebarre`, `empruntable`) VALUES
(1, NULL, '2020-02-09 18:06:18', '2020-02-09 18:06:18', 'Panda rageur', 'Il adore tirer la langue !! :)', '5e40906a83988004407500.png', NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `materiel_commun`
--

CREATE TABLE `materiel_commun` (
  `id` int(11) NOT NULL,
  `contact_id` int(11) DEFAULT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `designation` varchar(150) NOT NULL,
  `description` longtext,
  `photo_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `materiel_commun_pret`
--

CREATE TABLE `materiel_commun_pret` (
  `id` int(11) NOT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `materiel_commun_id` int(11) DEFAULT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `date_emprunt` datetime(6) NOT NULL,
  `creneau` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `materiel_pret`
--

CREATE TABLE `materiel_pret` (
  `id` int(11) NOT NULL,
  `formation_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `date_demande` datetime NOT NULL,
  `date_debut_emprunt` datetime NOT NULL,
  `date_fin_emprunt` datetime NOT NULL,
  `date_validation` datetime NOT NULL,
  `etat_demande` varchar(1) NOT NULL,
  `motif` varchar(255) NOT NULL,
  `telephone` varchar(15) NOT NULL,
  `justification` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

CREATE TABLE `matiere` (
  `id` int(11) NOT NULL,
  `ue_id` int(11) DEFAULT NULL,
  `ppn_id` int(11) DEFAULT NULL,
  `parcours_id` int(11) DEFAULT NULL,
  `matiere_parent_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `code_matiere` varchar(20) NOT NULL,
  `cm_ppn` double NOT NULL,
  `td_ppn` double NOT NULL,
  `tp_ppn` double NOT NULL,
  `cm_formation` double NOT NULL,
  `td_formation` double NOT NULL,
  `tp_formation` double NOT NULL,
  `commentaire` longtext,
  `nb_notes` int(11) NOT NULL,
  `coefficient` double NOT NULL,
  `pac` tinyint(1) NOT NULL,
  `nb_ects` double NOT NULL,
  `objectifs_module` longtext,
  `competences_visees` longtext,
  `contenu` longtext,
  `pre_requis` longtext,
  `modalites` longtext,
  `prolongements` longtext,
  `mots_cles` longtext,
  `suspendu` tinyint(1) NOT NULL,
  `code_element` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `matiere`
--

INSERT INTO `matiere` (`id`, `ue_id`, `ppn_id`, `parcours_id`, `matiere_parent_id`, `created`, `updated`, `libelle`, `code_matiere`, `cm_ppn`, `td_ppn`, `tp_ppn`, `cm_formation`, `td_formation`, `tp_formation`, `commentaire`, `nb_notes`, `coefficient`, `pac`, `nb_ects`, `objectifs_module`, `competences_visees`, `contenu`, `pre_requis`, `modalites`, `prolongements`, `mots_cles`, `suspendu`, `code_element`) VALUES
(1, 1, 1, NULL, NULL, '2020-01-14 08:17:22', '2020-01-16 03:54:25', 'Mathématiques', 'M1234', 10, 10, 10, 10, 10, 10, NULL, 4, 1, 0, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '5TW1234'),
(2, 1, 1, NULL, NULL, '2020-01-16 03:50:28', '2020-01-16 03:51:07', 'LV1 | Anglais', '4567', 30, 30, 30, 30, 30, 30, 'English is better than passion', 5, 1, 0, 1, 'Get a good level', 'Oral, Textual and learning skills', NULL, NULL, NULL, NULL, NULL, 0, 'XRI');

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `expediteur_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `sujet` varchar(100) NOT NULL,
  `message` longtext NOT NULL,
  `important` tinyint(1) NOT NULL,
  `etat` varchar(1) NOT NULL,
  `type_destinataires` varchar(255) NOT NULL,
  `type` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Structure de la table `message_destinataire`
--

CREATE TABLE `message_destinataire` (
  `id` int(11) NOT NULL,
  `message_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `date_lu` datetime DEFAULT NULL,
  `etat` varchar(1) NOT NULL,
  `starred` tinyint(1) NOT NULL,
  `typeDestinataire` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `message_piece_jointe`
--

CREATE TABLE `message_piece_jointe` (
  `id` int(11) NOT NULL,
  `message_id` int(11) DEFAULT NULL,
  `fichier` varchar(50) NOT NULL,
  `extension` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `migration_versions`
--

CREATE TABLE `migration_versions` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Structure de la table `modification_note`
--

CREATE TABLE `modification_note` (
  `id` int(11) NOT NULL,
  `note_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `ancienne_note` double NOT NULL,
  `nouvelle_note` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Structure de la table `note`
--

CREATE TABLE `note` (
  `id` int(11) NOT NULL,
  `evaluation_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `note` double NOT NULL,
  `commentaire` varchar(255) NOT NULL,
  `absence_justifie` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `note`
--

INSERT INTO `note` (`id`, `evaluation_id`, `etudiant_id`, `created`, `updated`, `uuid`, `note`, `commentaire`, `absence_justifie`) VALUES
(39, 3, 1, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x55a34aeb40bb47baa13a66a1d2f09ff6, 0, '', 0),
(40, 3, 2, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x0df255abb4f24c6ab1aec0fb834befea, 12, '', 0),
(41, 3, 3, '2020-01-16 06:11:53', '2020-01-16 06:12:39', 0x750fc71953184602934865ef817490d2, 16, 'Jolie note et beaux efforts', 0),
(42, 3, 4, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x1a474c6fb3dc4286b05344fc83bbb13f, 14, '', 0),
(43, 3, 5, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x335170caafba4147b6034cf914348d0a, 13, '', 0),
(44, 3, 6, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0xb257538a5cbb498bb33ca778a918f584, 20, '', 0),
(45, 3, 7, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x77499fa0ace44b169209dc333ff77232, 19, '', 0),
(46, 3, 8, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x7821102b720444f98914858e92e265c1, 20, 'Félicitations pour votre note', 0),
(47, 3, 9, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0xea0f2db46fcb40feb4ca3b8b27e5f524, 3, '', 0),
(48, 3, 10, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x5e86dda75dba4b5981329df2f6d637b7, -0.5, '', 0),
(49, 3, 11, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x4e18fb89e33749c990cd5d7dbc24687e, 3, '', 0),
(50, 3, 12, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x5420f46295a548c1b875f2a1033fd5eb, 5, '', 0),
(51, 3, 13, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x759b56f0886a4500854895d1b12d168b, 8, '', 0),
(52, 3, 14, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x608047235d1943e2ac2aba3c95d2582b, 13, '', 0),
(53, 3, 15, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x91029497abe749abac1e32129f610179, 14, '', 0),
(54, 3, 16, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x3284ec8b5f564cca9fcc36d02513ad1b, 2, '', 0),
(55, 3, 17, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0xce0b98bd6107450cb0640fff27a94df1, 6, '', 0),
(56, 3, 18, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x744103c4bc7f42ce96ce76b5f304b27f, 8, '', 0),
(57, 3, 19, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x6e2bf97b8e5c40e9a403e46b99c69d9d, 8, '', 0),
(58, 3, 20, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0xc94cda42916c4ae19532566cf63687bf, 2, '', 0),
(59, 3, 21, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x59f1ed7c5cd84f19835c2fa88985700c, 14, '', 0),
(60, 3, 22, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0xbb7ab9115ead43b588893d9ce8b1ad56, 13, '', 0),
(61, 3, 23, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0xffdd79e66aaf444b93a7ec95934a943a, 5, '', 0),
(62, 3, 24, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x0129e4e5586d40e1a09dd64369c8a786, 2, '', 0),
(63, 3, 25, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x61c116a29bbc4239a7546cc62d7b5248, 3, '', 0),
(64, 3, 26, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x48fe0701947545808e7c63400d0d98bc, 2, '', 0),
(65, 3, 27, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x9ddb5959ddf245a7bf74ded8310e3bba, 3, '', 0),
(66, 3, 28, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x6b11b38aa79843a382b46507ef20b727, 4, '', 0),
(67, 3, 29, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0xdd2c02043e5d4af784da41d7e9973cf3, 5, '', 0),
(68, 3, 30, '2020-01-16 06:11:53', '2020-01-16 06:11:53', 0x9942329855114a9c80cf77e57486fe82, 6, '', 0);

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `type` varchar(100) NOT NULL,
  `url` varchar(255) NOT NULL,
  `lu` tinyint(1) NOT NULL,
  `type_user` varchar(1) NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `notification`
--

INSERT INTO `notification` (`id`, `etudiant_id`, `personnel_id`, `created`, `updated`, `type`, `url`, `lu`, `type_user`, `uuid`) VALUES
(1, 4, 4, '2020-01-14 08:20:28', '2020-01-14 08:42:10', 'absence.added', '/fr/utilisateur/mon-profil/absence', 1, 'e', 0x00000000000000000000000000000000),
(2, 5, 4, '2020-01-14 08:20:29', '2020-01-14 08:42:10', 'absence.added', '/fr/utilisateur/mon-profil/absence', 1, 'e', 0x00000000000000000000000000000000),
(3, 5, 4, '2020-01-14 08:20:34', '2020-01-14 08:42:10', 'absence.removed', '/fr/utilisateur/mon-profil/absence', 1, 'e', 0x00000000000000000000000000000000),
(4, 1, 4, '2020-01-22 12:32:27', '2020-01-22 12:32:27', 'absence.removed', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x00000000000000000000000000000000),
(5, 12, 4, '2020-01-22 12:33:05', '2020-01-22 12:33:05', 'absence.added', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x00000000000000000000000000000000),
(6, 12, 4, '2020-01-22 12:33:08', '2020-01-22 12:33:08', 'absence.removed', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x00000000000000000000000000000000),
(7, 5, 4, '2020-01-22 12:35:46', '2020-01-22 12:35:46', 'absence.added', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x00000000000000000000000000000000),
(8, 12, 4, '2020-01-22 12:35:47', '2020-01-22 12:35:47', 'absence.removed', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x00000000000000000000000000000000),
(9, 1, 4, '2020-01-22 12:36:01', '2020-01-22 12:36:01', 'absence.removed', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x00000000000000000000000000000000),
(10, 1, 4, '2020-01-22 12:36:10', '2020-01-22 12:36:10', 'absence.removed', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x00000000000000000000000000000000),
(11, 5, 4, '2020-01-22 12:37:46', '2020-01-22 12:37:46', 'absence.added', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x00000000000000000000000000000000),
(12, 1, 4, '2020-01-23 03:27:40', '2020-01-23 03:27:40', 'absence.removed', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x00000000000000000000000000000000),
(13, 1, 2, '2020-10-12 11:56:46', '2020-10-12 11:56:46', 'absence.added', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x1c82aff6c76945739735d2936a3ce466),
(14, 1, 2, '2020-10-12 11:56:52', '2020-10-12 11:56:52', 'absence.removed', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0xc8e1b5a88d3d4344bc3a9b8c8638c342),
(15, 1, 2, '2020-10-12 11:56:54', '2020-10-12 11:56:54', 'absence.added', '/fr/utilisateur/mon-profil/absence', 0, 'e', 0x6b0337fa5ad1461da3265259c369187f);

-- --------------------------------------------------------

--
-- Structure de la table `parcour`
--

CREATE TABLE `parcour` (
  `id` int(11) NOT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `code_element` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `parcour`
--

INSERT INTO `parcour` (`id`, `semestre_id`, `created`, `updated`, `libelle`, `code_element`) VALUES
(1, 1, '2020-02-16 08:38:15', '2020-02-16 08:39:29', 'TESTE', '25');

-- --------------------------------------------------------

--
-- Structure de la table `personnel`
--

CREATE TABLE `personnel` (
  `id` int(11) NOT NULL,
  `adresse_id` int(11) DEFAULT NULL,
  `roles` longtext NOT NULL,
  `created` datetime NOT NULL,
  `statut` varchar(15) NOT NULL,
  `poste_interne` varchar(10) DEFAULT NULL,
  `tel_bureau` varchar(20) DEFAULT NULL,
  `responsabilites` longtext,
  `domaines` longtext,
  `entreprise` varchar(255) DEFAULT NULL,
  `bureau1` varchar(20) DEFAULT NULL,
  `bureau2` varchar(20) DEFAULT NULL,
  `numero_harpege` int(11) DEFAULT NULL,
  `initiales` varchar(10) DEFAULT NULL,
  `cv_name` varchar(50) DEFAULT NULL,
  `photo_name` varchar(50) NOT NULL,
  `nb_heures_service` double NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  `couleur` varchar(20) DEFAULT NULL,
  `username` varchar(75) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `type_user` varchar(75) NOT NULL,
  `nom` varchar(75) NOT NULL,
  `prenom` varchar(75) NOT NULL,
  `mail_univ` varchar(255) NOT NULL,
  `site_univ` varchar(255) DEFAULT NULL,
  `mail_perso` varchar(255) DEFAULT NULL,
  `site_perso` varchar(255) DEFAULT NULL,
  `civilite` varchar(3) NOT NULL DEFAULT 'M.',
  `date_naissance` date DEFAULT NULL,
  `tel1` varchar(20) DEFAULT NULL,
  `tel2` varchar(20) DEFAULT NULL,
  `remarque` longtext,
  `signature` longtext,
  `visible` tinyint(1) NOT NULL,
  `updated` datetime NOT NULL,
  `reset_token` varchar(255) DEFAULT NULL,
  `signature_electronique` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `personnel`
--

INSERT INTO `personnel` (`id`, `adresse_id`, `roles`, `created`, `statut`, `poste_interne`, `tel_bureau`, `responsabilites`, `domaines`, `entreprise`, `bureau1`, `bureau2`, `numero_harpege`, `initiales`, `cv_name`, `photo_name`, `nb_heures_service`, `deleted`, `couleur`, `username`, `password`, `slug`, `type_user`, `nom`, `prenom`, `mail_univ`, `site_univ`, `mail_perso`, `site_perso`, `civilite`, `date_naissance`, `tel1`, `tel2`, `remarque`, `signature`, `visible`, `updated`, `reset_token`, `signature_electronique`) VALUES
(1, NULL, '[\"ROLE_SUPER_ADMIN\"]', '2019-11-25 08:53:49', 'MCF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'noimage.png', 192, 0, NULL, 'superAdmin', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'admin-super', 'permanent', 'Super', 'Admin', 'super_admin@gmail.com', NULL, NULL, NULL, 'M.', NULL, NULL, NULL, NULL, NULL, 1, '2020-02-16 09:23:45', NULL, NULL),
(2, 3, '[\"ROLE_PERMANENT\"]', '2019-11-25 09:43:52', 'MCF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 123456, 'LMO', NULL, 'noimage.png', 192, 0, NULL, 'lucas', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'lucas.moreau', 'permanent', 'Paul', 'Lucas', 'lucas@intranet.com', NULL, NULL, NULL, 'M.', '1899-01-01', NULL, NULL, NULL, NULL, 1, '2020-10-12 11:56:54', NULL, NULL),
(3, 4, '[\"ROLE_PERMANENT\"]', '2019-11-26 04:17:39', 'MCF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'LAU', NULL, 'noimage.png', 192, 0, NULL, 'aubin', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'aubin-landre', 'permanent', 'Pierre', 'Aubin', 'aubin@intranet.com', NULL, NULL, NULL, 'M.', '1899-01-01', NULL, NULL, NULL, NULL, 1, '2020-02-16 09:20:12', NULL, NULL),
(4, 5, '[\"ROLE_PERMANENT\"]', '2019-11-26 04:18:17', 'PRO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'BFR', NULL, 'noimage.png', 192, 0, NULL, 'francois', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'francois-bruh', 'permanent', 'Jacques', 'François', 'francois@intranet.com', NULL, NULL, NULL, 'M.', '1900-01-01', NULL, NULL, NULL, NULL, 1, '2020-02-16 08:45:48', NULL, NULL),
(5, 6, '[\"ROLE_PERMANENT\"]', '2019-11-26 04:19:01', 'PRAG', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'PMI', NULL, 'noimage.png', 384, 0, NULL, 'mickael', '$2y$13$uu4Ky5DUGyUls2GaLpaM6.Jtxc3Tosli5xEH/FxSrGR/N9LEXKRjK', 'mickael-pedros', 'permanent', 'Bernard', 'Mickael', 'mickael@intranet.com', NULL, NULL, NULL, 'M.', '1899-01-01', NULL, NULL, NULL, NULL, 1, '2020-02-09 18:09:33', NULL, NULL);
-- --------------------------------------------------------

--
-- Structure de la table `personnel_departement`
--

CREATE TABLE `personnel_departement` (
  `id` int(11) NOT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `annee` int(11) NOT NULL,
  `roles` varchar(250) NOT NULL,
  `defaut` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `personnel_departement`
--

INSERT INTO `personnel_departement` (`id`, `personnel_id`, `departement_id`, `annee`, `roles`, `defaut`) VALUES
(1, 2, 1, 2019, '[\"ROLE_DDE\"]', 1),
(2, 3, 1, 2019, '[\"ROLE_PERMANENT\"]', 1),
(3, 4, 1, 2019, '[\"ROLE_PERMANENT\"]', 1),
(4, 5, 1, 2019, '[\"ROLE_CDD\"]', 1),
(6, 6, 1, 2020, '[\"ROLE_PERMANENT\"]', 0),
(8, 6, 2, 2020, '[\"ROLE_DDE\"]', 0);

-- --------------------------------------------------------

--
-- Structure de la table `personnel_formation`
--

CREATE TABLE `personnel_formation` (
  `id` int(11) NOT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `formation_id` int(11) DEFAULT NULL,
  `annee` int(11) NOT NULL,
  `defaut` tinyint(1) NOT NULL,
  `roles` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `personnel_formation`
--

INSERT INTO `personnel_formation` (`id`, `personnel_id`, `formation_id`, `annee`, `defaut`, `roles`) VALUES
(1, 2, 1, 2011, 1, '[\"ROLE_CDD\"]');

-- --------------------------------------------------------

--
-- Structure de la table `ppn`
--

CREATE TABLE `ppn` (
  `id` int(11) NOT NULL,
  `diplome_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `annee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `ppn`
--

INSERT INTO `ppn` (`id`, `diplome_id`, `created`, `updated`, `libelle`, `annee`) VALUES
(1, 1, '2019-11-26 04:34:34', '2019-11-26 04:34:34', 'PPN2013', 2013);

-- --------------------------------------------------------

--
-- Structure de la table `previsionnel`
--

CREATE TABLE `previsionnel` (
  `id` int(11) NOT NULL,
  `matiere_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `annee` int(11) NOT NULL,
  `referent` tinyint(1) NOT NULL,
  `nb_hcm` double NOT NULL,
  `nb_htd` double NOT NULL,
  `nb_htp` double NOT NULL,
  `nb_gr_cm` int(11) NOT NULL,
  `nb_gr_td` int(11) NOT NULL,
  `nb_gr_tp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `previsionnel`
--

INSERT INTO `previsionnel` (`id`, `matiere_id`, `personnel_id`, `created`, `updated`, `annee`, `referent`, `nb_hcm`, `nb_htd`, `nb_htp`, `nb_gr_cm`, `nb_gr_td`, `nb_gr_tp`) VALUES
(1, 1, 4, '2020-01-14 00:00:00', '2020-01-14 00:00:00', 2019, 0, 10, 10, 10, 1, 2, 4),
(2, 2, 3, '2020-01-14 00:00:00', '2020-01-14 00:00:00', 2019, 0, 10, 10, 10, 1, 2, 4),
(3, 2, 2, '2020-01-14 00:00:00', '2020-01-14 00:00:00', 2019, 0, 10, 10, 10, 1, 2, 4),
(4, 1, 5, '2020-01-14 00:00:00', '2020-01-14 00:00:00', 2019, 0, 10, 10, 10, 1, 2, 4);

-- --------------------------------------------------------

--
-- Structure de la table `progression_pedagogique`
--

CREATE TABLE `progression_pedagogique` (
  `id` int(11) NOT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `matiere_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `semaine` int(11) NOT NULL,
  `type_cours` varchar(5) NOT NULL,
  `nb_seance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `projet_etudiant`
--

CREATE TABLE `projet_etudiant` (
  `id` int(11) NOT NULL,
  `projet_periode_id` int(11) DEFAULT NULL,
  `organisme_id` int(11) DEFAULT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `temp_complet` tinyint(1) NOT NULL,
  `duree` double NOT NULL,
  `unite_duree` varchar(10) NOT NULL,
  `sujet` varchar(255) DEFAULT NULL,
  `activites_confiees` longtext,
  `etat_projet` varchar(30) NOT NULL,
  `date_autorise` datetime(6) DEFAULT NULL,
  `date_depose` datetime(6) DEFAULT NULL,
  `date_validation` datetime(6) DEFAULT NULL,
  `date_imprime` datetime(6) DEFAULT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `projet_etudiant_etudiant`
--

CREATE TABLE `projet_etudiant_etudiant` (
  `projet_etudiant_id` int(11) NOT NULL,
  `etudiant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `projet_periode`
--

CREATE TABLE `projet_periode` (
  `id` int(11) NOT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `libelle` varchar(100) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `texte_libre` longtext,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `projet_periode_personnel`
--

CREATE TABLE `projet_periode_personnel` (
  `projet_periode_id` int(11) NOT NULL,
  `personnel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `qualite_questionnaire`
--

CREATE TABLE `qualite_questionnaire` (
  `id` int(11) NOT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `date_ouverture` datetime NOT NULL,
  `date_fermeture` datetime NOT NULL,
  `titre` varchar(150) NOT NULL,
  `texte_explication` longtext,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `texte_debut` longtext,
  `text_fin` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `qualite_questionnaire_section`
--

CREATE TABLE `qualite_questionnaire_section` (
  `id` int(11) NOT NULL,
  `questionnaire_id` int(11) DEFAULT NULL,
  `section_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `ordre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `qualite_section`
--

CREATE TABLE `qualite_section` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `titre` varchar(255) NOT NULL,
  `text_explicatif` longtext,
  `config` varchar(255) DEFAULT NULL,
  `type_calcul` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `qualite_section_question`
--

CREATE TABLE `qualite_section_question` (
  `id` int(11) NOT NULL,
  `section_id` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `ordre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `quizz_etudiant`
--

CREATE TABLE `quizz_etudiant` (
  `id` int(11) NOT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `questionnaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `termine` tinyint(1) NOT NULL,
  `date_termine` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `quizz_etudiant_reponse`
--

CREATE TABLE `quizz_etudiant_reponse` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `valeur` longtext,
  `cle_reponse` longtext,
  `cle_question` varchar(100) NOT NULL,
  `quizz_etudiant_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `quizz_question`
--

CREATE TABLE `quizz_question` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `help` varchar(255) DEFAULT NULL,
  `type` varchar(10) NOT NULL,
  `auteur_id` int(11) DEFAULT NULL,
  `question_parent_id` int(11) DEFAULT NULL,
  `obligatoire` tinyint(1) NOT NULL,
  `alignement` varchar(30) NOT NULL,
  `parametre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `quizz_question`
--

INSERT INTO `quizz_question` (`id`, `created`, `updated`, `libelle`, `help`, `type`, `auteur_id`, `question_parent_id`, `obligatoire`, `alignement`, `parametre`) VALUES
(4, '2020-02-16 09:13:05', '2020-02-16 09:13:05', 'Quizz Beta', 'Label non traduit', 'libre', 1, NULL, 1, '', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `quizz_questionnaire`
--

CREATE TABLE `quizz_questionnaire` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `description` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `quizz_questionnaire_quizz_question`
--

CREATE TABLE `quizz_questionnaire_quizz_question` (
  `quizz_questionnaire_id` int(11) NOT NULL,
  `quizz_question_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `quizz_reponse`
--

CREATE TABLE `quizz_reponse` (
  `id` int(11) NOT NULL,
  `question_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `valeur` varchar(255) NOT NULL,
  `ordre` int(11) NOT NULL,
  `alignement` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `rattrapage`
--

CREATE TABLE `rattrapage` (
  `id` int(11) NOT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `matiere_id` int(11) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `date_eval` date NOT NULL,
  `heure_eval` time NOT NULL,
  `duree` varchar(20) NOT NULL,
  `date_rattrapage` date DEFAULT NULL,
  `heure_rattrapage` time DEFAULT NULL,
  `salle` varchar(10) DEFAULT NULL,
  `etat_demande` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `salle`
--

CREATE TABLE `salle` (
  `id` int(11) NOT NULL,
  `site_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(30) NOT NULL,
  `capacite` int(11) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `salle_examen`
--

CREATE TABLE `salle_examen` (
  `id` int(11) NOT NULL,
  `salle_id` int(11) DEFAULT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `nb_colonnes` int(11) NOT NULL,
  `nb_rangs` int(11) NOT NULL,
  `capacite` int(11) NOT NULL,
  `places_interdites` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `scolarite`
--

CREATE TABLE `scolarite` (
  `id` int(11) NOT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `ordre` int(11) NOT NULL,
  `decision` varchar(10) NOT NULL,
  `proposition` varchar(10) DEFAULT NULL,
  `moyenne` double NOT NULL,
  `nb_absences` int(11) NOT NULL,
  `commentaire` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `scolarite`
--

INSERT INTO `scolarite` (`id`, `semestre_id`, `etudiant_id`, `annee_universitaire_id`, `created`, `updated`, `uuid`, `ordre`, `decision`, `proposition`, `moyenne`, `nb_absences`, `commentaire`) VALUES
(1, 1, 2, 1, '2020-02-09 17:46:09', '2020-02-09 17:46:09', 0xe666e5a587594d2fa44712fb0d725102, 1, 'En cours', 'E.C.', 0, 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `scolarite_moyenne_matiere`
--

CREATE TABLE `scolarite_moyenne_matiere` (
  `id` int(11) NOT NULL,
  `scolarite_id` int(11) DEFAULT NULL,
  `matiere_id` int(11) DEFAULT NULL,
  `moyenne` double NOT NULL,
  `rang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `scolarite_moyenne_ue`
--

CREATE TABLE `scolarite_moyenne_ue` (
  `id` int(11) NOT NULL,
  `scolarite_id` int(11) DEFAULT NULL,
  `ue_id` int(11) DEFAULT NULL,
  `moyenne` double NOT NULL,
  `rang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `scolarite_moyenne_ue`
--

INSERT INTO `scolarite_moyenne_ue` (`id`, `scolarite_id`, `ue_id`, `moyenne`, `rang`) VALUES
(1, 1, 1, 0, 0),
(2, 1, 2, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `scolarite_promo`
--

CREATE TABLE `scolarite_promo` (
  `id` int(11) NOT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `min` double NOT NULL,
  `max` double NOT NULL,
  `nb_etudiants` int(11) NOT NULL,
  `moyenne` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `scolarite_promo_matiere`
--

CREATE TABLE `scolarite_promo_matiere` (
  `id` int(11) NOT NULL,
  `scolarite_promo_id` int(11) DEFAULT NULL,
  `matiere_id` int(11) DEFAULT NULL,
  `min` double NOT NULL,
  `max` double NOT NULL,
  `moyenne` double NOT NULL,
  `nb_etudiants` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `scolarite_promo_ue`
--

CREATE TABLE `scolarite_promo_ue` (
  `id` int(11) NOT NULL,
  `scolarite_promo_id` int(11) DEFAULT NULL,
  `ue_id` int(11) DEFAULT NULL,
  `min` double NOT NULL,
  `max` double NOT NULL,
  `moyenne` double NOT NULL,
  `nb_etudiants` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `semestre`
--

CREATE TABLE `semestre` (
  `id` int(11) NOT NULL,
  `precedent_id` int(11) DEFAULT NULL,
  `suivant_id` int(11) DEFAULT NULL,
  `decale_id` int(11) DEFAULT NULL,
  `opt_dest_mail_releve_id` int(11) DEFAULT NULL,
  `opt_dest_mail_modif_note_id` int(11) DEFAULT NULL,
  `opt_dest_mail_absence_resp_id` int(11) DEFAULT NULL,
  `annee_id` int(11) DEFAULT NULL,
  `ppn_actif_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `couleur` varchar(20) DEFAULT NULL,
  `ordre_annee` int(11) NOT NULL,
  `ordre_lmd` int(11) NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `nb_groupes_cm` int(11) NOT NULL,
  `nb_groupes_td` int(11) NOT NULL,
  `nb_groupes_tp` int(11) NOT NULL,
  `opt_mail_releve` tinyint(1) NOT NULL,
  `opt_mail_modification_note` tinyint(1) NOT NULL,
  `opt_evaluation_visible` tinyint(1) NOT NULL,
  `opt_evaluation_modifiable` tinyint(1) NOT NULL,
  `opt_penalite_absence` tinyint(1) NOT NULL,
  `opt_mail_absence_resp` tinyint(1) NOT NULL,
  `opt_mail_absence_etudiant` tinyint(1) NOT NULL,
  `opt_point_penalite_absence` double NOT NULL,
  `mois_debut` int(11) NOT NULL,
  `code_element` varchar(20) NOT NULL,
  `opt_evaluation_pre_initialisee` tinyint(1) NOT NULL,
  `opt_nb_jours_saisie_absence` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `semestre`
--

INSERT INTO `semestre` (`id`, `precedent_id`, `suivant_id`, `decale_id`, `opt_dest_mail_releve_id`, `opt_dest_mail_modif_note_id`, `opt_dest_mail_absence_resp_id`, `annee_id`, `ppn_actif_id`, `created`, `updated`, `libelle`, `couleur`, `ordre_annee`, `ordre_lmd`, `actif`, `nb_groupes_cm`, `nb_groupes_td`, `nb_groupes_tp`, `opt_mail_releve`, `opt_mail_modification_note`, `opt_evaluation_visible`, `opt_evaluation_modifiable`, `opt_penalite_absence`, `opt_mail_absence_resp`, `opt_mail_absence_etudiant`, `opt_point_penalite_absence`, `mois_debut`, `code_element`, `opt_evaluation_pre_initialisee`, `opt_nb_jours_saisie_absence`) VALUES
(1, NULL, NULL, NULL, 4, NULL, NULL, 1, 1, '2019-11-26 04:33:58', '2019-11-26 04:34:43', 'S1', '#005493', 1, 2, 1, 1, 2, 3, 1, 0, 1, 1, 1, 0, 0, 0.5, 9, '3TS984S1', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `site`
--

CREATE TABLE `site` (
  `id` int(11) NOT NULL,
  `adresse_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `site`
--

INSERT INTO `site` (`id`, `adresse_id`, `created`, `updated`, `libelle`) VALUES
(1, 7, '2019-11-26 04:20:39', '2019-11-26 04:20:39', 'IUT de Troyes');

-- --------------------------------------------------------

--
-- Structure de la table `stage_etudiant`
--

CREATE TABLE `stage_etudiant` (
  `id` int(11) NOT NULL,
  `stage_periode_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  `tuteur_id` int(11) DEFAULT NULL,
  `tuteur_universitaire_id` int(11) DEFAULT NULL,
  `entreprise_id` int(11) DEFAULT NULL,
  `adresse_stage_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `service_stage_entreprise` varchar(255) DEFAULT NULL,
  `sujet_stage` longtext,
  `date_depot_formulaire` datetime DEFAULT NULL,
  `date_validation` datetime DEFAULT NULL,
  `date_convention_envoyee` datetime DEFAULT NULL,
  `date_convention_recu` datetime DEFAULT NULL,
  `etat_stage` varchar(30) NOT NULL,
  `date_debut_stage` date NOT NULL,
  `date_fin_stage` date NOT NULL,
  `activites` longtext,
  `amenagement_stage` longtext,
  `gratification` tinyint(1) NOT NULL,
  `gratification_montant` double NOT NULL,
  `gratification_periode` varchar(1) NOT NULL,
  `avantages` longtext,
  `duree_hebdomadaire` double NOT NULL,
  `duree_jours_stage` int(11) NOT NULL,
  `date_autorise` datetime DEFAULT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `date_imprime` datetime DEFAULT NULL,
  `periodes_interruptions` longtext,
  `commentaire_duree_hebdomadaire` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `stage_mail_template`
--

CREATE TABLE `stage_mail_template` (
  `id` int(11) NOT NULL,
  `stage_periode_id` int(11) DEFAULT NULL,
  `twig_template_id` int(11) DEFAULT NULL,
  `subject` varchar(255) NOT NULL,
  `event` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `stage_periode`
--

CREATE TABLE `stage_periode` (
  `id` int(11) NOT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `annee_universitaire_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `uuid` binary(16) NOT NULL COMMENT '(DC2Type:uuid_binary)',
  `document_name` varchar(50) NOT NULL,
  `numero_periode` int(11) NOT NULL,
  `libelle` varchar(100) NOT NULL,
  `nb_semaines` int(11) NOT NULL,
  `nb_jours` int(11) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `competences_visees` longtext,
  `modalite_evaluation` longtext,
  `modalite_evaluation_pedagogique` longtext,
  `modalite_encadrement` longtext,
  `document_rendre` varchar(255) DEFAULT NULL,
  `nb_ects` double NOT NULL,
  `dates_flexibles` tinyint(1) NOT NULL,
  `copie_assistant` tinyint(1) NOT NULL,
  `texte_libre` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `stage_periode_interruption`
--

CREATE TABLE `stage_periode_interruption` (
  `id` int(11) NOT NULL,
  `stage_periode_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `motif` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `stage_periode_offre`
--

CREATE TABLE `stage_periode_offre` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `entreprise` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `document_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `stage_periode_offre_stage_periode`
--

CREATE TABLE `stage_periode_offre_stage_periode` (
  `stage_periode_offre_id` int(11) NOT NULL,
  `stage_periode_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `stage_periode_personnel`
--

CREATE TABLE `stage_periode_personnel` (
  `stage_periode_id` int(11) NOT NULL,
  `personnel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `stage_periode_soutenance`
--

CREATE TABLE `stage_periode_soutenance` (
  `id` int(11) NOT NULL,
  `stage_periode_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `date_rendu_rapport` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `trello_tache`
--

CREATE TABLE `trello_tache` (
  `id` int(11) NOT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `deadline` datetime NOT NULL,
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `twig_template`
--

CREATE TABLE `twig_template` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `name` varchar(255) NOT NULL,
  `source` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `type_diplome`
--

CREATE TABLE `type_diplome` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `sigle` varchar(20) NOT NULL,
  `nb_semestres` int(11) NOT NULL,
  `niveau_entree` int(11) NOT NULL,
  `niveau_sortie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `type_diplome`
--

INSERT INTO `type_diplome` (`id`, `created`, `updated`, `libelle`, `sigle`, `nb_semestres`, `niveau_entree`, `niveau_sortie`) VALUES
(1, '2019-11-25 08:53:48', '2019-11-25 08:53:48', 'Diplôme Universitaire de Technologie', 'DUT', 4, 0, 2),
(2, '2019-11-25 08:53:48', '2019-11-25 08:53:48', 'Licence Professionnelle', 'LPro', 2, 2, 3);

-- --------------------------------------------------------

--
-- Structure de la table `type_document`
--

CREATE TABLE `type_document` (
  `id` int(11) NOT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `type_document`
--

INSERT INTO `type_document` (`id`, `departement_id`, `created`, `updated`, `libelle`) VALUES
(1, 1, '2020-02-09 17:31:26', '2020-02-09 17:31:26', 'Fun');

-- --------------------------------------------------------

--
-- Structure de la table `type_groupe`
--

CREATE TABLE `type_groupe` (
  `id` int(11) NOT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(100) NOT NULL,
  `defaut` tinyint(1) NOT NULL,
  `type` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `type_groupe`
--

INSERT INTO `type_groupe` (`id`, `semestre_id`, `created`, `updated`, `libelle`, `defaut`, `type`) VALUES
(1, 1, '2020-01-13 13:33:58', '2020-01-13 13:33:58', 'CM', 0, 'CM'),
(2, 1, '2020-01-13 13:34:04', '2020-01-13 13:34:04', 'TD', 0, 'CM'),
(3, 1, '2020-01-13 13:34:09', '2020-01-13 13:34:09', 'TP', 0, 'CM');

-- --------------------------------------------------------

--
-- Structure de la table `type_hrs`
--

CREATE TABLE `type_hrs` (
  `id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(100) NOT NULL,
  `type` varchar(20) NOT NULL,
  `inclu_service` tinyint(1) NOT NULL,
  `maximum` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `type_materiel`
--

CREATE TABLE `type_materiel` (
  `id` int(11) NOT NULL,
  `departement_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `type_materiel`
--

INSERT INTO `type_materiel` (`id`, `departement_id`, `created`, `updated`, `libelle`) VALUES
(1, 1, '2020-02-09 18:06:44', '2020-02-09 18:06:54', 'Matériels for Fun');

-- --------------------------------------------------------

--
-- Structure de la table `ue`
--

CREATE TABLE `ue` (
  `id` int(11) NOT NULL,
  `semestre_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `numero_ue` int(11) NOT NULL,
  `coefficient` double NOT NULL,
  `nb_ects` double NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `bonification` tinyint(1) NOT NULL,
  `code_element` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `ue`
--

INSERT INTO `ue` (`id`, `semestre_id`, `created`, `updated`, `libelle`, `numero_ue`, `coefficient`, `nb_ects`, `actif`, `bonification`, `code_element`) VALUES
(1, 1, '2019-11-26 04:34:23', '2019-11-26 04:34:23', 'Connaissances théoriques', 1, 1, 14, 1, 0, '3TS984S1U1'),
(2, 1, '2019-11-26 04:35:08', '2020-02-16 08:35:59', 'Connaissances pratiques', 2, 1, 16, 0, 0, '3TS984S1U2');

-- --------------------------------------------------------

--
-- Structure de la table `ufr`
--

CREATE TABLE `ufr` (
  `id` int(11) NOT NULL,
  `responsable_id` int(11) DEFAULT NULL,
  `site_principal_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `ufr`
--

INSERT INTO `ufr` (`id`, `responsable_id`, `site_principal_id`, `created`, `updated`, `libelle`) VALUES
(1, 2, 1, '2019-11-26 04:20:59', '2019-11-26 04:20:59', 'IUT de Troyes');

-- --------------------------------------------------------

--
-- Structure de la table `ufr_site`
--

CREATE TABLE `ufr_site` (
  `ufr_id` int(11) NOT NULL,
  `site_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `absence`
--
ALTER TABLE `absence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_765AE0C91C109075` (`personnel_id`),
  ADD KEY `IDX_765AE0C9F46CD258` (`matiere_id`),
  ADD KEY `IDX_765AE0C9DDEAB1A3` (`etudiant_id`),
  ADD KEY `IDX_765AE0C9544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `absence_justificatif`
--
ALTER TABLE `absence_justificatif`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_79296AB6DDEAB1A3` (`etudiant_id`),
  ADD KEY `IDX_79296AB6544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `actualite`
--
ALTER TABLE `actualite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_54928197CCF9E01E` (`departement_id`);

--
-- Index pour la table `adresse`
--
ALTER TABLE `adresse`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `alternance`
--
ALTER TABLE `alternance`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_445F37B9A4AEAFEA` (`entreprise_id`),
  ADD UNIQUE KEY `UNIQ_445F37B986EC68D8` (`tuteur_id`),
  ADD UNIQUE KEY `UNIQ_445F37B9DA9A872F` (`adresse_alternance_id`),
  ADD KEY `IDX_445F37B9DDEAB1A3` (`etudiant_id`),
  ADD KEY `IDX_445F37B919FA6F23` (`tuteur_universitaire_id`),
  ADD KEY `IDX_445F37B9543EC5F0` (`annee_id`),
  ADD KEY `IDX_445F37B9544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `alternance_fiche_suivi`
--
ALTER TABLE `alternance_fiche_suivi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_29F6206AC71DECBA` (`alternance_id`);

--
-- Index pour la table `annee`
--
ALTER TABLE `annee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_DE92C5CF26F859E2` (`diplome_id`);

--
-- Index pour la table `annee_universitaire`
--
ALTER TABLE `annee_universitaire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `apc_apprentissage_critique`
--
ALTER TABLE `apc_apprentissage_critique`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_A99B947AB3E9C81` (`niveau_id`);

--
-- Index pour la table `apc_competence`
--
ALTER TABLE `apc_competence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B949FC0F26F859E2` (`diplome_id`);

--
-- Index pour la table `apc_composante_essentielle`
--
ALTER TABLE `apc_composante_essentielle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_AC23ECFF15761DAB` (`competence_id`);

--
-- Index pour la table `apc_niveau`
--
ALTER TABLE `apc_niveau`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_5CE8A82315761DAB` (`competence_id`),
  ADD KEY `IDX_5CE8A823543EC5F0` (`annee_id`);

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_23A0E661C109075` (`personnel_id`),
  ADD KEY `IDX_23A0E66BCF5E72D` (`categorie_id`);

--
-- Index pour la table `ArticleLike`
--
ALTER TABLE `ArticleLike`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_55B95ADA7294869C` (`article_id`),
  ADD KEY `IDX_55B95ADA1C109075` (`personnel_id`),
  ADD KEY `IDX_55B95ADADDEAB1A3` (`etudiant_id`);

--
-- Index pour la table `article_categorie`
--
ALTER TABLE `article_categorie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_93488610CCF9E01E` (`departement_id`);

--
-- Index pour la table `article_etudiant`
--
ALTER TABLE `article_etudiant`
  ADD PRIMARY KEY (`article_id`,`etudiant_id`),
  ADD KEY `IDX_2496D6887294869C` (`article_id`),
  ADD KEY `IDX_2496D688DDEAB1A3` (`etudiant_id`);

--
-- Index pour la table `article_semestre`
--
ALTER TABLE `article_semestre`
  ADD PRIMARY KEY (`article_id`,`semestre_id`),
  ADD KEY `IDX_24807BD77294869C` (`article_id`),
  ADD KEY `IDX_24807BD75577AFDB` (`semestre_id`);

--
-- Index pour la table `bac`
--
ALTER TABLE `bac`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `borne`
--
ALTER TABLE `borne`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `borne_semestre`
--
ALTER TABLE `borne_semestre`
  ADD PRIMARY KEY (`borne_id`,`semestre_id`),
  ADD KEY `IDX_D1378E3B7F023A56` (`borne_id`),
  ADD KEY `IDX_D1378E3B5577AFDB` (`semestre_id`);

--
-- Index pour la table `cahier_texte`
--
ALTER TABLE `cahier_texte`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B554C6181C109075` (`personnel_id`),
  ADD KEY `IDX_B554C6185577AFDB` (`semestre_id`),
  ADD KEY `IDX_B554C618F46CD258` (`matiere_id`);

--
-- Index pour la table `cahier_texte_fichier`
--
ALTER TABLE `cahier_texte_fichier`
  ADD PRIMARY KEY (`cahier_texte_id`,`fichier_id`),
  ADD KEY `IDX_A095F9C885D2D268` (`cahier_texte_id`),
  ADD KEY `IDX_A095F9C8F915CFE` (`fichier_id`);

--
-- Index pour la table `calendrier`
--
ALTER TABLE `calendrier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B2753CB9544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `celcat_calendrier`
--
ALTER TABLE `celcat_calendrier`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `celcat_event`
--
ALTER TABLE `celcat_event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_AF9D08F7544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `celcat_events`
--
ALTER TABLE `celcat_events`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `code_insee`
--
ALTER TABLE `code_insee`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `competence`
--
ALTER TABLE `competence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_94D4687F26F859E2` (`diplome_id`),
  ADD KEY `IDX_94D4687F727ACA70` (`parent_id`);

--
-- Index pour la table `configuration`
--
ALTER TABLE `configuration`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `courrier`
--
ALTER TABLE `courrier`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `creneau_bloque`
--
ALTER TABLE `creneau_bloque`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_441F29EE7D0729A9` (`creneau_id`),
  ADD KEY `IDX_441F29EE122EEC90` (`semaine_id`);

--
-- Index pour la table `creneau_cours`
--
ALTER TABLE `creneau_cours`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_E844BB21544BFD58` (`annee_universitaire_id`),
  ADD KEY `IDX_E844BB21CCF9E01E` (`departement_id`);

--
-- Index pour la table `date`
--
ALTER TABLE `date`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_AA9E377ACCF9E01E` (`departement_id`);

--
-- Index pour la table `date_semestre`
--
ALTER TABLE `date_semestre`
  ADD PRIMARY KEY (`date_id`,`semestre_id`),
  ADD KEY `IDX_B25DE61AB897366B` (`date_id`),
  ADD KEY `IDX_B25DE61A5577AFDB` (`semestre_id`);

--
-- Index pour la table `departement`
--
ALTER TABLE `departement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C1765B63A469CB09` (`ufr_id`),
  ADD KEY `IDX_C1765B632AC98151` (`respri_id`),
  ADD KEY `IDX_C1765B63EB0464C9` (`annee_universitaire_prepare_id`),
  ADD KEY `IDX_C1765B63DADEB263` (`resp_materiel_id`);

--
-- Index pour la table `diplome`
--
ALTER TABLE `diplome`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_EB4C4D4ED2D1AAE2` (`responsable_diplome_id`),
  ADD KEY `IDX_EB4C4D4E39A24FD8` (`assistant_diplome_id`),
  ADD KEY `IDX_EB4C4D4E3BFB8FC7` (`type_diplome_id`),
  ADD KEY `IDX_EB4C4D4ECCF9E01E` (`departement_id`),
  ADD KEY `IDX_EB4C4D4E544BFD58` (`annee_universitaire_id`),
  ADD KEY `IDX_EB4C4D4E7CF1ABB8` (`opt_responsable_qualite_id`);

--
-- Index pour la table `disponibilite`
--
ALTER TABLE `disponibilite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2CBACE2F1C109075` (`personnel_id`),
  ADD KEY `IDX_2CBACE2F544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D8698A768826AFA6` (`type_document_id`);

--
-- Index pour la table `DocumentFavori`
--
ALTER TABLE `DocumentFavori`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C6D445CCC33F7837` (`document_id`),
  ADD KEY `IDX_C6D445CC1C109075` (`personnel_id`),
  ADD KEY `IDX_C6D445CCDDEAB1A3` (`etudiant_id`);

--
-- Index pour la table `document_semestre`
--
ALTER TABLE `document_semestre`
  ADD PRIMARY KEY (`document_id`,`semestre_id`),
  ADD KEY `IDX_FEA97EE5C33F7837` (`document_id`),
  ADD KEY `IDX_FEA97EE55577AFDB` (`semestre_id`);

--
-- Index pour la table `edt_planning`
--
ALTER TABLE `edt_planning`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C8DBF3175577AFDB` (`semestre_id`),
  ADD KEY `IDX_C8DBF317F46CD258` (`matiere_id`),
  ADD KEY `IDX_C8DBF317AB9A1716` (`intervenant_id`);

--
-- Index pour la table `Emprunt`
--
ALTER TABLE `Emprunt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_F9FD484BCCF9E01E` (`departement_id`),
  ADD KEY `IDX_F9FD484B1C109075` (`personnel_id`),
  ADD KEY `IDX_F9FD484BDDEAB1A3` (`etudiant_id`);

--
-- Index pour la table `emprunt_materiel`
--
ALTER TABLE `emprunt_materiel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B0A6D9C6AE7FEF94` (`emprunt_id`),
  ADD KEY `IDX_B0A6D9C616880AAF` (`materiel_id`);

--
-- Index pour la table `entreprise`
--
ALTER TABLE `entreprise`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_D19FA604DE7DC5C` (`adresse_id`),
  ADD UNIQUE KEY `UNIQ_D19FA6053C59D72` (`responsable_id`);

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_717E22E3989D9B62` (`slug`),
  ADD UNIQUE KEY `UNIQ_717E22E39FCEFE16` (`mail_univ`),
  ADD UNIQUE KEY `UNIQ_717E22E34DE7DC5C` (`adresse_id`),
  ADD UNIQUE KEY `UNIQ_717E22E3CD22752C` (`adresse_parentale_id`),
  ADD KEY `IDX_717E22E35577AFDB` (`semestre_id`),
  ADD KEY `IDX_717E22E3E03F15C0` (`bac_id`),
  ADD KEY `IDX_717E22E3CCF9E01E` (`departement_id`);

--
-- Index pour la table `etudiant_groupe`
--
ALTER TABLE `etudiant_groupe`
  ADD PRIMARY KEY (`etudiant_id`,`groupe_id`),
  ADD KEY `IDX_10C7EA42DDEAB1A3` (`etudiant_id`),
  ADD KEY `IDX_10C7EA427A45358C` (`groupe_id`);

--
-- Index pour la table `evaluation`
--
ALTER TABLE `evaluation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_1323A575F46CD258` (`matiere_id`),
  ADD KEY `IDX_1323A57566A6ABE2` (`personnel_auteur_id`),
  ADD KEY `IDX_1323A575727ACA70` (`parent_id`),
  ADD KEY `IDX_1323A575CE83749C` (`type_groupe_id`),
  ADD KEY `IDX_1323A575544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `evaluation_personnel`
--
ALTER TABLE `evaluation_personnel`
  ADD PRIMARY KEY (`evaluation_id`,`personnel_id`),
  ADD KEY `IDX_74BC385A456C5646` (`evaluation_id`),
  ADD KEY `IDX_74BC385A1C109075` (`personnel_id`);

--
-- Index pour la table `favori`
--
ALTER TABLE `favori`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_EF85A2CC9D7BCD43` (`etudiant_demandeur_id`),
  ADD KEY `IDX_EF85A2CC4E463162` (`etudiant_demande_id`);

--
-- Index pour la table `fichier`
--
ALTER TABLE `fichier`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `formation`
--
ALTER TABLE `formation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_404021BFD17F50A6` (`uuid`),
  ADD KEY `IDX_404021BFF6BD1646` (`site_id`),
  ADD KEY `IDX_404021BF2AC98151` (`respri_id`);

--
-- Index pour la table `groupe`
--
ALTER TABLE `groupe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_4B98C21CE83749C` (`type_groupe_id`),
  ADD KEY `IDX_4B98C21727ACA70` (`parent_id`),
  ADD KEY `IDX_4B98C216E38C0DB` (`parcours_id`);

--
-- Index pour la table `help`
--
ALTER TABLE `help`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `hrs`
--
ALTER TABLE `hrs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6D8078785577AFDB` (`semestre_id`),
  ADD KEY `IDX_6D80787826F859E2` (`diplome_id`),
  ADD KEY `IDX_6D8078781C109075` (`personnel_id`),
  ADD KEY `IDX_6D807878152AE753` (`type_hrs_id`),
  ADD KEY `IDX_6D807878CCF9E01E` (`departement_id`);

--
-- Index pour la table `indisponibilite_personnel`
--
ALTER TABLE `indisponibilite_personnel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C98EDDB57D0729A9` (`creneau_id`),
  ADD KEY `IDX_C98EDDB5122EEC90` (`semaine_id`),
  ADD KEY `IDX_C98EDDB51C109075` (`personnel_id`);

--
-- Index pour la table `materiel`
--
ALTER TABLE `materiel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_18D2B0915D91DD3E` (`type_materiel_id`);

--
-- Index pour la table `materiel_commun`
--
ALTER TABLE `materiel_commun`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_991F50BDE7A1254A` (`contact_id`);

--
-- Index pour la table `materiel_commun_pret`
--
ALTER TABLE `materiel_commun_pret`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_9B6A8F7B1C109075` (`personnel_id`),
  ADD KEY `IDX_9B6A8F7B9C74F84B` (`materiel_commun_id`);

--
-- Index pour la table `materiel_pret`
--
ALTER TABLE `materiel_pret`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_F2CBA05F5200282E` (`formation_id`),
  ADD KEY `IDX_F2CBA05FDDEAB1A3` (`etudiant_id`),
  ADD KEY `IDX_F2CBA05F1C109075` (`personnel_id`);

--
-- Index pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_9014574A62E883B1` (`ue_id`),
  ADD KEY `IDX_9014574A1CBD0BF` (`ppn_id`),
  ADD KEY `IDX_9014574A6E38C0DB` (`parcours_id`),
  ADD KEY `IDX_9014574AB7749956` (`matiere_parent_id`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B6BD307F10335F61` (`expediteur_id`);

--
-- Index pour la table `message_destinataire`
--
ALTER TABLE `message_destinataire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_3AA8CA74537A1329` (`message_id`),
  ADD KEY `IDX_3AA8CA741C109075` (`personnel_id`),
  ADD KEY `IDX_3AA8CA74DDEAB1A3` (`etudiant_id`);

--
-- Index pour la table `message_piece_jointe`
--
ALTER TABLE `message_piece_jointe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6F502432537A1329` (`message_id`);

--
-- Index pour la table `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `modification_note`
--
ALTER TABLE `modification_note`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_607975E526ED0855` (`note_id`),
  ADD KEY `IDX_607975E51C109075` (`personnel_id`);

--
-- Index pour la table `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_CFBDFA14456C5646` (`evaluation_id`),
  ADD KEY `IDX_CFBDFA14DDEAB1A3` (`etudiant_id`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_BF5476CADDEAB1A3` (`etudiant_id`),
  ADD KEY `IDX_BF5476CA1C109075` (`personnel_id`);

--
-- Index pour la table `parcour`
--
ALTER TABLE `parcour`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B7E529565577AFDB` (`semestre_id`);

--
-- Index pour la table `personnel`
--
ALTER TABLE `personnel`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_A6BCF3DE989D9B62` (`slug`),
  ADD UNIQUE KEY `UNIQ_A6BCF3DE9FCEFE16` (`mail_univ`),
  ADD UNIQUE KEY `UNIQ_A6BCF3DE4DE7DC5C` (`adresse_id`);

--
-- Index pour la table `personnel_departement`
--
ALTER TABLE `personnel_departement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_39139ED31C109075` (`personnel_id`),
  ADD KEY `IDX_39139ED3CCF9E01E` (`departement_id`);

--
-- Index pour la table `personnel_formation`
--
ALTER TABLE `personnel_formation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_465DE5BB1C109075` (`personnel_id`),
  ADD KEY `IDX_465DE5BB5200282E` (`formation_id`);

--
-- Index pour la table `ppn`
--
ALTER TABLE `ppn`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2E8584EB26F859E2` (`diplome_id`);

--
-- Index pour la table `previsionnel`
--
ALTER TABLE `previsionnel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_AE25C261F46CD258` (`matiere_id`),
  ADD KEY `IDX_AE25C2611C109075` (`personnel_id`);

--
-- Index pour la table `progression_pedagogique`
--
ALTER TABLE `progression_pedagogique`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_FECDF9391C109075` (`personnel_id`),
  ADD KEY `IDX_FECDF939F46CD258` (`matiere_id`),
  ADD KEY `IDX_FECDF939544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `projet_etudiant`
--
ALTER TABLE `projet_etudiant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_56FE4914721929E5` (`projet_periode_id`),
  ADD KEY `IDX_56FE49145DDD38F5` (`organisme_id`);

--
-- Index pour la table `projet_etudiant_etudiant`
--
ALTER TABLE `projet_etudiant_etudiant`
  ADD PRIMARY KEY (`projet_etudiant_id`,`etudiant_id`),
  ADD KEY `IDX_76D607566D0E59D` (`projet_etudiant_id`),
  ADD KEY `IDX_76D60756DDEAB1A3` (`etudiant_id`);

--
-- Index pour la table `projet_periode`
--
ALTER TABLE `projet_periode`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_11E970825577AFDB` (`semestre_id`),
  ADD KEY `IDX_11E97082544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `projet_periode_personnel`
--
ALTER TABLE `projet_periode_personnel`
  ADD PRIMARY KEY (`projet_periode_id`,`personnel_id`),
  ADD KEY `IDX_A445E11A721929E5` (`projet_periode_id`),
  ADD KEY `IDX_A445E11A1C109075` (`personnel_id`);

--
-- Index pour la table `qualite_questionnaire`
--
ALTER TABLE `qualite_questionnaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_44F7BFAA5577AFDB` (`semestre_id`);

--
-- Index pour la table `qualite_questionnaire_section`
--
ALTER TABLE `qualite_questionnaire_section`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_116F88B7CE07E8FF` (`questionnaire_id`),
  ADD KEY `IDX_116F88B7D823E37A` (`section_id`);

--
-- Index pour la table `qualite_section`
--
ALTER TABLE `qualite_section`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `qualite_section_question`
--
ALTER TABLE `qualite_section_question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_1AB733E7D823E37A` (`section_id`),
  ADD KEY `IDX_1AB733E71E27F6BF` (`question_id`);

--
-- Index pour la table `quizz_etudiant`
--
ALTER TABLE `quizz_etudiant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_F0AADEF1DDEAB1A3` (`etudiant_id`),
  ADD KEY `IDX_F0AADEF1CE07E8FF` (`questionnaire_id`);

--
-- Index pour la table `quizz_etudiant_reponse`
--
ALTER TABLE `quizz_etudiant_reponse`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_137031A3FBFF7E40` (`quizz_etudiant_id`);

--
-- Index pour la table `quizz_question`
--
ALTER TABLE `quizz_question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_3723B55C60BB6FE6` (`auteur_id`),
  ADD KEY `IDX_3723B55C7BAF8EEB` (`question_parent_id`);

--
-- Index pour la table `quizz_questionnaire`
--
ALTER TABLE `quizz_questionnaire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `quizz_questionnaire_quizz_question`
--
ALTER TABLE `quizz_questionnaire_quizz_question`
  ADD PRIMARY KEY (`quizz_questionnaire_id`,`quizz_question_id`),
  ADD KEY `IDX_6C63938D566E491F` (`quizz_questionnaire_id`),
  ADD KEY `IDX_6C63938D3832395C` (`quizz_question_id`);

--
-- Index pour la table `quizz_reponse`
--
ALTER TABLE `quizz_reponse`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_355C01131E27F6BF` (`question_id`);

--
-- Index pour la table `rattrapage`
--
ALTER TABLE `rattrapage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_BDE5586DDDEAB1A3` (`etudiant_id`),
  ADD KEY `IDX_BDE5586DF46CD258` (`matiere_id`),
  ADD KEY `IDX_BDE5586D1C109075` (`personnel_id`),
  ADD KEY `IDX_BDE5586D544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `salle`
--
ALTER TABLE `salle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_4E977E5CF6BD1646` (`site_id`);

--
-- Index pour la table `salle_examen`
--
ALTER TABLE `salle_examen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_65CF5313DC304035` (`salle_id`),
  ADD KEY `IDX_65CF5313CCF9E01E` (`departement_id`);

--
-- Index pour la table `scolarite`
--
ALTER TABLE `scolarite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_276250AB5577AFDB` (`semestre_id`),
  ADD KEY `IDX_276250ABDDEAB1A3` (`etudiant_id`),
  ADD KEY `IDX_276250AB544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `scolarite_moyenne_matiere`
--
ALTER TABLE `scolarite_moyenne_matiere`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_25D9FE28AA6B2AB6` (`scolarite_id`),
  ADD KEY `IDX_25D9FE28F46CD258` (`matiere_id`);

--
-- Index pour la table `scolarite_moyenne_ue`
--
ALTER TABLE `scolarite_moyenne_ue`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B78918B5AA6B2AB6` (`scolarite_id`),
  ADD KEY `IDX_B78918B562E883B1` (`ue_id`);

--
-- Index pour la table `scolarite_promo`
--
ALTER TABLE `scolarite_promo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_DDCE376C5577AFDB` (`semestre_id`),
  ADD KEY `IDX_DDCE376C544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `scolarite_promo_matiere`
--
ALTER TABLE `scolarite_promo_matiere`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_545B5C33CB57B82A` (`scolarite_promo_id`),
  ADD KEY `IDX_545B5C33F46CD258` (`matiere_id`);

--
-- Index pour la table `scolarite_promo_ue`
--
ALTER TABLE `scolarite_promo_ue`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_5A27D5E1CB57B82A` (`scolarite_promo_id`),
  ADD KEY `IDX_5A27D5E162E883B1` (`ue_id`);

--
-- Index pour la table `semestre`
--
ALTER TABLE `semestre`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_71688FBC4F6564F9` (`precedent_id`),
  ADD KEY `IDX_71688FBC9C2BB0CC` (`suivant_id`),
  ADD KEY `IDX_71688FBCCF416101` (`decale_id`),
  ADD KEY `IDX_71688FBCE2F2E760` (`opt_dest_mail_releve_id`),
  ADD KEY `IDX_71688FBC9266B8BA` (`opt_dest_mail_modif_note_id`),
  ADD KEY `IDX_71688FBCF782170E` (`opt_dest_mail_absence_resp_id`),
  ADD KEY `IDX_71688FBC543EC5F0` (`annee_id`),
  ADD KEY `IDX_71688FBCE6BBB747` (`ppn_actif_id`);

--
-- Index pour la table `site`
--
ALTER TABLE `site`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_694309E44DE7DC5C` (`adresse_id`);

--
-- Index pour la table `stage_etudiant`
--
ALTER TABLE `stage_etudiant`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_7999E68E86EC68D8` (`tuteur_id`),
  ADD UNIQUE KEY `UNIQ_7999E68E428641F9` (`adresse_stage_id`),
  ADD KEY `IDX_7999E68EBFDEDA6B` (`stage_periode_id`),
  ADD KEY `IDX_7999E68EDDEAB1A3` (`etudiant_id`),
  ADD KEY `IDX_7999E68E19FA6F23` (`tuteur_universitaire_id`),
  ADD KEY `IDX_7999E68EA4AEAFEA` (`entreprise_id`);

--
-- Index pour la table `stage_mail_template`
--
ALTER TABLE `stage_mail_template`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_B64E584BB08B63B` (`twig_template_id`),
  ADD KEY `IDX_B64E584BBFDEDA6B` (`stage_periode_id`);

--
-- Index pour la table `stage_periode`
--
ALTER TABLE `stage_periode`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_193A6DBE5577AFDB` (`semestre_id`),
  ADD KEY `IDX_193A6DBE544BFD58` (`annee_universitaire_id`);

--
-- Index pour la table `stage_periode_interruption`
--
ALTER TABLE `stage_periode_interruption`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_597C69BDBFDEDA6B` (`stage_periode_id`);

--
-- Index pour la table `stage_periode_offre`
--
ALTER TABLE `stage_periode_offre`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `stage_periode_offre_stage_periode`
--
ALTER TABLE `stage_periode_offre_stage_periode`
  ADD PRIMARY KEY (`stage_periode_offre_id`,`stage_periode_id`),
  ADD KEY `IDX_3EBC879A818A1210` (`stage_periode_offre_id`),
  ADD KEY `IDX_3EBC879ABFDEDA6B` (`stage_periode_id`);

--
-- Index pour la table `stage_periode_personnel`
--
ALTER TABLE `stage_periode_personnel`
  ADD PRIMARY KEY (`stage_periode_id`,`personnel_id`),
  ADD KEY `IDX_30781912BFDEDA6B` (`stage_periode_id`),
  ADD KEY `IDX_307819121C109075` (`personnel_id`);

--
-- Index pour la table `stage_periode_soutenance`
--
ALTER TABLE `stage_periode_soutenance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_DF1DB51FBFDEDA6B` (`stage_periode_id`);

--
-- Index pour la table `trello_tache`
--
ALTER TABLE `trello_tache`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2589CEE0CCF9E01E` (`departement_id`);

--
-- Index pour la table `twig_template`
--
ALTER TABLE `twig_template`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type_diplome`
--
ALTER TABLE `type_diplome`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type_document`
--
ALTER TABLE `type_document`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_1596AD8ACCF9E01E` (`departement_id`);

--
-- Index pour la table `type_groupe`
--
ALTER TABLE `type_groupe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_276EE7195577AFDB` (`semestre_id`);

--
-- Index pour la table `type_hrs`
--
ALTER TABLE `type_hrs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type_materiel`
--
ALTER TABLE `type_materiel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D52D976DCCF9E01E` (`departement_id`);

--
-- Index pour la table `ue`
--
ALTER TABLE `ue`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2E490A9B5577AFDB` (`semestre_id`);

--
-- Index pour la table `ufr`
--
ALTER TABLE `ufr`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_20D7AF9853C59D72` (`responsable_id`),
  ADD KEY `IDX_20D7AF988CC2ED5D` (`site_principal_id`);

--
-- Index pour la table `ufr_site`
--
ALTER TABLE `ufr_site`
  ADD PRIMARY KEY (`ufr_id`,`site_id`),
  ADD KEY `IDX_DD5A1B6AA469CB09` (`ufr_id`),
  ADD KEY `IDX_DD5A1B6AF6BD1646` (`site_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `absence`
--
ALTER TABLE `absence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT pour la table `absence_justificatif`
--
ALTER TABLE `absence_justificatif`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `actualite`
--
ALTER TABLE `actualite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `adresse`
--
ALTER TABLE `adresse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `alternance`
--
ALTER TABLE `alternance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `alternance_fiche_suivi`
--
ALTER TABLE `alternance_fiche_suivi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `annee`
--
ALTER TABLE `annee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `annee_universitaire`
--
ALTER TABLE `annee_universitaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `apc_apprentissage_critique`
--
ALTER TABLE `apc_apprentissage_critique`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `apc_competence`
--
ALTER TABLE `apc_competence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `apc_composante_essentielle`
--
ALTER TABLE `apc_composante_essentielle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `apc_niveau`
--
ALTER TABLE `apc_niveau`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `ArticleLike`
--
ALTER TABLE `ArticleLike`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `article_categorie`
--
ALTER TABLE `article_categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `bac`
--
ALTER TABLE `bac`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `borne`
--
ALTER TABLE `borne`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `cahier_texte`
--
ALTER TABLE `cahier_texte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `calendrier`
--
ALTER TABLE `calendrier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT pour la table `celcat_calendrier`
--
ALTER TABLE `celcat_calendrier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `celcat_event`
--
ALTER TABLE `celcat_event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `celcat_events`
--
ALTER TABLE `celcat_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `code_insee`
--
ALTER TABLE `code_insee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `competence`
--
ALTER TABLE `competence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `configuration`
--
ALTER TABLE `configuration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `courrier`
--
ALTER TABLE `courrier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `creneau_bloque`
--
ALTER TABLE `creneau_bloque`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `creneau_cours`
--
ALTER TABLE `creneau_cours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `date`
--
ALTER TABLE `date`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `departement`
--
ALTER TABLE `departement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `diplome`
--
ALTER TABLE `diplome`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `disponibilite`
--
ALTER TABLE `disponibilite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `DocumentFavori`
--
ALTER TABLE `DocumentFavori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `edt_planning`
--
ALTER TABLE `edt_planning`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `Emprunt`
--
ALTER TABLE `Emprunt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `emprunt_materiel`
--
ALTER TABLE `emprunt_materiel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `entreprise`
--
ALTER TABLE `entreprise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `etudiant`
--
ALTER TABLE `etudiant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT pour la table `evaluation`
--
ALTER TABLE `evaluation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `favori`
--
ALTER TABLE `favori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `fichier`
--
ALTER TABLE `fichier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `formation`
--
ALTER TABLE `formation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `groupe`
--
ALTER TABLE `groupe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `help`
--
ALTER TABLE `help`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `hrs`
--
ALTER TABLE `hrs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `indisponibilite_personnel`
--
ALTER TABLE `indisponibilite_personnel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `materiel`
--
ALTER TABLE `materiel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `materiel_commun`
--
ALTER TABLE `materiel_commun`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `materiel_commun_pret`
--
ALTER TABLE `materiel_commun_pret`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `materiel_pret`
--
ALTER TABLE `materiel_pret`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `matiere`
--
ALTER TABLE `matiere`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT pour la table `message_destinataire`
--
ALTER TABLE `message_destinataire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=541;
--
-- AUTO_INCREMENT pour la table `message_piece_jointe`
--
ALTER TABLE `message_piece_jointe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `modification_note`
--
ALTER TABLE `modification_note`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=189;
--
-- AUTO_INCREMENT pour la table `note`
--
ALTER TABLE `note`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT pour la table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `parcour`
--
ALTER TABLE `parcour`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `personnel`
--
ALTER TABLE `personnel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `personnel_departement`
--
ALTER TABLE `personnel_departement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `personnel_formation`
--
ALTER TABLE `personnel_formation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `ppn`
--
ALTER TABLE `ppn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `previsionnel`
--
ALTER TABLE `previsionnel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `progression_pedagogique`
--
ALTER TABLE `progression_pedagogique`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `projet_etudiant`
--
ALTER TABLE `projet_etudiant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `projet_periode`
--
ALTER TABLE `projet_periode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `qualite_questionnaire`
--
ALTER TABLE `qualite_questionnaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `qualite_questionnaire_section`
--
ALTER TABLE `qualite_questionnaire_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `qualite_section`
--
ALTER TABLE `qualite_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `qualite_section_question`
--
ALTER TABLE `qualite_section_question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `quizz_etudiant`
--
ALTER TABLE `quizz_etudiant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `quizz_etudiant_reponse`
--
ALTER TABLE `quizz_etudiant_reponse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `quizz_question`
--
ALTER TABLE `quizz_question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `quizz_questionnaire`
--
ALTER TABLE `quizz_questionnaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `quizz_reponse`
--
ALTER TABLE `quizz_reponse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `rattrapage`
--
ALTER TABLE `rattrapage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `salle`
--
ALTER TABLE `salle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `salle_examen`
--
ALTER TABLE `salle_examen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `scolarite`
--
ALTER TABLE `scolarite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `scolarite_moyenne_matiere`
--
ALTER TABLE `scolarite_moyenne_matiere`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `scolarite_moyenne_ue`
--
ALTER TABLE `scolarite_moyenne_ue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `scolarite_promo`
--
ALTER TABLE `scolarite_promo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `scolarite_promo_matiere`
--
ALTER TABLE `scolarite_promo_matiere`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `scolarite_promo_ue`
--
ALTER TABLE `scolarite_promo_ue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `semestre`
--
ALTER TABLE `semestre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `site`
--
ALTER TABLE `site`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `stage_etudiant`
--
ALTER TABLE `stage_etudiant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `stage_mail_template`
--
ALTER TABLE `stage_mail_template`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `stage_periode`
--
ALTER TABLE `stage_periode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `stage_periode_interruption`
--
ALTER TABLE `stage_periode_interruption`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `stage_periode_offre`
--
ALTER TABLE `stage_periode_offre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `stage_periode_soutenance`
--
ALTER TABLE `stage_periode_soutenance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `trello_tache`
--
ALTER TABLE `trello_tache`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `twig_template`
--
ALTER TABLE `twig_template`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `type_diplome`
--
ALTER TABLE `type_diplome`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `type_document`
--
ALTER TABLE `type_document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `type_groupe`
--
ALTER TABLE `type_groupe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `type_hrs`
--
ALTER TABLE `type_hrs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `type_materiel`
--
ALTER TABLE `type_materiel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `ue`
--
ALTER TABLE `ue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `ufr`
--
ALTER TABLE `ufr`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `absence`
--
ALTER TABLE `absence`
  ADD CONSTRAINT `FK_765AE0C91C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_765AE0C9544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_765AE0C9DDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`),
  ADD CONSTRAINT `FK_765AE0C9F46CD258` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id`);

--
-- Contraintes pour la table `absence_justificatif`
--
ALTER TABLE `absence_justificatif`
  ADD CONSTRAINT `FK_79296AB6544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_79296AB6DDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `actualite`
--
ALTER TABLE `actualite`
  ADD CONSTRAINT `FK_54928197CCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);

--
-- Contraintes pour la table `alternance`
--
ALTER TABLE `alternance`
  ADD CONSTRAINT `FK_445F37B919FA6F23` FOREIGN KEY (`tuteur_universitaire_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_445F37B9543EC5F0` FOREIGN KEY (`annee_id`) REFERENCES `annee` (`id`),
  ADD CONSTRAINT `FK_445F37B9544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_445F37B986EC68D8` FOREIGN KEY (`tuteur_id`) REFERENCES `contact` (`id`),
  ADD CONSTRAINT `FK_445F37B9A4AEAFEA` FOREIGN KEY (`entreprise_id`) REFERENCES `entreprise` (`id`),
  ADD CONSTRAINT `FK_445F37B9DA9A872F` FOREIGN KEY (`adresse_alternance_id`) REFERENCES `adresse` (`id`),
  ADD CONSTRAINT `FK_445F37B9DDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `alternance_fiche_suivi`
--
ALTER TABLE `alternance_fiche_suivi`
  ADD CONSTRAINT `FK_29F6206AC71DECBA` FOREIGN KEY (`alternance_id`) REFERENCES `alternance` (`id`);

--
-- Contraintes pour la table `annee`
--
ALTER TABLE `annee`
  ADD CONSTRAINT `FK_DE92C5CF26F859E2` FOREIGN KEY (`diplome_id`) REFERENCES `diplome` (`id`);

--
-- Contraintes pour la table `apc_apprentissage_critique`
--
ALTER TABLE `apc_apprentissage_critique`
  ADD CONSTRAINT `FK_A99B947AB3E9C81` FOREIGN KEY (`niveau_id`) REFERENCES `apc_niveau` (`id`);

--
-- Contraintes pour la table `apc_competence`
--
ALTER TABLE `apc_competence`
  ADD CONSTRAINT `FK_B949FC0F26F859E2` FOREIGN KEY (`diplome_id`) REFERENCES `diplome` (`id`);

--
-- Contraintes pour la table `apc_composante_essentielle`
--
ALTER TABLE `apc_composante_essentielle`
  ADD CONSTRAINT `FK_AC23ECFF15761DAB` FOREIGN KEY (`competence_id`) REFERENCES `apc_competence` (`id`);

--
-- Contraintes pour la table `apc_niveau`
--
ALTER TABLE `apc_niveau`
  ADD CONSTRAINT `FK_5CE8A82315761DAB` FOREIGN KEY (`competence_id`) REFERENCES `apc_competence` (`id`),
  ADD CONSTRAINT `FK_5CE8A823543EC5F0` FOREIGN KEY (`annee_id`) REFERENCES `annee` (`id`);

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `FK_23A0E661C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_23A0E66BCF5E72D` FOREIGN KEY (`categorie_id`) REFERENCES `article_categorie` (`id`);

--
-- Contraintes pour la table `ArticleLike`
--
ALTER TABLE `ArticleLike`
  ADD CONSTRAINT `FK_55B95ADA1C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_55B95ADA7294869C` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `FK_55B95ADADDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `article_categorie`
--
ALTER TABLE `article_categorie`
  ADD CONSTRAINT `FK_93488610CCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);

--
-- Contraintes pour la table `article_etudiant`
--
ALTER TABLE `article_etudiant`
  ADD CONSTRAINT `FK_2496D6887294869C` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_2496D688DDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `article_semestre`
--
ALTER TABLE `article_semestre`
  ADD CONSTRAINT `FK_24807BD75577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_24807BD77294869C` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `borne_semestre`
--
ALTER TABLE `borne_semestre`
  ADD CONSTRAINT `FK_D1378E3B5577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_D1378E3B7F023A56` FOREIGN KEY (`borne_id`) REFERENCES `borne` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `cahier_texte`
--
ALTER TABLE `cahier_texte`
  ADD CONSTRAINT `FK_B554C6181C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_B554C6185577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`),
  ADD CONSTRAINT `FK_B554C618F46CD258` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id`);

--
-- Contraintes pour la table `cahier_texte_fichier`
--
ALTER TABLE `cahier_texte_fichier`
  ADD CONSTRAINT `FK_A095F9C885D2D268` FOREIGN KEY (`cahier_texte_id`) REFERENCES `cahier_texte` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_A095F9C8F915CFE` FOREIGN KEY (`fichier_id`) REFERENCES `fichier` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `calendrier`
--
ALTER TABLE `calendrier`
  ADD CONSTRAINT `FK_B2753CB9544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`);

--
-- Contraintes pour la table `celcat_event`
--
ALTER TABLE `celcat_event`
  ADD CONSTRAINT `FK_AF9D08F7544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`);

--
-- Contraintes pour la table `competence`
--
ALTER TABLE `competence`
  ADD CONSTRAINT `FK_94D4687F26F859E2` FOREIGN KEY (`diplome_id`) REFERENCES `diplome` (`id`),
  ADD CONSTRAINT `FK_94D4687F727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `competence` (`id`);

--
-- Contraintes pour la table `creneau_bloque`
--
ALTER TABLE `creneau_bloque`
  ADD CONSTRAINT `FK_441F29EE122EEC90` FOREIGN KEY (`semaine_id`) REFERENCES `calendrier` (`id`),
  ADD CONSTRAINT `FK_441F29EE7D0729A9` FOREIGN KEY (`creneau_id`) REFERENCES `creneau_cours` (`id`);

--
-- Contraintes pour la table `creneau_cours`
--
ALTER TABLE `creneau_cours`
  ADD CONSTRAINT `FK_E844BB21544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_E844BB21CCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);

--
-- Contraintes pour la table `date`
--
ALTER TABLE `date`
  ADD CONSTRAINT `FK_AA9E377ACCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);

--
-- Contraintes pour la table `date_semestre`
--
ALTER TABLE `date_semestre`
  ADD CONSTRAINT `FK_B25DE61A5577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_B25DE61AB897366B` FOREIGN KEY (`date_id`) REFERENCES `date` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `departement`
--
ALTER TABLE `departement`
  ADD CONSTRAINT `FK_C1765B632AC98151` FOREIGN KEY (`respri_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_C1765B63A469CB09` FOREIGN KEY (`ufr_id`) REFERENCES `ufr` (`id`),
  ADD CONSTRAINT `FK_C1765B63DADEB263` FOREIGN KEY (`resp_materiel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_C1765B63EB0464C9` FOREIGN KEY (`annee_universitaire_prepare_id`) REFERENCES `annee_universitaire` (`id`);

--
-- Contraintes pour la table `diplome`
--
ALTER TABLE `diplome`
  ADD CONSTRAINT `FK_EB4C4D4E39A24FD8` FOREIGN KEY (`assistant_diplome_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_EB4C4D4E3BFB8FC7` FOREIGN KEY (`type_diplome_id`) REFERENCES `type_diplome` (`id`),
  ADD CONSTRAINT `FK_EB4C4D4E544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_EB4C4D4E7CF1ABB8` FOREIGN KEY (`opt_responsable_qualite_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_EB4C4D4ECCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`),
  ADD CONSTRAINT `FK_EB4C4D4ED2D1AAE2` FOREIGN KEY (`responsable_diplome_id`) REFERENCES `personnel` (`id`);

--
-- Contraintes pour la table `disponibilite`
--
ALTER TABLE `disponibilite`
  ADD CONSTRAINT `FK_2CBACE2F1C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_2CBACE2F544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`);

--
-- Contraintes pour la table `document`
--
ALTER TABLE `document`
  ADD CONSTRAINT `FK_D8698A768826AFA6` FOREIGN KEY (`type_document_id`) REFERENCES `type_document` (`id`);

--
-- Contraintes pour la table `DocumentFavori`
--
ALTER TABLE `DocumentFavori`
  ADD CONSTRAINT `FK_C6D445CC1C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_C6D445CCC33F7837` FOREIGN KEY (`document_id`) REFERENCES `document` (`id`),
  ADD CONSTRAINT `FK_C6D445CCDDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `document_semestre`
--
ALTER TABLE `document_semestre`
  ADD CONSTRAINT `FK_FEA97EE55577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_FEA97EE5C33F7837` FOREIGN KEY (`document_id`) REFERENCES `document` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `edt_planning`
--
ALTER TABLE `edt_planning`
  ADD CONSTRAINT `FK_C8DBF3175577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`),
  ADD CONSTRAINT `FK_C8DBF317AB9A1716` FOREIGN KEY (`intervenant_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_C8DBF317F46CD258` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id`);

--
-- Contraintes pour la table `Emprunt`
--
ALTER TABLE `Emprunt`
  ADD CONSTRAINT `FK_F9FD484B1C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_F9FD484BCCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`),
  ADD CONSTRAINT `FK_F9FD484BDDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `emprunt_materiel`
--
ALTER TABLE `emprunt_materiel`
  ADD CONSTRAINT `FK_B0A6D9C616880AAF` FOREIGN KEY (`materiel_id`) REFERENCES `materiel` (`id`),
  ADD CONSTRAINT `FK_B0A6D9C6AE7FEF94` FOREIGN KEY (`emprunt_id`) REFERENCES `Emprunt` (`id`);

--
-- Contraintes pour la table `entreprise`
--
ALTER TABLE `entreprise`
  ADD CONSTRAINT `FK_D19FA604DE7DC5C` FOREIGN KEY (`adresse_id`) REFERENCES `adresse` (`id`),
  ADD CONSTRAINT `FK_D19FA6053C59D72` FOREIGN KEY (`responsable_id`) REFERENCES `contact` (`id`);

--
-- Contraintes pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `FK_717E22E34DE7DC5C` FOREIGN KEY (`adresse_id`) REFERENCES `adresse` (`id`),
  ADD CONSTRAINT `FK_717E22E35577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`),
  ADD CONSTRAINT `FK_717E22E3CCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`),
  ADD CONSTRAINT `FK_717E22E3CD22752C` FOREIGN KEY (`adresse_parentale_id`) REFERENCES `adresse` (`id`),
  ADD CONSTRAINT `FK_717E22E3E03F15C0` FOREIGN KEY (`bac_id`) REFERENCES `bac` (`id`);

--
-- Contraintes pour la table `etudiant_groupe`
--
ALTER TABLE `etudiant_groupe`
  ADD CONSTRAINT `FK_10C7EA427A45358C` FOREIGN KEY (`groupe_id`) REFERENCES `groupe` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_10C7EA42DDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `evaluation`
--
ALTER TABLE `evaluation`
  ADD CONSTRAINT `FK_1323A575544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_1323A57566A6ABE2` FOREIGN KEY (`personnel_auteur_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_1323A575727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `evaluation` (`id`),
  ADD CONSTRAINT `FK_1323A575CE83749C` FOREIGN KEY (`type_groupe_id`) REFERENCES `type_groupe` (`id`),
  ADD CONSTRAINT `FK_1323A575F46CD258` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id`);

--
-- Contraintes pour la table `evaluation_personnel`
--
ALTER TABLE `evaluation_personnel`
  ADD CONSTRAINT `FK_74BC385A1C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_74BC385A456C5646` FOREIGN KEY (`evaluation_id`) REFERENCES `evaluation` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `favori`
--
ALTER TABLE `favori`
  ADD CONSTRAINT `FK_EF85A2CC4E463162` FOREIGN KEY (`etudiant_demande_id`) REFERENCES `etudiant` (`id`),
  ADD CONSTRAINT `FK_EF85A2CC9D7BCD43` FOREIGN KEY (`etudiant_demandeur_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `groupe`
--
ALTER TABLE `groupe`
  ADD CONSTRAINT `FK_4B98C216E38C0DB` FOREIGN KEY (`parcours_id`) REFERENCES `parcour` (`id`),
  ADD CONSTRAINT `FK_4B98C21727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `groupe` (`id`),
  ADD CONSTRAINT `FK_4B98C21CE83749C` FOREIGN KEY (`type_groupe_id`) REFERENCES `type_groupe` (`id`);

--
-- Contraintes pour la table `hrs`
--
ALTER TABLE `hrs`
  ADD CONSTRAINT `FK_6D807878152AE753` FOREIGN KEY (`type_hrs_id`) REFERENCES `type_hrs` (`id`),
  ADD CONSTRAINT `FK_6D8078781C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_6D80787826F859E2` FOREIGN KEY (`diplome_id`) REFERENCES `diplome` (`id`),
  ADD CONSTRAINT `FK_6D8078785577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`),
  ADD CONSTRAINT `FK_6D807878CCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);

--
-- Contraintes pour la table `indisponibilite_personnel`
--
ALTER TABLE `indisponibilite_personnel`
  ADD CONSTRAINT `FK_C98EDDB5122EEC90` FOREIGN KEY (`semaine_id`) REFERENCES `calendrier` (`id`),
  ADD CONSTRAINT `FK_C98EDDB51C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_C98EDDB57D0729A9` FOREIGN KEY (`creneau_id`) REFERENCES `creneau_cours` (`id`);

--
-- Contraintes pour la table `materiel`
--
ALTER TABLE `materiel`
  ADD CONSTRAINT `FK_18D2B0915D91DD3E` FOREIGN KEY (`type_materiel_id`) REFERENCES `type_materiel` (`id`);

--
-- Contraintes pour la table `materiel_commun`
--
ALTER TABLE `materiel_commun`
  ADD CONSTRAINT `FK_991F50BDE7A1254A` FOREIGN KEY (`contact_id`) REFERENCES `personnel` (`id`);

--
-- Contraintes pour la table `materiel_commun_pret`
--
ALTER TABLE `materiel_commun_pret`
  ADD CONSTRAINT `FK_9B6A8F7B1C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_9B6A8F7B9C74F84B` FOREIGN KEY (`materiel_commun_id`) REFERENCES `materiel_commun` (`id`);

--
-- Contraintes pour la table `materiel_pret`
--
ALTER TABLE `materiel_pret`
  ADD CONSTRAINT `FK_F2CBA05F5200282E` FOREIGN KEY (`formation_id`) REFERENCES `formation` (`id`);

--
-- Contraintes pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD CONSTRAINT `FK_9014574A1CBD0BF` FOREIGN KEY (`ppn_id`) REFERENCES `ppn` (`id`),
  ADD CONSTRAINT `FK_9014574A62E883B1` FOREIGN KEY (`ue_id`) REFERENCES `ue` (`id`),
  ADD CONSTRAINT `FK_9014574A6E38C0DB` FOREIGN KEY (`parcours_id`) REFERENCES `parcour` (`id`),
  ADD CONSTRAINT `FK_9014574AB7749956` FOREIGN KEY (`matiere_parent_id`) REFERENCES `matiere` (`id`);

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `FK_B6BD307F10335F61` FOREIGN KEY (`expediteur_id`) REFERENCES `personnel` (`id`);

--
-- Contraintes pour la table `message_destinataire`
--
ALTER TABLE `message_destinataire`
  ADD CONSTRAINT `FK_3AA8CA741C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_3AA8CA74537A1329` FOREIGN KEY (`message_id`) REFERENCES `message` (`id`),
  ADD CONSTRAINT `FK_3AA8CA74DDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `message_piece_jointe`
--
ALTER TABLE `message_piece_jointe`
  ADD CONSTRAINT `FK_6F502432537A1329` FOREIGN KEY (`message_id`) REFERENCES `message` (`id`);

--
-- Contraintes pour la table `modification_note`
--
ALTER TABLE `modification_note`
  ADD CONSTRAINT `FK_607975E51C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_607975E526ED0855` FOREIGN KEY (`note_id`) REFERENCES `note` (`id`);

--
-- Contraintes pour la table `note`
--
ALTER TABLE `note`
  ADD CONSTRAINT `FK_CFBDFA14456C5646` FOREIGN KEY (`evaluation_id`) REFERENCES `evaluation` (`id`),
  ADD CONSTRAINT `FK_CFBDFA14DDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `FK_BF5476CA1C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_BF5476CADDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `parcour`
--
ALTER TABLE `parcour`
  ADD CONSTRAINT `FK_B7E529565577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`);

--
-- Contraintes pour la table `personnel`
--
ALTER TABLE `personnel`
  ADD CONSTRAINT `FK_A6BCF3DE4DE7DC5C` FOREIGN KEY (`adresse_id`) REFERENCES `adresse` (`id`);

--
-- Contraintes pour la table `personnel_departement`
--
ALTER TABLE `personnel_departement`
  ADD CONSTRAINT `FK_39139ED31C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_39139ED3CCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);

--
-- Contraintes pour la table `personnel_formation`
--
ALTER TABLE `personnel_formation`
  ADD CONSTRAINT `FK_465DE5BB5200282E` FOREIGN KEY (`formation_id`) REFERENCES `formation` (`id`);

--
-- Contraintes pour la table `ppn`
--
ALTER TABLE `ppn`
  ADD CONSTRAINT `FK_2E8584EB26F859E2` FOREIGN KEY (`diplome_id`) REFERENCES `diplome` (`id`);

--
-- Contraintes pour la table `previsionnel`
--
ALTER TABLE `previsionnel`
  ADD CONSTRAINT `FK_AE25C2611C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_AE25C261F46CD258` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id`);

--
-- Contraintes pour la table `progression_pedagogique`
--
ALTER TABLE `progression_pedagogique`
  ADD CONSTRAINT `FK_FECDF9391C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_FECDF939544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_FECDF939F46CD258` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id`);

--
-- Contraintes pour la table `projet_etudiant`
--
ALTER TABLE `projet_etudiant`
  ADD CONSTRAINT `FK_56FE49145DDD38F5` FOREIGN KEY (`organisme_id`) REFERENCES `entreprise` (`id`),
  ADD CONSTRAINT `FK_56FE4914721929E5` FOREIGN KEY (`projet_periode_id`) REFERENCES `projet_periode` (`id`);

--
-- Contraintes pour la table `projet_etudiant_etudiant`
--
ALTER TABLE `projet_etudiant_etudiant`
  ADD CONSTRAINT `FK_76D607566D0E59D` FOREIGN KEY (`projet_etudiant_id`) REFERENCES `projet_etudiant` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_76D60756DDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `projet_periode`
--
ALTER TABLE `projet_periode`
  ADD CONSTRAINT `FK_11E97082544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_11E970825577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`);

--
-- Contraintes pour la table `projet_periode_personnel`
--
ALTER TABLE `projet_periode_personnel`
  ADD CONSTRAINT `FK_A445E11A1C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_A445E11A721929E5` FOREIGN KEY (`projet_periode_id`) REFERENCES `projet_periode` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `qualite_questionnaire`
--
ALTER TABLE `qualite_questionnaire`
  ADD CONSTRAINT `FK_44F7BFAA5577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`);

--
-- Contraintes pour la table `qualite_questionnaire_section`
--
ALTER TABLE `qualite_questionnaire_section`
  ADD CONSTRAINT `FK_116F88B7CE07E8FF` FOREIGN KEY (`questionnaire_id`) REFERENCES `qualite_questionnaire` (`id`),
  ADD CONSTRAINT `FK_116F88B7D823E37A` FOREIGN KEY (`section_id`) REFERENCES `qualite_section` (`id`);

--
-- Contraintes pour la table `qualite_section_question`
--
ALTER TABLE `qualite_section_question`
  ADD CONSTRAINT `FK_1AB733E71E27F6BF` FOREIGN KEY (`question_id`) REFERENCES `quizz_question` (`id`),
  ADD CONSTRAINT `FK_1AB733E7D823E37A` FOREIGN KEY (`section_id`) REFERENCES `qualite_section` (`id`);

--
-- Contraintes pour la table `quizz_etudiant`
--
ALTER TABLE `quizz_etudiant`
  ADD CONSTRAINT `FK_F0AADEF1CE07E8FF` FOREIGN KEY (`questionnaire_id`) REFERENCES `qualite_questionnaire` (`id`),
  ADD CONSTRAINT `FK_F0AADEF1DDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `quizz_etudiant_reponse`
--
ALTER TABLE `quizz_etudiant_reponse`
  ADD CONSTRAINT `FK_137031A3FBFF7E40` FOREIGN KEY (`quizz_etudiant_id`) REFERENCES `quizz_etudiant` (`id`);

--
-- Contraintes pour la table `quizz_question`
--
ALTER TABLE `quizz_question`
  ADD CONSTRAINT `FK_3723B55C60BB6FE6` FOREIGN KEY (`auteur_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_3723B55C7BAF8EEB` FOREIGN KEY (`question_parent_id`) REFERENCES `quizz_question` (`id`);

--
-- Contraintes pour la table `quizz_questionnaire_quizz_question`
--
ALTER TABLE `quizz_questionnaire_quizz_question`
  ADD CONSTRAINT `FK_6C63938D3832395C` FOREIGN KEY (`quizz_question_id`) REFERENCES `quizz_question` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_6C63938D566E491F` FOREIGN KEY (`quizz_questionnaire_id`) REFERENCES `quizz_questionnaire` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `quizz_reponse`
--
ALTER TABLE `quizz_reponse`
  ADD CONSTRAINT `FK_355C01131E27F6BF` FOREIGN KEY (`question_id`) REFERENCES `quizz_question` (`id`);

--
-- Contraintes pour la table `rattrapage`
--
ALTER TABLE `rattrapage`
  ADD CONSTRAINT `FK_BDE5586D1C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_BDE5586D544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_BDE5586DDDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`),
  ADD CONSTRAINT `FK_BDE5586DF46CD258` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id`);

--
-- Contraintes pour la table `salle`
--
ALTER TABLE `salle`
  ADD CONSTRAINT `FK_4E977E5CF6BD1646` FOREIGN KEY (`site_id`) REFERENCES `site` (`id`);

--
-- Contraintes pour la table `salle_examen`
--
ALTER TABLE `salle_examen`
  ADD CONSTRAINT `FK_65CF5313CCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`),
  ADD CONSTRAINT `FK_65CF5313DC304035` FOREIGN KEY (`salle_id`) REFERENCES `salle` (`id`);

--
-- Contraintes pour la table `scolarite`
--
ALTER TABLE `scolarite`
  ADD CONSTRAINT `FK_276250AB544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_276250AB5577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`),
  ADD CONSTRAINT `FK_276250ABDDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `scolarite_moyenne_matiere`
--
ALTER TABLE `scolarite_moyenne_matiere`
  ADD CONSTRAINT `FK_25D9FE28AA6B2AB6` FOREIGN KEY (`scolarite_id`) REFERENCES `scolarite` (`id`),
  ADD CONSTRAINT `FK_25D9FE28F46CD258` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id`);

--
-- Contraintes pour la table `scolarite_moyenne_ue`
--
ALTER TABLE `scolarite_moyenne_ue`
  ADD CONSTRAINT `FK_B78918B562E883B1` FOREIGN KEY (`ue_id`) REFERENCES `ue` (`id`),
  ADD CONSTRAINT `FK_B78918B5AA6B2AB6` FOREIGN KEY (`scolarite_id`) REFERENCES `scolarite` (`id`);

--
-- Contraintes pour la table `scolarite_promo`
--
ALTER TABLE `scolarite_promo`
  ADD CONSTRAINT `FK_DDCE376C544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_DDCE376C5577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`);

--
-- Contraintes pour la table `scolarite_promo_matiere`
--
ALTER TABLE `scolarite_promo_matiere`
  ADD CONSTRAINT `FK_545B5C33CB57B82A` FOREIGN KEY (`scolarite_promo_id`) REFERENCES `scolarite_promo` (`id`),
  ADD CONSTRAINT `FK_545B5C33F46CD258` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id`);

--
-- Contraintes pour la table `scolarite_promo_ue`
--
ALTER TABLE `scolarite_promo_ue`
  ADD CONSTRAINT `FK_5A27D5E162E883B1` FOREIGN KEY (`ue_id`) REFERENCES `ue` (`id`),
  ADD CONSTRAINT `FK_5A27D5E1CB57B82A` FOREIGN KEY (`scolarite_promo_id`) REFERENCES `scolarite_promo` (`id`);

--
-- Contraintes pour la table `semestre`
--
ALTER TABLE `semestre`
  ADD CONSTRAINT `FK_71688FBC4F6564F9` FOREIGN KEY (`precedent_id`) REFERENCES `semestre` (`id`),
  ADD CONSTRAINT `FK_71688FBC543EC5F0` FOREIGN KEY (`annee_id`) REFERENCES `annee` (`id`),
  ADD CONSTRAINT `FK_71688FBC9266B8BA` FOREIGN KEY (`opt_dest_mail_modif_note_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_71688FBC9C2BB0CC` FOREIGN KEY (`suivant_id`) REFERENCES `semestre` (`id`),
  ADD CONSTRAINT `FK_71688FBCCF416101` FOREIGN KEY (`decale_id`) REFERENCES `semestre` (`id`),
  ADD CONSTRAINT `FK_71688FBCE2F2E760` FOREIGN KEY (`opt_dest_mail_releve_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_71688FBCE6BBB747` FOREIGN KEY (`ppn_actif_id`) REFERENCES `ppn` (`id`),
  ADD CONSTRAINT `FK_71688FBCF782170E` FOREIGN KEY (`opt_dest_mail_absence_resp_id`) REFERENCES `personnel` (`id`);

--
-- Contraintes pour la table `site`
--
ALTER TABLE `site`
  ADD CONSTRAINT `FK_694309E44DE7DC5C` FOREIGN KEY (`adresse_id`) REFERENCES `adresse` (`id`);

--
-- Contraintes pour la table `stage_etudiant`
--
ALTER TABLE `stage_etudiant`
  ADD CONSTRAINT `FK_7999E68E19FA6F23` FOREIGN KEY (`tuteur_universitaire_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_7999E68E428641F9` FOREIGN KEY (`adresse_stage_id`) REFERENCES `adresse` (`id`),
  ADD CONSTRAINT `FK_7999E68E86EC68D8` FOREIGN KEY (`tuteur_id`) REFERENCES `contact` (`id`),
  ADD CONSTRAINT `FK_7999E68EA4AEAFEA` FOREIGN KEY (`entreprise_id`) REFERENCES `entreprise` (`id`),
  ADD CONSTRAINT `FK_7999E68EBFDEDA6B` FOREIGN KEY (`stage_periode_id`) REFERENCES `stage_periode` (`id`),
  ADD CONSTRAINT `FK_7999E68EDDEAB1A3` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `stage_mail_template`
--
ALTER TABLE `stage_mail_template`
  ADD CONSTRAINT `FK_B64E584BB08B63B` FOREIGN KEY (`twig_template_id`) REFERENCES `twig_template` (`id`),
  ADD CONSTRAINT `FK_B64E584BBFDEDA6B` FOREIGN KEY (`stage_periode_id`) REFERENCES `stage_periode` (`id`);

--
-- Contraintes pour la table `stage_periode`
--
ALTER TABLE `stage_periode`
  ADD CONSTRAINT `FK_193A6DBE544BFD58` FOREIGN KEY (`annee_universitaire_id`) REFERENCES `annee_universitaire` (`id`),
  ADD CONSTRAINT `FK_193A6DBE5577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`);

--
-- Contraintes pour la table `stage_periode_interruption`
--
ALTER TABLE `stage_periode_interruption`
  ADD CONSTRAINT `FK_597C69BDBFDEDA6B` FOREIGN KEY (`stage_periode_id`) REFERENCES `stage_periode` (`id`);

--
-- Contraintes pour la table `stage_periode_offre_stage_periode`
--
ALTER TABLE `stage_periode_offre_stage_periode`
  ADD CONSTRAINT `FK_3EBC879A818A1210` FOREIGN KEY (`stage_periode_offre_id`) REFERENCES `stage_periode_offre` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_3EBC879ABFDEDA6B` FOREIGN KEY (`stage_periode_id`) REFERENCES `stage_periode` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `stage_periode_personnel`
--
ALTER TABLE `stage_periode_personnel`
  ADD CONSTRAINT `FK_307819121C109075` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_30781912BFDEDA6B` FOREIGN KEY (`stage_periode_id`) REFERENCES `stage_periode` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `stage_periode_soutenance`
--
ALTER TABLE `stage_periode_soutenance`
  ADD CONSTRAINT `FK_DF1DB51FBFDEDA6B` FOREIGN KEY (`stage_periode_id`) REFERENCES `stage_periode` (`id`);

--
-- Contraintes pour la table `trello_tache`
--
ALTER TABLE `trello_tache`
  ADD CONSTRAINT `FK_2589CEE0CCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);

--
-- Contraintes pour la table `type_document`
--
ALTER TABLE `type_document`
  ADD CONSTRAINT `FK_1596AD8ACCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);

--
-- Contraintes pour la table `type_groupe`
--
ALTER TABLE `type_groupe`
  ADD CONSTRAINT `FK_276EE7195577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`);

--  Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
--  @file /Users/davidannebicque/htdocs/intranetV3/demo/intranetv3.sql
--  @author davidannebicque
--  @project intranetV3
--  @lastUpdate 14/10/2020 10:24

--
-- Contraintes pour la table `type_materiel`
--
ALTER TABLE `type_materiel`
  ADD CONSTRAINT `FK_D52D976DCCF9E01E` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);

--
-- Contraintes pour la table `ue`
--
ALTER TABLE `ue`
  ADD CONSTRAINT `FK_2E490A9B5577AFDB` FOREIGN KEY (`semestre_id`) REFERENCES `semestre` (`id`);

--
-- Contraintes pour la table `ufr`
--
ALTER TABLE `ufr`
  ADD CONSTRAINT `FK_20D7AF9853C59D72` FOREIGN KEY (`responsable_id`) REFERENCES `personnel` (`id`),
  ADD CONSTRAINT `FK_20D7AF988CC2ED5D` FOREIGN KEY (`site_principal_id`) REFERENCES `site` (`id`);

--
-- Contraintes pour la table `ufr_site`
--
ALTER TABLE `ufr_site`
  ADD CONSTRAINT `FK_DD5A1B6AA469CB09` FOREIGN KEY (`ufr_id`) REFERENCES `ufr` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_DD5A1B6AF6BD1646` FOREIGN KEY (`site_id`) REFERENCES `site` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
