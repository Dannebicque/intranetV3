<?php

namespace App\Form;

use App\Entity\Diplome;
use App\Repository\DiplomeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class ImportPrevisionnelType
 * @package App\Form
 */
class ImportPrevisionnelType extends AbstractType
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
            ->add('diplome', EntityType::class, [
                    'class'         => Diplome::class,
                    'choice_label'  => 'display',
                    'query_builder' => function (DiplomeRepository $diplomeRepository) {
                        return $diplomeRepository->findByFormationBuilder($this->formation);
                    },
                    'label'         => 'label.diplome'
                ]
            )
            ->add('annee', ChoiceType::class, [
                'label' => 'label.opt_annee_previsionnel',
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
