<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/EdtIntranet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/05/2022 10:30
 */

namespace App\Classes\Edt;

use App\Adapter\EdtIntranetAdapter;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;
use App\Repository\EdtPlanningRepository;

class EdtIntranet extends AbstractEdt implements EdtInterface
{
    public function __construct(
        private readonly EdtIntranetAdapter $adapter,
        private readonly EdtPlanningRepository $edtPlanningRepository,
        private readonly EdtIntranetAdapter $edtIntranetAdapter)
    {
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire, array $groupes): EvenementEdtCollection
    {
        $evts = $this->edtPlanningRepository->findAllEdtSemestre($semestre, $anneeUniversitaire);

        return $this->adapter->collection($evts, $matieres, $this->transformeGroupe($groupes));
    }

    public function find(int $event, array $matieres = [], array $groupes = []): EvenementEdt
    {
        $evt = $this->edtPlanningRepository->find($event);

        return $this->edtIntranetAdapter->single($evt, $matieres, $this->transformeGroupe($groupes));
    }

    public function recupereEdtJourBorne(Semestre $semestre, array $matieres, int $jourSemaine, int $semaineFormation): EvenementEdtCollection
    {
        $evts = $this->edtPlanningRepository->recupereEdtBorne($semaineFormation, $semestre, $jourSemaine);

        return $this->edtIntranetAdapter->collection($evts, $matieres);
    }

    public function getPlanningSemestreSemaine(
        Semestre $semestre,
        int $semaine,
        array $matieres,
        array $groupes,
        AnneeUniversitaire $anneeUniversitaire
    ) {
        $evts = $this->edtPlanningRepository->findEdtSemestreSemaine($semestre, $semaine, $anneeUniversitaire);

        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getOrdre()] = $groupe;
        }

        return $this->adapter->collection($evts, $matieres, $tGroupes);
    }

    private function transformeGroupe(array $groupes): array
    {
        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getOrdre()] = $groupe;
        }

        return $tGroupes;
    }
}
