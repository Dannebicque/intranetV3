<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeSlider.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/09/2022 14:07
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Graphs\Type\BarGraph;
use App\Entity\QuestQuestion;
use Symfony\Component\OptionsResolver\OptionsResolver;

//todo: ajouter la possibilité d'afficher masquer les numéros.

class TypeSlider extends TypeEchelle
{
    final public const LABEL = 'type_slider';
    final public const BADGE = 'bg-brown'; // ajouter constante de couleur et de nom de template ?
    final public const ICON = 'fas fa-slider'; // ajouter constante de couleur et de nom de template ?
    public const TYPE_GRAPH = BarGraph::SOURCE;

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_slider')
            ->setDefault('block_name_edit', 'type_echelle')
            ->setDefault('type_question', 'range');
    }

    //todo: gérer la réponse unique, comme du texte libre ?

    public function getOrGenereReponses(QuestQuestion $question): void
    {
    }

    public function genereGraph()
    {
        return $this->graphRegistry->getTypeGraph(self::TYPE_GRAPH)->genereGraph($this);
    }
}
