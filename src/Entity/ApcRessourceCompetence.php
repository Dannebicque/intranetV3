<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/ApcRessourceCompetence.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:16
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcRessourceCompetenceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApcRessourceCompetenceRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ApcRessourceCompetence extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::FLOAT)]
    private float $coefficient = 0;

    public function __construct(#[ORM\ManyToOne(targetEntity: ApcRessource::class, inversedBy: 'apcRessourceCompetences')] private ?ApcRessource $ressource, #[ORM\ManyToOne(targetEntity: ApcCompetence::class, inversedBy: 'apcRessourceCompetences')] private ?ApcCompetence $competence)
    {
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

    public function getCompetence(): ?ApcCompetence
    {
        return $this->competence;
    }

    public function setCompetence(?ApcCompetence $competence): self
    {
        $this->competence = $competence;

        return $this;
    }

    public function getCoefficient(): ?float
    {
        return $this->coefficient;
    }

    public function setCoefficient(float $coefficient): self
    {
        $this->coefficient = $coefficient;

        return $this;
    }
}
