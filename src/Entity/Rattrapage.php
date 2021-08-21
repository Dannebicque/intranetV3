<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Rattrapage.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 12:39
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Entity\Traits\UuidTrait;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
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
    use MatiereTrait;

    public const DEMANDE_FAITE = 'f';
    public const DEMANDE_ACCEPTEE = 'a';
    public const DEMANDE_REFUSEE = 'r';
    public const ETATLONG = [
        self::DEMANDE_FAITE => 'demande faite',
        self::DEMANDE_ACCEPTEE => 'demande acceptée',
        self::DEMANDE_REFUSEE => 'demande refusée',
    ];

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="rattrapages")
     * @Groups({"rattrapage_administration"})
     */
    private ?Etudiant $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     * @Groups({"rattrapage_administration"})
     */
    private ?Personnel $personnel;

    /**
     * @ORM\Column(type="date")
     * @Groups({"rattrapage_administration"})
     */
    private ?CarbonInterface $dateEval = null;

    /**
     * @ORM\Column(type="time", nullable=true)
     * @Groups({"rattrapage_administration"})
     */
    private ?CarbonInterface $heureEval;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     * @Groups({"rattrapage_administration"})
     */
    private ?string $duree;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"rattrapage_administration"})
     */
    private ?CarbonInterface $dateRattrapage;

    /**
     * @ORM\Column(type="time", nullable=true)
     * @Groups({"rattrapage_administration"})
     */
    private ?CarbonInterface $heureRattrapage;

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
     * @Groups({"rattrapage_administration"})
     */
    private ?string $libelleMatiere;

    public function getLibelleMatiere(): ?string
    {
        return $this->libelleMatiere;
    }

    public function setLibelleMatiere(?string $libelleMatiere): void
    {
        $this->libelleMatiere = $libelleMatiere;
    }

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

    public function setEtudiant(Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getDateEval(): ?CarbonInterface
    {
        return $this->dateEval;
    }

    public function setDateEval(CarbonInterface $dateEval): self
    {
        $this->dateEval = $dateEval;

        return $this;
    }

    public function getHeureEval(): ?CarbonInterface
    {
        return $this->heureEval;
    }

    public function setHeureEval(?CarbonInterface $heureEval): self
    {
        $this->heureEval = $heureEval;

        return $this;
    }

    public function getDuree(): ?string
    {
        return $this->duree;
    }

    public function setDuree(?string $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

    public function getDateRattrapage(): ?CarbonInterface
    {
        return $this->dateRattrapage;
    }

    public function setDateRattrapage(CarbonInterface $dateRattrapage): self
    {
        $this->dateRattrapage = $dateRattrapage;

        return $this;
    }

    public function getHeureRattrapage(): ?CarbonInterface
    {
        return $this->heureRattrapage;
    }

    public function setHeureRattrapage(?CarbonInterface $heureRattrapage): self
    {
        $this->heureRattrapage = $heureRattrapage;

        return $this;
    }

    public function getSalle(): ?string
    {
        return $this->salle;
    }

    public function setSalle(?string $salle): self
    {
        $this->salle = $salle;

        return $this;
    }

    public function getEtatDemande(): ?string
    {
        return $this->etatDemande;
    }

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
    public function getEtatDemandeLong(): ?string
    {
        return self::ETATLONG[$this->etatDemande] ?? '-erreur code-';
    }

    public function groupes(): Collection|array|null
    {
        return null !== $this->getEtudiant() ? $this->getEtudiant()->getGroupes() : null;
    }

    public function absenceJustifiee(): ?string
    {
        if (null !== $this->getDateEval() && null !== $this->getHeureEval()) {
            return $this->getEtudiant()?->getId() . '_' . $this->getDateEval()->format('Ymd') . '_' . $this->getHeureEval()->format('Hi');
        }

        return null;
    }
}
