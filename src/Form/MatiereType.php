<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/MatiereType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/09/2024 10:32
 */

namespace App\Form;

use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Parcour;
use App\Entity\Ppn;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Form\Type\YesNoType;
use App\Repository\MatiereRepository;
use App\Repository\ParcourRepository;
use App\Repository\PpnRepository;
use App\Repository\SemestreRepository;
use App\Repository\UeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class MatiereType.
 */
class MatiereType extends AbstractType
{
    protected Diplome $diplome;

    /**
     * MatiereType constructor.
     */
    public function __construct(private readonly SemestreRepository $semestreRepository, private readonly UeRepository $ueRepository, private readonly ParcourRepository $parcourRepository, private readonly MatiereRepository $matiereRepository)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('codeMatiere', TextType::class, ['label' => 'label.code_matiere', 'attr' => ['maxlength' => 20], 'help' => 'Code de la matière. Maximum 20 caractères'])
            ->add('codeElement', TextType::class, ['label' => 'label.code_element', 'attr' => ['maxlength' => 20]])
            ->add('suspendu', YesNoType::class, [
                'label' => 'label.suspendu',
            ])
            ->add('mutualisee', YesNoType::class, ['label' => 'label.mutualisee'])
            ->add('cmPpn', TextType::class, ['label' => 'label.cm_ppn'])
            ->add('tdPpn', TextType::class, ['label' => 'label.td_ppn'])
            ->add('tpPpn', TextType::class, ['label' => 'label.tp_ppn'])
            ->add('cmFormation', TextType::class, ['label' => 'label.cm_formation', 'help' => 'help.mutualisee'])
            ->add('tdFormation', TextType::class, ['label' => 'label.td_formation'])
            ->add('tpFormation', TextType::class, ['label' => 'label.tp_formation'])
            ->add('commentaire', TextareaType::class, ['label' => 'label.commentaire', 'required' => false])
            ->add('nbNotes', TextType::class, ['label' => 'label.nb_notes'])
            ->add('coefficient', TextType::class, ['label' => 'label.coefficient'])
            ->add('nbEcts', TextType::class, ['label' => 'label.nb_ects'])
            ->add('pac', YesNoType::class, [
                'label' => 'label.pac',
            ])
            ->add('objectifsModule', TextareaType::class, ['label' => 'label.objectifs_module', 'required' => false])
            ->add(
                'competencesVisees',
                TextareaType::class,
                ['label' => 'label.competences_visees', 'required' => false]
            )
            ->add('contenu', TextareaType::class, ['label' => 'label.contenu', 'required' => false])
            ->add('preRequis', TextareaType::class, ['label' => 'label.pre_requis', 'required' => false])
            ->add('modalites', TextareaType::class, ['label' => 'label.modalites', 'required' => false])
            ->add('prolongements', TextareaType::class, ['label' => 'label.prolongements', 'required' => false])
            ->add('motsCles', TextareaType::class, ['label' => 'label.mots_cles', 'required' => false])
            ->add('Ppn', EntityType::class, [
                'label' => 'label.ppn',
                'class' => Ppn::class,
                'choice_label' => 'libelle',
                'query_builder' => fn (PpnRepository $ppnRepository) => $ppnRepository->findByDiplomeBuilder($this->diplome),
            ]);

        $builder->addEventListener(FormEvents::PRE_SET_DATA, [$this, 'onPreSetData']);
        $builder->addEventListener(FormEvents::PRE_SUBMIT, [$this, 'onPreSubmit']);
    }

    protected function addElements(FormInterface $form, Semestre $semestre = null): void
    {
        $form->add('semestre', EntityType::class, [
            'required' => true,
            'choice_label' => 'display',
            'data' => $semestre,
            'placeholder' => 'Choisir un semestre ...',
            'class' => Semestre::class,
            'mapped' => false,
        ]);

        $ues = null;
        $parcours = null;
        $matieres = null;

        if ($semestre) {
            $ues = $this->ueRepository->findBySemestreBuilder($semestre);
            $parcours = $this->parcourRepository->findBySemestreBuilder($semestre);
            $matieres = $this->matiereRepository->findBySemestreBuilder($semestre);
        }

        $form->add('ue', EntityType::class, [
            'required' => true,
            'placeholder' => 'Choisir d\'abord un semestre ...',
            'class' => Ue::class,
            'choice_label' => 'display',
            'query_builder' => $ues,
        ]);

        $form->add('parcours', EntityType::class, [
            'required' => false,
            'placeholder' => 'Choisir d\'abord un semestre ...',
            'class' => Parcour::class,
            'choice_label' => 'libelle',
            'query_builder' => $parcours,
        ]);

        $form->add('matiereParent', EntityType::class, [
            'label' => 'label.matiere.parent',
            'required' => false,
            'placeholder' => 'Choisir d\'abord un semestre ...',
            'class' => Matiere::class,
            'choice_label' => 'display',
            'query_builder' => $matieres,
        ]);
    }

    public function onPreSubmit(FormEvent $event): void
    {
        $form = $event->getForm();
        $data = $event->getData();

        $semestre = $this->semestreRepository->find($data['semestre']);
        $this->addElements($form, $semestre);
    }

    public function onPreSetData(FormEvent $event): void
    {
        $matiere = $event->getData();
        $form = $event->getForm();

        $semestre = $matiere->getSemestre() ?: null;
        $this->addElements($form, $semestre);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Matiere::class,
            'diplome' => null,
            'translation_domain' => 'form',
        ]);
    }
}
