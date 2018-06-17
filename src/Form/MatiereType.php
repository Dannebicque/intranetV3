<?php

namespace App\Form;

use App\Entity\Matiere;
use App\Entity\Parcour;
use App\Entity\Ppn;
use App\Entity\Ue;
use App\Form\Type\YesNoType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MatiereType extends AbstractType
{
    protected $semestre;
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('codeMatiere', TextType::class, ['label' => 'label.code_matiere'])
            ->add('codeApogee', TextType::class, ['label' => 'label.code_apogee'])
            ->add('codeVersion', TextType::class, ['label' => 'label.code_version'])
            ->add('codeDepartement', TextType::class, ['label' => 'label.code_departement'])

            ->add('suspendu', YesNoType::class, [
                'label' => 'label.suspendu'
            ])
            ->add('cmPpn', TextType::class, ['label' => 'label.cm_ppn'])
            ->add('tdPpn', TextType::class, ['label' => 'label.td_ppn'])
            ->add('tpPpn', TextType::class, ['label' => 'label.tp_ppn'])
            ->add('cmFormation', TextType::class, ['label' => 'label.cm_formation'])
            ->add('tdFormation', TextType::class, ['label' => 'label.td_formation'])
            ->add('tpFormation', TextType::class, ['label' => 'label.tp_formation'])
            ->add('commentaire', TextareaType::class, ['label' => 'label.commentaire', 'required' => false])
            ->add('nbNotes', TextType::class, ['label' => 'label.nb_notes'])
            ->add('coefficient', TextType::class, ['label' => 'label.coefficient'])
            ->add('nbEcts', TextType::class, ['label' => 'label.nb_ects'])
            ->add('pac', YesNoType::class, [
                'label' => 'label.pac'
            ])
            ->add('objectifsModule', TextareaType::class, ['label' => 'label.objectifs_module', 'required' => false])
            ->add('competencesVisees', TextareaType::class,
                ['label' => 'label.competences_visees', 'required' => false])
            ->add('contenu', TextareaType::class, ['label' => 'label.contenu', 'required' => false])
            ->add('preRequis', TextareaType::class, ['label' => 'label.pre_requis', 'required' => false])
            ->add('modalites', TextareaType::class, ['label' => 'label.modalites', 'required' => false])
            ->add('prolongements', TextareaType::class, ['label' => 'label.prolongements', 'required' => false])
            ->add('motsCles', TextareaType::class, ['label' => 'label.mots_cles', 'required' => false])
            ->add('Ppn', EntityType::class, [
                'label'        => 'label.Ppn',
                'class'        => Ppn::class,
                'choice_label' => 'libelle'
            ])
            ->add('parcours', EntityType::class, [
                'label'        => 'label.parcours',
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
