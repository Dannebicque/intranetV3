<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyPagination.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:48
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Constantes;
use function count;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Routing\RouterInterface;

/**
 * Class MyPagination.
 */
class MyPagination
{
    private int $nbMaxResult;
    private array $data;
    private int $page;
    private int $nbPages;
    private array $link;

    /**
     * MyPagination constructor.
     */
    public function __construct(private readonly RouterInterface $router)
    {
    }

    public function calculPagination(QueryBuilder $queryBuilder, array $link, int $page = 1): void
    {
        $this->page = $page;
        $this->link = $link;

        $debut = $page * Constantes::NB_RESULTS_PER_PAGE - 2;

        $this->nbMaxResult = count($queryBuilder->getQuery()->getArrayResult());
        $this->data = $queryBuilder->setFirstResult($debut)
            ->setMaxResults(Constantes::NB_RESULTS_PER_PAGE)
            ->getQuery()
            ->getResult();

        $this->nbPages = ceil($this->nbMaxResult / Constantes::NB_RESULTS_PER_PAGE);
    }

    public function calculPaginationFromArray(array $data, array $link, ?int $resultsPerPage, int $page = 1): void
    {
        $this->page = $page;
        $this->link = $link;

        $debut = $page * $resultsPerPage - 2;

        $this->nbMaxResult = count($data);
        $this->data = array_slice($data, $debut, $resultsPerPage);

        $this->nbPages = ceil($this->nbMaxResult / $resultsPerPage);
    }

    public function getNbPages(): int
    {
        return $this->nbPages;
    }

    public function getCurrentPage(): int
    {
        return $this->page;
    }

    public function getData(): array
    {
        return $this->data;
    }

    public function getNbMaxResult(): int
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

    public function getLinkPage($page): string
    {
        $args = $this->link['args'];
        $args['page'] = $page;

        return $this->router->generate($this->link['path'], $args);
    }
}
