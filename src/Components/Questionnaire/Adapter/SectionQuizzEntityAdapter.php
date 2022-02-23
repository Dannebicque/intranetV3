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
use App\Entity\QuestionnaireQuestionnaireSection;

class SectionQuizzEntityAdapter
{
    protected Section $section;

    public function __construct(QuestionnaireQuestionnaireSection $section)
    {
        $this->section = new Section(
            $section->getSection()->getTypeSection(),
            $section->getSection()->getTitre(),
            $section->getSection()->getId(),
            $section->getId(),
            $section->getOrdre(),
            $section->getQuestionnaireQuizz()->getId(),
            $section->getSection()->getTextExplicatif(),
            $section->getSection()->getConfig(),
            $section->getConfig()
        );

        $this->section->setQuestions($section->getSection()->getQualiteSectionQuestions());
    }

    public function getSection(): Section
    {
        return $this->section;
    }
}
