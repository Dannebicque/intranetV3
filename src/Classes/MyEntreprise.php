<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyEntreprise.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/09/2020 08:59

namespace App\Classes;


use App\Entity\Entreprise;
use Doctrine\ORM\EntityManagerInterface;

class MyEntreprise
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


    public function update(Entreprise $entreprise, $name, $value): bool
    {
        if ($entreprise) {

            $method = 'set' . $name;
            if (method_exists($entreprise, $method)) {
                $entreprise->$method($value);
                $this->entityManager->flush();

                return true;
            }
        }

        return false;
    }

}
