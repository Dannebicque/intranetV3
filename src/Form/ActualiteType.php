<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ActualiteType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 17:34

namespace App\Form;

use App\Entity\Actualite;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class ActualiteType
 * @package App\Form
 */
class ActualiteType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre', TextType::class, [
                'label' => 'label.titre',
                'attr' => ['data-error' => 'Le titre est obligatoire']
            ])
            ->add('texte', TextareaType::class, [
                'label'    => 'label.texte',
                'required' => true,
                'attr'     => ['data-provide' => 'quill', 'rows' => 10]
            ]);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Actualite::class,
            'translation_domain' => 'form'
        ]);
    }
}
