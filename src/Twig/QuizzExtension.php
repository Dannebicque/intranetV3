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
        if (is_array($config)) {
            foreach ($config as $key => $elt) {
                $texte = str_replace('{{' . $key . '}}', $elt, $texte);
            }
        }

        return $texte;
    }

    public function hasReponse($tab, $reponse)
    {
        if (in_array($reponse, json_decode($tab, false), true)) {
            return true;
        }

        return false;
    }
}
