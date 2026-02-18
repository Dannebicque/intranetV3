<?php

/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/StageRapportType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2026 10:38
 */

namespace App\Form;

use App\Entity\StageRapport;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Callback;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Context\ExecutionContextInterface;
use Vich\UploaderBundle\Form\Type\VichFileType;

class StageRapportType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titreRapport', TextType::class, ['label' => 'Titre du rapport'])
            ->add('groupeEntreprise', TextType::class, ['label' => 'Si votre entreprise fait partie d\'un groupe, indiquez-le ici', 'required' => false])
            ->add('resumeRapport', TextareaType::class, ['label' => 'Résumé de votre rapport', 'attr' => ['rows' => 10, 'minlength' => 150], 'help' => 'Minimum 150 caractères', 'constraints' => [new Length(['min' => 150])]])
            ->add('motsCles', TextareaType::class, ['label' => 'Mots clés', 'help' => 'Au moins 3 mots clés, séparés par une virgule (,)'])
            ->add('motsCles', TextareaType::class, ['label' => 'Mots clés', 'help' => 'Au moins 3 mots clés, séparés par une virgule (,)'])
            ->add('confidentialite', YesNoType::class, ['label' => 'Confidentialité de votre rapport de stage'])
            ->add('documentFile', VichFileType::class, [
                'label' => 'Fichier du rapport',
                'required' => false,
                'allow_delete' => false,
                'constraints' => [
                    new File([
                        'mimeTypes' => ['application/pdf', 'application/x-pdf'],
                        'mimeTypesMessage' => 'Veuillez téléverser un fichier au format PDF.',
                    ]),
                ],
            ])
            ->add('lienFichier', TextType::class, [
                'label' => 'Lien vers le téléchargement du rapport',
                'required' => false,
                'attr' => ['maxlength' => 255, 'rows' => 3, 'placeholder' => 'https://...'],
                'help' => 'Assurez vous que le lien soit valide et accessible durant au moins 60 jours',
                'constraints' => [
                    new Length(['min' => 20, 'minMessage' => 'Le lien doit contenir au moins {{ limit }} caractères.']),
                    new Regex(['pattern' => '/^https?:\\/\\//', 'message' => 'Le lien doit commencer par http:// ou https://']),
                ],
            ])
            ->add('valideAntiPlagiat', CheckboxType::class, ['mapped' => false, 'label' => 'Je certifie que le rapport n\'est pas un plagiat.',]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => StageRapport::class,
            'constraints' => [
                new Callback($this->validate(...)),
            ],
        ]);
    }

    public function validate($data, ExecutionContextInterface $context): void
    {
        $hasFile = null !== $data->getDocumentFile();
        $hasLink = !empty($data->getLienFichier());

        if (!$hasFile && !$hasLink) {
            $context->buildViolation('Vous devez fournir soit un fichier PDF, soit un lien de téléchargement.')
                ->atPath('lienFichier')
                ->addViolation();
        }
    }
}
