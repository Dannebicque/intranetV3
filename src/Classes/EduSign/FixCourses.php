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
use App\Classes\EduSign\Api\ApiCours;
use App\Classes\EduSign\Api\ApiEduSign;
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
        private readonly ApiCours                $apiCours,
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

    public function fixCourse(?string $keyEduSign): ?array
    {
        $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);

        foreach ($diplomes as $diplome) {

            $cleApi = $diplome->getKeyEduSign();

            // on récupère tous les cours
            $courses = $this->apiCours->getAllCourses($cleApi);

            if ($courses) {
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
                                $coursIntranet = $this->edtCelcatRepository->findCours($date, $cours->heureDebut, $cours->heureFin, $cours->salle, $cours->personnelObjet, $cours->groupeObjet);
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
                            $coursIntranet = $this->edtPlanningRepository->findBy(['date' => $date, 'debut' => $start, 'fin' => $end, 'salle' => $cours->salle, 'intervenant' => $cours->personnelObjet]);
                        }

                        $startRaw = Carbon::parse($course['START'], 'UTC');
                        $endRaw = Carbon::parse($course['END'], 'UTC');

                        if ($coursIntranet !== null && count($coursIntranet) === 1) {
                            // récupérer le premier objet du tableau $coursIntranet
                            $coursIntranet = $coursIntranet[0];

                            if ($coursIntranet !== null && $course['API_ID'] === null) {
                                $coursIntranet->setIdEduSign($course['ID']);
                                $this->edtManager->saveCourseEduSign($this->source, $coursIntranet);

                                $this->edusignCourse->id = $course['ID'];
                                $this->edusignCourse->apiId = $coursIntranet->getId();
                                $this->edusignCourse->api_id = $coursIntranet->getId();
                                $this->edusignCourse->name = $course['NAME'];
                                $this->edusignCourse->start = Carbon::createFromFormat("Y-m-d H:i:s", $startRaw);
                                $this->edusignCourse->end = Carbon::createFromFormat("Y-m-d H:i:s", $endRaw);
                                $this->edusignCourse->classroom = $course['CLASSROOM'];
                                $this->edusignCourse->professor = $course['PROFESSOR'];
                                $this->edusignCourse->school_group = $course['SCHOOL_GROUP'];

                                $this->apiCours->updateCourse($this->edusignCourse, $cleApi);

                                $response[$this->apiCours->updateCourse($this->edusignCourse, $cleApi)]['cours_maj']['intranet'][] = ['id' => $course['API_ID'], 'date' => $cours->date, 'debut' => $cours->heureDebut, 'fin' => $cours->heureFin, 'salle' => $cours->salle, 'intervenant' => $cours->personnelObjet];

                            } elseif ($coursIntranet === null && $course['API_ID'] !== null) {
                                $this->apiCours->deleteCourse($course['ID'], $cleApi);

                                $response[$this->apiCours->deleteCourse($course['ID'], $cleApi)]['cours_supprimés']['edusign'][] = ['id' => $course['API_ID'], 'date' => $cours->date, 'debut' => $cours->heureDebut, 'fin' => $cours->heureFin, 'salle' => $cours->salle, 'intervenant' => $cours->personnelObjet];

                            } elseif ($coursIntranet !== null && ($coursIntranet->getIdEduSign() === null && $course['API_ID'] !== null)) {
                                $coursIntranet->setIdEduSign($course['ID']);
                                $this->edtManager->saveCourseEduSign($this->source, $coursIntranet);

//                            $response['success']['cours_maj']['intranet'][] = ['id' => $coursIntranet->getId(), 'debut' => $coursIntranet->getDebut(), 'fin' => $coursIntranet->getFin(), 'salle' => $coursIntranet->getSalle(), 'intervenant' => $coursIntranet->getIntervenant(), 'id_edusign' => $coursIntranet->getIdEduSign()];
                            }
                        }
//                    elseif ($coursIntranet !== null && count($coursIntranet) > 1) {
//                        foreach ($coursIntranet as $cours) {
//                            //todo: qd meme ajouter le cours dans edusign ?
//                            $response['error']['Cours en double'] = ['id' => $cours->getId(), 'date' => $cours->getDate(), 'debut' => $cours->getDebut(), 'fin' => $cours->getFin(), 'salle' => $cours->getSalle(), 'intervenant' => $cours->getIntervenant()];
//                        }
//                    }
                    }
                }
                $response['success']['Cours mis à jour'] = 'Cours mis à jour pour le diplôme ' . $diplome->getLibelle();
            } else {
                $response['error']['Aucun cours'] = 'Aucun cours trouvé pour le diplôme ' . $diplome->getLibelle();
            }
        }

        if ($response['error'] === '') {
            $response['success'] = true;
        } else {
            $response['success'] = false;
        }
        return $response;
    }
}
