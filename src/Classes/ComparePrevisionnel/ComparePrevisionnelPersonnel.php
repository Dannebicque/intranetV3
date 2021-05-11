<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ComparePrevisionnel/ComparePrevisionnelPersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Classes\ComparePrevisionnel;

use App\Classes\Previsionnel\PrevisionnelManager;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\PersonnelRepository;

class ComparePrevisionnelPersonnel extends ComparePrevisionnel
{
    private EdtPlanningRepository $edtPlanningRepository;

    private CelcatEventsRepository $celcatEventsRepository;

    private PrevisionnelManager $previsionnelManager;

    private PersonnelRepository $personnelRepository;
    /**
     * @var Personnel[]|mixed
     */
    private $personnels;

    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        CelcatEventsRepository $celcatEventsRepository,
        PrevisionnelManager $previsionnelManager,
        PersonnelRepository $personnelRepository
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->celcatEventsRepository = $celcatEventsRepository;
        $this->previsionnelManager = $previsionnelManager;
        $this->personnelRepository = $personnelRepository;
    }

    public function compareEdtPreviPersonnels(Departement $departement, $annee, $source): array
    {
        $this->personnels = $this->personnelRepository->findByDepartement($departement);
        $previsionnels = $this->previsionnelManager->findByDepartement($departement, $annee);
        if ('intranet' === $source) {
            $planning = $this->edtPlanningRepository->findByDepartement($departement);
        }
        $t = [];

        /** @var Personnel $ens */
        foreach ($this->personnels as $ens) {
            $t[$ens->getId()] = [];
        }

        foreach ($previsionnels as $p) {
            if (null !== $p &&
                0 !== $p->personnel_id &&
                0 !== $p->matiere_id &&
                \array_key_exists($p->personnel_id, $t)) {
                $colonne = $p->type_matiere . '-' . $p->matiere_id;
                $ligne = $p->personnel_id;
                if (!\array_key_exists($p->matiere_id, $t[$p->personnel_id])) {
                    $t[$ligne][$colonne]['matiere_id'] = $p->matiere_id;
                    $t[$ligne][$colonne]['matiere_code'] = $p->matiere_code;
                    $t[$ligne][$colonne]['matiere_code_element'] = $p->matiere_code_element;
                    $t[$ligne][$colonne]['matiere_libelle'] = $p->matiere_libelle;
                    $t[$ligne][$colonne]['semestre_libelle'] = $p->semestre_libelle;
                    $t[$ligne][$colonne]['nbCMPrevi'] = 0;
                    $t[$ligne][$colonne]['nbTDPrevi'] = 0;
                    $t[$ligne][$colonne]['nbTPPrevi'] = 0;
                    $t[$ligne][$colonne]['nbCMEDT'] = 0;
                    $t[$ligne][$colonne]['nbTDEDT'] = 0;
                    $t[$ligne][$colonne]['nbTPEDT'] = 0;
                }

                $t[$ligne][$colonne]['nbCMPrevi'] += $p->nbHCm * $p->nbGrCm;
                $t[$ligne][$colonne]['nbTDPrevi'] += $p->nbHTd * $p->nbGrTd;
                $t[$ligne][$colonne]['nbTPPrevi'] += $p->nbHTp * $p->nbGrTp;
            }
        }

        //todo: adapter Matiere ne sera pas un objet mais un ID. Mettre à jour l'entité comme pour prévisionnel
        foreach ($planning as $pl) {
            if (null !== $pl->getMatiere() &&
                null !== $pl->getIntervenant() &&
                \array_key_exists($pl->getIntervenant()->getId(), $t)) {
                $col = $pl->getTypeMatiere() . '_' . $pl->getMatiere()->getId();
                $ligne = $pl->getIntervenant()->getId();
                if (!\array_key_exists($pl->getMatiere()->getId(), $t[$pl->getIntervenant()->getId()])) {


                    $t[$ligne][$col]['matiere_id'] = $pl->getMatiere()->getId();
                    $t[$ligne][$col]['matiere_code'] = $pl->getMatiere()->getCodeMatiere();
                    $t[$ligne][$col]['matiere_code_element'] = $pl->getMatiere()->getCodeElement();
                    $t[$ligne][$col]['matiere_libelle'] = $pl->getMatiere()->getLibelle();
                    $t[$ligne][$col]['semestre_libelle'] = $pl->getMatiere()->getSemestre()->getLibelle();
                    $t[$ligne][$col]['nbCMPrevi'] = 0;
                    $t[$ligne][$col]['nbTDPrevi'] = 0;
                    $t[$ligne][$col]['nbTPPrevi'] = 0;
                    $t[$ligne][$col]['nbCMEDT'] = 0;
                    $t[$ligne][$col]['nbTDEDT'] = 0;
                    $t[$ligne][$col]['nbTPEDT'] = 0;
                }

                switch ($pl->getType()) {
                    case 'cm':
                    case 'CM':
                        $t[$ligne][$col]['nbCMEDT'] += $pl->getDureeInt();
                        break;
                    case 'td':
                    case 'TD':
                        $t[$ligne][$col]['nbTDEDT'] += $pl->getDureeInt();
                        break;
                    case 'tp':
                    case 'TP':
                        $t[$ligne][$col]['nbTPEDT'] += $pl->getDureeInt();
                        break;
                }
            }
        }

        return $t;
    }

    public function getPersonnels()
    {
        return $this->personnels;
    }
}
