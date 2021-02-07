<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/YesNoType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class YesNoType.
 */
class YesNoType extends AbstractType
{
    private $translator;

    /**
     * YesNoType constructor.
     */
    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'choices'            => [
                $this->translator->trans('choice.oui') => true,
                $this->translator->trans('choice.non') => false,
            ],
            'multiple'           => false,
            'expanded'           => true,
            'translation_domain' => 'form',
        ]);
    }

    public function getParent(): ?string
    {
        return ChoiceType::class;
    }
}
