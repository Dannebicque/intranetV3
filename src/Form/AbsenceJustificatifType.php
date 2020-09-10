<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/AbsenceJustificatifType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 10/09/2020 11:32

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
            ->add('dateDebut', DateType::class, ['label' => 'label.date_debut', 'widget' => 'single_text'])
            ->add('heureDebut', TimeType::class, ['label' => 'label.heure_debut', 'widget' => 'single_text'])
            ->add('dateFin', DateType::class, ['label' => 'label.date_fin', 'widget' => 'single_text'])
            ->add('heureFin', TimeType::class, ['label' => 'label.heure_fin', 'widget' => 'single_text'])
            ->add('motif', TextType::class, ['label' => 'label.motif'])
            ->add('fichierFile', VichFileType::class, [
                'required'       => false,
                'label'          => 'label.fichier',
                'download_label' => 'label.apercu',
                'allow_delete'   => false,
                'help'           => 'Le justificitif ne peut être qu\'une convocation officielle ou un certificat médicale'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => AbsenceJustificatif::class,
            'translation_domain' => 'form'
        ]);
    }
}
