<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/DocumentType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 08:25
 */

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Document;
use App\Entity\Semestre;
use App\Entity\TypeDocument;
use App\Form\Type\TypeDestinataireType;
use App\Repository\SemestreRepository;
use App\Repository\TypeDocumentRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Dropzone\Form\DropzoneType;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class DocumentType.
 */
class DocumentType extends AbstractType
{
    private ?Departement $departement = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle',
                'help' => '100 caractères maximum',
                'attr' => ['maxlength' => 100],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'label.description',
                'attr' => ['rows' => 6],
                'required' => false,
            ])
            ->add('documentFile', DropzoneType::class, [
                'mapped' => false,
                'label' => 'label.fichier',
                'attr' => [
                    'placeholder' => 'Glissez-déposez un fichier ici ou cliquez pour sélectionner un fichier',
                ],
            ]);

        if ('administration' === $options['source']) {
            $builder
                ->add('typeDestinataire', TypeDestinataireType::class, ['label' => 'label.typedestinataire'])
                ->add(
                    'type_document',
                    EntityType::class,
                    [
                        'class' => TypeDocument::class,
                        'choice_label' => 'libelle',
                        'label' => 'label.type_document',
                        'query_builder' => fn (TypeDocumentRepository $typeDocumentRepository
                        ) => $typeDocumentRepository->findByDepartementBuilder($this->departement),
                    ]
                )
                ->add('semestres', EntityType::class, [
                    'class' => Semestre::class,
                    'label' => 'label.semestres_document',
                    'choice_label' => 'libelle',
                    'query_builder' => fn (SemestreRepository $semestreRepository
                    ) => $semestreRepository->findByDepartementBuilder($this->departement),
                    'required' => true,
                    'expanded' => true,
                    'multiple' => true,
                ]);
        } else {
            $builder->add(
                'type_document',
                EntityType::class,
                [
                    'class' => TypeDocument::class,
                    'choice_label' => 'libelle',
                    'label' => 'label.type_document',
                    'query_builder' => fn (TypeDocumentRepository $typeDocumentRepository
                    ) => $typeDocumentRepository->findByOriginauxBuilder(),
                ]
            );
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Document::class,
            'departement' => null,
            'translation_domain' => 'form',
            'source' => 'administration',
        ]);
    }
}
