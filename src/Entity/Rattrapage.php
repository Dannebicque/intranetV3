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

    /**
     * Rattrapage constructor.
     *
     * @param Etudiant $etudiant
     */
    public function __construct(Etudiant $etudiant, $annee)
    {
        $this->etudiant = $etudiant;
        $this->etatDemande = self::DEMANDE_FAITE;
        $this->anneeuniversitaire = $annee;
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
     * @return Rattrapage
     */
    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    /**
     * @return Matiere|null
     */
    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    /**
     * @param Matiere|null $matiere
     *
     * @return Rattrapage
     */
    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    /**
     * @return Personnel|null
     */
    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @param Personnel|null $personnel
     *
     * @return Rattrapage
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getDateEval(): ?\DateTimeInterface
    {
        return $this->dateEval;
    }

    /**
     * @param \DateTimeInterface $dateEval
     *
     * @return Rattrapage
     */
    public function setDateEval(\DateTimeInterface $dateEval): self
    {
        $this->dateEval = $dateEval;

        return $this;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getHeureEval(): ?\DateTimeInterface
    {
        return $this->heureEval;
    }

    /**
     * @param \DateTimeInterface $heureEval
     *
     * @return Rattrapage
     */
    public function setHeureEval(\DateTimeInterface $heureEval): self
    {
        $this->heureEval = $heureEval;

        return $this;
    }

    /**
     * @return null|string
     */
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

    /**
     * @return \DateTimeInterface|null
     */
    public function getDateRattrapage(): ?\DateTimeInterface
    {
        return $this->dateRattrapage;
    }

    /**
     * @param \DateTimeInterface $dateRattrapage
     *
     * @return Rattrapage
     */
    public function setDateRattrapage(\DateTimeInterface $dateRattrapage): self
    {
        $this->dateRattrapage = $dateRattrapage;

        return $this;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getHeureRattrapage(): ?\DateTimeInterface
    {
        return $this->heureRattrapage;
    }

    /**
     * @param \DateTimeInterface|null $heureRattrapage
     *
     * @return Rattrapage
     */
    public function setHeureRattrapage(?\DateTimeInterface $heureRattrapage): self
    {
        $this->heureRattrapage = $heureRattrapage;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getSalle(): ?string
    {
        return $this->salle;
    }

    /**
     * @param null|string $salle
     *
     * @return Rattrapage
     */
    public function setSalle(?string $salle): self
    {
        $this->salle = $salle;

        return $this;
    }

    /**
     * @return null|string
     */
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

    /**
     * @return int|null
     */
    public function getAnneeuniversitaire(): ?int
    {
        return $this->anneeuniversitaire;
    }

    /**
     * @param int $anneeuniversitaire
     *
     * @return Rattrapage
     */
    public function setAnneeuniversitaire(int $anneeuniversitaire): self
    {
        $this->anneeuniversitaire = $anneeuniversitaire;

        return $this;
    }
}
