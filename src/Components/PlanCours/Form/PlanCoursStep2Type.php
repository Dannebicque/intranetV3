<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursStep2Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 15:55
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCours;
use App\Form\PlanCoursSequenceType;
use App\Form\Type\CollectionStimulusType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

class PlanCoursStep2Type extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('planCoursSequences', CollectionStimulusType::class, [
                'entry_type' => PlanCoursSequenceType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'label' => false,
            ])
            ->add('fichierPlanCoursFile', VichFileType::class, [
                'label' => 'Fichier contenant le plan de cours :',
                'help' => 'Uniquement des fichiers PDF (pdf), Word (doc, docx), texte (txt, md), PowerPoint (ppt, pptx), Excel (xls, xlsx)',
                'required' => false,
            ])
            ->add('saisiePlanCours', TextareaType::class, [
                'label' => 'Saisie dans un format libre de votre plan de cours :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('commentaires_step2', TextareaType::class, [
                'label' => 'Commentaire libre :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PlanCours::class,
            'anneeUniversitaire' => null,
            'previsionnel' => null,
        ]);
    }
}
