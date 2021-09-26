<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CelcatEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/09/2021 08:57
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CelcatEventsRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class CelcatEvent extends BaseEntity
{
    use LifeCycleTrait;

    //todo: calculer la date réelle (comme pour EdtPlanning, Calculer le semestre).
    //todo: refactor les noms des deux entités EDTIntranet, EDTCelcat

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $eventId;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $jour;

    /**
     * @ORM\Column(type="datetime")
     */
    private ?CarbonInterface $debut;

    /**
     * @ORM\Column(type="datetime")
     */
    private ?CarbonInterface $fin;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $semaineFormation;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $type;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $codeModule;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $libModule;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $codePersonnel;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $libPersonnel;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $departementId;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $codeSalle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $libSalle;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private ?string $codeGroupe;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private ?string $libGroupe;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire")
     */
    private ?AnneeUniversitaire $anneeUniversitaire;

    /**
     * @ORM\Column(type="datetime")
     */
    private ?CarbonInterface $updateEvent;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateCours;

    /**
     * @ORM\ManyToOne(targetEntity=Semestre::class, inversedBy="celcatEvents")
     */
    private $semestre;

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

    public function getDebut(): ?CarbonInterface
    {
        return $this->debut;
    }

    public function setDebut(CarbonInterface $debut): self
    {
        $this->debut = $debut;

        return $this;
    }

    public function getFin(): ?CarbonInterface
    {
        return $this->fin;
    }

    public function setFin(CarbonInterface $fin): self
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

    public function getCodeGroupe(): ?string
    {
        return $this->codeGroupe;
    }

    public function setCodeGroupe(string $codeGroupe): self
    {
        $this->codeGroupe = $codeGroupe;

        return $this;
    }

    public function getLibGroupe(): ?string
    {
        return $this->libGroupe;
    }

    public function setLibGroupe(string $libGroupe): self
    {
        $this->libGroupe = $libGroupe;

        return $this;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function getUpdateEvent(): ?CarbonInterface
    {
        return $this->updateEvent;
    }

    public function setUpdateEvent(CarbonInterface $updateEvent): self
    {
        $this->updateEvent = $updateEvent;

        return $this;
    }

    public function getDisplayIcal(): string
    {
        return $this->getLibModule() . ' ' . $this->getLibGroupe();
    }

    public function getDateCours(): ?\DateTimeInterface
    {
        return $this->dateCours;
    }

    public function setDateCours(?\DateTimeInterface $dateCours): self
    {
        $this->dateCours = $dateCours;

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }
}
