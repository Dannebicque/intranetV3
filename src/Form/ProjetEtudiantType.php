<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ProjetEtudiantType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Form;

use App\Entity\Etudiant;
use App\Entity\ProjetEtudiant;
use App\Form\Type\YesNoType;
use App\Repository\EtudiantRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjetEtudiantType extends AbstractType
{
    private $semestre;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->semestre = $options['semestre'];

        $builder
            ->add('organisme', EntrepriseType::class)
            ->add('sujet', TextareaType::class, ['label' => 'label.sujet'])
            ->add('activitesConfiees', TextareaType::class, ['label' => 'label.activitesConfiees'])
            ->add('etudiants', EntityType::class, [
                'class'         => Etudiant::class,
                'choice_label'  => 'displayPr',
                'query_builder' => function(EtudiantRepository $etudiantRepository) {
                    return $etudiantRepository->findBySemestreBuilder($this->semestre);
                },
                'multiple'      => true,
                'expanded'      => true,
            ])
            ->add('tempComplet', YesNoType::class)
            ->add('duree', TextType::class,
                ['label' => 'label.duree', 'help' => 'durée du projet en jour ou en semaine sur la période'])
            ->add('uniteDuree', ChoiceType::class, [
                'choices'  => [
                    ProjetEtudiant::DUREE_HEURE => ProjetEtudiant::DUREE_HEURE,
                    ProjetEtudiant::DUREE_JOUR  => ProjetEtudiant::DUREE_JOUR,
                ],
                'expanded' => true,
                'label'    => 'label.uniteduree',
                'help'     => 'Choisir si la durée est exprimée en nombre de jour ou en heure par semaine',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => ProjetEtudiant::class,
            'translation_domain' => 'form',
            'semestre'           => null,
        ]);
    }
}
