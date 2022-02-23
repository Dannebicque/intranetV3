<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/EmpruntEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use App\Repository\EmpruntEtudiantRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EmpruntEtudiantRepository::class)]
class EmpruntEtudiant extends Emprunt
{
    #[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'emprunts')]
    private ?Etudiant $etudiant;

    /**
     *
     * @throws \Exception
     */
    public function __construct(?Etudiant $etudiant)
    {
        $this->etudiant = $etudiant;
        parent::__construct();
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
}
