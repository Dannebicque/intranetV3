<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ProjetEtudiantEtudiantType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/09/2020 08:50

namespace App\Form;

use App\Entity\Etudiant;
use App\Entity\ProjetEtudiant;
use App\Form\Type\YesNoType;
use App\Repository\EtudiantRepository;
use App\Repository\PersonnelRepository;
use Svg\Tag\Text;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjetEtudiantEtudiantType extends AbstractType
{
    protected $semestre;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->semestre = $options['semestre'];

        $builder
            ->add('organisme', EntrepriseType::class)
            ->add('sujet', TextareaType::class)
            ->add('activitesConfiees', TextareaType::class)
            ->add('etudiants', EntityType::class, [
                'class'         => Etudiant::class,
                'choice_label'  => 'displayPr',
                'query_builder' => function(EtudiantRepository $etudiantRepository) {
                    return $etudiantRepository->findBySemestreBuilder($this->semestre);
                },
                'multiple'      => true,
                'expanded'      => true
            ])
            ->add('tempComplet', YesNoType::class)
            ->add('duree')
            ->add('uniteDuree');
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
