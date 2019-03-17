<?php

namespace App\Form;

use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\TypeGroupe;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class EvaluationType
 * @package App\Form
 */
class EvaluationType extends AbstractType
{
    private $departement;
    private $semestre;
    private $import = false;
    private $matiereDisabled = false;

    private $locale;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $this->locale = $options['locale'];
        $this->semestre = $options['semestre'];
        $this->import = $options['import'];
        $this->matiereDisabled = $options['matiereDisabled'];

        $builder
            ->add('dateEvaluation', DateType::class, [
                'label'  => 'label.date_evaluation',
                'format' => 'dd/MM/yyyy',
                'widget' => 'single_text',
                'html5'  => false,
                'attr'   => ['data-provide' => 'datepicker', 'data-language' => $this->locale]
            ])
            ->add('coefficient', TextType::class, ['label' => 'label.coefficient', 'help' => 'help.coefficient'])
            ->add('commentaire', TextType::class, ['label' => 'label.commentaire'])
            ->add('matiere', EntityType::class, array(
                'class'         => Matiere::class,
                'label'         => 'label.evaluation_matiere',
                'choice_label'  => 'libelle',
                'query_builder' => function(MatiereRepository $matiereRepository) {
                    return $matiereRepository->findBySemestreBuilder($this->semestre);
                },
                'required'      => true,
                'expanded'      => false,
                'multiple'      => false,
                'disabled'      => $this->matiereDisabled
            ))
            ->add('typeGroupe', EntityType::class, array(
                'class'         => TypeGroupe::class,
                'label'         => 'label.evaluation_type_groupe',
                'choice_label'  => 'libelle',
                'query_builder' => function(TypeGroupeRepository $typeGroupeRepository) {
                    return $typeGroupeRepository->findBySemestreBuilder($this->semestre);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => false,
            ))
            ->add('personnelAutorise', EntityType::class, array(
                'class'         => Personnel::class,
                'help'          => 'help.personnelAutorise',
                'label'         => 'label.evaluation_personnelAutorise',
                'choice_label'  => 'display',
                'query_builder' => function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findByDepartementBuilder($this->departement);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => true
            ))//->add('parent')
        ;

        if ($this->import === true) {
            $builder->add('fichier_import', FileType::class, ['mapped' => false]);
        }
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Evaluation::class,
            'departement'          => null,
            'semestre'           => null,
            'import'             => null,
            'matiereDisabled'    => null,
            'translation_domain' => 'form',
            'locale'             => 'fr'

        ]);
    }
}
