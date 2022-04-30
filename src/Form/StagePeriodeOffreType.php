<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/StagePeriodeOffreType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
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
    private Departement $departement;
    private int $annee;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $this->annee = $options['annee'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'libelle'])
            ->add('entreprise', TextType::class, ['label' => 'entreprise'])
            ->add('ville', TextType::class, ['label' => 'ville'])
            ->add('documentFile', VichFileType::class, [
                'required' => false,
                'label' => 'fichier',
                'download_label' => 'apercu',
                'allow_delete' => false,
            ])
            ->add('stagePeriodes', EntityType::class, [
                'class' => StagePeriode::class,
                'label' => 'stagePeriodes',
                'choice_label' => 'libelle',
                'query_builder' => fn (StagePeriodeRepository $stagePeriodeRepository) => $stagePeriodeRepository->findByDepartementBuilder($this->departement,
                    $this->annee),
                'required' => true,
                'expanded' => true,
                'multiple' => true,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => StagePeriodeOffre::class,
            'departement' => null,
            'annee' => null,
            'translation_domain' => 'form',
        ]);
    }
}
