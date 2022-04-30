<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/MaterielCommunType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 11:50
 */

namespace App\Form;

use App\Entity\MaterielCommun;
use App\Entity\Personnel;
use App\Form\Type\EntityCompleteType;
use App\Repository\PersonnelRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

class MaterielCommunType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('designation', TextType::class, ['label' => 'designation'])
            ->add('description', TextareaType::class, ['label' => 'description'])
            ->add('photoFile', VichFileType::class, [
                'required' => false,
                'label' => 'fichier',
                'download_label' => 'apercu',
                'allow_delete' => false,
            ])
            ->add('contact', EntityCompleteType::class, [
                'class' => Personnel::class,
                'query_builder' => static fn (PersonnelRepository $personnelRepository) => $personnelRepository->findAllOrder(),
                'choice_label' => 'display',
                'label' => 'contact_materiel_commun',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => MaterielCommun::class,
            'translation_domain' => 'form',
        ]);
    }
}
