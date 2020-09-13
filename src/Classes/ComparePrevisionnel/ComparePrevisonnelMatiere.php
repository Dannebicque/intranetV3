<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ComparePrevisionnel/ComparePrevisonnelMatiere.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2020 18:11

namespace App\Classes\ComparePrevisionnel;


use App\Entity\Departement;
use App\Entity\Matiere;
use App\Entity\Previsionnel;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\MatiereRepository;
use App\Repository\PrevisionnelRepository;

class ComparePrevisonnelMatiere extends ComparePrevisionnel
{
    private EdtPlanningRepository $edtPlanningRepository;

    private MatiereRepository $matiereRepository;

    private CelcatEventsRepository $celcatEventsRepository;

    private PrevisionnelRepository $previsionnelRepository;
    /**
     * @var Matiere[]|int|mixed|string
     */
    private $matieres;

    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        CelcatEventsRepository $celcatEventsRepository,
        MatiereRepository $matiereRepository,
        PrevisionnelRepository $previsionnelRepository
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->celcatEventsRepository = $celcatEventsRepository;
        $this->matiereRepository = $matiereRepository;
        $this->previsionnelRepository = $previsionnelRepository;
    }

    /**
     * @param Departement $departement
     * @param             $annee
     *
     * @return array
     */
    public function compareEdtPreviMatiere(Departement $departement, $annee, $source): array
    {
        $this->matieres = $this->matiereRepository->findByDepartement($departement);
        $previsonnel = $this->previsionnelRepository->findByDepartement($departement, $annee);

        if ($source === 'intranet') {
            $planning = $this->edtPlanningRepository->findByDepartement($departement);
        }

        $t = [];

        /** @var Matiere $module */
        foreach ($this->matieres as $matiere) {
            $t[$matiere->getId()] = [];
        }

        /** @var  $p Previsionnel */
        foreach ($previsonnel as $p) {
            if (($p !== null && $p->getMatiere() !== null && $p->getPersonnel() !== null) &&
                array_key_exists($p->getMatiere()->getId(), $t)) {
                if (!array_key_exists($p->getPersonnel()->getId(), $t[$p->getMatiere()->getId()])) {

                    $t[$p->getMatiere()->getId()][$p->getPersonnel()->getId()]['personnel'] = $p->getPersonnel();
                    $t[$p->getMatiere()->getId()][$p->getPersonnel()->getId()]['nbCMPrevi'] = 0;
                    $t[$p->getMatiere()->getId()][$p->getPersonnel()->getId()]['nbTDPrevi'] = 0;
                    $t[$p->getMatiere()->getId()][$p->getPersonnel()->getId()]['nbTPPrevi'] = 0;
                    $t[$p->getMatiere()->getId()][$p->getPersonnel()->getId()]['nbCMEDT'] = 0;
                    $t[$p->getMatiere()->getId()][$p->getPersonnel()->getId()]['nbTDEDT'] = 0;
                    $t[$p->getMatiere()->getId()][$p->getPersonnel()->getId()]['nbTPEDT'] = 0;

                }

                $t[$p->getMatiere()->getId()][$p->getPersonnel()->getId()]['nbCMPrevi'] += $p->getNbHCM();
                $t[$p->getMatiere()->getId()][$p->getPersonnel()->getId()]['nbTDPrevi'] += $p->getNbHTD() * $p->getNbGrTD();
                $t[$p->getMatiere()->getId()][$p->getPersonnel()->getId()]['nbTPPrevi'] += $p->getNbHTP() * $p->getNbGrTP();
            }
        }

        foreach ($planning as $pl) {
            if ($pl->getMatiere() !== null &&
                $pl->getIntervenant() !== null &&
                array_key_exists($pl->getMatiere()->getId(), $t)) {
                if (!array_key_exists($pl->getIntervenant()->getId(), $t[$pl->getMatiere()->getId()])) {
                    $t[$pl->getMatiere()->getId()][$pl->getIntervenant()->getId()]['personnel'] = $pl->getIntervenant();
                    $t[$pl->getMatiere()->getId()][$pl->getIntervenant()->getId()]['nbCMPrevi'] = 0;
                    $t[$pl->getMatiere()->getId()][$pl->getIntervenant()->getId()]['nbTDPrevi'] = 0;
                    $t[$pl->getMatiere()->getId()][$pl->getIntervenant()->getId()]['nbTPPrevi'] = 0;
                    $t[$pl->getMatiere()->getId()][$pl->getIntervenant()->getId()]['nbCMEDT'] = 0;
                    $t[$pl->getMatiere()->getId()][$pl->getIntervenant()->getId()]['nbTDEDT'] = 0;
                    $t[$pl->getMatiere()->getId()][$pl->getIntervenant()->getId()]['nbTPEDT'] = 0;
                }

                switch ($pl->getType()) {
                    case 'cm':
                    case 'CM':
                        $t[$pl->getMatiere()->getId()][$pl->getIntervenant()->getId()]['nbCMEDT'] += $pl->getDureeInt();
                        break;
                    case 'td':
                    case 'TD':
                        $t[$pl->getMatiere()->getId()][$pl->getIntervenant()->getId()]['nbTDEDT'] += $pl->getDureeInt();
                        break;
                    case 'tp':
                    case 'TP':
                        $t[$pl->getMatiere()->getId()][$pl->getIntervenant()->getId()]['nbTPEDT'] += $pl->getDureeInt();
                        break;
                }
            }
        }

        return $t;
    }

    /**
     * @return Matiere[]|int|mixed|string
     */
    public function getMatieres()
    {
        return $this->matieres;
    }


}
