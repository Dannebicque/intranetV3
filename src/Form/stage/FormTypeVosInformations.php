<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/stage/FormTypeVosInformations.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/12/2022 16:15
 */

namespace App\Form\stage;

use App\Entity\StageEtudiant;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormTypeVosInformations extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('etudiant', EtudiantStageType::class, ['label' => 'Vos informations', 'required' => false])
            ->add('suivant', SubmitType::class, ['label' => 'Etape suivante', 'attr' => ['class' => 'btn-suivant']]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => StageEtudiant::class,
            'translation_domain' => 'form',
        ]);
    }
}
