<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/ScolaritePromo.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:39
 */

namespace App\Entity;

use App\Repository\ScolaritePromoRepository;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ScolaritePromoRepository::class)]
class ScolaritePromo extends BaseEntity
{
    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'scolaritePromos')]
    private ?Semestre $semestre = null;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class, inversedBy: 'scolaritePromos')]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    #[ORM\Column(type: Types::FLOAT)]
    private float $min = -0.01;

    #[ORM\Column(type: Types::FLOAT)]
    private float $max = -0.01;

    #[ORM\Column(type: Types::INTEGER)]
    private int $nbEtudiants = 0;

    #[ORM\Column(type: Types::FLOAT)]
    private float $moyenne = -0.01;

    /**
     * @var Collection<int, Scolarite>
     */
    #[ORM\OneToMany(mappedBy: 'scolaritePromo', targetEntity: Scolarite::class)]
    private Collection $scolarites;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $datePublication = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $publie = false;

    #[ORM\Column(type: Types::ARRAY)]
    private array $moyenneUes = [];

    #[ORM\Column(type: Types::ARRAY)]
    private array $moyenneMatieres = [];

    public function __construct()
    {
        $this->scolarites = new ArrayCollection();
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

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function getMin(): ?float
    {
        return $this->min;
    }

    public function setMin(float $min): self
    {
        $this->min = $min;

        return $this;
    }

    public function getMax(): ?float
    {
        return $this->max;
    }

    public function setMax(float $max): self
    {
        $this->max = $max;

        return $this;
    }

    public function getNbEtudiants(): ?int
    {
        return $this->nbEtudiants;
    }

    public function setNbEtudiants(int $nbEtudiants): self
    {
        $this->nbEtudiants = $nbEtudiants;

        return $this;
    }

    public function getMoyenne(): ?float
    {
        return $this->moyenne;
    }

    public function setMoyenne(float $moyenne): self
    {
        $this->moyenne = $moyenne;

        return $this;
    }

    /**
     * @return Collection|Scolarite[]
     */
    public function getScolarites(): Collection
    {
        return $this->scolarites;
    }

    public function addScolarite(Scolarite $scolarite): self
    {
        if (!$this->scolarites->contains($scolarite)) {
            $this->scolarites[] = $scolarite;
            $scolarite->setScolaritePromo($this);
        }

        return $this;
    }

    public function removeScolarite(Scolarite $scolarite): self
    {
        if ($this->scolarites->contains($scolarite)) {
            $this->scolarites->removeElement($scolarite);
            // set the owning side to null (unless already changed)
            if ($scolarite->getScolaritePromo() === $this) {
                $scolarite->setScolaritePromo(null);
            }
        }

        return $this;
    }

    public function getDatePublication(): ?CarbonInterface
    {
        return $this->datePublication;
    }

    public function setDatePublication(?CarbonInterface $datePublication): self
    {
        $this->datePublication = $datePublication;

        return $this;
    }

    public function getPublie(): ?bool
    {
        return $this->publie;
    }

    public function setPublie(bool $publie): self
    {
        $this->publie = $publie;

        return $this;
    }

    public function getMoyenneUes(): ?array
    {
        return $this->moyenneUes;
    }

    public function setMoyenneUes(array $moyenneUes): self
    {
        $this->moyenneUes = $moyenneUes;

        return $this;
    }

    public function getMoyenneMatieres(): ?array
    {
        return $this->moyenneMatieres;
    }

    public function setMoyenneMatieres(array $moyenneMatieres): self
    {
        $this->moyenneMatieres = $moyenneMatieres;

        return $this;
    }
}
