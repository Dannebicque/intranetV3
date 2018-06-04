<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/05/2018
 * Time: 16:18
 */

namespace App;


class Events
{
    /**
     * For the event naming conventions, see:
     * https://symfony.com/doc/current/components/event_dispatcher.html#naming-conventions.
     *
     * @Event("Symfony\Component\EventDispatcher\GenericEvent")
     *
     * @var string
     */
    const NOTE_ADDED = 'note.added';
    const ABSENCE_ADDED = 'absence.added';
    const CARNET_ADDED = 'carnet.added';
}