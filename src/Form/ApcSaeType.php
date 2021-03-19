<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcSaeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/03/2021 21:30
 */

namespace App\Form;

use App\Entity\ApcCompetence;
use App\Entity\ApcSae;
use App\Entity\Semestre;
use App\Repository\ApcComptenceRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcSaeType extends AbstractType
{
    protected $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('codeSae', TextType::class, ['label' => 'label.codeSae'])
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('description', TextareaType::class,
                ['attr' => ['class' => 'tinyMce'], 'label' => 'label.description', 'required' => false])
            ->add('heuresCM', TextType::class, ['label' => 'label.heuresCM'])
            ->add('heuresTD', TextType::class, ['label' => 'label.heuresTD'])
            ->add('heuresTP', TextType::class, ['label' => 'label.heuresTP'])
            ->add('heuresProjet', TextType::class, ['label' => 'label.heuresPtut'])
            ->add('livrables', TextareaType::class,
                ['label' => 'label.livrables', 'attr' => ['class' => 'tinyMce'], 'required' => false])
            ->add('semestre', EntityType::class, [
                'class' => Semestre::class,
                'attr' => ['class'=> 'semestreSae'],
                'required' => true,
                'choice_label' => 'display',
                'query_builder' => function (SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label' => 'label.semestre',
                'expanded' => true,
            ])
            ->add('competences', EntityType::class, [
                'class' => ApcCompetence::class,
                'choice_label' => 'nomCourt',
                'label' => 'label.nomCourt.competence',
                'attr' => ['class' => 'competencesSae'],
                'expanded' => true,
                'multiple' => true,
                'query_builder' => function(ApcComptenceRepository $apcComptenceRepository) {
                    return $apcComptenceRepository->findByDiplomeBuilder($this->diplome);
                },
                'help' => 'Ajoutez les compétences couvertes par la SAÉ.',
            ])
            ->add('exemples', TextareaType::class,
                ['label' => 'label.livrables', 'required' => false])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ApcSae::class,
            'diplome' => null,
            'translation_domain' => 'form',
        ]);
    }
}
