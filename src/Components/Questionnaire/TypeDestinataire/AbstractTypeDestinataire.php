<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeDestinataire/AbstractTypeDestinataire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/11/2022 17:42
 */

namespace App\Components\Questionnaire\TypeDestinataire;

use App\Entity\QuestQuestionnaire;

abstract class AbstractTypeDestinataire
{
    protected QuestQuestionnaire $questionnaire;

    public function setQuestionnaire(QuestQuestionnaire $questionnaire)
    {
        $this->questionnaire = $questionnaire;

        return $this;
    }

}
