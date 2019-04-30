<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/CelcatCalendrierType.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/30/19 4:47 PM
 *  * @lastUpdate 4/30/19 4:17 PM
 *  *
 *
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CelcatCalendrierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('anneeUniversitaire', EntityType::class, [
                'label'        => 'label.annee_universitaire',
                'class'        => AnneeUniversitaire::class,
                'choice_label' => 'displayAnneeUniversitaire'
            ])
            ->add('semaineFormation', TextType::class, [
                'label' => 'label.semaineFormation',
            ])
            ->add('semaineReelle', TextType::class, [
                'label' => 'label.semaineReelle',
            ])
            ->add('dateLundi', DateType::class, [
                'label'  => 'label.dateLundi',
                'format' => 'dd/MM/yyyy',
                'widget' => 'single_text',
                'html5'  => false,
                'attr'   => ['data-provide' => 'datepicker', 'data-language' => 'fr']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Calendrier::class,
        ]);
    }
}
