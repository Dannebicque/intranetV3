<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PpnRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Ppn extends BaseEntity
{
    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $annee;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Matiere", mappedBy="ppn")
     */
    private $matieres;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Diplome", inversedBy="ppns")
     */
    private $diplome;

    public function __construct()
    {
        $this->annee = date('Y');
        $this->matieres = new ArrayCollection();
    }


    /**
     * @return string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param string $libelle
     */
    public function setLibelle(string $libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return int
     */
    public function getAnnee(): int
    {
        return $this->annee;
    }

    /**
     * @param int $annee
     */
    public function setAnnee(int $annee): void
    {
        $this->annee = $annee;
    }



    /**
     * @return Collection|Matiere[]
     */
    public function getMatieres(): Collection
    {
        return $this->matieres;
    }

    /**
     * @param Matiere $matiere
     *
     * @return Ppn
     */
    public function addMatiere(Matiere $matiere): self
    {
        if (!$this->matieres->contains($matiere)) {
            $this->matieres[] = $matiere;
            $matiere->setPpn($this);
        }

        return $this;
    }

    /**
     * @param Matiere $matiere
     *
     * @return Ppn
     */
    public function removeMatiere(Matiere $matiere): self
    {
        if ($this->matieres->contains($matiere)) {
            $this->matieres->removeElement($matiere);
            // set the owning side to null (unless already changed)
            if ($matiere->getPpn() === $this) {
                $matiere->setPpn(null);
            }
        }

        return $this;
    }

    /**
     * @return Diplome|null
     */
    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    /**
     * @param Diplome|null $diplome
     *
     * @return Ppn
     */
    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }
}
