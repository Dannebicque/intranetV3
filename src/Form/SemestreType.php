<?php

namespace App\Form;

use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SemestreType extends AbstractType
{
    protected $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle'
            ])
            ->add('code_apogee', TextType::class, [
                'label' => 'label.code_apogee'
            ])
            ->add('code_version', TextType::class, [
                'label' => 'label.code_version'
            ])
            ->add('code_departement', TextType::class, [
                'label' => 'label.code_departement'
            ])
            ->add('couleur', ColorType::class, [
                'label' => 'label.couleur'
            ])
            ->add('ordre_annee', ChoiceType::class, [
                'label'    => 'label.ordre_annee',
                'choices'  => [1 => 1, 2 => 2],
                'expanded' => true
            ])
            ->add('ordre_lmd', ChoiceType::class, [
                'label'   => 'label.ordre_lmd',
                'choices' => range(1, 16)
            ])
            ->add('actif', ChoiceType::class,
                [
                    'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                    'choice_translation_domain' => 'form',
                    'expanded'                  => true,
                    'label'                     => 'label.actif'
                ])
            ->add('nb_groupes_td', ChoiceType::class, [
                'label'   => 'label.ordre_lmd',
                'choices' => range(1, 10)
            ])
            ->add('nb_groupes_TP', ChoiceType::class, [
                'label'   => 'label.ordre_lmd',
                'choices' => range(1, 20)
            ])
            ->add('opt_mail_releve', ChoiceType::class,
                [
                    'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                    'choice_translation_domain' => 'form',
                    'expanded'                  => true,
                    'label'                     => 'label.opt_mail_releve'
                ])
            ->add('opt_destinataire_mail_releve', EntityType::class, [
                'class'        => Personnel::class,
                'choice_label' => 'display',
                'label'        => 'label.opt_destinataire_mail_releve'
            ])
            ->add('opt_evaluation_modifiable', ChoiceType::class,
                [
                    'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                    'choice_translation_domain' => 'form',
                    'expanded'                  => true,
                    'label'                     => 'label.opt_evaluation_modifiable'
                ])
            ->add('opt_mail_modification_note', ChoiceType::class,
                [
                    'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                    'choice_translation_domain' => 'form',
                    'expanded'                  => true,
                    'label'                     => 'label.opt_mail_modification_note'
                ])
            ->add('opt_destinataire_mail_modification_note', EntityType::class, [
                'class'        => Personnel::class,
                'choice_label' => 'display',
                'label'        => 'label.opt_destinataire_mail_modification_note'
            ])
            ->add('opt_evaluation_visible', ChoiceType::class,
                [
                    'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                    'choice_translation_domain' => 'form',
                    'expanded'                  => true,
                    'label'                     => 'label.opt_evaluation_visible'
                ])
            ->add('opt_penalite_absence', ChoiceType::class,
                [
                    'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                    'choice_translation_domain' => 'form',
                    'expanded'                  => true,
                    'label'                     => 'label.opt_penalite_absence'
                ])
            ->add('opt_mail_absence_responsable', ChoiceType::class,
                [
                    'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                    'choice_translation_domain' => 'form',
                    'expanded'                  => true,
                    'label'                     => 'label.opt_mail_absence_responsable'
                ])
            ->add('opt_destinataire_mail_absence_responsable', EntityType::class, [
                'class'        => Personnel::class,
                'choice_label' => 'display',
                'label'        => 'label.opt_destinataire_mail_absence_responsable'
            ])
            ->add('opt_mail_absence_etudiant', ChoiceType::class,
                [
                    'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                    'choice_translation_domain' => 'form',
                    'expanded'                  => true,
                    'label'                     => 'label.opt_mail_absence_etudiant'
                ])
            ->add('opt_point_penalite_absence', ChoiceType::class,
                [
                    'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                    'choice_translation_domain' => 'form',
                    'expanded'                  => true,
                    'label'                     => 'label.opt_point_penalite_absence'
                ])
            ->add('precedent', EntityType::class, [
                'class'         => Semestre::class,
                'required'      => false,
                'choice_label'  => 'display',
                'query_builder' => function (SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label'         => 'label.semestre_precedent'
            ])
            ->add('suivant', EntityType::class, [
                'class'         => Semestre::class,
                'required'      => false,
                'choice_label'  => 'display',
                'query_builder' => function (SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label'         => 'label.semestre_suivant'
            ])
            ->add('decale', EntityType::class, [
                'class'         => Semestre::class,
                'required'      => false,
                'choice_label'  => 'display',
                'query_builder' => function (SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label'         => 'label.semestre_decale'
            ]);
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
