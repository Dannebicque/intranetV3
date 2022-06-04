<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyContact.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/06/2022 16:10
 */

namespace App\Classes;

use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;

class MyContact
{
    public function __construct(private readonly EntityManagerInterface $entityManager)
    {
    }

    public function update(Contact $contact, ?string $name, mixed $value): bool
    {
        if (null === $name) {
            return false;
        }

        $method = 'set'.$name;
        if (method_exists($contact, $method)) {
            $contact->$method($value);
            $this->entityManager->flush();

            return true;
        }

        return false;
    }
}
