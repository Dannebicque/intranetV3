<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Source/EdtCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 11:23
 */

namespace App\Components\SourceEdt\Source;

use App\Classes\Edt\Calendrier;
use App\Components\SourceEdt\Adapter\EdtCelcatAdapter;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\EdtCelcatRepository;

class EdtCelcat extends AbstractEdt implements EdtInterface
{
    public const SOURCE = 'celcat';

    public function __construct(
        private readonly EdtCelcatRepository $edtCelcatRepository,
        private readonly EdtCelcatAdapter $edtCelcatAdapter)
    {
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire, array $groupes): EvenementEdtCollection
    {
        $evts = $this->edtCelcatRepository->findEdtSemestre($semestre, $anneeUniversitaire);

        return $this->edtCelcatAdapter->collection($evts, $matieres, $groupes);
    }

    public function find(int $event, array $matieres = [], array $groupes = []): EvenementEdt
    {
        $evt = $this->edtCelcatRepository->find($event);

        return $this->edtCelcatAdapter->single($evt, $matieres, $groupes);
    }

    public function recupereEdtJourBorne(
        Semestre $semestre,
        array $matieres,
        int $jourSemaine,
        int $semaineFormation,
        array $groupes
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

    public function getNextEvent(): ?EvenementEdt
    {
        // TODO: Implement getNextEvent() method.
        return null;
    }

    public function getCurrentEvent(): ?EvenementEdt
    {
        // TODO: Implement getCurrentEvent() method.
        return null;
    }
}
