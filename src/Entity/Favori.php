<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FavoriRepository")
 */
class Favori
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="etudiantDemande")
     */
    private $etudiantDemandeur;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="etudiantDemandeur")
     */
    private $etudiantDemande;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateAjout;

    /**
     * Favori constructor.
     *
     * @param $etudiantDemandeur
     * @param $etudiantDemande
     */
    public function __construct($etudiantDemandeur, $etudiantDemande)
    {
        $this->setEtudiantDemandeur($etudiantDemandeur);
        $this->setEtudiantDemande($etudiantDemande);
        $this->dateAjout = new \DateTime('now');
    }


    public function getId()
    {
        return $this->id;
    }

    public function getEtudiantDemandeur(): ?Etudiant
    {
        return $this->etudiantDemandeur;
    }

    public function setEtudiantDemandeur(?Etudiant $etudiantDemandeur): self
    {
        $this->etudiantDemandeur = $etudiantDemandeur;

        return $this;
    }

    public function getEtudiantDemande(): ?Etudiant
    {
        return $this->etudiantDemande;
    }

    public function setEtudiantDemande(?Etudiant $etudiantDemande): self
    {
        $this->etudiantDemande = $etudiantDemande;

        return $this;
    }

    public function getDateAjout(): ?\DateTimeInterface
    {
        return $this->dateAjout;
    }

    public function setDateAjout(\DateTimeInterface $dateAjout): self
    {
        $this->dateAjout = $dateAjout;

        return $this;
    }
}
