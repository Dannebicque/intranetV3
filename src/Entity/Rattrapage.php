<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Rattrapage.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:33
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Entity\Traits\UuidTrait;
use App\Repository\RattrapageRepository;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: RattrapageRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Rattrapage extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;
    use MatiereTrait;

    public final const DEMANDE_FAITE = 'f';
    public final const DEMANDE_ACCEPTEE = 'a';
    public final const DEMANDE_REFUSEE = 'r';
    public final const ETATLONG = [
        self::DEMANDE_FAITE => 'demande faite',
        self::DEMANDE_ACCEPTEE => 'demande acceptée',
        self::DEMANDE_REFUSEE => 'demande refusée',
    ];

    #[Groups(groups: ['rattrapage_administration'])]
    #[ORM\ManyToOne(targetEntity: Personnel::class)]
    private ?Personnel $personnel = null;

    #[Groups(groups: ['rattrapage_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE)]
    private ?CarbonInterface $dateEval = null;

    #[Groups(groups: ['rattrapage_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::TIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $heureEval = null;

    #[Groups(groups: ['rattrapage_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 20, nullable: true)]
    private ?string $duree = null;

    #[Groups(groups: ['rattrapage_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateRattrapage = null;

    #[Groups(groups: ['rattrapage_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::TIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $heureRattrapage = null;

    #[Groups(groups: ['rattrapage_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 10, nullable: true)]
    private ?string $salle = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 1)]
    private string $etatDemande;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class)]
    private ?AnneeUniversitaire $anneeUniversitaire;

    #[Groups(groups: ['rattrapage_administration'])]
    private ?string $libelleMatiere = null;

    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'rattrapages')]
    private ?Semestre $semestre = null;

    public function __construct(#[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'rattrapages')] #[Groups(groups: ['rattrapage_administration'])] private ?\App\Entity\Etudiant $etudiant)
    {
        $this->setUuid(Uuid::uuid4());
        $this->etatDemande = self::DEMANDE_FAITE;
        $this->anneeUniversitaire = $etudiant?->getAnneeUniversitaire();
    }

    public function setUuid(UuidInterface $uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    public function getLibelleMatiere(): ?string
    {
        return $this->libelleMatiere;
    }

    public function setLibelleMatiere(?string $libelleMatiere): void
    {
        $this->libelleMatiere = $libelleMatiere;
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function setEtudiant(?Etudiant $etudiant): self
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
        return (string) $this->getUuid();
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

    #[Groups(groups: ['rattrapage_administration'])]
    public function getEtatDemandeLong(): ?string
    {
        return self::ETATLONG[$this->etatDemande] ?? '-erreur code-';
    }

    public function groupes(): Collection | array | null
    {
        return $this->getEtudiant()?->getGroupes();
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function absenceJustifiee(): ?string
    {
        if (null !== $this->getDateEval() && null !== $this->getHeureEval()) {
            return $this->getEtudiant()?->getId().'_'.$this->getDateEval()->format('Ymd').'_'.$this->getHeureEval()->format('Hi');
        }

        return null;
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
