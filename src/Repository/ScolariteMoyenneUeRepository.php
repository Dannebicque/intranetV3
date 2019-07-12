<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ScolariteMoyenneUeRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/29/19 3:42 PM
 */

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\ScolariteMoyenneUe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ScolariteMoyenneUe|null find($id, $lockMode = null, $lockVersion = null)
 * @method ScolariteMoyenneUe|null findOneBy(array $criteria, array $orderBy = null)
 * @method ScolariteMoyenneUe[]    findAll()
 * @method ScolariteMoyenneUe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScolariteMoyenneUeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
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
