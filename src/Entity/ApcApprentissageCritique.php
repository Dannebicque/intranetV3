<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcApprentissageCritique.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use App\Repository\ApcApprentissageCritiqueRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcApprentissageCritiqueRepository::class)
 */
class ApcApprentissageCritique extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity=ApcNiveau::class, inversedBy="apcApprentissageCritiques")
     */
    private $niveau;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $code;

    /**
     * ApcApprentissageCritique constructor.
     *
     * @param $niveau
     */
    public function __construct($niveau)
    {
        $this->niveau = $niveau;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getNiveau(): ?ApcNiveau
    {
        return $this->niveau;
    }

    public function setNiveau(?ApcNiveau $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }
}
