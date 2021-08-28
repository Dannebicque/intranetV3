<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Structure/ApogeeImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/08/2021 18:28
 */

namespace App\Classes\Structure;

use App\Classes\Matieres\TypeMatiereManager;
use Doctrine\ORM\EntityManagerInterface;

class ApogeeImport
{


    private EntityManagerInterface $entityManager;
    private typeMatiereManager $typeMatiereManager;

    public function __construct(EntityManagerInterface $entityManager, typeMatiereManager $typeMatiereManager)
    {
        $this->entityManager = $entityManager;
        $this->typeMatiereManager = $typeMatiereManager;
    }

    public function createSemestre($apoSemestres)
    {
    }

    public function createUes($apoUes)
    {
    }

    public function createMatiere($apoMatieres)
    {
    }
}
