<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CovidAttestationPersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:42
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\CovidAttestationPersonnelRepository;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use function array_key_exists;

#[ORM\Entity(repositoryClass: CovidAttestationPersonnelRepository::class)]
#[ORM\HasLifecycleCallbacks]
class CovidAttestationPersonnel extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::STRING, length: 150)]
    private ?string $moyenDeplacement = null;

    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $motif = null;

    #[ORM\Column(type: Types::BOOLEAN, nullable: true)]
    private ?bool $validationDepartement = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?DateTimeInterface $dateValidationDepartement = null;

    #[ORM\Column(type: Types::BOOLEAN, nullable: true)]
    private bool $validationDirection;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?DateTimeInterface $dateValidationDirection = null;

    #[ORM\ManyToOne(targetEntity: Diplome::class, inversedBy: 'covidAttestationPersonnels')]
    private ?Diplome $diplome = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\CovidCreneauPresence>
     */
    #[ORM\OneToMany(mappedBy: 'attestation', targetEntity: CovidCreneauPresence::class, cascade: ['persist', 'remove'])]
    private Collection $covidCreneauPresences;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $motifRefus = null;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'covidAttestationPersonnels')]
    private Personnel $personnel;

    public function __construct(Personnel $personnel)
    {
        $this->personnel = $personnel;
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
        if (null === $this->validationDepartement) {
            return 'en.attente';
        }

        return true === $this->validationDepartement ? 'Yes' : 'No';
    }

    public function getValidationDirectionDisplay(): ?string
    {
        return true === $this->validationDirection ? 'Yes' : 'No';
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
        $this->setCreatedValue();
        $this->setUpdatedEntity();
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

    public function getMotifLong(): string
    {
        $tab = [
            'motif1' => 'Assurer TP / devoirs sur tables',
            'motif2' => 'Assurer sur site les enseignants car ne dispose pas des conditions satisfaisantes pour le faire en distanciel',
            'motif3' => 'Demandes ponctuelles (récupérer dossiers, BU)',
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

    public function moyenLong(): string
    {
        $tab = [
            'velo' => 'Vélo',
            'pied' => 'A pieds',
            'vehicule' => 'Véhicule personnel',
            'transport' => 'Transports en commun (bus, train, ...)',
        ];

        if (array_key_exists($this->moyenDeplacement, $tab)) {
            return $tab[$this->moyenDeplacement];
        }

        return 'non précisé';
    }
}
