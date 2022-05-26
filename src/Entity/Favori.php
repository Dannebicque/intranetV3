<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Favori.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:21
 */

namespace App\Entity;

use App\Repository\FavoriRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FavoriRepository::class)]
class Favori extends BaseEntity
{
    #[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'etudiantDemande')]
    private ?Etudiant $etudiantDemandeur = null;

    #[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'etudiantDemandeur')]
    private ?Etudiant $etudiantDemande = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
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
