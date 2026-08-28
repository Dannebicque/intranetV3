<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/EtudiantSemestreAnneeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2026 10:24
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use App\Entity\EtudiantSemestreAnnee;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EtudiantSemestreAnneeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('anneeUniversitaire', EntityType::class, [
                'class' => AnneeUniversitaire::class,
                'label' => 'Année Universitaire',
                'choice_label' => 'libelle',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => EtudiantSemestreAnnee::class,
        ]);
    }
}
