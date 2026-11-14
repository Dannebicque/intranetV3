<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/PpnImportType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/11/2026 21:13
 */

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Ppn;
use App\Repository\PpnRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

/**
 * Class PpnImportType.
 */
class PpnImportType extends AbstractType
{
    private Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('ppn', EntityType::class, [
                'choice_label' => 'libelle',
                'class' => Ppn::class,
                'query_builder' => fn (PpnRepository $ppnRepository) => $ppnRepository->findByDepartementBuilder($this->departement),
            ])
            ->add('fichier', FileType::class, [
                'label' => 'fichier',
                'constraints' => [
                    new File([
                        'maxSize' => '10M',
                        'mimeTypes' => [
                            'text/csv',
                            'text/plain',
                            'application/vnd.ms-excel',
                            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        ],
                        'mimeTypesMessage' => 'Seuls les fichiers CSV ou Excel (.xlsx, .xls) sont acceptés.',
                    ]),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
            'translation_domain' => 'form',
            'departement' => null,
        ]);
    }
}
