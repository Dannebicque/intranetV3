<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/MessagePieceJointeRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\MessagePieceJointe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MessagePieceJointe|null find($id, $lockMode = null, $lockVersion = null)
 * @method MessagePieceJointe|null findOneBy(array $criteria, array $orderBy = null)
 * @method MessagePieceJointe[]    findAll()
 * @method MessagePieceJointe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MessagePieceJointeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MessagePieceJointe::class);
    }
}
