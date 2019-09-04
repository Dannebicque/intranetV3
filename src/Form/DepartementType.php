<?php
/**
 * Copyright (C) 9 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/DepartementType.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 04/09/2019 14:43
 * @lastUpdate 04/09/2019 14:42
 */

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\Ufr;
use App\Form\Type\YesNoType;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class FormationType
 * @package App\Form
 */
class DepartementType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle'
            ])
            ->add('logoFile', VichFileType::class, [
                'label' => 'label.logoFile',
                'download_label' => 'label.apercu',
                'allow_delete'   => false
            ])

            ->add(
                'opt_annee_previsionnel',
                ChoiceType::class,
                [
                    'choices' => array_combine(
                        range(date('Y') - 2, date('Y') + 4),
                        range(date('Y') - 2, date('Y') + 4)
                    ),
                    'label'   => 'label.opt_annee_previsionnel'
                ]
            )
            ->add('tel_contact', TextType::class, [
                'label'    => 'label.tel_contact',
                'required' => false
            ])
            ->add('fax', TextType::class, [
                'label'    => 'label.fax',
                'required' => false
            ])
            ->add('couleur', ColorType::class, [
                'label'    => 'label.couleur',
                'required' => false
            ])
            ->add('site_web', TextType::class, [
                'label'    => 'label.site_web',
                'required' => false
            ])
            ->add('description', TextareaType::class, [
                'label' => 'label.description'
            ])
            ->add(
                'opt_update_celcat',
                YesNoType::class,
                [
                    'label' => 'label.opt_update_celcat'
                ]
            )
            ->add(
                'opt_agence',
                YesNoType::class,
                [

                    'label' => 'label.opt_agence'
                ]
            )
            ->add(
                'opt_materiel',
                YesNoType::class,
                [

                    'label' => 'label.opt_materiel'
                ]
            )
            ->add(
                'opt_edt',
                YesNoType::class,
                [

                    'label' => 'label.opt_edt'
                ]
            )
            ->add(
                'opt_stage',
                YesNoType::class,
                [

                    'label' => 'label.opt_stage'
                ]
            )
            ->add(
                'opt_synthese',
                YesNoType::class,
                [

                    'label' => 'label.opt_synthese'
                ]
            )
            ->add(
                'opt_messagerie',
                YesNoType::class,
                [

                    'label' => 'label.opt_messagerie'
                ]
            )
            ->add('respri', EntityType::class, [
                'class'         => Personnel::class,
                'choice_label'  => 'display',
                'query_builder' => function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findAllOrder();
                },
                'attr'          => ['data-live-search' => 'true', 'data-provide' => 'selectpicker'],
                'label'         => 'label.respri',
                'required'      => false
            ])
            ->add('ufr', EntityType::class, [
                'class'        => Ufr::class,
                'choice_label' => 'libelle',
                'label'        => 'label.ufr'
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
            'data_class'         => Departement::class,
            'translation_domain' => 'form'

        ]);
    }
}
