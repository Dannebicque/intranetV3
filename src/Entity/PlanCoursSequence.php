<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/PlanCoursSequence.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/04/2024 14:14
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\PlanCoursSequenceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlanCoursSequenceRepository::class)]
#[ORM\HasLifecycleCallbacks]
class PlanCoursSequence extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $programme = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $nbHeures = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $commentaire = null;

    #[ORM\ManyToOne(inversedBy: 'planCoursSequences')]
    private ?PlanCours $planCours = null;

    #[ORM\Column(length: 10, nullable: true)]
    private ?string $ordre = null;

    public function getProgramme(): ?string
    {
        return $this->programme;
    }

    public function setProgramme(string $programme): self
    {
        $this->programme = $programme;

        return $this;
    }

    public function getNbHeures(): ?string
    {
        return $this->nbHeures;
    }

    public function setNbHeures(string $nbHeures): self
    {
        $this->nbHeures = $nbHeures;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(?string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    public function getPlanCours(): ?PlanCours
    {
        return $this->planCours;
    }

    public function setPlanCours(?PlanCours $planCours): self
    {
        $this->planCours = $planCours;

        return $this;
    }

    public function getOrdre(): ?string
    {
        return $this->ordre;
    }

    public function setOrdre(?string $ordre): static
    {
        $this->ordre = $ordre;

        return $this;
    }
}
