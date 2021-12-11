<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Twig/QuizzExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/09/2021 19:04
 */

namespace App\Twig;

use App\Entity\QuestionnaireQuestion;
use App\Utils\Tools;
use function in_array;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Class QizzExtension.
 */
class QuizzExtension extends AbstractExtension
{
    /**
     * AppExtension constructor.
     */
    public function __construct()
    {
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('type_question', [$this, 'typeQuestion']),
            new TwigFilter('has_reponse', [$this, 'hasReponse']),
            new TwigFilter('personnalise', [$this, 'personnalise']),
        ];
    }

    public function typeQuestion($type): ?string
    {
        return match ($type) {
            QuestionnaireQuestion::QUESTION_TYPE_YESNO, QuestionnaireQuestion::QUESTION_TYPE_QCU, QuestionnaireQuestion::QUESTION_TYPE_ECHELLE => 'radio',
            QuestionnaireQuestion::QUESTION_TYPE_QCM => 'checkbox',
            default => '',
        };
    }

    public function personnalise($texte, $config)
    {
        return Tools::personnaliseTexte($texte, $config);
    }

    public function hasReponse($tab, $reponse)
    {
        if (in_array($reponse, json_decode($tab, false), true)) {
            return true;
        }

        return false;
    }
}
