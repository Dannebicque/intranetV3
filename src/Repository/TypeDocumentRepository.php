<?php /**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/TypeDocumentRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 26/08/2019 13:45
 * @lastUpdate 26/08/2019 13:13
 */ /** @noinspection ALL */
/** @noinspection PhpUnused */

namespace App\Repository;

use App\Entity\TypeDocument;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeDocument|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeDocument|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeDocument[]    findAll()
 * @method TypeDocument[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeDocumentRepository extends ServiceEntityRepository
{
    /**
     * TypeDocumentRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TypeDocument::class);
    }

    /**
     * @param $departement
     *
     * @return mixed
     */
    public function findByDepartement($departement)
    {
        return $this->createQueryBuilder('t')
            ->where('t.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('t.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
