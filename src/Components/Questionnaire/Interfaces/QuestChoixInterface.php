<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Interfaces/QuestChoixInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/11/2022 19:50
 */

namespace App\Components\Questionnaire\Interfaces;

interface QuestChoixInterface
{
    public function getEmail(): string;

    public function getNom(): string;

    public function getPrenom(): string;

    public function getDisplay(): string;

    public function getCleQuestionnaire(): ?string;
}
