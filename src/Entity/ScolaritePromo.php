<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ScolaritePromo.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/01/2021 11:38

namespace App\Entity;

use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolaritePromoRepository")
 */
class ScolaritePromo
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="scolaritePromos")
     */
    private $semestre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="scolaritePromos")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\Column(type="float")
     */
    private $min = -0.01;

    /**
     * @ORM\Column(type="float")
     */
    private $max = -0.01;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbEtudiants = 0;

    /**
     * @ORM\Column(type="float")
     */
    private $moyenne = -0.01;

    /**
     * @ORM\OneToMany(targetEntity=Scolarite::class, mappedBy="scolaritePromo")
     */
    private $scolarites;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $datePublication;

    /**
     * @ORM\Column(type="boolean")
     */
    private $publie = false;

    /**
     * @ORM\Column(type="array")
     */
    private $moyenneUes = [];

    /**
     * @ORM\Column(type="array")
     */
    private $moyenneMatieres = [];

    public function __construct()
    {
        $this->scolarites = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDatePublication(): ?DateTimeInterface
    {
        return $this->datePublication;
    }

    public function setDatePublication(?DateTimeInterface $datePublication): self
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
