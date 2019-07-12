<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/StagePeriodeOffreType.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/17/19 8:51 AM
 */

namespace App\Form;

use App\Entity\Departement;
use App\Entity\StagePeriode;
use App\Entity\StagePeriodeOffre;
use App\Repository\StagePeriodeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

class StagePeriodeOffreType extends AbstractType
{
    /** @var Departement */
    private $departement;
    private $annee;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $this->annee = $options['annee'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('entreprise', TextType::class, ['label' => 'label.entreprise'])
            ->add('ville', TextType::class, ['label' => 'label.ville'])
            ->add('documentFile', VichFileType::class, [
                'required'       => false,
                'label'          => 'label.fichier',
                'download_label' => 'label.apercu',
                'allow_delete'   => false
            ])
            ->add('stagePeriodes', EntityType::class, array(
                'class'         => StagePeriode::class,
                'label'         => 'label.stagePeriodes',
                'choice_label'  => 'libelle',
                'query_builder' => function(StagePeriodeRepository $stagePeriodeRepository) {
                    return $stagePeriodeRepository->findByDepartementBuilder($this->departement,
                        $this->annee);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => true
            ));

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => StagePeriodeOffre::class,
            'departement'          => null,
            'annee'          => null,
            'translation_domain' => 'form'
        ]);
    }
}
