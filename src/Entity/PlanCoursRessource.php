<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/PlanCoursRessource.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Entity;

use App\Repository\PlanCoursRessourceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlanCoursRessourceRepository::class)]
class PlanCoursRessource extends PlanCours
{
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $modalitesEvaluations = null;

    public function __construct()
    {
        parent::__construct();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getModalitesEvaluations(): ?string
    {
        return $this->modalitesEvaluations;
    }

    public function setModalitesEvaluations(?string $modalitesEvaluations): self
    {
        $this->modalitesEvaluations = $modalitesEvaluations;

        return $this;
    }
}
