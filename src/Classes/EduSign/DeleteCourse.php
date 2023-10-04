<?php

namespace App\Classes\EduSign;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Adapter\IntranetEdtEduSignAdapter;
use App\Classes\Matieres\TypeMatiereManager;
use App\Repository\ApcReferentielRepository;
use App\Repository\DepartementRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;

class DeleteCourse
{

    public function __construct(
        private readonly ApiEduSign        $apiEduSign,
        protected EdtPlanningRepository    $edtPlanningRepository,
        protected DepartementRepository    $departementRepository,
        protected SemestreRepository       $semestreRepository,
        protected ApcReferentielRepository $apcReferentielRepository,
        protected TypeMatiereManager       $typeMatiereManager,
        protected EdtManager               $edtManager,
    )
    {
    }

    public function delete()
    {
        $departements = $this->departementRepository->findActifs();
        $semestres = [];
        foreach ($departements as $departement) {
            $semestreArrays = $this->semestreRepository->findByDepartementActifFc($departement);
            foreach ($semestreArrays as $semestreArray) {
                $semestres[] = $semestreArray;
            }
        }

        foreach ($semestres as $semestre) {

            $referentiel = $this->apcReferentielRepository->findOneBy(['id' => $semestre->getDiplome()->getReferentiel()]);

            if ($referentiel !== null) {

                $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestreArray($semestre, $referentiel);

            } else {
                $matieres = [];
            }
//        $edt = $this->edtPlanningRepository->findEdtEduSign();
            //récupère les edt de l'intranet depuis EdtManager.php
            $edt = $this->edtManager->getPlanningEduSign($semestre, $matieres, $semestre->getAnneeUniversitaire() , []);

            foreach ($edt->evenements as $evenement) {
                dump('------------');
                $course = (new IntranetEdtEduSignAdapter($evenement))->getCourse();
//                dump($course);
//                die();
                $this->apiEduSign->deleteCourse($course);
            }
        }
    }
}