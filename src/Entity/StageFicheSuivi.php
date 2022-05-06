<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/StageFicheSuivi.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 08:20
 */

namespace App\Entity;

use App\Repository\StageFicheSuiviRepository;
use Carbon\Carbon;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StageFicheSuiviRepository::class)]
class StageFicheSuivi extends AbstractFicheSuivi
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: StageEtudiant::class, inversedBy: 'stageFicheSuivis')]
    private ?StageEtudiant $stage;

    public function __construct(StageEtudiant $stageEtudiant)
    {
        $this->setStage($stageEtudiant);
        $this->setDate(Carbon::today());
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStage(): ?StageEtudiant
    {
        return $this->stage;
    }

    public function setStage(?StageEtudiant $stage): self
    {
        $this->stage = $stage;

        return $this;
    }
}
