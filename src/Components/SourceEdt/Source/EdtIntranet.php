<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Source/EdtIntranet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2024 17:43
 */

namespace App\Components\SourceEdt\Source;

use App\Classes\Edt\Calendrier;
use App\Components\SourceEdt\Adapter\EdtIntranetAdapter;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\EdtPlanning;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use Carbon\Carbon;

class EdtIntranet extends AbstractEdt implements EdtInterface
{
    public const SOURCE = 'intranet';

    public function __construct(
        private GroupeRepository            $groupeRepository,
        private CalendrierRepository        $calendrierRepository,
        private readonly EdtIntranetAdapter $adapter,
        private readonly EdtPlanningRepository $edtPlanningRepository,
        private readonly EdtIntranetAdapter $edtIntranetAdapter)
    {
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire, array $groupes): EvenementEdtCollection
    {
        $evts = $this->edtPlanningRepository->findAllEdtSemestre($semestre, $anneeUniversitaire);

        return $this->adapter->collection($evts, $matieres, $this->transformeGroupe($groupes));
    }

    public function getPlanningEduSign(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire, array $groupes): EvenementEdtCollection
    {
        $evts = $this->edtPlanningRepository->findEdtEduSign();

        return $this->adapter->collection($evts, $matieres, $this->transformeGroupe($groupes));
    }

    public function find(int $event, array $matieres = [], array $groupes = []): EvenementEdt
    {
        $evt = $this->edtPlanningRepository->find($event);

        return $this->edtIntranetAdapter->single($evt, $matieres, $this->transformeGroupe($groupes));
    }

    public function recupereEdtJourBorne(Semestre $semestre, array $matieres, int $jourSemaine, int $semaineFormation, array $groupes, AnneeUniversitaire $anneeUniversitaire): EvenementEdtCollection
    {
        $evts = $this->edtPlanningRepository->recupereEdtBorne($semaineFormation, $semestre, $jourSemaine, $anneeUniversitaire);

        return $this->edtIntranetAdapter->collection($evts, $matieres, $this->transformeGroupe($groupes));
    }

