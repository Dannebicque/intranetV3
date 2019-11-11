<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/EtudiantRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 11/11/2019 12:10
 * @lastUpdate 10/11/2019 17:20
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\Query;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\Routing\RouterInterface;

/**
 * @method Etudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method Etudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method Etudiant[]    findAll()
 * @method Etudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EtudiantRepository extends ServiceEntityRepository
{
    private $router;

    /**
     * EtudiantRepository constructor.
     *
     * @param RegistryInterface $registry
     * @param RouterInterface   $router
     */
    public function __construct(RegistryInterface $registry, RouterInterface $router)
    {
        parent::__construct($registry, Etudiant::class);
        $this->router = $router;
    }

    /**
     * @param $getId
     * @param $filters
     * @param $start
     * @param $length
     *
     * @return array
     */
    public function getArrayEtudiantsByDepartement($getId, $filters, $start, $length): array
    {
        $etudiants = $this->getByDepartement($getId, $filters, $start, $length);
        $tab = [];
        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $t = [];

            $t['numetudiant'] = $etudiant->getId();
            $t['nom'] = $etudiant->getNom();
            $t['prenom'] = $etudiant->getPrenom();
            $t['semestre'] = $etudiant->getSemestre() ? $etudiant->getSemestre()->getLibelle() : '-';
            $t['profil'] = '<a href="'.$this->router->generate('user_profil', ['type' => 'etudiant', 'slug' => $etudiant->getSlug()]).'"
       class="btn btn-info btn-outline btn-square"
       data-provide="tooltip"
       target="_blank"
       data-placement="bottom"
       title="Profil de l\'étudiant">
        <i class="fa fa-info"></i>
        <span class="sr-only">Profil de l\'étudiant</span>
    </a>';

            $tab[] = $t;
        }

        return $tab;
    }

    /**
     * @param      $departement
     * @param      $data
     * @param int  $page
     * @param null $max
     * @param bool $getResult
     *
     * @return Query|mixed
     */
    public function getByDepartement($departement, $data, $page = 0, $max = null, $getResult = true)
    {

        $qb = $this->_em->createQueryBuilder();
        $query = isset($data['query']) && $data['query'] ? $data['query'] : null;
        $order = isset($data['order']) && $data['order'] ? $data['order'] : null;
        $qb
            ->select('u')
            ->from(Etudiant::class, 'u')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            // ->andWhere('u.visible = :visible')
            // ->andWhere('u.anneesortie = :anneesortie')
            ->setParameters(['departement' => $departement]);

        switch ($order[0]['column']) {
            case 0:
                $qb->orderBy('u.numEtudiant', $order[0]['dir']);
                break;
            case 1:
                $qb->orderBy('u.nom', $order[0]['dir']);
                break;
            case 2:
                $qb->orderBy('u.prenom', $order[0]['dir']);
                break;
            case 3:
                $qb->orderBy('s.libelle', $order[0]['dir']);
                break;
        }

        if ($query) {
            $qb
                ->andWhere('u.nom like :query')
                ->orWhere('u.prenom like :query')
                ->setParameter('query', '%' . $query . '%');
        }

        if ($max) {
            $preparedQuery = $qb->getQuery()
                ->setMaxResults($max)
                ->setFirstResult($page * $max);
        } else {
            $preparedQuery = $qb->getQuery();
        }

        return $getResult ? $preparedQuery->getResult() : $preparedQuery;
    }

    /**
     * @param $semestre
     *
     * @return array
     */
    public function findBySemestre($semestre): array
    {
        return $this->createQueryBuilder('e')
            ->where('e.semestre = :semestre')
            ->setParameter('semestre', $semestre)
            ->orderBy('e.nom', 'ASC')
            ->orderBy('e.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $slug
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findOneBySlug($slug)
    {
        return $this->createQueryBuilder('e')
            ->where('e.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param $needle
     *
     * @return array
     */
    public function search($needle): array
    {
        $query = $this->searchObject($needle);

        $t = [];

        /** @var Etudiant $etudiant */
        foreach ($query as $etudiant) {
            $tt = [];
            $tt['displayPr'] = $etudiant->getDisplayPr();
            $tt['slug'] = $etudiant->getSlug();
            $tt['photo'] = $etudiant->getPhotoName();
            $tt['mailUniv'] = $etudiant->getMailUniv();
            $tt['mailPerso'] = $etudiant->getMailPerso();
            $tt['semestre'] = $etudiant->getSemestre() !== null ? $etudiant->getSemestre()->getLibelle() : null;
            $tt['semestreId'] = $etudiant->getSemestre() !== null ? $etudiant->getSemestre()->getId() : null;
            $tt['diplomeId'] = $etudiant->getSemestre() !== null ? $etudiant->getDiplome()->getId() : null;
            $tt['promo'] = $etudiant->getPromotion();
            $tt['anneeSortie'] = $etudiant->getAnneeSortie();
            $gr = '';
            foreach ($etudiant->getGroupes() as $groupe) {
                $gr .= $groupe->getLibelle().', ';
            }
            $tt['groupes'] = substr($gr, 0, -2);
            $t[] = $tt;
        }

        return $t;
    }

    /**
     * @param $uuid
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findOneByUuid($uuid)
    {
        $query = $this->createQueryBuilder('e')
            ->where('e.uuid = :uuid')
            ->setParameter('uuid', $uuid);

        return $query->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param Annee $annee
     *
     * @return mixed
     */
    public function findByAnnee(Annee $annee)
    {
        $query = $this->createQueryBuilder('e');
        $i = 1;
        foreach ($annee->getSemestres() as $semestre) {
            $query->orWhere('e.semestre = ?' . $i)
                ->setParameter($i, $semestre->getId());
            $i++;
        }

        return $query->orderBy('e.nom', 'ASC')
            ->orderBy('e.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function searchObject($needle)
    {
        return $this->createQueryBuilder('p')
            ->where('p.nom LIKE :needle')
            ->orWhere('p.prenom LIKE :needle')
            ->orWhere('p.username LIKE :needle')
            ->orWhere('p.mailUniv LIKE :needle')
            ->orWhere('p.numEtudiant LIKE :needle')
            ->orWhere('p.numIne LIKE :needle')
            ->setParameter('needle', '%' . $needle . '%')
            ->orderBy('p.nom', 'ASC')
            ->orderBy('p.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findBySemestreCodeApogee($codeSemestre)
    {
        return $this->createQueryBuilder('e')
            ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->where('s.codeApogee = :code')
            ->setParameter('code', $codeSemestre)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $code
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findByCode($code)
    {
        return $this->createQueryBuilder('p')
            ->where('MD5(p.slug) = :code')
            ->setParameter('code', $code)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findBySemestreArray(Semestre $semestre)
    {
        $etudiants = $this->findBySemestre($semestre);
        $t = [];

        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $t[$etudiant->getNumEtudiant()] = $etudiant;
        }

        return $t;
    }
}
