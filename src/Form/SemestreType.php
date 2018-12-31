<?php

namespace App\Form;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Form\Type\YesNoType;
use App\Repository\AnneeRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class SemestreType
 * @package App\Form
 */
class SemestreType extends AbstractType
{
    /** @var Diplome */
    protected $diplome;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle'
            ])
            ->add('annee', EntityType::class, [
                'class'         => Annee::class,
                'required'      => true,
                'choice_label'  => 'libelle',
                'expanded'      => true,
                'query_builder' => function(AnneeRepository $anneeRepository) {
                    return $anneeRepository->findByDiplomeBuilder($this->diplome);
                },
                'label'         => 'label.annee'
            ])
            ->add('codeApogee', TextType::class, [
                'label' => 'label.code_apogee'
            ])
            ->add('codeVersion', TextType::class, [
                'label' => 'label.code_version'
            ])
            ->add('codeDepartement', TextType::class, [
                'label' => 'label.code_departement'
            ])
            ->add('couleur', ColorType::class, [
                'label' => 'label.couleur'
            ])
            ->add('ordreAnnee', ChoiceType::class, [
                'label'              => 'label.ordre_annee',
                'choices'            => [1 => 1, 2 => 2],
                'expanded'           => true,
                'translation_domain' => 'form'
            ])
            ->add('moisDebut', ChoiceType::class, [
                'label'              => 'label.mois_debut',
                'choices'            => [
                    'Janvier'   => 1,
                    'Février'   => 2,
                    'Mars'      => 3,
                    'Avril'     => 4,
                    'Mai'       => 5,
                    'Juin'      => 6,
                    'Juillet'   => 7,
                    'Août'      => 8,
                    'Septembre' => 9,
                    'Octobre'   => 10,
                    'Novembre'  => 11,
                    'Décembre'  => 12
                ],
                'expanded'           => false,
                'translation_domain' => 'form'
            ])
            ->add('ordreLmd', ChoiceType::class, [
                'label'   => 'label.ordre_lmd',
                'choices' => range(1, 16)
            ])
            ->add(
                'actif',
                YesNoType::class,
                [
                    'label' => 'label.actif'
                ]
            )
            ->add('nbGroupesTd', ChoiceType::class, [
                'label'   => 'label.nbGroupesTd',
                'choices' => range(1, 10)
            ])
            ->add('nbGroupesTP', ChoiceType::class, [
                'label'   => 'label.nbGroupesTP',
                'choices' => range(1, 20)
            ])
            ->add(
                'optMailReleve',
                YesNoType::class,
                [

                    'label' => 'label.opt_mail_releve'
                ]
            )
            ->add('optDestMailReleve', EntityType::class, [
                'class'        => Personnel::class,
                'choice_label' => 'display',
                'label'        => 'label.opt_destinataire_mail_releve',
                'required'     => false
            ])
            ->add(
                'optEvaluationModifiable',
                YesNoType::class,
                [

                    'label' => 'label.opt_evaluation_modifiable'
                ]
            )
            ->add(
                'optMailModificationNote',
                YesNoType::class,
                [

                    'label' => 'label.opt_mail_modification_note'
                ]
            )
            ->add('optDestMailModifNote', EntityType::class, [
                'class'        => Personnel::class,
                'choice_label' => 'display',
                'label'        => 'label.opt_destinataire_mail_modification_note',
                'required'     => false
            ])
            ->add(
                'optEvaluationVisible',
                YesNoType::class,
                [

                    'label' => 'label.opt_evaluation_visible'
                ]
            )
            ->add(
                'optPenaliteAbsence',
                YesNoType::class,
                [

                    'label' => 'label.opt_penalite_absence'
                ]
            )
            ->add(
                'optPointPenaliteAbsence',
                TextType::class,
                [
                    'label'    => 'label.opt_point_penalite_absence',
                    'required' => false,
                ]
            )
            ->add(
                'optMailAbsenceResp',
                YesNoType::class,
                [

                    'label' => 'label.opt_mail_absence_responsable'
                ]
            )
            ->add('optDestMailAbsenceResp', EntityType::class, [
                'class'        => Personnel::class,
                'choice_label' => 'display',
                'label'        => 'label.opt_destinataire_mail_absence_responsable',
                'required'     => false
            ])
            ->add(
                'optMailAbsenceEtudiant',
                YesNoType::class,
                [

                    'label' => 'label.opt_mail_absence_etudiant'
                ]
            )
            ->add(
                'optPenaliteAbsence',
                YesNoType::class,
                [

                    'label' => 'label.opt_point_penalite_absence'
                ]
            )
            ->add('precedent', EntityType::class, [
                'class'         => Semestre::class,
                'required'      => false,
                'choice_label'  => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label'         => 'label.semestre_precedent'
            ])
            ->add('suivant', EntityType::class, [
                'class'         => Semestre::class,
                'required'      => false,
                'choice_label'  => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label'         => 'label.semestre_suivant'
            ]);
        if ($this->diplome->isOptDilpomeDecale()) {
            $builder->add('decale', EntityType::class, [
                'class'         => Semestre::class,
                'required'      => false,
                'choice_label'  => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label'         => 'label.semestre_decale'
            ]);
        }
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws \Symfony\Component\OptionsResolver\Exception\AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Semestre::class,
            'diplome'            => null,
            'translation_domain' => 'form'

        ]);
    }
}
