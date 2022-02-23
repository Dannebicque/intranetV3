<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/PersonnelDepartement.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/08/2021 18:52
 */

namespace App\Entity;

use App\Repository\PersonnelDepartementRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PersonnelDepartementRepository::class)]
class PersonnelDepartement extends BaseEntity
{
    #[ORM\Column(type: Types::INTEGER)]
    private int $annee;

    #[ORM\Column(type: Types::STRING, length: 250)]
    private ?string $roles = '';

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $defaut = false;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'personnelDepartements')]
    private Personnel $personnel;

    #[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'personnelDepartements')]
    private Departement $departement;

    public function __construct(Personnel $personnel, Departement $departement)
    {
        $this->personnel = $personnel;
        $this->departement = $departement;
        $this->addRole('ROLE_PERMANENT');
        $this->annee = (int) date('Y');
    }

    public function addRole(string $role): self
    {
        $roles = $this->getRoles();
        $roles[] = $role;
        $this->roles = json_encode($roles, JSON_THROW_ON_ERROR);

        return $this;
    }

    public function getRoles(): ?array
    {
        return json_decode($this->roles); //, false, 512, JSON_THROW_ON_ERROR);
    }

    public function setRoles(string $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    /**
     * @throws \JsonException
     */
    public function clearRole(): self
    {
        $this->roles = json_encode([], JSON_THROW_ON_ERROR);

        return $this;
    }

    public function removeRole(string $role): self
    {
        $roles = $this->getRoles();
        $key = array_search($role, $roles, true);
        unset($roles[$key]);
        $roles = array_values($roles);
        $this->roles = json_encode($roles, JSON_THROW_ON_ERROR);

        return $this;
    }

    public function getDefaut(): ?bool
    {
        return $this->defaut;
    }

    public function setDefaut(bool $defaut): self
    {
        $this->defaut = $defaut;

        return $this;
    }
}
