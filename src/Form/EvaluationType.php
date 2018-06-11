<?php

namespace App\Form;

use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Form\Type\YesNoType;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EvaluationType extends AbstractType
{
    private $formation;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->formation = $options['formation'];

        $builder
            ->add('dateEvaluation', DateType::class, ['label' => 'label.date_evaluation'])
            ->add('coefficient', TextType::class, ['label' => 'label.coefficient', 'help' => 'help.coefficient'])
            ->add('commentaire', TextType::class, ['label' => 'label.commentaire'])
            ->add('matiere', EntityType::class, array(
                'class'         => Matiere::class,
                'label'         => 'label.evaluation_matiere',
                'choice_label'  => 'libelle',
                'query_builder' => function (MatiereRepository $matiereRepository) {
                    return $matiereRepository->findByFormationBuilder($this->formation);
                },
                'required'      => true,
                'expanded'      => false,
                'multiple'      => false,
                'disabled'      => true
            ))
            ->add('personnelAutorise', EntityType::class, array(
                'class'         => Personnel::class,
                'help'          => 'help.personnelAutorise',
                'label'         => 'label.evaluation_personnelAutorise',
                'choice_label'  => 'display',
                'query_builder' => function (PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findByFormationBuilder($this->formation);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => true
            ))//->add('parent')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => Evaluation::class,
            'formation'          => null,
            'translation_domain' => 'form'

        ]);
    }
}
