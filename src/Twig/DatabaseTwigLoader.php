<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Twig/DatabaseTwigLoader.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/07/2020 13:12

namespace App\Twig;

use App\Repository\TwigTemplateRepository;
use Twig\Error\LoaderError;
use Twig\Loader\LoaderInterface;
use Twig\Source;

class DatabaseTwigLoader implements LoaderInterface
{
    /** @var TwigTemplateRepository */
    private $twigTemplateRepository;

    /**
     * DatabaseTwigLoader constructor.
     *
     * @param TwigTemplateRepository $twigTemplateRepository
     */
    public function __construct(TwigTemplateRepository $twigTemplateRepository)
    {
        $this->twigTemplateRepository = $twigTemplateRepository;
    }


    /**
     * Returns the source context for a given template logical name.
     *
     * @param string $name The template logical name
     *
     * @return Source
     *
     * @throws LoaderError When $name is not found
     */
    public function getSourceContext($name): Source
    {
        if (false === $source = $this->getValue($name)->getSource()) {
            throw new LoaderError(sprintf('Template "%s" does not exist.', $name));
        }

        return new Source($source, $name);
    }

    public function exists($name): bool
    {
        if ($this->getValue($name) !== null) {
            return $name === $this->getValue($name)->getName();
        }

        return false;
    }

    public function getCacheKey($name): string
    {
        return $name;
    }

    public function isFresh($name, $time): bool
    {
        if (false === $lastModified = $this->getValue($name)->getUpdated()) {
            return false;
        }

        return $lastModified <= $time;
    }

    protected function getValue($name): void
    {
        //return $this->twigTemplateRepository->findOneBy(['name' => $name]);
        //todo: SI je laisse cette ligne ca plante Travis et le composer install ???
    }
}
