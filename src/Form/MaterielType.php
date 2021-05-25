<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/MaterielType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\Form;

use App\Entity\Materiel;
use App\Entity\TypeMateriel;
use App\Form\Type\YesNoType;
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
            ->add('libelle', TextType::class, ['label' => 'libelle'])
            ->add('description', TextType::class, ['label' => 'description'])
            ->add('codebarre', TextType::class, ['label' => 'codebarre', 'required' => false])
            ->add('empruntable', YesNoType::class, ['label' => 'empruntable'])
            ->add('photoFile', VichFileType::class, [
                'required' => false,
                'label' => 'photo',
                'download_label' => 'apercu',
                'allow_delete' => false,
            ])
            ->add('typeMateriel', EntityType::class, [
                'class' => TypeMateriel::class,
                'required' => true,
                'choice_label' => 'libelle',
                'query_builder' => function(TypeMaterielRepository $typeMaterielRepository) {
                    return $typeMaterielRepository->findByDepartementBuider($this->departement);
                },
                'label' => 'type_materiel',
                'expanded' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Materiel::class,
            'translation_domain' => 'form',
            'departement'        => null,
        ]);
    }
}
