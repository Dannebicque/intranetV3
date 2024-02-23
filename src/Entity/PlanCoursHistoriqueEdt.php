<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/PlanCoursHistoriqueEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Repository\PlanCoursHistoriqueEdtRepository;
use DateTimeInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlanCoursHistoriqueEdtRepository::class)]
#[ORM\HasLifecycleCallbacks]
class PlanCoursHistoriqueEdt extends BaseEntity
{
    use LifeCycleTrait;
    use MatiereTrait;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $commentaire = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?DateTimeInterface $dateCours = null;

    #[ORM\ManyToOne(inversedBy: 'planCoursHistoriqueEdts')]
    private ?Personnel $enseignant = null;

    #[ORM\Column]
    private ?int $ordreSeance = null;

    #[ORM\ManyToOne(inversedBy: 'planCoursHistoriqueEdts')]
    private ?Groupe $groupe = null;

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    public function getDateCours(): ?DateTimeInterface
    {
        return $this->dateCours;
    }

    public function setDateCours(DateTimeInterface $dateCours): self
    {
        $this->dateCours = $dateCours;

        return $this;
    }

    public function getEnseignant(): ?Personnel
    {
        return $this->enseignant;
    }

    public function setEnseignant(?Personnel $enseignant): self
    {
        $this->enseignant = $enseignant;

        return $this;
    }

    public function getOrdreSeance(): ?int
    {
        return $this->ordreSeance;
    }

    public function setOrdreSeance(int $ordreSeance): self
    {
        $this->ordreSeance = $ordreSeance;

        return $this;
    }

    public function getGroupe(): ?Groupe
    {
        return $this->groupe;
    }

    public function setGroupe(?Groupe $groupe): self
    {
        $this->groupe = $groupe;

        return $this;
    }
}
