<?php

namespace App\Repository;

use App\Entity\ArticleCategorie;
use App\Entity\Departement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ArticleCategorie|null find($id, $lockMode = null, $lockVersion = null)
 * @method ArticleCategorie|null findOneBy(array $criteria, array $orderBy = null)
 * @method ArticleCategorie[]    findAll()
 * @method ArticleCategorie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ArticleCategorieRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ArticleCategorie::class);
    }

    public function findByDepartementBuilder(Departement $departement): QueryBuilder
    {
        return $this->createQueryBuilder('c')
            ->where('c.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('c.libelle', 'ASC');
    }

    public function findByDepartementJson(Departement $departement)
    {
        $data = $this->findByDepartementBuilder($departement)->getQuery()->getResult();
        $t = [];
        /** @var ArticleCategorie $d */
        foreach ($data as $d) {
            $t[] = ['libelle' => $d->getLibelle(),
                'id' => $d->getId(),
                'nbArticles' => count($d->getArticles())];
        }

        return $t;
    }
}
