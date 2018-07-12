<?php

namespace App\Form;

use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Rattrapage;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class RattrapageType
 * @package App\Form
 */
class RattrapageType extends AbstractType
{
    private $semestre;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];

        $builder
            ->add('dateEval', DateType::class, ['label' => 'label.date_evaluation', 'required' => false])
            ->add('heureEval', TimeType::class, ['label' => 'label.heure_evaluation', 'required' => false])
            ->add('duree', TextType::class, ['label' => 'label.duree_evaluation', 'required' => false])
            ->add('matiere', EntityType::class, array(
                'class'         => Matiere::class,
                'label'         => 'label.matiere',
                'choice_label'  => 'libelle',
                'query_builder' => function (MatiereRepository $matiereRepository) {
                    return $matiereRepository->findBySemestreBuilder($this->semestre);
                },
                'required'      => false,
                'expanded'      => false,
                'multiple'      => false
            ))
            ->add('personnel', EntityType::class, array(
                'class'         => Personnel::class,
                'label'         => 'label.personnel',
                'choice_label'  => 'displayPr',
                'query_builder' => function (PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findBySemestreBuilder($this->semestre);
                },
                'required'      => false,
                'expanded'      => false,
                'multiple'      => false
            ));
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Rattrapage::class,
            'semestre'   => null
        ]);
    }
}
