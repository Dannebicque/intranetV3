<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Adapter/EntityAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2021 10:49
 */

namespace App\Components\Table\Adapter;

use App\Components\Table\DTO\TableResult;
use App\Components\Table\Table;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EntityAdapter extends AbstractAdapter implements AdapterInterface
{
    protected EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function getResult(Table $table, array $options): TableResult
    {
        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);
        $options = $resolver->resolve($options);

        $query = $this->getQueryBuilder($table, $options)->getQuery();

        $paginator = new Paginator($query, $options['fetch_join_collection']);

        return new TableResult($paginator);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver
            ->setRequired('class')
            ->setAllowedTypes('class', 'string')
            ->setDefault('query_alias', 'e')
            ->setAllowedTypes('query_alias', 'string')
            ->setDefault('query', null)
            ->setAllowedTypes('query', ['callable', 'null'])
            /*
             * Paginator / query options (use for optimization)
             *
             * To fetch large data (~over 1m) use options :
             *  [
             *      'fetch_join_collection' => false,
             *      'use_output_walker' => false,
             *      'use_distinct_hint' => false
             * ]
             */
            ->setDefault('fetch_join_collection', true)
            ->setAllowedTypes('fetch_join_collection', 'bool');
    }

    public function getQueryBuilder(Table $table, array $options): QueryBuilder
    {
        //$formData = $state->getFormData();

        $qb = $this->em->createQueryBuilder()
            ->select($options['query_alias'])
            ->from($options['class'], $options['query_alias']);

//        if (is_callable($options['query'])) {
//            call_user_func($options['query'], $qb, $formData);
//        }

        // pagination
        $qb->setFirstResult($table->getPaging()->getStart());
        if ($table->getPaging()->getLength() >= 0) {
            $qb->setMaxResults($table->getPaging()->getLength());
        }

        // order by
//        foreach ($state->getOrderBy() as [$column, $direction]) {
//            foreach ($column->getOrderBy() as $path) {
//                // if path is not a sub property path, prefix it by alias
//                if (false === strpos($path, '.')) {
//                    $path = sprintf('%s.%s', $options['query_alias'], $path);
//                }
//
//                $qb->addOrderBy($path, strtoupper($direction));
//            }
//        }

        return $qb;
    }
}
