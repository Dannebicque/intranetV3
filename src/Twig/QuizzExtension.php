<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Twig/QuizzExtension.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/11/2020 07:26

namespace App\Twig;

use App\Entity\QuestionnaireQuestion;
use App\Classes\Tools;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Class QizzExtension
 * @package App\Twig
 */
class QuizzExtension extends AbstractExtension
{

    /**
     * AppExtension constructor.
     *
     */
    public function __construct()
    {

    }

    /**
     * @return array
     */
    public function getFilters(): array
    {
        return [
            new TwigFilter('type_question', [$this, 'typeQuestion']),
            new TwigFilter('has_reponse', [$this, 'hasReponse']),
            new TwigFilter('personnalise', [$this, 'personnalise'])
        ];
    }

    /**
     * @param $type
     *
     * @return null|string
     */
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
        if (in_array($reponse, json_decode($tab, false), true)) {
            return true;
        }

        return false;
    }
}
