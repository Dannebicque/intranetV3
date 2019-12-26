<?php


namespace App\Event;

use App\Entity\Absence;
use App\Entity\Note;
use Symfony\Contracts\EventDispatcher\Event;

class NoteEvent extends Event
{
    public const ADDED = 'note.added';
    public const UPDATED = 'note.updated';

    /** @var Note */
    protected $note;

    public function __construct(Note $note)
    {
        $this->note = $note;
    }

    public function getNote(): Note
    {
        return $this->note;
    }
}
