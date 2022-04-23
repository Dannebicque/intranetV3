<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Emprunt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 22:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity]
#[ORM\Table(name: 'Emprunt')]
#[ORM\InheritanceType(value: 'SINGLE_TABLE')]
#[ORM\DiscriminatorColumn(name: 'type', type: 'string')]
#[ORM\DiscriminatorMap(value: [
    'emprunt' => Emprunt::class,
    'personnel' => EmpruntPersonnel::class,
    'etudiant' => EmpruntEtudiant::class,
])]
#[ORM\HasLifecycleCallbacks]
abstract class Emprunt extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

    public const DEMANDE = 'DEMANDE';
    public const ACCEPTE = 'ACCEPTE';
    public const SORTIE = 'SORTIE';
    public const REFUS = 'REFUS';
    public const REVENU = 'REVENU';
    public const ETATS = [
        self::DEMANDE => 'Demandes A valider',
        self::ACCEPTE => 'Demandes acceptées',
        self::SORTIE => 'Matériel sorti',
    ];

    #[Groups(groups: ['emprunts_administration'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?DateTimeInterface $dateDebut = null;

    #[Groups(groups: ['emprunts_administration'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?DateTimeInterface $dateFin = null;

    #[Groups(groups: ['emprunts_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $motif = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $description = null;

    #[Groups(groups: ['emprunts_administration'])]
    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $telephone = null;

    #[Groups(groups: ['emprunts_administration'])]
    #[ORM\Column(type: Types::STRING, length: 10)]
    private ?string $etat = null;

    #[Groups(groups: ['emprunts_administration'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?DateTimeInterface $dateSortie = null;

    #[Groups(groups: ['emprunts_administration'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?DateTimeInterface $dateRetour = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\EmpruntMateriel>
     */
    #[ORM\OneToMany(mappedBy: 'emprunt', targetEntity: EmpruntMateriel::class, cascade: ['remove'])]
    private Collection $empruntMateriels;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?DateTimeInterface $dateValidation = null;

    #[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'emprunts')]
    private ?Departement $departement = null;

    /**
     *
     * @throws Exception
     */
    public function __construct()
    {
        $this->setUuid(Uuid::uuid4());
        $this->empruntMateriels = new ArrayCollection();
        $this->setEtat(self::DEMANDE);
    }

    public function setUuid(UuidInterface $uuid): self
    {
        $this->uuid = $uuid;

        return $this;
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

    public function getResponsable(): ?Personnel
    {
        return $this->getDepartement()?->getRespMateriel();

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
