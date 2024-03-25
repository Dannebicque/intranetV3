<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursRessourceStep2Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCoursRessource;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursRessourceStep2Type extends PlanCoursStep2Type
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'data_class' => PlanCoursRessource::class,
        ]);
    }
}
