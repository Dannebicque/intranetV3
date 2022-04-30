<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcSaeApprentissageCritique.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 18:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcSaeApprentissageCritiqueRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApcSaeApprentissageCritiqueRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ApcSaeApprentissageCritique extends BaseEntity
{
    use LifeCycleTrait;

    public function __construct(#[ORM\ManyToOne(targetEntity: ApcSae::class, inversedBy: 'apcSaeApprentissageCritiques')] private ?ApcSae $sae, #[ORM\ManyToOne(targetEntity: ApcApprentissageCritique::class, inversedBy: 'apcSaeApprentissageCritiques')] private ?ApcApprentissageCritique $apprentissageCritique)
    {
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
