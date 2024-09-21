<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/Type/SearchType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2024 17:48
 */

namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;
use function is_string;

class SearchType extends AbstractType implements DataTransformerInterface
{
    public function finishView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['attr']['data-toolbar-type'] = 'search';
        $view->vars['type'] = 'text';
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'required' => false,
            'input_prefix_text' => '<i class="fas fa-search"></i>',
            'attr' => [
                'placeholder' => 'Rechercher ...',
            ],
        ]);
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addModelTransformer($this);
    }

    public function transform($value): mixed
    {
        return $value;
    }

    public function reverseTransform($value): ?string
    {
        if (!is_string($value)) {
            return null;
        }

        $value = strtolower(trim(preg_replace('/\s+/', ' ', $value)));

        return '' === $value ? null : $value;
    }

    /**
     * {@inheritdoc}
     */
    public function getParent(): ?string
    {
        return TextType::class;
    }
}
