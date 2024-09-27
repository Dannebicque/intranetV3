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
use App\Classes\EduSign\DTO\EduSignCourse;
use App\Entity\Constantes;
use App\Repository\DiplomeRepository;
use App\Repository\EdtCelcatRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use Carbon\Carbon;

class FixCourses
{
    protected ?string $source;

    public function __construct(
        private readonly ApiCours              $apiCours,
        private readonly PersonnelRepository   $personnelRepository,
        private readonly GroupeRepository      $groupeRepository,
        private readonly EdtPlanningRepository $edtPlanningRepository,
        private readonly EdtCelcatRepository   $edtCelcatRepository,
        private readonly DiplomeRepository     $diplomeRepository,
        private readonly EduSignCourse         $edusignCourse,
        private readonly EdtManager            $edtManager,
    )
    {
    }

    public function fixCourses(?string $keyEduSign, ?int $week): ?array
    {
        if (!$keyEduSign) {
            return ['success' => false, 'messages' => ['Clé EduSign manquante.']];
        }

        $result = ['success' => true, 'messages' => []];

        try {
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
            $start = Carbon::now()->setISODate((int)date('Y'), $week)->startOfWeek();
            $end = $start->copy()->endOfWeek();

            foreach ($diplomes as $diplome) {
                $courses = $this->apiCours->getAllCoursesWeek($keyEduSign, $start, $end);

                if ($courses) {
                    foreach ($courses as $course) {
                        if (Carbon::parse($course['START'], 'UTC')->isBefore(Carbon::now())) {
                            continue;
                        }

                        $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR']);
//                        foreach ($course['GROUPS'] as $groupeIds) {
//                            $groupe = $this->groupeRepository->findByIdEdusign($groupeIds);
//                        }

                        // si le cours a été ajouté à la main
                        if (empty($course['API_ID'])) {
                            // transformer le cours en cours intranet
                            $cours = $this->getCourse($diplome, $course, $enseignant);
                            // rechercher le cours dans la db sous réserves de trouver un cours avec les mêmes infos
                            $coursIntranet = $this->findCoursIntranet($cours);

                            // si on ne trouve pas de cours avec les mêmes infos dans la DB
                            if (empty($coursIntranet)) {
                                $this->deleteCourseEduSign($course, $keyEduSign, $result, $cours);
                            } else {
                                $this->updateCourseEduSign($coursIntranet, $course, $keyEduSign, $result, $cours);
                            }
                        } else {
                            $cours = $this->edtManager->findCourse($cours->source, $course['API_ID']);

                            if (!$cours) {
                                $this->deleteCourseEduSign($course, $keyEduSign, $result, $cours);
                            } else {
                                $this->updateCourseEduSign($cours, $course, $keyEduSign, $result, $cours);
                            }
                        }
                    }
                    $result['messages'][] = 'Cours mis à jour pour le diplôme ' . $diplome->getLibelle();
                } else {
                    $result['error']['Aucun cours'] = 'Aucun cours trouvé pour le diplôme ' . $diplome->getLibelle();
                }
            }
        } catch (\Exception $e) {
            $result['success'] = false;
            $result['messages'][] = 'Erreur lors de la mise à jour des cours : ' . $e->getMessage() . ' - ' . $e->getTraceAsString() . ' - ' . $e->getLine();
        }

        return $result;
    }

    private function getCourse($diplome, $course, $enseignant)
    {
        $this->source = $diplome->isOptUpdateCelcat() === true ? 'celcat' : 'intranet';
        $adapterClass = $this->source === 'celcat' ? EduSignEdtCelcatAdapter::class : EduSignEdtIntranetAdapter::class;
        return (new $adapterClass($course, $enseignant))->getCourse();
    }

    private function findCoursIntranet($cours)
    {
        $date = Carbon::createFromFormat("Y-m-d H:i:s", $cours->date);
        $date = $date->format('Y-m-d');

        if ($this->source === 'celcat') {
            return $this->edtCelcatRepository->findCours($date, $cours->heureDebut, $cours->heureFin, $cours->salle, $cours->personnelObjet, $cours->groupeObjet);
        } else {
            $start = Constantes::TAB_HEURES_INDEX[$cours->heureDebut->format('H:i:s')];
            $end = Constantes::TAB_HEURES_INDEX[$cours->heureFin->format('H:i:s')];

            return $this->edtPlanningRepository->findByEduSignDatas($date, $start, $end, $cours->salle, $cours->personnelObjet);
        }
    }

    private function updateCourseEduSign($coursIntranet, $course, $keyEduSign, &$result, $cours)
    {
        if (empty($course['ID'])) {
            $result['success'] = false;
            $result['messages'][] = 'Erreur : ID du cours manquant.';
            return;
        }

        $coursIntranet->setIdEduSign($course['ID']);
        $this->edtManager->saveCourseEduSign($this->source, $coursIntranet);

        $this->edusignCourse->id = $course['ID'];
        $this->edusignCourse->apiId = $this->edusignCourse->api_id = $coursIntranet->getId();
        $this->edusignCourse->name = $course['NAME'];
        $this->edusignCourse->start = Carbon::parse($course['START'], 'UTC');
        $this->edusignCourse->end = Carbon::parse($course['END'], 'UTC');
        $this->edusignCourse->classroom = $course['CLASSROOM'];
        $this->edusignCourse->professor = $course['PROFESSOR'];
        $this->edusignCourse->school_group = $course['SCHOOL_GROUP'];

        try {
            $this->apiCours->updateCourse($this->edusignCourse, $keyEduSign);
            $result[$this->apiCours->updateCourse($this->edusignCourse, $keyEduSign)]['cours_maj']['intranet'][] = [
                'id' => $course['API_ID'],
                'date' => $cours->date,
                'debut' => $cours->heureDebut,
                'fin' => $cours->heureFin,
                'salle' => $cours->salle,
                'intervenant' => $cours->personnelObjet
            ];
        } catch (\Exception $e) {
            $result['success'] = false;
            $result['messages'][] = 'Erreur lors de la mise à jour du cours : ' . $e->getMessage();
        }
    }

    private function deleteCourseEduSign($course, $keyEduSign, $result, $cours)
    {
        $this->apiCours->deleteCourse($course['ID'], $keyEduSign);
        $result[$this->apiCours->deleteCourse($course['ID'], $keyEduSign)]['cours_supprimés']['edusign'][] = [
            'id' => $course['API_ID'],
            'date' => $cours->date,
            'debut' => $cours->heureDebut,
            'fin' => $cours->heureFin,
            'salle' => $cours->salle,
            'intervenant' => $cours->personnelObjet
        ];
    }

    private function linkCourseEduSign($coursIntranet, $course)
    {
        $coursIntranet->setIdEduSign($course['ID']);
        $this->edtManager->saveCourseEduSign($this->source, $coursIntranet);
    }
}
