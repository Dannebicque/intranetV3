<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/EvaluationsPersonnelsType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 11:50
 */

namespace App\Form;

use App\Entity\Evaluation;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Form\Type\EntityCompleteType;
use App\Repository\PersonnelRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class EvaluationsType.
 */
class EvaluationsPersonnelsType extends AbstractType
{
    protected ?Semestre $semestre;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];

        $builder
            ->add('personnelAutorise', EntityCompleteType::class, [
                'class' => Personnel::class,
                'choice_label' => 'display',
                'multiple' => true,
                'expanded' => true,
                'query_builder' => function (PersonnelRepository $repo) {
                    return $repo->findBySemestreBuilder($this->semestre);
                },
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Evaluation::class,
            'semestre' => null,
        ]);
    }
}
