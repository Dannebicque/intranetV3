<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/ComparePrevisionnel/ComparePrevisionnelPersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Classes\ComparePrevisionnel;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Components\SourceEdt\Source\AbstractEdt;
use App\DTO\Previsionnel;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\EdtPlanningRepository;
use App\Repository\PersonnelRepository;
use function array_key_exists;

class ComparePrevisionnelPersonnel extends ComparePrevisionnel
{
    private mixed $personnels;

    public function __construct(private readonly EdtPlanningRepository $edtPlanningRepository, private readonly PrevisionnelManager $previsionnelManager, private readonly PersonnelRepository $personnelRepository, private readonly TypeMatiereManager $typeMatiereManager)
    {
    }

    public function compareEdtPreviPersonnels(Departement $departement, int $annee, string $source): array
    {
        $this->personnels = $this->personnelRepository->findByDepartement($departement);
        $previsionnels = $this->previsionnelManager->findByDepartement($departement, $annee);
        if (AbstractEdt::SOURCE_EDT_INTRANET === $source) {
            $planning = $this->edtPlanningRepository->findByDepartement($departement);
        } else {
            $planning = []; // todo: récupérer d'une autre source... et récupérer aussi du manager pour fusionner les deux ? Peut être pas indispensable ici
        }
        $t = [];

        /** @var Personnel $ens */
        foreach ($this->personnels as $ens) {
            $t[$ens->getId()] = [];
        }

        /** @var Previsionnel $p */
        foreach ($previsionnels as $p) {
            if (null !== $p &&
                0 !== $p->personnel_id &&
                0 !== $p->matiere_id &&
                array_key_exists($p->personnel_id, $t)) {
                $colonne = $p->getTypeIdMatiere();
                $ligne = $p->personnel_id;
                if (!array_key_exists($p->getTypeIdMatiere(), $t[$p->personnel_id])) {
                    $t[$ligne][$colonne]['matiere_id'] = $p->getTypeIdMatiere();
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

                $t[$ligne][$colonne]['nbCMPrevi'] += $p->getTotalHCm();
                $t[$ligne][$colonne]['nbTDPrevi'] += $p->getTotalHTd();
                $t[$ligne][$colonne]['nbTPPrevi'] += $p->getTotalHTp();
            }
        }

        foreach ($planning as $pl) {
            if (0 !== $pl->getIdMatiere() &&
                null !== $pl->getIntervenant() &&
                array_key_exists($pl->getIntervenant()->getId(), $t)) {
                $col = $pl->getTypeIdMatiere();
                $ligne = $pl->getIntervenant()->getId();
                if (!array_key_exists($pl->getTypeIdMatiere(), $t[$pl->getIntervenant()->getId()])) {
                    $matiere = $this->typeMatiereManager->getMatiereFromSelect($pl->getTypeIdMatiere());
                    $t[$ligne][$col]['matiere_id'] = $pl->getTypeIdMatiere();
                    $t[$ligne][$col]['matiere_code'] = $matiere?->codeMatiere;
                    $t[$ligne][$col]['matiere_code_element'] = $matiere?->codeElement;
                    $t[$ligne][$col]['matiere_libelle'] = $matiere?->libelle;
                    $t[$ligne][$col]['semestre_libelle'] = $matiere?->getSemestres()?->first()->getLibelle();
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

    public function getPersonnels(): mixed
    {
        return $this->personnels;
    }
}
