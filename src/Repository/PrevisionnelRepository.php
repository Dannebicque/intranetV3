<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/PrevisionnelRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2021 14:41
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Previsionnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method Previsionnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method Previsionnel[]    findAll()
 * @method Previsionnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PrevisionnelRepository extends ServiceEntityRepository
{
    /**
     * PrevisionnelRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Previsionnel::class);
    }

    public function findByDiplome(Diplome $diplome, $annee)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Personnel::class, 'p', 'WITH', 's.personnel = p.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 's.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'with', 'u.id=m.ue')
            ->innerJoin(Semestre::class, 'se', 'with', 'se.id=u.semestre')
            ->innerJoin(Annee::class, 'a', 'with', 'a.id=se.annee')
            ->where('a.diplome = :diplome')
            ->andWhere('s.annee = :annee')
            ->setParameter('diplome', $diplome->getId())
            ->setParameter('annee', $annee)
            ->getQuery()
            ->getResult();
    }
}
