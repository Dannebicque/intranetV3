<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Bac.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/05/2022 08:45
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\BacRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BacRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Bac extends BaseEntity
{
    use LifeCycleTrait;

    final public const SERIE_BAC_GENERAL = 'g';
    final public const SERIE_BAC_TECHNO = 't';
    final public const SERIE_BAC_PRO = 'p';
    final public const SERIE_BAC_ETRANGER = 'e';
    final public const SERIE_BAC_AUTRE = 'a';
    final public const TAB_TYPE_BAC = [
        self::SERIE_BAC_GENERAL => self::SERIE_BAC_GENERAL,
        self::SERIE_BAC_TECHNO => self::SERIE_BAC_TECHNO,
        self::SERIE_BAC_PRO => self::SERIE_BAC_PRO,
        self::SERIE_BAC_ETRANGER => self::SERIE_BAC_ETRANGER,
        self::SERIE_BAC_AUTRE => self::SERIE_BAC_AUTRE,
    ];

    #[Groups(groups: ['bac_administration'])]
    #[ORM\Column(type: Types::STRING, length: 30)]
    private ?string $libelle = null;

    #[Groups(groups: ['bac_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelleLong = null;

    #[ORM\Column(type: Types::STRING, length: 10, nullable: true)]
    #[Groups(groups: ['bac_administration'])]
    private ?string $codeApogee = null;

    #[ORM\Column(type: Types::STRING, length: 1, nullable: true)]
    #[Groups(groups: ['bac_administration'])]
    //todo: pas géré...
    private ?string $typeBac = null;

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

    public function getTypeBac(): ?string
    {
        return $this->typeBac;
    }

    public function setTypeBac(?string $typeBac): self
    {
        $this->typeBac = $typeBac;

        return $this;
    }
}
