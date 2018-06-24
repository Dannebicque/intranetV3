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

    /**
     * @return Etudiant|null
     */
    public function getEtudiantDemandeur(): ?Etudiant
    {
        return $this->etudiantDemandeur;
    }

    /**
     * @param Etudiant|null $etudiantDemandeur
     *
     * @return Favori
     */
    public function setEtudiantDemandeur(?Etudiant $etudiantDemandeur): self
    {
        $this->etudiantDemandeur = $etudiantDemandeur;

        return $this;
    }

    /**
     * @return Etudiant|null
     */
    public function getEtudiantDemande(): ?Etudiant
    {
        return $this->etudiantDemande;
    }

    /**
     * @param Etudiant|null $etudiantDemande
     *
     * @return Favori
     */
    public function setEtudiantDemande(?Etudiant $etudiantDemande): self
    {
        $this->etudiantDemande = $etudiantDemande;

        return $this;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getDateAjout(): ?\DateTimeInterface
    {
        return $this->dateAjout;
    }

    /**
     * @param \DateTimeInterface $dateAjout
     *
     * @return Favori
     */
    public function setDateAjout(\DateTimeInterface $dateAjout): self
    {
        $this->dateAjout = $dateAjout;

        return $this;
    }
}
