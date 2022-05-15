<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/TypeDocumentType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/05/2022 14:37
 */

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Document;
use App\Entity\TypeDocument;
use App\Repository\TypeDocumentRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class TypeDocumentType.
 */
class TypeDocumentType extends AbstractType
{
    private string $source;
    private ?Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->source = $options['source'];
        $this->departement = $options['departement'];
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('parent', EntityType::class, [
                'class' => TypeDocument::class,
                'choice_label' => 'libelle',
                'query_builder' => function (TypeDocumentRepository $typeDocumentRepository) {
                    return $typeDocumentRepository->getParents($this->source, $this->departement);
                },
                'label' => 'label.type_document_parent', 'help' => 'help.type_document_parent', 'required' => false, ]);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TypeDocument::class,
            'translation_domain' => 'form',
            'source' => Document::DOCUMENT,
            'departement' => null,
        ]);
    }
}
