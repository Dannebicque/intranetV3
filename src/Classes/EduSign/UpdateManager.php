<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2024 17:28
 */

namespace App\Classes\EduSign;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class UpdateManager implements EventSubscriberInterface
{
    public function __construct(
        private CreateEnseignant $updateEnseignant,
        private UpdateEdt        $updateEdt,
//        private EventDispatcherInterface $eventDispatcher
    ) {
        $this->updateEnseignant->setUpdateManager($this);
//        $this->updateEdt->setUpdateManager($this);
    }

    public function onEnseignantAdded(EnseignantAddedEvent $event): void
    {
        $enseignant = $event->getEnseignant();
//        $this->updateEnseignant($enseignant);
//        $this->updateEnseignant->update($enseignant);

    }

    public static function getSubscribedEvents(): array
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

    public function onEnseignantUpdated(EnseignantUpdatedEvent $event): void
    {
        $this->updateEdt->sendUpdate();
    }
}
