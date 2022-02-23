<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/CelcatEventsRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/09/2021 22:06
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\CelcatEvent;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\String\Exception\InvalidArgumentException;

/**
 * @method CelcatEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method CelcatEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method CelcatEvent[]    findAll()
 * @method CelcatEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<CelcatEvent>
 */
class CelcatEventsRepository extends ServiceEntityRepository
{
    private string $chaine = '';
    private array $params = [];

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CelcatEvent::class);
    }

    public function findEdtProf(string $numeroHarpege, int $semaine): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaineFormation = :semaine')
            ->andWhere('p.codePersonnel = :idprof')
            ->setParameters(['semaine' => $semaine, 'idprof' => $numeroHarpege])
            ->orderBy('p.jour', 'ASC')
            ->addOrderBy('p.debut', 'ASC')
            ->addOrderBy('p.codeGroupe', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findEdtEtu(Etudiant $user, int $semaine): ?array
    {
        if (null !== $user->getSemestre()) {
            $this->groupes($user);
            $this->params['semaine'] = $semaine;
            $query = $this->createQueryBuilder('p')
                ->where('p.semaineFormation = :semaine');

            if ('' !== $this->chaine) {
                $query->andWhere($this->chaine);
            }

            $query->setParameters($this->params)
                ->orderBy('p.jour', 'ASC')
                ->addOrderBy('p.debut', 'ASC');

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
                $this->chaine .= 'p.codeGroupe = :gr'.$i;

                $this->params['gr'.$i] = $groupe->getCodeApogee();
                ++$i;
            }
        }
    }

    public function deleteDepartement(
        int $codeCelcatDepartement,
        ?AnneeUniversitaire $anneeUniversitaire
    ): array {
        if (null === $anneeUniversitaire) {
            throw new InvalidArgumentException('L\'année universitaire n\'est pas définie');
        }

        return $this->createQueryBuilder('c')
            ->delete(CelcatEvent::class, 'c')
            ->where('c.anneeUniversitaire = :annee')
            ->andWhere('c.departementId = :departement')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('departement', $codeCelcatDepartement)
            ->getQuery()
            ->getResult();
    }

    public function findEdtSemestre(Semestre $semestre, ?int $semaineFormationIUT): array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.codeModule = m.codeElement')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->where('p.semaineFormation = :semaine')
            ->andWhere('u.semestre = :semestre')
            ->setParameters(['semaine' => $semaineFormationIUT, 'semestre' => $semestre->getId()])
            ->orderBy('p.jour', 'ASC')
            ->addOrderBy('p.debut', 'ASC')
            ->addOrderBy('p.codeGroupe', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function getByPersonnelArray(Personnel $user): array
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.codePersonnel = :idprof')
            ->setParameter('idprof', $user->getNumeroHarpege())
            ->orderBy('p.jour', 'ASC')
            ->addOrderBy('p.debut', 'ASC')
            ->addOrderBy('p.libGroupe', 'ASC')
            ->getQuery()
            ->getResult();

        return $this->transformeArray($query);
    }

    public function getByEtudiantArray(Etudiant $user, int $semaine): array
    {
        $query = $this->findEdtEtu($user, $semaine);

        return $this->transformeArray($query);
    }

    private function transformeArray(array $data): array
    {
        $t = [];
        /** @var CelcatEvent $event */
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
}
