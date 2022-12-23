<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/12/2022 17:36
 */

namespace App\Components\PlanCours\Source;

use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;

interface PlanCoursInterface
{
    public function createPlanCours(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire);

    public function add($planCours): void;

    public function getRepository();

}