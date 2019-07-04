<?php

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\CelcatEvent;
use App\Entity\Etudiant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CelcatEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method CelcatEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method CelcatEvent[]    findAll()
 * @method CelcatEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CelcatEventsRepository extends ServiceEntityRepository
{
    protected $groupetp;
    protected $groupetd;
    protected $groupecm;

    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CelcatEvent::class);
    }

    public function findEdtProf($getNumeroHarpege, int $semaine)
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaineFormation = :semaine')
            ->andWhere('p.codePersonnel = :idprof')
            ->setParameters(array('semaine' => $semaine, 'idprof' => $getNumeroHarpege))
            ->orderBy('p.jour, p.debut, p.codeGroupe')
            ->getQuery()
            ->getResult();
    }

    public function findEdtEtu(Etudiant $user, int $semaine)
    {
        if ($user->getSemestre() !== null) {
            $this->groupes($user);

            return $this->createQueryBuilder('p')
                ->where('p.semaineFormation = :semaine')
                ->andWhere('p.codeGroupe = :groupecm OR p.codeGroupe = :groupetd OR p.codeGroupe = :groupetp')
                ->setParameters(array(
                    'semaine'  => $semaine,
                    'groupecm' => $this->groupecm,
                    'groupetd' => $this->groupetd,
                    'groupetp' => $this->groupetp,
                ))
                ->orderBy('p.jour, p.debut')
                ->getQuery()
                ->getResult();
        }
        return null;
    }

    /**
     * @param $user
     */
    private function groupes(Etudiant $user): void
    {
        foreach ($user->getGroupes() as $groupe) {
            if ($groupe->getTypeGroupe()->isTD()) {
                $this->groupetd = $groupe->getCodeApogee();
            } else if ($groupe->getTypegroupe()->isTP()) {
                $this->groupetp = $groupe->getCodeApogee();
            } else {
                $this->groupecm = $groupe->getCodeApogee();

            }
        }
    }

    public function deleteDepartement(
        int $codeCelcatDepartement,
        AnneeUniversitaire $anneeUniversitaire
    ) {

        return $this->createQueryBuilder('c')
            ->delete(CelcatEvent::class, 'c')
            ->where('c.anneeUniversitaire = :annee')
            ->andWhere('c.departementId = :departement')
            ->setParameter('annee', $anneeUniversitaire->getAnnee())
            ->setParameter('departement', $codeCelcatDepartement)
            ->getQuery()
            ->getResult();
    }
}
