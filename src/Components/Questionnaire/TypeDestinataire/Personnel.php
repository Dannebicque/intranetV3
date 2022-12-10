<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeDestinataire/Personnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/11/2022 17:43
 */

namespace App\Components\Questionnaire\TypeDestinataire;

use App\Components\Questionnaire\Interfaces\TypeDestinataireInterface;
use App\Entity\QuestChoixPersonnel;

class Personnel extends AbstractTypeDestinataire implements TypeDestinataireInterface
{
    public const LABEL = 'personnel';
    public const ENTITY = QuestChoixPersonnel::class;

    public function getListe(): array
    {
        // TODO: Implement getListe() method.
    }

    public function getListeDestinataire(): array
    {
        // TODO: Implement getListeDestinataire() method.
    }

    public function send(array $liste): void
    {
        // TODO: Implement send() method.
    }
}
