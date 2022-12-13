<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/StagePeriodeOffreType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/12/2022 20:35
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
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
    private AnneeUniversitaire $annee;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $this->annee = $options['annee'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('entreprise', TextType::class, ['label' => 'label.entreprise'])
            ->add('ville', TextType::class, ['label' => 'label.ville'])
            ->add('documentFile', VichFileType::class, [
                'required' => false,
                'label' => 'label.fichier',
                'download_label' => 'label.apercu',
                'allow_delete' => false,
            ])
            ->add('stagePeriodes', EntityType::class, [
                'class' => StagePeriode::class,
                'label' => 'label.stagePeriodes',
                'choice_label' => 'libelle',
                'query_builder' => fn(StagePeriodeRepository $stagePeriodeRepository
                ) => $stagePeriodeRepository->findByDepartementBuilder($this->departement,
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
