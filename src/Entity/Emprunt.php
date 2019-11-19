<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Emprunt.php
// @author     David Annebicque
// @project intranetv3
// @date 19/11/2019 07:35
// @lastUpdate 15/11/2019 07:21

namespace App\Entity;

use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

/**
 * @ORM\Entity
 * @ORM\Table(name="Emprunt")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="type", type="string")
 * @ORM\DiscriminatorMap( {"emprunt" = "Emprunt", "personnel" = "EmpruntPersonnel",  "etudiant" = "EmpruntEtudiant"} )
 */
abstract class Emprunt extends BaseEntity
{
    public const DEMANDE = 'DEMANDE';
    public const ACCEPTE = 'ACCEPTE';
    public const SORTIE = 'SORTIE';
    public const REFUS = 'REFUS';
    public const REVENU = 'REVENU';

    public const ETATS = [
        Emprunt::DEMANDE => 'Demandes A valider',
        Emprunt::ACCEPTE => 'Demandes acceptées',
        Emprunt::SORTIE  => 'Matériel sorti',
    ];

    /**
     * @var UuidInterface
     *
     * @ORM\Column(type="uuid_binary", unique=true)
     */
    protected $uuid;
    /**
     * @ORM\Column(type="datetime")
     */
    private $dateDebut;
    /**
     * @ORM\Column(type="datetime")
     */
    private $dateFin;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $motif;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;
    /**
     * @ORM\Column(type="string", length=20)
     */
    private $telephone;
    /**
     * @ORM\Column(type="string", length=10)
     */
    private $etat;
    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateSortie;
    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateRetour;
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\EmpruntMateriel", mappedBy="emprunt")
     */
    private $empruntMateriels;
    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateValidation;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="emprunts")
     */
    private $departement;

    /**
     * Emprunt constructor.
     * @throws Exception
     */
    public function __construct()
    {
        $this->uuid = Uuid::uuid4();
        $this->empruntMateriels = new ArrayCollection();
    }

    /**
     * @return UuidInterface
     */
    public function getUuidString(): string
    {
        return (string)$this->getUuid();
    }

    /**
     * @return UuidInterface
     */
    public function getUuid(): UuidInterface
    {
        return $this->uuid;
    }

    public function getDateDebut(): ?DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(DateTimeInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(DateTimeInterface $datefin): self
    {
        $this->dateFin = $datefin;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getDateSortie(): ?DateTimeInterface
    {
        return $this->dateSortie;
    }

    public function setDateSortie(DateTimeInterface $datesortie): self
    {
        $this->dateSortie = $datesortie;

        return $this;
    }

    public function getDateRetour(): ?DateTimeInterface
    {
        return $this->dateRetour;
    }

    public function setDateRetour(DateTimeInterface $dateretour): self
    {
        $this->dateRetour = $dateretour;

        return $this;
    }

    /**
     * @return Collection|EmpruntMateriel[]
     */
    public function getEmpruntMateriels(): Collection
    {
        return $this->empruntMateriels;
    }

    public function addEmpruntMateriel(EmpruntMateriel $empruntMateriel): self
    {
        if (!$this->empruntMateriels->contains($empruntMateriel)) {
            $this->empruntMateriels[] = $empruntMateriel;
            $empruntMateriel->setEmprunt($this);
        }

        return $this;
    }

    public function removeEmpruntMateriel(EmpruntMateriel $empruntMateriel): self
    {
        if ($this->empruntMateriels->contains($empruntMateriel)) {
            $this->empruntMateriels->removeElement($empruntMateriel);
            // set the owning side to null (unless already changed)
            if ($empruntMateriel->getEmprunt() === $this) {
                $empruntMateriel->setEmprunt(null);
            }
        }

        return $this;
    }

    public function getDateValidation(): ?DateTimeInterface
    {
        return $this->dateValidation;
    }

    public function setDateValidation(DateTimeInterface $dateValidation): self
    {
        $this->dateValidation = $dateValidation;

        return $this;
    }

    public function getReponsable()
    {
        if ($this->getDepartement() !== null) {
            return $this->getDepartement()->getRespMateriel();
        }

        return null;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }
}
