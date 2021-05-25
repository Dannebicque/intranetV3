<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/SemestreType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\Form;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\Ppn;
use App\Entity\Semestre;
use App\Form\Type\YesNoType;
use App\Repository\AnneeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PpnRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\Entity2Type;

/**
 * Class SemestreType.
 */
class SemestreType extends AbstractType
{
    /** @var Diplome */
    protected $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'libelle',
            ])
            ->add('codeElement', TextType::class, [
                'label' => 'code_element',
            ])
            ->add('annee', EntityType::class, [
                'class' => Annee::class,
                'required' => true,
                'choice_label' => 'libelle',
                'expanded' => true,
                'query_builder' => function(AnneeRepository $anneeRepository) {
                    return $anneeRepository->findByDiplomeBuilder($this->diplome);
                },
                'label' => 'annee',
            ])

            ->add('couleur', ColorType::class, [
                'label' => 'couleur',
            ])
            ->add('ordreAnnee', ChoiceType::class, [
                'label' => 'ordre_annee',
                'choices' => [1 => 1, 2 => 2],
                'expanded' => true,
                'translation_domain' => 'form',
            ])
            ->add('moisDebut', ChoiceType::class, [
                'label' => 'mois_debut',
                'choices' => [
                    'Janvier' => 1,
                    'Février' => 2,
                    'Mars' => 3,
                    'Avril' => 4,
                    'Mai' => 5,
                    'Juin' => 6,
                    'Juillet' => 7,
                    'Août' => 8,
                    'Septembre' => 9,
                    'Octobre'   => 10,
                    'Novembre'  => 11,
                    'Décembre'  => 12,
                ],
                'expanded'           => false,
                'translation_domain' => 'form',
            ])
            ->add('ordreLmd', ChoiceType::class, [
                'label' => 'ordre_lmd',
                'choices' => range(0, 16),
            ])
            ->add(
                'actif',
                YesNoType::class,
                [
                    'label' => 'actif',
                ]
            )
            ->add('nbGroupesCm', ChoiceType::class, [
                'label' => 'nbGroupesCm',
                'choices' => range(0, 10),
            ])
            ->add('nbGroupesTd', ChoiceType::class, [
                'label' => 'nbGroupesTd',
                'choices' => range(0, 10),
            ])
            ->add('nbGroupesTP', ChoiceType::class, [
                'label' => 'nbGroupesTP',
                'choices' => range(0, 20),
            ])
            ->add(
                'optMailReleve',
                YesNoType::class,
                [
                    'label' => 'opt_mail_releve',
                ]
            )
            ->add('optDestMailReleve', Entity2Type::class, [
                'class' => Personnel::class,
                'choice_label' => 'display',
                'label' => 'opt_destinataire_mail_releve',
                'required' => false,
                'query_builder' => static function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findAllOrder();
                },
            ])
            ->add(
                'optEvaluationModifiable',
                YesNoType::class,
                [
                    'label' => 'opt_evaluation_modifiable',
                ]
            )
            ->add(
                'optMailModificationNote',
                YesNoType::class,
                [
                    'label' => 'opt_mail_modification_note',
                ]
            )
            ->add('optDestMailModifNote', Entity2Type::class, [
                'class' => Personnel::class,
                'choice_label' => 'display',
                'label' => 'opt_destinataire_mail_modification_note',
                'required' => false,
                'query_builder' => static function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findAllOrder();
                },
            ])
            ->add(
                'optEvaluationVisible',
                YesNoType::class,
                [
                    'label' => 'opt_evaluation_visible',
                ]
            )
            ->add(
                'optPenaliteAbsence',
                YesNoType::class,
                [
                    'label' => 'opt_penalite_absence',
                ]
            )
            ->add(
                'optPointPenaliteAbsence',
                TextType::class,
                [
                    'label' => 'opt_point_penalite_absence',
                    'required' => false,
                ]
            )
            ->add(
                'optMailAbsenceResp',
                YesNoType::class,
                [
                    'label' => 'opt_mail_absence_responsable',
                ]
            )
            ->add('optDestMailAbsenceResp', Entity2Type::class, [
                'class' => Personnel::class,
                'choice_label' => 'display',
                'label' => 'opt_destinataire_mail_absence_responsable',
                'required' => false,
                'query_builder' => static function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findAllOrder();
                },
            ])
            ->add(
                'optMailAbsenceEtudiant',
                YesNoType::class,
                [
                    'label' => 'opt_mail_absence_etudiant',
                ]
            )
            ->add(
                'optPenaliteAbsence',
                YesNoType::class,
                [
                    'label' => 'opt_point_penalite_absence',
                ]
            )
            ->add('ppn_actif', EntityType::class, [
                'class' => Ppn::class,
                'required' => false,
                'choice_label' => 'libelle',
                'query_builder' => function(PpnRepository $ppnRepository) {
                    return $ppnRepository->findByDiplomeBuilder($this->diplome);
                },
                'label' => 'ppn_actif',
            ])
            ->add('precedent', EntityType::class, [
                'placeholder' => 'Choisir le semestre',
                'class' => Semestre::class,
                'required' => false,
                'choice_label' => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label' => 'semestre_precedent',
            ])
            ->add('suivant', EntityType::class, [
                'placeholder' => 'Choisir le semestre',
                'class' => Semestre::class,
                'required' => false,
                'choice_label' => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label' => 'semestre_suivant',
            ]);
        if ($this->diplome->isOptDilpomeDecale()) {
            $builder->add('decale', EntityType::class, [
                'placeholder' => 'Choisir le semestre',
                'class' => Semestre::class,
                'required' => false,
                'choice_label' => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label' => 'semestre_decale',
            ]);
        }
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Semestre::class,
            'diplome'            => null,
            'translation_domain' => 'form',
        ]);
    }
}
