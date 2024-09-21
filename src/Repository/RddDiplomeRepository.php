<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/RddDiplomeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\RddDiplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RddDiplome|null find($id, $lockMode = null, $lockVersion = null)
 * @method RddDiplome|null findOneBy(array $criteria, array $orderBy = null)
 * @method RddDiplome[]    findAll()
 * @method RddDiplome[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<RddDiplome>
 */
class RddDiplomeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RddDiplome::class);
    }

    /**
     * @throws NoResultException
     * @throws NonUniqueResultException
     */
    public function countComplet(): ?int
    {
        return $this->createQueryBuilder('p')
            ->where('p.confirme = true')
            ->select('COUNT(p)')
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function getEtudiantAvecQuestionnaire(): array
    {
        return $this->createQueryBuilder('r')
            ->join(Etudiant::class, 'e', 'WITH', 'r.numEtudiant = e.numEtudiant')
            ->where('r.enqueteAFaire = true')
            ->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }
}
