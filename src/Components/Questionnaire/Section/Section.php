<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Section/Section.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:39
 */

namespace App\Components\Questionnaire\Section;

use App\Components\Questionnaire\Adapter\QuestionnaireQuestionAdapter;
use App\Components\Questionnaire\DTO\ListeChoix;
use App\Components\Questionnaire\DTO\ReponsesUser;
use App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use JsonException;

class Section extends AbstractSection
{
    final public const LABEL = 'question.section';
    public string $alignement = '';

    public function getQuestions(): array
    {
        return $this->questions->getQuestions();
    }

    public function getVars(): array
    {
        return array_merge(parent::getVars(), [
            'ordre' => $this->section->ordre,
            'titre' => $this->section->titre,
            'text_explicatif' => $this->section->texte_explicatif,
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
     * @throws TypeQuestionNotFoundException
     * @throws JsonException
     */
    public function prepareQuestions(array $options = [], ?ReponsesUser $reponsesUser = null): void
    {
        foreach ($this->section->questions as $question) {
            $questionnaireQuestionAdapter = new QuestionnaireQuestionAdapter($this->questionnaireRegistry,
                $this->graphRegistry);
            for ($i = 0; $i < $this->nbParties; ++$i) {
                if ($question->getQuestionParent() === null) {
                    $this->addQuestion(
                        $questionnaireQuestionAdapter->createFromEntity(
                            $this,
                            $question,
                            $i,
                            $options)->setReponse($reponsesUser)->getQuestion());
                }
            }
        }
    }

    public function addQuestion(AbstractQuestion $question): void
    {
        // ajouter dans la section concernée...
        $this->questions->addQuestion($question);
    }

    public function calculResultatsQuestions(array $options, ListeChoix $listeChoix): void
    {
        foreach ($this->section->questions as $question) {
            $questionnaireQuestionAdapter = new QuestionnaireQuestionAdapter($this->questionnaireRegistry,
                $this->graphRegistry);
            $this->addQuestion(
                $questionnaireQuestionAdapter->createFromEntity(
                    $this,
                    $question,
                    0,
                    $options)->setReponsesEtudiants($listeChoix)->getQuestion());
        }
    }
}
