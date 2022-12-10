<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Sections.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 08:58
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\Section\AbstractSection;

class Sections
{
    private array $sections = [];

    public function addSection(AbstractSection $section): void
    {
        $section->typeSection = $section::class;
        $section->arrayKey = count($this->sections);
        $this->sections[] = $section;
    }

    public function getSections(): array
    {
        return $this->sections;
    }

    public function getSection(int $ordre): AbstractSection
    {
        return $this->sections[$ordre];
    }
}
