<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeOuiNon.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/10/2021 19:08
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Graphs\Type\PieGraph;
use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeYesNo;
use App\Entity\QuestQuestion;
use App\Entity\QuestReponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeOuiNon extends TypeQcu
{
    final public const LABEL = 'type_oui_non';
    final public const BADGE = 'bg-purple';
    final public const ICON = 'fas fa-toggle-on';
    final public const FORM = QuestionnaireQuestionTypeYesNo::class;
    public const TYPE_GRAPH = PieGraph::SOURCE;

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_qcu')
            ->setDefault('block_name_edit', 'type_oui_non')
            ->setDefault('type_question', 'radio')
            ->setDefault('libelle_1', 'Oui')
            ->setDefault('valeur_1', '1')
            ->setDefault('libelle_2', 'Non')
            ->setDefault('valeur_2', '0');
    }

    public function sauvegarde(
        QuestQuestion $question,
        Request $request,
        ?EntityManagerInterface $entityManager = null
    ): void {
        // todo: utilisation des options resolvers ??
        parent::sauvegarde($question, $request, $entityManager);

        if (null !== $entityManager) {
            $this->removeReponses($question, $entityManager);

            $reponse1 = new QuestReponse();
            $reponse1->setQuestion($question);
            $reponse1->setValeur($this->data['valeur_1']);
            $reponse1->setLibelle($this->data['libelle_1']);
            $reponse1->setOrdre(1);

            $entityManager->persist($reponse1);

            $reponse2 = new QuestReponse();
            $reponse2->setQuestion($question);
            $reponse2->setValeur($this->data['valeur_2']);
            $reponse2->setLibelle($this->data['libelle_2']);
            $reponse2->setOrdre(2);
            $entityManager->persist($reponse2);
        }
    }

    public function genereGraph()
    {
        return $this->graphRegistry->getTypeGraph(self::TYPE_GRAPH)->genereGraph($this);
    }
}
