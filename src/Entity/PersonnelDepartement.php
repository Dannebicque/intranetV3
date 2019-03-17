<?php

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
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="personnelDepartements")
     */
    private $personnel;

    /**
     * @var Departement
     * @ORM\ManyToOne(targetEntity="Departement", inversedBy="personnelDepartements")
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
     *
     * @param Personnel   $personnel
     * @param Departement $departement
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

    /**
     * @return Personnel|null
     */
    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @param Personnel|null $personnel
     *
     * @return PersonnelDepartement
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return Departement|null
     */
    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    /**
     * @param Departement|null $departement
     *
     * @return PersonnelDepartement
     */
    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    /**
     * @param int $annee
     *
     * @return PersonnelDepartement
     */
    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    /**
     * @return null|array
     */
    public function getRoles(): ?array
    {
        return json_decode($this->roles);
    }

    /**
     * @param string $role
     *
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
