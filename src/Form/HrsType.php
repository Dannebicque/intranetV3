<?php

namespace App\Form;

use App\Entity\Diplome;
use App\Entity\Hrs;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Entity\TypeHrs;
use App\Repository\DiplomeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class HrsType
 * @package App\Form
 */
class HrsType extends AbstractType
{
    protected $formation;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->formation = $options['formation'];

        $builder
            ->add('personnel', EntityType::class, [
                'class'         => Personnel::class,
                'required'      => true,
                'choice_label'  => 'display',
                'query_builder' => function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findByFormationBuilder($this->formation);
                },
                'label'         => 'label.personnel'
            ])
            ->add('typeHrs', EntityType::class, [
                'class'        => TypeHrs::class,
                'required'     => true,
                'choice_label' => 'libelle',
                'label'        => 'label.typehrs'
            ])
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('nbHeuresTd', TextType::class, ['label' => 'label.nbHeuresTd'])
            ->add('semestre', EntityType::class, [
                'class'         => Semestre::class,
                'required'      => false,
                'choice_label'  => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByFormationBuilder($this->formation);
                },
                'label'         => 'label.semestre'
            ])
            ->add('diplome', EntityType::class, [
                'class'         => Diplome::class,
                'required'      => false,
                'choice_label'  => 'libelle',
                'query_builder' => function(DiplomeRepository $diplomeRepository) {
                    return $diplomeRepository->findByFormationBuilder($this->formation);
                },
                'label'         => 'label.diplome'
            ]);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Hrs::class,
            'formation'          => null,
            'translation_domain' => 'form'
        ]);
    }
}
