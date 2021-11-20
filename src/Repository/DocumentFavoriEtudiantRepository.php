<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/DocumentFavoriEtudiantRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\Document;
use App\Entity\DocumentFavoriEtudiant;
use App\Entity\Etudiant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DocumentFavoriEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method DocumentFavoriEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method DocumentFavoriEtudiant[]    findAll()
 * @method DocumentFavoriEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<DocumentFavoriEtudiant>
 */
class DocumentFavoriEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DocumentFavoriEtudiant::class);
    }

    public function findFavori(Etudiant $etudiant, Document $document)
    {
        return $this->createQueryBuilder('a')
            ->where('a.etudiant = :etudiant')
            ->andWhere('a.document = :document')
            ->setParameter('etudiant', $etudiant->getId())
            ->setParameter('document', $document->getId())
            ->getQuery()
            ->getResult();
    }

    public function findAllUserFavoris(Etudiant $etudiant)
    {
        return $this->createQueryBuilder('a')
            ->where('a.etudiant = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getResult();
    }
}
