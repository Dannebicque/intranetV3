<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursMatiereStep3Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCoursMatiere;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursMatiereStep3Type extends PlanCoursStep3Type
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'data_class' => PlanCoursMatiere::class,
        ]);
    }
}
