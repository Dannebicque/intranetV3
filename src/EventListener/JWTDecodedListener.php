<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/EventListener/JWTDecodedListener.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2024 11:26
 */

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\Security\Core\User\UserInterface;

class JWTDecodedListener
{
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }

        $payload = $event->getData();
        $payload['custom_user_data'] = $user->getUsername();//getCustomUserInformations();

        $event->setData($payload);
    }
}
