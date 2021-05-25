<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcRessourceApprentissageCritiqueType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/05/2021 16:35
 */

namespace App\Form;

use App\Entity\ApcApprentissageCritique;
use App\Entity\ApcRessourceApprentissageCritique;
use App\Repository\ApcApprentissageCritiqueRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcRessourceApprentissageCritiqueType extends AbstractType
{
    protected $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $this->diplome = $options['diplome'];

        $builder
            ->add('apprentissageCritique', EntityType::class, [
                'class' => ApcApprentissageCritique::class,
                'choice_label'=> 'libelle',
                'query_builder' => function (ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository) {
                    return $apcApprentissageCritiqueRepository->findByDiplomeBuilder($this->diplome);
                },
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ApcRessourceApprentissageCritique::class,
            'translation_domain' => 'form',
            'diplome' => null
        ]);
    }
}
