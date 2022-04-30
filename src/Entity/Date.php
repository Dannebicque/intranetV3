<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Date.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2021 13:44
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\TypeDestinataireTrait;
use App\Repository\DateRepository;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DateRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Date extends BaseEntity
{
    use LifeCycleTrait;
    use TypeDestinataireTrait;

    public final const TYPE_STAGE = 'type.stage';
    public final const TYPE_SOUTENANCE = 'type.soutenance';
    public final const TYPE_PROJET = 'type.projet';
    public final const TYPE_AUTRE = 'type.autre';
    public final const TYPE_COMMISSION = 'type.commission';
    public final const TYPE_REUNION = 'type.reunion';
    public final const TYPE_RENTREE = 'type.rentree';
    public final const TYPE_VACANCES = 'type.vacances';
    public final const COULEUR_BADGE = [
        self::TYPE_STAGE => 'bg-primary',
        self::TYPE_SOUTENANCE => 'bg-danger',
        self::TYPE_PROJET => 'bg-purple',
        self::TYPE_AUTRE => 'bg-pink',
        self::TYPE_COMMISSION => 'bg-warning',
        self::TYPE_REUNION => 'bg-yellow',
        self::TYPE_RENTREE => 'bg-success',
        self::TYPE_VACANCES => 'bg-info',
    ];

    #[Groups(groups: ['date_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[Groups(groups: ['date_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::TEXT, nullable: true)]
    private ?string $texte = null;

    #[Groups(groups: ['date_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateDebut = null;

    #[Groups(groups: ['date_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::TIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $heureDebut = null;

    #[Groups(groups: ['date_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateFin = null;

    #[Groups(groups: ['date_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::TIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $heureFin = null;

    #[Groups(groups: ['date_administration'])]
    #[ORM\Column(name: 'lieu', type: \Doctrine\DBAL\Types\Types::STRING, length: 150)]
    private ?string $lieu = null;

    #[Groups(groups: ['date_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BOOLEAN)]
    private bool $allday = false;

    /**
     * @deprecated
     */
    #[Groups(groups: ['date_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 1)]
    private string $qui = '-';

    #[ORM\ManyToOne(targetEntity: Departement::class)]
    private Departement $departement;

    #[Groups(groups: ['date_administration'])]
    #[ORM\ManyToMany(targetEntity: Semestre::class, inversedBy: 'dates')]
    private Collection $semestres;

    #[Groups(groups: ['date_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 30)]
    private ?string $type = null;

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

    public function getAllday(): ?bool
    {
        return $this->allday;
    }

    public function setAllday(bool $allday): void
    {
        $this->allday = $allday;
    }

    /** @deprecated */
    public function getQui(): ?string
    {
        return $this->qui;
    }

    /** @deprecated */
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

    public function getCouleurBadge(): string
    {
        return self::COULEUR_BADGE[$this->type];
    }
}
