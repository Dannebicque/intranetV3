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
    public string $typeSection;
    public ?string $titre;
    public ?string $texte_explicatif;
    public string $id_section;
    public string $questionnaire_id;
    public string $id_questionnaire_section;
    public string $ordre;
    public ?array $configGlobale;
    public ?array $configQuestionnaire;
    public Collection $questions;

    public function __construct(
        string $typeSection,
        string $titre,
        string $id_section,
        string $id_questionnaire_section,
        string $ordre,
        ?string $texte_explicatif = '',
        ?array $configGlobale = [],
        ?array $configQuestionnaire = [],
        ?int $questionnaireId
    ) {
        $this->typeSection = $typeSection;
        $this->titre = $titre;
        $this->texte_explicatif = $texte_explicatif;
        $this->id_section = $id_section;
        $this->id_questionnaire_section = $id_questionnaire_section;
        $this->ordre = $ordre;
        $this->configGlobale = $configGlobale;
        $this->configQuestionnaire = $configQuestionnaire;
        $this->questionnaire_id = $questionnaireId;
    }

    public function setQuestions(Collection | array $questions)
    {
        $this->questions = $questions;
    }
}
