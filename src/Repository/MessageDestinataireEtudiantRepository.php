<?php

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\Message;
use App\Entity\MessageDestinataireEtudiant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method MessageDestinataireEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method MessageDestinataireEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method MessageDestinataireEtudiant[]    findAll()
 * @method MessageDestinataireEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MessageDestinataireEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, MessageDestinataireEtudiant::class);
    }

    public function findLast(Etudiant $user, $nbMessage = 0, $filtre = '')
    {
        $query = $this->createQueryBuilder('m')
            ->where('m.etudiant = :etudiant')
            ->setParameter('etudiant', $user->getId())
            ->orderBy('m.created', 'DESC');

        switch ($filtre){
            case 'all':
                $query->andWhere('m.etat = :read or m.etat = :unread')
                    ->setParameter('read', 'R')
                    ->setParameter('unread', 'U');
                break;
            case 'trash':
                $query->andWhere('m.etat = :delete')
                    ->setParameter('delete', 'D');
                break;
            case 'starred':
                $query->andWhere('m.starred = 1');
                break;
        }

        if ($nbMessage > 0) {
            $query->setMaxResults($nbMessage);
        }

        return $query->getQuery()
            ->getResult();
    }

    /**
     * @param $user
     * @param $message
     *
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findDest(Etudiant $user, Message $message): ?MessageDestinataireEtudiant
    {
        return $this->createQueryBuilder('m')
            ->where('m.etudiant = :etudiant')
            ->andWhere('m.message = :message')
            ->setParameter('etudiant', $user->getId())
            ->setParameter('message', $message->getId())
            ->getQuery()
            ->getOneOrNullResult();
    }
}
