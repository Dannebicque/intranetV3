<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Filters.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:38
 */

namespace App\Components\Table;


use Symfony\Component\OptionsResolver\OptionsResolver;

class Filters
{
    const DEFAULT_TEMPLATE = 'components/table/filters.html.twig';
    protected array $filters = [];
    protected array $options = [];

    /**
     * Filters constructor.
     */
    public function __construct()
    {
        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);
        $this->options = $resolver->resolve();
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'template' => self::DEFAULT_TEMPLATE,
        ]);
    }

    public function addFilter(Filter $filter)
    {
        //todo: vérifier si pas déjà présent?
        $this->filters[] = $filter;
    }

    public function getFilters()
    {
        return $this->filters;
    }

    public function getOption(string $string)
    {
        return $this->options['template'];
    }

    public function getOptions()
    {
        return $this->options;
    }

    public function setOptions(array $options)
    {

    }
}
