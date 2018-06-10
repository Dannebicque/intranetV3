<?php

namespace App\Form;

use App\Entity\Document;
use App\Entity\Semestre;
use App\Entity\TypeDocument;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

class DocumentType extends AbstractType
{
    private $formation;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->formation = $options['formation'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('description', TextareaType::class, ['label' => 'label.description'])
            ->add('documentFile', VichFileType::class, [
                'required' => false,
                'label' => 'label.fichier',
                'download_label' => 'label.apercu',
                'allow_delete' => false])
            ->add('type_document', EntityType::class,
                ['class' => TypeDocument::class, 'choice_label' => 'libelle','label' => 'label.type_document'])
            ->add('semestres', EntityType::class, array(
                'class'         => Semestre::class,
                'label' => 'label.semestres_document',
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
            'data_class' => Document::class,
            'formation'  => null,
            'translation_domain' => 'form'

        ]);
    }
}
