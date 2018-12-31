<?php
// src/Form/Type/ShippingType.php
namespace App\Form\Type;

use App\Entity\Constantes;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Translation\TranslatorInterface;

/**
 * Class YesNoType
 * @package App\Form\Type
 */
class CiviliteType extends AbstractType
{
    private $translator;

    /**
     * YesNoType constructor.
     *
     * @param TranslatorInterface $translator
     */
    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(array(
            'choices'            => array(
                $this->translator->trans(Constantes::CIVILITE_HOMME) => Constantes::CIVILITE_HOMME,
                $this->translator->trans(Constantes::CIVILITE_FEMME) => Constantes::CIVILITE_FEMME
            ),
            'multiple'           => false,
            'expanded'           => true,
            'translation_domain' => 'form'
        ));
    }

    /**
     * @return null|string
     */
    public function getParent(): ?string
    {
        return ChoiceType::class;
    }
}
