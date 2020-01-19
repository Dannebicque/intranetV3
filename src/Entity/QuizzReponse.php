<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/QuizzReponse.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuizzReponseRepository")
 */
class QuizzReponse extends BaseEntity
{


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QuizzQuestion", inversedBy="quizzReponses")
     */
    private $question;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $valeur;

    /**
     * @ORM\Column(type="integer")
     */
    private $ordre;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\QuizzEtudiantReponse", mappedBy="reponse")
     */
    private $quizzEtudiantReponses;

    public function __construct()
    {
        $this->quizzEtudiantReponses = new ArrayCollection();
    }

    public function getQuestion(): ?QuizzQuestion
    {
        return $this->question;
    }

    public function setQuestion(?QuizzQuestion $question): self
    {
        $this->question = $question;

        return $this;
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

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    public function setValeur(string $valeur): self
    {
        $this->valeur = $valeur;

        return $this;
    }

    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    /**
     * @return Collection|QuizzEtudiantReponse[]
     */
    public function getQuizzEtudiantReponses(): Collection
    {
        return $this->quizzEtudiantReponses;
    }

    public function addQuizzEtudiantReponse(QuizzEtudiantReponse $quizzEtudiantReponse): self
    {
        if (!$this->quizzEtudiantReponses->contains($quizzEtudiantReponse)) {
            $this->quizzEtudiantReponses[] = $quizzEtudiantReponse;
            $quizzEtudiantReponse->addReponse($this);
        }

        return $this;
    }

    public function removeQuizzEtudiantReponse(QuizzEtudiantReponse $quizzEtudiantReponse): self
    {
        if ($this->quizzEtudiantReponses->contains($quizzEtudiantReponse)) {
            $this->quizzEtudiantReponses->removeElement($quizzEtudiantReponse);
            $quizzEtudiantReponse->removeReponse($this);
        }

        return $this;
    }
}
