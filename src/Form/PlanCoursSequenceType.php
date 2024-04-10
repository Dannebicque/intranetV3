<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/PlanCoursSequenceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/04/2024 14:32
 */

namespace App\Form;

use App\Entity\PlanCoursSequence;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursSequenceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('programme', null, ['label' => 'Programme', 'help' =>
                'Programme de la séquence de cours'])
            ->add('nbHeures', null, [
                'label' => 'Nombre d\'heures',
                'required' => true,
                'help' => 'Nombre d\'heures de cours pour cette séquence',
            ])
            ->add('commentaire', null, ['label' => 'Commentaire', 'help' =>
                'Commentaire libre sur la séquence de cours']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PlanCoursSequence::class,
        ]);
    }
}
