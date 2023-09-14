<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PrevisionnelRessourceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/09/2023 11:20
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\ApcRessource;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\Semestre;
use Doctrine\Common\Collections\Criteria;

class PrevisionnelRessourceRepository extends PrevisionnelRepository
{
    final public const TYPE = 'ressource';

    public function findPrevisionnelEnseignantComplet(Personnel $personnel, int $annee): array
    {
        return $this->getPrevisionnelPersonnelAnneeDepartement($personnel, $annee);
    }

    public function findPrevisionnelEnseignantDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        int $annee
    ): array {
        return $this->getPrevisionnelPersonnelAnneeDepartement($personnel, $annee, $departement);
    }

    private function getPrevisionnelPersonnelAnneeDepartement(
        Personnel $personnel,
        int $annee,
        ?Departement $departement = null
    ): array {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(ApcRessource::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->innerJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_ressource, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.statut, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre, a.id as id_annee, a.libelle as libelle_annee, d.id as id_diplome, d.libelle as libelle_diplome')
            ->leftJoin('m.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->andWhere('p.personnel = :personnel')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('type', self::TYPE)
            ->andWhere('p.annee = :annee')
            ->setParameter('annee', $annee);

        if (null !== $departement) {
            $query->andWhere('d.departement = :departement')
                ->setParameter('departement', $departement->getId());
        }

        return $query->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement, int $annee): array
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(ApcRessource::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->leftJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_ressource, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.statut, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre, a.codeEtape as annee_code_etape, a.libelleLong as annee_libelle_long, a.id as id_annee, a.libelle as libelle_annee, d.id as id_diplome, d.libelle as libelle_diplome')
            ->innerJoin('m.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('type', self::TYPE)
            ->andWhere('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->andWhere('p.annee = :annee')
            ->setParameter('annee', $annee)
            ->orderBy('pers.nom', Criteria::ASC)
            ->addOrderBy('pers.prenom', Criteria::ASC);

        return $query->getQuery()
            ->getResult();
    }

    public function findByAnneeUniversitaire(int $annee): array
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(ApcRessource::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->leftJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_ressource, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.statut, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre, a.codeEtape as annee_code_etape, a.libelleLong as annee_libelle_long, a.id as id_annee, a.libelle as libelle_annee, d.id as id_diplome, d.libelle as libelle_diplome')
            ->innerJoin('m.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('type', self::TYPE)
            ->andWhere('p.annee = :annee')
            ->setParameter('annee', $annee)
            ->orderBy('pers.nom', Criteria::ASC)
            ->addOrderBy('pers.prenom', Criteria::ASC);

        return $query->getQuery()
            ->getResult();
    }

    public function findPrevisionnelMatiere(int $matiere, int $annee): array
    {
        return $this->createQueryBuilder('p')
            ->leftJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->innerJoin(ApcRessource::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->innerJoin('m.semestres', 's')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_ressource, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.statut, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre')
            ->where('p.annee = :annee')
            ->andWhere('p.idMatiere = :matiere')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('annee', $annee)
            ->setParameter('type', self::TYPE)
            ->setParameter('matiere', $matiere)
            ->orderBy('pers.nom', Criteria::ASC)
            ->addOrderBy('pers.prenom', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findPrevisionnelSemestre(Semestre $semestre, int $annee): array
    {
        return $this->createQueryBuilder('p')
            ->leftJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->innerJoin(ApcRessource::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->leftJoin('m.semestres', 's')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_ressource, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.statut, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService')
            ->where('p.annee = :annee')
            ->andWhere('s.id = :semestre')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('type', self::TYPE)
            ->setParameter('annee', $annee)
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('m.codeMatiere', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findPrevisionnelPersonnelSemestre(Personnel $personnel, Semestre $semestre, int $annee): array
    {
        return $this->createQueryBuilder('p')
            ->leftJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->innerJoin(ApcRessource::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->leftJoin('m.semestres', 's')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_ressource, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.statut, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService')
            ->where('p.annee = :annee')
            ->andWhere('s.id = :semestre')
            ->andWhere('pers.id = :personnel')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('type', self::TYPE)
            ->setParameter('annee', $annee)
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('m.codeMatiere', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findPrevisionnelMatierePersonnelAnnee(int $matiere, Personnel $personnel, int $annee): array
    {
        return $this->createQueryBuilder('p')
            ->leftJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->innerJoin(ApcRessource::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->innerJoin('m.semestres', 's')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_ressource, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.statut, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre')
            ->where('p.annee = :annee')
            ->andWhere('p.personnel = :personnel')
            ->andWhere('p.idMatiere = :matiere')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('annee', $annee)
            ->setParameter('type', self::TYPE)
            ->setParameter('matiere', $matiere)
            ->orderBy('pers.nom', Criteria::ASC)
            ->addOrderBy('pers.prenom', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findByDiplome(Diplome $diplome, int $annee): array
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(ApcRessource::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->innerJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_ressource, m.libelle, m.codeMatiere, m.codeElement as matiere_code_element, pers.id as id_personnel, pers.statut, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre, a.codeEtape as annee_code_etape, a.libelleLong as annee_libelle_long, a.id as id_annee, a.libelle as libelle_annee')
            ->innerJoin('m.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('type', self::TYPE)
            ->andWhere('a.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId())
            ->andWhere('p.annee = :annee')
            ->setParameter('annee', $annee);

        return $query->getQuery()
            ->getResult();
    }

    public function findByDiplomeToDelete(Diplome $diplome, int $annee): array
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(ApcRessource::class, 'm', 'WITH', 'p.idMatiere = m.id')
            ->innerJoin('m.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('type', self::TYPE)
            ->andWhere('a.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId())
            ->andWhere('p.annee = :annee')
            ->setParameter('annee', $annee);

        return $query->getQuery()
            ->getResult();
    }
}
