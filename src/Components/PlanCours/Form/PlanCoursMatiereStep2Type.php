<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursMatiereStep2Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 13:20
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCoursMatiere;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursMatiereStep2Type extends PlanCoursStep2Type
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'data_class' => PlanCoursMatiere::class,
        ]);
    }
}
