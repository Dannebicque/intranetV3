<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Contact.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/09/2020 08:41

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ContactRepository")
 */
class Contact extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"alternance_administration", "stage_entreprise_administration"})
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"alternance_administration", "stage_entreprise_administration"})
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"alternance_administration", "stage_entreprise_administration"})
     */
    private $fonction;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     * @Groups({"alternance_administration", "stage_entreprise_administration"})
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"alternance_administration", "stage_entreprise_administration"})
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     * @Groups({"alternance_administration"})
     */
    private $portable;

    /**
     * @ORM\Column(type="string", length=3)
     * @Groups({"alternance_administration"})
     */
    private $civilite;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $fax;

    public function __construct()
    {
        $this->civilite = Constantes::CIVILITE_HOMME;
    }

    public function getFonction(): ?string
    {
        return $this->fonction;
    }

    public function setFonction(string $fonction): self
    {
        $this->fonction = $fonction;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPortable(): ?string
    {
        return $this->portable;
    }

    public function setPortable(string $portable): self
    {
        $this->portable = $portable;

        return $this;
    }

    public function getCivilite(): ?string
    {
        return $this->civilite;
    }

    public function setCivilite(string $civilite): self
    {
        $this->civilite = $civilite;

        return $this;
    }

    public function getFax(): ?string
    {
        return $this->fax;
    }

    public function setFax(string $fax): self
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

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getCiviliteLong(): ?string
    {
        return $this->civilite === 'M.' ? 'Monsieur' : 'Madame';
    }
}
