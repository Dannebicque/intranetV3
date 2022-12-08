<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/PlanCoursMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2022 17:47
 */

namespace App\Entity;

use App\Repository\PlanCoursMatiereRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlanCoursMatiereRepository::class)]
class PlanCoursMatiere extends PlanCours
{
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $descriptionMatiere = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $objectifs = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $modalitesEvaluations = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescriptionMatiere(): ?string
    {
        return $this->descriptionMatiere;
    }

    public function setDescriptionMatiere(?string $descriptionMatiere): self
    {
        $this->descriptionMatiere = $descriptionMatiere;

        return $this;
    }

    public function getObjectifs(): ?string
    {
        return $this->objectifs;
    }

    public function setObjectifs(?string $objectifs): self
    {
        $this->objectifs = $objectifs;

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
