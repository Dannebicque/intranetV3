<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Exception/SemestreNotFoundException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/07/2022 17:13
 */

namespace App\Exception;

use Doctrine\ORM\EntityNotFoundException;
use Exception;

class SemestreNotFoundException extends Exception
{
    //todo: tester avec EntityNotFoundException
    protected $message = 'Semestre non trouvée';
}
