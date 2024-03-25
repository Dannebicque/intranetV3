<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeQcu.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:40
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Graphs\Type\BarGraph;
use App\Components\Questionnaire\Adapter\ReponseEntityAdapter;
use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeQcu;
use App\Entity\QuestQuestion;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeQcu extends AbstractQuestion
{
    public const LABEL = 'type_qcu';
    public const BADGE = 'bg-pink';
    public const ICON = 'fas fa-ellipsis-vertical';
    public const FORM = QuestionnaireQuestionTypeQcu::class;
    public const TYPE_GRAPH = BarGraph::SOURCE;

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('block_name', 'type_qcu')
            ->setDefault('block_name_edit', 'type_qcu')
            ->setDefault('type_question', 'radio');
    }

    public function getOrGenereReponses(QuestQuestion $question): void
    {
        $reponses = $question->getQuestReponses();
        foreach ($reponses as $reponse) {
            $this->addReponse((new ReponseEntityAdapter($reponse))->getReponse());
        }
    }

    public function sauvegarde(
        QuestQuestion $question,
        Request $request,
        ?EntityManagerInterface $entityManager = null
    ): void {
        parent::sauvegarde($question, $request, $entityManager);
        $parametres = $question->getParametre();
        $parametres['choix_autre'] = array_key_exists('choix_autre',
                $this->data) && $this->data['choix_autre'];
        $parametres['choix_nc'] = array_key_exists('choix_nc', $this->data) && $this->data['choix_nc'];
        $question->setParametre($parametres);

        $this->sauvegardeReponses($question, $entityManager);
    }

    public function genereGraph()
    {
        return $this->graphRegistry->getTypeGraph(self::TYPE_GRAPH)->genereGraph($this);
    }
}
