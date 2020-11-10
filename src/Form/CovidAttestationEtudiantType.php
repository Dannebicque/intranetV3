<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/CovidAttestationEtudiantType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 10/11/2020 16:58

namespace App\Form;

use App\Entity\CovidAttestationEtudiant;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Groupe;
use App\Entity\Matiere;
use App\Repository\DiplomeRepository;
use App\Repository\GroupeRepository;
use App\Repository\MatiereRepository;
use Carbon\Carbon;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
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
                'label'         => 'Diplôme concerné par votre demande'
            ])
            ->add('datePresence', DateType::class, [
                'label'  => 'Date de la présence des étudiants',
                'format' => 'dd/MM/yyyy',
                'data'   => $date->addDays(2),
                'widget' => 'single_text',
                'html5'  => false,
                'attr'   => ['data-provide' => 'datepicker']
            ])
            ->add('heure', ChoiceType::class, [
                'label'    => 'Demi-journée de présence',
                'choices'  => [
                    'Matin'               => CovidAttestationEtudiant::MATIN,
                    'Après-midi'          => CovidAttestationEtudiant::APRESMIDI,
                    'Matin et Après-midi' => CovidAttestationEtudiant::TOUTELAJOURNEE,
                ],
                'expanded' => true,
                'multiple' => false
            ])
            ->add('groupes', EntityType::class, [
                'label'         => 'Choisissez des groupes présents',
                'help'          => 'Indiquez les groupes présents à l\'IUT sur le créneau indiqué ci-après.',
                'expanded'      => false,
                'multiple'      => true,
                'class'         => Groupe::class,
                'choice_label'  => 'displaySemestre',
                'query_builder' => function(GroupeRepository $groupeRepository) {
                    return $groupeRepository->findByDepartementBuilder($this->departement);
                },
                'attr'          => ['class' => 'form-control selectpicker'],
            ])
            ->add('matieres', EntityType::class, [
                'label'         => 'Choisissez les matières dispensées',
                'expanded'      => false,
                'multiple'      => true,
                'class'         => Matiere::class,
                'help'          => 'Indiquez les matières dispensées sur le créneau indiqué ci-après.',
                'choice_label'  => 'display',
                'query_builder' => function(MatiereRepository $matiereRepository) {
                    return $matiereRepository->findByDepartementBuilder($this->departement);
                },
                'attr'          => ['class' => 'form-control selectpicker'],
            ])
            ->add('motif', ChoiceType::class, [
                'choices'  => [
                    'Assurer TP'       => 'motifTp',
                    'Devoir sur Table' => 'motifEval',
                ],
                'expanded' => true,
                'label'    => 'Motif de la venue de l\'étudiant à l\'IUT'
            ])
            ->add('salles', TextType::class, [
                'label' => 'Salles occupées',
                'help'  => 'Liste des salles occupées par les étudiants sur le créneau indiqué ci-après.'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => CovidAttestationEtudiant::class,
            'translation_domain' => 'form',
            'departement'        => null
        ]);
    }
}
