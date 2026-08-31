<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/EtudiantRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2026 18:33
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\EtudiantSemestreAnnee;
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

    /**
     * Recherche paginée pour le sélecteur d'étudiants de l'Événement.
     *
     * @param int|null $departementId
     * @param int[] $semestreIds
     * @param int[] $groupeIds
     * @param int|null $groupeTypeId
     * @param string $q
     * @param int $page
     * @param int $limit
     * @return array{data: array<int, array<string, mixed>>, total: int}
     */
    public function searchForEvenement(?int $departementId, array $semestreIds, array $groupeIds, string $q, int $page, int $limit): array
    {
        $qb = $this->createQueryBuilder('e')
            ->select('e.id as id, e.nom as nom, e.prenom as prenom, s.libelle as semestre')
            ->leftJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->leftJoin('e.etudiantSemestreAnnees', 'esa')
            ->leftJoin('esa.semestre', 'esa_s')
            ->leftJoin('e.groupes', 'g')
        ;

        // Ne retourner que les étudiants en formation
        $qb->andWhere('e.anneeSortie = 0');

        if (null !== $departementId && $departementId > 0) {
            $qb->andWhere('e.departement = :departement')
                ->setParameter('departement', $departementId);
        }

        if (!empty($semestreIds)) {
            $qb->andWhere('(s.id IN (:semestres) OR esa_s.id IN (:semestres))')
                ->setParameter('semestres', $semestreIds);
        }

        if (!empty($groupeIds)) {
            $qb->andWhere('g.id IN (:groupes)')
                ->setParameter('groupes', $groupeIds);
        }

        if ('' !== trim($q)) {
            $qb->andWhere('LOWER(e.nom) LIKE :q OR LOWER(e.prenom) LIKE :q')
                ->setParameter('q', '%' . mb_strtolower($q) . '%');
        }

        $qb->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value)
            ->groupBy('e.id, s.libelle');

        // Count total (distinct etudiants)
        $countQb = clone $qb;
        $countQb->resetDQLPart('select')
            ->resetDQLPart('orderBy')
            ->resetDQLPart('groupBy')
            ->select('COUNT(DISTINCT e.id)');
        $total = (int) $countQb->getQuery()->getSingleScalarResult();

        // Pagination
        $offset = ($page - 1) * $limit;
        $data = $qb->setFirstResult($offset)
            ->setMaxResults($limit)
            ->getQuery()
            ->getArrayResult();

        return [
            'data' => $data,
            'total' => $total,
        ];
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


    public function findBySemestreBuilder(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): QueryBuilder
    {
        $qb = $this->createQueryBuilder('e')
            ->leftJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->leftJoin('e.etudiantSemestreAnnees', 'esa', 'WITH', 'esa.anneeUniversitaire = :anneeUniversitaire')
            ->leftJoin('esa.semestre', 'esa_s');

        return $qb->where(
            $qb->expr()->orX(
                $qb->expr()->andX(
                    $qb->expr()->isNotNull('esa.id'),
                    $qb->expr()->eq('esa_s.id', ':semestreId')
                ),
                $qb->expr()->andX(
                    $qb->expr()->isNull('esa.id'),
                    $qb->expr()->eq('s.id', ':semestreId')
                )
            )
        )
            ->setParameter('semestreId', $semestre->getId())
            ->setParameter('anneeUniversitaire', $anneeUniversitaire)
            ->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value);
    }

    public function findBySemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->findBySemestreBuilder($semestre, $anneeUniversitaire)
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

    public function search(string $needle, Departement $departement, AnneeUniversitaire $anneeUniversitaire): array
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
            $tt['semestre'] = null !== $etudiant->getSemestreActif($anneeUniversitaire) ? $etudiant->getSemestreActif($anneeUniversitaire)->getLibelle() : 'non défini';
            $tt['semestreId'] = $etudiant->getSemestreActif($anneeUniversitaire)?->getId();
            $tt['diplomeId'] = null !== $etudiant->getSemestreActif($anneeUniversitaire) ? $etudiant->getDiplome($anneeUniversitaire)?->getId() : null;
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

    public function findBySemestreArray(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        $etudiants = $this->findByOrdreSemestreAndDiplome($semestre->getOrdreLmd(), $semestre->getDiplome(), $anneeUniversitaire);
        $t = [];

        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $t[$etudiant->getNumEtudiant()] = $etudiant;
        }

        return $t;
    }

    public function findByDepartementArray(Departement $departement, AnneeUniversitaire $anneeUniversitaire): array
    {
        $t = [];
        foreach ($departement->getDiplomes() as $diplome) {
            foreach ($diplome->getSemestres() as $semestre) {
                $etudiants = $this->findBySemestre($semestre, $anneeUniversitaire);
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
            ->select('e.id, g.libelle, g.id as groupeId')
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
            $t[$q['id']][] = ['libelle' => $q['libelle'], 'id' => $q['groupeId']];
        }

        return $t;
    }

    public function findByOrdreSemestreAndDiplome(int $ordreLmd, Diplome $diplome, AnneeUniversitaire $anneeUniversitaire): array
    {
        if (null !== $diplome->getParent()) {
            $diplome = $diplome->getParent();
        }

        $qb = $this->createQueryBuilder('e');
        $qb->leftJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->leftJoin(EtudiantSemestreAnnee::class, 'ss', 'WITH', 'e.id = ss.etudiant AND ss.anneeUniversitaire = :anneeUniversitaire')
            ->leftJoin('s.annee', 'a')
            ->leftJoin('a.diplome', 'd')
            ->leftJoin('ss.semestre', 's2')
            ->leftJoin('s2.annee', 'a2')
            ->leftJoin('a2.diplome', 'd2');

        $cond1 = $qb->expr()->andX(
            $qb->expr()->orX('d.id = :diplome', 'd.parent = :diplome'),
            $qb->expr()->eq('s.ordreLmd', ':ordreLmd')
        );

        $cond2 = $qb->expr()->andX(
            $qb->expr()->orX('d2.id = :diplome', 'd2.parent = :diplome'),
            $qb->expr()->eq('s2.ordreLmd', ':ordreLmd')
        );

        return $qb->andWhere(
            $qb->expr()->orX(
                $qb->expr()->andX($qb->expr()->isNotNull('ss.id'), $cond2),
                $qb->expr()->andX($qb->expr()->isNull('ss.id'), $cond1)
            )
        )
            ->andWhere('e.anneeSortie = 0')
            ->setParameter('ordreLmd', $ordreLmd)
            ->setParameter('diplome', $diplome->getId())
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId())
            ->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findBySemestresBuilder(Collection $semestres, AnneeUniversitaire $anneeUniversitaire): QueryBuilder
    {
        return $this->createQueryBuilder('e')
            ->leftJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->leftJoin('e.etudiantSemestreAnnees', 'esa', 'WITH', 'esa.anneeUniversitaire = :anneeUniversitaire')
            ->leftJoin('esa.semestre', 'esa_s')
            ->where('s IN (:semestres) OR esa_s IN (:semestres)')
            ->setParameter('semestres', $semestres)
            ->setParameter('anneeUniversitaire', $anneeUniversitaire)
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

    public function findByEvenement(int $evenementId): array
    {
        return $this->createQueryBuilder('e')
            ->innerJoin('e.etudiantEvenements', 'ee')
            ->innerJoin('ee.evenement', 'ev')
            ->where('ev.id = :evenementId')
            ->setParameter('evenementId', $evenementId)
            ->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function countBySemestre(mixed $semestre, AnneeUniversitaire $anneeUniversitaire): int
    {
        $qb = $this->createQueryBuilder('e')
            ->select('count(e.id)')
            ->leftJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->leftJoin('e.etudiantSemestreAnnees', 'esa', 'WITH', 'esa.anneeUniversitaire = :anneeUniversitaire')
            ->leftJoin('esa.semestre', 'esa_s');

        return (int)$qb->where(
            $qb->expr()->orX(
                $qb->expr()->andX(
                    $qb->expr()->isNotNull('esa.id'),
                    $qb->expr()->eq('esa_s.id', ':semestreId')
                ),
                $qb->expr()->andX(
                    $qb->expr()->isNull('esa.id'),
                    $qb->expr()->eq('s.id', ':semestreId')
                )
            )
        )
            ->setParameter('semestreId', $semestre->getId())
            ->setParameter('anneeUniversitaire', $anneeUniversitaire)
            ->getQuery()
            ->getSingleScalarResult();
    }
}
