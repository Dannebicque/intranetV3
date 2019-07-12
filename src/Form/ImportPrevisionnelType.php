<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/ImportPrevisionnelType.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 5/15/19 8:26 PM
 */

namespace App\Form;

use App\Entity\Diplome;
use App\Repository\DiplomeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class ImportPrevisionnelType
 * @package App\Form
 */
class ImportPrevisionnelType extends AbstractType
{
    private $departement;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add(
                'diplome',
                EntityType::class,
                [
                    'class'         => Diplome::class,
                    'choice_label'  => 'display',
                    'query_builder' => function(DiplomeRepository $diplomeRepository) {
                        return $diplomeRepository->findByDepartementBuilder($this->departement);
                    },
                    'label'         => 'label.diplome'
                ]
            )
            ->add('annee', ChoiceType::class, [
                'label' => 'label.opt_annee_previsionnel',
                'choices' => array_combine(
                    range(date('Y') - 2, date('Y') + 4),
                    range(date('Y') - 2, date('Y') + 4)
                ),
                'data' => date('Y')
            ])
            ->add('fichier', FileType::class, [
                'label' => 'label.fichier',

            ]);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => null,
            'translation_domain' => 'form',
            'departement'          => null
        ]);
    }
}
