<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Twig/QuizzExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Twig;

use App\Utils\Tools;
use App\Entity\QuestionnaireQuestion;
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
        switch ($type) {
            case QuestionnaireQuestion::QUESTION_TYPE_YESNO:
            case QuestionnaireQuestion::QUESTION_TYPE_QCU:
            case QuestionnaireQuestion::QUESTION_TYPE_ECHELLE:
                return 'radio';
            case QuestionnaireQuestion::QUESTION_TYPE_QCM:
                return 'checkbox';
        }
    }

    public function personnalise($texte, $config)
    {
        return Tools::personnaliseTexte($texte, $config);
    }

    public function hasReponse($tab, $reponse)
    {
        if (\in_array($reponse, json_decode($tab, false), true)) {
            return true;
        }

        return false;
    }
}
