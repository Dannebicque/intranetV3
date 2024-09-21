<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 18:12
 */

namespace App\Classes\EduSign;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Adapter\IntranetEdtEduSignAdapter;
use App\Classes\EduSign\Api\ApiCours;
use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\EvenementEdt;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\ApcReferentielRepository;
use App\Repository\CalendrierRepository;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;

class UpdateEdt
{

    private ?EvenementEdt $evenement;
    private ?string $cleApi;

    public function __construct(
        private readonly ApiCours           $apiCours,
        private readonly EdtManager         $edtManager,
        private readonly TypeMatiereManager $typeMatiereManager,
        protected SemestreRepository        $semestreRepository,
        protected PersonnelRepository       $personnelRepository,
        protected CreateEnseignant          $createEnseignant,
        protected DepartementRepository     $departementRepository,
        protected EdtPlanningRepository     $edtPlanningRepository,
        protected GroupeRepository          $groupeRepository,
        protected DiplomeRepository         $diplomeRepository,
        protected ApcReferentielRepository  $apcReferentielRepository,
        protected CalendrierRepository      $CalendrierRepository,
    )
    {
    }

    public function update(?string $keyEduSign, ?int $opt, string $date = ''): ?array
    {
        $result = ['success' => true, 'messages' => []];
        $diplomes = $keyEduSign === null
            ? $this->diplomeRepository->findAllWithEduSign()
            : $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);

        try {
            foreach ($diplomes as $diplome) {
                $keyEduSign = $keyEduSign ?? $diplome->getKeyEduSign();
                $semestres = $this->semestreRepository->findByDiplome($diplome);
                list($start, $end) = $this->calculStartEndDates($opt, $date);
                $semaineReelle = date('W');

                foreach ($semestres as $semestre) {
                    $eventSemaine = $this->CalendrierRepository->findOneBy([
                        'semaineReelle' => $semaineReelle,
                        'anneeUniversitaire' => $semestre->getAnneeUniversitaire()
                    ]);
                    $semaine = $eventSemaine->getSemaineFormation();
                    $matieresSemestre = $this->getMatieresSemestre($semestre);
                    $groupes = $this->groupeRepository->findBySemestre($semestre);
                    $edt = $this->edtManager->getPlanningSemestreSemaine(
                        $semestre, $semaine, $semestre->getAnneeUniversitaire(), $matieresSemestre, $groupes
                    );

                    foreach ($edt->evenements as $this->evenement) {
                        if ($this->evenement->dateObjet->isBetween($start, $end)) {
                            $this->processEvent($diplome, $keyEduSign);
                        }
                    }
                }
            }
        } catch (\Exception $e) {
            $result['success'] = false;
            $result['messages'][] = $e->getMessage();
        }

        return $result;
    }

    private function calculStartEndDates(?int $opt, string $date): array
    {
        switch ($opt) {
            case 1:
                $start = Carbon::today();
                $end = Carbon::today()->next('saturday');
                break;
            case 2:
                $start = Carbon::yesterday();
                $end = Carbon::today();
                break;
            case 3:
                $start = Carbon::createFromFormat('d-m-Y', $date);
                $end = Carbon::createFromFormat('d-m-Y', $date)->next('saturday');
                break;
            default:
                $start = Carbon::today();
                $end = Carbon::today()->next('saturday');
        }
        return [$start, $end];
    }

    public function getMatieresSemestre(Semestre $semestre): array
    {
        $matieres = $this->typeMatiereManager->findBySemestre($semestre);
        $matieresSemestre = [];
        foreach ($matieres as $matiere) {
            if ($matiere->getSemestres()->contains($semestre)) {
                $matieresSemestre[$matiere->getTypeIdMatiere()] = $matiere;
            }
        }
        return $matieresSemestre;
    }

    public function processEvent(Diplome $diplome, ?string $keyEduSign): void
    {
        $event = $this->evenement;
        if ($event->matiere !== null && $event->matiere !== "Inconnue" && $event->groupeObjet !== null && $event->personnelObjet !== null && $event->semestre !== null) {
            $course = (new IntranetEdtEduSignAdapter($event))->getCourse();
            $eduSignCourse = $this->apiCours->getCourseIdByApiId($event->id, $keyEduSign);
            // si le cours n'existe pas dans EduSign et n'a pas de clé
            if ($course->id_edu_sign === null && !$eduSignCourse) {
                $enseignant = $event->personnelObjet;
                if ($enseignant && (empty($enseignant->getIdEduSign()) || !array_key_exists($diplome->getId(), $enseignant->getIdEduSign()))) {
                    $this->createEnseignant->update($enseignant, $diplome, $keyEduSign);
                }
                $this->sendUpdateAddCourse($keyEduSign);
            } // si le cours existe dans EduSign
            elseif ($course->id_edu_sign !== null && $eduSignCourse) {
                $this->apiCours->updateCourse($course, $keyEduSign);
            } // si le cours existe dans EduSign mais n'a pas de clé
            elseif ($course->id === null && $eduSignCourse) {
                $this->evenement->idEduSign = $eduSignCourse['ID'];
                $this->sendUpdateCourse($keyEduSign);
            }
        }
    }

    public function sendUpdateAddCourse(?string $keyEduSign): string
    {
        $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();
        if ($course !== null) {
            $this->apiCours->addCourse($course, $keyEduSign);
            return 'cours ajouté - id : ' . $this->evenement->id;
        }
        return 'cours non trouvé - id : ' . $this->evenement->id;
    }

    public function sendUpdateCourse(?string $keyEduSign): string
    {
        $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();
        if ($course !== null) {
            $this->apiCours->updateCourse($course, $keyEduSign);
            return 'cours mis à jour - id : ' . $this->evenement->id;
        }
        return 'cours non trouvé - id : ' . $this->evenement->id;
    }
}
