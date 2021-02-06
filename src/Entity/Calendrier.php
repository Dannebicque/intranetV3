<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Calendrier.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/02/2021 23:20

namespace App\Entity;

use Carbon\CarbonImmutable;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CalendrierRepository")
 */
class Calendrier extends BaseEntity
{
    /**
     * @ORM\Column(type="integer")
     * @Groups({"celcat_administration"})
     */
    private $semaineFormation;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"celcat_administration"})
     */
    private $semaineReelle;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"celcat_administration"})
     */
    private $dateLundi;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="calendriers")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CreneauBloque", mappedBy="semaine")
     */
    private $creneauBloques;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\IndisponibilitePersonnel", mappedBy="semaine")
     */
    private $indisponibilitePersonnels;

    public function __construct()
    {
        $this->creneauBloques = new ArrayCollection();
        $this->indisponibilitePersonnels = new ArrayCollection();
    }

    public function getSemaineFormation(): ?int
    {
        return $this->semaineFormation;
    }

    public function setSemaineFormation(int $semaineFormation): self
    {
        $this->semaineFormation = $semaineFormation;

        return $this;
    }

    public function getSemaineReelle(): ?int
    {
        return $this->semaineReelle;
    }

    public function setSemaineReelle(int $semaineReelle): self
    {
        $this->semaineReelle = $semaineReelle;

        return $this;
    }

    public function getDateLundi(): ?CarbonImmutable
    {
        return $this->dateLundi;
    }

    public function setDateLundi(DateTimeInterface $dateLundi): self
    {
        $this->dateLundi = $dateLundi;

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
     * @return Collection|CreneauBloque[]
     */
    public function getCreneauBloques(): Collection
    {
        return $this->creneauBloques;
    }

    public function addCreneauBloque(CreneauBloque $creneauBloque): self
    {
        if (!$this->creneauBloques->contains($creneauBloque)) {
            $this->creneauBloques[] = $creneauBloque;
            $creneauBloque->setSemaine($this);
        }

        return $this;
    }

    public function removeCreneauBloque(CreneauBloque $creneauBloque): self
    {
        if ($this->creneauBloques->contains($creneauBloque)) {
            $this->creneauBloques->removeElement($creneauBloque);
            // set the owning side to null (unless already changed)
            if ($creneauBloque->getSemaine() === $this) {
                $creneauBloque->setSemaine(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|IndisponibilitePersonnel[]
     */
    public function getIndisponibilitePersonnels(): Collection
    {
        return $this->indisponibilitePersonnels;
    }

    public function addIndisponibilitePersonnel(IndisponibilitePersonnel $indisponibilitePersonnel): self
    {
        if (!$this->indisponibilitePersonnels->contains($indisponibilitePersonnel)) {
            $this->indisponibilitePersonnels[] = $indisponibilitePersonnel;
            $indisponibilitePersonnel->setSemaine($this);
        }

        return $this;
    }

    public function removeIndisponibilitePersonnel(IndisponibilitePersonnel $indisponibilitePersonnel): self
    {
        if ($this->indisponibilitePersonnels->contains($indisponibilitePersonnel)) {
            $this->indisponibilitePersonnels->removeElement($indisponibilitePersonnel);
            // set the owning side to null (unless already changed)
            if ($indisponibilitePersonnel->getSemaine() === $this) {
                $indisponibilitePersonnel->setSemaine(null);
            }
        }

        return $this;
    }
}
