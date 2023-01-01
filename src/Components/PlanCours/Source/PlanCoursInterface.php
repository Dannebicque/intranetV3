<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 16:10
 */

namespace App\Components\PlanCours\Source;

use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Personnel;

interface PlanCoursInterface
{
    public function createPlanCours(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire, Personnel $personnel);

    public function export(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire, Departement $departement);

    public function add($planCours): void;

    public function getRepository();

}
