<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Exceptions/TypeQuestionNotFoundException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2021 11:55
 */

namespace App\Components\Questionnaire\Exceptions;

use Exception;

class TypeQuestionNotFoundException extends Exception
{
    protected $message = 'Le type de question n\'existe pas';
}
