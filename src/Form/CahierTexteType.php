<?php

namespace App\Form;

use App\Entity\CahierTexte;
use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class CahierTexteType
 * @package App\Form
 */
class CahierTexteType extends AbstractType
{
    private $departement;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        //Todo: gérer par diplôme ?

        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle',
            ])
            ->add('description', TextareaType::class, [
                'label' => 'label.description',
            ])
            ->add('dateRetour', DateTimeType::class, [
                'label' => 'label.dateRetour',
            ])
            ->add('semestre', EntityType::class, array(
                'class'         => Semestre::class,
                'label'         => 'label.semestre',
                'choice_label'  => 'libelle',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDepartementBuilder($this->departement);
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
            'data_class'         => CahierTexte::class,
            'departement'          => null,
            'translation_domain' => 'form'
        ]);
    }
}
