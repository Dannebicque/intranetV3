<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/SemestreLien.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/08/2022 14:05
 */

namespace App\Entity;

use App\Enums\SemestreLienEnum;
use App\Repository\SemestreLienRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SemestreLienRepository::class)]
class SemestreLien extends BaseEntity
{
    #[ORM\ManyToOne(inversedBy: 'semestreLienDepart')]
    private ?Semestre $semestre_depart;

    #[ORM\ManyToOne(inversedBy: 'semestreLienArrive')]
    private ?Semestre $semestre_arrive;

    #[ORM\Column(type: Types::STRING, length: 10, nullable: true, enumType: SemestreLienEnum::class)]
    private ?SemestreLienEnum $sens;

    public function init(?Semestre $semestre_depart, ?Semestre $semestre_arrive, SemestreLienEnum $sens)
    {
        $this->semestre_depart = $semestre_depart;
        $this->semestre_arrive = $semestre_arrive;
        $this->sens = $sens;
    }


    public function getSemestreDepart(): ?Semestre
    {
        return $this->semestre_depart;
    }

    public function setSemestreDepart(?Semestre $semestre_depart): self
    {
        $this->semestre_depart = $semestre_depart;

        return $this;
    }

    public function getSemestreArrive(): ?Semestre
    {
        return $this->semestre_arrive;
    }

    public function setSemestreArrive(?Semestre $semestre_arrive): self
    {
        $this->semestre_arrive = $semestre_arrive;

        return $this;
    }

    public function getSens(): ?SemestreLienEnum
    {
        return $this->sens;
    }

    public function setSens(SemestreLienEnum $sens): self
    {
        $this->sens = $sens;

        return $this;
    }
}
