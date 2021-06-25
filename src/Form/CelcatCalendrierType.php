<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/CelcatCalendrierType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 11:45
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Form\Type\CarbonDateTimePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CelcatCalendrierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('anneeUniversitaire', EntityType::class, [
                'label' => 'annee_universitaire',
                'class' => AnneeUniversitaire::class,
                'choice_label' => 'displayAnneeUniversitaire',
            ])
            ->add('semaineFormation', TextType::class, [
                'label' => 'semaineFormation',
            ])
            ->add('semaineReelle', TextType::class, [
                'label' => 'semaineReelle',
            ])
            ->add('dateLundi', CarbonDateTimePickerType::class, [
                'label' => 'dateLundi',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Calendrier::class,
        ]);
    }
}
