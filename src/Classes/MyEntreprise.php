<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyEntreprise.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Entreprise;
use Doctrine\ORM\EntityManagerInterface;

readonly class MyEntreprise
{
    /**
     * MyAdresse constructor.
     */
    public function __construct(private EntityManagerInterface $entityManager)
    {
    }

    public function update(Entreprise $entreprise, string $name, mixed $value): bool
    {
        $method = 'set'.$name;
        if (method_exists($entreprise, $method)) {
            $entreprise->$method($value);
            $this->entityManager->flush();

            return true;
        }

        return false;
    }
}
