<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/DiplomeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/10/2022 15:14
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use App\Entity\ApcParcours;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\TypeDiplome;
use App\Form\Type\EntityCompleteType;
use App\Form\Type\YesNoType;
use App\Repository\ApcParcoursRepository;
use App\Repository\DiplomeRepository;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class DiplomeType.
 */
class DiplomeType extends AbstractType
{
    private Departement $departement;
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $builder
            ->add('type_diplome', EntityType::class, [
                'class' => TypeDiplome::class,
                'choice_label' => 'libelle',
                'label' => 'label.type_diplome',
            ])
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle',
            ])
            ->add('sigle', TextType::class, [
                'label' => 'label.sigle',
            ])
            ->add('logoFile', VichFileType::class, [
                'label' => 'label.logoFilePartenaire',
                'help' => 'Si le diplôme est porté par plusieurs partenaire, vous pouvez ajouter son logo pour qu\'il apparaisse sur les documents.',
                'download_label' => 'apercu',
                'allow_delete' => false,
                'required' => false,
            ])
            ->add('parent', EntityCompleteType::class, [
                'class' => Diplome::class,
                'query_builder' => fn (DiplomeRepository $diplomeRepository) => $diplomeRepository->findParentBuilder($this->departement),
                'choice_label' => 'display',
                'required' => false,
                'label' => 'label.diplome_parent',
            ])
            ->add('responsable_diplome', EntityCompleteType::class, [
                'class' => Personnel::class,
                'query_builder' => static fn (PersonnelRepository $personnelRepository) => $personnelRepository->findAllOrder(),
                'choice_label' => 'display',
                'label' => 'label.responsable_diplome',
            ])

            ->add('apcParcours', EntityCompleteType::class, [
                'class' => ApcParcours::class,
                'query_builder' => static fn (ApcParcoursRepository $apcParcoursRepository) => $apcParcoursRepository->findAllBuilder(),
                'choice_label' => 'libelle',
                'required' => false,
                'label' => 'label.parcours',
                'help' => 'label.parcours_help',
            ])

            ->add('assistant_diplome', EntityCompleteType::class, [
                'class' => Personnel::class,
                'query_builder' => static fn (PersonnelRepository $personnelRepository) => $personnelRepository->findAllOrder(),
                'choice_label' => 'display',
                'label' => 'label.assistant_diplome',
            ])
            ->add('anneeUniversitaire', EntityType::class, [
                'label' => 'label.annee_courante',
                'class' => AnneeUniversitaire::class,
                'choice_label' => 'displayAnneeUniversitaire',
            ])
            ->add('code_diplome', TextType::class, [
                'label' => 'label.code_diplome',
            ])
            ->add('code_version', TextType::class, [
                'label' => 'label.code_version',
            ])
            ->add('code_departement', TextType::class, [
                'label' => 'label.code_departement',
            ])
            ->add('opt_nb_jours_saisie', TextType::class, [
                'label' => 'label.opt_nb_jours_saisie',
            ])
            ->add(
                'opt_dilpome_decale',
                YesNoType::class,
                [
                    'label' => 'label.opt_dilpome_decale',
                ]
            )
            ->add(
                'opt_suppr_absence',
                YesNoType::class,
                [
                    'label' => 'label.opt_suppr_absence',
                ]
            )
            ->add(
                'opt_methode_calcul',
                ChoiceType::class,
                [
                    'choices' => Constantes::TAB_METHODE_CALCUL,
                    'expanded' => true,
                    'label' => 'label.opt_methode_calcul',
                    'choice_translation_domain' => 'form',
                ]
            )
            ->add(
                'opt_anonymat',
                YesNoType::class,
                [
                    'label' => 'label.opt_anonymat',
                ]
            )
            ->add(
                'opt_commentaires_releve',
                YesNoType::class,
                [
                    'label' => 'label.opt_commentaires_releve',
                ]
            )
            ->add(
                'opt_espace_perso_visible',
                YesNoType::class,
                [
                    'label' => 'label.opt_espace_perso_visible',
                ]
            )
            ->add('volume_horaire', TextType::class, [
                'label' => 'label.volume_horaire',
            ])
            ->add('code_celcat_departement', TextType::class, [
                'label' => 'label.code_celcat_departement',
            ]);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Diplome::class,
            'departement' => null,
            'translation_domain' => 'form',
        ]);
    }
}
