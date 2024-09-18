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
        if (!$keyEduSign) {
            return ['success' => false, 'messages' => ['Clé EduSign manquante.']];
        }

        $result = ['success' => true, 'messages' => []];

        try {
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);

            foreach ($diplomes as $diplome) {
                // récupère tous les cours depuis edusign
                $courses = $this->apiCours->getAllCourses($keyEduSign);

                if ($courses) {
                    foreach ($courses as $course) {
                        $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR']);

                        if ($enseignant) {

                            // transforme la réponse de l'API en objet EvenementEdt
                            $cours = $this->getCourse($diplome, $course, $enseignant);
                            // recherche le cours dans l'intranet
                            $coursIntranet = $this->findCoursIntranet($cours);

                            // si le cours n'est pas trouvé dans l'intranet mais qu'il existe dans edusign
                            if (empty($coursIntranet) && $course['API_ID']) {
                                // si il n'existe pas de cours avec cet API_ID dans l'intranet
                                if (!$this->edtManager->findCourse($cours->source, $course['API_ID'])) {
                                    // supprimer le cours dans edusign
                                    $this->deleteCourseEduSign($course, $keyEduSign, $result, $cours);
                                } // si il en existe un
                                else {
                                    // envoyer le cours dans edusign
                                    $this->updateCourseEduSign($this->edtManager->findCourse($cours->source, $course['API_ID']), $course, $keyEduSign, $result, $cours);
                                }
                            } // si le cours est trouvé dans l'intranet et qu'il est unique
                            else {
                                // récupère le cours
                                $coursIntranet = $coursIntranet[0];

                                // si le cours est trouvé dans l'intranet et qu'il n'est pas lié à son equivalent dans edusign
                                // ou que l'api_id est différent
                                if (($coursIntranet && !$course['API_ID']) || ($coursIntranet->getId() !== (int)$course['API_ID'])) {
                                    // envoyer le cours dans edusign
                                    $this->updateCourseEduSign($coursIntranet, $course, $keyEduSign, $result, $cours);
                                } // si le cours est trouvé dans l'intranet mais qu'il n'a pas d'ID EduSign mais qu'il existe dans edusign
                                elseif ($coursIntranet && !$coursIntranet->getIdEduSign() && $course['API_ID']) {
                                    // rétablir le lien entre le cours intranet et edusign (si l'api_id est le même)
                                    $this->linkCourseEduSign($coursIntranet, $course);
                                }
                            }
                        }
                    }
                    $result['success']['messages'] = 'Cours mis à jour pour le diplôme ' . $diplome->getLibelle();
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
        //transformer la date en format Y-m-d au lieu de Y-m-d H:i:s
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
