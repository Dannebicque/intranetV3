<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/SemestreLienEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/08/2022 09:26
 */

namespace App\Enums;

enum SemestreLienEnum: string
{
    case PRECEDENT = 'precedent';
    case SUIVANT = 'suivant';
    case DECALE = 'decale';
    case SANS = '';
}
