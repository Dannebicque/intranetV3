<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CodeInsee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 11:05
 */

namespace App\Entity;

use App\Repository\CodeInseeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CodeInseeRepository::class)
 */
class CodeInsee extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=6)
     */
    private ?string $code_insee;

    /**
     * @ORM\Column(type="string", length=60)
     */
    private ?string $code_postal;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $ville;

    public function getCodeInsee(): ?string
    {
        return $this->code_insee;
    }

    public function setCodeInsee(string $code_insee): self
    {
        $this->code_insee = $code_insee;

        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->code_postal;
    }

    public function setCodePostal(string $code_postal): self
    {
        $this->code_postal = $code_postal;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }
}
