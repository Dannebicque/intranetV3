<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/05/2018
 * Time: 16:18
 */

namespace App;


/**
 * Class Events
 * @package App
 */
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
    public const NOTE_ADDED = 'note.added';
    public const ABSENCE_ADDED = 'absence.added';
    public const ABSENCE_REMOVED = 'absence.removed';
    public const CARNET_ADDED = 'carnet.added';
    public const DECISION_RATTRAPAGE = 'decision.rattrapage';
    public const DECISION_RATTRAPAGE_ACCEPTEE = 'decision.rattrapage.acceptee';
    public const DECISION_RATTRAPAGE_REFUSEE = 'decision.rattrapage.refusee';

    public const MAIL_ABSENCE_ADDED = 'mail.absence.added';
    public const MAIL_ABSENCE_ADDED_RESPONSABLE = 'mail.absence.added.responsable';
    public const MAIL_ABSENCE_REMOVED = 'mail.absence.removed';
    public const MAIL_ABSENCE_REMOVED_RESPONSABLE = 'mail.absence.removed.responsable';
    public const MAIL_NOTE_MODIFICATION_RESPONSABLE = 'mail.note.modification.responsable';
    public const MAIL_NEW_TRANSCRIPT_RESPONSABLE = 'mail.new.transcript.responsable';
    public const MAIL_DECISION_RATTRAPAGE = 'mail.decision.rattrapage';


}