<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/CovidAttestationPersonnelType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/05/2021 18:29
 */

namespace App\Form;

use App\Entity\CovidAttestationPersonnel;
use App\Entity\Diplome;
use App\Repository\DiplomeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CovidAttestationPersonnelType extends AbstractType
{
    protected $departement;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->departement = $options['departement'];

        $builder
            ->add('diplome', EntityType::class, [
                'class' => Diplome::class,
                'required' => true,
                'choice_label' => 'getDisplay',
                'expanded' => true,
                'query_builder' => function(DiplomeRepository $diplomeRepository) {
                    return $diplomeRepository->findByDepartementBuilder($this->departement);
                },
                'label' => 'Diplôme concerné par votre demande (pour validation par le responsable)',
            ])
            ->add('personnel', CovidPersonnelType::class)
            ->add('moyenDeplacement', ChoiceType::class, [
                'choices' => [
                    'Vélo' => 'velo',
                    'A pieds' => 'pied',
                    'Véhicule personnel' => 'vehicule',
                    'Transports en commun (bus, train, ...)' => 'transport',
                ],
                'expanded' => true,
                'label' => 'moyenDeplacement',
            ])
            ->add('covidCreneauPresences', CollectionType::class, [
                'entry_type' => CovidCreneauPresenceType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Créneaux de présence à l\'IUT',
                'by_reference' => false,
                'attr' => [
                    'class' => 'selector-covidCreneauPresence',
                ],
                'help' => 'Ajoutez les créneaux pendant lesquels vous serez présent. Sans dépasser une semaine.',
            ])
            ->add('motif', ChoiceType::class, [
                'choices' => [
                    'Assurer TP / devoirs sur tables' => 'motif1',
                    'Assurer sur site les enseignants car ne dispose pas des conditions satisfaisantes pour le faire en distanciel' => 'motif2',
                    'Demandes ponctuelles (récupérer dossiers, BU)' => 'motif3',
                    'Encadrement doctorant sur site' => 'motif4',
                ],
                'label' => 'motifDeplacement',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => CovidAttestationPersonnel::class,
            'translation_domain' => 'form',
            'departement' => null,
        ]);
    }
}
