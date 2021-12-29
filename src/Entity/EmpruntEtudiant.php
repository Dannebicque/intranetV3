<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/EmpruntEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EmpruntEtudiantRepository")
 */
class EmpruntEtudiant extends Emprunt
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="emprunts")
     * @Groups({"emprunts_administration"})
     */
    private ?Etudiant $etudiant;

    /**
     * EmpruntEtudiant constructor.
     */
    public function __construct(?Etudiant $etudiant)
    {
        parent::__construct();
        $this->etudiant = $etudiant;
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
