<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Date.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 12:37
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DateRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Date extends BaseEntity
{
    use LifeCycleTrait;

    public const TYPE_STAGE = 'type.stage';
    public const TYPE_SOUTENANCE = 'type.soutenance';
    public const TYPE_PROJET = 'type.projet';
    public const TYPE_AUTRE = 'type.autre';
    public const TYPE_COMMISSION = 'type.commission';
    public const TYPE_REUNION = 'type.reunion';
    public const TYPE_RENTREE = 'type.rentree';
    public const TYPE_VACANCES = 'type.vacances';

    public const COULEUR_BADGE = [
        self::TYPE_STAGE => 'badge-primary',
        self::TYPE_SOUTENANCE => 'badge-danger',
        self::TYPE_PROJET => 'badge-purple',
        self::TYPE_AUTRE => 'badge-pink',
        self::TYPE_COMMISSION => 'badge-warning',
        self::TYPE_REUNION => 'badge-yellow',
        self::TYPE_RENTREE => 'badge-success',
        self::TYPE_VACANCES => 'badge-info',
    ];

    public const QUI_ETUDIANT = 'E';
    public const QUI_PERSONNEL = 'P';

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"date_administration"})
     */
    private ?string $libelle;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"date_administration"})
     */
    private ?string $texte;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"date_administration"})
     */
    private ?CarbonInterface $dateDebut = null;

    /**
     * @ORM\Column(type="time", nullable=true)
     * @Groups({"date_administration"})
     */
    private ?CarbonInterface $heureDebut;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"date_administration"})
     */
    private ?CarbonInterface $dateFin = null;

    /**
     * @ORM\Column(type="time", nullable=true)
     * @Groups({"date_administration"})
     */
    private ?CarbonInterface $heureFin;

    /**
     * @ORM\Column(name="lieu", type="string", length=150)
     * @Groups({"date_administration"})
     */
    private ?string $lieu;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"date_administration"})
     */
    private bool $allday = false;

    /**
     * @ORM\Column(type="string", length=1)
     * @Groups({"date_administration"})
     */
    private string $qui;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement")
     */
    private Departement $departement;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Semestre", inversedBy="dates")
     * @Groups({"date_administration"})
     */
    private Collection $semestres;

    /**
     * @ORM\Column(type="string", length=30)
     * @Groups({"date_administration"})
     */
    private ?string $type;

    public function __construct()
    {
        $this->semestres = new ArrayCollection();
    }

    public static function getTypeList(): array
    {
        return [
            self::TYPE_AUTRE,
            self::TYPE_COMMISSION,
            self::TYPE_PROJET,
            self::TYPE_REUNION,
            self::TYPE_SOUTENANCE,
            self::TYPE_STAGE,
            self::TYPE_RENTREE,
        ];
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getTexte(): ?string
    {
        return $this->texte;
    }

    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }

    public function getDateDebut(): ?CarbonInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(CarbonInterface $dateDebut): void
    {
        $this->dateDebut = $dateDebut;
    }

    public function getHeureDebut(): ?CarbonInterface
    {
        return $this->heureDebut;
    }

    public function setHeureDebut(CarbonInterface $heureDebut): void
    {
        $this->heureDebut = $heureDebut;
    }

    public function getDateFin(): ?CarbonInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(CarbonInterface $dateFin): void
    {
        $this->dateFin = $dateFin;
    }

    public function getHeureFin(): ?CarbonInterface
    {
        return $this->heureFin;
    }

    public function setHeureFin(CarbonInterface $heureFin): void
    {
        $this->heureFin = $heureFin;
    }

    public function getLieu(): ?string
    {
        return $this->lieu;
    }

    public function setLieu(string $lieu): void
    {
        $this->lieu = $lieu;
    }

    public function isAllday(): bool
    {
        return $this->allday;
    }

    public function setAllday(bool $allday): void
    {
        $this->allday = $allday;
    }

    public function getQui(): ?string
    {
        return $this->qui;
    }

    public function setQui(string $qui): void
    {
        $this->qui = $qui;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(Departement $departement): void
    {
        $this->departement = $departement;
    }

    /**
     * @return Collection|Semestre[]
     */
    public function getSemestres(): Collection
    {
        return $this->semestres;
    }

    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
        }

        return $this;
    }

    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
        }

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

    public function getCouleurBadge()
    {
        return self::COULEUR_BADGE[$this->type];
    }

    public function getAllday(): ?bool
    {
        return $this->allday;
    }
}
