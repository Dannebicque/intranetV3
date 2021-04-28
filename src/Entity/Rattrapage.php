<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Rattrapage.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/04/2021 21:08
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RattrapageRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Rattrapage extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

    public const DEMANDE_FAITE = 'f';
    public const DEMANDE_ACCEPTEE = 'a';
    public const DEMANDE_REFUSEE = 'r';
    public const EtatLong = [
        self::DEMANDE_FAITE => 'demande faite',
        self::DEMANDE_ACCEPTEE => 'demande acceptée',
        self::DEMANDE_REFUSEE => 'demande refusée'
    ];

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="rattrapages")
     * @Groups({"rattrapage_administration"})
     */
    private ?Etudiant $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere")
     * @Groups({"rattrapage_administration"})
     */
    private ?Matiere $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     * @Groups({"rattrapage_administration"})
     */
    private ?Personnel $personnel;

    /**
     * @ORM\Column(type="date")
     * @Groups({"rattrapage_administration"})
     */
    private ?DateTimeInterface $dateEval;

    /**
     * @ORM\Column(type="time")
     * @Groups({"rattrapage_administration"})
     */
    private ?DateTimeInterface $heureEval;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"rattrapage_administration"})
     */
    private ?string $duree;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"rattrapage_administration"})
     */
    private ?DateTimeInterface $dateRattrapage;

    /**
     * @ORM\Column(type="time", nullable=true)
     * @Groups({"rattrapage_administration"})
     */
    private ?DateTimeInterface $heureRattrapage;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     * @Groups({"rattrapage_administration"})
     */
    private ?string $salle;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private string $etatDemande;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire")
     */
    private ?AnneeUniversitaire $anneeUniversitaire;

    /**
     * Rattrapage constructor.
     *
     * @throws Exception
     */
    public function __construct(Etudiant $etudiant)
    {
        $this->setUuid(Uuid::uuid4());
        $this->etudiant = $etudiant;
        $this->etatDemande = self::DEMANDE_FAITE;
        $this->anneeUniversitaire = null !== $etudiant ? $etudiant->getAnneeUniversitaire() : null;
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    /**
     * @param \App\Entity\Etudiant $etudiant
     *
     * @return Rattrapage
     */
    public function setEtudiant(Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    /**
     * @param \App\Entity\Matiere|null $matiere
     *
     * @return Rattrapage
     */
    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @param \App\Entity\Personnel|null $personnel
     *
     * @return Rattrapage
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getDateEval(): ?DateTimeInterface
    {
        return $this->dateEval;
    }

    /**
     * @param \DateTimeInterface $dateEval
     *
     * @return Rattrapage
     */
    public function setDateEval(DateTimeInterface $dateEval): self
    {
        $this->dateEval = $dateEval;

        return $this;
    }

    public function getHeureEval(): ?DateTimeInterface
    {
        return $this->heureEval;
    }

    /**
     * @param \DateTimeInterface $heureEval
     *
     * @return Rattrapage
     */
    public function setHeureEval(DateTimeInterface $heureEval): self
    {
        $this->heureEval = $heureEval;

        return $this;
    }

    public function getDuree(): ?string
    {
        return $this->duree;
    }

    /**
     * @param string $duree
     *
     * @return Rattrapage
     */
    public function setDuree(string $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

    public function getDateRattrapage(): ?DateTimeInterface
    {
        return $this->dateRattrapage;
    }

    /**
     * @param \DateTimeInterface $dateRattrapage
     *
     * @return Rattrapage
     */
    public function setDateRattrapage(DateTimeInterface $dateRattrapage): self
    {
        $this->dateRattrapage = $dateRattrapage;

        return $this;
    }

    public function getHeureRattrapage(): ?DateTimeInterface
    {
        return $this->heureRattrapage;
    }

    /**
     * @param \DateTimeInterface|null $heureRattrapage
     *
     * @return Rattrapage
     */
    public function setHeureRattrapage(?DateTimeInterface $heureRattrapage): self
    {
        $this->heureRattrapage = $heureRattrapage;

        return $this;
    }

    public function getSalle(): ?string
    {
        return $this->salle;
    }

    /**
     * @param string|null $salle
     *
     * @return Rattrapage
     */
    public function setSalle(?string $salle): self
    {
        $this->salle = $salle;

        return $this;
    }

    public function getEtatDemande(): ?string
    {
        return $this->etatDemande;
    }

    /**
     * @param string $etatDemande
     *
     * @return Rattrapage
     */
    public function setEtatDemande(string $etatDemande): self
    {
        $this->etatDemande = $etatDemande;

        return $this;
    }

    public function getUuidString(): string
    {
        return (string)$this->getUuid();
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

    /**
     * @Groups({"rattrapage_administration"})
     */
    public function getEtatDemandeLong(): string
    {
        return self::EtatLong[$this->etatDemande];
    }
}
