<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Matiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MatiereRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Matiere extends AbstractMatiere
{
    public const SOURCE = 'matiere';

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"matiere_administration"})
     */
    private bool $pac = false;

    /**
     * @ORM\Column(type="float")
     * @Groups({"matiere_administration"})
     */
    private float $nbEcts = 1;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private ?string $objectifsModule;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private ?string $competencesVisees;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $contenu;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private ?string $preRequis;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private ?string $modalites;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private ?string $prolongements;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private ?string $motsCles;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Ue", inversedBy="matieres", fetch="EAGER")
     */
    private ?Ue $ue;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Ppn", inversedBy="matieres")
     */
    private ?Ppn $ppn;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Parcour", inversedBy="matieres")
     */
    private ?Parcour $parcours;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Previsionnel", mappedBy="matiere")
     */
    private $previsionnels;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Absence", mappedBy="matiere")
     */
    private $absences;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Evaluation", mappedBy="matiere")
     */
    private $evaluations;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere", inversedBy="matiereEnfants")
     */
    private $matiereParent;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Matiere", mappedBy="matiereParent")
     */
    private $matiereEnfants;

    /**
     * @ORM\ManyToMany(targetEntity=CovidAttestationEtudiant::class, mappedBy="matieres")
     */
    private $covidAttestationEtudiants;

    public function __construct()
    {
        $this->previsionnels = new ArrayCollection();
        $this->absences = new ArrayCollection();
        $this->evaluations = new ArrayCollection();
        $this->matiereEnfants = new ArrayCollection();
        $this->covidAttestationEtudiants = new ArrayCollection();
    }

    public function isPac(): bool
    {
        return $this->pac;
    }

    public function setPac(bool $pac): void
    {
        $this->pac = $pac;
    }

    public function getNbEcts(): float
    {
        return $this->nbEcts;
    }

    public function setNbEcts(float $nbEcts): void
    {
        $this->nbEcts = $nbEcts;
    }

    public function getObjectifsModule(): ?string
    {
        return $this->objectifsModule;
    }

    public function setObjectifsModule(?string $objectifsModule): void
    {
        $this->objectifsModule = $objectifsModule;
    }

    public function getCompetencesVisees(): ?string
    {
        return $this->competencesVisees;
    }

    public function setCompetencesVisees(?string $competencesVisees): void
    {
        $this->competencesVisees = $competencesVisees;
    }

    public function getContenu(): ?string
    {
        return $this->contenu;
    }

    public function setContenu(?string $contenu): void
    {
        $this->contenu = $contenu;
    }

    public function getPreRequis(): ?string
    {
        return $this->preRequis;
    }

    public function setPreRequis(?string $preRequis): void
    {
        $this->preRequis = $preRequis;
    }

    public function getModalites(): ?string
    {
        return $this->modalites;
    }

    public function setModalites(?string $modalites): void
    {
        $this->modalites = $modalites;
    }

    public function getProlongements(): ?string
    {
        return $this->prolongements;
    }

    public function setProlongements(?string $prolongements): void
    {
        $this->prolongements = $prolongements;
    }

    public function getMotsCles(): ?string
    {
        return $this->motsCles;
    }

    public function setMotsCles(?string $motsCles): void
    {
        $this->motsCles = $motsCles;
    }

    public function getSemestre(): ?Semestre
    {
        if (null !== $this->getUe() && null !== $this->getUe()->getSemestre()) {
            return $this->getUe()->getSemestre();
        }

        return null;
    }

    public function getUe(): ?Ue
    {
        return $this->ue;
    }

    public function setUe(?Ue $ue): self
    {
        $this->ue = $ue;

        return $this;
    }

    public function getPpn(): ?Ppn
    {
        return $this->ppn;
    }

    public function setPpn(?Ppn $ppn): self
    {
        $this->ppn = $ppn;

        return $this;
    }

    public function getParcours(): ?Parcour
    {
        return $this->parcours;
    }

    public function setParcours(?Parcour $parcours): self
    {
        $this->parcours = $parcours;

        return $this;
    }

    /**
     * @return Collection|Previsionnel[]
     */
    public function getPrevisionnels(): Collection
    {
        return $this->previsionnels;
    }

    public function addPrevisionnel(Previsionnel $previsionnel): self
    {
        if (!$this->previsionnels->contains($previsionnel)) {
            $this->previsionnels[] = $previsionnel;
            $previsionnel->setMatiere($this);
        }

        return $this;
    }

    public function removePrevisionnel(Previsionnel $previsionnel): self
    {
        if ($this->previsionnels->contains($previsionnel)) {
            $this->previsionnels->removeElement($previsionnel);
            // set the owning side to null (unless already changed)
            if ($previsionnel->getMatiere() === $this) {
                $previsionnel->setMatiere(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Absence[]
     */
    public function getAbsences(): Collection
    {
        return $this->absences;
    }

    public function addAbsence(Absence $absence): self
    {
        if (!$this->absences->contains($absence)) {
            $this->absences[] = $absence;
            $absence->setMatiere($this);
        }

        return $this;
    }

    public function removeAbsence(Absence $absence): self
    {
        if ($this->absences->contains($absence)) {
            $this->absences->removeElement($absence);
            // set the owning side to null (unless already changed)
            if ($absence->getMatiere() === $this) {
                $absence->setMatiere(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Evaluation[]
     */
    public function getEvaluations(): Collection
    {
        return $this->evaluations;
    }

    public function addEvaluation(Evaluation $evaluation): self
    {
        if (!$this->evaluations->contains($evaluation)) {
            $this->evaluations[] = $evaluation;
            $evaluation->setMatiere($this);
        }

        return $this;
    }

    public function removeEvaluation(Evaluation $evaluation): self
    {
        if ($this->evaluations->contains($evaluation)) {
            $this->evaluations->removeElement($evaluation);
            // set the owning side to null (unless already changed)
            if ($evaluation->getMatiere() === $this) {
                $evaluation->setMatiere(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Matiere[]
     */
    public function getEnfants(): Collection
    {
        return $this->matiereEnfants;
    }

    public function addEnfant(self $enfant): self
    {
        if (!$this->matiereEnfants->contains($enfant)) {
            $this->matiereEnfants[] = $enfant;
            $enfant->setMatiereParent($this);
        }

        return $this;
    }

    public function removeEnfant(self $enfant): self
    {
        if ($this->matiereEnfants->contains($enfant)) {
            $this->matiereEnfants->removeElement($enfant);
            // set the owning side to null (unless already changed)
            if ($enfant->getMatiereParent() === $this) {
                $enfant->setMatiereParent(null);
            }
        }

        return $this;
    }

    public function getMatiereParent(): ?self
    {
        return $this->matiereParent;
    }

    public function setMatiereParent(?self $matiereParent): self
    {
        $this->matiereParent = $matiereParent;

        return $this;
    }

    public function getJson(): array
    {
        $t = [];
        $t['id'] = $this->getId();
        $t['libelle'] = $this->getLibelle();
        $t['display'] = $this->getUe() ? $this->getUe()->getLibelle() : '-';
        $t['cmFormation'] = $this->getCmFormation();
        $t['tdFormation'] = $this->getTdFormation();
        $t['tpFormation'] = $this->getTpFormation();
        $t['ptutFormation'] = null;
        $t['cmPpn'] = $this->getCmPpn();
        $t['tdPpn'] = $this->getTdPpn();
        $t['tpPpn'] = $this->getTpPpn();
        $t['ptutPpn'] = null;

        return $t;
    }

    public function getPac(): bool
    {
        return $this->pac;
    }

    /**
     * @return Collection|Matiere[]
     */
    public function getMatiereEnfants(): Collection
    {
        return $this->matiereEnfants;
    }

    public function addMatiereEnfant(self $matiereEnfant): self
    {
        if (!$this->matiereEnfants->contains($matiereEnfant)) {
            $this->matiereEnfants[] = $matiereEnfant;
            $matiereEnfant->setMatiereParent($this);
        }

        return $this;
    }

    public function removeMatiereEnfant(self $matiereEnfant): self
    {
        if ($this->matiereEnfants->contains($matiereEnfant)) {
            $this->matiereEnfants->removeElement($matiereEnfant);
            // set the owning side to null (unless already changed)
            if ($matiereEnfant->getMatiereParent() === $this) {
                $matiereEnfant->setMatiereParent(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|CovidAttestationEtudiant[]
     */
    public function getCovidAttestationEtudiants(): Collection
    {
        return $this->covidAttestationEtudiants;
    }

    public function addCovidAttestationEtudiant(CovidAttestationEtudiant $covidAttestationEtudiant): self
    {
        if (!$this->covidAttestationEtudiants->contains($covidAttestationEtudiant)) {
            $this->covidAttestationEtudiants[] = $covidAttestationEtudiant;
            $covidAttestationEtudiant->addMatiere($this);
        }

        return $this;
    }

    public function removeCovidAttestationEtudiant(CovidAttestationEtudiant $covidAttestationEtudiant): self
    {
        if ($this->covidAttestationEtudiants->contains($covidAttestationEtudiant)) {
            $this->covidAttestationEtudiants->removeElement($covidAttestationEtudiant);
            $covidAttestationEtudiant->removeMatiere($this);
        }

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->getCodeMatiere();
    }
}
