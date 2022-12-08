<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\PlanCours\Source;

use App\Repository\PlanCoursMatiereRepository;

class PlanCoursMatiere extends AbstractPlanCours implements PlanCoursInterface
{
    public const SOURCE = 'matiere';
    public const FORM = PlanCoursMatiere::class;
    public const TEMPLATE_FORM = 'plan_cours_matiere.html.twig';

    public function __construct(protected PlanCoursMatiereRepository $planCoursMatiereRepository)
    {
    }

    public function createPlanCours()
    {
        return new \App\Entity\PlanCoursMatiere();
    }

    public function add($planCours): void
    {
        $this->planCoursMatiereRepository->add($planCours);
    }

    public function getRepository()
    {
        return $this->planCoursMatiereRepository;
    }
}
