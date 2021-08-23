<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Paging.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/08/2021 13:34
 */

namespace App\Components\Table;

use Symfony\Component\OptionsResolver\OptionsResolver;

class Paging
{
    public const PAGE_LENGTH = 30;
    private array $options;

    private int $pageActive = 1;
    private int $nbPages = 1;
    private int $start = 0;

    public function __construct()
    {
        //simple DTO??? Le constructeur prend en parametre la requete et calcul les éléments ?
        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);

        $this->options = $resolver->resolve();
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'page_length' => self::PAGE_LENGTH,
            'lengths' => [10, 30, 50, 100]
        ]);
    }

    public function getOptions()
    {
        return $this->options;
    }

    public function getOption(string $key)
    {
        return $this->options[$key];
    }

    public function isFirstPage()
    {
        return $this->pageActive === 1;
    }

    public function isLastPage()
    {
        return $this->pageActive === $this->nbPages;
    }

    public function getNumActivePage()
    {
        return $this->pageActive;
    }

    public function getNbPages()
    {
        return $this->nbPages;
    }

    public function getStart()
    {
        return $this->start;
    }

    public function setResult(DTO\TableResult $datas)
    {
        $this->nbPages = ceil($datas->getCount() / $this->options['page_length']);
    }

    public function getName()
    {
        return 'datable'; //todo: devrait être dépend du table et unique
    }

    public function setPage(mixed $page)
    {
        $this->pageActive = (int)$page;
        $this->start = ($this->pageActive - 1) * $this->getLength();
    }

    public function getLength()
    {
        return $this->options['page_length'];
    }

    public function getLengths()
    {
        return $this->options['lengths'];
    }

    public function setNbElementPerPage(mixed $nbElementPerPage)
    {
        $this->options['page_length'] = $nbElementPerPage;
    }

    public function getJsonDatas()
    {
        return [
            'firstPage' => $this->isFirstPage(),
            'lastPage' => $this->isLastPage(),
            'numActivePage' => $this->getNumActivePage(),
            'nbPages' => $this->getNbPages(),
            'name' => $this->getName()
        ];
    }
}
