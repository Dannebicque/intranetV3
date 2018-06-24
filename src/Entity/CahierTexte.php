<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CahierTexteRepository")
 */
class CahierTexte extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=150)
     */
    private $libelle;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateRetour;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="cahierTextes")
     */
    private $personnel;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Fichier", inversedBy="cahierTextes")
     */
    private $fichiers;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="cahierTextes")
     */
    private $semestre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere")
     */
    private $matiere;

    public function __construct()
    {
        $this->fichiers = new ArrayCollection();
    }

    /**
     * @return null|string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param string $libelle
     *
     * @return CahierTexte
     */
    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param string $description
     *
     * @return CahierTexte
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getDateRetour(): ?\DateTimeInterface
    {
        return $this->dateRetour;
    }

    /**
     * @param \DateTimeInterface $dateRetour
     *
     * @return CahierTexte
     */
    public function setDateRetour(\DateTimeInterface $dateRetour): self
    {
        $this->dateRetour = $dateRetour;

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
     * @return CahierTexte
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return Collection|Fichier[]
     */
    public function getFichiers(): Collection
    {
        return $this->fichiers;
    }

    /**
     * @param Fichier $fichier
     *
     * @return CahierTexte
     */
    public function addFichier(Fichier $fichier): self
    {
        if (!$this->fichiers->contains($fichier)) {
            $this->fichiers[] = $fichier;
        }

        return $this;
    }

    /**
     * @param Fichier $fichier
     *
     * @return CahierTexte
     */
    public function removeFichier(Fichier $fichier): self
    {
        if ($this->fichiers->contains($fichier)) {
            $this->fichiers->removeElement($fichier);
        }

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
     * @return CahierTexte
     */
    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

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
     * @return CahierTexte
     */
    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }
}
