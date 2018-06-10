<?php
// src/Form/Type/ShippingType.php
namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Translation\TranslatorInterface;


class YesNoType extends AbstractType
{
    private $translator;

    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(array(
            'choices'            => array(
                $this->translator->trans('choice.oui') => true,
                $this->translator->trans('choice.non') => false
            ),
            'multiple'           => false,
            'expanded'           => true,
            'translation_domain' => 'form'
        ));
    }

    public function getParent(): ?string
    {
        return ChoiceType::class;
    }
}