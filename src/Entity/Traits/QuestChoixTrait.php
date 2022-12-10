<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Traits/QuestChoixTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/11/2022 19:47
 */

namespace App\Entity\Traits;

use App\Entity\QuestQuestionnaire;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait QuestChoixTrait
{
    #[ORM\ManyToOne]
    private ?QuestQuestionnaire $questionnaire = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $dateEnvoi = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateTermine = null;

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

    public function getDateEnvoi(): ?\DateTimeInterface
    {
        return $this->dateEnvoi;
    }

    public function setDateEnvoi(\DateTimeInterface $dateEnvoi): self
    {
        $this->dateEnvoi = $dateEnvoi;

        return $this;
    }

    public function getDateTermine(): ?\DateTimeInterface
    {
        return $this->dateTermine;
    }

    public function setDateTermine(?\DateTimeInterface $dateTermine): self
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
}
