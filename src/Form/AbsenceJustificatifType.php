<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/AbsenceJustificatifType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/05/2021 14:39
 */

namespace App\Form;

use App\Entity\AbsenceJustificatif;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

class AbsenceJustificatifType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('dateDebut', DateType::class, ['label' => 'label.date_debut'])
            ->add('heureDebut', TimeType::class, ['label' => 'label.heure_debut'])
            ->add('dateFin', DateType::class, ['label' => 'label.date_fin'])
            ->add('heureFin', TimeType::class, ['label' => 'label.heure_fin'])
            ->add('motif', TextType::class, ['label' => 'label.motif'])
            ->add('fichierFile', VichFileType::class, [
                'required' => false,
                'label' => 'label.fichier',
                'download_label' => 'label.apercu',
                'allow_delete' => false,
                'help' => 'Le justificatif ne peut être qu\'une convocation officielle ou un certificat médical',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => AbsenceJustificatif::class,
            'translation_domain' => 'form',
        ]);
    }
}
