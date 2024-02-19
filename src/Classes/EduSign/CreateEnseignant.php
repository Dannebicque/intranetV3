<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/CreateEnseignant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2024 17:28
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetEnseignantEduSignAdapter;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\PersonnelRepository;

class CreateEnseignant
{

    private UpdateManager $updateManager;

    public function __construct(
        private readonly ApiEduSign $apiEduSign,
        protected PersonnelRepository $personnelRepository,)
    {
    }

    public function setUpdateManager(UpdateManager $updateManager): void
    {
        $this->updateManager = $updateManager;
    }

    public function update(Personnel $personnel, Departement $departement, string $cleApi): void
    {
        //construit les objets associés selon le modèle EduSign
        $enseignant = (new IntranetEnseignantEduSignAdapter($personnel))->getEnseignant();
        //envoi une requete pour ajouter les éléments
        $this->apiEduSign->addEnseignant($enseignant, $personnel, $departement, $cleApi);
    }
}
