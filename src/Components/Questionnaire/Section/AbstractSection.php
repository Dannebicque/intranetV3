<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/AbstractSection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:00
 */

namespace App\Components\Questionnaire\Section;


abstract class AbstractSection
{
    public ?int $id = null;
    public ?int $questionnaire_section_id = null;
    public int $ordre = 1;
    public ?string $titre;
    public ?string $text_explicatif;

    public function getVars()
    {
        return [
            'id' => $this->id,
            'questionnaire_section_id' => $this->questionnaire_section_id,
            'ordre' => $this->ordre,
            'titre' => $this->titre,
            'text_explicatif' => $this->text_explicatif,
        ];
    }
}
