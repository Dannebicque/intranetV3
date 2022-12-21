<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursStep1Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/12/2022 17:36
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCours;
use App\Form\Type\FloatType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursStep1Type extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nbNotes', IntegerType::class, ['label' => 'Nombre de notes'])
            ->add('cmPrevu', FloatType::class, [
                'label' => 'Nb heures CM prévues',
                'help' => 'Par défaut rappel de la valeur du PN, mais modifiable si vous ne faite qu\'une partie du module'
            ])
            ->add('tdPrevu', FloatType::class, [
                'label' => 'Nb heures TD prévues',
                'help' => 'Par défaut rappel de la valeur du PN, mais modifiable si vous ne faite qu\'une partie du module'
            ])
            ->add('tpPrevu', FloatType::class, [
                'label' => 'Nb heures TP prévues',
                'help' => 'Par défaut rappel de la valeur du PN, mais modifiable si vous ne faite qu\'une partie du module'
            ])
            ->add('bibliographie', TextareaType::class, [
                'label' => 'Bibliographie/sitographie de référence',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('commentaires_step1', TextareaType::class, [
                'label' => 'Commentaire libre',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PlanCours::class,
        ]);
    }
}
