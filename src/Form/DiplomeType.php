<?php
/**
 * Copyright (C) 9 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/DiplomeType.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 04/09/2019 14:43
 * @lastUpdate 04/09/2019 14:42
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\TypeDiplome;
use App\Form\Type\YesNoType;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class DiplomeType
 * @package App\Form
 */
class DiplomeType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('type_diplome', EntityType::class, [
                'class'        => TypeDiplome::class,
                'choice_label' => 'libelle',
                'label'        => 'label.type_diplome'
            ])
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle'
            ])
            ->add('sigle', TextType::class, [
                'label' => 'label.sigle'
            ])
            ->add('responsable_diplome', EntityType::class, [
                'class'         => Personnel::class,
                'query_builder' => function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findAllOrder();
                },
                'attr'          => ['data-live-search' => 'true', 'data-provide' => 'selectpicker'],
                'choice_label'  => 'display',
                'label'         => 'label.responsable_diplome'
            ])
            ->add('assistant_diplome', EntityType::class, [
                'class'         => Personnel::class,
                'query_builder' => function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findAllOrder();
                },
                'attr'          => ['data-live-search' => 'true', 'data-provide' => 'selectpicker'],
                'choice_label'  => 'display',
                'label'         => 'label.assistant_diplome'
            ])
            ->add('anneeUniversitaire', EntityType::class, [
                'label'        => 'label.annee_courante',
                'class'        => AnneeUniversitaire::class,
                'choice_label' => 'displayAnneeUniversitaire'
            ])
            ->add('codeDiplome', TextType::class, [
                'label' => 'label.code_diplome'
            ])
            ->add('code_apogee', TextType::class, [
                'label' => 'label.code_etape'
            ])
            ->add('code_version', TextType::class, [
                'label' => 'label.code_version'
            ])
            ->add('code_departement', TextType::class, [
                'label' => 'label.code_departement'
            ])
            ->add('opt_nb_jours_saisie', TextType::class, [
                'label' => 'label.opt_nb_jours_saisie'
            ])
            ->add(
                'opt_dilpome_decale',
                YesNoType::class,
                [

                    'label' => 'label.opt_dilpome_decale'
                ]
            )
            ->add(
                'opt_suppr_absence',
                YesNoType::class,
                [
                    'label' => 'label.opt_suppr_absence'
                ]
            )
            ->add(
                'opt_methode_calcul',
                ChoiceType::class,
                [
                    'choices'                   => ['choice.moymodules' => 'moymodules', 'choice.moyues' => 'moyues'],
                    'expanded'                  => true,
                    'label'                     => 'label.opt_methode_calcul',
                    'choice_translation_domain' => 'form'

                ]
            )
            ->add(
                'opt_anonymat',
                YesNoType::class,
                [
                    'label' => 'label.opt_anonymat'
                ]
            )
            ->add(
                'opt_commentaires_releve',
                YesNoType::class,
                [

                    'label' => 'label.opt_commentaires_releve'
                ]
            )
            ->add(
                'opt_espace_perso_visible',
                YesNoType::class,
                [

                    'label' => 'label.opt_espace_perso_visible',

                ]
            )
            ->add('volume_horaire', TextType::class, [
                'label' => 'label.volume_horaire'
            ])
            ->add('code_celcat_departement', TextType::class, [
                'label' => 'label.code_celcat_departement'
            ]);
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Diplome::class,
            'translation_domain' => 'form'

        ]);
    }
}
