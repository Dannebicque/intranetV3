<?php

namespace App\Form;

use App\Entity\Matiere;
use App\Entity\Parcour;
use App\Entity\Ppn;
use App\Entity\Ue;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MatiereType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $semestre = $options['semestre'];
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('code_apogee', TextType::class, ['label' => 'label.code_apogee'])
            ->add('code_version', TextType::class, ['label' => 'label.code_version'])
            ->add('code_departement', TextType::class, ['label' => 'label.code_departement'])
            ->add('code_matiere', TextType::class, ['label' => 'label.code_matiere'])
            ->add('cm_ppn', TextType::class, ['label' => 'label.cm_ppn'])
            ->add('td_ppn', TextType::class, ['label' => 'label.td_ppn'])
            ->add('tp_ppn', TextType::class, ['label' => 'label.tp_ppn'])
            ->add('cm_formation', TextType::class, ['label' => 'label.cm_formation'])
            ->add('td_formation', TextType::class, ['label' => 'label.td_formation'])
            ->add('tp_formation', TextType::class, ['label' => 'label.tp_formation'])
            ->add('commentaire', TextareaType::class, ['label' => 'label.commentaire'])
            ->add('nb_notes', TextType::class, ['label' => 'label.nb_notes'])
            ->add('coefficient', TextType::class, ['label' => 'label.coefficient'])
            ->add('nb_ects', TextType::class, ['label' => 'label.nb_ects'])
            ->add('pac', ChoiceType::class, [
                'label'                     => 'label.pac',
                'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                'choice_translation_domain' => 'form',
                'expanded'                  => true
            ])
            ->add('objectifs_module', TextareaType::class, ['label' => 'label.objectifs_module', 'required' => false])
            ->add('competences_visees', TextareaType::class,
                ['label' => 'label.competences_visees', 'required' => false])
            ->add('contenu', TextareaType::class, ['label' => 'label.contenu', 'required' => false])
            ->add('pre_requis', TextareaType::class, ['label' => 'label.pre_requis', 'required' => false])
            ->add('modalites', TextareaType::class, ['label' => 'label.modalites', 'required' => false])
            ->add('prolongements', TextareaType::class, ['label' => 'label.prolongements', 'required' => false])
            ->add('mots_cles', TextareaType::class, ['label' => 'label.mots_cles', 'required' => false])
            ->add('Ppn', EntityType::class, [
                'label'        => 'label.Ppn',
                'class'        => Ppn::class,
                'choice_label' => 'libelle'
            ])
            ->add('parcours', EntityType::class, [
                'label'        => 'label.libelle',
                'class'        => Parcour::class,
                'choice_label' => 'parcours',
                'required'     => false
            ])
            ->add('ue', EntityType::class, [
                'label'        => 'label.ue',
                'class'        => Ue::class,
                'choice_label' => 'libelle'
            ])//todo: filtrer les UE
        ;
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws \Symfony\Component\OptionsResolver\Exception\AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Matiere::class,
            'semestre'           => null,
            'translation_domain' => 'form'

        ]);
    }
}
