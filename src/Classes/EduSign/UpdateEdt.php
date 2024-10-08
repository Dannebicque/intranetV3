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

    public function update(?string $keyEduSign, ?int $opt, ?int $week): ?array
    {
        $diplomes = $keyEduSign === null
            ? $this->diplomeRepository->findAllWithEduSign()
            : $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);

        foreach ($diplomes as $diplome) {
            dump('update courses - ' . $diplome->getLibelle());
            $keyEduSign = $keyEduSign ?? $diplome->getKeyEduSign();
            $semestres = $this->semestreRepository->findByDiplome($diplome);
            list($start, $end) = $this->calculStartEndDates($opt, $week);
            $semaineReelle = $week;

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

                if ($edt->evenements) {
                    foreach ($edt->evenements as $this->evenement) {
                        dump('update courses - ' . $diplome->getLibelle() . ' - ' . $this->evenement->id);
                        if ($this->evenement->dateObjet->isBetween($start, $end)) {
                            dump('processEvent');
                            $result[$this->evenement->id] = $this->processEvent($diplome, $keyEduSign);
                        }
                    }
                }
            }
        }

        return $result;
    }

    private function calculStartEndDates(?int $opt, ?int $week): array
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
                $start = Carbon::now()->setISODate((int)date('Y'), $week)->startOfWeek();
                $end = $start->copy()->endOfWeek();
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

    public function processEvent(Diplome $diplome, ?string $keyEduSign): mixed
    {
        $event = $this->evenement;
        $enseignant = $event->personnelObjet;
        // si l'enseignant n'est pas dans EduSign
        if ($enseignant && (empty($enseignant->getIdEduSign()) || !array_key_exists($diplome->getId(), $enseignant->getIdEduSign()))) {
            $this->createEnseignant->update($enseignant, $diplome, $keyEduSign);
        }
        $result = $this->sendUpdateAddCourse($keyEduSign, $diplome);

        return $result;
    }

    public function sendUpdateAddCourse(?string $keyEduSign, ?Diplome $diplome): mixed
    {
        $course = (new IntranetEdtEduSignAdapter($this->evenement, $diplome))->getCourse();
        $result = $this->apiCours->addCourse($course, $keyEduSign, $diplome);
        return $result;
    }

    public function sendUpdateCourse(?string $keyEduSign): string
    {
        $diplome = $this->diplomeRepository->findOneBy(['keyEduSign' => $keyEduSign]);
        $course = (new IntranetEdtEduSignAdapter($this->evenement, $diplome))->getCourse();
        $result = $this->apiCours->updateCourse($course, $keyEduSign, $diplome);
        return $result;
    }
}
