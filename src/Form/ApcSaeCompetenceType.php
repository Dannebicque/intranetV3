<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ApcSaeCompetenceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/07/2022 17:10
 */

namespace App\Form;

use App\Entity\ApcCompetence;
use App\Entity\ApcSaeCompetence;
use App\Entity\Diplome;
use App\Repository\ApcComptenceRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcSaeCompetenceType extends AbstractType
{
    protected ?Diplome $diplome = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('competence', EntityType::class, [
                'class' => ApcCompetence::class,
                'choice_label' => 'nomCourt',
                'query_builder' => fn (ApcComptenceRepository $apcComptenceRepository) => $apcComptenceRepository->findByReferentielBuilder($this->diplome->getReferentiel()),
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ApcSaeCompetence::class,
            'translation_domain' => 'form',
            'diplome' => null,
        ]);
    }
}
