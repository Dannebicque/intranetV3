<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/EdtManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:02
 */

namespace App\Classes\Edt;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\Semestre;

class EdtManager
{
    public final const EDT_CELCAT = 'celcat';
    public final const EDT_ADE = 'ade';
    public final const EDT_INTRANET = 'intranet';

    private array $tabSources = [];

    public function __construct(
        private readonly EdtIntranet $edtIntranet,
        private readonly EdtCelcat $edtCelcat,
        private readonly EdtAde $edtAde)
    {
        $this->tabSources[self::EDT_CELCAT] = $edtCelcat;
        $this->tabSources[self::EDT_ADE] = $edtAde;
        $this->tabSources[self::EDT_INTRANET] = $edtIntranet;
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdtCollection
    {
        return match ($this->getSourceEdt($semestre)) {
            self::EDT_CELCAT => $this->edtCelcat->getPlanningSemestre($semestre, $matieres, $anneeUniversitaire),
            self::EDT_INTRANET => $this->edtIntranet->getPlanningSemestre($semestre, $matieres, $anneeUniversitaire),
            self::EDT_ADE => $this->edtAde->getPlanningSemestre($semestre, $matieres, $anneeUniversitaire),
            default => null,
        };
    }

    public function getPlanningSemestreSemaine(Semestre $semestre, int $semaine, array $matieres, array $groupes, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdtCollection
    {
        return match ($this->getSourceEdt($semestre)) {
            self::EDT_CELCAT => $this->edtCelcat->getPlanningSemestreSemaine($semestre, $semaine, $matieres, $groupes, $anneeUniversitaire),
            self::EDT_INTRANET => $this->edtIntranet->getPlanningSemestreSemaine($semestre, $semaine, $matieres, $groupes, $anneeUniversitaire),
            self::EDT_ADE => $this->edtAde->getPlanningSemestreSemaine($semestre, $semaine, $matieres, $groupes, $anneeUniversitaire),
            default => null,
        };
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
        array $matieres
    ): EvenementEdtCollection {
        return $this->getManager($this->getSourceEdt($semestre))?->recupereEdtJourBorne($semestre, $matieres,
            $jourSemaine, $semaineFormation);
    }

    public function getEvent(string $idEvent): EvenementEdt
    {
        return $this->getManager($this->getSourceFromString($idEvent))?->find($this->getIdFromString($idEvent));
    }

    private function getSourceFromString(string $idEvent): string
    {
        return explode('_', $idEvent)[0];
    }

    private function getIdFromString(string $idEvent): string
    {
        return explode('_', $idEvent)[1];
    }
}
