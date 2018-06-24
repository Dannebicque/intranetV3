<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MatiereRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Matiere extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codeApogee;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codeVersion;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codeDepartement;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=20)
     */
    private $codeMatiere;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $cmPpn = 0;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $tdPpn = 0;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $tpPpn = 0;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $cmFormation = 0;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $tdFormation = 0;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $tpFormation = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $commentaire;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $nbNotes = 2;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $coefficient = 1;

    /**
     * @var Boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $pac = false;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $nbEcts = 1;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $objectifsModule;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $competencesVisees;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $contenu;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $preRequis;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $modalites;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $prolongements;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $motsCles;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Ue", inversedBy="matieres")
     */
    private $ue;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Ppn", inversedBy="matieres")
     */
    private $ppn;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Parcour", inversedBy="matieres")
     */
    private $parcours;

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
     * @ORM\Column(type="boolean")
     */
    private $suspendu = false;



    public function __construct()
    {
        $this->previsionnels = new ArrayCollection();
        $this->absences = new ArrayCollection();
        $this->evaluations = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getCodeApogee()
    {
        return $this->codeApogee;
    }

    /**
     * @param mixed $codeApogee
     */
    public function setCodeApogee($codeApogee): void
    {
        $this->codeApogee = $codeApogee;
    }

    /**
     * @return mixed
     */
    public function getCodeVersion()
    {
        return $this->codeVersion;
    }

    /**
     * @param mixed $codeVersion
     */
    public function setCodeVersion($codeVersion): void
    {
        $this->codeVersion = $codeVersion;
    }

    /**
     * @return mixed
     */
    public function getCodeDepartement()
    {
        return $this->codeDepartement;
    }

    /**
     * @param mixed $codeDepartement
     */
    public function setCodeDepartement($codeDepartement): void
    {
        $this->codeDepartement = $codeDepartement;
    }

    /**
     * @return mixed
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * @param mixed $libelle
     */
    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return string
     */
    public function getCodeMatiere(): ?string
    {
        return $this->codeMatiere;
    }

    /**
     * @param string $codeMatiere
     */
    public function setCodeMatiere(string $codeMatiere): void
    {
        $this->codeMatiere = $codeMatiere;
    }

    /**
     * @return float
     */
    public function getCmPpn(): float
    {
        return $this->cmPpn;
    }

    /**
     * @param float $cmPpn
     */
    public function setCmPpn(float $cmPpn): void
    {
        $this->cmPpn = $cmPpn;
    }

    /**
     * @return float
     */
    public function getTdPpn(): float
    {
        return $this->tdPpn;
    }

    /**
     * @param float $tdPpn
     */
    public function setTdPpn(float $tdPpn): void
    {
        $this->tdPpn = $tdPpn;
    }

    /**
     * @return float
     */
    public function getTpPpn(): float
    {
        return $this->tpPpn;
    }

    /**
     * @param float $tpPpn
     */
    public function setTpPpn(float $tpPpn): void
    {
        $this->tpPpn = $tpPpn;
    }

    /**
     * @return float
     */
    public function getCmFormation(): float
    {
        return $this->cmFormation;
    }

    /**
     * @param float $cmFormation
     */
    public function setCmFormation(float $cmFormation): void
    {
        $this->cmFormation = $cmFormation;
    }

    /**
     * @return float
     */
    public function getTdFormation(): float
    {
        return $this->tdFormation;
    }

    /**
     * @param float $tdFormation
     */
    public function setTdFormation(float $tdFormation): void
    {
        $this->tdFormation = $tdFormation;
    }

    /**
     * @return float
     */
    public function getTpFormation(): float
    {
        return $this->tpFormation;
    }

    /**
     * @param float $tpFormation
     */
    public function setTpFormation(float $tpFormation): void
    {
        $this->tpFormation = $tpFormation;
    }

    /**
     * @return string
     */
    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    /**
     * @param string $commentaire
     */
    public function setCommentaire(string $commentaire): void
    {
        $this->commentaire = $commentaire;
    }

    /**
     * @return int
     */
    public function getNbNotes(): int
    {
        return $this->nbNotes;
    }

    /**
     * @param int $nbNotes
     */
    public function setNbNotes(int $nbNotes): void
    {
        $this->nbNotes = $nbNotes;
    }

    /**
     * @return float
     */
    public function getCoefficient(): float
    {
        return $this->coefficient;
    }

    /**
     * @param float $coefficient
     */
    public function setCoefficient(float $coefficient): void
    {
        $this->coefficient = $coefficient;
    }

    /**
     * @return bool
     */
    public function isPac(): bool
    {
        return $this->pac;
    }

    /**
     * @param bool $pac
     */
    public function setPac(bool $pac): void
    {
        $this->pac = $pac;
    }

    /**
     * @return float
     */
    public function getNbEcts(): float
    {
        return $this->nbEcts;
    }

    /**
     * @param float $nbEcts
     */
    public function setNbEcts(float $nbEcts): void
    {
        $this->nbEcts = $nbEcts;
    }


    /**
     * @return string
     */
    public function getObjectifsModule(): ?string
    {
        return $this->objectifsModule;
    }

    /**
     * @param string $objectifsModule
     */
    public function setObjectifsModule(string $objectifsModule): void
    {
        $this->objectifsModule = $objectifsModule;
    }

    /**
     * @return string
     */
    public function getCompetencesVisees(): ?string
    {
        return $this->competencesVisees;
    }

    /**
     * @param string $competencesVisees
     */
    public function setCompetencesVisees(string $competencesVisees): void
    {
        $this->competencesVisees = $competencesVisees;
    }

    /**
     * @return string
     */
    public function getContenu(): ?string
    {
        return $this->contenu;
    }

    /**
     * @param string $contenu
     */
    public function setContenu(string $contenu): void
    {
        $this->contenu = $contenu;
    }

    /**
     * @return string
     */
    public function getPreRequis(): ?string
    {
        return $this->preRequis;
    }

    /**
     * @param string $preRequis
     */
    public function setPreRequis(string $preRequis): void
    {
        $this->preRequis = $preRequis;
    }

    /**
     * @return string
     */
    public function getModalites(): ?string
    {
        return $this->modalites;
    }

    /**
     * @param string $modalites
     */
    public function setModalites(string $modalites): void
    {
        $this->modalites = $modalites;
    }

    /**
     * @return string
     */
    public function getProlongements(): ?string
    {
        return $this->prolongements;
    }

    /**
     * @param string $prolongements
     */
    public function setProlongements(string $prolongements): void
    {
        $this->prolongements = $prolongements;
    }

    /**
     * @return string
     */
    public function getMotsCles(): ?string
    {
        return $this->motsCles;
    }

    /**
     * @param string $motsCles
     */
    public function setMotsCles(string $motsCles): void
    {
        $this->motsCles = $motsCles;
    }

    /**
     * @return Semestre|null
     */
    public function getSemestre(): ?Semestre
    {
        if ($this->getUe() !== null && $this->getUe()->getSemestre() !== null) {
            return $this->getUe()->getSemestre();
        }
        return null;
    }

    /**
     * @return Ue|null
     */
    public function getUe(): ?Ue
    {
        return $this->ue;
    }

    /**
     * @param Ue|null $ue
     *
     * @return Matiere
     */
    public function setUe(?Ue $ue): self
    {
        $this->ue = $ue;

        return $this;
    }

    /**
     * @return Ppn|null
     */
    public function getPpn(): ?Ppn
    {
        return $this->ppn;
    }

    /**
     * @param Ppn|null $ppn
     *
     * @return Matiere
     */
    public function setPpn(?Ppn $ppn): self
    {
        $this->ppn = $ppn;

        return $this;
    }

    /**
     * @return Parcour|null
     */
    public function getParcours(): ?Parcour
    {
        return $this->parcours;
    }

    /**
     * @param Parcour|null $parcours
     *
     * @return Matiere
     */
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

    /**
     * @param Previsionnel $previsionnel
     *
     * @return Matiere
     */
    public function addPrevisionnel(Previsionnel $previsionnel): self
    {
        if (!$this->previsionnels->contains($previsionnel)) {
            $this->previsionnels[] = $previsionnel;
            $previsionnel->setMatiere($this);
        }

        return $this;
    }

    /**
     * @param Previsionnel $previsionnel
     *
     * @return Matiere
     */
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

    /**
     * @param Absence $absence
     *
     * @return Matiere
     */
    public function addAbsence(Absence $absence): self
    {
        if (!$this->absences->contains($absence)) {
            $this->absences[] = $absence;
            $absence->setMatiere($this);
        }

        return $this;
    }

    /**
     * @param Absence $absence
     *
     * @return Matiere
     */
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

    /**
     * @param Evaluation $evaluation
     *
     * @return Matiere
     */
    public function addEvaluation(Evaluation $evaluation): self
    {
        if (!$this->evaluations->contains($evaluation)) {
            $this->evaluations[] = $evaluation;
            $evaluation->setMatiere($this);
        }

        return $this;
    }

    /**
     * @param Evaluation $evaluation
     *
     * @return Matiere
     */
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
     * @return float
     */
    public function getEqTdFormation():float
    {
        return $this->cmFormation*1.5 + $this->tdFormation + $this->tpFormation;
    }

    /**
     * @return float
     */
    public function getEtuFormation():float
    {
        return $this->cmFormation + $this->tdFormation + $this->tpFormation;
    }

    /**
     * @return bool|null
     */
    public function getSuspendu(): ?bool
    {
        return $this->suspendu;
    }

    /**
     * @param bool $suspendu
     *
     * @return Matiere
     */
    public function setSuspendu(bool $suspendu): self
    {
        $this->suspendu = $suspendu;

        return $this;
    }
}
