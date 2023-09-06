<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/EdtPlanningRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/09/2023 12:05
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\EdtPlanning;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Enums\TypeGroupeEnum;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use function array_key_exists;

/**
 * @method EdtPlanning|null find($id, $lockMode = null, $lockVersion = null)
 * @method EdtPlanning|null findOneBy(array $criteria, array $orderBy = null)
 * @method EdtPlanning[]    findAll()
 * @method EdtPlanning[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<EdtPlanning>
 */
class EdtPlanningRepository extends ServiceEntityRepository
{
    protected int $groupetp = 1;
    protected int $groupetd = 1;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EdtPlanning::class);
    }

    public function findEdtProf(int $prof, AnneeUniversitaire $anneeUniversitaire, int $semaine = 0): array
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.intervenant = :idprof')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId())
            ->setParameter('idprof', $prof);

        if (0 !== $semaine) {
            $query->andWhere('p.semaine = :semaine')
                ->setParameter('semaine', $semaine);
        }
        $query->orderBy('p.semaine', Criteria::ASC)
            ->addOrderBy('p.jour', Criteria::ASC)
            ->addOrderBy('p.debut', Criteria::ASC)
            ->addOrderBy('p.groupe', Criteria::ASC);

        return $query->getQuery()
            ->getResult();
    }

    public function findEdtSemestre(Semestre $semestre, int $semaine, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.ordreSemestre = :semestre')
            ->andWhere('p.diplome = :diplome')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameters(['semaine' => $semaine, 'semestre' => $semestre->getOrdreLmd(), 'anneeUniversitaire' => $anneeUniversitaire->getId(), 'diplome' => null !== $semestre->getDiplome()->getParent() ? $semestre->getDiplome()->getParent()->getId() : $semestre->getDiplome()->getId()])
            ->orderBy('p.jour', Criteria::ASC)
            ->addOrderBy('p.debut', Criteria::ASC)
            ->addOrderBy('p.groupe', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findEdtModule(int $idModule, string $typeModule, int $semaine, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.idMatiere = :idMatiere')
            ->andWhere('p.typeMatiere = :typeMatiere')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameters(['semaine' => $semaine,
                'idMatiere' => $idModule,
                'typeMatiere' => $typeModule,
                'anneeUniversitaire' => $anneeUniversitaire->getId(),])
            ->orderBy('p.jour', Criteria::ASC)
            ->addOrderBy('p.debut', Criteria::ASC)
            ->addOrderBy('p.groupe', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findEdtJour(int $jour, int $semaine, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.jour = :jour')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameters(['semaine' => $semaine, 'jour' => $jour, 'anneeUniversitaire' => $anneeUniversitaire->getId()])
            ->orderBy('p.annee', Criteria::ASC)
            ->addOrderBy('p.debut', Criteria::ASC)
            ->addOrderBy('p.groupe', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findEdtSalle(string $salle, int $semaine, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.salle = :salle')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameters(['semaine' => $semaine, 'salle' => $salle, 'anneeUniversitaire' => $anneeUniversitaire->getId()])
            ->orderBy('p.ordreSemestre', Criteria::ASC)
            ->addOrderBy('p.debut', Criteria::ASC)
            ->addOrderBy('p.groupe', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    private function groupes(Etudiant $user): void
    {
        foreach ($user->getGroupes() as $groupe) {
            if (null !== $groupe->getTypeGroupe()) {
                if ($groupe->getTypeGroupe()->isTD()) {
                    $this->groupetd = $groupe->getOrdre();
                } elseif ($groupe->getTypegroupe()->isTP()) {
                    $this->groupetp = $groupe->getOrdre();
                }
            }
        }
    }

    public function findEdtSalleJour(int $semaine, int $jour): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.jour = :jour')
            ->setParameters([
                'semaine' => $semaine,
                'jour' => $jour,
            ])
            ->orderBy('p.debut', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findEdtEtu(Etudiant $user, int $semaine, AnneeUniversitaire $anneeUniversitaire): ?array
    {
        if (null !== $user->getSemestre()) {
            $this->groupes($user);

            return $this->createQueryBuilder('p')
                ->where('p.semaine = :semaine')
                ->andWhere('p.ordreSemestre = :promo')
                ->andWhere('p.diplome = :diplome')
                ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
                ->andWhere('p.groupe = 1 OR p.groupe = :groupetd OR p.groupe = :groupetp')
                ->setParameters([
                    'semaine' => $semaine,
                    'promo' => $user->getSemestre()->getOrdreLmd(),
                    'groupetd' => $this->groupetd,
                    'groupetp' => $this->groupetp,
                    'diplome' => null !== $user->getDiplome()->getParent() ? $user->getDiplome()->getParent()->getId() : $user->getDiplome()->getId(),
                    'anneeUniversitaire' => $anneeUniversitaire->getId(),
                ])
                ->orderBy('p.jour', Criteria::ASC)
                ->addOrderBy('p.debut', Criteria::ASC)
                ->getQuery()
                ->getResult();
        }

        return null;
    }

    public function findEdtEtuCmFi(Etudiant $user, int $semaine, AnneeUniversitaire $anneeUniversitaire): ?array
    {
        if (null !== $user->getSemestre() && $user->getSemestre()->getOrdreLmd() === 3) {
            $this->groupes($user);
            if ($this->groupetp <= 4) {
                return $this->createQueryBuilder('p')
                    ->where('p.semaine = :semaine')
                    ->andWhere('p.ordreSemestre = :promo')
                    ->andWhere('p.diplome = :diplome')
                    ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
                    ->andWhere('p.groupe = 41')
                    ->setParameters([
                        'semaine' => $semaine,
                        'promo' => $user->getSemestre()->getOrdreLmd(),
                        'diplome' => null !== $user->getDiplome()->getParent() ? $user->getDiplome()->getParent()->getId() : $user->getDiplome()->getId(),
                        'anneeUniversitaire' => $anneeUniversitaire->getId(),
                    ])
                    ->orderBy('p.jour', Criteria::ASC)
                    ->addOrderBy('p.debut', Criteria::ASC)
                    ->getQuery()
                    ->getResult();
            }
        }

        return null;
    }

    /** @deprecated */
    public function recupereEDTBornes(int $numSemaine, Semestre $semestre, int $jour, array $matieres): array
    {
        $creneaux = [
            1 => ['8h00', '9h30'],
            4 => ['9h30', '11h00'],
            7 => ['11h00', '12h30'],
            10 => ['12h30', '14h00'],
            13 => ['14h00', '15h30'],
            16 => ['15h30', '17h00'],
            19 => ['17h00', '18h30'],
        ];

        $nbgroupetp = $semestre->getNbgroupeTpEdt();

        if ($nbgroupetp <= 2) {
            $typebloc = '-d';
        } else {
            $typebloc = '';
        }

        $query = $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.jour = :jour ')
            ->andWhere('p.ordreSemestre = :semestre')
            ->setParameter('diplome', null !== $semestre->getDiplome()->getParent() ? $semestre->getDiplome()->getParent()->getId() : $semestre->getDiplome()->getId())
            ->setParameters([
                'semaine' => $numSemaine,
                'jour' => $jour,
                'semestre' => $semestre->getOrdreLmd(),
            ])
            ->orderBy('p.jour', Criteria::ASC)
            ->addOrderBy('p.debut', Criteria::ASC)
            ->getQuery()
            ->getResult();

        $planning = [];

        /** @var EdtPlanning $row */
        foreach ($query as $row) {
            $casedebut = $row->getDebut();
            $casefin = $row->getFin();
            $duree = $casefin - $casedebut;
            $groupe = $row->getGroupe();
            $type = $row->getType();
            $max = 20;
            if ('tp' === $type || 'TP' === $type) {
                $max = 6;
            }

            if (null !== $row->getIntervenant()) {
                $prof = mb_substr($row->getIntervenant()->getNom(), 0, $max);
            } else {
                $prof = '';
            }

            if (0 === $row->getIdMatiere()) {
                $refmatiere = $row->getTexte();
            } else {
                $refmatiere = $matieres[$row->getTypeIdMatiere()]->codeMatiere;
            }

            if (array_key_exists($casedebut, $creneaux) && 0 === $duree % 3) {
                $planning[$casedebut][$groupe]['prof'] = $prof;
                $planning[$casedebut][$groupe]['module'] = $refmatiere;
                $planning[$casedebut][$groupe]['salle'] = mb_substr($row->getSalle(), 0, $max);
                $planning[$casedebut][$groupe]['type'] = $type;
                $planning[$casedebut][$groupe]['typebloc'] = $typebloc;
                $planning[$casedebut][$groupe]['duree'] = $duree;
                $planning[$casedebut][$groupe]['idplanning'] = $row->getId();
                $planning[$casedebut][$groupe]['texte'] = $row->getTexte();
                $planning[$casedebut][$groupe]['format'] = 'ok';

                if ('TD' === mb_strtoupper($type)) {
                    $planning[$casedebut][$groupe + 1]['module'] = 'xt';
                }

                if ('CM' === mb_strtoupper($type)) {
                    for ($gr = 1; $gr < $nbgroupetp; ++$gr) {
                        $planning[$casedebut][$groupe + $gr]['module'] = 'xt';
                    }
                }

                $planning[$casedebut][$groupe]['module'] = $refmatiere; // création du premier créneaux

                if (0 === $duree % 3) {
                    for ($i = 1; $i < $duree / 3; ++$i) {
                        $planning[$casedebut + ($i * 3)] = $planning[$casedebut];
                    }
                }
            } else {
                // pas sur un créneau classique pour le début
                if (!array_key_exists($casedebut, $creneaux)) {
                    $casedebut -= ($duree % 3);
                }

                if (11 === $casedebut || 12 === $casedebut) {
                    $casedebut = 10;
                }

                if (2 === $casedebut || 3 === $casedebut) {
                    $casedebut = 1;
                }

                $planning[$casedebut][$groupe]['prof'] = $prof;
                $planning[$casedebut][$groupe]['module'] = $refmatiere;
                $planning[$casedebut][$groupe]['salle'] = mb_substr($row->getSalle(), 0, $max);
                $planning[$casedebut][$groupe]['type'] = $type;
                $planning[$casedebut][$groupe]['typebloc'] = $typebloc;
                $planning[$casedebut][$groupe]['duree'] = $duree;
                $planning[$casedebut][$groupe]['idplanning'] = $row->getId();
                $planning[$casedebut][$groupe]['texte'] = $row->getTexte();
                $planning[$casedebut][$groupe]['format'] = 'nok';
                $planning[$casedebut][$groupe]['debut'] = $row->getDebut();
                $planning[$casedebut][$groupe]['fin'] = $casefin;

                if ('TD' === mb_strtoupper($type)) {
                    $planning[$casedebut][$groupe + 1]['module'] = 'xt';
                }

                if ('CM' === mb_strtoupper($type)) {
                    for ($gr = 1; $gr < $nbgroupetp; ++$gr) {
                        $planning[$casedebut][$groupe + $gr]['module'] = 'xt';
                    }
                }

                $planning[$casedebut][$groupe]['module'] = $refmatiere; // création du premier créneaux
            }
        }

        return $planning;
    }

    public function recupereEdtBorne(int $numSemaine, Semestre $semestre, int $jour): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.jour = :jour ')
            ->andWhere('p.ordreSemestre = :semestre')
            ->andWhere('p.diplome = :diplome')
            ->setParameters([
                'diplome' => null !== $semestre->getDiplome()->getParent() ? $semestre->getDiplome()->getParent()->getId() : $semestre->getDiplome(),
                'semaine' => $numSemaine,
                'jour' => $jour,
                'semestre' => $semestre->getOrdreLmd(),
            ])
            ->orderBy('p.jour', Criteria::ASC)
            ->addOrderBy('p.debut', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function getByPersonnelArray(Personnel $user, Departement $departement, array $tabMatieresDepartement): array
    {
        $query = $this->createQueryBuilder('p')
            ->andWhere('p.intervenant = :idprof')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('idprof', $user->getId())
            ->setParameter('anneeUniversitaire', $user->getAnneeUniversitaire()->getId())
            ->orderBy('p.jour', Criteria::ASC)
            ->addOrderBy('p.debut', Criteria::ASC)
            ->addOrderBy('p.groupe', Criteria::ASC);
        $ors = [];

        foreach ($departement->getDiplomes() as $diplome) {
            if (null !== $diplome->getParent()) {
                $dip = $diplome->getParent();
            } else {
                $dip = $diplome;
            }
            foreach ($diplome->getSemestres() as $semestre) {
                if (true === $semestre->isActif()) {
                    $ors[] = '(' . $query->expr()->orx('(p.ordreSemestre = ' . $query->expr()->literal($semestre->getOrdreLmd()) . ' AND p.diplome = ' . $query->expr()->literal($dip->getId()) . ')') . ')';
                }
            }
        }

        $query = $query->andWhere(implode(' OR ', $ors))
            ->distinct()
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var EdtPlanning $event */
        foreach ($query as $event) {
            $matiere = $tabMatieresDepartement[$event->getTypeIdMatiere()] ?? null;
            $pl = [];
            $pl['id'] = $event->getId();
            $pl['semaine'] = $event->getSemaine();
            $pl['jour'] = $event->getJour();
            $pl['debut'] = $event->getDebut();
            $pl['date'] = $event->getDate();
            $pl['fin'] = $event->getFin();
            $pl['commentaire'] = $event->getCommentaire();
            if (null !== $matiere) {
                $pl['ical'] = $matiere->libelle . ' (' . $matiere->codeMatiere . ') ' . $event->getDisplayGroupe();
            } else {
                $pl['ical'] = '';
            }
            $pl['salle'] = $event->getSalle();
            $t[$event->getId()] = $pl;
        }

        return $t;
    }

    public function getByEtudiantArray(Etudiant $user, int $semaine, array $tabMatieresSemestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        $query = $this->findEdtEtu($user, $semaine, $anneeUniversitaire);
        return $this->transformeArray($query, $tabMatieresSemestre);
    }

    private function transformeArray(array $data, array $tabMatieresSemestre): array
    {
        // Deprecated si on passe par le manager EDT
        /** todo: passer par le DTO*/
        $t = [];
        /** @var EdtPlanning $event */
        foreach ($data as $event) {
            if ((TypeGroupeEnum::TYPE_GROUPE_CM->value === $event->getType()) || (TypeGroupeEnum::TYPE_GROUPE_TD->value === $event->getType() && $event->getGroupe() === $this->groupetd) || (TypeGroupeEnum::TYPE_GROUPE_TP->value === $event->getType() && $event->getGroupe() === $this->groupetp)) {
                $matiere = $tabMatieresSemestre[$event->getTypeIdMatiere()] ?? null;
                $pl = [];
                $pl['id'] = $event->getId();
                $pl['semaine'] = $event->getSemaine();
                $pl['jour'] = $event->getJour();
                $pl['debut'] = $event->getDebut();
                $pl['fin'] = $event->getFin();
                $pl['commentaire'] = '';
                if (null !== $matiere) {
                    $pl['ical'] = $matiere->libelle . ' (' . $matiere->codeMatiere . ') ' . $event->getDisplayGroupe();
                } else {
                    $pl['ical'] = $event->getTexte();
                }
                $pl['date'] = $event->getDate();
                $pl['salle'] = $event->getSalle();
                $t[$event->getId()] = $pl;
            }
        }

        return $t;
    }

    public function findByDepartement(Departement $departement): array
    {
        $quer = $this->createQueryBuilder('p');
        $i = 0;
        foreach ($departement->getDiplomes() as $diplome) {
            foreach ($diplome->getSemestres() as $semestre) {
                $quer = $quer->orWhere('p.ordreSemestre = :semestre' . $i)
                    ->setParameter('semestre' . $i, $semestre->getOrdreLmd());
                ++$i;
            }
        }

        return $quer->getQuery()->getResult();
    }

    public function findAllEdtSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.ordreSemestre = :semestre')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->andWhere('p.diplome = :diplome')
            ->setParameter('semestre', $semestre->getOrdreLmd())
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId())
            ->setParameter('diplome', null !== $semestre->getDiplome()?->getParent() ? $semestre->getDiplome()?->getParent()?->getId() : $semestre->getDiplome()?->getId())
            ->orderBy('p.semaine', Criteria::ASC)
            ->addOrderBy('p.jour', Criteria::ASC)
            ->addOrderBy('p.debut', Criteria::ASC)
            ->addOrderBy('p.groupe', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findEdtSemestreSemaine(
        Semestre           $semestre,
        int                $semaine,
        AnneeUniversitaire $anneeUniversitaire
    ): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.ordreSemestre = :semestre')
            ->andWhere('p.semaine = :semaine')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->andWhere('p.diplome = :diplome')
            ->setParameter('semestre', $semestre->getOrdreLmd())
            ->setParameter('diplome', null !== $semestre->getDiplome()->getParent() ? $semestre->getDiplome()->getParent()->getId() : $semestre->getDiplome()->getId())
            ->setParameter('semaine', $semaine)
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId())
            ->addOrderBy('p.jour', Criteria::ASC)
            ->addOrderBy('p.debut', Criteria::ASC)
            ->addOrderBy('p.groupe', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }
}
