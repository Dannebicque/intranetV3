# Base de données intranetv3

## Principe généraux

Les données sensibles sont horodatées (created ou update). Toutes les dates sont gérées par la librairie Carbon.

L'information du semestre n'est pas redondante avec l'infirmation de l'étudiant, car les données sont sauvegardée sur la durée complète de la scolarité de l'étudiant. Ajouter le semestre permet d'optimiser les requêtes avec la gestion des matières provenant de sources multiples.

Les "matières" peuvent être des matières, des ressources ou des SAE. Elles sont liées par deux critères, la source (type_matiere) et l'id (id_matiere). Les Managers se chargent de faire les liens entre les entités et les DTO.

La liste des tables ci-dessous est classée selon les grandes thématiques. Il peut bien sûr exister des liaisons entre tables de différents regroupements.

Il est possible d'avoir une représentation graphique avec le logiciel [DataGrip de Jetbrains](https://www.jetbrains.com/fr-fr/datagrip/).

## Les tables "structurelles"

## Les données des "étudiants"

### Structure de la table absence

#### Description

Table contenant les absences des étudiants. Liaison avec la matière (via id et type), et avec le semestre (pour l'historique).

#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
|---|---|---|---
| **id** | int(11) | Non | 
| personnel\_id | int(11) | Oui | NULL 
| etudiant\_id | int(11) | Oui | NULL 
| annee\_universitaire\_id | int(11) | Oui | NULL 
| created | datetime | Non | 
| updated | datetime | Non | 
| uuid | binary(16) | Non | 
| duree | datetime(6) | Oui | NULL 
| justifie | tinyint(1) | Non | 
| date\_justifie | datetime(6) | Oui | NULL 
| dateHeure | datetime(6) | Oui | NULL 
| type\_matiere | varchar(15) | Oui | NULL 
| id\_matiere | int(11) | Non | 
| semestre\_id | int(11) | Oui | NULL


### Structure de la table absence\_etat\_appel

#### Description

Cette table est utilisée pour sauvegarder le fait que l'appel a été fait, et qu'il n'y ait pas d'absences saisies.

#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| personnel\_id | int(11) | Oui | NULL |
| groupe\_id | int(11) | Oui | NULL |
| date | datetime(6) | Non | |
| heure | datetime(6) | Non | |
| type\_saisie | varchar(10) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| type\_matiere | varchar(15) | Oui | NULL |
| id\_matiere | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |

### Structure de la table absence\_justificatif

#### Description

Pour gérer les justificatifs d'absences déposés par les étudiants ou ajoutés par les assistant(e)s.

#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| etudiant\_id | int(11) | Oui | NULL |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| uuid | binary(16) | Non | |
| motif | longtext | Non | |
| etat | varchar(1) | Non | |
| fichier\_name | varchar(50) | Oui | NULL |
| date\_heure\_debut | datetime(6) | Non | |
| date\_heure\_fin | datetime(6) | Non | |
| semestre\_id | int(11) | Oui | NULL |

## Tables pour les informations, dates, ...

### Structure de la table actualite

#### Description

#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| departement\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| titre | varchar(150) | Non | |
| texte | longtext | Non | |

### Structure de la table article

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| personnel\_id | int(11) | Oui | NULL |
| categorie\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| titre | varchar(255) | Non | |
| texte | longtext | Non | |
| slug | varchar(255) | Non | |
| type\_destinataire | varchar(5) | Non | |

### Structure de la table ArticleLike

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| article\_id | int(11) | Oui | NULL |
| personnel\_id | int(11) | Oui | NULL |
| etudiant\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| type | varchar(255) | Non | |

### Structure de la table article\_categorie

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| departement\_id | int(11) | Oui | NULL |
| libelle | varchar(255) | Non | |

### Structure de la table article\_etudiant

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **article\_id** _ | int(11) | Non | |
| _ **etudiant\_id** _ | int(11) | Non | |

### Structure de la table article\_semestre

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **article\_id** _ | int(11) | Non | |
| _ **semestre\_id** _ | int(11) | Non | |




### Structure de la table adresse

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| adresse1 | varchar(255) | Oui | NULL |
| adresse2 | varchar(255) | Oui | NULL |
| adresse3 | varchar(255) | Oui | NULL |
| code\_postal | varchar(10) | Oui | NULL |
| ville | varchar(100) | Oui | NULL |
| pays | varchar(100) | Oui | NULL |

## Alternance et suivi d'alternance

### Structure de la table alternance

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| **entreprise\_id** | int(11) | Oui | NULL |
| **tuteur\_id** | int(11) | Oui | NULL |
| etudiant\_id | int(11) | Oui | NULL |
| tuteur\_universitaire\_id | int(11) | Oui | NULL |
| annee\_id | int(11) | Oui | NULL |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| type\_contrat | varchar(20) | Non | |
| etat | varchar(10) | Non | |
| date\_debut | date | Oui | NULL |
| date\_fin | date | Oui | NULL |
| **adresse\_alternance\_id** | int(11) | Oui | NULL |
| sujet | longtext | Oui | NULL |

### Structure de la table alternance\_fiche\_suivi

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| alternance\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| methode | varchar(1) | Non | |
| commentaire | longtext | Non | |
| missions | longtext | Non | |
| integration | int(11) | Non | |
| initiative | int(11) | Non | |
| adaptation | int(11) | Non | |
| performance | int(11) | Non | |
| delais | int(11) | Non | |
| comportement | int(11) | Non | |
| date | date | Non | |

## Structure du diplôme

### Structure de la table annee

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| diplome\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |
| ordre | int(11) | Non | |
| libelle\_long | varchar(150) | Oui | NULL |
| opt\_alternance | tinyint(1) | Non | |
| actif | tinyint(1) | Non | |
| couleur | varchar(30) | Non | |
| code\_etape | varchar(20) | Non | |
| code\_version | varchar(10) | Non | |

### Structure de la table annee\_universitaire

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(30) | Non | |
| annee | int(11) | Non | |
| commentaire | longtext | Oui | NULL |
| active | tinyint(1) | Non | |

### Structure de la table apc\_apprentissage\_critique

#### Description

#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| niveau\_id | int(11) | Oui | NULL |
| libelle | varchar(255) | Non | |
| code | varchar(20) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |

## APC et référentiel de compétences

### Structure de la table apc\_competence

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| diplome\_id | int(11) | Oui | NULL |
| libelle | varchar(255) | Non | |
| nom\_court | varchar(50) | Non | |
| couleur | varchar(20) | Non | |

### Structure de la table apc\_composante\_essentielle

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| competence\_id | int(11) | Oui | NULL |
| libelle | varchar(255) | Non | |

### Structure de la table apc\_niveau

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| competence\_id | int(11) | Oui | NULL |
| annee\_id | int(11) | Oui | NULL |
| libelle | varchar(255) | Non | |
| ordre | int(11) | Non | |

### Structure de la table apc\_parcours

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| diplome\_id | int(11) | Oui | NULL |
| libelle | varchar(255) | Non | |
| code | varchar(10) | Non | |
| actif | tinyint(1) | Non | |
| code\_diplome | varchar(20) | Oui | NULL |
| code\_version | varchar(10) | Oui | NULL |
| code\_departement | varchar(10) | Oui | NULL |

### Structure de la table apc\_parcours\_niveau

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| niveau\_id | int(11) | Oui | NULL |
| parcours\_id | int(11) | Oui | NULL |

### Structure de la table apc\_ressource

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| libelle | varchar(255) | Non | |
| pre\_requis | longtext | Oui | NULL |
| description | longtext | Oui | NULL |
| mots\_cles | longtext | Oui | NULL |
| code\_matiere | varchar(20) | Oui | NULL |
| suspendu | tinyint(1) | Non | |
| heures\_sae | double | Oui | NULL |
| heures\_saeptut | double | Oui | NULL |
| cm\_ppn | double | Non | |
| td\_ppn | double | Non | |
| tp\_ppn | double | Non | |
| cm\_formation | double | Non | |
| td\_formation | double | Non | |
| tp\_formation | double | Non | |
| commentaire | longtext | Oui | NULL |
| nb\_notes | int(11) | Non | |
| code\_element | varchar(20) | Oui | NULL |
| libelle\_court | varchar(25) | Oui | NULL |

### Structure de la table apc\_ressource\_apprentissage\_critique

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| ressource\_id | int(11) | Oui | NULL |
| apprentissage\_critique\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |

### Structure de la table apc\_ressource\_competence

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| ressource\_id | int(11) | Oui | NULL |
| competence\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| coefficient | double | Non | |

### Structure de la table apc\_sae

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| libelle | varchar(255) | Non | |
| description | longtext | Oui | NULL |
| livrables | longtext | Oui | NULL |
| code\_matiere | varchar(20) | Non | |
| exemples | longtext | Oui | NULL |
| cm\_ppn | double | Non | |
| td\_ppn | double | Non | |
| tp\_ppn | double | Non | |
| cm\_formation | double | Non | |
| td\_formation | double | Non | |
| tp\_formation | double | Non | |
| commentaire | longtext | Oui | NULL |
| nb\_notes | int(11) | Non | |
| code\_element | varchar(20) | Non | |
| suspendu | tinyint(1) | Non | |
| projet\_ppn | double | Non | |
| projet\_formation | double | Non | |
| libelle\_court | varchar(25) | Oui | NULL |

### Structure de la table apc\_sae\_apprentissage\_critique

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| sae\_id | int(11) | Oui | NULL |
| apprentissage\_critique\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |

### Structure de la table apc\_sae\_competence

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| sae\_id | int(11) | Oui | NULL |
| competence\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| coefficient | double | Non | |

### Structure de la table apc\_sae\_ressource

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| sae\_id | int(11) | Oui | NULL |
| ressource\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |

### Structure de la table apc\_situation\_professionnelle

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| competence\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| libelle | longtext | Non | |


### Structure de la table bac

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(30) | Non | |
| libelle\_long | varchar(255) | Non | |
| code\_apogee | varchar(10) | Oui | NULL |
| type\_bac | varchar(1) | Oui | NULL |

## Tables Bon de commances

### Structure de la table bccentre\_financier

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| libelle | varchar(100) | Non | |
| code | varchar(15) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |

### Structure de la table bcdemande

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| responsable\_id | int(11) | Oui | NULL |
| service | varchar(100) | Oui | NULL |
| prestation | varchar(20) | Non | |
| texte\_info\_complementaire | varchar(255) | Oui | NULL |
| description | longtext | Non | |
| montant\_ttc | double | Oui | NULL |
| montant\_ht | double | Oui | NULL |
| date\_validation\_responsable | datetime(6) | Oui | NULL |
| avis\_direction | varchar(20) | Oui | NULL |
| commande\_marche | tinyint(1) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| departement\_id | int(11) | Oui | NULL |
| fournisseur\_id | int(11) | Oui | NULL |
| signataire\_compta\_id | int(11) | Oui | NULL |
| objet | varchar(255) | Non | |
| date\_demande\_initiale | datetime(6) | Non | |
| date\_validation\_direction | datetime(6) | Oui | NULL |
| date\_verification\_compta | datetime(6) | Oui | NULL |
| date\_validation\_csa | datetime(6) | Oui | NULL |
| date\_cloture\_service\_fait\_csa | datetime(6) | Oui | NULL |
| date\_livraison\_estimee | datetime(6) | Oui | NULL |
| numero\_bc | varchar(20) | Non | |
| etat\_process | varchar(30) | Non | |

### Structure de la table bcfournisseur

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| libelle | varchar(100) | Non | |
| numero | varchar(10) | Non | |

### Structure de la table bcmigo

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| demande\_id | int(11) | Oui | NULL |
| signataire\_id | int(11) | Oui | NULL |
| numero | varchar(20) | Non | |
| blattache | tinyint(1) | Non | |
| date\_signature | datetime(6) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |

### Structure de la table bcservice\_fait

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| receptionniste\_migo\_id | int(11) | Oui | NULL |
| responsable\_signataire\_id | int(11) | Oui | NULL |
| b\_cdemande\_id | int(11) | Oui | NULL |
| qualite\_receptionniste | varchar(100) | Oui | NULL |
| reception\_complete | tinyint(1) | Non | |
| prestation\_complete | tinyint(1) | Non | |
| reception\_partielle | tinyint(1) | Non | |
| montant\_ttcrecu | double | Non | |
| description\_recue | longtext | Oui | NULL |
| numero\_migo | varchar(20) | Non | |
| bon\_livraison\_sifac | tinyint(1) | Non | |
| date\_reception\_livraison | datetime(6) | Oui | NULL |
| date\_signature\_responsable | datetime(6) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |

### Structure de la table borne

### Description
### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| icone | varchar(40) | Non | |
| couleur | varchar(20) | Non | |
| message | longtext | Non | |
| url | varchar(255) | Oui | NULL |
| date\_debut\_publication | datetime | Non | |
| date\_fin\_publication | datetime | Non | |
| visible | tinyint(1) | Non | |

### Structure de la table borne\_semestre

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **borne\_id** _ | int(11) | Non | |
| _ **semestre\_id** _ | int(11) | Non | |

### Structure de la table calendrier

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| semaine\_formation | int(11) | Non | |
| semaine\_reelle | int(11) | Non | |
| date\_lundi | datetime(6) | Non | |

### Structure de la table celcat\_event

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| event\_id | int(11) | Non | |
| jour | int(11) | Non | |
| debut | datetime | Non | |
| fin | datetime | Non | |
| semaine\_formation | int(11) | Non | |
| type | varchar(20) | Non | |
| code\_module | varchar(20) | Non | |
| lib\_module | varchar(255) | Non | |
| code\_personnel | varchar(20) | Non | |
| lib\_personnel | varchar(255) | Non | |
| departement\_id | int(11) | Non | |
| code\_salle | varchar(20) | Non | |
| lib\_salle | varchar(255) | Non | |
| code\_groupe | varchar(30) | Non | |
| lib\_groupe | varchar(30) | Non | |
| update\_event | datetime | Non | |
| semestre\_id | int(11) | Oui | NULL |
| date\_cours | datetime(6) | Oui | NULL |

### Structure de la table code\_insee

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| code\_insee | varchar(6) | Non | |
| code\_postal | varchar(60) | Non | |
| ville | varchar(255) | Non | |

### Structure de la table commentaire

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| etudiant\_id | int(11) | Oui | NULL |
| texte | longtext | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |

### Structure de la table configuration

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| cle | varchar(50) | Non | |
| valeur | varchar(255) | Non | |
| type | varchar(1) | Non | |

### Structure de la table contact

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| nom | varchar(50) | Oui | NULL |
| prenom | varchar(50) | Oui | NULL |
| fonction | varchar(255) | Oui | NULL |
| telephone | varchar(25) | Oui | NULL |
| email | varchar(255) | Oui | NULL |
| portable | varchar(25) | Oui | NULL |
| civilite | varchar(3) | Non | |
| fax | varchar(25) | Oui | NULL |

### Structure de la table courrier

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| texte | longtext | Non | |

## Gestion COVID

### Structure de la table covid\_attestation\_etudiant

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| diplome\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| motif | varchar(10) | Oui | NULL |
| salles | varchar(150) | Oui | NULL |
| date\_presence | date | Oui | NULL |
| heure | varchar(2) | Non | |
| convocation\_envoyee | tinyint(1) | Non | |
| date\_envoi | datetime(6) | Oui | NULL |
| date\_debut | date | Oui | NULL |
| date\_fin | date | Oui | NULL |

### Structure de la table covid\_attestation\_etudiant\_groupe

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **covid\_attestation\_etudiant\_id** _ | int(11) | Non | |
| _ **groupe\_id** _ | int(11) | Non | |

### Structure de la table covid\_attestation\_etudiant\_matiere

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **covid\_attestation\_etudiant\_id** _ | int(11) | Non | |
| _ **matiere\_id** _ | int(11) | Non | |

### Structure de la table covid\_attestation\_personnel

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| personnel\_id | int(11) | Oui | NULL |
| diplome\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| moyen\_deplacement | varchar(150) | Non | |
| motif | varchar(20) | Non | |
| validation\_departement | tinyint(1) | Oui | NULL |
| date\_validation\_departement | datetime(6) | Oui | NULL |
| validation\_direction | tinyint(1) | Oui | NULL |
| date\_validation\_direction | datetime(6) | Oui | NULL |
| motif\_refus | varchar(255) | Oui | NULL |

### Structure de la table covid\_creneau\_presence

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| attestation\_id | int(11) | Oui | NULL |
| date | date | Non | |
| heure\_arrivee | datetime(6) | Non | |
| heure\_depart | datetime(6) | Non | |


### Structure de la table date

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| departement\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |
| texte | longtext | Oui | NULL |
| date\_debut | datetime(6) | Oui | NULL |
| heure\_debut | datetime(6) | Oui | NULL |
| date\_fin | datetime(6) | Oui | NULL |
| heure\_fin | datetime(6) | Oui | NULL |
| lieu | varchar(150) | Non | |
| allday | tinyint(1) | Non | |
| qui | varchar(1) | Non | |
| type | varchar(30) | Non | |

### Structure de la table date\_semestre

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **date\_id** _ | int(11) | Non | |
| _ **semestre\_id** _ | int(11) | Non | |

## Structure de la table departement

### Description
### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| ufr\_id | int(11) | Oui | NULL |
| respri\_id | int(11) | Oui | NULL |
| annee\_universitaire\_prepare\_id | int(11) | Oui | NULL |
| resp\_materiel\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| uuid | binary(16) | Non | |
| libelle | varchar(255) | Non | |
| logo\_name | varchar(50) | Non | |
| tel\_contact | varchar(16) | Oui | NULL |
| fax | varchar(16) | Oui | NULL |
| couleur | varchar(16) | Oui | NULL |
| site\_web | varchar(255) | Oui | NULL |
| description | longtext | Oui | NULL |
| opt\_update\_celcat | tinyint(1) | Non | |
| opt\_agence | tinyint(1) | Non | |
| opt\_materiel | tinyint(1) | Non | |
| opt\_edt | tinyint(1) | Non | |
| opt\_stage | tinyint(1) | Non | |
| opt\_synthese | tinyint(1) | Non | |
| opt\_messagerie | tinyint(1) | Non | |
| opt\_annee\_previsionnel | int(11) | Non | |
| actif | tinyint(1) | Non | |
| preparation\_annee | tinyint(1) | Non | |

### Structure de la table diplome

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| responsable\_diplome\_id | int(11) | Oui | NULL |
| assistant\_diplome\_id | int(11) | Oui | NULL |
| type\_diplome\_id | int(11) | Oui | NULL |
| departement\_id | int(11) | Oui | NULL |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |
| opt\_nb\_jours\_saisie | int(11) | Non | |
| opt\_dilpome\_decale | tinyint(1) | Non | |
| opt\_suppr\_absence | tinyint(1) | Non | |
| opt\_methode\_calcul | varchar(10) | Non | |
| opt\_anonymat | tinyint(1) | Non | |
| opt\_commentaires\_releve | tinyint(1) | Non | |
| opt\_espace\_perso\_visible | tinyint(1) | Non | |
| volume\_horaire | int(11) | Non | |
| code\_celcat\_departement | int(11) | Non | |
| sigle | varchar(40) | Non | |
| actif | tinyint(1) | Non | |
| opt\_semaines\_visibles | int(11) | Non | |
| code\_version | varchar(10) | Oui | NULL |
| code\_departement | varchar(10) | Oui | NULL |
| code\_diplome | varchar(20) | Oui | NULL |
| opt\_responsable\_qualite\_id | int(11) | Oui | NULL |
| opt\_certifie\_qualite | tinyint(1) | Non | |

### Structure de la table document

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| type\_document\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| uuid | binary(16) | Non | |
| taille | double | Non | |
| type\_fichier | varchar(100) | Non | |
| description | longtext | Oui | NULL |
| libelle | varchar(100) | Non | |
| document\_name | varchar(50) | Non | |
| type\_destinataire | varchar(5) | Non | |

### Structure de la table DocumentFavori

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| document\_id | int(11) | Oui | NULL |
| personnel\_id | int(11) | Oui | NULL |
| etudiant\_id | int(11) | Oui | NULL |
| created | datetime(6) | Oui | NULL |
| updated | datetime(6) | Oui | NULL |
| type | varchar(255) | Non | |

### Structure de la table document\_semestre

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **document\_id** _ | int(11) | Non | |
| _ **semestre\_id** _ | int(11) | Non | |

### Structure de la table edt\_planning

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| intervenant\_id | int(11) | Oui | NULL |
| jour | int(11) | Non | |
| salle | varchar(30) | Non | |
| ordre | varchar(20) | Non | |
| debut | int(11) | Non | |
| fin | int(11) | Non | |
| semaine | int(11) | Non | |
| evaluation | tinyint(1) | Non | |
| texte | varchar(150) | Oui | NULL |
| groupe | int(11) | Non | |
| type | varchar(10) | Non | |
| commentaire | varchar(255) | Oui | NULL |
| date | datetime(6) | Oui | NULL |
| type\_matiere | varchar(15) | Oui | NULL |
| id\_matiere | int(11) | Non | |

### Structure de la table Emprunt

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| departement\_id | int(11) | Oui | NULL |
| personnel\_id | int(11) | Oui | NULL |
| etudiant\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| uuid | binary(16) | Non | |
| date\_debut | datetime | Non | |
| date\_fin | datetime | Non | |
| motif | varchar(255) | Non | |
| description | varchar(255) | Non | |
| telephone | varchar(20) | Non | |
| etat | varchar(10) | Non | |
| date\_sortie | datetime(6) | Oui | NULL |
| date\_retour | datetime(6) | Oui | NULL |
| date\_validation | datetime(6) | Oui | NULL |
| type | varchar(255) | Non | |

### Structure de la table emprunt\_materiel

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| emprunt\_id | int(11) | Oui | NULL |
| materiel\_id | int(11) | Oui | NULL |
| etat | varchar(5) | Non | |
| datesortie | datetime(6) | Oui | NULL |
| daterentree | datetime(6) | Oui | NULL |

### Structure de la table entreprise

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| **adresse\_id** | int(11) | Oui | NULL |
| **responsable\_id** | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| siret | varchar(30) | Oui | NULL |
| raison\_sociale | varchar(255) | Non | |

### Structure de la table etudiant

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| **adresse\_id** | int(11) | Oui | NULL |
| semestre\_id | int(11) | Oui | NULL |
| **adresse\_parentale\_id** | int(11) | Oui | NULL |
| bac\_id | int(11) | Oui | NULL |
| roles | longtext | Non | |
| created | datetime | Non | |
| uuid | binary(16) | Non | |
| photo\_name | varchar(50) | Non | |
| num\_etudiant | varchar(20) | Non | |
| num\_ine | varchar(20) | Oui | NULL |
| annee\_bac | int(11) | Oui | NULL |
| boursier | tinyint(1) | Non | |
| demandeur\_emploi | tinyint(1) | Non | |
| deleted | tinyint(1) | Non | |
| amenagements\_particuliers | longtext | Oui | NULL |
| promotion | int(11) | Non | |
| intitule\_securite\_sociale | varchar(255) | Oui | NULL |
| adresse\_securite\_sociale | varchar(255) | Oui | NULL |
| annee\_sortie | int(11) | Non | |
| username | varchar(75) | Non | |
| password | varchar(255) | Oui | NULL |
| **slug** | varchar(255) | Non | |
| type\_user | varchar(75) | Non | |
| nom | varchar(75) | Non | |
| prenom | varchar(75) | Non | |
| **mail\_univ** | varchar(255) | Non | |
| site\_univ | varchar(255) | Oui | NULL |
| mail\_perso | varchar(255) | Oui | NULL |
| site\_perso | varchar(255) | Oui | NULL |
| civilite | varchar(3) | Non | M. |
| date\_naissance | date | Oui | NULL |
| tel1 | varchar(20) | Oui | NULL |
| tel2 | varchar(20) | Oui | NULL |
| remarque | longtext | Oui | NULL |
| signature | longtext | Oui | NULL |
| visible | tinyint(1) | Non | |
| updated | datetime | Non | |
| reset\_token | varchar(255) | Oui | NULL |
| departement\_id | int(11) | Oui | NULL |
| login\_specifique | varchar(50) | Oui | NULL |
| formation\_continue | tinyint(1) | Non | |
| lieu\_naissance | varchar(150) | Oui | NULL |

### Structure de la table etudiant\_groupe

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **etudiant\_id** _ | int(11) | Non | |
| _ **groupe\_id** _ | int(11) | Non | |

### Structure de la table evaluation

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| personnel\_auteur\_id | int(11) | Oui | NULL |
| parent\_id | int(11) | Oui | NULL |
| type\_groupe\_id | int(11) | Oui | NULL |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| uuid | binary(16) | Non | |
| date\_evaluation | date | Non | |
| visible | tinyint(1) | Non | |
| modifiable | tinyint(1) | Non | |
| coefficient | double | Non | |
| commentaire | varchar(255) | Oui | NULL |
| libelle | varchar(100) | Oui | NULL |
| type\_matiere | varchar(15) | Oui | NULL |
| id\_matiere | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |

### Structure de la table evaluation\_personnel

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **evaluation\_id** _ | int(11) | Non | |
| _ **personnel\_id** _ | int(11) | Non | |

### Structure de la table favori

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| etudiant\_demandeur\_id | int(11) | Oui | NULL |
| etudiant\_demande\_id | int(11) | Oui | NULL |
| date\_ajout | datetime | Non | |

### Structure de la table fichier

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| libelle | varchar(255) | Non | |
| taille | double | Non | |

### Structure de la table groupe

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| type\_groupe\_id | int(11) | Oui | NULL |
| parent\_id | int(11) | Oui | NULL |
| libelle | varchar(50) | Non | |
| code\_apogee | varchar(50) | Oui | NULL |
| ordre | int(11) | Non | |
| parcours\_id | int(11) | Oui | NULL |

### Structure de la table hrs

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| diplome\_id | int(11) | Oui | NULL |
| personnel\_id | int(11) | Oui | NULL |
| type\_hrs\_id | int(11) | Oui | NULL |
| departement\_id | int(11) | Oui | NULL |
| nb\_heures\_td | double | Non | |
| libelle | varchar(150) | Non | |
| annee | int(11) | Non | |
| commentaire | varchar(255) | Oui | NULL |
| created | datetime(6) | Oui | NULL |
| updated | datetime(6) | Oui | NULL |

### Structure de la table materiel

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| type\_materiel\_id | int(11) | Oui | NULL |
| libelle | varchar(255) | Non | |
| description | longtext | Non | |
| photo\_name | varchar(50) | Oui | NULL |
| codebarre | varchar(50) | Oui | NULL |
| empruntable | tinyint(1) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |

### Structure de la table materiel\_commun

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| contact\_id | int(11) | Oui | NULL |
| designation | varchar(150) | Non | |
| description | longtext | Oui | NULL |
| photo\_name | varchar(50) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |

### Structure de la table materiel\_commun\_pret

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| personnel\_id | int(11) | Oui | NULL |
| materiel\_commun\_id | int(11) | Oui | NULL |
| date\_emprunt | datetime(6) | Non | |
| creneau | varchar(100) | Non | |

### Structure de la table materiel\_pret

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| departement\_id | int(11) | Oui | NULL |
| etudiant\_id | int(11) | Oui | NULL |
| personnel\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| date\_demande | datetime | Non | |
| date\_debut\_emprunt | datetime | Non | |
| date\_fin\_emprunt | datetime | Non | |
| date\_validation | datetime | Non | |
| etat\_demande | varchar(1) | Non | |
| motif | varchar(255) | Non | |
| telephone | varchar(15) | Non | |
| justification | varchar(255) | Non | |

### Structure de la table matiere

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| ue\_id | int(11) | Oui | NULL |
| ppn\_id | int(11) | Oui | NULL |
| parcours\_id | int(11) | Oui | NULL |
| matiere\_parent\_id | int(11) | Oui | NULL |
| libelle | varchar(255) | Non | |
| code\_matiere | varchar(20) | Oui | NULL |
| cm\_ppn | double | Non | |
| td\_ppn | double | Non | |
| tp\_ppn | double | Non | |
| cm\_formation | double | Non | |
| td\_formation | double | Non | |
| tp\_formation | double | Non | |
| commentaire | longtext | Oui | NULL |
| nb\_notes | int(11) | Non | |
| coefficient | double | Non | |
| pac | tinyint(1) | Non | |
| nb\_ects | double | Non | |
| objectifs\_module | longtext | Oui | NULL |
| competences\_visees | longtext | Oui | NULL |
| contenu | longtext | Oui | NULL |
| pre\_requis | longtext | Oui | NULL |
| modalites | longtext | Oui | NULL |
| prolongements | longtext | Oui | NULL |
| mots\_cles | longtext | Oui | NULL |
| suspendu | tinyint(1) | Non | |
| code\_element | varchar(20) | Oui | NULL |
| description | longtext | Oui | NULL |
| libelle\_court | varchar(25) | Oui | NULL |

### Structure de la table message

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| expediteur\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| sujet | varchar(255) | Non | |
| message | longtext | Non | |
| important | tinyint(1) | Non | |
| etat | varchar(1) | Non | |
| type\_destinataires | varchar(255) | Non | |
| type | varchar(1) | Non | |

### Structure de la table message\_destinataire

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| message\_id | int(11) | Oui | NULL |
| personnel\_id | int(11) | Oui | NULL |
| etudiant\_id | int(11) | Oui | NULL |
| created | datetime(6) | Oui | NULL |
| updated | datetime(6) | Oui | NULL |
| date\_lu | datetime(6) | Oui | NULL |
| etat | varchar(1) | Non | |
| starred | tinyint(1) | Non | |
| typeDestinataire | varchar(255) | Non | |

### Structure de la table message\_piece\_jointe

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| message\_id | int(11) | Oui | NULL |
| fichier | varchar(50) | Non | |
| extension | varchar(5) | Non | |

### Structure de la table messenger\_messages

#### Description

Table utilisée par Symfony pour la gestion des files pour les messages des workers (RabbitMq)'

#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | bigint(20) | Non | |
| body | longtext | Non | |
| headers | longtext | Non | |
| queue\_name | varchar(190) | Non | |
| created\_at | datetime(6) | Non | |
| available\_at | datetime(6) | Non | |
| delivered\_at | datetime(6) | Oui | NULL |

### Structure de la table modification\_note

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| note\_id | int(11) | Oui | NULL |
| personnel\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| ancienne\_note | double | Non | |
| nouvelle\_note | double | Non | |

### Structure de la table note

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| evaluation\_id | int(11) | Oui | NULL |
| etudiant\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| uuid | binary(16) | Non | |
| note | double | Non | |
| commentaire | varchar(255) | Oui | NULL |
| absence\_justifie | tinyint(1) | Non | |

### Structure de la table notification

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| etudiant\_id | int(11) | Oui | NULL |
| personnel\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| type | varchar(100) | Non | |
| url | varchar(255) | Non | |
| lu | tinyint(1) | Non | |
| type\_user | varchar(1) | Non | |
| uuid | binary(16) | Non | |

### Structure de la table parcour

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |
| code\_element | varchar(20) | Non | |

### Structure de la table personnel

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| **adresse\_id** | int(11) | Oui | NULL |
| roles | longtext | Non | |
| created | datetime | Non | |
| statut | varchar(15) | Non | |
| poste\_interne | varchar(10) | Oui | NULL |
| tel\_bureau | varchar(20) | Oui | NULL |
| responsabilites | longtext | Oui | NULL |
| domaines | longtext | Oui | NULL |
| entreprise | varchar(255) | Oui | NULL |
| bureau1 | varchar(20) | Oui | NULL |
| bureau2 | varchar(20) | Oui | NULL |
| numero\_harpege | int(11) | Oui | NULL |
| initiales | varchar(10) | Oui | NULL |
| cv\_name | varchar(50) | Oui | NULL |
| photo\_name | varchar(50) | Non | |
| nb\_heures\_service | double | Non | |
| deleted | tinyint(1) | Non | |
| couleur | varchar(20) | Oui | NULL |
| username | varchar(75) | Non | |
| password | varchar(255) | Oui | NULL |
| **slug** | varchar(255) | Non | |
| type\_user | varchar(75) | Non | |
| nom | varchar(75) | Non | |
| prenom | varchar(75) | Non | |
| **mail\_univ** | varchar(255) | Non | |
| site\_univ | varchar(255) | Oui | NULL |
| mail\_perso | varchar(255) | Oui | NULL |
| site\_perso | varchar(255) | Oui | NULL |
| civilite | varchar(3) | Non | M. |
| date\_naissance | date | Oui | NULL |
| tel1 | varchar(20) | Oui | NULL |
| tel2 | varchar(20) | Oui | NULL |
| remarque | longtext | Oui | NULL |
| signature | longtext | Oui | NULL |
| visible | tinyint(1) | Non | |
| updated | datetime | Non | |
| reset\_token | varchar(255) | Oui | NULL |
| signature\_electronique | varchar(50) | Oui | NULL |
| lieu\_naissance | varchar(150) | Oui | NULL |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| configuration | longtext | Oui | NULL |

### Structure de la table personnel\_departement

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| personnel\_id | int(11) | Oui | NULL |
| departement\_id | int(11) | Oui | NULL |
| annee | int(11) | Non | |
| roles | varchar(250) | Non | |
| defaut | tinyint(1) | Non | |

### Structure de la table ppn

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| diplome\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |
| annee | int(11) | Non | |

### Structure de la table previsionnel

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| personnel\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| annee | int(11) | Non | |
| referent | tinyint(1) | Non | |
| nb\_hcm | double | Non | |
| nb\_htd | double | Non | |
| nb\_htp | double | Non | |
| nb\_gr\_cm | int(11) | Non | |
| nb\_gr\_td | int(11) | Non | |
| nb\_gr\_tp | int(11) | Non | |
| type\_matiere | varchar(15) | Oui | NULL |
| id\_matiere | int(11) | Non | |

## Gestion des périodes de projet

### Structure de la table projet\_etudiant

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| projet\_periode\_id | int(11) | Oui | NULL |
| organisme\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| temp\_complet | tinyint(1) | Non | |
| duree | double | Non | |
| unite\_duree | varchar(10) | Non | |
| sujet | varchar(255) | Oui | NULL |
| activites\_confiees | longtext | Oui | NULL |
| etat\_projet | varchar(30) | Non | |
| date\_autorise | datetime(6) | Oui | NULL |
| date\_depose | datetime(6) | Oui | NULL |
| date\_validation | datetime(6) | Oui | NULL |
| date\_imprime | datetime(6) | Oui | NULL |
| uuid | binary(16) | Non | |

### Structure de la table projet\_etudiant\_etudiant

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **projet\_etudiant\_id** _ | int(11) | Non | |
| _ **etudiant\_id** _ | int(11) | Non | |

### Structure de la table projet\_periode

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| libelle | varchar(100) | Non | |
| date\_debut | date | Non | |
| date\_fin | date | Non | |
| uuid | binary(16) | Non | |
| texte\_libre | longtext | Oui | NULL |

### Structure de la table projet\_periode\_personnel

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **projet\_periode\_id** _ | int(11) | Non | |
| _ **personnel\_id** _ | int(11) | Non | |

## gestion des questionnaires (quizz ou qualité)

### Structure de la table questionnaire\_etudiant

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| etudiant\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| termine | tinyint(1) | Non | |
| date\_termine | datetime(6) | Oui | NULL |
| questionnaire\_qualite\_id | int(11) | Oui | NULL |
| questionnaire\_quizz\_id | int(11) | Oui | NULL |

### Structure de la table questionnaire\_etudiant\_reponse

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| questionnaire\_etudiant\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| valeur | longtext | Oui | NULL |
| cle\_reponse | longtext | Oui | NULL |
| cle\_question | varchar(100) | Non | |

### Structure de la table questionnaire\_qualite

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| libelle | varchar(255) | Non | |
| date\_ouverture | datetime(6) | Non | |
| date\_fermeture | datetime(6) | Non | |
| titre | varchar(150) | Non | |
| texte\_explication | longtext | Oui | NULL |
| texte\_debut | longtext | Oui | NULL |
| text\_fin | longtext | Oui | NULL |
| uuid | binary(16) | Non | |

### Structure de la table questionnaire\_question

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| auteur\_id | int(11) | Oui | NULL |
| question\_parent\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| libelle | varchar(255) | Non | |
| help | varchar(255) | Oui | NULL |
| type | varchar(10) | Non | |
| obligatoire | tinyint(1) | Non | |
| alignement | varchar(30) | Non | |
| parametre | varchar(255) | Oui | NULL |

### Structure de la table questionnaire\_questionnaire\_section

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| questionnaire\_qualite\_id | int(11) | Oui | NULL |
| questionnaire\_quizz\_id | int(11) | Oui | NULL |
| section\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| ordre | int(11) | Non | |
| config | varchar(255) | Oui | NULL |

### Structure de la table questionnaire\_quizz

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| libelle | varchar(255) | Non | |
| date\_ouverture | datetime(6) | Non | |
| date\_fermeture | datetime(6) | Non | |
| titre | varchar(150) | Non | |
| texte\_explication | longtext | Oui | NULL |
| texte\_debut | longtext | Oui | NULL |
| text\_fin | longtext | Oui | NULL |
| uuid | binary(16) | Non | |

### Structure de la table questionnaire\_reponse

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| question\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| libelle | varchar(255) | Non | |
| valeur | varchar(255) | Non | |
| ordre | int(11) | Non | |
| alignement | varchar(30) | Non | |

### Structure de la table questionnaire\_section

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| titre | varchar(255) | Non | |
| text\_explicatif | longtext | Oui | NULL |
| config | varchar(255) | Oui | NULL |
| type\_calcul | varchar(10) | Oui | NULL |

### Structure de la table questionnaire\_section\_question

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| section\_id | int(11) | Oui | NULL |
| question\_id | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| ordre | int(11) | Non | |

### Structure de la table quizz\_etudiant

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| etudiant\_id | int(11) | Oui | NULL |
| questionnaire\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| termine | tinyint(1) | Non | |
| date\_termine | datetime(6) | Oui | NULL |

### Structure de la table quizz\_etudiant\_reponse

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| valeur | longtext | Oui | NULL |
| cle\_reponse | longtext | Oui | NULL |
| cle\_question | varchar(100) | Non | |
| quizz\_etudiant\_id | int(11) | Oui | NULL |

### Structure de la table rattrapage

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| etudiant\_id | int(11) | Oui | NULL |
| personnel\_id | int(11) | Oui | NULL |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| uuid | binary(16) | Non | |
| date\_eval | date | Oui | NULL |
| heure\_eval | datetime(6) | Oui | NULL |
| duree | varchar(20) | Oui | NULL |
| date\_rattrapage | date | Oui | NULL |
| heure\_rattrapage | datetime(6) | Oui | NULL |
| salle | varchar(10) | Oui | NULL |
| etat\_demande | varchar(1) | Non | |
| type\_matiere | varchar(15) | Oui | NULL |
| id\_matiere | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |

### Structure de la table rdd\_diplome

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| num\_etudiant | varchar(10) | Non | |
| ine | varchar(15) | Non | |
| mailperso | varchar(255) | Oui | NULL |
| diplome | varchar(20) | Non | |
| libelle\_diplome | varchar(255) | Non | |
| date\_naissance | date | Non | |
| confirme | tinyint(1) | Non | |
| enquete\_afaire | tinyint(1) | Non | |
| code\_etape | varchar(30) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |

### Structure de la table rdd\_diplome\_copie

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| num\_etudiant | varchar(10) | Non | |
| ine | varchar(15) | Non | |
| mailperso | varchar(255) | Oui | NULL |
| diplome | varchar(20) | Non | |
| libelle\_diplome | varchar(255) | Non | |
| date\_naissance | date | Non | |
| confirme | tinyint(1) | Non | |
| enquete\_afaire | tinyint(1) | Non | |
| code\_etape | varchar(30) | Oui | NULL |

### Structure de la table salle\_examen

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| salle\_id | int(11) | Oui | NULL |
| departement\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| nb\_colonnes | int(11) | Non | |
| nb\_rangs | int(11) | Non | |
| capacite | int(11) | Non | |
| places\_interdites | varchar(255) | Oui | NULL |

### Structure de la table scolarite

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| etudiant\_id | int(11) | Oui | NULL |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| uuid | binary(16) | Non | |
| ordre | int(11) | Oui | NULL |
| decision | varchar(10) | Non | |
| proposition | varchar(10) | Oui | NULL |
| moyenne | double | Non | |
| nb\_absences | int(11) | Non | |
| commentaire | longtext | Oui | NULL |
| scolarite\_promo\_id | int(11) | Oui | NULL |
| diffuse | tinyint(1) | Non | |
| moyennes\_matieres | longtext | Oui | NULL |
| moyennes\_ues | longtext | Oui | NULL |
| rang | int(11) | Non | |

### Structure de la table scolarite\_promo

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| min | double | Non | |
| max | double | Non | |
| nb\_etudiants | int(11) | Non | |
| moyenne | double | Non | |
| date\_publication | datetime(6) | Oui | NULL |
| publie | tinyint(1) | Non | |
| moyenne\_ues | longtext | Non | |
| moyenne\_matieres | longtext | Non | |

### Structure de la table semestre

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| precedent\_id | int(11) | Oui | NULL |
| suivant\_id | int(11) | Oui | NULL |
| decale\_id | int(11) | Oui | NULL |
| opt\_dest\_mail\_releve\_id | int(11) | Oui | NULL |
| opt\_dest\_mail\_modif\_note\_id | int(11) | Oui | NULL |
| opt\_dest\_mail\_absence\_resp\_id | int(11) | Oui | NULL |
| annee\_id | int(11) | Oui | NULL |
| ppn\_actif\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |
| couleur | varchar(20) | Oui | NULL |
| ordre\_annee | int(11) | Non | |
| ordre\_lmd | int(11) | Non | |
| actif | tinyint(1) | Non | |
| nb\_groupes\_cm | int(11) | Non | |
| nb\_groupes\_td | int(11) | Non | |
| nb\_groupes\_tp | int(11) | Non | |
| opt\_mail\_releve | tinyint(1) | Non | |
| opt\_mail\_modification\_note | tinyint(1) | Non | |
| opt\_evaluation\_visible | tinyint(1) | Non | |
| opt\_evaluation\_modifiable | tinyint(1) | Non | |
| opt\_penalite\_absence | tinyint(1) | Non | |
| opt\_mail\_absence\_resp | tinyint(1) | Non | |
| opt\_mail\_absence\_etudiant | tinyint(1) | Non | |
| opt\_point\_penalite\_absence | double | Non | |
| mois\_debut | int(11) | Non | |
| code\_element | varchar(20) | Non | |
| opt\_evaluation\_pre\_initialisee | tinyint(1) | Non | |
| opt\_nb\_jours\_saisie\_absence | int(11) | Non | |

### Structure de la table site

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| **adresse\_id** | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |

## Gestion des périodes de stage

### Structure de la table stage\_avenant

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| stage\_etudiant\_id | int(11) | Oui | NULL |
| **nouvelle\_adresse\_id** | int(11) | Oui | NULL |
| created | datetime(6) | Non | |
| updated | datetime(6) | Non | |
| cas | int(11) | Non | |
| nouvelle\_date\_fin | date | Oui | NULL |
| nouvelle\_duree\_jour | int(11) | Oui | NULL |
| date\_debut\_suspension | date | Oui | NULL |
| date\_fin\_suspension | date | Oui | NULL |
| date\_reprise\_stage | date | Oui | NULL |
| date\_interruption | date | Oui | NULL |
| date\_debut\_absence | date | Oui | NULL |
| date\_fin\_absence | date | Oui | NULL |

### Structure de la table stage\_etudiant

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| stage\_periode\_id | int(11) | Oui | NULL |
| etudiant\_id | int(11) | Oui | NULL |
| **tuteur\_id** | int(11) | Oui | NULL |
| tuteur\_universitaire\_id | int(11) | Oui | NULL |
| entreprise\_id | int(11) | Oui | NULL |
| **adresse\_stage\_id** | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| service\_stage\_entreprise | varchar(255) | Oui | NULL |
| sujet\_stage | longtext | Oui | NULL |
| date\_depot\_formulaire | datetime(6) | Oui | NULL |
| date\_validation | datetime(6) | Oui | NULL |
| date\_convention\_envoyee | datetime(6) | Oui | NULL |
| date\_convention\_recu | datetime(6) | Oui | NULL |
| etat\_stage | varchar(30) | Non | |
| date\_debut\_stage | date | Non | |
| date\_fin\_stage | date | Non | |
| activites | longtext | Oui | NULL |
| amenagement\_stage | longtext | Oui | NULL |
| gratification | tinyint(1) | Non | |
| gratification\_montant | double | Non | |
| gratification\_periode | varchar(1) | Non | |
| avantages | longtext | Oui | NULL |
| duree\_hebdomadaire | double | Non | |
| duree\_jours\_stage | int(11) | Non | |
| date\_autorise | datetime(6) | Oui | NULL |
| uuid | binary(16) | Non | |
| date\_imprime | datetime(6) | Oui | NULL |
| periodes\_interruptions | longtext | Oui | NULL |
| commentaire\_duree\_hebdomadaire | longtext | Oui | NULL |

### Structure de la table stage\_mail\_template

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| stage\_periode\_id | int(11) | Oui | NULL |
| **twig\_template\_id** | int(11) | Oui | NULL |
| subject | varchar(255) | Non | |
| event | varchar(50) | Non | |

### Structure de la table stage\_periode

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| annee\_universitaire\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| uuid | binary(16) | Non | |
| document\_name | varchar(50) | Non | |
| numero\_periode | int(11) | Non | |
| libelle | varchar(100) | Non | |
| nb\_semaines | int(11) | Non | |
| nb\_jours | int(11) | Non | |
| date\_debut | date | Non | |
| date\_fin | date | Non | |
| competences\_visees | longtext | Oui | NULL |
| modalite\_evaluation | longtext | Oui | NULL |
| modalite\_evaluation\_pedagogique | longtext | Oui | NULL |
| modalite\_encadrement | longtext | Oui | NULL |
| document\_rendre | varchar(255) | Oui | NULL |
| nb\_ects | double | Non | |
| dates\_flexibles | tinyint(1) | Non | |
| copie\_assistant | tinyint(1) | Non | |
| texte\_libre | longtext | Oui | NULL |

### Structure de la table stage\_periode\_interruption

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| stage\_periode\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| date\_debut | date | Non | |
| date\_fin | date | Non | |
| motif | varchar(255) | Non | |

### Structure de la table stage\_periode\_offre

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |
| entreprise | varchar(255) | Non | |
| ville | varchar(255) | Non | |
| document\_name | varchar(50) | Non | |

### Structure de la table stage\_periode\_offre\_stage\_periode

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **stage\_periode\_offre\_id** _ | int(11) | Non | |
| _ **stage\_periode\_id** _ | int(11) | Non | |

### Structure de la table stage\_periode\_personnel

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **stage\_periode\_id** _ | int(11) | Non | |
| _ **personnel\_id** _ | int(11) | Non | |

### Structure de la table stage\_periode\_soutenance

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| stage\_periode\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| date\_debut | date | Non | |
| date\_fin | date | Non | |
| date\_rendu\_rapport | datetime(6) | Oui | NULL |



### Structure de la table twig\_template

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| name | varchar(255) | Non | |
| source | longtext | Non | |

## Listings

### Structure de la table status

**Nota. Doit être renommée en type_status**

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| libelle | varchar(50) | Non | |
| sigle | varchar(10) | Non | |
| service\_status | double | Non | |
| taux\_td | double | Non | |
| taux\_tp | double | Non | |
| taux\_td\_hc | double | Non | |
| taux\_tp\_hc | double | Non | |

### Structure de la table type\_diplome

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |
| sigle | varchar(20) | Non | |
| nb\_semestres | int(11) | Non | |
| niveau\_entree | int(11) | Non | |
| niveau\_sortie | int(11) | Non | |
| apc | tinyint(1) | Non | |

### Structure de la table type\_document

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| departement\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(75) | Non | |

### Structure de la table type\_groupe

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(100) | Non | |
| defaut | tinyint(1) | Non | |
| type | varchar(2) | Non | |

### Structure de la table type\_hrs

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(100) | Non | |
| type | varchar(20) | Non | |
| inclu\_service | tinyint(1) | Non | |
| maximum | double | Non | |

### Structure de la table type\_materiel

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| departement\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(100) | Non | |

### Structure de la table ue

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| semestre\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |
| numero\_ue | int(11) | Non | |
| coefficient | double | Non | |
| nb\_ects | double | Non | |
| actif | tinyint(1) | Non | |
| bonification | tinyint(1) | Non | |
| code\_element | varchar(15) | Non | |
| apc\_competence\_id | int(11) | Oui | NULL |

### Structure de la table ufr

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **id** _ | int(11) | Non | |
| responsable\_id | int(11) | Oui | NULL |
| site\_principal\_id | int(11) | Oui | NULL |
| created | datetime | Non | |
| updated | datetime | Non | |
| libelle | varchar(255) | Non | |

### Structure de la table ufr\_site

#### Description
#### Colonnes

| **Nom** | **Type** | **Null** | **Valeur par défaut**
| --- | --- | --- | --- |
| _ **ufr\_id** _ | int(11) | Non | |
| _ **site\_id** _ | int(11) | Non | |
