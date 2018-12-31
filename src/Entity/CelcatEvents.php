<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CelcatEventsRepository")
 */
class CelcatEvents extends BaseEntity
{
    /**
     * @ORM\Column(type="integer")
     */
    private $eventId;

    /**
     * @ORM\Column(type="integer")
     */
    private $jour;

    /**
     * @ORM\Column(type="datetime")
     */
    private $debut;

    /**
     * @ORM\Column(type="datetime")
     */
    private $fin;

    /**
     * @ORM\Column(type="integer")
     */
    private $semaineFormation;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codeModule;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libModule;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codePersonnel;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libPersonnel;

    /**
     * @ORM\Column(type="integer")
     */
    private $departementId;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codeSalle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libSalle;

    public function getEventId(): ?int
    {
        return $this->eventId;
    }

    public function setEventId(int $eventId): self
    {
        $this->eventId = $eventId;

        return $this;
    }

    public function getJour(): ?int
    {
        return $this->jour;
    }

    public function setJour(int $jour): self
    {
        $this->jour = $jour;

        return $this;
    }

    public function getDebut(): ?\DateTimeInterface
    {
        return $this->debut;
    }

    public function setDebut(\DateTimeInterface $debut): self
    {
        $this->debut = $debut;

        return $this;
    }

    public function getFin(): ?\DateTimeInterface
    {
        return $this->fin;
    }

    public function setFin(\DateTimeInterface $fin): self
    {
        $this->fin = $fin;

        return $this;
    }

    public function getSemaineFormation(): ?int
    {
        return $this->semaineFormation;
    }

    public function setSemaineFormation(int $semaineFormation): self
    {
        $this->semaineFormation = $semaineFormation;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getCodeModule(): ?string
    {
        return $this->codeModule;
    }

    public function setCodeModule(string $codeModule): self
    {
        $this->codeModule = $codeModule;

        return $this;
    }

    public function getLibModule(): ?string
    {
        return $this->libModule;
    }

    public function setLibModule(string $libModule): self
    {
        $this->libModule = $libModule;

        return $this;
    }

    public function getCodePersonnel(): ?string
    {
        return $this->codePersonnel;
    }

    public function setCodePersonnel(string $codePersonnel): self
    {
        $this->codePersonnel = $codePersonnel;

        return $this;
    }

    public function getLibPersonnel(): ?string
    {
        return $this->libPersonnel;
    }

    public function setLibPersonnel(string $libPersonnel): self
    {
        $this->libPersonnel = $libPersonnel;

        return $this;
    }

    public function getDepartementId(): ?int
    {
        return $this->departementId;
    }

    public function setDepartementId(int $departementId): self
    {
        $this->departementId = $departementId;

        return $this;
    }

    public function getCodeSalle(): ?string
    {
        return $this->codeSalle;
    }

    public function setCodeSalle(string $codeSalle): self
    {
        $this->codeSalle = $codeSalle;

        return $this;
    }

    public function getLibSalle(): ?string
    {
        return $this->libSalle;
    }

    public function setLibSalle(string $libSalle): self
    {
        $this->libSalle = $libSalle;

        return $this;
    }
}
