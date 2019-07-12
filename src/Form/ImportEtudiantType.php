<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/ImportEtudiantType.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/17/19 8:51 AM
 */

namespace App\Form;

use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class ImportEtudiantType
 * @package App\Form
 */
class ImportEtudiantType extends AbstractType
{
    private $departement;
    private $semestre;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $this->semestre = $options['semestre'];

        $builder
            ->add(
                'semestre',
                EntityType::class,
                [
                    'class'         => Semestre::class,
                    'choice_label'  => 'libelle',
                    'query_builder' => function(SemestreRepository $semestreRepository) {
                        return $semestreRepository->findByDepartementBuilder($this->departement);
                    },
                    'label'         => 'label.semestre',
                    'data' => $this->semestre
                ]
            )
            ->add('annee', ChoiceType::class, [
                'label' => 'label.annee_entree',
                //'mapped' => false
            ])
            ->add('fichier', VichFileType::class, [
                'label' => 'label.fichier',
                //'mapped' => false
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
            'departement'          => null,
            'semestre'          => null
        ]);
    }
}
