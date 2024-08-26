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
use App\Repository\PersonnelRepository;
use Carbon\Carbon;

class FixCourses
{
    protected ?string $source;

    public function __construct(
        private readonly ApiCours              $apiCours,
        private readonly PersonnelRepository   $personnelRepository,
        private readonly EdtPlanningRepository $edtPlanningRepository,
        private readonly EdtCelcatRepository   $edtCelcatRepository,
        private readonly DiplomeRepository     $diplomeRepository,
        private readonly EduSignCourse         $edusignCourse,
        private readonly EdtManager            $edtManager,
    )
    {
    }

    public function fixCourse(?string $keyEduSign): ?array
    {
        if ($keyEduSign === null) {
            return ['success' => false, 'messages' => ['Clé EduSign manquante.']];
        }

        $result = ['success' => true, 'messages' => []];

        try {
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);

            foreach ($diplomes as $diplome) {
                $courses = $this->apiCours->getAllCourses($keyEduSign);

                if ($courses) {
                    foreach ($courses as $course) {
                        $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR']);

                        if ($enseignant !== null) {
                            $cours = $this->getCourse($diplome, $course, $enseignant);
                            $coursIntranet = $this->findCoursIntranet($cours, $diplome);

                            if ($coursIntranet !== null && count($coursIntranet) === 1) {
                                $coursIntranet = $coursIntranet[0];

                                if ($coursIntranet !== null && $course['API_ID'] === null) {
                                    $this->updateCourseEduSign($coursIntranet, $course, $keyEduSign, $result, $cours);
                                } elseif ($coursIntranet === null && $course['API_ID'] !== null) {
                                    $this->deleteCourseEduSign($course, $keyEduSign, $result, $cours);
                                } elseif ($coursIntranet !== null && $coursIntranet->getIdEduSign() === null && $course['API_ID'] !== null) {
                                    $this->linkCourseEduSign($coursIntranet, $course);
                                }
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
            $result['messages'][] = 'Erreur lors de la mise à jour des groupes : ' . $e->getMessage();
        }

        return $result;
    }

    private function getCourse($diplome, $course, $enseignant)
    {
        $this->source = $diplome->isOptUpdateCelcat() ? 'celcat' : 'intranet';
        $adapterClass = $this->source === 'celcat' ? EduSignEdtCelcatAdapter::class : EduSignEdtIntranetAdapter::class;
        return (new $adapterClass($course, $enseignant))->getCourse();
    }

    private function findCoursIntranet($cours)
    {
        $date = Carbon::createFromFormat("Y-m-d H:i:s", $cours->date);
        if ($this->source === 'celcat') {
            return $this->edtCelcatRepository->findCours($date, $cours->heureDebut, $cours->heureFin, $cours->salle, $cours->personnelObjet, $cours->groupeObjet);
        } else {
            $start = Constantes::TAB_HEURES_INDEX[$cours->heureDebut->format('H:i:s')];
            $end = Constantes::TAB_HEURES_INDEX[$cours->heureFin->format('H:i:s')];
            return $this->edtPlanningRepository->findBy(['date' => $date, 'debut' => $start, 'fin' => $end, 'salle' => $cours->salle, 'intervenant' => $cours->personnelObjet]);
        }
    }

    private function updateCourseEduSign($coursIntranet, $course, $keyEduSign, &$result, $cours)
    {
        $coursIntranet->setIdEduSign($course['ID']);
        $this->edtManager->saveCourseEduSign($this->source, $coursIntranet);

        $this->edusignCourse->id = $course['ID'];
        $this->edusignCourse->apiId = $coursIntranet->getId();
        $this->edusignCourse->api_id = $coursIntranet->getId();
        $this->edusignCourse->name = $course['NAME'];
        $this->edusignCourse->start = Carbon::createFromFormat("Y-m-d H:i:s", Carbon::parse($course['START'], 'UTC'));
        $this->edusignCourse->end = Carbon::createFromFormat("Y-m-d H:i:s", Carbon::parse($course['END'], 'UTC'));
        $this->edusignCourse->classroom = $course['CLASSROOM'];
        $this->edusignCourse->professor = $course['PROFESSOR'];
        $this->edusignCourse->school_group = $course['SCHOOL_GROUP'];

        $this->apiCours->updateCourse($this->edusignCourse, $keyEduSign);

        $result[$this->apiCours->updateCourse($this->edusignCourse, $keyEduSign)]['cours_maj']['intranet'][] = [
            'id' => $course['API_ID'],
            'date' => $cours->date,
            'debut' => $cours->heureDebut,
            'fin' => $cours->heureFin,
            'salle' => $cours->salle,
            'intervenant' => $cours->personnelObjet
        ];
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
