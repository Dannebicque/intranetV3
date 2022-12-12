<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Traits/QuestChoixTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/12/2022 16:42
 */

namespace App\Entity\Traits;

use App\Entity\QuestQuestionnaire;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait QuestChoixTrait
{
    #[ORM\ManyToOne]
    private ?QuestQuestionnaire $questionnaire = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateEnvoi = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateTermine = null;

    #[ORM\Column(length: 255)]
    private ?string $cleQuestionnaire = null;

    public function getQuestionnaire(): ?QuestQuestionnaire
    {
        return $this->questionnaire;
    }

    public function setQuestionnaire(?QuestQuestionnaire $questionnaire): self
    {
        $this->questionnaire = $questionnaire;

        return $this;
    }

    public function getDateEnvoi(): ?CarbonInterface
    {
        return $this->dateEnvoi;
    }

    public function setDateEnvoi(?CarbonInterface $dateEnvoi): self
    {
        $this->dateEnvoi = $dateEnvoi;

        return $this;
    }

    public function getDateTermine(): ?CarbonInterface
    {
        return $this->dateTermine;
    }

    public function setDateTermine(?CarbonInterface $dateTermine): self
    {
        $this->dateTermine = $dateTermine;

        return $this;
    }

    public function getCleQuestionnaire(): ?string
    {
        return $this->cleQuestionnaire;
    }

    public function setCleQuestionnaire(string $cleQuestionnaire): self
    {
        $this->cleQuestionnaire = $cleQuestionnaire;

        return $this;
    }

    public function envoye(): bool
    {
        return null !== $this->dateEnvoi;
    }
}
