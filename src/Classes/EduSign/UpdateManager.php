<?php

namespace App\Classes\EduSign;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\EventDispatcher\Event;

class UpdateManager implements EventSubscriberInterface
{
    public function __construct(
        private UpdateEnseignant $updateEnseignant,
        private UpdateEdt $updateEdt,
//        private EventDispatcherInterface $eventDispatcher
    ) {
        $this->updateEnseignant->setUpdateManager($this);
//        $this->updateEdt->setUpdateManager($this);
    }

    public function onEnseignantAdded(EnseignantAddedEvent $event)
    {
        $enseignant = $event->getEnseignant();
//        $this->updateEnseignant($enseignant);
//        $this->updateEnseignant->update($enseignant);

    }

    public static function getSubscribedEvents()
    {
        return [
            EnseignantUpdatedEvent::class => 'onEnseignantUpdated',
            EnseignantAddedEvent::class => 'onEnseignantAdded'
        ];
    }

//    public function updateEnseignant($id)
//    {
//        $this->updateEnseignant->update($id);
//    }

//    public function updateEdt()
//    {
//        // Dispatch Event here
//        $this->eventDispatcher->dispatch(new Event(), 'enseignant.updated');
//    }

    public function onEnseignantUpdated(EnseignantUpdatedEvent $event)
    {
        $this->updateEdt->sendUpdate();
    }
}