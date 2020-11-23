<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/RddDiplome.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/11/2020 09:08

namespace App\Entity;

use App\Repository\RddDiplomeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RddDiplomeRepository::class)
 */
class RddDiplome
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $numEtudiant;

    /**
     * @ORM\Column(type="string", length=15)
     */
    private $ine;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $mailperso;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $diplome;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelleDiplome;

    /**
     * @ORM\Column(type="date")
     */
    private $dateNaissance;

    /**
     * @ORM\Column(type="boolean")
     */
    private $confirme = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private $enqueteAFaire = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumEtudiant(): ?string
    {
        return $this->numEtudiant;
    }

    public function setNumEtudiant(string $numEtudiant): self
    {
        $this->numEtudiant = $numEtudiant;

        return $this;
    }

    public function getIne(): ?string
    {
        return $this->ine;
    }

    public function setIne(string $ine): self
    {
        $this->ine = $ine;

        return $this;
    }

    public function getMailperso(): ?string
    {
        return $this->mailperso;
    }

    public function setMailperso(?string $mailperso): self
    {
        $this->mailperso = $mailperso;

        return $this;
    }

    public function getDiplome(): ?string
    {
        return $this->diplome;
    }

    public function setDiplome(string $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    public function getLibelleDiplome(): ?string
    {
        return $this->libelleDiplome;
    }

    public function setLibelleDiplome(string $libelleDiplome): self
    {
        $this->libelleDiplome = $libelleDiplome;

        return $this;
    }

    public function getDateNaissance(): ?\DateTimeInterface
    {
        return $this->dateNaissance;
    }

    public function setDateNaissance(\DateTimeInterface $dateNaissance): self
    {
        $this->dateNaissance = $dateNaissance;

        return $this;
    }

    public function getConfirme(): ?bool
    {
        return $this->confirme;
    }

    public function setConfirme(bool $confirme): self
    {
        $this->confirme = $confirme;

        return $this;
    }

    public function getEnqueteAFaire(): ?bool
    {
        return $this->enqueteAFaire;
    }

    public function setEnqueteAFaire(bool $enqueteAFaire): self
    {
        $this->enqueteAFaire = $enqueteAFaire;

        return $this;
    }
}
