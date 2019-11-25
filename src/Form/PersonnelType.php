<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Form/PersonnelType.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Form;

use App\Entity\Personnel;
use App\Form\Type\CiviliteType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class PersonnelType
 * @package App\Form
 */
class PersonnelType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('civilite', CiviliteType::class, [
                'label'                     => 'label.civilite'
            ])
            ->add('nom', TextType::class, ['label' => 'label.nom'])
            ->add('prenom', TextType::class, ['label' => 'label.prenom'])
            ->add('date_naissance', BirthdayType::class, ['label' => 'label.date_naissance'])
            ->add('initiales', TextType::class, ['label' => 'label.initiales', 'required' => false])
            ->add('photoFile', VichFileType::class, ['label' => 'label.photo', 'required' => false])
            ->add('username', TextType::class, ['label' => 'label.username'])
            ->add('mail_univ', TextType::class, ['label' => 'label.mail_univ'])
            ->add('numero_harpege', TextType::class, ['label' => 'label.numero_harpege', 'required' => false])
            ->add('statut', ChoiceType::class, [
                'label'                     => 'label.statut',
                'choices'                   => [
                    'choice.mcf'       => 'MCF',
                    'choice.pr'        => 'PU',
                    'choice.prag'      => 'PRAG',
                    'choice.prce'      => 'PRCE',
                    'choice.vacataire' => 'PRO'
                ],
                'choice_translation_domain' => 'form',
                'expanded'                  => true
            ])
            ->add('nbHeuresService', TextType::class, ['label' => 'label.nbHeuresService'])

            ->add('site_univ', TextType::class, ['label' => 'label.site_univ', 'required' => false])
            ->add('mail_perso', TextType::class, ['label' => 'label.mail_perso', 'required' => false])
            ->add('site_perso', TextType::class, ['label' => 'label.site_perso', 'required' => false])


            ->add('poste_interne', TextType::class, ['label' => 'label.poste_interne', 'required' => false])
            ->add('tel_bureau', TextType::class, ['label' => 'label.tel_bureau', 'required' => false])
            ->add('tel1', TextType::class, ['label' => 'label.tel1', 'required' => false])
            ->add('tel2', TextType::class, ['label' => 'label.tel2', 'required' => false])
            ->add('responsabilites', TextareaType::class, ['label' => 'label.responsabilites', 'required' => false])
            ->add('domaines', TextareaType::class, ['label' => 'label.domaines', 'required' => false])
            ->add('remarque', TextareaType::class, ['label' => 'label.remarque', 'required' => false])
            ->add('signature', TextareaType::class, ['label' => 'label.signature', 'required' => false])
            ->add('entreprise', TextType::class, ['label' => 'label.entreprise', 'required' => false])
            ->add('bureau1', TextType::class, ['label' => 'label.bureau1', 'required' => false])
            ->add('bureau2', TextType::class, ['label' => 'label.bureau2', 'required' => false])
            ->add('adresse', AdresseType::class, ['label' => 'label.adresse', 'required' => false])
            ->add('cvFile', VichFileType::class, [
                'label'    => 'label.cv',
                'required' => false
            ])//->add('photo', VichImageType::class, ['label' => 'label.photo'])
        ;
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Personnel::class,
            'translation_domain' => 'form'

        ]);
    }
}
