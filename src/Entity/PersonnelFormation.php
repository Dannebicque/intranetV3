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

    public function __construct(Personnel $personnel, Formation $formation)
    {
        $this->formation = $formation;
        $this->personnel = $personnel;
        $this->annee = date('Y');
    }

    public function getId()
    {
        return $this->id;
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

    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    public function setFormation(?Formation $formation): self
    {
        $this->formation = $formation;

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
}
