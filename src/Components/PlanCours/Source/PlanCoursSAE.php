<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursSAE.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\PlanCours\Source;

use App\Components\PlanCours\Form\PlanCoursSaeType;
use App\Repository\PlanCoursSaeRepository;

class PlanCoursSAE extends AbstractPlanCours implements PlanCoursInterface
{
    public const SOURCE = 'sae';
    public const FORM = PlanCoursSaeType::class;
    public const TEMPLATE_FORM = 'plan_cours_sae.html.twig';

    public function __construct(protected PlanCoursSaeRepository $planCoursSaeRepository)
    {
    }

    public function createPlanCours()
    {
        return new \App\Entity\PlanCoursSae();
    }

    public function add($planCours): void
    {
        $this->planCoursSaeRepository->add($planCours);
    }

    public function getRepository()
    {
        return $this->planCoursSaeRepository;
    }
}
