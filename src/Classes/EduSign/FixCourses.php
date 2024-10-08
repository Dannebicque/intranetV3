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
        $diplomes = $keyEduSign
            ? $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign])
            : $this->diplomeRepository->findAllWithEduSign();

        $start = Carbon::now()->setISODate((int)date('Y'), $week)->startOfWeek();
        $end = $start->copy()->endOfWeek();

        foreach ($diplomes as $diplome) {
            dump($diplome->getLibelle());
            $this->source = $diplome->isOptUpdateCelcat() === true ? 'celcat' : 'intranet';
            $keyEduSign = $keyEduSign ?? $diplome->getKeyEduSign();
            $courses = $this->apiCours->getAllCoursesWeek($keyEduSign, $start, $end);
            dump(
                'cours' . count($courses),
            );

            if ($courses) {
                foreach ($courses as $course) {
                    if (Carbon::parse($course['START'], 'UTC')->isBefore(Carbon::now())) {
                        continue;
                    }

                    $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR']);
                    $cours = empty($course['API_ID'])
                        ? $this->getCourse($diplome, $course, $enseignant)
                        : $this->edtManager->findCourse($this->source, $course['API_ID']);

                    if (empty($course['API_ID'])) {
                        $coursIntranet = $this->findCoursIntranet($cours);
                        if (empty($coursIntranet)) {
                           $result['suppression cours créé à la main'][$course['START'].' - '.$course['END'].'|'.$course['PROFESSOR']] = $this->deleteCourseEduSign($course, $keyEduSign);
                        } else {
                            $result['update cours créé à la main'][$course['START'].' - '.$course['END'].'|'.$course['PROFESSOR']] = $this->updateCourseEduSign($coursIntranet, $course, $keyEduSign, $diplome);
                        }
                    } else {
                        if (!$cours) {
                            $result['suppression cours'][$course['API_ID']] = $this->deleteCourseEduSign($course, $keyEduSign);
                        } else {
                            $result['update cours'][$course['API_ID']] = $this->updateCourseEduSign($cours, $course, $keyEduSign, $diplome);
                        }
                    }
                }
            } else {
                $result['aucun cours'] = 'Aucun cours trouvé pour le diplome '.$diplome->getLibelle().' de la semaine ' . $week;
            }
        }

        return $result ?? null;
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

    private function updateCourseEduSign($coursIntranet, $course, $keyEduSign, $diplome): mixed
    {
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

        return $this->apiCours->updateCourse($this->edusignCourse, $keyEduSign, $diplome);
    }

    private function deleteCourseEduSign($course, $keyEduSign): mixed
    {
        return $this->apiCours->deleteCourse($course['ID'], $keyEduSign);
    }

    private function linkCourseEduSign($coursIntranet, $course)
    {
        $coursIntranet->setIdEduSign($course['ID']);
        $this->edtManager->saveCourseEduSign($this->source, $coursIntranet);
    }
}
