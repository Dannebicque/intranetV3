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
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RddDiplomeRepository::class)]
#[ORM\HasLifecycleCallbacks]
class RddDiplome extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 10)]
    private ?string $numEtudiant = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 15)]
    private ?string $ine = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255, nullable: true)]
    private ?string $mailperso = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 20)]
    private ?string $diplome = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255)]
    private ?string $libelleDiplome = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE)]
    private ?CarbonInterface $dateNaissance = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BOOLEAN)]
    private bool $confirme = false;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BOOLEAN)]
    private bool $enqueteAFaire = false;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 30, nullable: true)]
    private ?string $codeEtape = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255)]
    private ?string $adresse = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 5)]
    private ?string $codePostal = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 100)]
    private ?string $ville = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 50)]
    private ?string $pays = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255, nullable: true)]
    private ?string $adresseComplement = null;

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
        return $this->codePostal;
    }

    public function setCodePostal(string $codePostal): self
    {
        $this->codePostal = $codePostal;

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
        return $this->adresseComplement;
    }

    public function setAdresseComplement(string $adresseComplement): self
    {
        $this->adresseComplement = $adresseComplement;

        return $this;
    }
}
