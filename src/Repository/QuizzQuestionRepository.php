<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/QuizzQuestionRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\Personnel;
use App\Entity\QuizzQuestion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

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

    public function findByUser(Personnel $getConnectedUser)
    {
        return $this->findBy(['auteur' => $getConnectedUser->getId()]);
    }
}
