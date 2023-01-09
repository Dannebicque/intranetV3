<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/DTO/ReponsesUser.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/01/2023 09:33
 */

namespace App\Components\Questionnaire\DTO;

use App\Entity\QuestChoix;

class ReponsesUser
{
    protected array $reponses = [];

    public function addReponse(QuestChoix $reponse): void
    {
        $t = explode('_', $reponse->getCleReponse());
        if (str_starts_with($t[4], 'c')) {
            $this->reponses[$reponse->getQuestion()->getCle()][$t[4]] = $reponse;
        } else {
            $this->reponses[$reponse->getQuestion()->getCle()] = $reponse;
        }
    }

    public function getReponses(): array
    {
        return $this->reponses;
    }

    public function getReponse(string $cle, ?string $sousCle = null): ?QuestChoix
    {
        if (null !== $sousCle && array_key_exists($cle, $this->reponses) && is_array($this->reponses[$cle])) {
            return $this->reponses[$cle][$sousCle] ?? null;
        }

        return $this->reponses[$cle] ?? null;
    }
}
