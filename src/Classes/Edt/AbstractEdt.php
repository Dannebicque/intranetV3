<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/AbstractEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 14:27
 */

namespace App\Classes\Edt;

use App\Classes\Matieres\TypeMatiereManager;
use Symfony\Contracts\Service\Attribute\Required;

abstract class AbstractEdt
{
    final public const SOURCE_EDT_INTRANET = 'intranet';
    final public const SOURCE_EDT_CELCAT = 'celcat';

    protected TypeMatiereManager $typeMatiereManager;

    #[Required]
    public function setTypeMatiereManager(TypeMatiereManager $typeMatiereManager): void
    {
        $this->typeMatiereManager = $typeMatiereManager;
    }
}
