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
    private $code_apogee;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $code_version;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $code_departement;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=20)
     */
    private $code_matiere;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $cm_ppn = 0;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $td_ppn = 0;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $tp_ppn = 0;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $cm_formation = 0;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $td_formation = 0;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $tp_formation = 0;

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
    private $nb_notes = 2;

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
    private $nb_ects = 1;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $objectifs_module;

    /**
     * @var string
     *
     * @ORM\Column(type="text",nullable=true)
     */
    private $competences_visees;

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
    private $pre_requis;

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
    private $mots_cles;

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
        return $this->code_apogee;
    }

    /**
     * @param mixed $code_apogee
     */
    public function setCodeApogee($code_apogee): void
    {
        $this->code_apogee = $code_apogee;
    }

    /**
     * @return mixed
     */
    public function getCodeVersion()
    {
        return $this->code_version;
    }

    /**
     * @param mixed $code_version
     */
    public function setCodeVersion($code_version): void
    {
        $this->code_version = $code_version;
    }

    /**
     * @return mixed
     */
    public function getCodeDepartement()
    {
        return $this->code_departement;
    }

    /**
     * @param mixed $code_departement
     */
    public function setCodeDepartement($code_departement): void
    {
        $this->code_departement = $code_departement;
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
        return $this->code_matiere;
    }

    /**
     * @param string $code_matiere
     */
    public function setCodeMatiere(string $code_matiere): void
    {
        $this->code_matiere = $code_matiere;
    }

    /**
     * @return float
     */
    public function getCmPpn(): float
    {
        return $this->cm_ppn;
    }

    /**
     * @param float $cm_ppn
     */
    public function setCmPpn(float $cm_ppn): void
    {
        $this->cm_ppn = $cm_ppn;
    }

    /**
     * @return float
     */
    public function getTdPpn(): float
    {
        return $this->td_ppn;
    }

    /**
     * @param float $td_ppn
     */
    public function setTdPpn(float $td_ppn): void
    {
        $this->td_ppn = $td_ppn;
    }

    /**
     * @return float
     */
    public function getTpPpn(): float
    {
        return $this->tp_ppn;
    }

    /**
     * @param float $tp_ppn
     */
    public function setTpPpn(float $tp_ppn): void
    {
        $this->tp_ppn = $tp_ppn;
    }

    /**
     * @return float
     */
    public function getCmFormation(): float
    {
        return $this->cm_formation;
    }

    /**
     * @param float $cm_formation
     */
    public function setCmFormation(float $cm_formation): void
    {
        $this->cm_formation = $cm_formation;
    }

    /**
     * @return float
     */
    public function getTdFormation(): float
    {
        return $this->td_formation;
    }

    /**
     * @param float $td_formation
     */
    public function setTdFormation(float $td_formation): void
    {
        $this->td_formation = $td_formation;
    }

    /**
     * @return float
     */
    public function getTpFormation(): float
    {
        return $this->tp_formation;
    }

    /**
     * @param float $tp_formation
     */
    public function setTpFormation(float $tp_formation): void
    {
        $this->tp_formation = $tp_formation;
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
        return $this->nb_notes;
    }

    /**
     * @param int $nb_notes
     */
    public function setNbNotes(int $nb_notes): void
    {
        $this->nb_notes = $nb_notes;
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
        return $this->nb_ects;
    }

    /**
     * @param float $nb_ects
     */
    public function setNbEcts(float $nb_ects): void
    {
        $this->nb_ects = $nb_ects;
    }


    /**
     * @return string
     */
    public function getObjectifsModule(): ?string
    {
        return $this->objectifs_module;
    }

    /**
     * @param string $objectifs_module
     */
    public function setObjectifsModule(string $objectifs_module): void
    {
        $this->objectifs_module = $objectifs_module;
    }

    /**
     * @return string
     */
    public function getCompetencesVisees(): ?string
    {
        return $this->competences_visees;
    }

    /**
     * @param string $competences_visees
     */
    public function setCompetencesVisees(string $competences_visees): void
    {
        $this->competences_visees = $competences_visees;
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
        return $this->pre_requis;
    }

    /**
     * @param string $pre_requis
     */
    public function setPreRequis(string $pre_requis): void
    {
        $this->pre_requis = $pre_requis;
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
        return $this->mots_cles;
    }

    /**
     * @param string $mots_cles
     */
    public function setMotsCles(string $mots_cles): void
    {
        $this->mots_cles = $mots_cles;
    }

    public function getSemestre(): ?Semestre
    {
        if ($this->getUe() !== null && $this->getUe()->getSemestre() !== null) {
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

    public function getEqTdFormation():float
    {
        return $this->cm_formation*1.5 + $this->td_formation + $this->tp_formation;
    }

    public function getEtuFormation():float
    {
        return $this->cm_formation + $this->td_formation + $this->tp_formation;
    }
}
