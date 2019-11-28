<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Twig/QuizzExtension.php
// @author     David Annebicque
// @project intranetv3
// @date 28/11/2019 14:27
// @lastUpdate 28/11/2019 14:27

namespace App\Twig;

use App\Entity\QuizzQuestion;
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
            new TwigFilter('type_question', [$this, 'typeQuestion'])
        ];
    }

    /**
     * @param $number
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
}
