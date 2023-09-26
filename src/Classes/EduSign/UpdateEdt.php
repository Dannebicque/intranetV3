<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/08/2023 14:42
 */

namespace App\Classes\EduSign;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Adapter\IntranetEdtEduSignAdapter;
use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\EvenementEdt;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\EventDispatcher\Event;

class UpdateEdt
{

    private $evenement;
    private UpdateManager $updateManager;

    public function __construct(
        private readonly ApiEduSign         $apiEduSign,
        private readonly EdtManager         $edtManager,
        private readonly TypeMatiereManager $typeMatiereManager,
        protected SemestreRepository        $semestreRepository,
        protected PersonnelRepository       $personnelRepository,
        protected UpdateEnseignant          $updateEnseignant,
        private EventDispatcherInterface $eventDispatcher,
    )
    {
        $eventDispatcher->addListener(EnseignantUpdatedEvent::class, [$this, 'onEnseignantUpdated']);
    }

    public function onEnseignantUpdated(EnseignantUpdatedEvent $event)
    {
        $this->sendUpdate();
    }

    public function update()
    {
        //todo: pour chaque dept
        $semestre = $this->semestreRepository->find(101);
        $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestre($semestre, $semestre->getDiplome()->getReferentiel());

//        //récupère les edt de l'intranet depuis EdtManager.php
        $edt = $this->edtManager->getPlanningSemestre($semestre, $matieres, $semestre->getAnneeUniversitaire(), []);

        foreach ($edt->evenements as $evenement) {
            $this->evenement = $evenement;

            $enseignant = $evenement->personnelObjet;
            $enseignant = $this->personnelRepository->find($enseignant);
            // Retourner l'id du personnel pour le mettre à jour
            $id = $enseignant->getId();

            $this->eventDispatcher->dispatch(new EnseignantAddedEvent($id));

        }
    }

    public function sendUpdate()
    {
        $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();

        $this->apiEduSign->addCourse($course);
    }
}
