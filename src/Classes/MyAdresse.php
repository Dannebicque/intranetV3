<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyAdresse.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/09/2020 09:54

namespace App\Classes;


use App\Entity\Adresse;
use Doctrine\ORM\EntityManagerInterface;

class MyAdresse
{
    private EntityManagerInterface $entityManager;

    /**
     * MyAdresse constructor.
     *
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }


    public function update(Adresse $adresse, $name, $value): bool
    {
        if ($adresse) {

            $method = 'set' . $name;
            if (method_exists($adresse, $method)) {
                $adresse->$method($value);
                $this->entityManager->flush();

                return true;
            }
        }

        return false;
    }

}
