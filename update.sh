# Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
# @file /Users/davidannebicque/Sites/intranetV3/update.sh
# @author davidannebicque
# @project intranetV3
# @lastUpdate 08/04/2024 17:57

#!/usr/bin/env bash

touch maintenance.lock
echo "Début mise à jour"
echo "Git Pull"
git pull origin main
echo "end git pull"



if test "$1" = "--assets"
then
  echo "generation des assets"
  if command -v yarn > /dev/null 2>&1; then
      echo "Yarn est disponible."
      yarn build
  else
      echo "Yarn n'est pas disponible. Utiliser npm pour installer les dépendances."
      npm run build
  fi

  $old_file = "public/build/print.*.css"
  $new_file = "public/build/print.css"
  mv $old_file $new_file
  echo "fin génératation des assets"
fi


echo "Nettoyage cache"
#rm -R var/cache/prod
#mkdir var/cache/prod
#chown intradev:www-data -R var/cache/prod
#chmod -R 777 var/cache/prod
bin/console cache:clear
echo "end Nettoyage cache"
echo "Mise à jour les liens js"
bin/console fos:js-routing:dump --format=json --target=public/js/fos_js_routes.json
echo "end Mise à jour les liens js"
echo "Optimisation Composer"
composer dump-autoload --no-dev --classmap-authoritative
echo "end Optimisation Composer"
chmod -R 777 var/
echo "Relance des workers"
bin/console messenger:stop-workers
echo "Fin relance des workers"


echo "Fin mise à jour"
rm maintenance.lock


