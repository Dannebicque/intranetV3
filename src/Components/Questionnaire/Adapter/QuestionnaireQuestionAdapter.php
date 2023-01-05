<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Adapter/QuestionnaireQuestionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/01/2023 22:41
 */

namespace App\Components\Questionnaire\Adapter;

use App\Components\Graphs\GraphRegistry;
use App\Components\Questionnaire\DTO\ListeChoix;
use App\Components\Questionnaire\DTO\ReponsesUser;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Components\Questionnaire\TypeQuestion\TypeChainee;
use App\Entity\QuestQuestion;
use App\Utils\Tools;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireQuestionAdapter
{
    protected AbstractQuestion $question;

    public function __construct(
        private readonly QuestionnaireRegistry $questionnaireRegistry,
        private readonly GraphRegistry $graphRegistry,
    ) {
    }

    /**
     * @throws \App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException
     * @throws \JsonException
     */
    public function createFromEntity(
        AbstractSection $abstractSection,
        QuestQuestion $question,
        int $ordre = 1,
        array $options = []
    ): self {
        $obj = $this->questionnaireRegistry->getTypeQuestion($question->getType());
        $options = array_merge($options, $question->getConfig());
        $this->question = new $obj($this->graphRegistry);

        $optionResolver = new OptionsResolver();
        $this->question->configureOptions($optionResolver);
        $this->question->options = $optionResolver->resolve($options);
        $this->question->parametres = $question->getParametre();

        if (true === $abstractSection->configurable) {
            $data = $abstractSection->abstractSectionAdapter->getData($abstractSection->params['valeurs'][$ordre]);
            $this->question->valeurs = $abstractSection->params['valeurs'];
            $this->question->libelle = Tools::personnaliseTexte($question->getLibelle(), $data);
        } else {
            $this->question->libelle = $question->getLibelle();
        }

        $this->question->id = $question->getId();
        $this->question->numero = $question->getOrdre();
        $this->question->help = $question->getHelp();
        $this->question->config = $question->getConfig();
        $this->question->cle = $question->getCle();
        // $this->question->questionsEnfants = $question->getQuestionsEnfants();

        $this->question->getOrGenereReponses($question);

        return $this;
    }

    public function getQuestion(): AbstractQuestion
    {
        return $this->question;
    }

    public function setReponse(?ReponsesUser $reponsesUser): self
    {
        if (null !== $reponsesUser) {


            if ($this->question::class === TypeChainee::class) {
                foreach ($this->question->questions as $questionEnfant) {
                    $this->question->reponsesUser[$questionEnfant->getId()] = $reponsesUser->getReponse($questionEnfant->getCle());
                }
            } else {
                $this->question->reponseUser = $reponsesUser->getReponse($this->question->cle);
            }

        }

        return $this;
    }

    public function setReponsesEtudiants(ListeChoix $listeChoix): self
    {
        $this->question->choix = $listeChoix->getChoix($this->question->cle);

        return $this;
    }
}
