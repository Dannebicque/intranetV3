<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/MccType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 16:09
 */

namespace App\Form;

use App\Entity\Mcc;
use App\Entity\MccTypeEpreuve;
use App\Form\Type\EntityCompleteType;
use App\Form\Type\FloatType;
use App\Repository\MccTypeEpreuveRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MccType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $anneeUniversitaire = $options['anneeUniversitaire'];

        $builder
            ->add('coefficient', FloatType::class, [
                'label' => 'Coefficient',
                'required' => true,
                'input_suffix' => '<span class="input-group-text">%</span>',
                'attr' => ['max' => 100, 'min' => 0],
            ])
            ->add('typeEpreuve', EntityCompleteType::class, [
                'label' => 'Type d\'épreuve',
                'class' => MccTypeEpreuve::class,
                'query_builder' => function (MccTypeEpreuveRepository $mccTypeEpreuveRepository) use ($anneeUniversitaire) {
                    return $mccTypeEpreuveRepository->findByAnneeUniversitaireBuilder($anneeUniversitaire);
                },
                'choice_label' => 'libelle',
                'required' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Mcc::class,
            'anneeUniversitaire' => null,
        ]);
    }
}
