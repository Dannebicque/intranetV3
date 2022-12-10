<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnaireUserAbstract.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/05/2022 14:27
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

#[ORM\MappedSuperclass]
#[ORM\HasLifecycleCallbacks]
/** @deprecated */
abstract class QuestionnaireUserAbstract
{
    use UuidTrait;
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: QuestionnaireQualite::class)]
    private ?QuestionnaireQualite $questionnaireQualite = null;

    #[ORM\ManyToOne(targetEntity: QuestionnaireQuizz::class)]
    private ?QuestionnaireQuizz $questionnaireQuizz = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $termine = false;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateTermine = null;

    public function __construct(QuestionnaireQuizz|QuestionnaireQualite $questionnaire, ?string $typeQuestionnaire)
    {
        switch ($typeQuestionnaire) {
            case 'quizz':
                $this->setQuestionnaireQuizz($questionnaire);
                break;
            case 'qualite':
                $this->setQuestionnaireQualite($questionnaire);
                break;
        }
        $this->setUuid(Uuid::uuid4());
    }

    public function getTermine(): ?bool
    {
        return $this->termine;
    }

    public function setTermine(bool $termine): self
    {
        $this->termine = $termine;

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

    public function getQuestionnaireQualite(): ?QuestionnaireQualite
    {
        return $this->questionnaireQualite;
    }

    public function setQuestionnaireQualite(?QuestionnaireQualite $questionnaireQualite): self
    {
        $this->questionnaireQualite = $questionnaireQualite;

        return $this;
    }

    public function getQuestionnaireQuizz(): ?QuestionnaireQuizz
    {
        return $this->questionnaireQuizz;
    }

    public function setQuestionnaireQuizz(?QuestionnaireQuizz $questionnaireQuizz): self
    {
        $this->questionnaireQuizz = $questionnaireQuizz;

        return $this;
    }
}
