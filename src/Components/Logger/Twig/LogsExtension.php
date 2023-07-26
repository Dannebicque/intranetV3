<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Logger/Twig/LogsExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/07/2023 22:21
 */

namespace App\Components\Logger\Twig;

use App\Components\Logger\LogHelper;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class LogsExtension extends AbstractExtension
{
    private string $template = 'components/logger/logs.html.twig';

    public function __construct(
        protected LogHelper $logHelper,
        protected Environment $twig)
    {
    }

    /**
     * @return TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('logger_render', $this->loggerRender(...), [
                'is_safe' => ['html'],
            ]),
        ];
    }

    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    public function loggerRender(): string
    {
        return $this->twig->render($this->template, ['logs' => $this->logHelper->getLogs()]);
    }
}
