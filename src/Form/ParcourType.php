<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ParcourType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/09/2021 21:16
 */

namespace App\Form;

use App\Entity\Diplome;
use App\Entity\Parcour;
use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ParcourType extends AbstractType
{
    protected Diplome $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('codeElement', TextType::class, ['label' => 'label.code_apogee'])
            ->add('semestre', EntityType::class, [
                'class' => Semestre::class,
                'required' => true,
                'choice_label' => 'display',
                'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findByDiplomeBuilder($this->diplome),
                'label' => 'label.semestre',
                'expanded' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Parcour::class,
            'diplome' => null,
            'translation_domain' => 'form',
        ]);
    }
}
