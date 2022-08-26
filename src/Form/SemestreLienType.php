<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/SemestreLienType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/08/2022 14:14
 */

namespace App\Form;

use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\SemestreLien;
use App\Enums\SemestreLienEnum;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EnumType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SemestreLienType extends AbstractType
{
    private Diplome $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('semestre_arrive', EntityType::class, [
                'class' => Semestre::class,
                'required' => true,
                'choice_label' => 'displayLong',
                'expanded' => false,
                'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findByDepartementBuilder($this->diplome->getDepartement()),
                'label' => 'label.semestre_arrive',
            ])
            ->add('sens', EnumType::class, [
                'class' => SemestreLienEnum::class,
                'expanded' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SemestreLien::class,
            'translation_domain' => 'form',
            'diplome' => null,
        ]);
    }
}
