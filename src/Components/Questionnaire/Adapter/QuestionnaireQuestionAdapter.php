<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Adpapter/QuestionnaireQuestionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 15:29
 */

namespace App\Components\Questionnaire\Adapter;

use App\Components\Graphs\GraphRegistry;
use App\Components\Questionnaire\DTO\ListeChoix;
use App\Components\Questionnaire\DTO\ReponsesEtudiant;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
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

        $this->question->getOrGenereReponses($question);

        return $this;
    }

    public function getQuestion(): AbstractQuestion
    {
        return $this->question;
    }

    public function setReponseEtudiant(?ReponsesEtudiant $reponsesEtudiant): self
    {
        if (null !== $reponsesEtudiant) {
            $this->question->reponseEtudiant = $reponsesEtudiant->getReponse($this->question->cle);

            if (null !== $this->question->reponseEtudiant && 'CHX:OTHER' === $this->question->reponseEtudiant->valeur) {
                $this->question->reponseEtudiant->complementValeur = $reponsesEtudiant->getReponse($this->question->cle . '_autre')?->valeur;
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
