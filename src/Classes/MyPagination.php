<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyPagination.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:26
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Constantes;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Routing\RouterInterface;

/**
 * Class MyPagination.
 */
class MyPagination
{
    /** @var RouterInterface */
    private $router;

    private $nbMaxResult;
    private $data;
    private $page;
    private $nbPages;
    private $link;

    /**
     * MyPagination constructor.
     */
    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    /**
     * @param     $link
     * @param int $page
     */
    public function calculPagination(QueryBuilder $queryBuilder, $link, $page = 1): void
    {
        $this->page = $page;
        $this->link = $link;

        $debut = $page * Constantes::NB_RESULTS_PER_PAGE - 2;

        $this->nbMaxResult = \count($queryBuilder->getQuery()->getArrayResult());
        $this->data = $queryBuilder->setFirstResult($debut)
            ->setMaxResults(Constantes::NB_RESULTS_PER_PAGE)
            ->getQuery()
            ->getResult();

        $this->nbPages = ceil($this->nbMaxResult / Constantes::NB_RESULTS_PER_PAGE);
    }

    public function getNbPages()
    {
        return $this->nbPages;
    }

    public function getCurrentPage()
    {
        return $this->page;
    }

    public function getData()
    {
        return $this->data;
    }

    public function getNbMaxResult()
    {
        return $this->nbMaxResult;
    }

    public function hasPreviousLink(): bool
    {
        return 1 !== $this->page;
    }

    public function getPreviousLink(): string
    {
        $args = $this->link['args'];
        $args['page'] = $this->page - 1;

        return $this->router->generate($this->link['path'], $args);
    }

    public function hasNextLink(): bool
    {
        return $this->page !== $this->nbPages;
    }

    public function getNextLink(): string
    {
        $args = $this->link['args'];
        $args['page'] = $this->page + 1;

        return $this->router->generate($this->link['path'], $args);
    }

    /**
     * @param $page
     */
    public function getLinkPage($page): string
    {
        $args = $this->link['args'];
        $args['page'] = $page;

        return $this->router->generate($this->link['path'], $args);
    }
}
