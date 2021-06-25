<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/EvaluationEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:46
 */

namespace App\Event;

use App\Entity\Evaluation;
use Symfony\Contracts\EventDispatcher\Event;

class EvaluationEvent extends Event
{
    public const ADDED = 'evaluation.added';
    protected Evaluation $evaluation;

    public function __construct(Evaluation $evaluation)
    {
        $this->evaluation = $evaluation;
    }

    public function getEvaluation(): Evaluation
    {
        return $this->evaluation;
    }
}
