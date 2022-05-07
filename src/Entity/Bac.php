<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Bac.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/05/2022 19:45
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Enums\BacEnum;
use App\Repository\BacRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BacRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Bac extends BaseEntity
{
    use LifeCycleTrait;

    #[Groups(groups: ['bac_administration'])]
    #[ORM\Column(type: Types::STRING, length: 30)]
    private ?string $libelle = null;

    #[Groups(groups: ['bac_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelleLong = null;

    #[ORM\Column(type: Types::STRING, length: 10, nullable: true)]
    #[Groups(groups: ['bac_administration'])]
    private ?string $codeApogee = null;

    #[ORM\Column(type: Types::STRING, length: 1, nullable: true, enumType: BacEnum::class)]
    #[Groups(groups: ['bac_administration'])]
    private ?BacEnum $typeBac = null;

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getLibelleLong(): ?string
    {
        return $this->libelleLong;
    }

    public function setLibelleLong(string $libelleLong): self
    {
        $this->libelleLong = $libelleLong;

        return $this;
    }

    public function getCodeApogee(): ?string
    {
        return $this->codeApogee;
    }

    public function setCodeApogee(?string $codeApogee): self
    {
        $this->codeApogee = $codeApogee;

        return $this;
    }

    public function getTypeBac(): ?BacEnum
    {
        return $this->typeBac;
    }

    public function setTypeBac(BacEnum $typeBac): self
    {
        $this->typeBac = $typeBac;

        return $this;
    }
}
