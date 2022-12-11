<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/DTO/ReponsesUser.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 14:25
 */

namespace App\Components\Questionnaire\DTO;

use App\Entity\QuestChoix;

class ReponsesUser
{
    protected array $reponses = [];

    public function addReponse(QuestChoix $reponse): void
    {
        $this->reponses[$reponse->getQuestion()->getCle()] = $reponse;
    }

    public function getReponses(): array
    {
        return $this->reponses;
    }

    public function getReponse($cle)
    {
        return $this->reponses[$cle] ?? null;
    }
}
