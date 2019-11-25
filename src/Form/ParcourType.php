<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Form/ParcourType.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Form;

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
    protected $diplome;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];

        $builder

            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('codeApogee', TextType::class, ['label' => 'label.code_apogee'])
            ->add('codeVersion', TextType::class, ['label' => 'label.code_version'])
            ->add('codeDepartement', TextType::class, ['label' => 'label.code_departement'])
            ->add('semestre', EntityType::class, [
                'class'         => Semestre::class,
                'required'      => true,
                'choice_label'  => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label'         => 'label.semestre',
                'expanded'      => true

            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Parcour::class,
            'diplome'            => null,
            'translation_domain' => 'form'
        ]);
    }
}
