<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeQcm.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/10/2021 19:08
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Graphs\Type\BarGraph;
use App\Components\Questionnaire\Adapter\ReponseEntityAdapter;
use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeQcm;
use App\Entity\QuestQuestion;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeQcm extends AbstractQuestion
{
    final public const LABEL = 'type_qcm';
    final public const BADGE = 'bg-cyan';
    final public const ICON = 'fas fa-ballot-check';
    final public const FORM = QuestionnaireQuestionTypeQcm::class;
    public const TYPE_GRAPH = BarGraph::SOURCE;

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_qcm')
            ->setDefault('block_name_edit', 'type_qcm')
            ->setDefault('type_question', 'checkbox');
    }

    /*
     * ^ array:6 [
  "maxChoix" => "2"
  "questReponses" => array:2 [
    0 => array:3 [
      "ordre" => "1"
      "libelle" => "A"
      "valeur" => "A"
    ]
    1 => array:3 [
      "ordre" => "2"
      "libelle" => "B"
      "valeur" => "B"
    ]
  ]
]
     */
    public function sauvegarde(
        QuestQuestion $question,
        Request $request,
        ?EntityManagerInterface $entityManager = null
    ): void {
        parent::sauvegarde($question, $request, $entityManager);
        $parametres = $question->getParametre();
        $parametres['maxChoix'] = $this->data['maxChoix'];
        $question->setParametre($parametres);

        $this->sauvegardeReponses($question, $entityManager);
    }

    public function getOrGenereReponses(QuestQuestion $question): void
    {
        $reponses = $question->getQuestReponses();
        foreach ($reponses as $reponse) {
            $this->addReponse((new ReponseEntityAdapter($reponse))->getReponse());
        }
    }

    public function genereGraph()
    {
        return $this->graphRegistry->getTypeGraph(self::TYPE_GRAPH)->genereGraph($this);
    }
}