    public function getPlanningSemestreSemaine(
        Semestre $semestre,
        int      $semaine,
        AnneeUniversitaire $anneeUniversitaire,
        array    $matieres,
        array    $groupes
    ): EvenementEdtCollection
    {
        $evts = $this->edtPlanningRepository->findEdtSemestreSemaine($semestre, $semaine, $anneeUniversitaire);

        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getOrdre()] = $groupe;
        }

        return $this->adapter->collection($evts, $matieres, $tGroupes);
    }

    private function transformeGroupe(array $groupes): array
    {
        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getOrdre()] = $groupe;
        }

        return $tGroupes;
    }

    public function findEdtProf(Personnel $personnel, int $semaineFormation, AnneeUniversitaire $anneeUniversitaire, array $groupes = []): EvenementEdtCollection
    {
        $evts = $this->edtPlanningRepository->findEdtProf($personnel->getId(), $anneeUniversitaire, $semaineFormation);

        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getCodeApogee()] = $groupe;
        }

        return $this->edtIntranetAdapter->collection($evts, $this->matieres, $tGroupes);
    }

    public function initPersonnel(
        Personnel  $personnel,
        Calendrier $calendrier,
        ?AnneeUniversitaire $anneeUniversitaire,
        array      $matieres
    ): array
    {
        $this->calendrier = $calendrier;
        $this->user = $personnel;
        $this->matieres = $matieres;
        $this->init($anneeUniversitaire, Constantes::FILTRE_EDT_PROF, $personnel->getId(), $calendrier->semaine);
        $this->calculEdt();

        return $this->getEvenementsAsArray();
    }

    public function initSemestre(
        Semestre   $semestre,
        Calendrier $calendrier,
        AnneeUniversitaire $anneeUniversitaire,
        array      $matieres = [],
        array      $groupes = [],
    ): EvenementEdtCollection
    {
        $this->calendrier = $calendrier;
        $this->semestre = $semestre;
        $this->matieres = $matieres;
        $this->groupes = $groupes;
        $this->init($anneeUniversitaire, Constantes::FILTRE_EDT_PROMO, $semestre->getId(), $calendrier->semaine);
        $this->calculEdt();

        return $this->evenements;
    }

    public function calculEdt(): void
    {
        switch ($this->filtre) {
            case Constantes::FILTRE_EDT_PROMO:
                $this->evenements = $this->getPlanningSemestreSemaine($this->semestre, $this->calendrier->semaineFormationIUT, $this->anneeUniversitaire, $this->matieres, $this->groupes);

                break;
            case Constantes::FILTRE_EDT_PROF:
                $this->evenements = $this->findEdtProf($this->user,
                    $this->calendrier->semaineFormationIUT, $this->anneeUniversitaire);
                break;
//            case Constantes::FILTRE_EDT_ETUDIANT:
//                $this->groupes();
//                $pl = $this->edtPlanningRepository->findEdtEtu($this->user, $this->semaineFormationIUT,
//                    $this->anneeUniversitaire);
//
//                if (null !== $pl) {
//                    $this->semestre = $this->user->getSemestre();
//                    $this->planning = $this->transformeEtudiant($pl, $this->semestre->getAnnee()->getCouleur());
//                } else {
//                    return false;
//                }
//                break;
//            case Constantes::FILTRE_EDT_MODULE:
//                $this->module = $this->typeMatiereManager->getMatiereFromSelect($this->valeur);
//                $this->semestre = $this->module->getSemestres()->first(); // todo: pas idéal, comment récupérer le semestre du module ? En fait ne doit pas dépendre du semestre... si un module est sur plusieurs semestres.
//                $this->groupes = $this->groupeRepository->findAllGroupes($this->semestre);
//
//                $pl = $this->edtPlanningRepository->findEdtModule($this->module->id, $this->module->typeMatiere,
//                    $this->semaineFormationIUT, $this->anneeUniversitaire);
//                $this->planning = $this->transformeModule($pl);
//                break;
//            case Constantes::FILTRE_EDT_SALLE:
//                $pl = $this->edtPlanningRepository->findEdtSalle($this->valeur, $this->semaineFormationIUT,
//                    $this->anneeUniversitaire);
//                $this->salle = $this->valeur;
//                $this->planning = $this->transformeSalle($pl);
//                break;
//
//            case Constantes::FILTRE_EDT_JOUR:
//                $pl = $this->edtPlanningRepository->findEdtJour($this->valeur,
//                    $this->semaineFormationIUT, $this->anneeUniversitaire);
//
//                $this->jour = $this->valeur;
//                $this->planning = $this->transformeJour($pl);
//                break;
        }
    }

    public function getCurrentEventEtudiant(Etudiant $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt
    {
        $semaine = $this->calendrierRepository->findOneBy([
            'anneeUniversitaire' => $anneeUniversitaire,
            'semaineReelle' => (int)date('W'),
        ]);

        $edts = $this->edtPlanningRepository->findEdtEtu($user, $semaine->getSemaineFormation(), $anneeUniversitaire);

        // TODO: Implement getNextEvent() method.
        return null;
    }

    public function getNextEventEtudiant(Etudiant $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt
    {
        // TODO: Implement getCurrentEvent() method.
        return null;
    }

    public function getCurrentEventPersonnel(
        Personnel          $user,
        AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt
    {
        $semaine = $this->calendrierRepository->findOneBy([
            'anneeUniversitaire' => $anneeUniversitaire,
            'semaineReelle' => (int)date('W'),
        ]);

        $edts = $this->edtPlanningRepository->findEdtProf($user->getId(), $anneeUniversitaire, $semaine->getSemaineFormation());
        $dateJour = new Carbon();
        /** @var EdtPlanning $edt */
        foreach ($edts as $edt) {
            if ($edt->getDate()->isCurrentDay()) {
                return $this->edtIntranetAdapter->single($edt, $this->matieres, $this->groupes);
            }
        }

        return null;
    }

    public function getNextEventPersonnel(Personnel $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt
    {
        $edts = $this->edtPlanningRepository->findEdtProfNextEvent($user->getId(), $anneeUniversitaire);

        if (count($edts) === 1) {
            $groupes = $this->groupeRepository->findByDiplomeAndOrdreSemestre($edts[0]->getDiplome(),
                $edts[0]->getOrdreSemestre());
            $tGroupes = [];
            foreach ($groupes as $groupe) {
                $tGroupes[$groupe->getOrdre()] = $groupe;
            }

            $matieres[] = $this->typeMatiereManager->getMatiereFromSelect($edts[0]->getTypeIdMatiere());
            return $this->edtIntranetAdapter->single($edts[0], $matieres, $tGroupes);
        }

        return null;
    }
}
