# Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
# @file /Users/davidannebicque/htdocs/intranetV3/initTests.sh
# @author davidannebicque
# @project intranetV3
# @lastUpdate 27/12/2021 13:21

bin/console d:d:d -f --env=test #Surppression de la base de données
bin/console d:d:c --env=test #Création de la base de données
bin/console d:s:u -f --env=test #Mise à jour de la base de données
bin/console d:f:l -n --env=test #Import des données
