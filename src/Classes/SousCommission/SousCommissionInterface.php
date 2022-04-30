<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/SousCommission/SousCommissionInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/12/2021 09:36
 */

namespace App\Classes\SousCommission;

use App\DTO\EtudiantSousCommission;
use App\DTO\EtudiantSousCommissionApc;
use App\Entity\AnneeUniversitaire;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;

interface SousCommissionInterface
{
    public function calcul(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): void;

    public function calculStats(array $bacs): array;

    public function getBySemestreAnneeUniversitaire(
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ): ?ScolaritePromo;

    public function getSemestre(): ?Semestre;

    public function getAnneeUniversitaire(): ?AnneeUniversitaire;

    public function getSousCommissionEtudiant(int $idEtudiant): null|EtudiantSousCommissionApc|EtudiantSousCommission;

    public function getUes(): array;

    public function getMatieres(): array;

    public function getSemestresScolarite(): array;

    public function getEtudiants(): array;
}
