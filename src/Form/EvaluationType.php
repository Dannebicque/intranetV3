<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/EvaluationType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/08/2020 10:14

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;
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
    private Departement $departement;
    private Semestre $semestre;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $locale = $options['locale'];
        $this->semestre = $options['semestre'];
        $import = $options['import'];
        $matiereDisabled = $options['matiereDisabled'];

        $builder
            ->add('libelle', TextType::class,
                ['label' => 'label.libelle_evaluation', 'help' => 'help.libelle_evaluation', 'required' => false])
            ->add('dateEvaluation', DateType::class, [
                'label'  => 'label.date_evaluation',
                'format' => 'dd/MM/yyyy',
                'widget' => 'single_text',
                'html5'  => false,
                'attr'   => ['data-provide' => 'datepicker', 'data-language' => $locale]
            ])
            ->add('coefficient', TextType::class, ['label' => 'label.coefficient', 'help' => 'help.coefficient'])
            ->add('commentaire', TextType::class, ['label' => 'label.commentaire', 'help' => 'help.commentaire_evaluation'])
            ->add('matiere', EntityType::class, [
                'class'         => Matiere::class,
                'label'         => 'label.evaluation_matiere',
                'choice_label'  => 'display',
                'query_builder' => function(MatiereRepository $matiereRepository) {
                    return $matiereRepository->findBySemestreBuilder($this->semestre);
                },
                'required'      => true,
                'expanded'      => false,
                'multiple'      => false,
                'disabled'      => $matiereDisabled
            ])
            ->add('typeGroupe', EntityType::class, [
                'class'         => TypeGroupe::class,
                'label'         => 'label.evaluation_type_groupe',
                'choice_label'  => 'libelle',
                'query_builder' => function(TypeGroupeRepository $typeGroupeRepository) {
                    return $typeGroupeRepository->findBySemestreBuilder($this->semestre);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => false,
            ])
            ->add('personnelAutorise', EntityType::class, [
                'class'         => Personnel::class,
                'help'          => 'help.personnelAutorise',
                'label'         => 'label.evaluation_personnelAutorise',
                'choice_label'  => 'display',
                'attr'          => ['class' => ''],
                'query_builder' => function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findByDepartementBuilder($this->departement);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => true
            ])//->add('parent')
        ;

        if ($import === true) {
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
            'departement'        => null,
            'semestre'           => null,
            'import'             => null,
            'matiereDisabled'    => null,
            'translation_domain' => 'form',
            'locale'             => 'fr'

        ]);
    }
}
