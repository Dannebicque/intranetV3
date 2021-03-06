<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyContact.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;

class MyContact
{
    private EntityManagerInterface $entityManager;

    /**
     * MyAdresse constructor.
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function update(Contact $contact, $name, $value): bool
    {
        if ($contact) {
            $method = 'set' . $name;
            if (method_exists($contact, $method)) {
                $contact->$method($value);
                $this->entityManager->flush();

                return true;
            }
        }

        return false;
    }
}
