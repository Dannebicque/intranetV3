<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcSaeCompetence.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/03/2021 18:49
 */

namespace App\Entity;

use App\Repository\ApcSaeCompetenceRepository;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcSaeCompetenceRepository::class)
 */
class ApcSaeCompetence extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity=ApcSae::class, inversedBy="apcSaeCompetences")
     */
    private $sae;

    /**
     * @ORM\ManyToOne(targetEntity=ApcCompetence::class, inversedBy="apcSaeCompetences")
     */
    private $competence;

    /**
     * ApcSaeCompetence constructor.
     *
     * @param $sae
     * @param $competence
     */
    public function __construct($sae, $competence)
    {
        $this->sae = $sae;
        $this->competence = $competence;
    }


    public function getSae(): ?ApcSae
    {
        return $this->sae;
    }

    public function setSae(?ApcSae $sae): self
    {
        $this->sae = $sae;

        return $this;
    }

    public function getCompetence(): ?ApcCompetence
    {
        return $this->competence;
    }

    public function setCompetence(?ApcCompetence $competence): self
    {
        $this->competence = $competence;

        return $this;
    }
}
