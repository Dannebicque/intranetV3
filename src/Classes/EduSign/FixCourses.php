<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/FixCourses.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Classes\EduSign;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Adapter\EduSignEdtCelcatAdapter;
use App\Classes\EduSign\Adapter\EduSignEdtIntranetAdapter;
use App\Classes\EduSign\DTO\EduSignCourse;
use App\Entity\Constantes;
use App\Repository\AbsenceRepository;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\ApcReferentielRepository;
use App\Repository\CalendrierRepository;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\EdtCelcatRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;

class FixCourses
{
    protected ?string $source;

    public function __construct(
        private readonly ApiEduSign            $apiEduSign,
        protected SemestreRepository           $semestreRepository,
        protected PersonnelRepository          $personnelRepository,
        protected EtudiantRepository           $etudiantRepository,
        protected CreateEnseignant             $updateEnseignant,
        protected DepartementRepository        $departementRepository,
        protected EdtPlanningRepository        $edtPlanningRepository,
        protected EdtCelcatRepository          $edtCelcatRepository,
        protected GroupeRepository             $groupeRepository,
        protected DiplomeRepository            $diplomeRepository,
        protected ApcReferentielRepository     $apcReferentielRepository,
        protected AbsenceRepository            $absenceRepository,
        protected AnneeUniversitaireRepository $anneeUniversitaireRepository,
        protected CalendrierRepository         $CalendrierRepository,
        protected EduSignCourse                $edusignCourse,
        private readonly EdtManager            $edtManager,
    )
    {
    }

    public function fixCourse(?string $keyEduSign): void
    {
        if ($keyEduSign === null) {
            $diplomes = $this->diplomeRepository->findAllWithEduSign();
        } else {
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
        }

        foreach ($diplomes as $diplome) {

            $cleApi = $diplome->getKeyEduSign();

            // on récupère tous les cours
            $courses = $this->apiEduSign->getAllCourses($cleApi);

            foreach ($courses as $course) {
                // on récupère l'enseignant
                $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR']);

                if ($enseignant !== null) {
                    // si le cours vient de Celcat
                    if ($diplome->isOptUpdateCelcat() === true) {
                        $this->source = 'celcat';
                        $cours = (new EduSignEdtCelcatAdapter($course, $enseignant))->getCourse();
                        if ($cours !== null) {
                            $date = Carbon::createFromFormat("Y-m-d H:i:s", $cours->date);
                            // on retrouve le cours dans l'intranet
                            $coursIntranet = $this->edtCelcatRepository->findOneCours($date, $cours->heureDebut, $cours->heureFin, $cours->salle, $cours->personnelObjet);
                        }
                    } else {
                        $this->source = 'intranet';
                        $cours = (new EduSignEdtIntranetAdapter($course, $enseignant))->getCourse();
                        // récupérer seulement H:i:s de $cours->heureDebut
                        $startFormat = $cours->heureDebut->format('H:i:s');
                        // récupérer la valeur qui correspond à la key $endFormat dans le tableau de la constante Constantes::TAB_HEURES_INDEX
                        $start = Constantes::TAB_HEURES_INDEX[$startFormat];
                        $endFormat = $cours->heureFin->format('H:i:s');
                        $end = Constantes::TAB_HEURES_INDEX[$endFormat];
                        $date = Carbon::createFromFormat("Y-m-d H:i:s", $cours->date);
                        // on retrouve le cours dans l'intranet
                        $coursIntranet = $this->edtPlanningRepository->findOneBy(['date' => $date, 'debut' => $start, 'fin' => $end, 'salle' => $cours->salle, 'intervenant' => $cours->personnelObjet]);
                    }

                    $startRaw = Carbon::parse($course['START'], 'UTC');
                    $endRaw = Carbon::parse($course['END'], 'UTC');

                    if ($coursIntranet !== null && $course['API_ID'] === null) {
                        $coursIntranet->setIdEduSign($course['ID']);
                        $this->edtManager->saveCourseEduSign($this->source, $coursIntranet);

                        $this->edusignCourse->id = $course['ID'];
                        $this->edusignCourse->apiId = $coursIntranet->getId();
                        $this->edusignCourse->name = $course['NAME'];
                        $this->edusignCourse->start = Carbon::createFromFormat("Y-m-d H:i:s", $startRaw);
                        $this->edusignCourse->end = Carbon::createFromFormat("Y-m-d H:i:s", $endRaw);
                        $this->edusignCourse->classroom = $course['CLASSROOM'];
                        $this->edusignCourse->professor = $course['PROFESSOR'];
                        $this->edusignCourse->school_group = $course['SCHOOL_GROUP'];
                        $course['API_ID'] = $coursIntranet->getId();

                        $this->apiEduSign->updateCourse($this->edusignCourse, $cleApi);
                    } elseif ($coursIntranet === null && $course['API_ID'] !== null) {
                        $this->apiEduSign->deleteCourse($course['ID'], $cleApi);
                    } elseif ($coursIntranet !== null && ($coursIntranet->getIdEduSign() === null && $course['API_ID'] !== null)) {
                        $coursIntranet->setIdEduSign($course['ID']);
                        $this->edtManager->saveCourseEduSign($this->source, $coursIntranet);
                    }
                }
            }
        }
    }
}
