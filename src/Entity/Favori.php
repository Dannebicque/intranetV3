<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Favori.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 11:05
 */

namespace App\Entity;

use Carbon\Carbon;
use Carbon\CarbonInterface;
use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FavoriRepository")
 */
class Favori extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="etudiantDemande")
     */
    private ?Etudiant $etudiantDemandeur;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="etudiantDemandeur")
     */
    private ?Etudiant $etudiantDemande;

    /**
     * @ORM\Column(type="datetime")
     */
    private ?CarbonInterface $dateAjout;

    public function __construct(Etudiant $etudiantDemandeur, Etudiant $etudiantDemande)
    {
        $this->setEtudiantDemandeur($etudiantDemandeur);
        $this->setEtudiantDemande($etudiantDemande);
        $this->dateAjout = Carbon::now();
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

    public function getDateAjout(): ?CarbonInterface
    {
        return $this->dateAjout;
    }

    public function setDateAjout(CarbonInterface $dateAjout): self
    {
        $this->dateAjout = $dateAjout;

        return $this;
    }
}
