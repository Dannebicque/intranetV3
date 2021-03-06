[![Build Status](https://travis-ci.org/Dannebicque/intranetV3.svg?branch=master)](https://travis-ci.org/Dannebicque/intranetV3) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Dannebicque/intranetV3/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Dannebicque/intranetV3/?branch=master) [![SymfonyInsight](https://insight.symfony.com/projects/34e4f6d3-1531-45ba-bb3f-187e4fa054e1/mini.svg)](https://insight.symfony.com/projects/34e4f6d3-1531-45ba-bb3f-187e4fa054e1) [![Maintainability](https://api.codeclimate.com/v1/badges/78fd8b8fb668f9887a71/maintainability)](https://codeclimate.com/github/Dannebicque/intranetV3/maintainability)


# IntranetV3

Actuelle version de l'intranet des IUT de Troyes et de Reims-Châlons-Charleville

basé sur Symfony 5.2

# Installation

Les instructions se trouve dans le fichier [install.md](install.md)

# Objectifs

Cet intranet est spécialisé dans la gestion de formation universitaire de type DUT ou Licences professionnelles, **et
très prochainement (rentrée 2021) de type B.U.T. (Bachelor Universitaire de Technologie).**

Il propose de nombreuses gestions comme le suivi des notes, des absences, des rattrapages, des services prévisionnels
des enseignants, des trombinoscopes et des groupes d'étudiants et beaucoup d'autres fonctionnalités.

Cette nouvelle version apporte une refonte ergonomique complète, et une optimisation du code, pour prendre en compte les
standard de SF 5.2 et PHP 7.4.

# Mises à jours

Les améliorations sont régulières, tout comme des ajustements et des correctifs. Toutes les informations seront (autant
que j'y pense) dans le [changelog](CHANGELOG.md)

# Détails des fonctionnalités

## Fonctionnalités pour les étudiants

* Consultation de leur emploi du temps (synchronisation avec
  Celcat) ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Synchronisation ICAL avec leur agenda (format ics).
* Paramétrage de la visibilité de l’emploi du temps, par les gestionnaires (nombre de
  semaines) ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Visibilité de leurs notes et leurs absences (en temps réel ou non)
* Consultation de leur parcours scolaire (au sein de
  l’établissement) ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Consultation des Modalités de Contrôle des Connaissances (MCC)
* Consultation de documents
* Système de blog pour les relations internationales, C2I, infos
  pratiques ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Dates importantes
* Demandes de rattrapages
* Suivi de leur stage
  * Offres de stage
  * Données pour la convention
  * Tuteur
* Suivi de leur projets tutorés ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
  * Edition des conventions
* Suivi de l'alternance
  * Informations sur l'alternance
* Système d’emprunt de matériel (MMI) ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Système (basique) de quizz/sondage ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Système de notification ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Possibiltié de déposer un justificatif d'absence en
  ligne ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)

## Fonctionnalités pour les enseignants/intervenants

* Suivi des étudiants (profil, trombinoscope) ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Saisie des notes et absences
* Graphique de répartition des notes sur une
  évaluation. ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Visualisation du service prévisionnel
* Sollicitation des étudiants pour un quizz/sondage
* Messagerie vers les étudiants (par promo, groupe ou individuel), mail officiel, mail perso si disponible et message interne de l’intranet
* Liste des étudiants à suivre en stage ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Formlaire de suivi d’alternance ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Historique des absences et des notes des
  étudiants ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Outils de recherche ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)

## Fonctionnalités pour les responsables des stages

* Suivi des étudiants par période de stage ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Edition automatisée des conventions et des courriers
* Edition des plannings de soutenance et des courriers de
  convocation ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Affectation d’un tuteur universitaire
* Statistiques ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Gestion des avenants ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)

## Fonctionnalités pour les responsables des projets tutorés

* Suivi des étudiants par période de projet ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Edition automatisée des conventions ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)

## Fonctionnalités pour la direction du département

* Suivi des étudiants, de leurs notes et de leurs
  absences ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Possibilité de justifier des absences (une à une)
