<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/PlanCoursManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\PlanCours;

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
}
