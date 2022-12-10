<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/DTO/ListeChoix.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Questionnaire\DTO;

use App\Components\Questionnaire\Interfaces\QuestionnaireChoixInterface;
use App\Entity\QuestChoix;

class ListeChoix
{
    public array $listeChoix = [];

    public function addChoix(QuestChoix $choix, string $cle): void
    {
        if (!isset($this->listeChoix[$cle])) {
            $this->listeChoix[$cle] = new Choix();
        }

        ++$this->listeChoix[$cle]->nbReponsesTotal;

        $cleR = $choix->getValeur();
        if (!array_key_exists($cleR, $this->listeChoix[$cle]->totalReponses)) {
            $this->listeChoix[$cle]->totalReponses[$cleR] = 0;
        }

        ++$this->listeChoix[$cle]->totalReponses[$cleR];
    }

    public function getChoix(?string $cle)
    {
        return $this->listeChoix[$cle] ?? null;
    }
}
