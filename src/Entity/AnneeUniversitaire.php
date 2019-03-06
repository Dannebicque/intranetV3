<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AnneeUniversitaireRepository")
 */
class AnneeUniversitaire
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30)
     * @Groups({"annee_universitaire"})
     */
    private $libelle;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"annee_universitaire"})
     */
    private $annee;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"annee_universitaire"})
     */
    private $commentaire;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Formation", mappedBy="anneeUniversitairePrepare")
     */
    private $formations;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Calendrier", mappedBy="anneeUniversitaire")
     */
    private $calendriers;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CreneauCours", mappedBy="anneeUniversitaire")
     */
    private $creneauCours;

    public function __construct()
    {
        $this->setAnnee(date('Y'));
        $this->formations = new ArrayCollection();
        $this->calendriers = new ArrayCollection();
        $this->creneauCours = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

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

    /**
     * @return Collection|Formation[]
     */
    public function getFormations(): Collection
    {
        return $this->formations;
    }

    public function addFormation(Formation $formation): self
    {
        if (!$this->formations->contains($formation)) {
            $this->formations[] = $formation;
            $formation->setAnneeUniversitairePrepare($this);
        }

        return $this;
    }

    public function removeFormation(Formation $formation): self
    {
        if ($this->formations->contains($formation)) {
            $this->formations->removeElement($formation);
            // set the owning side to null (unless already changed)
            if ($formation->getAnneeUniversitairePrepare() === $this) {
                $formation->setAnneeUniversitairePrepare(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Calendrier[]
     */
    public function getCalendriers(): Collection
    {
        return $this->calendriers;
    }

    public function addCalendrier(Calendrier $calendrier): self
    {
        if (!$this->calendriers->contains($calendrier)) {
            $this->calendriers[] = $calendrier;
            $calendrier->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeCalendrier(Calendrier $calendrier): self
    {
        if ($this->calendriers->contains($calendrier)) {
            $this->calendriers->removeElement($calendrier);
            // set the owning side to null (unless already changed)
            if ($calendrier->getAnneeUniversitaire() === $this) {
                $calendrier->setAnneeUniversitaire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|CreneauCours[]
     */
    public function getCreneauCours(): Collection
    {
        return $this->creneauCours;
    }

    public function addCreneauCour(CreneauCours $creneauCour): self
    {
        if (!$this->creneauCours->contains($creneauCour)) {
            $this->creneauCours[] = $creneauCour;
            $creneauCour->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeCreneauCour(CreneauCours $creneauCour): self
    {
        if ($this->creneauCours->contains($creneauCour)) {
            $this->creneauCours->removeElement($creneauCour);
            // set the owning side to null (unless already changed)
            if ($creneauCour->getAnneeUniversitaire() === $this) {
                $creneauCour->setAnneeUniversitaire(null);
            }
        }

        return $this;
    }
}
