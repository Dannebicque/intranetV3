<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Favori.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;

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
     *
     * @throws Exception
     */
    public function __construct($etudiantDemandeur, $etudiantDemande)
    {
        $this->setEtudiantDemandeur($etudiantDemandeur);
        $this->setEtudiantDemande($etudiantDemande);
        $this->dateAjout = new DateTime('now');
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
     * @return DateTimeInterface|null
     */
    public function getDateAjout(): ?DateTimeInterface
    {
        return $this->dateAjout;
    }

    /**
     * @param DateTimeInterface $dateAjout
     *
     * @return Favori
     */
    public function setDateAjout(DateTimeInterface $dateAjout): self
    {
        $this->dateAjout = $dateAjout;

        return $this;
    }
}
