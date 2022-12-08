<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/MccRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/12/2022 07:55
 */

namespace App\Repository;

use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Mcc;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Mcc>
 *
 * @method Mcc|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mcc|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mcc[]    findAll()
 * @method Mcc[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MccRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mcc::class);
    }

    public function save(Mcc $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Mcc $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByMatiereAndAnneeUniversitaire(
        Matiere $matiere,
        AnneeUniversitaire $getAnneeUniversitaire
    ) {
        return $this->createQueryBuilder('mcc')
            ->where('mcc.typeMatiere = :typeMatiere')
            ->andWhere('mcc.idMatiere = :idMatiere')
            ->andWhere('mcc.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('typeMatiere', $matiere->typeMatiere)
            ->setParameter('idMatiere', $matiere->id)
            ->setParameter('anneeUniversitaire', $getAnneeUniversitaire->getId())
            ->getQuery()
            ->getResult();
    }
}
