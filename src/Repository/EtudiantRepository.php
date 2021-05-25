<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/EtudiantRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/05/2021 16:12
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
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
     */
    public function __construct(ManagerRegistry $registry, RouterInterface $router)
    {
        parent::__construct($registry, Etudiant::class);
        $this->router = $router;
    }

    public function getData($getId): array
    {
        $etudiants = $this->findBySemestre($getId);
        $tab = [];
        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $t = [];

            $t['id'] = $etudiant->getId();
            $t['numetudiant'] = $etudiant->getNumEtudiant();
            $t['nom'] = $etudiant->getNom();
            $t['prenom'] = $etudiant->getPrenom();
            $t['semestre'] = $etudiant->getSemestre() ? $etudiant->getSemestre()->getLibelle() : '-';
            $tab[] = $t;
        }

        return $tab;
    }

    public function getArrayEtudiantsByDepartement($getId, $filters, $start, $length): array
    {
        $etudiants = $this->getByDepartement($getId, $filters, $start, $length);
        $tab = [];
        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $t = [];

            $t['id'] = $etudiant->getId();
            $t['numetudiant'] = $etudiant->getNumEtudiant();
            $t['nom'] = $etudiant->getNom();
            $t['prenom'] = $etudiant->getPrenom();
            $t['semestre'] = $etudiant->getSemestre() ? $etudiant->getSemestre()->getLibelle() : '-';
            $t['profil'] = '<a href="' . $this->router->generate('user_profil',
                    ['type' => 'etudiant', 'slug' => $etudiant->getSlug()]) . '"
       class="btn btn-info btn-outline btn-square"
       data-provide="tooltip"
       target="_blank"
       data-placement="bottom"
       title="Profil de l\'étudiant">
        <i class="fas fa-info"></i>
        <span class="sr-only">Profil de l\'étudiant</span>
    </a> <a href="' . $this->router->generate('administration_etudiant_edit',
                    ['origin' => 'etudiant', 'id' => $etudiant->getId()]) . '"
       class="btn btn-warning btn-outline btn-square"
       data-provide="tooltip"
       data-placement="bottom"
       title="Modifier les données de l\'étudiant">
        <i class="fas fa-edit"></i>
        <span class="sr-only">Modifier les données de l\'étudiant</span>
    </a>';
            $t['etat'] = '<select class="form-control changeEtat" data-etudiant="' . $etudiant->getUuidString() . '">
                        <option value="">Choisir une action</option>
                        <option value="' . Constantes::SCOLARITE_DIPLOME . '">Diplômé</option>
                        <option value="' . Constantes::SEMESTRE_REORIENTE . '">Réorienter</option>
                        <option value="erreur">Erreur/Pas dans la formation</option>
                        </select>';

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
        $qb = $this->createQueryBuilder('u');
        $query = isset($data['query']) && $data['query'] ? $data['query'] : null;
        $order = isset($data['order']) && $data['order'] ? $data['order'] : null;
        $qb
            ->leftJoin(Semestre::class, 's', 'WITH', 's.id=u.semestre')
            ->where('u.departement = :departement')
            ->setParameters(['departement' => $departement]);
        if (null !== $order) {
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
        } else {
            $qb->orderBy('u.nom', 'ASC')
                ->addOrderBy('u.prenom', 'ASC');
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

    public function findBySemestreBuilder($semestre): QueryBuilder
    {
        return $this->createQueryBuilder('e')
            ->where('e.semestre = :semestre')
            ->andWhere('e.anneeSortie = 0')
            ->setParameter('semestre', $semestre)
            ->orderBy('e.nom', 'ASC')
            ->addOrderBy('e.prenom', 'ASC');
    }

    public function findBySemestre($semestre): array
    {
        return $this->findBySemestreBuilder($semestre)
            ->getQuery()
            ->getResult();
    }

    /**
     *
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

    public function search($needle, Departement $departement): array
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
            $tt['semestre'] = null !== $etudiant->getSemestre() ? $etudiant->getSemestre()->getLibelle() : 'non défini';
            $tt['semestreId'] = null !== $etudiant->getSemestre() ? $etudiant->getSemestre()->getId() : null;
            $tt['diplomeId'] = null !== $etudiant->getSemestre() ? $etudiant->getDiplome()->getId() : null;
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

    public function findByAnnee(Annee $annee)
    {
        $query = $this->createQueryBuilder('e');
        $i = 1;
        foreach ($annee->getSemestres() as $semestre) {
            $query->orWhere('e.semestre = ?' . $i)
                ->setParameter($i, $semestre->getId());
            ++$i;
        }

        return $query->orderBy('e.nom', 'ASC')
            ->addOrderBy('e.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function searchObject($needle, Departement $departement)
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
            ->orderBy('p.nom', 'ASC')
            ->orderBy('p.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function searchScolarite($needle)
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

    /**
     *
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

    public function findBySemestreArray(Semestre $semestre): array
    {
        $etudiants = $this->findBySemestre($semestre);
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

    public function findEtudiantEnFormation()
    {
        return $this->createQueryBuilder('e')
            ->where('e.anneeSortie = 0')
            ->getQuery()
            ->getResult();
    }

    public function statistiquesEtudiants()
    {
        //SELECT count(etudiant.id) FROM `etudiant`
        //INNER JOIN semestre ON semestre.id=etudiant.semestre_id
        //INNER JOIN annee ON semestre.annee_id=annee.id
        //INNER JOIN diplome ON annee.diplome_id=diplome.id
        //WHERE diplome.actif=1 AND etudiant.annee_sortie=0
        //GROUP BY diplome.id
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
     * @param $login
     * @param $date
     *
     * @return int|mixed|string|null
     * @throws NonUniqueResultException
     *
     */
    public function identificationRdd($login, $date)
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
}
