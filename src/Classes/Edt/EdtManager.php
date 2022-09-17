<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/EdtManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/09/2022 17:57
 */

namespace App\Classes\Edt;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;

class EdtManager
{
    final public const EDT_CELCAT = 'celcat';
    final public const EDT_ADE = 'ade';
    final public const EDT_INTRANET = 'intranet';
    protected string $source;

    private array $tabSources = [];

    public function __construct(
        private readonly EdtIntranet $edtIntranet,
        private readonly EdtCelcat $edtCelcat,
        private readonly EdtAde $edtAde
    ) {
        $this->tabSources[self::EDT_CELCAT] = $edtCelcat;
        $this->tabSources[self::EDT_ADE] = $edtAde;
        $this->tabSources[self::EDT_INTRANET] = $edtIntranet;
    }

    public function getPlanningSemestre(
        Semestre $semestre,
        array $matieres,
        AnneeUniversitaire $anneeUniversitaire,
        array $groupes
    ): ?EvenementEdtCollection {
        switch($this->getSourceEdt($semestre)){
            case self::EDT_CELCAT:
             $this->source = self::EDT_CELCAT;
                return $this->edtCelcat->getPlanningSemestre($semestre, $matieres, $anneeUniversitaire, $groupes);
            case self::EDT_INTRANET:
                $this->source = self::EDT_INTRANET;
                return $this->edtIntranet->getPlanningSemestre($semestre, $matieres, $anneeUniversitaire, $groupes);
            case self::EDT_ADE:
                $this->source = self::EDT_INTRANET;
                return $this->edtAde->getPlanningSemestre($semestre, $matieres, $anneeUniversitaire);
            default:
                return null;
        }
    }

    public function getPlanningSemestreSemaine(
        Semestre $semestre,
        int $semaine,
        array $matieres,
        array $groupes,
        AnneeUniversitaire $anneeUniversitaire
    ): ?EvenementEdtCollection {

        switch($this->getSourceEdt($semestre)){
            case self::EDT_CELCAT:
                $this->source = self::EDT_CELCAT;
                return $this->edtCelcat->getPlanningSemestreSemaine($semestre, $semaine, $matieres, $groupes,
                    $anneeUniversitaire);
            case self::EDT_INTRANET:
                $this->source = self::EDT_INTRANET;
                return $this->edtIntranet->getPlanningSemestreSemaine($semestre, $semaine, $matieres,
                    $groupes, $anneeUniversitaire);
            case self::EDT_ADE:
                $this->source = self::EDT_INTRANET;
                return $this->edtAde->getPlanningSemestreSemaine($semestre, $semaine, $matieres, $groupes,
                    $anneeUniversitaire);
            default:
                return null;
        }
    }

    private function getSourceEdt(mixed $objet): string
    {
        if (true === $objet->getDiplome()?->getDepartement()?->getOptUpdateCelcat()) {
            return self::EDT_CELCAT;
        }

        return self::EDT_INTRANET;
    }

    public function getManager(string $source): ?EdtInterface
    {
        return $this->tabSources[$source] ?? null;
    }

    public function recupereEDTBornes(
        int $semaineFormation,
        Semestre $semestre,
        string $jourSemaine,
        array $matieres,
        array $groupes
    ): EvenementEdtCollection {
        return $this->getManager($this->getSourceEdt($semestre))?->recupereEdtJourBorne($semestre, $matieres,
            $jourSemaine, $semaineFormation, $groupes);
    }

    public function getEvent(string $idEvent, array $matieres = [], array $groupes = []): ?EvenementEdt
    {
        return $this->getManager($this->getSourceFromString($idEvent))?->find($this->getIdFromString($idEvent),
            $matieres, $groupes);
    }

    private function getSourceFromString(string $idEvent): string
    {
        return explode('_', $idEvent)[0];
    }

    private function getIdFromString(string $idEvent): string
    {
        return explode('_', $idEvent)[1];
    }

    public function getSource(): string
    {
        return $this->source;
    }
}
