<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcSituationProfessionnelle.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/05/2021 16:58
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcSituationProfessionnelleRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcSituationProfessionnelleRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class ApcSituationProfessionnelle extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="text")
     */
    private ?string $libelle;

    /**
     * @ORM\ManyToOne(targetEntity=ApcCompetence::class, inversedBy="apcSituationProfessionnelles")
     */
    private ?ApcCompetence $competence;

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

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
