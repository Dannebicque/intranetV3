<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/EtudiantRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/01/2026 18:34
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use Carbon\CarbonInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Etudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method Etudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method Etudiant[]    findAll()
 * @method Etudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Etudiant>
 */
class EtudiantRepository extends ServiceEntityRepository
{
    /**
     * EtudiantRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Etudiant::class);
    }

    public function getByDepartement(
        Departement $departement
    ): mixed
    {
        $qb = $this->createQueryBuilder('u');
        $qb
            ->leftJoin(Semestre::class, 's', 'WITH', 's.id=u.semestre')
            ->where('u.departement = :departement')
            ->setParameters(['departement' => $departement]);

        return $qb->getQuery()->getResult();
    }

//    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
//    {
//        return $this->createQueryBuilder('e')
//            ->where('e.semestre = :semestre')
//            ->andWhere('e.anneeSortie = 0')
//            ->setParameter('semestre', $semestre)
//            ->orderBy('e.nom', Order::Ascending->value)
//            ->addOrderBy('e.prenom', Order::Ascending->value);
//    }


    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
    {
        return $this->createQueryBuilder('e')
            ->leftJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->leftJoin('e.semestres', 'ss')
            ->where('s = :semestre OR ss = :semestre')
            ->setParameter('semestre', $semestre)
            ->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value);
    }

    public function findBySemestre(Semestre $semestre): array
    {
        return $this->findBySemestreBuilder($semestre)
            ->getQuery()
            ->getResult();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOneBySlug(string $slug): ?Etudiant
    {
        return $this->createQueryBuilder('e')
            ->where('e.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function search(string $needle, Departement $departement): array
    {
        $query = $this->searchObject($needle, $departement);

        $t = [];

        /** @var Etudiant $etudiant */
        foreach ($query as $etudiant) {
            $tt = [];
            $tt['displayPr'] = $etudiant->getDisplayPr();
            $tt['slug'] = $etudiant->getSlug();
            $tt['photo'] = $etudiant->getPhotoName();
            $tt['mailUniv'] = $etudiant->getMailUniv();
            $tt['mailPerso'] = $etudiant->getMailPerso();
            $tt['semestre'] = null !== $etudiant->getSemestreActif() ? $etudiant->getSemestreActif()->getLibelle() : 'non défini';
            $tt['semestreId'] = $etudiant->getSemestreActif()?->getId();
            $tt['diplomeId'] = null !== $etudiant->getSemestreActif() ? $etudiant->getDiplome()?->getId() : null;
            $tt['promo'] = $etudiant->getPromotion();
            $tt['anneeSortie'] = $etudiant->getAnneeSortie();
            $tt['avatarInitiales'] = $etudiant->getAvatarInitiales();
            $gr = '';
            foreach ($etudiant->getGroupes() as $groupe) {
                $gr .= $groupe->getLibelle() . ', ';
            }
            $tt['groupes'] = mb_substr($gr, 0, -2);
            $t[] = $tt;
        }

