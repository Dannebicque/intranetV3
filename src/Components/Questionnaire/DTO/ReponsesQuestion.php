<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/DTO/ReponsesQuestion.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Questionnaire\DTO;

class ReponsesQuestion
{
    public int $nbReponses = 0;
    public int $nbReponsesTotal = 0;
    public array $autre = [];
}
