<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/CovidCreneauPresenceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 12:12
 */

namespace App\Form;

use App\Entity\CovidCreneauPresence;
use App\Form\Type\CarbonDateType;
use Carbon\Carbon;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CovidCreneauPresenceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $date = new Carbon();
        $builder
            ->add('date', CarbonDateType::class, [
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
