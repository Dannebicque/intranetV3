<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcRessourceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/03/2021 10:39
 */

namespace App\Form;

use App\Entity\ApcCompetence;
use App\Entity\ApcRessource;
use App\Entity\Semestre;
use App\Repository\ApcComptenceRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
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
            ->add('preRequis', TextareaType::class,
                ['label' => 'label.preRequis', 'attr' => ['rows' => 5], 'required' => false])
            ->add('description', TextareaType::class,
                ['attr' => ['rows' => 20, 'class' => 'tinyMce'], 'label' => 'label.description', 'required' => false])
            ->add('motsCles', TextType::class,
                [
                    'label' => 'label.motsCles',
                    'help' => 'Utilisez le ";" pour séparer les mots clés.',
                    'required' => false
                ])
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
                'choice_label' => 'nomCourt',
                'label' => 'label.nomCourt.competence',
                'expanded' => true,
                'multiple' => true,
                'query_builder' => function(ApcComptenceRepository $apcComptenceRepository) {
                    return $apcComptenceRepository->findByDiplomeBuilder($this->diplome);
                },
                'help' => 'Ajoutez les compétences couvertes par la ressource.',
            ])
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
