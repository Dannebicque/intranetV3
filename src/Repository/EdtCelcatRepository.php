<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/EdtCelcatRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Classes\Matieres\MatiereManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\EdtCelcat;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Salle;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\String\Exception\InvalidArgumentException;

/**
 * @method EdtCelcat|null find($id, $lockMode = null, $lockVersion = null)
 * @method EdtCelcat|null findOneBy(array $criteria, array $orderBy = null)
 * @method EdtCelcat[]    findAll()
 * @method EdtCelcat[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<EdtCelcat>
 */
class EdtCelcatRepository extends ServiceEntityRepository
{
    private string $chaine = '';
    private array $params = [];

    public function __construct(
        ManagerRegistry    $registry,
    )
    {
        parent::__construct($registry, EdtCelcat::class);
    }

    public function findEdtProf(Personnel $personnel, int $semaine, AnneeUniversitaire $anneeUniversitaire): array|int
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaineFormation = :semaine')
            ->andWhere('p.personnel = :idprof')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameters(['semaine' => $semaine, 'idprof' => $personnel->getId(), 'anneeUniversitaire' => $anneeUniversitaire])
            ->orderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.codeGroupe', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findEdtEtu(Etudiant $user, int $semaine, AnneeUniversitaire $anneeUniversitaire): null|array|int
    {
        if (null !== $user->getSemestre()) {
            $this->chaine = '';
            $this->params = [];

            $this->groupes($user);
            $this->params['semaine'] = $semaine;
            $this->params['anneeUniversitaire'] = $anneeUniversitaire->getId();
            $query = $this->createQueryBuilder('p')
                ->where('p.semaineFormation = :semaine')
                ->andWhere('p.anneeUniversitaire = :anneeUniversitaire');

            if ('' !== $this->chaine) {
                $query->andWhere($this->chaine);
            }

            $query->setParameters($this->params)
                ->orderBy('p.jour', Order::Ascending->value)
                ->addOrderBy('p.debut', Order::Ascending->value);

            return $query->getQuery()->getResult();
        }

        return null;
    }

    private function groupes(Etudiant $user): void
    {
        $i = 1;
        foreach ($user->getGroupes() as $groupe) {
            if (null !== $groupe->getTypeGroupe()) {
                if ($i > 1) {
                    $this->chaine .= ' OR ';
                }
                $this->chaine .= 'p.codeGroupe = :gr' . $i;

                $this->params['gr' . $i] = $groupe->getCodeApogee();
                ++$i;
            }
        }
    }

    public function deleteDepartement(
        int                 $codeCelcatDepartement,
        ?AnneeUniversitaire $anneeUniversitaire
    ): array|int
    {
        if (null === $anneeUniversitaire) {
            throw new InvalidArgumentException('L\'année universitaire n\'est pas définie');
        }

        return $this->createQueryBuilder('c')
            ->delete(EdtCelcat::class, 'c')
            ->where('c.anneeUniversitaire = :annee')
            ->andWhere('c.departementId = :departement')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('departement', $codeCelcatDepartement)
            ->getQuery()
            ->getResult();
    }

    public function findEdtSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array|int
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->andWhere('s.ordreLmd = :semestre')
            ->andWhere('p.anneeUniversitaire = :annee')
            ->setParameters([
                'semestre' => $semestre->getOrdreLmd(),
                'annee' => $anneeUniversitaire->getId(),
            ])
            ->orderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.codeGroupe', Order::Ascending->value);

        $ors = [];
        $diplome = $semestre->getDiplome()->getParent() ?? $semestre->getDiplome();
        foreach ($diplome->getEnfants() as $dip) {
            $ors[] = '(' . $query->expr()->orx('a.diplome = ' . $query->expr()->literal($dip->getId())) . ')';
        }
        $ors[] = '(' . $query->expr()->orx('a.diplome = ' . $query->expr()->literal($diplome->getId())) . ')';

