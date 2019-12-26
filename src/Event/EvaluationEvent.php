<?php


namespace App\Event;

use App\Entity\Evaluation;
use Symfony\Contracts\EventDispatcher\Event;

class EvaluationEvent extends Event
{
    public const ADDED = 'evaluation.added';

    /** @var Evaluation */
    protected $evaluation;

    public function __construct(Evaluation $evaluation)
    {
        $this->evaluation = $evaluation;
    }

    public function getEvaluation(): Evaluation
    {
        return $this->evaluation;
    }
}
