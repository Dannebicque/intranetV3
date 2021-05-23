<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataTable/ColumnType/MatiereColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 08:06
 */

namespace App\DataTable\ColumnType;


use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Absence;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;

class MatiereColumnType extends PropertyColumnType
{
    protected TypeMatiereManager $typeMatiereManager;

    public function __construct(TypeMatiereManager $typeMatiereManager)
    {
        parent::__construct();
        $this->typeMatiereManager = $typeMatiereManager;
    }

    public function renderProperty($value, array $options): string
    {
        return $this->typeMatiereManager->getLibelleMatiere($value);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}

