<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Mcc.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/12/2022 11:45
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Repository\MccRepository;
use Carbon\Carbon;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MccRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Mcc extends BaseEntity
{
    use LifeCycleTrait;
    use MatiereTrait;

    #[ORM\ManyToOne(inversedBy: 'mccs')]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    #[ORM\Column]
    private ?float $coefficient = null;

    #[ORM\ManyToOne(inversedBy: 'mccs', fetch: 'EAGER')]
    private ?MccTypeEpreuve $typeEpreuve = null;

    public function __clone(): void
    {
        $this->setCreated(Carbon::now());
        $this->setUpdated(Carbon::now());
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

    public function getCoefficient(): ?float
    {
        return $this->coefficient;
    }

    public function setCoefficient(float $coefficient): self
    {
        $this->coefficient = $coefficient;

        return $this;
    }

    public function getTypeEpreuve(): ?MccTypeEpreuve
    {
        return $this->typeEpreuve;
    }

    public function setTypeEpreuve(?MccTypeEpreuve $typeEpreuve): self
    {
        $this->typeEpreuve = $typeEpreuve;

        return $this;
    }
}
