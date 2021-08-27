<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/PrevisionnelMatiereRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/08/2021 21:45
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Entity\Ue;

class PrevisionnelMatiereRepository extends PrevisionnelRepository
{
    public const TYPE = 'matiere';

    public function findPrevisionnelEnseignantComplet(Personnel $personnel, $annee): array
    {
        return $this->getPrevisionnelPersonnelAnneeDepartement($personnel, $annee);
    }

    public function findPrevisionnelEnseignantDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        $annee = 0
    ) {
        return $this->getPrevisionnelPersonnelAnneeDepartement($personnel, $annee, $departement);
    }

    private function getPrevisionnelPersonnelAnneeDepartement(
        Personnel $personnel,
        int $annee = 0,
        ?Departement $departement = null
    ) {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_matiere, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre, a.id as id_annee, a.libelle as libelle_annee, d.id as id_diplome, d.libelle as libelle_diplome')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->andWhere('p.personnel = :personnel')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('type', self::TYPE);

        if (0 !== $annee) {
            $query->andWhere('p.annee = :annee')
                ->setParameter('annee', $annee);
        } elseif (null !== $departement) {
            $annee = $departement->getOptAnneePrevisionnel();
            $query->andWhere('p.annee = :annee')
                ->setParameter('annee', $annee);
        }

        if (null !== $departement) {
            $query->andWhere('d.departement = :departement')
                ->setParameter('departement', $departement->getId());
        }

        return $query->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement, $annee)
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_matiere, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre, a.id as id_annee, a.libelle as libelle_annee, a.codeEtape as annee_code_etape, a.libelleLong as annee_libelle_long, d.id as id_diplome, d.libelle as libelle_diplome')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->andWhere('p.typeMatiere = :type')
            ->andWhere('d.departement = :departement')
            ->setParameter('type', self::TYPE)
            ->setParameter('departement', $departement->getId());

        if (0 !== $annee) {
            $query->andWhere('p.annee = :annee')
                ->setParameter('annee', $annee);
        } elseif (null !== $departement) {
            $annee = $departement->getOptAnneePrevisionnel();
            $query->andWhere('p.annee = :annee')
                ->setParameter('annee', $annee);
        }

        return $query->getQuery()
            ->getResult();
    }

    public function findPrevisionnelMatiere($matiere, $annee)
    {
        return $this->createQueryBuilder('p')
            ->leftJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_matiere, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre')
            ->where('p.annee = :annee')
            ->andWhere('p.idMatiere = :matiere')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('annee', $annee)
            ->setParameter('type', self::TYPE)
            ->setParameter('matiere', $matiere)
            ->orderBy('pers.nom', 'ASC')
            ->orderBy('pers.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findPrevisionnelSemestre(Semestre $semestre, $annee)
    {
        return $this->createQueryBuilder('p')
            ->leftJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_matiere, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService')
            ->where('p.annee = :annee')
            ->andWhere('u.semestre = :semestre')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('type', self::TYPE)
            ->setParameter('annee', $annee)
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('m.codeMatiere', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findPrevisionnelMatierePersonnelAnnee($matiere, $personnel, $annee)
    {
        return $this->createQueryBuilder('p')
            ->leftJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_matiere, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre')
            ->where('p.annee = :annee')
            ->andWhere('p.personnel = :personnel')
            ->andWhere('p.idMatiere = :matiere')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('annee', $annee)
            ->setParameter('type', self::TYPE)
            ->setParameter('matiere', $matiere)
            ->orderBy('pers.nom', 'ASC')
            ->orderBy('pers.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
