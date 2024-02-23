<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Logger/Twig/LogsExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Components\Logger\Twig;

use App\Components\Logger\LogHelper;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
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
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function loggerRender(): string
    {
        return $this->twig->render($this->template, ['logs' => $this->logHelper->getLogs()]);
    }
}
