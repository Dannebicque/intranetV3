<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcRessourceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/03/2021 18:49
 */

namespace App\Form;

use App\Entity\ApcApprentissageCritique;
use App\Entity\ApcCompetence;
use App\Entity\ApcRessource;
use App\Entity\Semestre;
use App\Repository\ApcApprentissageCritiqueRepository;
use App\Repository\ApcComptenceRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcRessourceType extends AbstractType
{
    protected $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('codeRessource', TextType::class, ['label' => 'label.codeRessource'])
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('preRequis', TextType::class, ['label' => 'label.preRequis'])
            ->add('description', TextareaType::class, ['attr' => ['rows' => 20], 'label' => 'label.description'])
            ->add('motsCles', TextType::class, ['label' => 'label.motsCles'])
            ->add('heuresCM', TextType::class, ['label' => 'label.heuresCM'])
            ->add('heuresTD', TextType::class, ['label' => 'label.heuresTD'])
            ->add('heuresTP', TextType::class, ['label' => 'label.heuresTP'])
            ->add('semestre', EntityType::class, [
                'class' => Semestre::class,
                'required' => true,
                'choice_label' => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label' => 'label.semestre',
                'expanded' => true,
            ])
            ->add('competences', EntityType::class, [
                'class' => ApcCompetence::class,
                'choice_label'=> 'nomCourt',
                'label' => 'label.nomCourt.competence',
                'expanded' => true,
                'multiple' => true,
                'query_builder' => function (ApcComptenceRepository $apcComptenceRepository) {
                    return $apcComptenceRepository->findByDiplomeBuilder($this->diplome);
                },
                'help' => 'Ajoutez les compétences couvertes par la ressource.',
            ])
//            ->add('apcRessourceApprentissageCritiques', CollectionType::class, [
//                'entry_type' => ApcRessourceApprentissageCritiqueType::class,
//                'entry_options' => ['label' => false, 'diplome' => $this->diplome],
//                'allow_add' => true,
//                'prototype' => true,
//                'allow_delete' => true,
//                'label' => 'Apprentissage(s) Critique(s) couvert(s) par la ressource',
//                'by_reference' => false,
//                'attr' => [
//                    'class' => 'selector-apcRessourceApprentissageCritique',
//                ],
//                'help' => 'Ajoutez les apprentissages critiques couverts par la ressource.',
//            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ApcRessource::class,
            'diplome' => null,
            'translation_domain' => 'form'
        ]);
    }
}
