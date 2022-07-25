<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ApcRessourceApprentissageCritiqueType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/07/2022 17:10
 */

namespace App\Form;

use App\Entity\ApcApprentissageCritique;
use App\Entity\ApcRessourceApprentissageCritique;
use App\Entity\Diplome;
use App\Repository\ApcApprentissageCritiqueRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcRessourceApprentissageCritiqueType extends AbstractType
{
    protected ?Diplome $diplome = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('apprentissageCritique', EntityType::class, [
                'class' => ApcApprentissageCritique::class,
                'choice_label' => 'libelle',
                'query_builder' => fn (ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository) => $apcApprentissageCritiqueRepository->findByReferentielBuilder($this->diplome->getReferentiel()),
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ApcRessourceApprentissageCritique::class,
            'translation_domain' => 'form',
            'diplome' => null,
        ]);
    }
}
