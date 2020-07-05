<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Twig/QuizzExtension.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Twig;

use App\Entity\QuizzQuestion;
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
            case QuizzQuestion::QUESTION_TYPE_YESNO:
            case QuizzQuestion::QUESTION_TYPE_QCU:
            case QuizzQuestion::QUESTION_TYPE_ECHELLE:
                return 'radio';
            case QuizzQuestion::QUESTION_TYPE_QCM:
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
