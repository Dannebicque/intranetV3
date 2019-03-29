<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 07/08/2018
 * Time: 11:07
 */
namespace App\Twig;

use App\Repository\TwigTemplateRepository;

class DatabaseTwigLoader implements \Twig_LoaderInterface
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
     * @return \Twig_Source
     *
     * @throws \Twig_Error_Loader When $name is not found
     */
    public function getSourceContext($name): \Twig_Source
    {
        if (false === $source = $this->getValue($name)->getSource()) {
            throw new \Twig_Error_Loader(sprintf('Template "%s" does not exist.', $name));
        }

        return new \Twig_Source($source, $name);
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
