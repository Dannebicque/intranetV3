<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/MaterielCommunPret.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:21
 */

namespace App\Entity;

use App\Repository\MaterielCommunPretRepository;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MaterielCommunPretRepository::class)]
class MaterielCommunPret extends BaseEntity
{
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $dateEmprunt = null;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'materielCommunPrets')]
    private ?Personnel $personnel = null;

    #[ORM\ManyToOne(targetEntity: MaterielCommun::class, inversedBy: 'materielCommunPrets')]
    private ?MaterielCommun $materielCommun = null;

    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $creneau = null;

    public function getDateEmprunt(): ?CarbonInterface
    {
        return $this->dateEmprunt;
    }

    public function setDateEmprunt(CarbonInterface $dateEmprunt): self
    {
        $this->dateEmprunt = $dateEmprunt;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getMaterielCommun(): ?MaterielCommun
    {
        return $this->materielCommun;
    }

    public function setMaterielCommun(?MaterielCommun $materielCommun): self
    {
        $this->materielCommun = $materielCommun;

        return $this;
    }

    public function getCreneau(): ?string
    {
        return $this->creneau;
    }

    public function setCreneau(string $creneau): self
    {
        $this->creneau = $creneau;

        return $this;
    }
}
