<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/PpnImportType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Form;

use App\Entity\Ppn;
use App\Repository\PpnRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class PpnImportType
 * @package App\Form
 */
class PpnImportType extends AbstractType
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
            ->add('ppn', EntityType::class, [
                'choice_label'  => 'libelle',
                'class'         => Ppn::class,
                'query_builder' => function(PpnRepository $ppnRepository) {
                    return $ppnRepository->findByDepartementBuilder($this->departement);
                },
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
            'departement'        => null
        ]);
    }
}
