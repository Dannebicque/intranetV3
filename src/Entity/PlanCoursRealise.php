<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/PlanCoursRealise.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2022 16:24
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\PlanCoursRealiseRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlanCoursRealiseRepository::class)]
#[ORM\HasLifecycleCallbacks]
class PlanCoursRealise extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $contenu = null;

    #[ORM\Column]
    private ?float $nbHeures = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $commentaire = null;

    #[ORM\ManyToOne(targetEntity: PlanCours::class, inversedBy: 'planCoursRealises')]
    private ?PlanCours $planCours = null;

    public function getContenu(): ?string
    {
        return $this->contenu;
    }

    public function setContenu(string $contenu): self
    {
        $this->contenu = $contenu;

        return $this;
    }

    public function getNbHeures(): ?float
    {
        return $this->nbHeures;
    }

    public function setNbHeures(float $nbHeures): self
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
}