        return $query->andWhere(implode(' OR ', $ors))
            ->getQuery()
            ->getResult();
    }

    public function getByPersonnelArray(Personnel $user): array|int
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.codePersonnel = :idprof')
            ->setParameter('idprof', $user->getNumeroHarpege())
            ->orderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.libGroupe', Order::Ascending->value)
            ->getQuery()
            ->getResult();

        return $this->transformeArray($query);
    }

    public function getByEtudiantArray(Etudiant $user, int $semaine, AnneeUniversitaire $anneeUniversitaire): array|int
    {
        $query = $this->findEdtEtu($user, $semaine, $anneeUniversitaire);

        return $this->transformeArray($query);
    }

    private function transformeArray(array $data): array
    {
        $t = [];
        /** @var EdtCelcat $event */
        foreach ($data as $event) {
            $pl = [];
            $pl['id'] = $event->getId();
            $pl['semaine'] = $event->getSemaineFormation();
            $pl['jour'] = $event->getJour();
            $pl['debut'] = $event->getDebut();
            $pl['fin'] = $event->getFin();
            $pl['commentaire'] = '';
            $pl['ical'] = $event->getDisplayIcal();
            $pl['salle'] = $event->getLibSalle();
            $t[] = $pl;
        }

        return $t;
    }

//    public function findEdtSemestreSemaine(Semestre $semestre, int $semaineFormationIUT, AnneeUniversitaire $anneeUniversitaire): array
//    {
//        $query = $this->createQueryBuilder('p')
//            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
//            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
//            ->where('p.semaineFormation = :semaine')
//            ->andWhere('s.ordreLmd = :semestre')
//            ->andWhere('p.anneeUniversitaire = :annee')
//            ->andWhere('a.diplome = :diplome')
//            ->setParameters([
//                'semaine' => $semaineFormationIUT,
//                'semestre' => $semestre->getOrdreLmd(),
//                'annee' => $anneeUniversitaire->getId(),])
//            ->setParameter('diplome', null !== $semestre->getDiplome()->getParent() ? $semestre->getDiplome()->getParent()->getId() : $semestre->getDiplome()->getId())
//            ->orderBy('p.jour', Order::Ascending)
//            ->addOrderBy('p.debut', Order::Ascending)
//            ->addOrderBy('p.codeGroupe', Order::Ascending);
//
//        return $query->getQuery()
//            ->getResult();
//    }

    public function findEdtSemestreSemaine(Semestre $semestre, int $semaineFormationIUT, AnneeUniversitaire $anneeUniversitaire)
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.semestre = :semestre')
            ->andwhere('p.semaineFormation = :semaine')
            ->andWhere('p.anneeUniversitaire = :annee')
            ->setParameters([
                'semaine' => $semaineFormationIUT,
                'semestre' => $semestre,
                'annee' => $anneeUniversitaire])
            ->orderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.codeGroupe', Order::Ascending->value);

        return $query->getQuery()
            ->getResult();

    }

    public function findEdtEduSign()
    {
        return $this->createQueryBuilder('p')
            ->where('p.idEduSign IS NOT NULL')
            ->getQuery()
            ->getResult();
    }

    public function findCours($date, $debut, $fin, $salle, $personnel, $groupe)
    {
        $debut = $debut->format('H:i:s');
        $fin = $fin->format('H:i:s');

        return $this->createQueryBuilder('p')
            ->where('p.dateCours = :date')
            ->andWhere('p.debut LIKE :debut')
            ->andWhere('p.fin LIKE :fin')
            ->andWhere('p.libSalle = :salle')
            ->andWhere('p.personnel = :personnel')
            ->setParameters([
                'date' => $date,
                'debut' => '%' . $debut . '%',
                'fin' => '%' . $fin . '%',
                'salle' => $salle,
                'personnel' => $personnel,
            ])
            ->getQuery()
//            ->getOneOrNullResult();
            ->getResult();
    }

    public function updateCourse($id)
    {
        $cours = $this->find($id);

        $this->save($cours);
    }

    public function save(EdtCelcat $edtCelcat): void
    {
        $this->_em->persist($edtCelcat);
        $this->_em->flush();
    }
}
