<?php

namespace App\Form;

use App\Entity\Groupe;
use App\Entity\TypeGroupe;
use App\Repository\TypeGroupeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class GroupeType
 * @package App\Form
 */
class GroupeType extends AbstractType
{
    private $semestre;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('codeApogee', TextType::class, ['label' => 'label.codeApogee'])
            ->add('typeGroupe', EntityType::class, array(
                'class'         => TypeGroupe::class,
                'label'         => 'label.typeGroupe',
                'choice_label'  => 'libelle',
                'query_builder' => function (TypeGroupeRepository $typeGroupeRepository) {
                    return $typeGroupeRepository->findBySemestreBuilder($this->semestre);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => false
            ));
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Groupe::class,
            'semestre'   => null,
        ]);
    }
}
