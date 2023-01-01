<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/PlanCoursManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 11:44
 */

namespace App\Components\PlanCours;

use App\Entity\AnneeUniversitaire;
use App\Entity\Personnel;

class PlanCoursManager
{
    public function __construct(
        protected PlanCoursRegistry $planCoursRegistry,
    ) {
    }

    public function findBy(array $data)
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
    ) {
        $results = [];
        foreach ($this->planCoursRegistry->getPlansCours() as $planCours) {
            $results[] = $planCours->getRepository()->findByIntervenantsAndAnnee($personnel, $anneeUniversitaire);
        }

        return array_merge(...$results);
    }
}
