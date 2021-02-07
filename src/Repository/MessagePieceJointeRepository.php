<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/MessagePieceJointeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

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
