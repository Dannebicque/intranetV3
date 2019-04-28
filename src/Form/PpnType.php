<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/PpnType.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Form;

use App\Entity\Diplome;
use App\Entity\Ppn;
use App\Repository\DiplomeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class PpnType
 * @package App\Form
 */
class PpnType extends AbstractType
{
    protected $departement;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('annee', TextType::class, ['label' => 'label.annee_sortie'])
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
            );
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Ppn::class,
            'departement'          => null,
            'translation_domain' => 'form'

        ]);
    }
}
