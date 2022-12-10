<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeEchelle.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/10/2021 19:08
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Graphs\Type\BarGraph;
use App\Components\Questionnaire\DTO\Reponse;
use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeEchelle;
use App\Entity\QuestQuestion;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeEchelle extends TypeQcu
{
    public const LABEL = 'type_echelle';
    public const BADGE = 'bg-yellow'; // ajouter constante de couleur et de nom de template ?
    public const ICON = 'fas fa-escalator'; // ajouter constante de couleur et de nom de template ?
    public const FORM = QuestionnaireQuestionTypeEchelle::class; // ajouter constante de couleur et de nom de template ?
    public const TYPE_GRAPH = BarGraph::SOURCE;

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_qcu')
            ->setDefault('block_name_edit', 'type_echelle')
            ->setDefault('type_question', 'radio')
            ->setDefault('min', 1)
            ->setDefault('max', 10)
            ->setDefault('pas', 1);
    }

    public function sauvegarde(
        QuestQuestion $question,
        Request $request,
        ?EntityManagerInterface $entityManager = null
    ): void {
        parent::sauvegarde($question, $request, $entityManager);
        $parametres = $question->getParametre();
        $parametres['min'] = $this->data['min'];
        $parametres['max'] = $this->data['max'];
        $parametres['pas'] = $this->data['pas'];
        $question->setParametre($parametres);

        //todo: générer les réponses immédiatement ? Gérer la mise à jour ? supprimer refaire ?
    }

    public function getOrGenereReponses(QuestQuestion $question): void
    {
        //todo: utilisation des options resolvers ??
        for ($i = $this->getOption('min'); $i <= $this->getOption('max'); $i += $this->getOption('pas')) {
            $this->addReponse(new Reponse(
                0, $i, $i, $i
            ));
        }
    }

    public function genereGraph()
    {
        return $this->graphRegistry->getTypeGraph(self::TYPE_GRAPH)->genereGraph($this);
    }
}
