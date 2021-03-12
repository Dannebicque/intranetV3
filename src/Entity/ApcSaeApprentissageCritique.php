<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcSaeApprentissageCritique.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 22:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcSaeApprentissageCritiqueRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcSaeApprentissageCritiqueRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class ApcSaeApprentissageCritique extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity=ApcSae::class, inversedBy="apcSaeApprentissageCritiques")
     */
    private $sae;

    /**
     * @ORM\ManyToOne(targetEntity=ApcApprentissageCritique::class, inversedBy="apcSaeApprentissageCritiques")
     */
    private $apprentissageCritique;

    /**
     * ApcSaeApprentissageCritique constructor.
     *
     * @param $sae
     * @param $apprentissageCritique
     */
    public function __construct($sae, $apprentissageCritique)
    {
        $this->sae = $sae;
        $this->apprentissageCritique = $apprentissageCritique;
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

    public function getApprentissageCritique(): ?ApcApprentissageCritique
    {
        return $this->apprentissageCritique;
    }

    public function setApprentissageCritique(?ApcApprentissageCritique $apprentissageCritique): self
    {
        $this->apprentissageCritique = $apprentissageCritique;

        return $this;
    }
}
