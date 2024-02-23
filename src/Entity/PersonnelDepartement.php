<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/PersonnelDepartement.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Entity;

use App\Repository\PersonnelDepartementRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use JsonException;

#[ORM\Entity(repositoryClass: PersonnelDepartementRepository::class)]
class PersonnelDepartement extends BaseEntity
{
    #[ORM\Column(type: Types::INTEGER)]
    private int $annee;

    #[ORM\Column(type: Types::STRING, length: 250)]
    private ?string $roles = '';

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $defaut = false;

    public function __construct(#[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'personnelDepartements')] private Personnel $personnel, #[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'personnelDepartements')] private Departement $departement)
    {
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
        if ('' === $this->roles) {
            return [];
        }

        return json_decode($this->roles, false, 2, JSON_THROW_ON_ERROR);
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
     * @throws JsonException
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
