<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolariteRepository")
 */
class Scolarite extends BaseEntity
{
    /**
     * @var \Ramsey\Uuid\UuidInterface
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
     * Scolarite constructor.
     * @throws \Exception
     */
    public function __construct()
    {
        $this->uuid = Uuid::uuid4();
    }

    /**
     * @return \Ramsey\Uuid\UuidInterface
     */
    public function getUuid(): \Ramsey\Uuid\UuidInterface
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
}
