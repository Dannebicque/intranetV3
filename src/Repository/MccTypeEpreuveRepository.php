<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/MccTypeEpreuveRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 16:09
 */

namespace App\Repository;

use App\Entity\MccTypeEpreuve;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MccTypeEpreuve>
 *
 * @method MccTypeEpreuve|null find($id, $lockMode = null, $lockVersion = null)
 * @method MccTypeEpreuve|null findOneBy(array $criteria, array $orderBy = null)
 * @method MccTypeEpreuve[]    findAll()
 * @method MccTypeEpreuve[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MccTypeEpreuveRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MccTypeEpreuve::class);
    }

    public function save(MccTypeEpreuve $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(MccTypeEpreuve $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByAnneeUniversitaireBuilder(mixed $anneeUniversitaire): QueryBuilder
    {
        return $this->createQueryBuilder('te')
            ->where('te.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('anneeUniversitaire', $anneeUniversitaire);
    }
}
