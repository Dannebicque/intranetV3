<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursHistoriqueEdtType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCoursHistoriqueEdt;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursHistoriqueEdtType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('commentaire')
            ->add('dateCours')
            ->add('ordreSeance')
            ->add('typeMatiere')
            ->add('idMatiere')
           // ->add('groupe')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PlanCoursHistoriqueEdt::class,
        ]);
    }
}
