<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/StageExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/07/2023 22:23
 */

namespace App\Twig;

use App\Entity\StageMailTemplate;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Class QizzExtension.
 */
class StageExtension extends AbstractExtension
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
            new TwigFilter('transformeFromTwig', $this->transformeFromTwig(...), ['is_safe' => ['html']]),
        ];
    }

    public function transformeFromTwig(string $message): string
    {
        return str_replace(array_values(StageMailTemplate::CHAMPS_PUBLIPOSTAGE),
            array_keys(StageMailTemplate::CHAMPS_PUBLIPOSTAGE), $message);
    }
}
