<?php

namespace App\Entity;

use App\Repository\PlanningAlternanceRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AlternancePlanningRepository::class)
 */
class AlternancePlanning extends BaseEntity
{

    /**
     * @ORM\ManyToOne(targetEntity=AnneeUniversitaire::class, inversedBy="planningAlternances")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $etat;

    /**
     * @ORM\ManyToOne(targetEntity=Annee::class, inversedBy="alternancePlannings")
     */
    private $annee;

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getAnnee(): ?Annee
    {
        return $this->annee;
    }

    public function setAnnee(?Annee $annee): self
    {
        $this->annee = $annee;

        return $this;
    }
}
