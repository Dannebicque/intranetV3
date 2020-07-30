<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/DocumentFavoriPersonnelRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 12:36

namespace App\Repository;

use App\Entity\Document;
use App\Entity\DocumentFavoriPersonnel;
use App\Entity\Personnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DocumentFavoriPersonnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method DocumentFavoriPersonnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method DocumentFavoriPersonnel[]    findAll()
 * @method DocumentFavoriPersonnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocumentFavoriPersonnelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DocumentFavoriPersonnel::class);
    }

    public function findFavori(Personnel $personnel, Document $document)
    {
        return $this->createQueryBuilder('a')
            ->where('a.personnel = :personnel')
            ->andWhere('a.document = :document')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('document', $document->getId())
            ->getQuery()
            ->getResult();
    }

    public function findAllUserFavoris(Personnel $personnel)
    {
        return $this->createQueryBuilder('a')
            ->where('a.personnel = :personnel')
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }
}
