<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Date.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/05/2021 09:51
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use DateTime;
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
        self::TYPE_STAGE      => 'badge-primary',
        self::TYPE_SOUTENANCE => 'badge-danger',
        self::TYPE_PROJET     => 'badge-purple',
        self::TYPE_AUTRE      => 'badge-pink',
        self::TYPE_COMMISSION => 'badge-warning',
        self::TYPE_REUNION    => 'badge-yellow',
        self::TYPE_RENTREE    => 'badge-success',
        self::TYPE_VACANCES   => 'badge-info',
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
     * @var DateTime
     *
     * @ORM\Column(type="date")
     * @Groups({"date_administration"})
     */
    private $dateDebut;

    /**
     * @var DateTime
     *
     * @ORM\Column(type="time", nullable=true)
     * @Groups({"date_administration"})
     */
    private $heureDebut;

    /**
     * @var DateTime
     *
     * @ORM\Column(type="date")
     * @Groups({"date_administration"})
     */
    private $dateFin;

    /**
     * @var DateTime
     *
     * @ORM\Column(type="time", nullable=true)
     * @Groups({"date_administration"})
     */
    private $heureFin;

    /**
     * @var string
     *
     * @ORM\Column(name="lieu", type="string", length=150)
     * @Groups({"date_administration"})
     */
    private $lieu;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean")
     * @Groups({"date_administration"})
     */
    private $allday = false;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=1)
     * @Groups({"date_administration"})
     */
    private $qui;

    /**
     * @var Departement
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement")
     */
    private $departement;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Semestre", inversedBy="dates")
     * @Groups({"date_administration"})
     */
    private $semestres;

    /**
     * @ORM\Column(type="string", length=30)
     * @Groups({"date_administration"})
     */
    private $type;

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

    /**
     * @return DateTime
     */
    public function getDateDebut(): ?DateTime
    {
        return $this->dateDebut;
    }

    public function setDateDebut(DateTime $dateDebut): void
    {
        $this->dateDebut = $dateDebut;
    }

    /**
     * @return DateTime
     */
    public function getHeureDebut(): ?DateTime
    {
        return $this->heureDebut;
    }

    public function setHeureDebut(DateTime $heureDebut): void
    {
        $this->heureDebut = $heureDebut;
    }

    /**
     * @return DateTime
     */
    public function getDateFin(): ?DateTime
    {
        return $this->dateFin;
    }

    public function setDateFin(DateTime $dateFin): void
    {
        $this->dateFin = $dateFin;
    }

    /**
     * @return DateTime
     */
    public function getHeureFin(): ?DateTime
    {
        return $this->heureFin;
    }

    public function setHeureFin(DateTime $heureFin): void
    {
        $this->heureFin = $heureFin;
    }

    /**
     * @return string
     */
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

    /**
     * @return string
     */
    public function getQui(): ?string
    {
        return $this->qui;
    }

    public function setQui(string $qui): void
    {
        $this->qui = $qui;
    }

    /**
     * @return Departement
     */
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
