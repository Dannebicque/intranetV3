<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/CalendrierRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/08/2022 10:13
 */

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
 * @extends ServiceEntityRepository<Calendrier>
 */
class CalendrierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Calendrier::class);
    }

    public function findByAnneeUniversitaire(AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('c')
            ->where('c.anneeUniversitaire = :annee')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->getQuery()
            ->getResult();
    }

    public function findCalendrierArray(AnneeUniversitaire $anneeUniversitaire): array
    {
        $all = $this->findByAnneeUniversitaire($anneeUniversitaire);

        $t = [];

        foreach ($all as $a) {
            $t[$a->getSemaineFormation()]['lundi'] = $a->getDatelundi();
            $t[$a->getSemaineFormation()]['semainereelle'] = $a->getSemaineReelle();
        }

        return $t;
    }
}
