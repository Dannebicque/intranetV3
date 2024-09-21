<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Editable/EditableInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2024 17:48
 */

namespace App\Classes\Editable;

interface EditableInterface
{
    public function updateEditable(string $name, $value): bool;
}
