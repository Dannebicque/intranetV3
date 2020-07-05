<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/PersonnelProfilType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Form;

use App\Entity\Personnel;
use App\Form\Type\CiviliteType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class PersonnelProfilType
 * @package App\Form
 */
class PersonnelProfilType extends AbstractType
{
    private $locale;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->locale = $options['locale'];

        $builder
            ->add('civilite', CiviliteType::class, [
                'label' => 'label.civilite'
            ])
            ->add('nom', TextType::class, ['label' => 'label.nom'])
            ->add('prenom', TextType::class, ['label' => 'label.prenom'])
            ->add('mail_univ', TextType::class, ['label' => 'label.mail_univ'])
            ->add('site_univ', TextType::class, ['label' => 'label.site_univ', 'required' => false])
            ->add('mail_perso', TextType::class, ['label' => 'label.mail_perso', 'required' => false])
            ->add('site_perso', TextType::class, ['label' => 'label.site_perso', 'required' => false])
            ->add('date_naissance', DateType::class, [
                'label'  => 'label.date_naissance',
                'format' => 'dd/MM/yyyy',
                'widget' => 'single_text',
                'html5'  => false,
                'attr'   => ['data-provide' => 'datepicker', 'data-language' => $this->locale]
            ])
            ->add(
                'numero_harpege',
                TextType::class,
                ['label' => 'label.numero_harpege', 'disabled' => true, 'help' => 'Si erreur contacté les RH']
            )
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
                'label'          => 'label.cv',
                'required'       => false,
                'download_label' => 'label.apercu',
                'allow_delete'   => false
            ])
            ->add('photoFile', VichFileType::class, [
                'label'          => 'label.photo',
                'required'       => false,
                'download_label' => 'label.apercu',
                'allow_delete'   => false
            ]);
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
            'translation_domain' => 'form',
            'locale'             => 'fr'

        ]);
    }
}
