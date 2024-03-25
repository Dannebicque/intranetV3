<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/ComparePrevisionnel/ComparePrevisonnelMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Classes\ComparePrevisionnel;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Entity\Departement;
use App\Repository\EdtPlanningRepository;
use function array_key_exists;

class ComparePrevisonnelMatiere extends ComparePrevisionnel
{
    private array $matieres;

    public function __construct(private readonly EdtPlanningRepository $edtPlanningRepository, private readonly TypeMatiereManager $typeMatiereManager, private readonly PrevisionnelManager $previsionnelManager)
    {
        //todo: passer par le manager...
    }

    public function compareEdtPreviMatiere(Departement $departement, int $annee, string $source): array
    {
        $this->matieres = $this->typeMatiereManager->findByDepartement($departement);
        $previsonnel = $this->previsionnelManager->findByDepartement($departement, $annee);

        if ('intranet' === $source) {
            $planning = $this->edtPlanningRepository->findByDepartement($departement);
        } else {
            $planning = []; // todo: récupérer d'une autre source... et récupérer aussi du manager pour fusionner les deux ? Peut être pas indispensable ici
        }

        $t = [];

        foreach ($this->matieres as $matiere) {
            $t[$matiere->getTypeIdMatiere()] = [];
        }

        foreach ($previsonnel as $p) {
            if ((null !== $p && 0 !== $p->matiere_id && 0 !== $p->personnel_id) &&
                array_key_exists($p->getTypeIdMatiere(), $t)) {
                $ligne = $p->getTypeIdMatiere();
                $col = $p->personnel_id;

                if (!array_key_exists($col, $t[$ligne])) {
                    $t[$ligne][$col]['personnel_id'] = $p->personnel_id;
                    $t[$ligne][$col]['personnel_prenom'] = $p->personnel_prenom;
                    $t[$ligne][$col]['personnel_nom'] = $p->personnel_nom;
                    $t[$ligne][$col]['nbCMPrevi'] = 0;
                    $t[$ligne][$col]['nbTDPrevi'] = 0;
                    $t[$ligne][$col]['nbTPPrevi'] = 0;
                    $t[$ligne][$col]['nbCMEDT'] = 0;
                    $t[$ligne][$col]['nbTDEDT'] = 0;
                    $t[$ligne][$col]['nbTPEDT'] = 0;
                }

                $t[$ligne][$col]['nbCMPrevi'] += $p->nbHCm * $p->nbGrCm;
                $t[$ligne][$col]['nbTDPrevi'] += $p->nbHTd * $p->nbGrTd;
                $t[$ligne][$col]['nbTPPrevi'] += $p->nbHTp * $p->nbGrTp;
            }
        }

        foreach ($planning as $pl) {
            $ligne = $pl->getTypeIdMatiere();
            if (0 !== $pl->getIdMatiere() &&
                null !== $pl->getIntervenant() &&
                array_key_exists($ligne, $t)) {
                $col = $pl->getIntervenant()->getId();
                if (!array_key_exists($col, $t[$ligne])) {
                    $t[$ligne][$col]['personnel_id'] = $pl->getIntervenant()->getId();
                    $t[$ligne][$col]['personnel_prenom'] = $pl->getIntervenant()->getPrenom();
                    $t[$ligne][$col]['personnel_nom'] = $pl->getIntervenant()->getNom();
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

    public function getMatieres(): array
    {
        return $this->matieres;
    }
}
