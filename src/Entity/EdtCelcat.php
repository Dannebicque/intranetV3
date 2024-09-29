<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/EdtCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/09/2024 16:23
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Repository\EdtCelcatRepository;
use Carbon\CarbonInterface;
use DateTimeInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EdtCelcatRepository::class)]
#[ORM\HasLifecycleCallbacks]
class EdtCelcat extends BaseEntity
{
    use LifeCycleTrait;
    use MatiereTrait;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $eventId = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $jour = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $debut = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $fin = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $semaineFormation = null;

    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $type = null;

    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $codeModule = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libModule = null;

    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $codePersonnel = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libPersonnel = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $departementId = null;

    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $codeSalle = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libSalle = null;

    #[ORM\Column(type: Types::STRING, length: 30)]
    private ?string $codeGroupe = null;

    #[ORM\Column(type: Types::STRING, length: 50)]
    private ?string $libGroupe = null;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class)]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $updateEvent = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?DateTimeInterface $dateCours = null;

    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'edtCelcats')]
    private ?Semestre $semestre = null;

    #[ORM\ManyToOne(inversedBy: 'edtCelcats')]
    private ?Personnel $personnel = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $idEduSign = null;

    #[ORM\ManyToOne]
    private ?Groupe $groupe = null;

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
        return $this->getLibModule().' '.$this->getLibGroupe();
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

    public function getLibGroupe(): ?string
    {
        return $this->libGroupe;
    }

    public function setLibGroupe(string $libGroupe): self
    {
        $this->libGroupe = $libGroupe;

        return $this;
    }

    public function getDateCours(): ?DateTimeInterface
    {
        return $this->dateCours;
    }

    public function setDateCours(?DateTimeInterface $dateCours): self
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

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getIdEduSign(): ?string
    {
        return $this->idEduSign;
    }

    public function setIdEduSign(?string $idEduSign): static
    {
        $this->idEduSign = $idEduSign;

        return $this;
    }

    public function getGroupe(): ?Groupe
    {
        return $this->groupe;
    }

    public function setGroupe(?Groupe $groupe): static
    {
        $this->groupe = $groupe;

        return $this;
    }

    public function getUniqueId(): string
    {
        // construire un identifiant unique pour l'événement puisque le eventId n'est pas unique si l'événement est sur plusieurs semaines
        return $this->getEventId() . '_' . $this->getSemaineFormation() . '_' . $this->getJour();
    }
}
