<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/EvaluationsPersonnelsType.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 5/17/19 4:09 PM
 */

namespace App\Form;

use App\Entity\Evaluation;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class EvaluationsType
 */
class EvaluationsPersonnelsType extends AbstractType
{
    /** @var Semestre */
    protected $semestre;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->semestre = $options['semestre'];

        $builder
            ->add('personnelAutorise', EntityType::class, array(
                'class'         => Personnel::class,
                'choice_label'  => 'display',
                'multiple'      => true,
                'expanded'      => true,
                'query_builder' => function (PersonnelRepository $repo) {
                    return $repo->findBySemestreBuilder($this->semestre);
                },
            ));
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Evaluation::class,
            'semestre'   => null,
        ));
    }
}
