<?php

namespace App\Classes\EduSign;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\EventDispatcher\Event;

class UpdateManager implements EventSubscriberInterface
{
    public function __construct(
        private UpdateEnseignant $updateEnseignant,
//        private UpdateEdt $updateEdt,
        private EventDispatcherInterface $eventDispatcher
    ) {
        $this->updateEnseignant->setUpdateManager($this);
//        $this->updateEdt->setUpdateManager($this);
    }

    public function onEnseignantAdded(EnseignantAddedEvent $event)
    {
        $id = $event->getEnseignantId();
        $this->updateEnseignant($id);
    }

    public static function getSubscribedEvents()
    {
        return [EnseignantAddedEvent::class => 'onEnseignantAdded'];
    }

    public function updateEnseignant($id)
    {
        $this->updateEnseignant->update($id);
    }

    public function updateEdt()
    {
        // Dispatch Event here
        $this->eventDispatcher->dispatch(new Event(), 'enseignant.updated');
    }
}