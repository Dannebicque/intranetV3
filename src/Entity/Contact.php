<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Contact.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 19:05
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ContactRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Contact extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"alternance_administration", "stage_entreprise_administration"})
     */
    private ?string $nom;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"alternance_administration", "stage_entreprise_administration"})
     */
    private ?string $prenom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"alternance_administration", "stage_entreprise_administration"})
     */
    private ?string $fonction;

    /**
     * @ORM\Column(type="string", length=25, nullable=true)
     * @Groups({"alternance_administration", "stage_entreprise_administration"})
     */
    private ?string $telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"alternance_administration", "stage_entreprise_administration"})
     */
    private ?string $email;

    /**
     * @ORM\Column(type="string", length=25, nullable=true)
     * @Groups({"alternance_administration"})
     */
    private ?string $portable;

    /**
     * @ORM\Column(type="string", length=3)
     * @Groups({"alternance_administration"})
     */
    private ?string $civilite;

    /**
     * @ORM\Column(type="string", length=25, nullable=true)
     */
    private ?string $fax;

    public function __construct()
    {
        $this->civilite = Constantes::CIVILITE_HOMME;
    }

    public function getFonction(): ?string
    {
        return $this->fonction;
    }

    public function setFonction(?string $fonction): self
    {
        $this->fonction = $fonction;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPortable(): ?string
    {
        return $this->portable;
    }

    public function setPortable(?string $portable): self
    {
        $this->portable = $portable;

        return $this;
    }

    public function getCivilite(): ?string
    {
        return $this->civilite;
    }

    public function setCivilite(?string $civilite): self
    {
        $this->civilite = $civilite;

        return $this;
    }

    public function getFax(): ?string
    {
        return $this->fax;
    }

    public function setFax(?string $fax): self
    {
        $this->fax = $fax;

        return $this;
    }

    public function getDisplay(): string
    {
        return $this->civilite . ' ' . ucfirst($this->getPrenom()) . ' ' . mb_strtoupper($this->getNom());
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getCiviliteLong(): ?string
    {
        return Constantes::CIVILITE_HOMME === $this->civilite ? 'Monsieur' : 'Madame';
    }
}
