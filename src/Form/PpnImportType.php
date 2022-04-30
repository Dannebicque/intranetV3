<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/PpnImportType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/05/2021 18:33
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
