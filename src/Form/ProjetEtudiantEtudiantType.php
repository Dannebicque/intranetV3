<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ProjetEtudiantEtudiantType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\Form;

use App\Entity\Etudiant;
use App\Entity\ProjetEtudiant;
use App\Entity\Semestre;
use App\Form\Type\YesNoType;
use App\Repository\EtudiantRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjetEtudiantEtudiantType extends AbstractType
{
    protected ?Semestre $semestre = null;
    //todo: faire un input avec une zone jour/mois/heure : Développer un composant ? Commenter lier deux champs d'entité avec ?
    //https://getbootstrap.com/docs/5.1/forms/input-group/#buttons-with-dropdowns

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];

        $builder
            ->add('organisme', EntrepriseType::class)
            ->add('sujet', TextareaType::class, ['label' => 'label.sujet'])
            ->add('activitesConfiees', TextareaType::class, ['label' => 'label.activitesConfiees'])
            ->add('etudiants', EntityType::class, [
                'class' => Etudiant::class,
                'choice_label' => 'displayPr',
                'query_builder' => fn(EtudiantRepository $etudiantRepository) => $etudiantRepository->findBySemestreBuilder($this->semestre),
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('tempComplet', YesNoType::class)
            ->add('duree', IntegerType::class,
                ['label' => 'label.duree', 'help' => 'durée du projet en jour ou en semaine sur la période'])
            ->add('uniteDuree', ChoiceType::class, [
                'choices' => [
                    ProjetEtudiant::DUREE_HEURE => ProjetEtudiant::DUREE_HEURE,
                    ProjetEtudiant::DUREE_JOUR => ProjetEtudiant::DUREE_JOUR,
                ],
                'expanded' => true,
                'label' => 'label.uniteduree',
                'help' => 'Choisir si la durée est exprimée en nombre de jour ou en heure par semaine',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ProjetEtudiant::class,
            'translation_domain' => 'form',
            'semestre' => null,
        ]);
    }
}
