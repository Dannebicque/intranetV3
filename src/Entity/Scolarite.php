<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolariteRepository")
 */
class Scolarite extends BaseEntity
{
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


    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

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

    public function getDecision(): ?string
    {
        return $this->decision;
    }

    public function setDecision(string $decision): self
    {
        $this->decision = $decision;

        return $this;
    }

    public function getProposition(): ?string
    {
        return $this->proposition;
    }

    public function setProposition(string $proposition): self
    {
        $this->proposition = $proposition;

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

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getNbAbsences(): ?int
    {
        return $this->nbAbsences;
    }

    public function setNbAbsences(int $nbAbsences): self
    {
        $this->nbAbsences = $nbAbsences;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }
}
