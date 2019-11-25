<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/QualiteQuestionnaire.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QualiteQuestionnaireRepository")
 */
class QualiteQuestionnaire extends BaseEntity
{


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

    public function __construct(Semestre $semestre)
    {
        $this->semestre = $semestre;
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
}
