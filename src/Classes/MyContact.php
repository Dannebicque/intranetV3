<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyContact.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Classes;

use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;

readonly class MyContact
{
    public function __construct(private EntityManagerInterface $entityManager)
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
