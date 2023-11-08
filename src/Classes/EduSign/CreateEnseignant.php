<?php

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetEnseignantEduSignAdapter;
use App\Repository\PersonnelRepository;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\EventDispatcher\Event;

class CreateEnseignant
{

    public function __construct(
        private readonly ApiEduSign $apiEduSign,
        protected PersonnelRepository $personnelRepository,)
    {
    }

    public function setUpdateManager(UpdateManager $updateManager): void
    {
        $this->updateManager = $updateManager;
    }

    public function update($personnel, $departement, $cleApi)
    {
        //construit les objets associés selon le modèle EduSign
        $enseignant = (new IntranetEnseignantEduSignAdapter($personnel))->getEnseignant();
        //envoi une requete pour ajouter les éléments
        $this->apiEduSign->addEnseignant($enseignant, $personnel, $departement, $cleApi);
    }
}