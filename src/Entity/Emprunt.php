<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Emprunt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Entity;

use App\Entity\Traits\UuidTrait;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @ORM\Table(name="Emprunt")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="type", type="string")
 * @ORM\DiscriminatorMap( {"emprunt" = "Emprunt", "personnel" = "EmpruntPersonnel",  "etudiant" = "EmpruntEtudiant"} )
 */
abstract class Emprunt extends BaseEntity
{
    use UuidTrait;
    public const DEMANDE = 'DEMANDE';
    public const ACCEPTE = 'ACCEPTE';
    public const SORTIE = 'SORTIE';
    public const REFUS = 'REFUS';
    public const REVENU = 'REVENU';

    public const ETATS = [
        self::DEMANDE => 'Demandes A valider',
        self::ACCEPTE => 'Demandes acceptées',
        self::SORTIE  => 'Matériel sorti',
    ];

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"emprunts_administration"})
     */
    private $dateDebut;
    /**
     * @ORM\Column(type="datetime")
     * @Groups({"emprunts_administration"})
     */
    private $dateFin;
    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"emprunts_administration"})
     */
    private $motif;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;
    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"emprunts_administration"})
     */
    private $telephone;
    /**
     * @ORM\Column(type="string", length=10)
     * @Groups({"emprunts_administration"})
     */
    private $etat;
    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"emprunts_administration"})
     */
    private $dateSortie;
    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"emprunts_administration"})
     */
    private $dateRetour;
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\EmpruntMateriel", mappedBy="emprunt", cascade={"remove"})
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
     *
     * @throws Exception
     */
    public function __construct()
    {
        $this->setUuid(Uuid::uuid4());
        $this->empruntMateriels = new ArrayCollection();
        $this->setEtat(self::DEMANDE);
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
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

    public function getResponsable()
    {
        if (null !== $this->getDepartement()) {
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

    public function setUuid($uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }
}
