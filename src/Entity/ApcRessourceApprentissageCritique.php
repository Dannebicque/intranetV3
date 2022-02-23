<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcRessourceApprentissageCritique.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 18:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcRessourceApprentissageCritiqueRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApcRessourceApprentissageCritiqueRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ApcRessourceApprentissageCritique extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: ApcRessource::class, inversedBy: 'apcRessourceApprentissageCritiques')]
    private ?ApcRessource $ressource;

    #[ORM\ManyToOne(targetEntity: ApcApprentissageCritique::class, inversedBy: 'apcRessourceApprentissageCritiques')]
    private ?ApcApprentissageCritique $apprentissageCritique;

    public function __construct(
        ?ApcRessource $ressource,
        ?ApcApprentissageCritique $apprentissageCritique
    ) {
        $this->ressource = $ressource;
        $this->apprentissageCritique = $apprentissageCritique;
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
