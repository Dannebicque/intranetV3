<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/CiviliteType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Form\Type;

use App\Entity\Constantes;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class YesNoType.
 */
class CiviliteType extends AbstractType
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
                $this->translator->trans(Constantes::CIVILITE_HOMME) => Constantes::CIVILITE_HOMME,
                $this->translator->trans(Constantes::CIVILITE_FEMME) => Constantes::CIVILITE_FEMME,
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
