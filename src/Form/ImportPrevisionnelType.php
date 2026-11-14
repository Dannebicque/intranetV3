<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ImportPrevisionnelType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/11/2026 21:20
 */

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Diplome;
use App\Form\Type\YesNoType;
use App\Repository\DiplomeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

/**
 * Class ImportPrevisionnelType.
 */
class ImportPrevisionnelType extends AbstractType
{
    private ?Departement $departement = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $tab = [];
        foreach (range((int)date('Y') - 2, (int)date('Y') + 4) as $annee) {
            $tab[$annee . ' - ' . $annee + 1] = $annee;
        }

        $builder
            ->add(
                'diplome',
                EntityType::class,
                [
                    'class' => Diplome::class,
                    'choice_label' => 'display',
                    'query_builder' => fn(DiplomeRepository $diplomeRepository) => $diplomeRepository->findByDepartementBuilder($this->departement),
                    'label' => 'label.diplome',
                    'autocomplete' => 'on',
                ]
            )
            ->add('annee', ChoiceType::class, [
                'label' => 'label.opt_annee_previsionnel',
                'choices' => $tab,
                'data' => date('Y'),
            ])
            ->add('typeFichier', ChoiceType::class, [
                'label' => 'label.type_fichier',
                'choices' => [
                    'OMEGA (csv)' => 'omega_csv',
                    'OMEGA (xlsx)' => 'omega_xlsx',
                    'GMP (xlsx)' => 'gmp_xlsx',
                ],
            ])
            ->add('supprimerPrevisionnel', YesNoType::class, [
                'label' => 'label.supprimer_previsionnel',
            ])
            ->add('fichier', FileType::class, [
                'label' => 'label.fichier',
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
