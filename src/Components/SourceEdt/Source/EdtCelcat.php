<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Source/EdtCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2024 18:06
 */

namespace App\Components\SourceEdt\Source;

use App\Classes\Edt\Calendrier;
use App\Components\SourceEdt\Adapter\EdtCelcatAdapter;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\DTO\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\EdtCelcatRepository;

class EdtCelcat extends AbstractEdt implements EdtInterface
{
    public const SOURCE = 'celcat';

    public function __construct(
        private readonly EdtCelcatRepository $edtCelcatRepository,
        private readonly EdtCelcatAdapter    $edtCelcatAdapter,)
    {
    }

    public function getPlanningPersonnelSemaine(
        Personnel          $personnel,
        int                $semaine,
        AnneeUniversitaire $anneeUniversitaire,
        array              $matieres,
        array              $groupes
    ): EvenementEdtCollection
    {
        $edts = $this->edtCelcatRepository->findEdtProf($personnel->getId(), $semaine, $anneeUniversitaire);

        return $this->edtCelcatAdapter->collection($edts, $matieres, $groupes);
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire, array $groupes): EvenementEdtCollection
    {
        $evts = $this->edtCelcatRepository->findEdtSemestre($semestre, $anneeUniversitaire);

        return $this->edtCelcatAdapter->collection($evts, $matieres, $groupes);
    }

    public function getPlanningEduSign(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire, array $groupes): EvenementEdtCollection
    {
        $evts = $this->edtCelcatRepository->findEdtEduSign();

        return $this->edtCelcatAdapter->collection($evts, $matieres, $groupes);
    }

    public function find(int $event, array $matieres = [], array $groupes = []): EvenementEdt
    {
        $evt = $this->edtCelcatRepository->find($event);

        return $this->edtCelcatAdapter->single($evt, $matieres, $groupes);
    }

    public function findOne(int $eventId, ?Matiere $matiere, ?Groupe $groupe): EvenementEdt
    {
        $evt = $this->edtCelcatRepository->find($eventId);
        $matiere = $matiere ? [$matiere] : [];
        $groupe = $groupe ? [$groupe] : [];
        $groupe = $this->transformeGroupe($groupe);
        $matiere = $this->transformeMatiere($matiere, $evt->getTypeIdMatiere());

        return $this->edtCelcatAdapter->single($evt, $matiere, $groupe);
    }

    private function transformeGroupe(array $groupes): array
    {
        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getCodeApogee()] = $groupe;
        }

        return $tGroupes;
    }

    private function transformeMatiere(array $matieres, $typeIdMatiere): array
    {
        $tMatieres = [];
        foreach ($matieres as $matiere) {
            $tMatieres[$typeIdMatiere] = $matiere;
        }

        return $tMatieres;
    }

    public function recupereEdtJourBorne(
        Semestre $semestre,
        array $matieres,
        int $jourSemaine,
        int $semaineFormation,
        array              $groupes,
        AnneeUniversitaire $anneeUniversitaire
    ): EvenementEdtCollection {
        // TODO: Implement recupereEdtJourBorne() method.
        return new EvenementEdtCollection();
    }

    public function getPlanningSemestreSemaine(
        Semestre $semestre,
        int $semaine,
        AnneeUniversitaire $anneeUniversitaire,
        array $matieres,
        array $groupes
    ): EvenementEdtCollection {
        $evts = $this->edtCelcatRepository->findEdtSemestreSemaine($semestre, $semaine, $anneeUniversitaire);
        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getCodeApogee()] = $groupe;
        }

        $tMatieres = [];
        foreach ($matieres as $matiere) {
            $tMatieres[$matiere->getTypeIdMatiere()] = $matiere;
        }

        return $this->edtCelcatAdapter->collection($evts, $tMatieres, $tGroupes);
    }

    public function findEdtProf(Personnel $personnel, int $semaineFormation, AnneeUniversitaire $anneeUniversitaire, array $matieres = [], array $groupes = []): EvenementEdtCollection
    {
        $evts = $this->edtCelcatRepository->findEdtProf($personnel, $semaineFormation, $anneeUniversitaire);

        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getCodeApogee()] = $groupe;
        }

        return $this->edtCelcatAdapter->collection($evts, $this->matieres, $tGroupes);
    }

    public function initPersonnel(
        Personnel $personnel,
        Calendrier $calendrier,
        AnneeUniversitaire $anneeUniversitaire,
        array $matieres = []
    ): array {
        $this->calendrier = $calendrier;
        $this->user = $personnel;
        $this->matieres = $matieres;
        $this->init($anneeUniversitaire, Constantes::FILTRE_EDT_PROF, $personnel->getId(), $calendrier->semaine);
        $this->calculEdt();

        return $this->getEvenementsAsArray();
    }

    public function initSemestre(
        Semestre $semestre,
        Calendrier $calendrier,
        AnneeUniversitaire $anneeUniversitaire,
        array $matieres = [],
        array $groupes = [],
    ): EvenementEdtCollection {
        $this->calendrier = $calendrier;
        $this->semestre = $semestre;
        $this->matieres = $matieres;
        $this->groupes = $groupes;
        $this->init($anneeUniversitaire, Constantes::FILTRE_EDT_PROMO, $semestre->getId(), $calendrier->semaine);
        $this->calculEdt();

        return $this->evenements;
    }

    public function calculEdt(): bool
    {
        switch ($this->filtre) {
            case Constantes::FILTRE_EDT_PROMO:
                $this->evenements = $this->getPlanningSemestreSemaine($this->semestre, $this->calendrier->semaineFormationIUT, $this->anneeUniversitaire, $this->matieres, $this->groupes);
                break;
            case Constantes::FILTRE_EDT_PROF:
                $this->evenements = $this->findEdtProf($this->user, $this->calendrier->semaineFormationIUT, $this->anneeUniversitaire);

                break;
//            case Constantes::FILTRE_EDT_ETUDIANT:
//                $pl = $this->celcatEventsRepository->findEdtEtu($this->user, $this->semaineFormationIUT, $this->anneeUniversitaire);
//                if (null !== $pl) {
//                    $this->planning = $this->transformeIndividuel($pl);
//                } else {
//                    return false;
//                }
//                break;
        }

        return false;
    }

    public function setMatiere(Matiere $matiere)
    {
        $this->matiere = $matiere;


    }

    public function getCurrentEventEtudiant(Etudiant $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt
    {
        // TODO: Implement getCurrentEventEtudiant() method.
        return null;
    }

    public function getNextEventEtudiant(Etudiant $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt
    {
        // TODO: Implement getNextEventEtudiant() method.
        return null;
    }

    public function getCurrentEventPersonnel(Personnel $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt
    {
        // TODO: Implement getCurrentEventPersonnel() method.
        return null;
    }

    public function getNextEventPersonnel(Personnel $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt
    {
        // TODO: Implement getNextEventPersonnel() method.
        return null;
    }
}
