<?php

namespace App\Form;

use App\Entity\Competence;
use App\Repository\CompetenceRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class CompetenceType
 * @package App\Form
 */
class CompetenceType extends AbstractType
{
    private $diplome;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle',
            ])
            ->add('code', TextType::class, [
                'label' => 'label.code',
            ])
            ->add('parent', EntityType::class, [
                'class'         => Competence::class,
                'choice_label'  => 'display',
                'query_builder' => function (CompetenceRepository $competenceRepository) {
                    return $competenceRepository->findByDiplomeBuilder($this->diplome);
                },
                'label'         => 'label.competence_parent',
                'required'      => false,
            ]);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Competence::class,
            'translation_domain' => 'form',
            'diplome'            => null
        ]);
    }
}
