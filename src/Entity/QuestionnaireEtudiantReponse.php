<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireEtudiantReponse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 22:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuestionnaireEtudiantReponseRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class QuestionnaireEtudiantReponse extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $valeur;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $cleReponse;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private ?string $cleQuestion;

    /**
     * @ORM\ManyToOne(targetEntity="QuestionnaireEtudiant", inversedBy="questionnaireEtudiantReponses")
     */
    private ?QuestionnaireEtudiant $questionnaireEtudiant;

    public function __construct(QuestionnaireEtudiant $quizzEtudiant)
    {
        $this->setQuestionnaireEtudiant($quizzEtudiant);
    }

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    public function setValeur(?string $valeur): self
    {
        $this->valeur = trim($valeur);

        return $this;
    }

    public function getCleReponse(): ?string
    {
        return $this->cleReponse;
    }

    public function setCleReponse(?string $cleReponse): self
    {
        $this->cleReponse = $cleReponse;

        return $this;
    }

    public function getCleQuestion(): ?string
    {
        return $this->cleQuestion;
    }

    public function setCleQuestion(string $cleQuestion): self
    {
        $this->cleQuestion = $cleQuestion;

        return $this;
    }

    public function getQuestionnaireEtudiant(): ?QuestionnaireEtudiant
    {
        return $this->questionnaireEtudiant;
    }

    public function setQuestionnaireEtudiant(?QuestionnaireEtudiant $questionnaireEtudiant): self
    {
        $this->questionnaireEtudiant = $questionnaireEtudiant;

        return $this;
    }

    public function getIdReponse()
    {
        $t = explode('_', $this->cleReponse);

        return $t[\count($t) - 1];
    }
}
