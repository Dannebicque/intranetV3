<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/AbstractEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/09/2021 13:00
 */

namespace App\Classes\Edt;

use App\Classes\Matieres\TypeMatiereManager;

abstract class AbstractEdt
{
    public const SOURCE_EDT_INTRANET = 'intranet';
    public const SOURCE_EDT_CELCAT = 'celcat';

    protected TypeMatiereManager $typeMatiereManager;

    /**
     * @required
     */
    public function setTypeMatiereManager(TypeMatiereManager $typeMatiereManager): void
    {
        $this->typeMatiereManager = $typeMatiereManager;
    }
}
