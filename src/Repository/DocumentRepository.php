<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/DocumentRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Repository;

use App\Entity\Constantes;
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
 * @extends ServiceEntityRepository<Document>
 */
class DocumentRepository extends ServiceEntityRepository
{
    /**
     * DocumentRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Document::class);
    }

    public function findByTypeDocument(int $type, bool $isEtudiant = true): array
    {
        $query = $this->createQueryBuilder('d')
            ->where('d.typeDocument = :type')
            ->setParameter('type', $type)
            ->orderBy('d.libelle', \Doctrine\Common\Collections\Criteria::DESC);

        if (true === $isEtudiant) {
            $query->andWhere('d.typeDestinataire = :typeDestinataire')
                ->setParameter('typeDestinataire', Constantes::TYPE_DESTINATAIRE_ETUDIANT);
        }

        return $query->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->createQueryBuilder('d')
            ->innerJoin(TypeDocument::class, 't', 'WITH', 'd.typeDocument = t.id')
            ->where('t.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('d.libelle', \Doctrine\Common\Collections\Criteria::ASC)
            ->getQuery()
            ->getResult();
    }
}
