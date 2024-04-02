<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/AbsenceJustificatifType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/04/2024 21:59
 */

namespace App\Form;

use App\Entity\AbsenceJustificatif;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Repository\EtudiantRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Vich\UploaderBundle\Form\Type\VichFileType;

class AbsenceJustificatifType extends AbstractType
{
    protected ?Semestre $semestre = null;
    protected ?string $role = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];
        $this->role = $options['role'];

        $builder
            ->add('dateDebut', DatePickerType::class, [
                'label' => 'date_debut',
                'constraints' => [
                    new NotBlank(),
                ],
            ])
            ->add('heureDebut', TimeType::class, [
                'label' => 'heure_debut',
                'constraints' => [
                    new NotBlank(),
                ],
            ])
            ->add('dateFin', DatePickerType::class, [
                'label' => 'date_fin',
                'constraints' => [
                    new NotBlank(),
                ],
            ])
            ->add('heureFin', TimeType::class, [
                'label' => 'heure_fin',
                'constraints' => [
                    new NotBlank(),
                ],
            ])
            ->add('motif', TextType::class, ['label' => 'motif'])
            ->add('fichierFile', VichFileType::class, [
                'required' => false,
                'label' => 'fichier',
                'download_label' => 'apercu',
                'allow_delete' => false,
                'help' => 'Le justificatif doit être une convocation officielle ou un certificat médical',
            ]);

        if ('admin' === $this->role) {
            $builder
                ->add('etudiant', EntityType::class, [
                    'label' => 'etudiant',
                    'class' => Etudiant::class,
                    'autocomplete' => true,
                    'choice_label' => 'display',
                    'query_builder' => fn (EtudiantRepository $etudiantRepository) => $etudiantRepository->findBySemestreBuilder($this->semestre),
                ])
                ->add('etat', ChoiceType::class, [
                    'choices' => AbsenceJustificatif::TAB_ETAT,
                    'label' => 'label.etat_justficatif',
                    'expanded' => true,
                ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => AbsenceJustificatif::class,
            'translation_domain' => 'form',
            'role' => null,
            'semestre' => null,
        ]);
    }
}
