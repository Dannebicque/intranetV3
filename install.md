# Configuration minimale

PHP 8.0 minimum, Mysql/MariaDB 5.7 minimum, Nginx ou Apache.

# Récupérer le projet
```
git clone https://github.com/Dannebicque/intranetV3.git
cd intranetV3
composer install //ou composer update
```

*Il est parfois nécessaire d'ajouter `--ignore-platform-reqs` pour éviter les soucis avec les dépendances LDAP ou PDO. Le --ignore-platform-reqs, permet de s'affranchir des dépendences au LDAP, et aux serveur MSSQL et Oracles qui sont utilisés dans l'intranet, mais non accessible en version local. L'absence de ces dépendences ne pose pas de problème sur la majorité des fonctionnalités (Simplement les liens Celcat, Apogee et LDAP en "Super-Admin")*

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

```
bin/console d:f:l
```
Pour installer les fixtures et avoir un jeu de données.

Enfin, il faut installer les dépendances JS/css

```
yarn install --force (ou avec npm).
```

L'intranet utilise une licence FontAwesome. Si vous n'en disposez pas, modifiez le package.json et la
ligne `"@fortawesome/fontawesome-pro": "..."` par `"@fortawesome/fontawesome-free": "..."`
Il pourrait manquer quelques pictos qu'il faudra modifier dans les templates si besoin.

# Lancer le serveur de développement

```
yarn encore dev --watch //ou yarn watch ou npm run encore dev --watch
```

# Tester le site

http://localhost:8888/intranetV3/public/index.php

Selon votre configuration, l'URL peut évidemment changer. En mode développement, index.php peut être nécessaire, sauf si
un htaccess est configuré ou si vous utiliser la Symfony CLI

# Accès de démonstration

Pour accéder, utilisez l'un des login ci-dessous, et le mot de passe « test »

* permanent / enseignant (chef de département)
* superAdmin / Super Admin, pour des configurations globales
* etudiant / étudiant

