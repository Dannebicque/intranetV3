<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/PlanCours.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/04/2022 15:26
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\PlanCoursRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlanCoursRepository::class)]
class PlanCours extends BaseEntity
{
    use LifeCycleTrait;
}
