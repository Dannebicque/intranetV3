<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Adpapter/QuestionnaireSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:00
 */

namespace App\Components\Questionnaire\Adpapter;


use App\Components\Questionnaire\Section;

class QuestionnaireSectionAdapter
{
    protected Section\AbstractSection $section;

    public function __construct($section)
    {
        $this->section = new Section\QuestionsSection();//selon le type de QuestionnaireSection... créer le bon objet
        $this->section->titre = $section->getSection()->getTitre();
        $this->section->text_explicatif = $section->getSection()->getTextExplicatif();
        $this->section->id = $section->getSection()->getId();
        $this->section->questionnaire_section_id = $section->getId();
        $this->section->ordre = $section->getOrdre();
    }

    public function getSection(): Section\AbstractSection
    {
        return $this->section;
    }
}
