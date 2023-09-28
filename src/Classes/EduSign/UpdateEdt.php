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
use App\Repository\DepartementRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\EventDispatcher\Event;
use function PHPUnit\Framework\isEmpty;

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
        protected DepartementRepository     $departementRepository,
        private EventDispatcherInterface    $eventDispatcher,
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
        $departements = $this->departementRepository->findActifs();
        $semestres = [];
        foreach ($departements as $departement) {
            $semestreArrays = $this->semestreRepository->findByDepartementActif($departement);
            foreach ($semestreArrays as $semestreArray) {
                $semestres[] = $semestreArray;
            }
        }

        foreach ($semestres as $semestre) {
            // récupérer la date d'aujourd'hui
            $today = new \DateTime('now');
            // récupérer le prochain samedi
            $saturday = new \DateTime('next saturday');


            $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestre($semestre, $semestre->getDiplome()->getReferentiel());

            //récupère les edt de l'intranet depuis EdtManager.php
            $edt = $this->edtManager->getPlanningSemestre($semestre, $matieres, $semestre->getAnneeUniversitaire(), []);

            foreach ($edt->evenements as $evenement) {
                $evenementJour = \DateTime::createFromFormat('Y-m-d H:i:s', $evenement->heureDebut, new \DateTimeZone('Europe/Paris'));
//                dump('day : '.$evenement->heureDebut);
//                dump($today);
//                dump($saturday);
//                die();
                if ($evenementJour >= $today && $evenementJour <= $saturday) {
                    dump('ok');
                    die();
                    $this->evenement = $evenement;

                    $enseignant = $evenement->personnelObjet;
                    $enseignant = $this->personnelRepository->find($enseignant);
                    // Retourner l'id du personnel pour le mettre à jour
                    $id = $enseignant->getId();

                    if ($enseignant->getIdEduSign() != '' || isEmpty($enseignant->getIdEduSign())) {
                        $this->eventDispatcher->dispatch(new EnseignantAddedEvent($id));
                    } else {
                        $this->sendUpdate();
                    }
                } else {
//                    dump($evenementJour);
//                    dump($today);
//                    dump($saturday);
                    dump('evenement hors d\'échéance');
                }
            }
        }
    }

    public function sendUpdate()
    {
        $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();
        $this->apiEduSign->addCourse($course);
    }
}
