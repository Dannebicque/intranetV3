<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/AbsenceJustificatif.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 19:11
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use App\Repository\AbsenceJustificatifRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: AbsenceJustificatifRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[Vich\Uploadable]
class AbsenceJustificatif extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

    // todo: remplace par l'enumération ?
    final public const ACCEPTE = 'A';
    final public const REFUSE = 'R';
    final public const DEPOSE = 'D';
    final public const ETATLONG = [
        self::ACCEPTE => 'Accepté, absences justifiées',
        self::DEPOSE => 'Déposé, en attente de validation',
        self::REFUSE => 'Refusé',
    ];

    final public const TAB_ETAT = [
        'label.absence_justficatif.'.self::ACCEPTE => self::ACCEPTE,
        'label.absence_justficatif.'.self::DEPOSE => self::DEPOSE,
        'label.absence_justficatif.'.self::REFUSE => self::REFUSE,
    ];

    #[Groups(groups: ['justificatif_administration'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $dateHeureDebut = null;

    #[Groups(groups: ['justificatif_administration'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $dateHeureFin = null;

    #[Groups(groups: ['justificatif_administration'])]
    #[Assert\NotBlank(message: 'label.absence_justificatif.justificatif.not_blank')]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $motif = '';

    #[Groups(groups: ['justificatif_administration'])]
    #[ORM\Column(type: Types::STRING, length: 1)]
    private string $etat;

    #[Groups(groups: ['justificatif_administration'])]
    #[ORM\ManyToOne(targetEntity: Etudiant::class, fetch: 'EAGER', inversedBy: 'absenceJustificatifs')]
    private ?Etudiant $etudiant = null;

    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $fichierName = '';

    #[Vich\UploadableField(mapping: 'justificatif', fileNameProperty: 'fichierName')]
    private ?File $fichierFile = null;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class)]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    private ?CarbonInterface $dateDebut;
    private ?CarbonInterface $heureDebut;
    private ?CarbonInterface $dateFin;
    private ?CarbonInterface $heureFin;

    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'absenceJustificatifs')]
    private ?Semestre $semestre = null;

    public function __construct()
    {
        $this->dateDebut = Carbon::today();
        $this->dateFin = Carbon::today();
        $this->heureDebut = Carbon::createFromTime(8, 00, 00);
        $this->heureFin = Carbon::createFromTime(18, 30, 00);
        $this->etat = self::DEPOSE;
        $this->setUuid(Uuid::uuid4());
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

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(string $motif): self
    {
        $this->motif = $motif;

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

    public function getFichierFile(): ?File
    {
        return $this->fichierFile;
    }

    /**
     * @throws Exception
     */
    public function setFichierFile(?File $document = null): void
    {
        $this->fichierFile = $document;

        if (null !== $document) {
            $this->setUpdated(Carbon::now());
        }
    }

    public function getFichierName(): ?string
    {
        return $this->fichierName;
    }

    public function setFichierName(?string $fichierName): void
    {
        $this->fichierName = $fichierName;
    }

    #[Groups(groups: ['justificatif_administration'])]
    public function getEtatLong(): string
    {
        return self::ETATLONG[$this->etat];
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

    public function etatLong(): string
    {
        return self::ETATLONG[$this->etat];
    }

    public function __serialize(): array
    {
        return [$this->getId()];
    }

    public function __unserialize(array $data): void
    {
        $this->uuid = $data[0];
    }

    public function prepareData(): void
    {
        $this->setDateDebut($this->getDateHeureDebut());
        $this->setHeureDebut($this->getDateHeureDebut());
        $this->setDateFin($this->getDateHeureFin());
        $this->setHeureFin($this->getDateHeureFin());
    }

    public function getDateHeureDebut(): ?CarbonInterface
    {
        return $this->dateHeureDebut;
    }

    public function setDateHeureDebut(?CarbonInterface $dateHeureDebut): self
    {
        $this->dateHeureDebut = $dateHeureDebut;

        return $this;
    }

    public function getDateHeureFin(): ?CarbonInterface
    {
        return $this->dateHeureFin;
    }

    public function setDateHeureFin(?CarbonInterface $dateHeureFin): self
    {
        $this->dateHeureFin = $dateHeureFin;

        return $this;
    }

    public function transformeData(): void
    {
        $this->setDateHeureDebut(Carbon::createFromFormat('Y-m-d H:i',
            $this->getDateDebut()?->format('Y-m-d').' '.$this->getHeureDebut()?->format('H:i')));

        $this->setDateHeureFin(Carbon::createFromFormat('Y-m-d H:i',
            $this->getDateFin()?->format('Y-m-d').' '.$this->getHeureFin()?->format('H:i')));
    }

    public function getDateDebut(): CarbonInterface|null
    {
        return $this->dateDebut;
    }

    public function setDateDebut(?CarbonInterface $dateDebut): void
    {
        $this->dateDebut = $dateDebut;
    }

    public function getHeureDebut(): CarbonInterface|null
    {
        return $this->heureDebut;
    }

    public function setHeureDebut(mixed $heureDebut): void
    {
        $this->heureDebut = Carbon::instance($heureDebut);
    }

    public function getDateFin(): CarbonInterface|null
    {
        return $this->dateFin;
    }

    public function setDateFin(?CarbonInterface $dateFin): void
    {
        $this->dateFin = $dateFin;
    }

    public function getHeureFin(): CarbonInterface|null
    {
        return $this->heureFin;
    }

    public function setHeureFin(mixed $heureFin): void
    {
        $this->heureFin = Carbon::instance($heureFin);
    }

    public function getPeriodeAbsence(): array
    {
        return [
            'dateHeureDebut' => $this->getDateHeureDebut(),
            'dateHeureFin' => $this->getDateHeureFin(),
        ];
    }

    public function getEtudiantGroupes(): Collection|array|null
    {
        return $this->getEtudiant()?->getGroupes();
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

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
}