* Possibilité de justifier des absences par
  lot ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Gestion des commissions des absences (convocation des étudiants, mailings,
  planning) ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Gestion des notes et des sous-commissions (calculs des moyennes, proposition de décision)
  * Possibilité d’ajuster toutes les
    informations ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Publication des sous-commissions aux
  étudiants ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Exports pour les fichiers de grand jury
* Exports Apogée
* Gestion des documents, des dates
  importantes ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Gestion des prévisionnels (exports/imports OMEGA)
* Suivi de cohorte
* Edition de documents pour les examens (placements, appels)
* Configuration de la formation, des groupes, de l’intranet (règles spécifiques : par département, par diplôme, par
  année) ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Outils de comparaison EDT/service
  prévisionnel ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* les scolarités sont sauvegardées à partir de 2020, et possibilité de revenir sur une année antérieure.
* Export d'un document de situation (bilan de semestre ou de formation) pour les étudiants : avis de poursuite
  d'études ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)

## Fonctionnalités pour le responsable des absences

* Suivi des absences
* Justifications
* suivi des justificatifs d'absences ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Rattrapages ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Commission des absences ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)

## Fonctionnalités pour le responsable des notes

* Suivi des notes et des évaluations
  * Niveau de complétion ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Rattrapages et planning de rattrapage ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* sous-commissions

## Fonctionnalités pour le responsable des Relations Internationales

* Alimentation du blog RI ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Dépôt de documents

## Fonctionnalités pour la Scolarité

* Récupération des fichiers de fin de semestre pour Apogée
* Suivi des étudiants
* Enquête diplômés DUT à 6 mois ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Inscriptions pour la RDD ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Gestion des changements de formation  ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Imports des étudiants par la scolarité ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)

## Fonctionnalités pour la partie "Qualité / ISO 9001" ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)
* Mise en place d'un "lime-survey" interne pour la création des questions qualités
* Export des résultats des enquêtes au formation qualité

# Nouveautés globales à toutes les fonctionnalités ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)

* Version multilangue (Français et Anglais pour le moment)
* Historisation des données (retrouver d'anciens semestre, d'anciennes notes)
* Horadatage systèmatique
* Suivi plus précis
* Prise en compte du RGPD
* Export multi-format (csv, PDF, XLSX) sur l'ensemble des pages

# Interconnexions

* Celcat pour la récupération des emplois du temps ![Optimisation V3](https://img.shields.io/badge/Optimisation-V3-orange.svg)
* Apogée pour la synchornisation des maquettes et la récupération des listes. ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)

# Features sur la version 3.1 (premier semestre 2021) ![Nouveauté V3.1 premier semestre 2021](https://img.shields.io/badge/Nouveauté-V3.1-brightgreen.svg)

* Prise en compte de l'évaluation en compétences
* Dimension "sociale" et "participative" de l’intranet
* Mise en place d'API pour le développement d'applications tierces
* Formulaire de suivi de stage
* Suivi des plans de cours dans le cadre d'une démarche qualité LP
* Edition des plannings de soutenance de projet
* Mise en place du B.U.T et de l'Approche par Compétences
  * Référentiel de compétences
  * Référentiel de formation
    * Ressources
    * SAÉ
  * Adaptation de l'intranet pour gérer prévisionnel, notes avec le B.U.T.
  * Mise en place des nouvelles règles de validation
  * Portfolio

### Fonctionnalités pour le Niveau « Administration IUT » ![Nouveauté V3](https://img.shields.io/badge/Nouveauté-V3-brightgreen.svg)

* Profil des étudiants et des enseignants
* Suivi des services prévisionnels de manière globale par l’administration
* Accès RH pour gérer les vacataires et nouveaux recrutements

# Features sur la version 3.2 (deuxième semestre 2021) ![Nouveauté V3.2 deuxième semestre 2021](https://img.shields.io/badge/Nouveauté-V3.2-brightgreen.svg)

* Notion de "sous-évaluations" pour permettre la saisie de l'intérgalité des notes.
* Mise en place d'un "cahier de texte", auto-alimenté par les étudiants
* Mise en place d’un « forum » d’échange sur les modules de la formation, avec différents niveaux (groupes TD/TP,
  module).
  * Répondre à une demande étudiante
  * Possibilité pour l’équipe d’interagir sur ces forums
