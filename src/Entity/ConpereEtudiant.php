<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/ConpereEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/09/2022 12:26
 */

namespace App\Entity;

use App\Repository\ConpereEtudiantRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConpereEtudiantRepository::class)]
class ConpereEtudiant
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'conpereEtudiants')]
    private ?Etudiant $etudiant = null;

    #[ORM\ManyToOne(inversedBy: 'conpereEtudiants')]
    private ?Annee $annee = null;

    #[ORM\ManyToOne(inversedBy: 'conpereEtudiants')]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getAnnee(): ?Annee
    {
        return $this->annee;
    }

    public function setAnnee(?Annee $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }
}
