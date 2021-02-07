<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/DocumentType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Form;

use App\Entity\Document;
use App\Entity\Semestre;
use App\Entity\TypeDocument;
use App\Repository\SemestreRepository;
use App\Repository\TypeDocumentRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class DocumentType.
 */
class DocumentType extends AbstractType
{
    private $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle', 'help' => '100 caractères maximum'])
            ->add('description', TextareaType::class, ['label' => 'label.description', 'required' => false])
            ->add('documentFile', VichFileType::class, [
                'required'       => false,
                'label'          => 'label.fichier',
                'download_label' => 'label.apercu',
                'allow_delete'   => false,
            ])
            ->add(
                'type_document',
                EntityType::class,
                [
                    'class'         => TypeDocument::class,
                    'choice_label'  => 'libelle',
                    'label'         => 'label.type_document',
                    'query_builder' => function(TypeDocumentRepository $typeDocumentRepository) {
                        return $typeDocumentRepository->findByDepartementBuilder($this->departement);
                    },
                ]
            )
            ->add('semestres', EntityType::class, [
                'class'         => Semestre::class,
                'label'         => 'label.semestres_document',
                'choice_label'  => 'libelle',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDepartementBuilder($this->departement);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => true,
            ]);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Document::class,
            'departement'        => null,
            'translation_domain' => 'form',
        ]);
    }
}