        return $t;
    }

    public function findByAnnee(Annee $annee): array
    {
        $query = $this->createQueryBuilder('e');
        $i = 1;
        foreach ($annee->getSemestres() as $semestre) {
            $query->orWhere('e.semestre = ?' . $i)
                ->setParameter($i, $semestre->getId());
            ++$i;
        }

        return $query->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function searchObject(string $needle, Departement $departement): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.nom LIKE :needle')
            ->orWhere('p.prenom LIKE :needle')
            ->orWhere('p.username LIKE :needle')
            ->orWhere('p.mailUniv LIKE :needle')
            ->orWhere('p.numEtudiant LIKE :needle')
            ->orWhere('p.numIne LIKE :needle')
            ->andWhere('p.departement = :departement')
            ->setParameter('needle', '%' . $needle . '%')
            ->setParameter('departement', $departement->getId())
            ->orderBy('p.nom', Order::Ascending->value)
            ->addOrderBy('p.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function searchScolarite(string $needle): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.nom LIKE :needle')
            ->orWhere('p.prenom LIKE :needle')
            ->orWhere('p.username LIKE :needle')
            ->orWhere('p.mailUniv LIKE :needle')
            ->orWhere('p.numEtudiant LIKE :needle')
            ->orWhere('p.numIne LIKE :needle')
            ->setParameter('needle', '%' . $needle . '%')
            ->orderBy('p.nom', Order::Ascending->value)
            ->addOrderBy('p.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findByCode(string $code): ?Etudiant
    {
        return $this->createQueryBuilder('p')
            ->where('MD5(p.slug) = :code')
            ->setParameter('code', $code)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findBySemestreArray(Semestre $semestre): array
    {
        $etudiants = $this->findByOrdreSemestreAndDiplome($semestre->getOrdreLmd(), $semestre->getDiplome());
        $t = [];

        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $t[$etudiant->getNumEtudiant()] = $etudiant;
        }

        return $t;
    }

    public function findByDepartementArray(Departement $departement): array
    {
        $t = [];
        foreach ($departement->getDiplomes() as $diplome) {
            foreach ($diplome->getSemestres() as $semestre) {
                $etudiants = $this->findBySemestre($semestre);
                /** @var Etudiant $etudiant */
                foreach ($etudiants as $etudiant) {
                    $t[$etudiant->getNumEtudiant()] = $etudiant;
                }
            }
        }

        return $t;
    }

    public function findEtudiantEnFormation(): array
    {
        return $this->createQueryBuilder('e')
            ->where('e.anneeSortie = 0')
            ->andWhere('e.semestre IS NOT NULL')
            ->getQuery()
            ->getResult();
    }

    public function statistiquesEtudiants(): array
    {
        // SELECT count(etudiant.id) FROM `etudiant`
        // INNER JOIN semestre ON semestre.id=etudiant.semestre_id
        // INNER JOIN annee ON semestre.annee_id=annee.id
        // INNER JOIN diplome ON annee.diplome_id=diplome.id
        // WHERE diplome.actif=1 AND etudiant.annee_sortie=0
        // GROUP BY diplome.id
        $query = $this->createQueryBuilder('e')
            ->select('d.id, count(e.id)')
            ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre=s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id=s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id=a.diplome')
            ->where('d.actif = :actif')
            ->andWhere('e.anneeSortie = :sortie')
            ->setParameter('actif', true)
            ->setParameter('sortie', 0)
            ->groupBy('d.id')
            ->getQuery()
            ->getResult();
        $t = [];
        foreach ($query as $q) {
            $t[$q['id']] = $q[1];
        }

        return $t;
    }

    /**
     * @throws NonUniqueResultException
     */
    public function identificationRdd(string $login, CarbonInterface $date)
    {
        return $this->createQueryBuilder('p')
            ->select('p.numEtudiant')
            ->where('p.mailUniv = :login')
            ->orWhere('p.username = :login')
            ->orWhere('p.numEtudiant = :login')
            ->orWhere('p.numIne = :login')
            ->andWhere('p.dateNaissance = :date')
            ->setParameter('date', $date->format('Y-m-d'))
            ->setParameter('login', $login)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getEtudiantGroupes(Semestre $semestre): array
    {
        $query = $this->createQueryBuilder('e')
            ->select('e.id, g.libelle')
            ->join('e.groupes', 'g')
            ->where('e.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        foreach ($query as $q) {
            if (!array_key_exists($q['id'], $t)) {
                $t[$q['id']] = [];
            }
            $t[$q['id']][] = $q['libelle'];
        }

        return $t;
    }

    public function findByOrdreSemestreAndDiplome(int $ordreLmd, Diplome $diplome): array
    {
        if (null !== $diplome->getParent()) {
            $diplome = $diplome->getParent();
        }

        $qb = $this->createQueryBuilder('e');
        $qb->leftJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->leftJoin('e.semestres', 'ss')
            ->leftJoin('s.annee', 'a')
            ->leftJoin('a.diplome', 'd')
            ->leftJoin('ss.annee', 'a2')
            ->leftJoin('a2.diplome', 'd2');

        $cond1 = $qb->expr()->andX(
            $qb->expr()->orX('d.id = :diplome', 'd.parent = :diplome'),
            $qb->expr()->eq('s.ordreLmd', ':ordreLmd')
        );

        $cond2 = $qb->expr()->andX(
            $qb->expr()->orX('d2.id = :diplome', 'd2.parent = :diplome'),
            $qb->expr()->eq('ss.ordreLmd', ':ordreLmd')
        );

        return $qb->andWhere($qb->expr()->orX($cond1, $cond2))
            ->andWhere('e.anneeSortie = 0')
            ->setParameter('ordreLmd', $ordreLmd)
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

//    public function findBySemestresBuilder(Collection $semestres): QueryBuilder
//    {
//        return $this->createQueryBuilder('e')
//            ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre=s.id')
//            ->where('s IN (:semestres)')
//            ->setParameter('semestres', $semestres)
//            ->orderBy('e.nom', Order::Ascending->value)
//            ->addOrderBy('e.prenom', Order::Ascending->value);
//    }

    public function findBySemestresBuilder(Collection $semestres): QueryBuilder
    {
        return $this->createQueryBuilder('e')
            ->leftJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->leftJoin('e.semestres', 'ss')
            ->where('s IN (:semestres) OR ss IN (:semestres)')
            ->setParameter('semestres', $semestres)
            ->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value);
    }

    public function save(Etudiant $etudiant): void
    {
        $this->_em->persist($etudiant);
        $this->_em->flush();
    }

    public function findEduSignOutdated(): array
    {
        return $this->createQueryBuilder('e')
            ->where('e.idEduSign IS NOT NULL')
            ->andWhere('e.anneeSortie != 0')
            ->getQuery()
            ->getResult();
    }
}
