<?php

namespace App\Classes\EduSign;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Adapter\IntranetEdtEduSignAdapter;
use App\Classes\Matieres\TypeMatiereManager;
use App\Repository\ApcReferentielRepository;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;

class DeleteCourse
{
    private ?string $cleApi;

    public function __construct(
        private readonly ApiEduSign        $apiEduSign,
        protected EdtPlanningRepository    $edtPlanningRepository,
        protected DepartementRepository    $departementRepository,
        protected SemestreRepository       $semestreRepository,
        protected ApcReferentielRepository $apcReferentielRepository,
        protected TypeMatiereManager       $typeMatiereManager,
        protected EdtManager               $edtManager,
        protected DiplomeRepository        $diplomeRepository,
    )
    {
    }

    public function delete()
    {
        $diplomes = $this->diplomeRepository->findAllWithEduSign();

        foreach ($diplomes as $diplome) {

            $cleApi = $diplome->getKeyEduSign();

            $semestres = $this->semestreRepository->findByDiplome($diplome);
            foreach ($semestres as $semestre) {

                $referentiel = $this->apcReferentielRepository->findOneBy(['id' => $semestre->getDiplome()->getReferentiel()]);

                if ($referentiel !== null) {

                    $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestreArray($semestre, $referentiel);
                } else {
                    $matieres = [];
                }
                //récupère les edt de l'intranet depuis EdtManager.php
                $edt = $this->edtManager->getPlanningEduSign($semestre, $matieres, $semestre->getAnneeUniversitaire(), []);

                foreach ($edt->evenements as $evenement) {
                    dump('------------');
                    $course = (new IntranetEdtEduSignAdapter($evenement))->getCourse();

                    $this->apiEduSign->deleteCourse($course, $cleApi);
                }
            }
        }
    }
}