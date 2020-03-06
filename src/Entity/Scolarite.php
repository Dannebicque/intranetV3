<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Scolarite.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolariteRepository")
 */
class Scolarite extends BaseEntity
{
    /**
     * @var UuidInterface
     *
     * @ORM\Column(type="uuid_binary", unique=true)
     */
    protected $uuid;

    /**
     * @ORM\Column(type="integer")
     */
    private $ordre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private $semestre;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $decision = 'E.C';

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $proposition;

    /**
     * @ORM\Column(type="float")
     */
    private $moyenne = 0;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="scolarites")
     */
    private $etudiant;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbAbsences = 0;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $commentaire;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ScolariteMoyenneUe", mappedBy="scolarite")
     */
    private $scolariteMoyenneUes;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="scolarites")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ScolariteMoyenneMatiere", mappedBy="scolarite")
     */
    private $scolariteMoyenneMatieres;

    /**
     * Scolarite constructor.
     * @throws Exception
     */
    public function __construct()
    {
        $this->uuid = Uuid::uuid4();
        $this->scolariteMoyenneUes = new ArrayCollection();
        $this->scolariteMoyenneMatieres = new ArrayCollection();
    }

    /**
     * @return UuidInterface
     */
    public function getUuid(): UuidInterface
    {
        return $this->uuid;
    }


    /**
     * @return int|null
     */
    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    /**
     * @param int $ordre
     *
     * @return Scolarite
     */
    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    /**
     * @return Semestre|null
     */
    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    /**
     * @param Semestre|null $semestre
     *
     * @return Scolarite
     */
    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getDecision(): ?string
    {
        return $this->decision;
    }

    /**
     * @param string $decision
     *
     * @return Scolarite
     */
    public function setDecision(string $decision): self
    {
        $this->decision = $decision;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getProposition(): ?string
    {
        return $this->proposition;
    }

    /**
     * @param string $proposition
     *
     * @return Scolarite
     */
    public function setProposition(string $proposition): self
    {
        $this->proposition = $proposition;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getMoyenne(): ?float
    {
        return $this->moyenne;
    }

    /**
     * @param float $moyenne
     *
     * @return Scolarite
     */
    public function setMoyenne(float $moyenne): self
    {
        $this->moyenne = $moyenne;

        return $this;
    }

    /**
     * @return Etudiant|null
     */
    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    /**
     * @param Etudiant|null $etudiant
     *
     * @return Scolarite
     */
    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getNbAbsences(): ?int
    {
        return $this->nbAbsences;
    }

    /**
     * @param int $nbAbsences
     *
     * @return Scolarite
     */
    public function setNbAbsences(int $nbAbsences): self
    {
        $this->nbAbsences = $nbAbsences;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    /**
     * @param string $commentaire
     *
     * @return Scolarite
     */
    public function setCommentaire(string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    /**
     * @return Collection|ScolariteMoyenneUe[]
     */
    public function getScolariteMoyenneUes(): Collection
    {
        return $this->scolariteMoyenneUes;
    }

    public function addScolariteMoyenneUe(ScolariteMoyenneUe $scolariteMoyenneUe): self
    {
        if (!$this->scolariteMoyenneUes->contains($scolariteMoyenneUe)) {
            $this->scolariteMoyenneUes[] = $scolariteMoyenneUe;
            $scolariteMoyenneUe->setScolarite($this);
        }

        return $this;
    }

    public function removeScolariteMoyenneUe(ScolariteMoyenneUe $scolariteMoyenneUe): self
    {
        if ($this->scolariteMoyenneUes->contains($scolariteMoyenneUe)) {
            $this->scolariteMoyenneUes->removeElement($scolariteMoyenneUe);
            // set the owning side to null (unless already changed)
            if ($scolariteMoyenneUe->getScolarite() === $this) {
                $scolariteMoyenneUe->setScolarite(null);
            }
        }

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

    /**
     * @return Collection|ScolariteMoyenneMatiere[]
     */
    public function getScolariteMoyenneMatieres(): Collection
    {
        return $this->scolariteMoyenneMatieres;
    }

    public function addScolariteMoyenneMatiere(ScolariteMoyenneMatiere $scolariteMoyenneMatiere): self
    {
        if (!$this->scolariteMoyenneMatieres->contains($scolariteMoyenneMatiere)) {
            $this->scolariteMoyenneMatieres[] = $scolariteMoyenneMatiere;
            $scolariteMoyenneMatiere->setScolarite($this);
        }

        return $this;
    }

    public function removeScolariteMoyenneMatiere(ScolariteMoyenneMatiere $scolariteMoyenneMatiere): self
    {
        if ($this->scolariteMoyenneMatieres->contains($scolariteMoyenneMatiere)) {
            $this->scolariteMoyenneMatieres->removeElement($scolariteMoyenneMatiere);
            // set the owning side to null (unless already changed)
            if ($scolariteMoyenneMatiere->getScolarite() === $this) {
                $scolariteMoyenneMatiere->setScolarite(null);
            }
        }

        return $this;
    }

    public function setUuid($uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }
}
