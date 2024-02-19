<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursStep1Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2024 14:41
 */

namespace App\Components\PlanCours\Form;

use App\Entity\Personnel;
use App\Entity\PlanCours;
use App\Form\Type\FloatType;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursStep1Type extends AbstractType
{
    private mixed $previsionnel;
    private mixed $anneeUniversitaire;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->previsionnel = $options['previsionnel'];
        $this->anneeUniversitaire = $options['anneeUniversitaire'];

        $builder
            ->add('responsable', EntityType::class, [
                'class' => Personnel::class,
                'choice_label' => 'displayPr',
                'label' => 'Auteur/Responsable : ',
                'required' => true,
                //   'attr' => ['disabled' => true],
            ])
            ->add('intervenants', EntityType::class, [
                'class' => Personnel::class,
                'choice_label' => 'displayPr',
                'query_builder' => fn(PersonnelRepository $repo
                ) => $repo->findPersonnelByPrevisionnelBuilder($this->previsionnel, $this->anneeUniversitaire),
                'expanded' => true,
                'label' => 'Intervenants :',
                'required' => false,
                'multiple' => true,
            ])
            ->add('nbNotes', IntegerType::class, ['label' => 'Nombre de notes'])
            ->add('cmPrevu', FloatType::class, [
                'label' => 'Nb heures CM prévues :',
                'help' => 'Par défaut rappel de la valeur du PN, mais modifiable si vous ne faite qu\'une partie du module',
            ])
            ->add('tdPrevu', FloatType::class, [
                'label' => 'Nb heures TD prévues :',
                'help' => 'Par défaut rappel de la valeur du PN, mais modifiable si vous ne faite qu\'une partie du module',
            ])
            ->add('tpPrevu', FloatType::class, [
                'label' => 'Nb heures TP prévues :',
                'help' => 'Par défaut rappel de la valeur du PN, mais modifiable si vous ne faite qu\'une partie du module',
            ])
            ->add('bibliographie', TextareaType::class, [
                'label' => 'Bibliographie/sitographie de référence :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('commentaires_step1', TextareaType::class, [
                'label' => 'Commentaire libre :',
                'help' => 'Commentaire libre sur le plan de cours pour cette étape 1',
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
