<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ApcParcoursType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/11/2022 10:34
 */

namespace App\Form;

use App\Entity\ApcParcours;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcParcoursType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('code', TextType::class, ['label' => 'label.code'])
            ->add('codeDiplome', TextType::class, ['label' => 'label.code_diplome', 'required' => false])
            ->add('codeVersion', TextType::class, ['label' => 'label.code_version', 'required' => false])
            ->add('codeDepartement', TextType::class, ['label' => 'label.code_departement', 'required' => false])
            ->add('formationContinue', YesNoType::class, ['label' => 'label.formationContinue', 'required' => true, 'help' => 'Le parcours est-il proposé en formation initale ou en formation continue et/ou alternance']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ApcParcours::class,
            'translation_domain' => 'form'
        ]);
    }
}
