<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Reponses.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 15:36
 */

namespace App\Components\Questionnaire;


use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;

class Reponses
{
    private array $reponses = [];

    public function addReponse(Reponse $reponse)
    {
        $this->reponses[] = $reponse;
    }

    public function getReponses(): array
    {
        return $this->reponses;
    }
}
