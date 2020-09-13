<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/DatabaseTwigLoader.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2020 11:21
namespace App\Classes;

use App\Repository\TwigTemplateRepository;
use Twig\Error\LoaderError;
use Twig\Loader\LoaderInterface;
use Twig\Source;

class DatabaseTwigLoader implements LoaderInterface
{
    protected TwigTemplateRepository $twigTemplateRepository;

    public function __construct(TwigTemplateRepository $twigTemplateRepository)
    {
        $this->twigTemplateRepository = $twigTemplateRepository;
    }

    public function getSourceContext($name): Source
    {
        if (false === $source = $this->getValue('name', $name)) {
            throw new LoaderError(sprintf('Template "%s" does not exist.', $name));
        }

        return new Source($source, $name);
    }

    protected function getValue($column, $name)
    {

        $template = $this->twigTemplateRepository->findOneBy(['name' => $name]);
        if ($template !== null) {
            if ($column === 'updated') {
                return $template->getUpdated();
            }

            return $template->getSource();
        }

        return null;

    }

    public function exists($name)
    {
        return $name === $this->getValue('name', $name);
    }

    public function getCacheKey($name): string
    {
        return $name;
    }

    public function isFresh($name, $time): bool
    {
        if (false === $lastModified = $this->getValue('updated', $name)) {
            return false;
        }

        return $lastModified <= $time;
    }
}
