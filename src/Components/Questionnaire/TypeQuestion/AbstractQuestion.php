<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/AbstractQuestion.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/10/2021 07:43
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\DTO\Question;
use App\Components\Questionnaire\DTO\Reponse;
use App\Components\Questionnaire\DTO\ReponseEtudiant;
use App\Components\Questionnaire\Reponses;
use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractQuestion
{
    public const LABEL = 'non_defini'; //ajouter constante de couleur et de nom de template ?
    public const BADGE = 'non_defini'; //ajouter constante de couleur et de nom de template ?
    public const ICON = 'non_defini'; //ajouter constante de couleur et de nom de template ?

    public string $libelle;
    public ?array $valeurs = null;
    public ?string $help;
    public int $id;
    public array $parametres;
    public array $config;
    public bool $obligatoire = true;
    public array $options = [];
    public ?Question $questionParente = null;
    public bool $hasEnfants = false;
    public string $numero = '1';
    private Reponses $reponses;
    public ?ReponseEtudiant $reponseEtudiant = null;

    public function __construct()
    {
        $this->reponses = new Reponses();
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefault('mode', AbstractQuestionnaire::MODE_APERCU)
            ->setDefault('type_question', '')
            ->setDefault('parametres', [])
            ->setDefault('type', [])
            ->setDefault('alignement', [])
            ->setDefault('questionnaire_id', null)
            ->setDefault('typeQuestionnaire', 'qualite')
            ->setDefault('etudiant_id', null)
            ->setDefault('block_name', '');
    }

    public function getOption(string $name): mixed
    {
        return $this->options[$name];
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function addReponse(Reponse $reponse): void
    {
        $this->reponses->addReponse($reponse);
    }

    public function getReponses(): array
    {
        return $this->reponses->getReponses();
    }
}
