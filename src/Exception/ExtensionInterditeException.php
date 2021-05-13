<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Exception/ExtensionInterditeException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2021 11:27
 */

namespace App\Exception;

use Exception;

class ExtensionInterditeException extends Exception
{
    protected $message = 'Extension Interdite';
}
