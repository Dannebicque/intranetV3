<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CovidAttestationPersonnel.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/01/2021 16:34

namespace App\Entity;

use App\Repository\CovidAttestationPersonnelRepository;
use DateTime;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CovidAttestationPersonnelRepository::class)
 */
class CovidAttestationPersonnel extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=150)
     */
    private $moyenDeplacement;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $motif;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $validationDepartement;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateValidationDepartement;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $validationDirection;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateValidationDirection;

    /**
     * @ORM\ManyToOne(targetEntity=Personnel::class, inversedBy="covidAttestationPersonnels", fetch="EAGER")
     */
    private $personnel;

    /**
     * @ORM\ManyToOne(targetEntity=Diplome::class, inversedBy="covidAttestationPersonnels")
     */
    private $diplome;

    /**
     * @ORM\OneToMany(targetEntity=CovidCreneauPresence::class, mappedBy="attestation", cascade={"persist","remove"})
     */
    private $covidCreneauPresences;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $motifRefus;

    public function __construct(Personnel $personnel)
    {
        $this->personnel = $personnel;
        $this->creneaux = new ArrayCollection();
        $this->covidCreneauPresences = new ArrayCollection();
    }


    public function getMoyenDeplacement(): ?string
    {
        return $this->moyenDeplacement;
    }

    public function setMoyenDeplacement(string $moyenDeplacement): self
    {
        $this->moyenDeplacement = $moyenDeplacement;

        return $this;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(string $motif): self
    {
        $this->motif = $motif;

        return $this;
    }

    public function getValidationDepartement(): ?bool
    {
        return $this->validationDepartement;
    }

    public function setValidationDepartement(?bool $validationDepartement): self
    {
        $this->validationDepartement = $validationDepartement;

        return $this;
    }

    public function getValidationDepartementDisplay(): ?string
    {
        if ($this->validationDepartement === null) {
            return 'en.attente';
        }

        return $this->validationDepartement === true ? 'Yes' : 'No';
    }

    public function getValidationDirectionDisplay(): ?string
    {
        if ($this->validationDirection === null) {
            return 'en.attente';
        }

        return $this->validationDirection === true ? 'Yes' : 'No';
    }

    public function getDateValidationDepartement(): ?DateTimeInterface
    {
        return $this->dateValidationDepartement;
    }

    public function setDateValidationDepartement(?DateTimeInterface $dateValidationDepartement): self
    {
        $this->dateValidationDepartement = $dateValidationDepartement;

        return $this;
    }

    public function getValidationDirection(): ?bool
    {
        return $this->validationDirection;
    }

    public function setValidationDirection(?bool $validationDirection): self
    {
        $this->validationDirection = $validationDirection;

        return $this;
    }

    public function getDateValidationDirection(): ?DateTimeInterface
    {
        return $this->dateValidationDirection;
    }

    public function setDateValidationDirection(?DateTimeInterface $dateValidationDirection): self
    {
        $this->dateValidationDirection = $dateValidationDirection;

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

    public function __clone()
    {
        $this->setDateValidationDepartement(null);
        $this->setDateValidationDirection(null);
        $this->setValidationDepartement(null);
        $this->setValidationDirection(null);
        $this->setCreated(new DateTime());
        $this->setUpdated(new DateTime());
    }

    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    /**
     * @return Collection|CovidCreneauPresence[]
     */
    public function getCovidCreneauPresences(): Collection
    {
        return $this->covidCreneauPresences;
    }

    public function addCovidCreneauPresence(CovidCreneauPresence $covidCreneauPresence): self
    {
        if (!$this->covidCreneauPresences->contains($covidCreneauPresence)) {
            $this->covidCreneauPresences[] = $covidCreneauPresence;
            $covidCreneauPresence->setAttestation($this);
        }

        return $this;
    }

    public function removeCovidCreneauPresence(CovidCreneauPresence $covidCreneauPresence): self
    {
        if ($this->covidCreneauPresences->contains($covidCreneauPresence)) {
            $this->covidCreneauPresences->removeElement($covidCreneauPresence);
            // set the owning side to null (unless already changed)
            if ($covidCreneauPresence->getAttestation() === $this) {
                $covidCreneauPresence->setAttestation(null);
            }
        }

        return $this;
    }

    public function getMotifLong()
    {
        $tab = [
            'motif1' => 'Assurer TP / devoirs sur tables',
            'motif2' => 'Assurer sur site les enseignants car ne dispose pas des conditions satisfaisantes pour le faire en distanciel',
            'motif3' => 'Demandes ponctuelles (récupérer dossiers, BU)'
        ];

        return $tab[$this->motif];
    }

    public function getMotifRefus(): ?string
    {
        return $this->motifRefus;
    }

    public function setMotifRefus(?string $motifRefus): self
    {
        $this->motifRefus = $motifRefus;

        return $this;
    }

    public function moyenLong()
    {
        $tab = [
            'velo'      => 'Vélo',
            'pied'      => 'A pieds',
            'vehicule'  => 'Véhicule personnel',
            'transport' => 'Transports en commun (bus, train, ...)'
        ];

        if (array_key_exists($this->moyenDeplacement, $tab)) {
            return $tab[$this->moyenDeplacement];
        }

        return 'non précisé';
    }
}
