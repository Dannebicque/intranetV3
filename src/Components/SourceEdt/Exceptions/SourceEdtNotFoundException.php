<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Exceptions/SourceEdtNotFoundException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/09/2022 18:50
 */

namespace App\Components\SourceEdt\Exceptions;

use Exception;

class SourceEdtNotFoundException extends Exception
{
    protected $message = 'Cette source d\'edt n\'existe pas';
}
