<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/RddDiplome.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use App\Repository\RddDiplomeRepository;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RddDiplomeRepository::class)
 */
class RddDiplome extends BaseEntity
{
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

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private $codeEtape;

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

    public function getDateNaissance(): ?DateTimeInterface
    {
        return $this->dateNaissance;
    }

    public function setDateNaissance(DateTimeInterface $dateNaissance): self
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

    public function getCodeEtape(): ?string
    {
        return $this->codeEtape;
    }

    public function setCodeEtape(?string $codeEtape): self
    {
        $this->codeEtape = $codeEtape;

        return $this;
    }
}
