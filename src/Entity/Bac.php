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
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BacRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Bac extends BaseEntity
{
    use LifeCycleTrait;

    public const SERIE_BAC_GENERAL = 'g';
    public const SERIE_BAC_TECHNO = 't';
    public const SERIE_BAC_PRO = 'p';
    public const SERIE_BAC_ETRANGER = 'e';
    public const SERIE_BAC_AUTRE = 'a';

    public const TAB_TYPE_BAC = [
        self::SERIE_BAC_GENERAL => self::SERIE_BAC_GENERAL,
        self::SERIE_BAC_TECHNO => self::SERIE_BAC_TECHNO,
        self::SERIE_BAC_PRO => self::SERIE_BAC_PRO,
        self::SERIE_BAC_ETRANGER => self::SERIE_BAC_ETRANGER,
        self::SERIE_BAC_AUTRE => self::SERIE_BAC_AUTRE
    ];

    /**
     * @ORM\Column(type="string", length=30)
     * @Groups({"bac_administration"})
     */
    private ?string $libelle;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"bac_administration"})
     */
    private ?string $libelleLong;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private ?string $code_apogee;

    /**
     * @ORM\Column(type="string", length=1, nullable=true)
     */
    private ?string $typeBac;

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
        return $this->code_apogee;
    }

    public function setCodeApogee(?string $code_apogee): self
    {
        $this->code_apogee = $code_apogee;

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
