<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/PersonnelDepartement.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PersonnelDepartementRepository")
 */
class PersonnelDepartement
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var Personnel
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="personnelDepartements", fetch="EAGER")
     * @ORM\OrderBy({"nom" = "asc", "prenom" = "asc"})
     */
    private $personnel;

    /**
     * @var Departement
     * @ORM\ManyToOne(targetEntity="Departement", inversedBy="personnelDepartements", fetch="EAGER")
     */
    private $departement;

    /**
     * @ORM\Column(type="integer")
     */
    private $annee;

    /**
     * @ORM\Column(type="string", length=250)
     */
    private $roles;

    /**
     * @ORM\Column(type="boolean")
     */
    private $defaut = false;

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

    public function getId()
    {
        return $this->id;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @return PersonnelDepartement
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    /**
     * @return PersonnelDepartement
     */
    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    /**
     * @return PersonnelDepartement
     */
    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getRoles(): ?array
    {
        return json_decode($this->roles);
    }

    /**
     * @return PersonnelDepartement
     */
    public function addRole(string $role): self
    {
        $roles = $this->getRoles();
        $roles[] = $role;
        $this->roles = json_encode($roles);

        return $this;
    }

    /**
     * @return PersonnelDepartement
     */
    public function clearRole(): self
    {
        $this->roles = json_encode([]);

        return $this;
    }

    /**
     * @param $role
     *
     * @return PersonnelDepartement
     */
    public function removeRole($role): self
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
