<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Contact.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/12/2022 08:55
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ContactRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContactRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Contact extends BaseEntity
{
    use LifeCycleTrait;

    #[Groups(groups: ['alternance_administration', 'stage_entreprise_administration'])]
    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $nom = null;

    #[Groups(groups: ['alternance_administration', 'stage_entreprise_administration'])]
    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $prenom = null;

    #[Groups(groups: ['alternance_administration', 'stage_entreprise_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $fonction = null;

    #[Groups(groups: ['alternance_administration', 'stage_entreprise_administration'])]
    #[ORM\Column(type: Types::STRING, length: 25, nullable: true)]
    private ?string $telephone = null;

    #[Groups(groups: ['alternance_administration', 'stage_entreprise_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $email = null;

    #[Groups(groups: ['alternance_administration'])]
    #[ORM\Column(type: Types::STRING, length: 25, nullable: true)]
    private ?string $portable = null;

    #[Groups(groups: ['alternance_administration'])]
    #[ORM\Column(type: Types::STRING, length: 3)]
    private ?string $civilite;

    #[ORM\Column(type: Types::STRING, length: 25, nullable: true)]
    private ?string $fax = null;

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
        return ucfirst($this->getPrenom()) . ' ' . mb_strtoupper($this->getNom());
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
