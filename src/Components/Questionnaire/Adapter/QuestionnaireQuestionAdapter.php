<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Adapter/QuestionnaireQuestionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Components\Questionnaire\Adapter;

use App\Components\Graphs\GraphRegistry;
use App\Components\Questionnaire\DTO\ListeChoix;
use App\Components\Questionnaire\DTO\ReponsesUser;
use App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Components\Questionnaire\TypeQuestion\TypeChainee;
use App\Entity\QuestQuestion;
use App\Utils\Tools;
use JsonException;
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
     * @throws TypeQuestionNotFoundException
     * @throws JsonException
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
            $this->question->valeur_config = $abstractSection->params['valeurs'][$ordre];
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
                    if (null !== $this->question->valeurs) {
                        foreach ($this->question->valeurs as $valeur) {
                            $this->question->reponsesUser[$questionEnfant->getId()]['c' . $valeur] = $reponsesUser->getReponse($questionEnfant->getCle(),
                                'c' . $valeur);
                        }
                    } else {
                        $this->question->reponsesUser[$questionEnfant->getId()] = $reponsesUser->getReponse($questionEnfant->getCle());
                    }
                }
            } else {
                if ('' !== $this->question->valeur_config) {
                    $this->question->reponsesUser[$this->question->id]['c' . $this->question->valeur_config] = $reponsesUser->getReponse($this->question->cle,
                        'c' . $this->question->valeur_config);
                } else {
                    $this->question->reponseUser = $reponsesUser->getReponse($this->question->cle);
                }
            }
        }

        return $this;
    }

    public function setReponsesEtudiants(ListeChoix $listeChoix): self
    {
        if ('' !== $this->question->valeur_config) {
            $ls = $listeChoix->getChoix($this->question->cle);
            $this->question->choix = null !== $ls ? $ls['c' . $this->question->valeur_config] : null;
        } else {
            $this->question->choix = $listeChoix->getChoix($this->question->cle);
        }

        return $this;
    }
}
