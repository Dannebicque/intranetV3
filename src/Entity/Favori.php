<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Favori.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

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

    public function getEtudiantDemandeur(): ?Etudiant
    {
        return $this->etudiantDemandeur;
    }

    /**
     * @return Favori
     */
    public function setEtudiantDemandeur(?Etudiant $etudiantDemandeur): self
    {
        $this->etudiantDemandeur = $etudiantDemandeur;

        return $this;
    }

    public function getEtudiantDemande(): ?Etudiant
    {
        return $this->etudiantDemande;
    }

    /**
     * @return Favori
     */
    public function setEtudiantDemande(?Etudiant $etudiantDemande): self
    {
        $this->etudiantDemande = $etudiantDemande;

        return $this;
    }

    public function getDateAjout(): ?DateTimeInterface
    {
        return $this->dateAjout;
    }

    /**
     * @return Favori
     */
    public function setDateAjout(DateTimeInterface $dateAjout): self
    {
        $this->dateAjout = $dateAjout;

        return $this;
    }
}
