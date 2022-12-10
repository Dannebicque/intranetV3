<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/DTO/Section.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/11/2021 09:29
 */

namespace App\Components\Questionnaire\DTO;

use Doctrine\Common\Collections\Collection;

class Section
{
    public Collection $questions;

    public function __construct(
        public string $typeSection,
        public ?string $titre,
        public int $id_section,
        public int $id_questionnaire_section,
        public int|string $ordre,
        public ?int $questionnaire_id,
        public ?string $texte_explicatif = '',
        public array $config = []
    ) {
    }

    public function setQuestions(Collection|array $questions): void
    {
        $this->questions = $questions;
    }
}
