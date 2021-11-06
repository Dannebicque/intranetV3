<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Adpapter/QuestionnaireAdapterInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2021 21:35
 */

namespace App\Components\Questionnaire\Adapter;


use App\Components\Questionnaire\DTO\AbstractQuestionnaire;

interface QuestionnaireAdapterInterface
{
    public function getQuestionnaire(): AbstractQuestionnaire;
}
