<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Sections.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 08:58
 */

namespace App\Components\Questionnaire;


class Sections
{
    private array $sections = [];

    public function addSection(Section $section)
    {
        $this->sections[$section->getSection()->ordre] = $section;
    }

    public function getSections(): array
    {
        return $this->sections;
    }

    public function getSection(int $ordre)
    {
        return $this->sections[$ordre];
    }
}
