<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/AbstractQuestion.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:00
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\DTO\Question;
use App\Components\Questionnaire\Reponse;
use App\Components\Questionnaire\Reponses;
use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractQuestion
{
    public string $libelle;
    public ?string $help;
    public int $id;
    public bool $obligatoire = true;
    public array $options = [];
    public ?Question $questionParente = null;
    public string $numero = '1';
    private Reponses $reponses;

    public function __construct()
    {
        $this->reponses = new Reponses();
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('mode', AbstractQuestionnaire::MODE_APERCU)
            ->setDefault('parametres', [])
            ->setDefault('alignement', [])
            ->setDefault('block_name', '');
    }

    public function getOption(string $name)
    {
        return $this->options[$name];
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function addReponse(Reponse $reponse)
    {
        $this->reponses->addReponse($reponse);
    }
}
