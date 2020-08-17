<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ImportEtudiantType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/08/2020 22:44

namespace App\Form;

use App\Entity\Departement;
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
    private Departement $departement;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $semestre = $options['semestre'];

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
                    'data'          => $semestre
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
            'departement'        => null,
            'semestre'           => null
        ]);
    }
}
