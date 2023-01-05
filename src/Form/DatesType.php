<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/DatesType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/01/2023 17:48
 */

namespace App\Form;

use App\Entity\Date;
use App\Entity\Departement;
use App\Entity\Semestre;
use App\Form\Type\DateRangeType;
use App\Form\Type\TimePickerType;
use App\Form\Type\TypeDestinataireType;
use App\Form\Type\YesNoType;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class DatesType.
 */
class DatesType extends AbstractType
{
    private Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.titre_date',
            ])
            ->add('typeDestinataire', TypeDestinataireType::class, [
                'label' => 'label.typedestinataire',
            ])
            ->add('texte', TextType::class, [
                'label' => 'label.texte_date',
                'required' => false,
            ])
            ->add('dateRange', DateRangeType::class,
                ['label' => 'label.date_evenement', 'mapped' => false, 'required' => true])
            ->add('heureDebut', TimePickerType::class, ['label' => 'label.heure_debut'])
            ->add('heureFin', TimePickerType::class, ['label' => 'label.heure_fin'])
            ->add('lieu', TextType::class, [
                'label' => 'label.lieu_date',
            ])
            ->add('allday', YesNoType::class, [
                'label' => 'allday',
            ])
            ->add('type', ChoiceType::class, [
                'label' => 'label.typedate',
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    Date::TYPE_STAGE => Date::TYPE_STAGE,
                    Date::TYPE_SOUTENANCE => Date::TYPE_SOUTENANCE,
                    Date::TYPE_REUNION => Date::TYPE_REUNION,
                    Date::TYPE_PROJET => Date::TYPE_PROJET,
                    Date::TYPE_COMMISSION => Date::TYPE_COMMISSION,
                    Date::TYPE_AUTRE => Date::TYPE_AUTRE,
                    Date::TYPE_RENTREE => Date::TYPE_RENTREE,
                ],
            ])
            ->add('semestres', EntityType::class, [
                'class' => Semestre::class,
                'label' => 'label.semestres_date',
                'choice_label' => 'libelle',
                'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findByDepartementBuilder($this->departement),
                'required' => true,
                'expanded' => true,
                'multiple' => true,
            ])
            ->addEventListener(FormEvents::POST_SUBMIT, static function (FormEvent $event) {
                $date = $event->getData();
                $form = $event->getForm();
                $dateRange = $form->get('dateRange')->getData();
                $date->setDateDebut($dateRange['from_date']);
                $date->setDateFin($dateRange['to_date']);
            })
            ->addEventListener(FormEvents::PRE_SET_DATA, static function (FormEvent $event) {
                $date = $event->getData();
                $form = $event->getForm();
                $form->add('dateRange', DateRangeType::class, [
                    'label' => 'dateRange',
                    'mapped' => false,
                    'date_data' => ['from' => $date->getDateDebut(), 'to' => $date->getDateFin()],
                ]);
            });
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Date::class,
            'departement' => null,
            'translation_domain' => 'form',
        ]);
    }
}
