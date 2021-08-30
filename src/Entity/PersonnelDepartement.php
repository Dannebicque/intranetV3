<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/PersonnelDepartement.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/08/2021 18:52
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PersonnelDepartementRepository")
 */
class PersonnelDepartement extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="personnelDepartements", fetch="EAGER")
     * @ORM\OrderBy({"nom" = "asc", "prenom" = "asc"})
     */
    private Personnel $personnel;

    /**
     * @ORM\ManyToOne(targetEntity="Departement", inversedBy="personnelDepartements", fetch="EAGER")
     */
    private Departement $departement;

    /**
     * @ORM\Column(type="integer")
     */
    private int $annee;

    /**
     * @ORM\Column(type="string", length=250)
     */
    private ?string $roles = '';

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $defaut = false;

    /**
     * PersonnelDepartement constructor.
     */
    public function __construct(Personnel $personnel, Departement $departement)
    {
        $this->departement = $departement;
        $this->personnel = $personnel;
        $this->addRole('ROLE_PERMANENT');
        $this->annee = (int)date('Y');
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(Departement $departement): self
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

    public function getRoles(): ?array
    {
        return json_decode($this->roles);
    }

    public function addRole(string $role): self
    {
        $roles = $this->getRoles();
        $roles[] = $role;
        $this->roles = json_encode($roles);

        return $this;
    }

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
        $this->roles = json_encode($roles);

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

    public function setRoles(string $roles): self
    {
        $this->roles = $roles;

        return $this;
    }
}
