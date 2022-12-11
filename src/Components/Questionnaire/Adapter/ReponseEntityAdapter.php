<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Adapter/ReponseEntityAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 15:52
 */

namespace App\Components\Questionnaire\Adapter;

use App\Components\Questionnaire\DTO\Reponse;
use App\Entity\QuestReponse;

class ReponseEntityAdapter
{
    protected Reponse $reponse;

    public function __construct(QuestReponse $questionnaireReponse)
    {
        $this->reponse = new Reponse($questionnaireReponse->getId(), $questionnaireReponse->getLibelle(),
            $questionnaireReponse->getValeur(), $questionnaireReponse->getOrdre(), $questionnaireReponse->getConfig());
    }

    public function getReponse(): Reponse
    {
        return $this->reponse;
    }
}
