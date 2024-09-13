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

        if ($keyEduSign === null) {
            $diplomes = $this->diplomeRepository->findAllWithEduSign();
        } else {
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
        }

        try {
            foreach ($diplomes as $diplome) {
                if ($keyEduSign === null) {
                    $keyEduSign = $diplome->getKeyEduSign();
                }
                $semestres = $this->semestreRepository->findByDiplome($diplome);

                list($start, $end) = $this->calculStartEndDates($opt, $date);

                $semaineReelle = date('W');

                foreach ($semestres as $semestre) {
                    $eventSemaine = $this->CalendrierRepository->findOneBy(['semaineReelle' => $semaineReelle, 'anneeUniversitaire' => $semestre->getAnneeUniversitaire()]);
                    $semaine = $eventSemaine->getSemaineFormation();

                    $matieresSemestre = $this->getMatieresSemestre($semestre);
                    $groupes = $this->groupeRepository->findBySemestre($semestre);
                    $edt = $this->edtManager->getPlanningSemestreSemaine($semestre, $semaine, $semestre->getAnneeUniversitaire(), $matieresSemestre, $groupes);
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
        if (!($this->evenement->matiere === null || $this->evenement->matiere === "Inconnue" || $this->evenement->groupeObjet === null || $this->evenement->personnelObjet === null || $this->evenement->semestre === null)) {
            $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();
            $eduSignCourse = $this->apiCours->getCourseIdByApiId($this->evenement->id, $keyEduSign);
            if ($course->id_edu_sign == null && !$eduSignCourse) {
                $enseignant = $this->evenement->personnelObjet;
                $departement = $diplome->getDepartement();
                if ($enseignant) {
                    if ($enseignant->getIdEduSign() == '' || $enseignant->getIdEduSign() == null || !array_key_exists($departement->getId(), $enseignant->getIdEduSign())) {
                        $this->createEnseignant->update($enseignant, $departement, $keyEduSign);
                    }
                    $this->sendUpdate($keyEduSign);
                }
            }
        }
    }

    public function sendUpdate(?string $keyEduSign): string
    {
        $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();
        if ($course !== null) {
            dd($this->apiCours->addCourse($course, $keyEduSign));
            $this->apiCours->addCourse($course, $keyEduSign);
            $response = 'cours ajouté - id : ' . $this->evenement->id;
        } else {
            $response = 'cours non trouvé - id : ' . $this->evenement->id;
        }
        return $response;
    }
}
