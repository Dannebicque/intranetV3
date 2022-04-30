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
    final public const ADDED = 'note.added';
    final public const UPDATED = 'note.updated';

    public function __construct(protected Note $note)
    {
    }

    public function getNote(): Note
    {
        return $this->note;
    }
}
