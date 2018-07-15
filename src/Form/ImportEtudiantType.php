<?php

namespace App\Form;

use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class ImportEtudiantType
 * @package App\Form
 */
class ImportEtudiantType extends AbstractType
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
            ->add('semestre', EntityType::class, [
                    'class'         => Semestre::class,
                    'choice_label'  => 'libelle',
                    'query_builder' => function(SemestreRepository $semestreRepository) {
                        return $semestreRepository->findByFormationBuilder($this->formation);
                    },
                    'label'         => 'label.semestre'
                ]
            )
            ->add('annee', ChoiceType::class, [
                'label' => 'label.annee_entree',
                //'mapped' => false
            ])
            ->add('fichier', VichFileType::class, [
                'label' => 'label.fichier',
                //'mapped' => false
            ]);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => null,
            'translation_domain' => 'form',
            'formation'          => null
        ]);
    }
}
