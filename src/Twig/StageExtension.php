<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Twig/StageExtension.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2020 11:21

namespace App\Twig;

use App\Entity\QuizzQuestion;
use App\Classes\Tools;
use App\Entity\StageMailTemplate;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Class QizzExtension
 * @package App\Twig
 */
class StageExtension extends AbstractExtension
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
            new TwigFilter('transformeFromTwig', [$this, 'transformeFromTwig'], ['is_safe' => ['html']]),
        ];
    }

    public function transformeFromTwig($message)
    {
        return str_replace(array_values(StageMailTemplate::CHAMPS_PUBLIPOSTAGE),
            array_keys(StageMailTemplate::CHAMPS_PUBLIPOSTAGE), $message);
    }


}
