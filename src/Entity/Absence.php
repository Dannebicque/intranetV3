<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Absence.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:18
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Entity\Traits\UuidTrait;
use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Serializable;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AbsenceRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Absence extends BaseEntity implements Serializable
{
    use UuidTrait;
    use LifeCycleTrait;
    use MatiereTrait;

    public const STATUS_COLORS = [
        self::ABSENCE_JUSTIFIE => 'success',
        self::ABSENCE_INJUSTIFIEE => 'danger',
        self::ABSENCE_EN_ATTENTE => 'warning',
    ];

    public const ABSENCE_JUSTIFIE = 'justifie';
    public const ABSENCE_INJUSTIFIEE = 'injustifie';
    public const ABSENCE_EN_ATTENTE = '-';

    /**
     * @ORM\Column(name="dateHeure", type="datetime")
     * @Groups({"absences_administration"})
     */
    private ?CarbonInterface $dateHeure;

    /**
     * @ORM\Column(name="duree", type="time")
     * @Groups({"absences_administration"})
     */
    private ?CarbonInterface $duree;

    /**
     * @ORM\Column(name="justifie", type="boolean")
     * @Groups({"absences_administration"})
     */
    private bool $justifie = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     * @MaxDepth(2)
     * @Groups({"absences_administration"})
     */
    private Personnel $personnel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="absences")
     * @MaxDepth(2)
     * @Groups({"absences_administration"})
     */
    private Etudiant $etudiant;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateJustifie;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire")
     */
    private ?AnneeUniversitaire $anneeUniversitaire;

    /**
     * @ORM\ManyToOne(targetEntity=Semestre::class, inversedBy="absences")
     */
    private ?Semestre $semestre;

    /**
     * Absence constructor.
     *
     * @throws Exception
     */
    public function __construct()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public static function getIconStatus(string $status): string
    {
        return isset(self::STATUS_COLORS[$status])
            ? sprintf('<i class="fas fa-circle text-%s me-1"></i> %s', self::STATUS_COLORS[$status], $status)
            : $status;
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function getDateHeure(): ?CarbonInterface
    {
        return $this->dateHeure;
    }

    public function setDateHeure(CarbonInterface $dateHeure): void
    {
        $this->dateHeure = $dateHeure;
    }

    public function getDuree(): ?CarbonInterface
    {
        return $this->duree;
    }

    public function setDuree(CarbonInterface $duree): void
    {
        $this->duree = $duree;
    }

    public function isJustifie(): bool
    {
        return $this->justifie;
    }

    public function setJustifie(bool $justifie): void
    {
        $this->justifie = $justifie;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel($personnel): void
    {
        $this->personnel = $personnel;
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant($etudiant): void
    {
        $this->etudiant = $etudiant;
    }

    public function getDateJustifie(): ?CarbonInterface
    {
        return $this->dateJustifie;
    }

    public function setDateJustifie(CarbonInterface $dateJustifie): self
    {
        $this->dateJustifie = $dateJustifie;

        return $this;
    }

    public function getJson(): array
    {
        return [
            'id' => $this->getId(),
            'justifie' => $this->isJustifie(),
            'uuidString' => $this->getUuidString(),
            'date' => null !== $this->getDateHeure() ? $this->getDateHeure()->format('d/m/Y') : '-',
            'heure' => null !== $this->getDateHeure() ? $this->getDateHeure()->format('H:i') : '-',
            'personnel' => null !== $this->getPersonnel() ? $this->getPersonnel()->getDisplay() : '-',
            'codeMatiere' => null !== $this->getIdMatiere(),
            'typeIdMatiere' => null !== $this->getTypeIdMatiere(),
        ];
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

    public function setUuid($uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    public function getJustifie(): ?bool
    {
        return $this->justifie;
    }

    /**
     * {@inheritDoc}
     */
    public function serialize()
    {
        //todo: a ajouter ou retirer ?
    }

    /**
     * {@inheritDoc}
     */
    public function unserialize($data)
    {
        //todo: a ajouter ou retirer ?
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
