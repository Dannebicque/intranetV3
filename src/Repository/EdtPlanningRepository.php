<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/EdtPlanningRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/02/2026 11:39
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\EdtPlanning;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Enums\TypeGroupeEnum;
use Carbon\Carbon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
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
        $query->orderBy('p.semaine', Order::Ascending->value)
            ->addOrderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.groupe', Order::Ascending->value);

        return $query->getQuery()
            ->getResult();
    }

    public function findEdtSemestre(Semestre $semestre, int $semaine, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.ordreSemestre = :semestre')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameters(['semaine' => $semaine, 'semestre' => $semestre->getOrdreLmd(), 'anneeUniversitaire' => $anneeUniversitaire->getId()])
            ->orderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.groupe', Order::Ascending->value)
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
            ->orderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.groupe', Order::Ascending->value)
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
            ->orderBy('p.annee', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.groupe', Order::Ascending->value)
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
            ->orderBy('p.ordreSemestre', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.groupe', Order::Ascending->value)
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
            ->orderBy('p.debut', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findEdtEtu(Etudiant $user, int $semaine, AnneeUniversitaire $anneeUniversitaire): ?array
    {
        if (null !== $user->getSemestreActif()) {
            $this->groupes($user);

            if ($user->getSemestreActif()->getOrdreLmd() === 3 || $user->getSemestreActif()->getOrdreLmd() === 4) {
                $or = '(p.groupe = 41 AND p.type = :type)';
            } else {
                $or = '(p.groupe = 1 AND p.type = :type)';
            }

            return $this->createQueryBuilder('p')
                ->where('p.semaine = :semaine')
                ->andWhere('p.ordreSemestre = :promo')
                ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
                ->andWhere($or . ' OR p.groupe = :groupetd OR p.groupe = :groupetp')
                ->setParameters([
                    'type' => 'CM',
                    'semaine' => $semaine,
                    'promo' => $user->getSemestreActif()?->getOrdreLmd(),
                    'groupetd' => $this->groupetd,
                    'groupetp' => $this->groupetp,
                    'anneeUniversitaire' => $anneeUniversitaire->getId(),
                ])
                ->orderBy('p.jour', Order::Ascending->value)
                ->addOrderBy('p.debut', Order::Ascending->value)
                ->getQuery()
                ->getResult();
        }

        return null;
    }

    public function findEdtEtuCmFi(Etudiant $user, int $semaine, AnneeUniversitaire $anneeUniversitaire): ?array
    {
        if (null !== $user->getSemestreActif() && ($user->getSemestreActif()->getOrdreLmd() === 3 || $user->getSemestreActif()->getOrdreLmd() === 4)) {
            $this->groupes($user);
            if ($this->groupetp <= 4) {
                return $this->createQueryBuilder('p')
                    ->where('p.semaine = :semaine')
                    ->andWhere('p.ordreSemestre = :promo')
                    ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
                    ->andWhere('p.groupe = 41')
                    ->setParameters([
                        'semaine' => $semaine,
                        'promo' => $user->getSemestreActif()?->getOrdreLmd(),
                        'anneeUniversitaire' => $anneeUniversitaire->getId(),
                    ])
                    ->orderBy('p.jour', Order::Ascending->value)
                    ->addOrderBy('p.debut', Order::Ascending->value)
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
            ->setParameters([
                'semaine' => $numSemaine,
                'jour' => $jour,
                'semestre' => $semestre->getOrdreLmd(),
            ])
            ->orderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
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

    public function recupereEdtBorne(int $numSemaine, Semestre $semestre, int $jour, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semaine = :semaine')
            ->andWhere('p.jour = :jour ')
            ->andWhere('p.ordreSemestre = :semestre')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameters([
                'semaine' => $numSemaine,
                'jour' => $jour,
                'semestre' => $semestre->getOrdreLmd(),
                'anneeUniversitaire' => $anneeUniversitaire->getId(),
            ])
            ->orderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function getByPersonnelArray(Personnel $user, Departement $departement, array $tabMatieresDepartement): array
    {
        $query = $this->createQueryBuilder('p')
            ->leftJoin('p.semestre', 's')
            ->andWhere('p.intervenant = :idprof')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('idprof', $user->getId())
            ->setParameter('anneeUniversitaire', $user->getAnneeUniversitaire()->getId())
            ->orderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.groupe', Order::Ascending->value);
        $ors = [];

        foreach ($departement->getDiplomes() as $diplome) {
            foreach ($diplome->getSemestres() as $semestre) {
                if (true === $semestre->isActif()) {
                    $ors[] = '(' . $query->expr()->orx('(s.id = ' . $query->expr()->literal($semestre->getId()) . ')') . ')';
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
            $pl['semestre'] = $event->getSemestre();
            $pl['debut'] = $event->getDebut();
            $pl['date'] = $event->getDate();
            $pl['fin'] = $event->getFin();
            $pl['couleur'] = $event->getSemestre()?->getAnnee()?->getCouleur();
            $pl['commentaire'] = $event->getCommentaire();
            if (null !== $matiere) {
                $pl['ical'] = $matiere->libelle . ' (' . $matiere->codeMatiere . ') ' . $event->getDisplayGroupe();
            } else {
                $pl['ical'] = '';
            }

            if (str_starts_with($event->getType(), 'PT')) {
                $pl['ical'] .= '**PTUT** ' . $pl['ical'];
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
            if (
                (str_starts_with($event->getType(), 'PTTP') && $event->getGroupe() === $this->groupetp) ||
                (str_starts_with($event->getType(), 'PTTD') && $event->getGroupe() === $this->groupetd) ||
                (str_starts_with($event->getType(), 'PTCM')) ||
                (TypeGroupeEnum::TYPE_GROUPE_CM->value === $event->getType()) ||
                (TypeGroupeEnum::TYPE_GROUPE_TD->value === $event->getType() && $event->getGroupe() === $this->groupetd) ||
                (TypeGroupeEnum::TYPE_GROUPE_TP->value === $event->getType() && $event->getGroupe() === $this->groupetp)) {
                $matiere = $tabMatieresSemestre[$event->getTypeIdMatiere()] ?? null;
                $pl = [];
                $pl['id'] = $event->getId();
                $pl['semaine'] = $event->getSemaine();
                $pl['enseignant'] = $event->getIntervenant()?->getDisplayPr() ?? ' -non précisé- ';
                $pl['jour'] = $event->getJour();
                $pl['debut'] = $event->getDebut();
                $pl['fin'] = $event->getFin();
                $pl['commentaire'] = '';
                if (null !== $matiere) {
                    $pl['ical'] = $matiere->libelle . ' (' . $matiere->codeMatiere . ') ' . $event->getDisplayGroupe();
                } else {
                    $pl['ical'] = $event->getTexte();
                }

                if (str_starts_with($event->getType(), 'PT')) {
                    $pl['ical'] .= '**PTUT** ' . $pl['ical'];
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

    public function findByDepartementAndAnneeUniversitaire(Departement $departement, AnneeUniversitaire $anneeUniversitaire): array
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

        $quer->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId());

        return $quer->getQuery()->getResult();
    }

    public function findAllEdtSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.ordreSemestre = :semestre')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('semestre', $semestre->getOrdreLmd())
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId())
            ->orderBy('p.semaine', Order::Ascending->value)
            ->addOrderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.groupe', Order::Ascending->value)
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
            ->setParameter('semestre', $semestre->getOrdreLmd())
            ->setParameter('semaine', $semaine)
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId())
            ->addOrderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.groupe', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findEdtSemestreSemaineNew(
        Semestre           $semestre,
        int                $semaine,
        AnneeUniversitaire $anneeUniversitaire
    ): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semestre = :semestre')
            ->andWhere('p.semaine = :semaine')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('semestre', $semestre)
            ->setParameter('semaine', $semaine)
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId())
            ->addOrderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.groupe', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function updateCourse($id)
    {
        $cours = $this->find($id);

        $this->save($cours);
    }

    public function save(EdtPlanning $edtPlanning): void
    {
        $this->_em->persist($edtPlanning);
        $this->_em->flush();
    }

    public function findEdtEduSign() {
        return $this->createQueryBuilder('p')
            ->where('p.idEduSign IS NOT NULL')
            ->getQuery()
            ->getResult();
    }

    public function findEdtProfNextEvent(?int $prof, AnneeUniversitaire $anneeUniversitaire)
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.intervenant = :idprof')
            ->andWhere('p.anneeUniversitaire = :anneeUniversitaire')
            ->andWhere('p.date >= :date')
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId())
            ->setParameter('idprof', $prof)
            ->setParameter('date', Carbon::now()->format('Y-m-d'));


        $query->orderBy('p.semaine', Order::Ascending->value)
            ->addOrderBy('p.jour', Order::Ascending->value)
            ->addOrderBy('p.debut', Order::Ascending->value)
            ->addOrderBy('p.groupe', Order::Ascending->value)
            ->setMaxResults(1);

        return $query->getQuery()
            ->getResult();
    }

    public function findByEduSignDatas($date, $start, $end, $salle, $personnel)
    {
        return $this->createQueryBuilder('p')
            ->where('p.date LIKE :date')
            ->andWhere('p.debut = :debut')
            ->andWhere('p.fin = :fin')
            ->andWhere('p.salle = :salle')
            ->andWhere('p.intervenant = :personnel')
            ->andWhere('p.semestre IS NOT null')
            ->setParameters([
                'date' => $date . '%',
                'debut' => $start,
                'fin' => $end,
                'salle' => $salle,
                'personnel' => $personnel,
            ])
            ->getQuery()
            ->getResult();
    }
}
