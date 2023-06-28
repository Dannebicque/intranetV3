<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/SousCommissionTravail.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/06/2023 13:09
 */

namespace App\DTO;

use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;

class SousCommissionTravail
{
    private array $tEtudiants = [];
    private array $tMatieres = [];
    private array $tUes = [];

    /**
     * SousCommissionTravail constructor.
     *
     * @param \App\Entity\Ue[] $ues
     * @param \App\Entity\Matiere[] $matieres
     * @param \App\Entity\Etudiant[] $etudiants
     */
    public function __construct(
        public Semestre           $semestre,
        public AnneeUniversitaire $anneeUniversitaire,
        public array $ues,
        public array $matieres,
        public array $etudiants,
        public ScolaritePromo $ssComm
    ) {
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

    public function etudiant(int $id): ?\App\Entity\Scolarite
    {
        return $this->tEtudiants[$id] ?? null;
    }

    public function ue(int $etudiant, int $ue): ?array
    {
        return $this->tUes[$etudiant][$ue] ?? null;
    }

    public function matiere(int $etudiant, string $matiere): ?array
    {
        return $this->tMatieres[$etudiant][$matiere] ?? null;
    }

    public function getSsComm(): ScolaritePromo
    {
        return $this->ssComm;
    }

    public function recupereScolarite(Etudiant $etudiant): array
    {
        $tScolarite = [];
        // on ne récupère la scolarité que par rapport au diplôme en cours
        foreach ($etudiant->getScolarites() as $scolarite) {
            if ($scolarite->getSemestre()?->getDiplome() === $etudiant->getDiplome()) {
                $tScolarite[$scolarite->getSemestre()?->getOrdreLmd()] = new Scolarite($scolarite);
            }
        }

        return $tScolarite;
    }
}
