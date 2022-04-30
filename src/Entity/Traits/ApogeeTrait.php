<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/ApogeeTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 11:08
 */

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

trait ApogeeTrait
{
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 20, nullable: true)]
    private ?string $codeDiplome = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 10, nullable: true)]
    private ?string $codeVersion = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 10, nullable: true)]
    private ?string $codeDepartement = null;

    public function getCodeDiplome(): ?string
    {
        return $this->codeDiplome;
    }

    public function setCodeDiplome(?string $codeDiplome): void
    {
        $this->codeDiplome = $codeDiplome;
    }

    public function getCodeVersion(): ?string
    {
        return $this->codeVersion;
    }

    public function setCodeVersion(?string $codeVersion): void
    {
        $this->codeVersion = $codeVersion;
    }

    public function getCodeDepartement(): ?string
    {
        return $this->codeDepartement;
    }

    public function setCodeDepartement(?string $codeDepartement): void
    {
        $this->codeDepartement = $codeDepartement;
    }
}
