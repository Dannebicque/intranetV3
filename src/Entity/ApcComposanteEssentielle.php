<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcComposanteEssentielle.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 17:33
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcComposanteEssentielleRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApcComposanteEssentielleRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ApcComposanteEssentielle extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255)]
    private ?string $libelle = null;

    public function __construct(#[ORM\ManyToOne(targetEntity: ApcCompetence::class, inversedBy: 'apcComposanteEssentielles')] private ?ApcCompetence $competence = null)
    {
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getCompetence(): ?ApcCompetence
    {
        return $this->competence;
    }

    public function setCompetence(?ApcCompetence $competence): self
    {
        $this->competence = $competence;

        return $this;
    }
}
