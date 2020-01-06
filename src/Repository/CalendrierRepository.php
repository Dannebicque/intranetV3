<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/CalendrierRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Calendrier|null find($id, $lockMode = null, $lockVersion = null)
 * @method Calendrier|null findOneBy(array $criteria, array $orderBy = null)
 * @method Calendrier[]    findAll()
 * @method Calendrier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CalendrierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Calendrier::class);
    }

    public function findByAnneeUniversitaire(AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->createQueryBuilder('c')
            ->where('c.anneeUniversitaire = :annee')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->getQuery()
            ->getResult();
    }

    public function findCalendrierArray(): array
    {
        $all = $this->findAll();

        $t = [];

        /** @var  $a Calendrier */
        foreach ($all as $a) {
            $t[$a->getSemaineFormation()]['lundi'] = $a->getDatelundi();
            $t[$a->getSemaineFormation()]['semainereelle'] = $a->getSemaineReelle();
        }

        return $t;
    }
}
