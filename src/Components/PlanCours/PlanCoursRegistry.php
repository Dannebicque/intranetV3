<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/PlanCoursRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\PlanCours;

use App\Components\PlanCours\Exceptions\PlanCoursNotFoundException;
use App\Components\PlanCours\Source\AbstractPlanCours;

class PlanCoursRegistry
{
    final public const TAG_PLAN_COURS = 'da.plan.cours';

    private array $planCours = [];

    public function registerPlanCours(string $name, AbstractPlanCours $abstractPlanCours): void
    {
        $this->planCours[$abstractPlanCours::SOURCE] = $abstractPlanCours;
    }

    /**
     * @throws \App\Components\PlanCours\Exceptions\PlanCoursNotFoundException
     */
    public function getPlanCours(string $name): mixed
    {
        if (!array_key_exists($name, $this->planCours)) {
            throw new PlanCoursNotFoundException();
        }

        return $this->planCours[$name];
    }

    public function getPlansCours(): array
    {
        return $this->planCours;
    }
}
