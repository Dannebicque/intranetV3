<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/NotificationRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/09/2021 13:21
 */

namespace App\Repository;

use App\Entity\Notification;
use App\Entity\Personnel;
use App\Interfaces\UtilisateurInterface;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Exception;

/**
 * @method Notification|null find($id, $lockMode = null, $lockVersion = null)
 * @method Notification|null findOneBy(array $criteria, array $orderBy = null)
 * @method Notification[]    findAll()
 * @method Notification[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Notification>
 */
class NotificationRepository extends ServiceEntityRepository
{
    private const DAYS_BEFORE_REMOVE = 30;

    /**
     * NotificationRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Notification::class);
    }

    /**
     * @throws Exception
     */
    public function deleteOldNotification(): mixed
    {
        return $this->getDeleteOldNotification()->delete()->getQuery()->execute();
    }

    /**
     * @throws Exception
     */
    public function getDeleteOldNotification(): QueryBuilder
    {
        return $this->createQueryBuilder('n')
            ->where('n.created < :date')
            ->setParameter('date', new DateTime(-self::DAYS_BEFORE_REMOVE.'days'));
    }

    public function findNonLuByUser(UtilisateurInterface $user): array
    {
        $query = $this->createQueryBuilder('n')
            ->where('n.lu = false');

        if ($user instanceof Personnel) {
            $query->andWhere('n.personnel = :user');
        } else {
            $query->andWhere('n.etudiant = :user');
        }
        $query->setParameter('user', $user->getId());

        return $query->getQuery()->getResult();
    }

    public function findByUser(UtilisateurInterface $user): array
    {
        $query = $this->createQueryBuilder('n');

        if ($user instanceof Personnel) {
            $query->where('n.personnel = :user');
            $typeUser = 'p';
        } else {
            $query->andWhere('n.etudiant = :user');
            $typeUser = 'e';
        }
        $query->andWhere('n.typeUser = :typeUser');
        $query->setParameter('user', $user->getId());
        $query->setParameter('typeUser', $typeUser);

        return $query->getQuery()->getResult();
    }
}
