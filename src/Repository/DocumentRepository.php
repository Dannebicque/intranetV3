<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/DocumentRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/07/2020 11:13

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Document;
use App\Entity\TypeDocument;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Document|null find($id, $lockMode = null, $lockVersion = null)
 * @method Document|null findOneBy(array $criteria, array $orderBy = null)
 * @method Document[]    findAll()
 * @method Document[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocumentRepository extends ServiceEntityRepository
{
    /**
     * DocumentRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Document::class);
    }

    /**
     * @param $type
     *
     * @return mixed
     */
    public function findByTypeDocument($type)
    {
        return $this->createQueryBuilder('d')
            ->where('d.typeDocument = :type')
            ->setParameter('type', $type)
            ->orderBy('d.updated', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->createQueryBuilder('d')
            ->innerJoin(TypeDocument::class, 't', 'WITH', 'd.typeDocument = t.id')
            ->where('t.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('d.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
