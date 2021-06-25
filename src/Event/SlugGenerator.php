<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/SlugGenerator.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:46
 */

namespace App\Event;

use App\Utils\Tools;
use App\Entity\Article;
use App\Entity\Utilisateur;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class SlugGenerator implements EventSubscriber
{
    // this method can only return the event names; you cannot define a
    // custom method name to execute when each event triggers
    public function getSubscribedEvents(): array
    {
        return [
            Events::prePersist,
            Events::preUpdate,
        ];
    }

    // callback methods must be called exactly like the events they listen to;
    // they receive an argument of type LifecycleEventArgs, which gives you access
    // to both the entity object of the event and the entity manager itself
    public function prePersist(LifecycleEventArgs $args): void
    {
        $this->slug('persist', $args);
    }

    private function slug(string $action, LifecycleEventArgs $args): void
    {
        $entity = $args->getObject();

        // if this subscriber only applies to certain entity types,
        // add some code to check the entity type as early as possible
        if ($entity instanceof Article) {
            $entity->setSlug(Tools::slug($entity->getTitre()));

            return;
        } elseif ($entity instanceof Utilisateur) {
            if ('' !== $entity->getMailUniv() && null !== $entity->getMailUniv()) {
                $tabSlug = explode('@', $entity->getMailUniv());

                $entity->setSlug($tabSlug[0]);

                return;
            }
        }

        // ... get the entity information and log it somehow
    }

    public function preUpdate(LifecycleEventArgs $args): void
    {
        $this->slug('update', $args);
    }
}
