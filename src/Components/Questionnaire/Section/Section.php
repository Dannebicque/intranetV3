<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/Section.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/11/2021 12:03
 */

namespace App\Components\Questionnaire\Section;

use App\Components\Questionnaire\Adapter\QuestionnaireQuestionAdapter;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\DTO\ReponsesEtudiant;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;

class Section extends AbstractSection
{
    public const LABEL = 'question.section';
    public string $type_calcul = '';

    public function getQuestions(): array
    {
        return $this->questions->getQuestions();
    }

    public function getVars(): array
    {
        return array_merge(parent::getVars(), [
            'ordre' => $this->section->ordre,
            'titre' => $this->section->titre,
            'questions' => $this->getQuestions(),
        ]);
    }

    public function initConfigGlobale(?array $config = []): void
    {
    }

    public function initConfigSection(?array $config = []): void
    {
    }

    public function getSection(): Section
    {
        return $this;
    }

    /**
     * @throws \App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException
     */
    public function prepareQuestions(array $options = [], ?ReponsesEtudiant $reponsesEtudiant = null): void
    {
        foreach ($this->section->questions as $question) {
            $questionnaireQuestionAdapter = new QuestionnaireQuestionAdapter($this->questionnaireRegistry);
            for ($i = 0; $i < $this->nbParties; ++$i) {
                $this->addQuestion(
                    $questionnaireQuestionAdapter->createFromEntity(
                        $this,
                        $question,
                        $i,
                    array_merge(['mode' => AbstractQuestionnaire::MODE_EDITION], $options), $reponsesEtudiant)->getQuestion());
            }
        }
    }

    public function addQuestion(AbstractQuestion $question): void
    {
        //ajouter dans la section concernée...
        $this->questions->addQuestion($question);
    }
}
