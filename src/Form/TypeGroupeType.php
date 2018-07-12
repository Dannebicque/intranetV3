<?php

namespace App\Form;

use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class TypeGroupeType
 * @package App\Form
 */
class TypeGroupeType extends AbstractType
{
    private $formation;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->formation = $options['formation'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('codeApogee', TextType::class, ['label' => 'label.codeApogee', 'required' => false])
            ->add('type', ChoiceType::class, [
                'choices'            => [
                    TypeGroupe::TYPE_GROUPE_CM => 'CM',
                    TypeGroupe::TYPE_GROUPE_TD => 'TD',
                    TypeGroupe::TYPE_GROUPE_TP => 'TP'
                ],
                'label'              => 'label.type_groupe',
                'translation_domain' => 'form'
            ])
            ->add('semestre', EntityType::class, array(
                'class'         => Semestre::class,
                'label'         => 'label.semestre',
                'choice_label'  => 'libelle',
                'query_builder' => function (SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByFormationBuilder($this->formation);
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
            'data_class'         => TypeGroupe::class,
            'formation'          => null,
            'translation_domain' => 'form'
        ]);
    }
}
