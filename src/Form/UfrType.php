<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/UfrType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Form;

use App\Entity\Personnel;
use App\Entity\Site;
use App\Entity\Ufr;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class UfrType.
 */
class UfrType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('responsable', EntityType::class, [
                'class'         => Personnel::class,
                'label'         => 'label.responsable_site',
                'choice_label'  => 'displayPr',
                'expanded'      => false,
                'multiple'      => false,
                'query_builder' => static function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findAllOrder();
                },
                'attr'          => ['class' => 'form-control selectpicker'],
            ])
            ->add('sitePrincipal', EntityType::class, [
                'class'        => Site::class,
                'label'        => 'label.site_principal',
                'choice_label' => 'libelle',
                'expanded'     => true,
                'multiple'     => false,
            ])
            ->add('sites', EntityType::class, [
                'class'        => Site::class,
                'label'        => 'label.sites',
                'choice_label' => 'libelle',
                'expanded'     => true,
                'multiple'     => true,
            ]);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Ufr::class,
            'translation_domain' => 'form',
        ]);
    }
}
