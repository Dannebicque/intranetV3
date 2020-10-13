<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcCompetenceType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/10/2020 09:00

namespace App\Form;

use App\Entity\ApcCompetence;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcCompetenceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle')
            ->add('nom_court')
            ->add('couleur')
            ->add('diplome');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ApcCompetence::class,
        ]);
    }
}
