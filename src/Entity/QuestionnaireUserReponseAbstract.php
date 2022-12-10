<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnaireUserReponseAbstract.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/06/2022 09:10
 */

namespace App\Entity;

use App\Components\Questionnaire\Interfaces\QuestionnaireChoixInterface;
use App\Entity\Traits\LifeCycleTrait;
use function count;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\MappedSuperclass]
#[ORM\HasLifecycleCallbacks]
/** @deprecated */
abstract class QuestionnaireUserReponseAbstract implements QuestionnaireChoixInterface
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $valeur = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $cleReponse = null;

    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $cleQuestion = null;

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    public function setValeur(?string $valeur): self
    {
        $this->valeur = trim($valeur);

        return $this;
    }

    public function getCleReponse(): ?string
    {
        return $this->cleReponse;
    }

    public function setCleReponse(?string $cleReponse): self
    {
        $this->cleReponse = $cleReponse;

        return $this;
    }

    public function getCleQuestion(): ?string
    {
        return $this->cleQuestion;
    }

    public function setCleQuestion(string $cleQuestion): self
    {
        $this->cleQuestion = $cleQuestion;

        return $this;
    }

    public function getIdReponse(): string
    {
        $t = explode('_', (string) $this->cleReponse);

        return $t[count($t) - 1];
    }
}
