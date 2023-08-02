<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/AideController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2023 08:33
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AideController extends AbstractController
{
    final public const BASE_URL_AIDE = 'https://documentation.iutranet.fr/';

    #[Route('/aide/{sujet}', name: 'help_article')]
    public function index(
        string $sujet
    ): Response {
        $tab = [
            'login' => '01-etudiant/01-etudiant',
            'administration_stage_periode' => 'url',
            'application_personnel_carnet' => 'url',
            'administration_absence_liste' => 'url',
            'administration_absence_suivi' => 'url',
            'administration_justificatif_absence' => 'url',
            'administration_actualite' => 'url',
            'administration_alternance' => 'url',
            'administration_bc_demande' => 'url',
            'administration_borne' => 'url',
            'administration_date' => 'url',
            'administration_document' => 'url',
            'administration_emprunts_historique' => 'url',
            'administration_emprunts' => 'url',
            'administration_etudiants_departement' => 'url',
            'administration_etudiants_semestre' => 'url',
            'administration_evaluation' => 'url',
            'administration_groupe' => 'url',
            'administration_hrs' => 'url',
            'administration_matiere' => 'url',
            'administration_personnel' => 'url',
            'administration_ppn' => 'url',
            'administration_previsionnel' => 'url',
            'administration_projet_periode' => 'url',
            'administration_etudiants_rattrapage' => 'url',
            'administration_etudiants_rattrapage_planning' => 'url',
            'administration_salle_examen' => 'url',
            'administration_etudiants_scolarite' => 'url',
            'administration_stage_entreprise' => 'url',
            'administration_stage_offre' => 'url',
            'administration_document_type_document' => 'url',
            'personnel_absence' => '02-permanent/02-gestion_des_absences',
            'personnel_note' => '02-permanent/03-evaluations',
            'personnel_previsionnel' => '02-permanent/04-previsionnel',
            'administration_structure' => 'url',
            'super_administration_annee_universitaire' => '05-super_administration/100-annee_universitaire',
            'super_administration_diplome_wizard' => 'url',
            'super_administration_bac' => '05-super_administration/101-bac',
            'super_administration_celcat' => '05-super_administration/102-celcat',
            'super_administration_configuration' => '05-super_administration/99-configuration',
            'super_administration_materiel_commun' => '05-super_administration/104-materiel_commun',
            'super_administration_salle' => '05-super_administration/103-salle',
            'super_administration_site' => '05-super_administration/105-site',
            'super_administration_statut' => 'url',
            'super_administration_type_diplome' => '05-super_administration/107-type_diplome',
            'super_administration_type_hrs' => '05-super_administration/108-type_hrs',
            'super_administration_ufr' => '05-super_administration/106-ufr',
            'administration_questionnaire_question' => '',
            'administration_questionnaire_section' => '',
            'administration_questionnaire_questionnaire' => '',
        ];
        if (array_key_exists($sujet, $tab)) {
            return $this->redirect(self::BASE_URL_AIDE.$tab[$sujet]);
        }

        return $this->redirect(self::BASE_URL_AIDE);
    }
}
