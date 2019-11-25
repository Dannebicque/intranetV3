<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ScolariteMoyenneUeRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\ScolariteMoyenneUe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ScolariteMoyenneUe|null find($id, $lockMode = null, $lockVersion = null)
 * @method ScolariteMoyenneUe|null findOneBy(array $criteria, array $orderBy = null)
 * @method ScolariteMoyenneUe[]    findAll()
 * @method ScolariteMoyenneUe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScolariteMoyenneUeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ScolariteMoyenneUe::class);
    }

    public function findByEtudiantArray(Etudiant $etudiant): array
    {
        $query = $this->createQueryBuilder('s')
            ->innerJoin(Scolarite::class, 'p', 'WITH', 's.scolarite = p.id')
            ->where('p.etudiant = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var ScolariteMoyenneUe $q */
        foreach ($query as $q) {
            $t[$q->getScolarite()->getId()][$q->getUe()->getId()] = $q;
        }

        return $t;
    }

}
