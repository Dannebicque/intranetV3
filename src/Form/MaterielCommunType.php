<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/MaterielCommunType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Form;

use App\Entity\MaterielCommun;
use App\Entity\Personnel;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

class MaterielCommunType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation', TextType::class, ['label' => 'label.designation'])
            ->add('description', TextareaType::class, ['label' => 'label.description'])
            ->add('photoFile', VichFileType::class, [
                'required'       => false,
                'label'          => 'label.fichier',
                'download_label' => 'label.apercu',
                'allow_delete'   => false,
            ])
            ->add('contact', EntityType::class, [
                'class'         => Personnel::class,
                'query_builder' => static function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findAllOrder();
                },
                'attr'          => ['class' => 'form-control selectpicker'],
                'choice_label'  => 'display',
                'label'         => 'label.contact_materiel_commun',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => MaterielCommun::class,
            'translation_domain' => 'form',
        ]);
    }
}
