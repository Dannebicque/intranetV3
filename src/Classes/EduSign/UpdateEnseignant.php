<?php

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetEnseignantEduSignAdapter;
use App\Repository\PersonnelRepository;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\EventDispatcher\Event;

class UpdateEnseignant
{

    public function __construct(
        private readonly ApiEduSign $apiEduSign,
        protected PersonnelRepository $personnelRepository,
        private EventDispatcherInterface $eventDispatcher
    )
    {
    }

    public function setUpdateManager(UpdateManager $updateManager): void
    {
        $this->updateManager = $updateManager;
    }

    public function update($id)
    {
        //récupère les éléments
        $personnel = $this->personnelRepository->find($id);

        //construit les objets associés selon le modèle EduSign
        $enseignant = (new IntranetEnseignantEduSignAdapter($personnel))->getEnseignant();
        //envoi une requete pour ajouter les éléments
        $this->apiEduSign->addEnseignant($enseignant);

        // Dispatch Event here
        $this->eventDispatcher->dispatch(new EnseignantUpdatedEvent($id));
    }
}