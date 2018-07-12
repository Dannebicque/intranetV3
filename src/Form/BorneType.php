<?php

namespace App\Form;

use App\Entity\Borne;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Form\Type\ChoiceIconType;
use App\Form\Type\YesNoType;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class BorneType
 * @package App\Form
 */
class BorneType extends AbstractType
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
            ->add('icone', ChoiceType::class, [
                'attr'        => ['data-provide' => 'selectpicker'],
                'label'       => 'label.icone',
                'choices'     => Borne::ICONES,
                'choice_attr' => function ($choiceValue, $key, $value) {
                    // adds a class like attending_yes, attending_no, etc
                    return ['data-icon' => Borne::ICONES[$key] . ' mr-2'];
                },
            ])
            ->add('couleur', TextType::class, [
                'label' => 'label.couleur',
            ])
            ->add('message', TextareaType::class, [
                'label' => 'label.message',
            ])
            ->add('url', TextType::class, [
                'label'    => 'label.url',
                'required' => false
            ])
            ->add('dateDebutPublication', DateTimeType::class, [
                'label' => 'label.dateDebutPublication',
            ])
            ->add('dateFinPublication', DateTimeType::class, [
                'label' => 'label.dateFinPublication',
            ])
            ->add('visible', YesNoType::class,
                [
                    'label'                     => 'label.visible'
                ])
            ->add('semestres', EntityType::class, array(
                'class'         => Semestre::class,
                'label'         => 'label.semestres_date',
                'choice_label'  => 'libelle',
                'query_builder' => function (SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByFormationBuilder($this->formation);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => true
            ));
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Borne::class,
            'formation'          => null,
            'translation_domain' => 'form'
        ]);
    }
}
