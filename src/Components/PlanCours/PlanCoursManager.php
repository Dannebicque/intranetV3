<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/PlanCoursManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/02/2024 14:11
 */

namespace App\Components\PlanCours;

use App\Entity\AnneeUniversitaire;
use App\Entity\Personnel;
use App\Entity\Semestre;

class PlanCoursManager
{
    public function __construct(
        protected PlanCoursRegistry $planCoursRegistry,
    ) {
    }

    public function findBy(array $data): array
    {
        $results = [];
        foreach ($this->planCoursRegistry->getPlansCours() as $planCours) {
            $results[] = $planCours->getRepository()->findBy($data);
        }

        return array_merge(...$results);
    }

    public function findByIntervenantsAndAnnee(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire
    ): array
    {
        $results = [];
        foreach ($this->planCoursRegistry->getPlansCours() as $planCours) {
            $results[] = $planCours->getRepository()->findByIntervenantsAndAnnee($personnel, $anneeUniversitaire);
        }

        return array_merge(...$results);
    }

    public function findByIntervenantsAndSemestre(Personnel $personnel, Semestre $semestre, ?AnneeUniversitaire $anneeUniversitaire): array
    {
        $results = [];
        foreach ($this->planCoursRegistry->getPlansCours() as $planCours) {
            $results[] = $planCours->getRepository()->findByIntervenantsAndSemestre($personnel, $semestre, $anneeUniversitaire);
        }

        return array_merge(...$results);

    }
}
