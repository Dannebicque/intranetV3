<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcSaeRessource.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 22:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcSaeRessourceRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcSaeRessourceRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class ApcSaeRessource extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity=ApcSae::class, inversedBy="apcSaeRessources")
     */
    private $sae;

    /**
     * @ORM\ManyToOne(targetEntity=ApcRessource::class, inversedBy="apcSaeRessources")
     */
    private $ressource;

    /**
     * ApcSaeRessource constructor.
     *
     * @param $sae
     * @param $ressource
     */
    public function __construct($sae, $ressource)
    {
        $this->sae = $sae;
        $this->ressource = $ressource;
    }


    public function getSae(): ?ApcSae
    {
        return $this->sae;
    }

    public function setSae(?ApcSae $sae): self
    {
        $this->sae = $sae;

        return $this;
    }

    public function getRessource(): ?ApcRessource
    {
        return $this->ressource;
    }

    public function setRessource(?ApcRessource $ressource): self
    {
        $this->ressource = $ressource;

        return $this;
    }
}
