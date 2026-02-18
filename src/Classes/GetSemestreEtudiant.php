<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/GetSemestreEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/01/2026 08:41
 */

namespace App\Classes;

use App\Entity\Etudiant;
use App\Entity\Semestre;

class GetSemestreEtudiant
{
    // Patch pour récupérer le semestre d'un étudiant
    // Condition : Un seul semestre doit être actif
    public function getSemestreActif(Etudiant $etudiant): ?Semestre
    {
        // Récupère tous les semestres de l'étudiant
        $semestres = $etudiant->getSemestres();

        // Filtre celui qui est actif (via ta logique existante dans Semestre)
        foreach ($semestres as $semestre) {
            if ($semestre->isActif()) {
                return $semestre;
            }
        }

        // Fallback sur le semestre principal legacy si aucun actif
        return $etudiant->getSemestre();
    }

    public function getTousSemestres(Etudiant $etudiant): array
    {
        // Pour les vues admin/gestion
        return $etudiant->getSemestres()->toArray();
    }

}
