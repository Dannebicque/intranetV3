<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/PrevisionnelRessourceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:44
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\ApcRessource;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Entity\Ue;

class PrevisionnelRessourceRepository extends PrevisionnelRepository
{
    const TYPE = 'ressource';

    /**
     * @param $annee
     */
    public function findPrevisionnelEnseignantComplet(Personnel $personnel, $annee): array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(ApcRessource::class, 'e', 'WITH', 'p.id_matiere = e.id')
            ->where('p.annee = :annee')
            ->andWhere('p.personnel = :personnel')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('annee', $annee)
            ->setParameter('type', self::TYPE)
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    public function findPrevisionnelEnseignantDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        $annee = 0
    ) {
        if ($annee === 0) {
            $annee = $departement->getOptAnneePrevisionnel();
        }

        return $this->createQueryBuilder('p')
            ->innerJoin(ApcRessource::class, 'm', 'WITH', 'p.id_matiere = m.id')
            ->innerJoin(Personnel::class, 'pers', 'WITH', 'p.personnel = pers.id')
            ->select('p.id as id_previsionnel, p.annee, p.referent, p.nbHCm, p.nbHTd, p.nbHTp, p.nbGrCm, p.nbGrTd, p.nbGrTp, m.id as id_ressource, m.libelle, m.codeRessource, pers.id as id_personnel, pers.nom, pers.prenom, pers.numeroHarpege, pers.mailUniv, pers.nbHeuresService, s.id as id_semestre, s.libelle as libelle_semestre, a.id as id_annee, a.libelle as libelle_annee, d.id as id_diplome, d.libelle as libelle_diplome')
            ->innerJoin(Semestre::class, 's', 'WITH', 'm.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('p.annee = :annee')
            ->andWhere('p.personnel = :personnel')
            ->andWhere('d.departement = :departement')
            ->andWhere('p.typeMatiere = :type')
            ->setParameter('annee', $annee)
            ->setParameter('departement', $departement->getId())
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('type', self::TYPE)
            ->getQuery()
            ->getResult();
    }
}
