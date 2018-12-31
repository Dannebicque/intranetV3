<?php

namespace App\Form;

use App\Entity\Formation;
use App\Entity\StagePeriode;
use App\Entity\StagePeriodeOffre;
use App\Repository\StagePeriodeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

class StagePeriodeOffreType extends AbstractType
{
    /** @var Formation */
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
            ->add('entreprise', TextType::class, ['label' => 'label.entreprise'])
            ->add('ville', TextType::class, ['label' => 'label.ville'])
            ->add('documentFile', VichFileType::class, [
                'required'       => false,
                'label'          => 'label.fichier',
                'download_label' => 'label.apercu',
                'allow_delete'   => false
            ])
            ->add('stagePeriodes', EntityType::class, array(
                'class'         => StagePeriode::class,
                'label'         => 'label.stagePeriodes',
                'choice_label'  => 'libelle',
                'query_builder' => function(StagePeriodeRepository $stagePeriodeRepository) {
                    return $stagePeriodeRepository->findByFormationBuilder($this->formation,
                        $this->formation->getAnneeCourante());
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => true
            ));

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => StagePeriodeOffre::class,
            'formation'          => null,
            'translation_domain' => 'form'
        ]);
    }
}
