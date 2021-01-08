<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcParcoursNiveau.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/01/2021 15:52

namespace App\Entity;

use App\Repository\ApcParcoursNiveauRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcParcoursNiveauRepository::class)
 */
class ApcParcoursNiveau extends BaseEntity
{


    /**
     * @ORM\ManyToOne(targetEntity=ApcNiveau::class, inversedBy="apcParcoursNiveaux")
     */
    private $niveau;

    /**
     * @ORM\ManyToOne(targetEntity=ApcParcours::class, inversedBy="apcParcoursNiveaux")
     */
    private $parcours;

    /**
     * ApcParcoursNiveau constructor.
     *
     * @param $parcours
     */
    public function __construct($parcours)
    {
        $this->parcours = $parcours;
    }


    public function getNiveau(): ?ApcNiveau
    {
        return $this->niveau;
    }

    public function setNiveau(?ApcNiveau $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getParcours(): ?ApcParcours
    {
        return $this->parcours;
    }

    public function setParcours(?ApcParcours $parcours): self
    {
        $this->parcours = $parcours;

        return $this;
    }

}
