<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/SousCommissionTravail.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:41
 */

namespace App\DTO;

use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Entity\Ue;

class SousCommissionTravail
{
    public Semestre $semestre;
    public AnneeUniversitaire $anneeUniversitaire;

    /** @var Ue[] */
    public array $ues;

    /** @var Matiere[] */
    public array $matieres;

    /** @var Etudiant[] */
    public array $etudiants;

    public ScolaritePromo $ssComm;
    private $tEtudiants;
    private $tMatieres;
    private $tUes;

    /**
     * SousCommissionTravail constructor.
     */
    public function __construct(
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire,
        array $ues,
        array $matieres,
        array $etudiants,
        ScolaritePromo $ssComm
    ) {
        $this->semestre = $semestre;
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->ues = $ues;
        $this->matieres = $matieres;
        $this->etudiants = $etudiants;
        $this->ssComm = $ssComm;

        foreach ($ssComm->getScolarites() as $scolarite) {
            if (null !== $scolarite->getEtudiant()) {
                $this->tEtudiants[$scolarite->getEtudiant()->getId()] = $scolarite;
                foreach ($scolarite->getMoyennesUes() as $key => $ue) {
                    $this->tUes[$scolarite->getEtudiant()->getId()][$key] = $ue;
                }
                foreach ($scolarite->getMoyennesMatieres() as $key => $matiere) {
                    $this->tMatieres[$scolarite->getEtudiant()->getId()][$key] = $matiere;
                }
            }
        }
    }

    public function etudiant($id)
    {
        return $this->tEtudiants[$id] ?? null;
    }

    public function ue($etudiant, $ue)
    {
        return $this->tUes[$etudiant][$ue] ?? null;
    }

    public function matiere($etudiant, $matiere)
    {
        return $this->tMatieres[$etudiant][$matiere] ?? null;
    }

    public function getSsComm(): ScolaritePromo
    {
        return $this->ssComm;
    }

    public function recupereScolarite($etudiant)
    {
        $tScolarite = [];
        //on ne récupère la scolarité que par rapport au diplôme en cours
        foreach ($etudiant->getScolarites() as $scolarite) {
            if ($scolarite->getSemestre()->getDiplome() === $etudiant->getDiplome()) {
                $tScolarite[$scolarite->getSemestre()->getOrdreLmd()] = new Scolarite($scolarite);
            }
        }

        return $tScolarite;
    }
}
