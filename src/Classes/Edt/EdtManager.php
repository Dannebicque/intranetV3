<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/EdtManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2021 14:51
 */

namespace App\Classes\Edt;

use App\Entity\Semestre;

class EdtManager
{
    public const EDT_CELCAT = 'celcat';
    public const EDT_ADE = 'ade';
    public const EDT_INTRANET = 'intranet';

    private EdtIntranet $edtIntranet;
    private EdtCelcat $edtCelcat;
    private EdtAde $edtAde;

    public function __construct(EdtIntranet $edtIntranet, EdtCelcat $edtCelcat, EdtAde $edtAde)
    {
        $this->edtIntranet = $edtIntranet;
        $this->edtCelcat = $edtCelcat;
        $this->edtAde = $edtAde;
    }


    public function getPlanningSemestre(Semestre $semestre)
    {
        switch ($this->getSourceEdt($semestre)) {
            case self::EDT_CELCAT:
                return $this->edtCelcat->getPlanningSemestre($semestre);
            case self::EDT_INTRANET:
                return $this->edtIntranet->getPlanningSemestre($semestre);
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
}
