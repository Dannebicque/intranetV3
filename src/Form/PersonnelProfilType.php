<?php

namespace App\Form;

use App\Entity\Personnel;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Vich\UploaderBundle\Form\Type\VichImageType;

/**
 * Class PersonnelProfilType
 * @package App\Form
 */
class PersonnelProfilType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, ['label' => 'label.nom'])
            ->add('prenom', TextType::class, ['label' => 'label.prenom'])
            ->add('mail_univ', TextType::class, ['label' => 'label.mail_univ'])
            ->add('site_univ', TextType::class, ['label' => 'label.site_univ'])
            ->add('mail_perso', TextType::class, ['label' => 'label.mail_perso'])
            ->add('site_perso', TextType::class, ['label' => 'label.site_perso'])
            ->add('sexe', ChoiceType::class, [
                'label'                     => 'label.sexe',
                'choices'                   => ['choice.femme' => 'F', 'choice.homme' => 'H'],
                'choice_translation_domain' => 'form',
                'expanded'                  => true
            ])
            ->add('date_naissance', DateType::class, ['label' => 'label.date_naissance'])
            ->add('numero_harpege', TextType::class,
                ['label' => 'label.numero_harpege', 'disabled' => true, 'help' => 'Si erreur contacté les RH'])
            ->add('statut', YesNoType::class, [
                'label' => 'label.statut',
            ])
            ->add('poste_interne', TextType::class, ['label' => 'label.poste_interne'])
            ->add('tel_bureau', TextType::class, ['label' => 'label.tel_bureau'])
            ->add('tel1', TextType::class, ['label' => 'label.tel1'])
            ->add('tel2', TextType::class, ['label' => 'label.tel2'])
            ->add('responsabilites', TextareaType::class, ['label' => 'label.responsabilites'])
            ->add('domaines', TextareaType::class, ['label' => 'label.domaines'])
            ->add('remarque', TextareaType::class, ['label' => 'label.remarque'])
            ->add('signature', TextareaType::class, ['label' => 'label.signature'])
            ->add('entreprise', TextType::class, ['label' => 'label.entreprise'])
            ->add('bureau1', TextType::class, ['label' => 'label.bureau1'])
            ->add('bureau2', TextType::class, ['label' => 'label.bureau2'])
            ->add('adresse', AdresseType::class, ['label' => 'label.adresse'])
            ->add('cvFile', VichFileType::class, [
                'label'          => 'label.cv',
                'required'       => false,
                'download_label' => 'label.apercu',
                'allow_delete'   => false
            ])
            ->add('photoFile', VichImageType::class, [
                'label'          => 'label.photo',
                'required'       => false,
                'download_label' => 'label.apercu',
                'allow_delete'   => false
            ])
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
            'data_class'         => Personnel::class,
            'translation_domain' => 'form'

        ]);
    }
}
