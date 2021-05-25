<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/CovidAttestationEtudiantType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/05/2021 16:35
 */

namespace App\Form;

use App\Entity\CovidAttestationEtudiant;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Groupe;
use App\Repository\DiplomeRepository;
use App\Repository\GroupeRepository;
use Carbon\Carbon;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\DatepickerType;
use Umbrella\CoreBundle\Form\Entity2Type;

class CovidAttestationEtudiantType extends AbstractType
{
    protected ?Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->departement = $options['departement'];
        $date = new Carbon();

        $builder
            ->add('diplome', EntityType::class, [
                'class' => Diplome::class,
                'required' => true,
                'choice_label' => 'libelle',
                'expanded' => true,
                'query_builder' => function(DiplomeRepository $diplomeRepository) {
                    return $diplomeRepository->findByDepartementBuilder($this->departement);
                },
                'label' => 'Diplôme concerné par votre demande',
            ])
            ->add('dateDebut', DatepickerType::class, [
                'label' => 'Date du début de la période',
                'data' => $date->addDays(2),

            ])
            ->add('dateFin', DatepickerType::class, [
                'label' => 'Date de fin de la période',
                'data' => $date->addDays(2),
                'help' => 'Merci de ne pas dépasser un délai d\'une semaine',
            ])
            ->add('groupes', Entity2Type::class, [
                'label' => 'Choisissez des groupes présents',
                'help' => 'Indiquez les groupes présents à l\'IUT sur le créneau indiqué ci-après.',
                'expanded' => false,
                'multiple' => true,
                'class' => Groupe::class,
                'choice_label' => 'displaySemestre',
                'query_builder' => function(GroupeRepository $groupeRepository) {
                    return $groupeRepository->findByDepartementSemestreActifBuilder($this->departement);
                },
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => CovidAttestationEtudiant::class,
            'translation_domain' => 'form',
            'departement'        => null,
        ]);
    }
}
