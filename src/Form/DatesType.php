<?php

namespace App\Form;

use App\Entity\Date;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DatesType extends AbstractType
{
    private $formation;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->formation = $options['formation'];

        $builder
            ->add('titre', TextType::class, [
                'label' => 'label.titre_date',
            ])
            ->add('texte', TextType::class, [
                'label' => 'label.texte_date',
            ])
            ->add('dateDebut', DateType::class, ['widget' => 'single_text', 'label' => 'label.date_debut'])
            ->add('heureDebut', TimeType::class, ['widget' => 'single_text', 'label' => 'label.heure_debut'])
            ->add('dateFin', DateType::class, ['widget' => 'single_text', 'label' => 'label.date_fin'])
            ->add('heureFin', TimeType::class, ['widget' => 'single_text', 'label' => 'label.heure_fin'])
            ->add('lieu', TextType::class, [
                'label' => 'label.lieu_date',
            ])
            ->add('allday', TextType::class, [
                'label' => 'label.allday',
            ])
            ->add('qui', TextType::class, [
                'label' => 'label.qui_concerne',
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
     *
     * @throws \Symfony\Component\OptionsResolver\Exception\AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Date::class,
            'formation'          => null,
            'translation_domain' => 'form'
        ]);
    }
}
