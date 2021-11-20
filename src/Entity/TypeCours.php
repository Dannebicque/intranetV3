<?php

namespace App\Entity;

use App\Repository\TypeCoursRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TypeCoursRepository::class)
 */
class TypeCours extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=150)
     */
    private ?string $libelle;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private ?string $libelle_court;

    /**
     * @ORM\Column(type="float")
     */
    private ?float $ratioHeureEqTd = 1;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $commentaire;

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getLibelleCourt(): ?string
    {
        return $this->libelle_court;
    }

    public function setLibelleCourt(string $libelle_court): self
    {
        $this->libelle_court = $libelle_court;

        return $this;
    }

    public function getRatioHeureEqTd(): ?float
    {
        return $this->ratioHeureEqTd;
    }

    public function setRatioHeureEqTd(float $ratioHeureEqTd): self
    {
        $this->ratioHeureEqTd = $ratioHeureEqTd;

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
}
