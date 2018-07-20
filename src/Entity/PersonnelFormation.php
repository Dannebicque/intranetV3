<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PersonnelFormationRepository")
 */
class PersonnelFormation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var Personnel
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="personnelFormations")
     */
    private $personnel;

    /**
     * @var Formation
     * @ORM\ManyToOne(targetEntity="App\Entity\Formation", inversedBy="personnelFormations")
     */
    private $formation;

    /**
     * @ORM\Column(type="integer")
     */
    private $annee;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $role = 'ROLE_PERMANENT';

    /**
     * @ORM\Column(type="boolean")
     */
    private $defaut = false;

    /**
     * PersonnelFormation constructor.
     *
     * @param Personnel $personnel
     * @param Formation $formation
     */
    public function __construct(Personnel $personnel, Formation $formation)
    {
        $this->formation = $formation;
        $this->personnel = $personnel;
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
     * @return PersonnelFormation
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return Formation|null
     */
    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    /**
     * @param Formation|null $formation
     *
     * @return PersonnelFormation
     */
    public function setFormation(?Formation $formation): self
    {
        $this->formation = $formation;

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
     * @return PersonnelFormation
     */
    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getRole(): ?string
    {
        return $this->role;
    }

    /**
     * @param string $role
     *
     * @return PersonnelFormation
     */
    public function setRole(string $role): self
    {
        $this->role = $role;

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
