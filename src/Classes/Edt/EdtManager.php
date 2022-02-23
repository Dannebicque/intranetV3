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
use App\Entity\Semestre;

class EdtManager
{
    public const EDT_CELCAT = 'celcat';
    public const EDT_ADE = 'ade';
    public const EDT_INTRANET = 'intranet';

    private array $tabSources = [];

    public function __construct(private EdtIntranet $edtIntranet, private EdtCelcat $edtCelcat, private EdtAde $edtAde)
    {
        $this->tabSources[self::EDT_CELCAT] = $edtCelcat;
        $this->tabSources[self::EDT_ADE] = $edtAde;
        $this->tabSources[self::EDT_INTRANET] = $edtIntranet;
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres = []): ?EvenementEdtCollection
    {
        return match ($this->getSourceEdt($semestre)) {
            self::EDT_CELCAT => $this->edtCelcat->getPlanningSemestre($semestre),
            self::EDT_INTRANET => $this->edtIntranet->getPlanningSemestre($semestre, $matieres),
            self::EDT_ADE => $this->edtAde->getPlanningSemestre($semestre),
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
