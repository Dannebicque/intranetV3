<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/Previsionnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:44
 */

namespace App\DTO;


use App\Entity\Constantes;
use App\Entity\Personnel;
use App\Entity\Semestre;

class Previsionnel
{
    public int $id;
    public int $personnel_id;
    public int $matiere_id;
    public string $type_matiere;
    public float $nbHCm;
    public float $nbHTd;
    public float $nbHTp;
    public int $nbGrCm;
    public int $nbGrTd;
    public int $nbGrTp;
    public int $annee;
    public bool $referent;
    public string $matiere_libelle;
    public string $matiere_code;
    public string $matiere_code_element;
    public string $personnel_nom;
    public string $personnel_prenom;
    public int $personnel_numeroHarpege;
    public string $personnel_mail;
    public float $nbHeuresService;
    public int $semestre_id;
    public string $semestre_libelle;
    public int $annee_id;
    public string $annee_libelle;
    public int $diplome_id;
    public string $diplome_libelle;

    public function getNbSeanceCm(): string
    {
        return number_format($this->nbHCm / Constantes::DUREE_COURS, 2);
    }

    public function getNbSeanceTd(): string
    {
        return number_format($this->nbHTd / Constantes::DUREE_COURS, 2);
    }

    public function getNbSeanceTp(): string
    {
        return number_format($this->nbHTp / Constantes::DUREE_COURS, 2);
    }

    /**
     * @return float|int
     */
    public function getTotalEqTd()
    {
        return $this->getTotalHCm() * Constantes::MAJORATION_CM + $this->getTotalHTd() + $this->getTotalHTp();
    }

    /**
     * @return float|int
     */
    public function getTotalHCm()
    {
        return $this->nbHCm * $this->nbGrCm;
    }

    /**
     * @return float|int
     */
    public function getTotalHTd()
    {
        return $this->nbHTd * $this->nbGrTd;
    }

    /**
     * @return float|int
     */
    public function getTotalHTp()
    {
        return $this->nbHTp * $this->nbGrTp;
    }

    public function getTotalEtudiant()
    {
        return $this->nbHCm + $this->nbHTd + $this->nbHTp;
    }
}
