<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ProjetPeriodeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use App\Entity\Personnel;
use App\Entity\ProjetPeriode;
use App\Entity\Semestre;
use App\Form\Type\DateRangeType;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjetPeriodeType extends AbstractType
{
    private $departement;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->departement = $options['departement'];
        $builder
            ->add('libelle')
            ->add('dateRange', DateRangeType::class,
                ['label' => 'dateRange.periode', 'mapped' => false, 'required' => true])
            ->add('semestre', EntityType::class, [
                'class'         => Semestre::class,
                'label'         => 'label.semestre_stage_periode',
                'choice_label'  => 'libelle',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDepartementBuilder($this->departement);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => false,
            ])
            ->add('responsables', EntityType::class, [
                'label'         => 'label.responsables',
                'expanded'      => true,
                'multiple'      => true,
                'class'         => Personnel::class,
                'help'          => 'help.responsables',
                'choice_label'  => 'display',
                'query_builder' => function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findByDepartementBuilder($this->departement);
                },
            ])
            ->add('anneeUniversitaire', EntityType::class, [
                'label'        => 'label.anneeUniversitaire',
                'choice_label' => 'displayAnneeUniversitaire',
                'class'        => AnneeUniversitaire::class,
            ])
            ->addEventListener(FormEvents::POST_SUBMIT, static function(FormEvent $event) {
                $stagePeriode = $event->getData();
                $form = $event->getForm();
                $dateRange = $form->get('dateRange')->getData();
                $stagePeriode->setDateDebut($dateRange['from_date']);
                $stagePeriode->setDateFin($dateRange['to_date']);
            })
            ->addEventListener(FormEvents::PRE_SET_DATA, static function(FormEvent $event) {
                $stagePeriode = $event->getData();
                $form = $event->getForm();
                $form->add('dateRange', DateRangeType::class, [
                    'label'     => 'dateRange.periode',
                    'mapped'    => false,
                    'date_data' => ['from' => $stagePeriode->getDateDebut(), 'to' => $stagePeriode->getDateFin()],
                ]);
            });
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => ProjetPeriode::class,
            'departement'        => null,
            'translation_domain' => 'form',
        ]);
    }
}
