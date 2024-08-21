<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/DeleteCourse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2024 17:28
 */

namespace App\Classes\EduSign;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Adapter\IntranetEdtEduSignAdapter;
use App\Classes\EduSign\Api\ApiCours;
use App\Classes\EduSign\Api\ApiEduSign;
use App\Classes\Matieres\TypeMatiereManager;
use App\Repository\ApcReferentielRepository;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\SemestreRepository;

class DeleteCourse
{
    public function __construct(
        private readonly ApiCours              $apiCours,
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

    public function delete(): void
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
                    $course = (new IntranetEdtEduSignAdapter($evenement))->getCourse();

                    if ($course !== null) {
                        $this->apiCours->deleteCourse($course, $cleApi);
                    }
                }
            }
        }
    }
}
