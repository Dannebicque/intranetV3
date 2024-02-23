<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/PlanCoursSae.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Repository\PlanCoursSaeRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlanCoursSaeRepository::class)]
class PlanCoursSae extends PlanCours
{
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $miseEnOeuvre = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $modalitesEvaluations = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $livrables = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $livrablesRendus = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $modaliteEncadrementAutonomie = null;

    #[ORM\Column]
    protected ?float $projetPrevu = null;

    #[ORM\Column]
    protected ?float $projetRealise = null;

    public function __construct()
    {
        parent::__construct();
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

    public function getLivrables(): ?string
    {
        return $this->livrables;
    }

    public function setLivrables(?string $livrables): self
    {
        $this->livrables = $livrables;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getMiseEnOeuvre(): ?string
    {
        return $this->miseEnOeuvre;
    }

    /**
     * @param string|null $miseEnOeuvre
     */
    public function setMiseEnOeuvre(?string $miseEnOeuvre): void
    {
        $this->miseEnOeuvre = $miseEnOeuvre;
    }


    public function getLivrablesRendus(): ?string
    {
        return $this->livrablesRendus;
    }

    public function setLivrablesRendus(?string $livrablesRendus): self
    {
        $this->livrablesRendus = $livrablesRendus;

        return $this;
    }

    public function getModaliteEncadrementAutonomie(): ?string
    {
        return $this->modaliteEncadrementAutonomie;
    }

    public function setModaliteEncadrementAutonomie(?string $modaliteEncadrementAutonomie): self
    {
        $this->modaliteEncadrementAutonomie = $modaliteEncadrementAutonomie;

        return $this;
    }

    public function getProjetPrevu(): ?float
    {
        return $this->projetPrevu;
    }

    public function setProjetPrevu(float $projetPrevu): self
    {
        $this->projetPrevu = $projetPrevu;

        return $this;
    }

    public function getProjetRealise(): ?float
    {
        return $this->projetRealise;
    }

    public function setProjetRealise(float $projetRealise): self
    {
        $this->projetRealise = $projetRealise;

        return $this;
    }
}
