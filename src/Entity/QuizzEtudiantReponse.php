<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuizzEtudiantReponse.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuizzEtudiantReponseRepository")
 */
class QuizzEtudiantReponse extends BaseEntity
{
    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $valeur;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $cleReponse;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $cleQuestion;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QuizzEtudiant", inversedBy="quizzEtudiantReponses")
     */
    private $quizzEtudiant;


    public function __construct(QuizzEtudiant $quizzEtudiant)
    {
        $this->setQuizzEtudiant($quizzEtudiant);
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

    public function getQuizzEtudiant(): ?QuizzEtudiant
    {
        return $this->quizzEtudiant;
    }

    public function setQuizzEtudiant(?QuizzEtudiant $quizzEtudiant): self
    {
        $this->quizzEtudiant = $quizzEtudiant;

        return $this;
    }

}
