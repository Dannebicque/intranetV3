<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Exceptions/ColumnWithSameNameExistException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:39
 */

namespace App\Components\Table\Exceptions;


use Exception;

class ColumnWithSameNameExistException extends Exception
{
    protected $message = 'Une colonne avec le même nom existe déjà dans le tableau';

}
