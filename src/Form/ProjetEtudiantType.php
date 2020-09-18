<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ProjetEtudiantType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/09/2020 08:50

namespace App\Form;

use App\Entity\ProjetEtudiant;
use Svg\Tag\Text;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjetEtudiantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $semestre = $options['semestre'];

        $builder
            ->add('organisme', TextType::class)
            ->add('etudiants', EntityType::class)
            ->add('tempComplet')
            ->add('duree')
            ->add('uniteDuree')
            ->add('sujet')
            ->add('activitesConfiees')
            ->add('etatProjet')
            ->add('dateAutorise')
            ->add('projetPeriode');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => ProjetEtudiant::class,
            'translation_domain' => 'form',
            'semestre'           => null

        ]);
    }
}
