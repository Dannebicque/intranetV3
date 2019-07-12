<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/MaterielType.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/29/19 10:35 AM
 */

namespace App\Form;

use App\Entity\Materiel;
use App\Entity\TypeMateriel;
use App\Repository\TypeMaterielRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

class MaterielType extends AbstractType
{
    protected $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('description', TextType::class, ['label' => 'label.libelle'])
            ->add('photoFile', VichFileType::class, [
                'required'       => false,
                'label'          => 'label.photo',
                'download_label' => 'label.apercu',
                'allow_delete'   => false
            ])
            ->add('typeMateriel', EntityType::class, [
                'class'         => TypeMateriel::class,
                'required'      => true,
                'choice_label'  => 'libelle',
                'query_builder' => function(TypeMaterielRepository $typeMaterielRepository) {
                    return $typeMaterielRepository->findByDepartementBuider($this->departement);
                },
                'label'         => 'label.type_materiel',
                'expanded'      => false

            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Materiel::class,
            'translation_domain' => 'form',
            'departement'            => null,

        ]);
    }
}
