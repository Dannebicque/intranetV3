<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/AbstractEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2021 15:47
 */

namespace App\Classes\Edt;


use App\Classes\Matieres\TypeMatiereManager;

abstract class AbstractEdt
{
    private TypeMatiereManager $typeMatiereManager;

    /**
     * @required
     */
    public function setTypeMatiereManager(TypeMatiereManager $typeMatiereManager)
    {
        $this->typeMatiereManager = $typeMatiereManager;
    }
}
