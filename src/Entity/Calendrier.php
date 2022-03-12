<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Calendrier.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 19:05
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\CalendrierRepository;
use Carbon\CarbonImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CalendrierRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Calendrier extends BaseEntity
{
    use LifeCycleTrait;

    #[Groups(groups: ['celcat_administration'])]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $semaineFormation = null;

    #[Groups(groups: ['celcat_administration'])]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $semaineReelle = null;

    #[Groups(groups: ['celcat_administration'])]
    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private ?CarbonImmutable $dateLundi = null;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class, inversedBy: 'calendriers')]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    public function __construct()
    {
    }

    public function getSemaineFormation(): ?int
    {
        return $this->semaineFormation;
    }

    public function setSemaineFormation(int $semaineFormation): self
    {
        $this->semaineFormation = $semaineFormation;

        return $this;
    }

    public function getSemaineReelle(): ?int
    {
        return $this->semaineReelle;
    }

    public function setSemaineReelle(int $semaineReelle): self
    {
        $this->semaineReelle = $semaineReelle;

        return $this;
    }

    public function getDateLundi(): ?CarbonImmutable
    {
        return $this->dateLundi;
    }

    public function setDateLundi(CarbonImmutable $dateLundi): self
    {
        $this->dateLundi = $dateLundi;

        return $this;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }
}
