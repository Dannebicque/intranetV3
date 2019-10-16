<?php
/**
 * Copyright (C) 10 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/EmpruntEtudiant.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 16/10/2019 17:41
 * @lastUpdate 06/10/2019 12:55
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EmpruntEtudiantRepository")
 */
class EmpruntEtudiant extends Emprunt
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="emprunts")
     */
    private $etudiant;

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
