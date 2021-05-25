<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/CovidCreneauPresenceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/05/2021 16:35
 */

namespace App\Form;

use App\Entity\CovidCreneauPresence;
use Carbon\Carbon;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\DatepickerType;

class CovidCreneauPresenceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $date = new Carbon();
        $builder
            ->add('date', DatepickerType::class, [
                'label' => 'date_evaluation',
                'data' => $date->addDays(2),
            ])
            ->add('heureArrivee', TimeType::class, ['data' => new Carbon('08:00'), 'label' => 'Heure d\'arrivée'])
            ->add('heureDepart', TimeType::class, ['data' => new Carbon('12:00'), 'label' => 'Heure de départ']);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => CovidCreneauPresence::class,
            'translation_domain' => 'form',
        ]);
    }
}
