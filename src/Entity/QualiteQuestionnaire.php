<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/QualiteQuestionnaire.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use App\Entity\Traits\UuidTrait;
use DateTime;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QualiteQuestionnaireRepository")
 */
class QualiteQuestionnaire extends BaseEntity
{

    use UuidTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateOuverture;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateFermeture;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="qualiteQuestionnaires")
     */
    private $semestre;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $titre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $texteExplication;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $texteDebut;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $textFin;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QualiteQuestionnaireSection", mappedBy="questionnaire")
     * @ORM\OrderBy({"ordre"="ASC"})
     */
    private $qualiteQuestionnaireSections;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QuizzEtudiant", mappedBy="questionnaire")
     */
    private $quizzEtudiants;

    public function __construct(Semestre $semestre)
    {
        $this->setUuid(Uuid::v4());
        $this->semestre = $semestre;
        $this->qualiteQuestionnaireSections = new ArrayCollection();
        $this->quizzEtudiants = new ArrayCollection();
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

    public function getDateOuverture(): ?DateTimeInterface
    {
        return $this->dateOuverture;
    }

    public function setDateOuverture(DateTimeInterface $dateOuverture): self
    {
        $this->dateOuverture = $dateOuverture;

        return $this;
    }

    public function getDateFermeture(): ?DateTimeInterface
    {
        return $this->dateFermeture;
    }

    public function setDateFermeture(DateTimeInterface $dateFermeture): self
    {
        $this->dateFermeture = $dateFermeture;

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getTexteExplication(): ?string
    {
        return $this->texteExplication;
    }

    public function setTexteExplication(?string $texteExplication): self
    {
        $this->texteExplication = $texteExplication;

        return $this;
    }

    public function getTexteDebut(): ?string
    {
        return $this->texteDebut;
    }

    public function setTexteDebut(?string $texteDebut): self
    {
        $this->texteDebut = $texteDebut;

        return $this;
    }

    public function getTextFin(): ?string
    {
        return $this->textFin;
    }

    public function setTextFin(?string $textFin): self
    {
        $this->textFin = $textFin;

        return $this;
    }

    /**
     * @return Collection|QualiteQuestionnaireSection[]
     */
    public function getQualiteQuestionnaireSections(): Collection
    {
        return $this->qualiteQuestionnaireSections;
    }

    public function addQualiteQuestionnaireSection(QualiteQuestionnaireSection $qualiteQuestionnaireSection): self
    {
        if (!$this->qualiteQuestionnaireSections->contains($qualiteQuestionnaireSection)) {
            $this->qualiteQuestionnaireSections[] = $qualiteQuestionnaireSection;
            $qualiteQuestionnaireSection->setQuestionnaire($this);
        }

        return $this;
    }

    public function removeQualiteQuestionnaireSection(QualiteQuestionnaireSection $qualiteQuestionnaireSection): self
    {
        if ($this->qualiteQuestionnaireSections->contains($qualiteQuestionnaireSection)) {
            $this->qualiteQuestionnaireSections->removeElement($qualiteQuestionnaireSection);
            // set the owning side to null (unless already changed)
            if ($qualiteQuestionnaireSection->getQuestionnaire() === $this) {
                $qualiteQuestionnaireSection->setQuestionnaire(null);
            }
        }

        return $this;
    }

    public function isOuvert()
    {
        $today = new DateTime('now');

        return $today >= $this->getDateOuverture() && $today <= $this->getDateFermeture();
    }

    /**
     * @return Collection|QuizzEtudiant[]
     */
    public function getQuizzEtudiants(): Collection
    {
        return $this->quizzEtudiants;
    }

    public function addQuizzEtudiant(QuizzEtudiant $quizzEtudiant): self
    {
        if (!$this->quizzEtudiants->contains($quizzEtudiant)) {
            $this->quizzEtudiants[] = $quizzEtudiant;
            $quizzEtudiant->setQuestionnaire($this);
        }

        return $this;
    }

    public function removeQuizzEtudiant(QuizzEtudiant $quizzEtudiant): self
    {
        if ($this->quizzEtudiants->contains($quizzEtudiant)) {
            $this->quizzEtudiants->removeElement($quizzEtudiant);
            // set the owning side to null (unless already changed)
            if ($quizzEtudiant->getQuestionnaire() === $this) {
                $quizzEtudiant->setQuestionnaire(null);
            }
        }

        return $this;
    }
}
