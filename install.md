# Récupérer le projet
```
git clone https://github.com/Dannebicque/intranetV3.git
cd intranetV3
composer update --ignore-platform-reqs
```

*Le --ignore-platform-reqs, permet de s'affranchir des dépendences au LDAP, et aux serveur MSSQL et Oracles qui sont utilisés dans l'intranet, mais non accessible en version local. L'absence de ces dépendences ne pose pas de problème sur la majorité des fonctionnalités (Simplement les liens Celcat, Apogee et LDAP en "Super-Admin")*

```
cp .env .env.local
```

**Modifier les informations dans le fichier .env.local, notamment la connexion à la BDD**

# Créer la base de données et importer les données de tests

```
bin/console d:d:c
```

**Un fichier sql est disponible dans le répertoire demo. Importer ce fichier dans la base nouvelle crée.**

A ce stade tout devrais fonctionner, mais parfois...

```
bin/console d:s:u -f
```

Pour mettre à jour la base de données et le lien avec Symfony.

# Tester le site

http://localhost:8888/intranetV3/public/index.php

Selon votre configuration, l'URL peut évidemment changer. En mode développement, index.php peut être nécessaire, sauf si un htaccess est configuré.

# Accès de démonstration
Pour accéder, votre login est votre prénom, et le mot de passe « test »
* lucas / directeur des études
* aubin / responsable des RI
* francois / enseignant
* mickael / chef de département
* alla0001 / étudiant

