<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Adpapter/SectionQualiteEntityAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/11/2021 10:30
 */

namespace App\Components\Questionnaire\Adapter;

use App\Components\Questionnaire\DTO\Section;
use App\Entity\QuestSection;

class SectionQualiteEntityAdapter
{
    protected Section $section;

    public function __construct(QuestSection $section)
    {
        $this->section = new Section(
            $section->getTypeSection(),
            $section->getTitre(),
            $section->getId(),
            $section->getId(),
            $section->getOrdre(),
            $section->getQuestionnaire()?->getId(),
            $section->getTextExplicatif(),
            $section->getConfig()
        );

        $this->section->setQuestions($section->getQuestQuestions());
    }

    public function getSection(): Section
    {
        return $this->section;
    }
}
