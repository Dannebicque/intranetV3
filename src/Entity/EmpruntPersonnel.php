<?php
/**
 * Copyright (C) 10 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/EmpruntPersonnel.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 16/10/2019 17:41
 * @lastUpdate 05/10/2019 09:18
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EmpruntPersonnelRepository")
 */
class EmpruntPersonnel extends Emprunt
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="emprunts")
     */
    private $personnel;

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }
}
