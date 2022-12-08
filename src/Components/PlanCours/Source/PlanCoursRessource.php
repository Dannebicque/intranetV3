<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursRessource.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\PlanCours\Source;

use App\Components\PlanCours\Form\PlanCoursRessourceType;
use App\Repository\PlanCoursRessourceRepository;

class PlanCoursRessource extends AbstractPlanCours implements PlanCoursInterface
{
    public const SOURCE = 'ressource';
    public const FORM = PlanCoursRessourceType::class;
    public const TEMPLATE_FORM = 'plan_cours_ressource.html.twig';

    public function __construct(protected PlanCoursRessourceRepository $planCoursRessourceRepository)
    {
    }


    public function createPlanCours()
    {
        return new \App\Entity\PlanCoursRessource();
    }

    public function add($planCoursSae): void
    {
        $this->planCoursRessourceRepository->add($planCoursSae);
    }

    public function getRepository()
    {
        return $this->planCoursRessourceRepository;
    }
}
