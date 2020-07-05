<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuizzQuestionRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Repository;

use App\Entity\Personnel;
use App\Entity\QuizzQuestion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QuizzQuestion|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuizzQuestion|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuizzQuestion[]    findAll()
 * @method QuizzQuestion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuizzQuestionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuizzQuestion::class);
    }

    public function findByUser(Personnel $getConnectedUser): array
    {
        return $this->findBy(['auteur' => $getConnectedUser->getId()]);
    }
}
