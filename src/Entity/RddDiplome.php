<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/RddDiplome.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 12:37
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\RddDiplomeRepository;
use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RddDiplomeRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class RddDiplome extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private ?string $numEtudiant;

    /**
     * @ORM\Column(type="string", length=15)
     */
    private ?string $ine;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $mailperso;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $diplome;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $libelleDiplome;

    /**
     * @ORM\Column(type="date")
     */
    private ?CarbonInterface $dateNaissance = null;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $confirme = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $enqueteAFaire = false;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private ?string $codeEtape;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $adresse;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private ?string $code_postal;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private ?string $ville;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private ?string $pays;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $adresse_complement;

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

    public function getDateNaissance(): ?CarbonInterface
    {
        return $this->dateNaissance;
    }

    public function setDateNaissance(CarbonInterface $dateNaissance): self
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

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->code_postal;
    }

    public function setCodePostal(string $code_postal): self
    {
        $this->code_postal = $code_postal;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(string $pays): self
    {
        $this->pays = $pays;

        return $this;
    }

    public function getAdresseComplement(): ?string
    {
        return $this->adresse_complement;
    }

    public function setAdresseComplement(string $adresse_complement): self
    {
        $this->adresse_complement = $adresse_complement;

        return $this;
    }
}
