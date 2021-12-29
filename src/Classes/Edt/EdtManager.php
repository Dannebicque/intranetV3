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
    private EdtIntranet $edtIntranet;
    private EdtCelcat $edtCelcat;
    private EdtAde $edtAde;

    public function __construct(EdtIntranet $edtIntranet, EdtCelcat $edtCelcat, EdtAde $edtAde)
    {
        $this->edtIntranet = $edtIntranet;
        $this->edtCelcat = $edtCelcat;
        $this->edtAde = $edtAde;

        $this->tabSources[self::EDT_CELCAT] = $edtCelcat;
        $this->tabSources[self::EDT_ADE] = $edtAde;
        $this->tabSources[self::EDT_INTRANET] = $edtIntranet;
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres = [])
    {
        switch ($this->getSourceEdt($semestre)) {
            case self::EDT_CELCAT:
                return $this->edtCelcat->getPlanningSemestre($semestre);
            case self::EDT_INTRANET:
                return $this->edtIntranet->getPlanningSemestre($semestre, $matieres);
            case self::EDT_ADE:
                return $this->edtAde->getPlanningSemestre($semestre);
        }
    }

    private function getSourceEdt($objet)
    {
        if (true === $objet->getDiplome()?->getDepartement()?->getOptUpdateCelcat()) {
            return self::EDT_CELCAT;
        }

        return self::EDT_INTRANET;
    }

    public function getManager(string $source): ?EdtInterface
    {
        if (array_key_exists($source, $this->tabSources)) {
            return $this->tabSources[$source];
        }

        return null;
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

    private function getSourceFromString(string $idEvent)
    {
        return explode('_', $idEvent)[0];
    }

    private function getIdFromString(string $idEvent)
    {
        return explode('_', $idEvent)[1];
    }
}
