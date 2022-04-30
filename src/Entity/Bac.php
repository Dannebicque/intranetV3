<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Bac.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 09:13
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

    public final const SERIE_BAC_GENERAL = 'g';
    public final const SERIE_BAC_TECHNO = 't';
    public final const SERIE_BAC_PRO = 'p';
    public final const SERIE_BAC_ETRANGER = 'e';
    public final const SERIE_BAC_AUTRE = 'a';
    public final const TAB_TYPE_BAC = [
        self::SERIE_BAC_GENERAL => self::SERIE_BAC_GENERAL,
        self::SERIE_BAC_TECHNO => self::SERIE_BAC_TECHNO,
        self::SERIE_BAC_PRO => self::SERIE_BAC_PRO,
        self::SERIE_BAC_ETRANGER => self::SERIE_BAC_ETRANGER,
        self::SERIE_BAC_AUTRE => self::SERIE_BAC_AUTRE,
    ];

    #[Groups(groups: ['bac_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 30)]
    private ?string $libelle = null;

    #[Groups(groups: ['bac_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255)]
    private ?string $libelleLong = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 10, nullable: true)]
    private ?string $codeApogee = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 1, nullable: true)]
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
