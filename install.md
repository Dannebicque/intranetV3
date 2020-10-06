```
git clone https://github.com/Dannebicque/intranetV3.git
cd intranetV3
composer update --ignore-platform-reqs
cp .env .env.local
```

Mettre  à jour les données de connexion à la BDD

```
bin/console d:d:c
bin/console d:s:u -f
bin/console doctrine:fixtures:load  
```


http://localhost:8888/intranetV3/public/index.php

