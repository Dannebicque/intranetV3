<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/EtudiantSemestreAnneeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2026 10:24
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\EtudiantSemestreAnnee;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EtudiantSemestreAnnee>
 *
 * @method EtudiantSemestreAnnee|null find($id, $lockMode = null, $lockVersion = null)
 * @method EtudiantSemestreAnnee|null findOneBy(array $criteria, array $orderBy = null)
 * @method EtudiantSemestreAnnee[]    findAll()
 * @method EtudiantSemestreAnnee[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EtudiantSemestreAnneeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EtudiantSemestreAnnee::class);
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->createQueryBuilder('e')
            ->join('e.etudiant', 'etu')
            ->where('etu.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('etu.nom', 'ASC')
            ->addOrderBy('etu.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
