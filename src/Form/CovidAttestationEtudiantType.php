<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/CovidAttestationEtudiantType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Form;

use App\Entity\CovidAttestationEtudiant;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Groupe;
use App\Repository\DiplomeRepository;
use App\Repository\GroupeRepository;
use Carbon\Carbon;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CovidAttestationEtudiantType extends AbstractType
{
    protected ?Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->departement = $options['departement'];
        $date = new Carbon();

        $builder
            ->add('diplome', EntityType::class, [
                'class'         => Diplome::class,
                'required'      => true,
                'choice_label'  => 'libelle',
                'expanded'      => true,
                'query_builder' => function(DiplomeRepository $diplomeRepository) {
                    return $diplomeRepository->findByDepartementBuilder($this->departement);
                },
                'label'         => 'Diplôme concerné par votre demande',
            ])
            ->add('dateDebut', DateType::class, [
                'label'  => 'Date du début de la période',
                'format' => 'dd/MM/yyyy',
                'data'   => $date->addDays(2),
                'widget' => 'single_text',
                'html5'  => false,
                'attr'   => ['data-provide' => 'datepicker'],
            ])
            ->add('dateFin', DateType::class, [
                'label'  => 'Date de fin de la période',
                'format' => 'dd/MM/yyyy',
                'data'   => $date->addDays(2),
                'widget' => 'single_text',
                'html5'  => false,
                'attr'   => ['data-provide' => 'datepicker'],
                'help'   => 'Merci de ne pas dépasser un délai d\'une semaine',
            ])
            ->add('groupes', EntityType::class, [
                'label'         => 'Choisissez des groupes présents',
                'help'          => 'Indiquez les groupes présents à l\'IUT sur le créneau indiqué ci-après.',
                'expanded'      => false,
                'multiple'      => true,
                'class'         => Groupe::class,
                'choice_label'  => 'displaySemestre',
                'query_builder' => function(GroupeRepository $groupeRepository) {
                    return $groupeRepository->findByDepartementSemestreActifBuilder($this->departement);
                },
                'attr'          => ['class' => 'form-control selectpicker'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => CovidAttestationEtudiant::class,
            'translation_domain' => 'form',
            'departement'        => null,
        ]);
    }
}
