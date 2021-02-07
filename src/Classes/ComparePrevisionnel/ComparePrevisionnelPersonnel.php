<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ComparePrevisionnel/ComparePrevisionnelPersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:05
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */


namespace App\Classes\ComparePrevisionnel;

use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;

class ComparePrevisionnelPersonnel extends ComparePrevisionnel
{
    private EdtPlanningRepository $edtPlanningRepository;

    private CelcatEventsRepository $celcatEventsRepository;

    private PrevisionnelRepository $previsionnelRepository;

    private PersonnelRepository $personnelRepository;
    /**
     * @var Personnel[]|mixed
     */
    private $personnels;

    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        CelcatEventsRepository $celcatEventsRepository,
        PrevisionnelRepository $previsionnelRepository,
        PersonnelRepository $personnelRepository
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->celcatEventsRepository = $celcatEventsRepository;
        $this->previsionnelRepository = $previsionnelRepository;
        $this->personnelRepository = $personnelRepository;
    }

    public function compareEdtPreviPersonnels(Departement $departement, $annee, $source): array
    {
        $this->personnels = $this->personnelRepository->findByDepartement($departement);
        $previsionnels = $this->previsionnelRepository->findByDepartement($departement, $annee);
        if ('intranet' === $source) {
            $planning = $this->edtPlanningRepository->findByDepartement($departement);
        }
        $t = [];

        /** @var Personnel $ens */
        foreach ($this->personnels as $ens) {
            $t[$ens->getId()] = [];
        }

        /** @var $p Previsionnel */
        foreach ($previsionnels as $p) {
            if (null !== $p &&
                null !== $p->getPersonnel() &&
                null !== $p->getMatiere() &&
                \array_key_exists($p->getPersonnel()->getId(), $t)) {
                if (!\array_key_exists($p->getMatiere()->getId(), $t[$p->getPersonnel()->getId()])) {
                    $ligne = $p->getPersonnel()->getId();
                    $colonne = $p->getMatiere()->getId();
                    $t[$ligne][$colonne]['matiere'] = $p->getMatiere();
                    $t[$ligne][$colonne]['nbCMPrevi'] = 0;
                    $t[$ligne][$colonne]['nbTDPrevi'] = 0;
                    $t[$ligne][$colonne]['nbTPPrevi'] = 0;
                    $t[$ligne][$colonne]['nbCMEDT'] = 0;
                    $t[$ligne][$colonne]['nbTDEDT'] = 0;
                    $t[$ligne][$colonne]['nbTPEDT'] = 0;
                }

                $t[$p->getPersonnel()->getId()][$p->getMatiere()->getId()]['nbCMPrevi'] += $p->getNbHCm();
                $t[$p->getPersonnel()->getId()][$p->getMatiere()->getId()]['nbTDPrevi'] += $p->getNbHTd() * $p->getNbGrTd();
                $t[$p->getPersonnel()->getId()][$p->getMatiere()->getId()]['nbTPPrevi'] += $p->getNbHTp() * $p->getNbGrTp();
            }
        }

        foreach ($planning as $pl) {
            if (null !== $pl->getMatiere() &&
                null !== $pl->getIntervenant() &&
                \array_key_exists($pl->getIntervenant()->getId(), $t)) {
                if (!\array_key_exists($pl->getMatiere()->getId(), $t[$pl->getIntervenant()->getId()])) {
                    $t[$pl->getIntervenant()->getId()][$pl->getMatiere()->getId()]['matiere'] = $pl->getMatiere();
                    $t[$pl->getIntervenant()->getId()][$pl->getMatiere()->getId()]['nbCMPrevi'] = 0;
                    $t[$pl->getIntervenant()->getId()][$pl->getMatiere()->getId()]['nbTDPrevi'] = 0;
                    $t[$pl->getIntervenant()->getId()][$pl->getMatiere()->getId()]['nbTPPrevi'] = 0;
                    $t[$pl->getIntervenant()->getId()][$pl->getMatiere()->getId()]['nbCMEDT'] = 0;
                    $t[$pl->getIntervenant()->getId()][$pl->getMatiere()->getId()]['nbTDEDT'] = 0;
                    $t[$pl->getIntervenant()->getId()][$pl->getMatiere()->getId()]['nbTPEDT'] = 0;
                }

                switch ($pl->getType()) {
                    case 'cm':
                    case 'CM':
                        $t[$pl->getIntervenant()->getId()][$pl->getMatiere()->getId()]['nbCMEDT'] += $pl->getDureeInt();
                        break;
                    case 'td':
                    case 'TD':
                        $t[$pl->getIntervenant()->getId()][$pl->getMatiere()->getId()]['nbTDEDT'] += $pl->getDureeInt();
                        break;
                    case 'tp':
                    case 'TP':
                        $t[$pl->getIntervenant()->getId()][$pl->getMatiere()->getId()]['nbTPEDT'] += $pl->getDureeInt();
                        break;
                }
            }
        }

        return $t;
    }

    /**
     * @return Personnel[]|mixed
     */
    public function getPersonnels()
    {
        return $this->personnels;
    }
}
