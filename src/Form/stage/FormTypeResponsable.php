<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/stage/FormTypeResponsable.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/12/2022 21:40
 */

namespace App\Form\stage;

use App\Entity\StageEtudiant;
use App\Form\EntrepriseType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormTypeResponsable extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('entreprise', EntrepriseType::class,
                [
                    'label' => 'Responsable',
                    'required' => false,
                ]
            )
            ->add('retour', SubmitType::class,
                [
                    'label' => 'Etape précédente',
                    'attr' => ['class' => 'btn-precedent'],
                ]
            )
            ->add('suivant', SubmitType::class,
                [
                    'label' => 'Etape suivante',
                    'attr' => ['class' => 'btn-suivant'],
                ]
            );
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => StageEtudiant::class,
            'translation_domain' => 'form',
        ]);
    }
}
