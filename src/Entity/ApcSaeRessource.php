<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcSaeRessource.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 18:44
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
    private ?ApcSae $sae;

    /**
     * @ORM\ManyToOne(targetEntity=ApcRessource::class, inversedBy="apcSaeRessources")
     */
    private ?ApcRessource $ressource;

    public function __construct(ApcSae $sae, ApcRessource $ressource)
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
