<?php

namespace App\Form;

use App\Entity\Semestre;
use App\Entity\Ue;
use App\Repository\SemestreRepository;
use Doctrine\DBAL\Types\FloatType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UeType extends AbstractType
{
    protected $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('semestre', EntityType::class, [
                'class'         => Semestre::class,
                'required'      => true,
                'choice_label'  => 'display',
                'query_builder' => function (SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label'         => 'label.semestre',
                'expanded'      => true

            ])
            ->add('numero_ue', ChoiceType::class, ['choices' => range(1, 20),'label' => 'label.numero_ue'])
            ->add('coefficient', TextType::class, ['label' => 'label.libelle'])
            ->add('nbEcts', TextType::class, ['label' => 'label.nb_ects'])
            ->add('codeApogee', TextType::class, ['label' => 'label.code_apogee'])
            ->add('codeVersion', TextType::class, ['label' => 'label.code_version'])
            ->add('codeDepartement', TextType::class, ['label' => 'label.code_departement'])

        ;
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws \Symfony\Component\OptionsResolver\Exception\AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Ue::class,
            'diplome' => null,
            'translation_domain' => 'form'

        ]);
    }
}
