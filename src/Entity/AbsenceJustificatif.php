<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/AbsenceJustificatif.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:33
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Serializable;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AbsenceJustificatifRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks()
 */
class AbsenceJustificatif extends BaseEntity implements Serializable
{
    use UuidTrait;
    use LifeCycleTrait;

    public const ACCEPTE = 'A';
    public const REFUSE = 'R';
    public const DEPOSE = 'D';

    public const ETATLONG = [
        self::ACCEPTE => 'Accepté, absences justifiées',
        self::REFUSE => 'Refusé',
        self::DEPOSE => 'Déposé, en attente de validation',
    ];

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"justificatif_administration"})
     */
    private ?CarbonInterface $dateHeureDebut;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"justificatif_administration"})
     */
    private ?CarbonInterface $dateHeureFin;

    /**
     * @ORM\Column(type="text")
     * @Groups({"justificatif_administration"})
     */
    private ?string $motif;

    /**
     * @ORM\Column(type="string", length=1)
     * @Groups({"justificatif_administration"})
     */
    private string $etat;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="absenceJustificatifs", fetch="EAGER")
     * @Groups({"justificatif_administration"})
     */
    private ?Etudiant $etudiant;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private ?string $fichierName = '';

    /**
     * @Vich\UploadableField(mapping="justificatif", fileNameProperty="fichierName")
     */
    private $fichierFile;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire")
     */
    private ?AnneeUniversitaire $anneeUniversitaire;

    private ?CarbonInterface $dateDebut;
    private ?CarbonInterface $heureDebut;
    private ?CarbonInterface $dateFin;
    private ?CarbonInterface $heureFin;

    /**
     * @ORM\ManyToOne(targetEntity=Semestre::class, inversedBy="absenceJustificatifs")
     */
    private ?Semestre $semestre;

    /**
     * AbsenceJustificatif constructor.
     *
     * @throws Exception
     */
    public function __construct(Etudiant $etudiant)
    {
        $this->dateDebut = Carbon::today();
        $this->dateFin = Carbon::today();
        $this->heureDebut = Carbon::createFromTime(8, 00, 00);
        $this->heureFin = Carbon::createFromTime(18, 30, 00);
        $this->etat = self::DEPOSE;
        $this->setUuid(Uuid::uuid4());
        $this->anneeUniversitaire = $etudiant->getAnneeUniversitaire();
        $this->setEtudiant($etudiant);
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function getDateHeureDebut(): ?CarbonInterface
    {
        return $this->dateHeureDebut;
    }

    public function setDateHeureDebut(CarbonInterface $dateHeureDebut): self
    {
        $this->dateHeureDebut = $dateHeureDebut;

        return $this;
    }

    public function getDateHeureFin(): ?CarbonInterface
    {
        return $this->dateHeureFin;
    }

    public function setDateHeureFin(CarbonInterface $dateHeureFin): self
    {
        $this->dateHeureFin = $dateHeureFin;

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

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): self
    {
        $this->etat = $etat;

        return $this;
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

    public function getFichierFile(): ?File
    {
        return $this->fichierFile;
    }

    public function getFichierName(): ?string
    {
        return $this->fichierName;
    }

    public function setFichierName(?string $fichierName): void
    {
        $this->fichierName = $fichierName;
    }

    /**
     * @Groups({"justificatif_administration"})
     */
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

    public function setUuid($uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    public function etatLong(): string
    {
        return self::ETATLONG[$this->etat];
    }

    public function serialize(): ?string
    {
        return serialize($this->getId());
    }

    public function unserialize($data)
    {
        $this->uuid = unserialize($data, ['allowed_classes' => false]);
    }

    public function getDateDebut(): CarbonInterface|null
    {
        return $this->dateDebut;
    }

    public function getHeureDebut(): CarbonInterface|null
    {
        return $this->heureDebut;
    }

    public function getDateFin(): CarbonInterface|null
    {
        return $this->dateFin;
    }

    public function getHeureFin(): CarbonInterface|null
    {
        return $this->heureFin;
    }

    public function setDateDebut($dateDebut): void
    {
        $this->dateDebut = $dateDebut;
    }

    public function setHeureDebut($heureDebut): void
    {
        $this->heureDebut = Carbon::instance($heureDebut);
    }

    public function setDateFin($dateFin): void
    {
        $this->dateFin = $dateFin;
    }

    public function setHeureFin($heureFin): void
    {
        $this->heureFin = Carbon::instance($heureFin);
    }

    public function prepareData(): void
    {
        $this->setDateDebut($this->getDateHeureDebut());
        $this->setHeureDebut($this->getDateHeureDebut());
        $this->setDateFin($this->getDateHeureFin());
        $this->setHeureFin($this->getDateHeureFin());
    }

    public function transformeData(): void
    {
        $this->setDateHeureDebut(Carbon::createFromFormat('Y-m-d H:i',
            $this->getDateDebut()->format('Y-m-d') . ' ' . $this->getHeureDebut()->format('H:i')));
        $this->setDateHeureFin(Carbon::createFromFormat('Y-m-d H:i',
            $this->getDateFin()->format('Y-m-d') . ' ' . $this->getHeureFin()->format('H:i')));
    }

    public function getPeriodeAbsence()
    {
        return [
            'dateHeureDebut' => $this->getDateHeureDebut(),
            'dateHeureFin' => $this->getDateHeureFin(),
        ];
    }

    public function getEtudiantGroupes()
    {
        if (null !== $this->getEtudiant()) {
            return $this->getEtudiant()->getGroupes();
        }

        return null;
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
