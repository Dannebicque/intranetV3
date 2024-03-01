<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ProjetEtudiantType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/02/2024 22:46
 */

namespace App\Form;

use App\Entity\Etudiant;
use App\Entity\ProjetEtudiant;
use App\Form\stage\EntrepriseType;
use App\Form\Type\YesNoType;
use App\Repository\EtudiantRepository;
use Doctrine\Common\Collections\Collection;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjetEtudiantType extends AbstractType
{
    private Collection $semestres;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestres = $options['semestres'];

        $builder
            ->add('organisme', EntrepriseType::class, ['label' => 'label.organisme', 'withResponsable' => true])
            ->add('sujet', TextareaType::class, ['label' => 'sujet'])
            ->add('activitesConfiees', TextareaType::class, ['label' => 'activitesConfiees'])
            ->add('etudiants', EntityType::class, [
                'class' => Etudiant::class,
                'choice_label' => 'displayPr',
                'query_builder' => fn (EtudiantRepository $etudiantRepository) => $etudiantRepository->findBySemestresBuilder($this->semestres),
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('tempComplet', YesNoType::class)
            ->add('duree', TextType::class,
                ['label' => 'duree', 'help' => 'durée du projet en jour ou en semaine sur la période'])
            ->add('uniteDuree', ChoiceType::class, [
                'choices' => [
                    ProjetEtudiant::DUREE_HEURE => ProjetEtudiant::DUREE_HEURE,
                    ProjetEtudiant::DUREE_JOUR => ProjetEtudiant::DUREE_JOUR,
                ],
                'expanded' => true,
                'label' => 'uniteduree',
                'help' => 'Choisir si la durée est exprimée en nombre de jour ou en heure par semaine',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ProjetEtudiant::class,
            'translation_domain' => 'form',
            'semestres' => null,
        ]);
    }
}
