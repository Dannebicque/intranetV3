<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursRessourceStep1Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 15:57
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCoursRessource;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursRessourceStep1Type extends PlanCoursStep1Type
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
        $builder
            ->add('description', TextareaType::class, [
                'label' => 'Description du contenu de la ressource :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('modalitesEvaluations', TextareaType::class, [
                'label' => 'Modalités d\'évaluation de la ressource :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'data_class' => PlanCoursRessource::class,
        ]);
    }
}
