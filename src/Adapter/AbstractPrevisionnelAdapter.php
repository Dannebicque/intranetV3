<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Adapter/AbstractPrevisionnelAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/02/2024 11:37
 */

namespace App\Adapter;

use App\DTO\Previsionnel;

class AbstractPrevisionnelAdapter
{
    public function single(array $previ): Previsionnel
    {
        $p = new Previsionnel();
        $p->objPrevisionnel = $previ;
        $p->id = $previ['id_previsionnel'];
        $p->annee = $previ['annee'];
        $p->referent = $previ['referent'];
        $p->nbHCm = $previ['nbHCm'];
        $p->nbHTd = $previ['nbHTd'];
        $p->nbHTp = $previ['nbHTp'];
        $p->nbGrCm = $previ['nbGrCm'];
        $p->nbGrTd = $previ['nbGrTd'];
        $p->nbGrTp = $previ['nbGrTp'];
        $p->matiere_libelle = $previ['libelle'];
        $p->matiere_code = $previ['codeMatiere'];
        $p->matiere_code_element = $previ['matiere_code_element'];
        $p->personnel_id = $previ['id_personnel'] ?? 0;
        $p->personnel_nom = '' !== $previ['nom'] ? mb_strtoupper($previ['nom']) : '-';
        $p->personnel_prenom = '' !== $previ['prenom'] ? ucwords(mb_strtolower($previ['prenom'])) : '-';
        $p->personnel_numeroHarpege = $previ['numeroHarpege'] ?? 0;
        $p->personnel_type = $previ['statut'] ?? 0;
        $p->personnel_mail = $previ['mailUniv'] ?? '-';
        $p->nbHeuresService = $previ['nbHeuresService'] ?? 0;
        $p->semestre_id = $previ['id_semestre'] ?? 0;
        $p->semestre_libelle = $previ['libelle_semestre'] ?? '-';
        $p->annee_id = $previ['id_annee'] ?? 0;
        $p->annee_libelle = $previ['libelle_annee'] ?? '-';
        $p->annee_code_etape = $previ['annee_code_etape'] ?? '-';
        $p->annee_libelle_long = $previ['annee_libelle_long'] ?? '-';
        $p->diplome_id = $previ['id_diplome'] ?? 0;
        $p->diplome_libelle = $previ['libelle_diplome'] ?? '-';
        $p->etatPlanCours = $previ['etat_plan_cours'] ?? null;
        $p->planCoursId = $previ['id_plan_cours'] ?? null;

        return $p;
    }
}
