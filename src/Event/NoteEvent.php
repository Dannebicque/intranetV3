<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/NoteEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 13:04
 */

namespace App\Event;

use App\Entity\Note;
use Symfony\Contracts\EventDispatcher\Event;

class NoteEvent extends Event
{
    public const ADDED = 'note.added';
    public const UPDATED = 'note.updated';

    protected Note $note;

    public function __construct(Note $note)
    {
        $this->note = $note;
    }

    public function getNote(): Note
    {
        return $this->note;
    }
}
