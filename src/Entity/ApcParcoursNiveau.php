<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcParcoursNiveau.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/06/2021 07:06
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcParcoursNiveauRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcParcoursNiveauRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class ApcParcoursNiveau extends BaseEntity
{
    use LifeCycleTrait;
//Todo: ajouter code étape année. Le parcours ne devrait pas prendre en compte la preière année lors d'un type 1 ou 2 ???
    /**
     * @ORM\ManyToOne(targetEntity=ApcNiveau::class, inversedBy="apcParcoursNiveaux")
     */
    private $niveau;

    /**
     * @ORM\ManyToOne(targetEntity=ApcParcours::class, inversedBy="apcParcoursNiveaux")
     */
    private $parcours;

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
