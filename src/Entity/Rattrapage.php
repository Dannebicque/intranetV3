<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RattrapageRepository")
 */
class Rattrapage extends BaseEntity
{
    public const DEMANDE_FAITE = 'f';
    public const DEMANDE_ACCEPTEE = 'a';
    public const DEMANDE_REFUSEE = 'r';

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="rattrapages")
     */
    private $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere")
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $personnel;

    /**
     * @ORM\Column(type="date")
     */
    private $dateEval;

    /**
     * @ORM\Column(type="time")
     */
    private $heureEval;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $duree;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateRattrapage;

    /**
     * @ORM\Column(type="time", nullable=true)
     */
    private $heureRattrapage;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $salle;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $etatDemande;

    /**
     * @ORM\Column(type="integer")
     */
    private $anneeuniversitaire;

    public function __construct(Etudiant $etudiant)
    {
        $this->etudiant = $etudiant;
        $this->etatDemande = self::DEMANDE_FAITE;
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

    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

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

    public function getDateEval(): ?\DateTimeInterface
    {
        return $this->dateEval;
    }

    public function setDateEval(\DateTimeInterface $dateEval): self
    {
        $this->dateEval = $dateEval;

        return $this;
    }

    public function getHeureEval(): ?\DateTimeInterface
    {
        return $this->heureEval;
    }

    public function setHeureEval(\DateTimeInterface $heureEval): self
    {
        $this->heureEval = $heureEval;

        return $this;
    }

    public function getDuree(): ?string
    {
        return $this->duree;
    }

    public function setDuree(string $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

    public function getDateRattrapage(): ?\DateTimeInterface
    {
        return $this->dateRattrapage;
    }

    public function setDateRattrapage(\DateTimeInterface $dateRattrapage): self
    {
        $this->dateRattrapage = $dateRattrapage;

        return $this;
    }

    public function getHeureRattrapage(): ?\DateTimeInterface
    {
        return $this->heureRattrapage;
    }

    public function setHeureRattrapage(?\DateTimeInterface $heureRattrapage): self
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

    public function getAnneeuniversitaire(): ?int
    {
        return $this->anneeuniversitaire;
    }

    public function setAnneeuniversitaire(int $anneeuniversitaire): self
    {
        $this->anneeuniversitaire = $anneeuniversitaire;

        return $this;
    }
}
