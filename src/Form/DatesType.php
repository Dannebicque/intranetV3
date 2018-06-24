<?php

namespace App\Form;

use App\Entity\Date;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class DatesType
 * @package App\Form
 */
class DatesType extends AbstractType
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
            ->add('libelle', TextType::class, [
                'label' => 'label.titre_date',
            ])
            ->add('texte', TextType::class, [
                'label'    => 'label.texte_date',
                'required' => false
            ])
            ->add('dateDebut', DateType::class, ['widget' => 'single_text', 'label' => 'label.date_debut'])
            ->add('heureDebut', TimeType::class, ['widget' => 'single_text', 'label' => 'label.heure_debut'])
            ->add('dateFin', DateType::class, ['widget' => 'single_text', 'label' => 'label.date_fin'])
            ->add('heureFin', TimeType::class, ['widget' => 'single_text', 'label' => 'label.heure_fin'])
            ->add('lieu', TextType::class, [
                'label' => 'label.lieu_date',
            ])
            ->add('allday', YesNoType::class, [
                'label' => 'label.allday'
            ])
            ->add('qui', ChoiceType::class, [
                'label'    => 'label.qui_concerne',
                'expanded' => true,
                'multiple' => false,
                'choices'  => [Date::QUI_ETUDIANT => Date::QUI_ETUDIANT, Date::QUI_PERSONNEL => Date::QUI_PERSONNEL]
            ])
            ->add('type', ChoiceType::class, [
                'label'    => 'label.typedate',
                'expanded' => true,
                'multiple' => false,
                'choices'  => [
                    Date::TYPE_STAGE      => Date::TYPE_STAGE,
                    Date::TYPE_SOUTENANCE => Date::TYPE_SOUTENANCE,
                    Date::TYPE_REUNION    => Date::TYPE_REUNION,
                    Date::TYPE_PROJET     => Date::TYPE_PROJET,
                    Date::TYPE_COMMISSION => Date::TYPE_COMMISSION,
                    Date::TYPE_AUTRE      => Date::TYPE_AUTRE,
                    Date::TYPE_RENTREE    => Date::TYPE_RENTREE
                ]
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
