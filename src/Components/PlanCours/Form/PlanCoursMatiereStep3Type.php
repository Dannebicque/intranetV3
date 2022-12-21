<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursMatiereStep3Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/12/2022 17:29
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCoursMatiere;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursMatiereStep3Type extends PlanCoursStep3Type
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PlanCoursMatiere::class,
        ]);
    }
}
