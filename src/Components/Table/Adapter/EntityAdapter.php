<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Adapter/EntityAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/08/2021 13:34
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

        //$query = $this->getQueryBuilder($table, $options)->getQuery();

        $paginator = new Paginator($this->getQueryBuilder($table, $options), $options['fetch_join_collection']);

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
            ->setDefault('order', [])
            ->setDefault('filter', [])
            ->setDefault('fetch_join_collection', true)
            ->setAllowedTypes('fetch_join_collection', 'bool');
    }

    public function getQueryBuilder(Table $table, array $options): QueryBuilder
    {
        $qb = $this->em->createQueryBuilder()
            ->select($options['query_alias'])
            ->from($options['class'], $options['query_alias']);

        //query (pour les filtres
        if (is_callable($options['query'])) {
            call_user_func($options['query'], $qb, $options['filter']);
        }

        //order
        if (count($options['order']) > 0) {
            foreach ($options['order'] as $order) {
                $direction = 'ASC' === $order['order'] ? 'DESC' : 'ASC';
                $qb->addOrderBy($options['query_alias'] . '.' . $order['column'], strtoupper($direction));
            }
        }

        // pagination
        // pagination
//        if ($dataTable->hasPaging()) {
//            if (isset($data['start'])) {
//                $qb->setFirstResult($data['start']);
//            }
//
//            if (isset($data['length'])) {
//                $qb->setMaxResults($data['length']);
//            }
//        }


        $qb->setFirstResult($table->getPaging()->getStart());
        if ($table->getPaging()->getLength() >= 0) {
            $qb->setMaxResults($table->getPaging()->getLength());
        }

        return $qb;
    }
}
