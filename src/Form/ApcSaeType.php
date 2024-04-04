<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ApcSaeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/04/2024 08:53
 */

namespace App\Form;

use App\Entity\ApcCompetence;
use App\Entity\ApcSae;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Form\Type\YesNoType;
use App\Repository\ApcComptenceRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcSaeType extends AbstractType
{
    protected ?Diplome $diplome = null;
    protected ?Semestre $semestre = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];
        $this->semestre = $options['semestre'];


        $builder
            ->add('mutualisee', YesNoType::class, ['label' => 'label.mutualisee'])
            ->add('codeElement', TextType::class, ['label' => 'label.code_element'])
            ->add('codeMatiere', TextType::class, ['label' => 'label.codeSae'])
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('libelleCourt', TextType::class,
                ['label' => 'label.libelle.court', 'required' => false, 'attr' => ['maxlength' => 25]])
            ->add('description', TextareaType::class,
                [
                    'attr' => ['rows' => 20],
                    'label' => 'label.description',
                    'required' => false,
                    'help' => 'Il est possible d\'utiliser la syntaxe Markdown dans ce bloc de texte',
                ])
            ->add('tdPpn', TextType::class, ['label' => 'label.cmtd_ppn'])
            ->add('tpPpn', TextType::class, ['label' => 'label.tp_ppn'])
            ->add('projetPpn', TextType::class, ['label' => 'label.projet_ppn'])
            ->add('cmFormation', TextType::class, ['label' => 'label.cm_formation'])
            ->add('tdFormation', TextType::class, ['label' => 'label.td_formation'])
            ->add('tpFormation', TextType::class, ['label' => 'label.tp_formation'])
            ->add('projetFormation', TextType::class, ['label' => 'label.projet_formation'])
            ->add('livrables', TextareaType::class,
                [
                    'label' => 'label.livrables',
                    'attr' => ['rows' => 20],
                    'required' => false,
                    'help' => 'Il est possible d\'utiliser la syntaxe Markdown dans ce bloc de texte',
                ])
            ->add('semestres', EntityType::class, [
                'class' => Semestre::class,
                'attr' => ['data-action' => 'change->apc-sae-form#changeSemestre'],
                'required' => true,
                'choice_label' => 'display',
                'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findAllSemestreByDiplomeApcBuilder($this->diplome),
                'label' => 'label.semestre',
                'expanded' => true,
                'multiple' => true,//todo: collection à gérer ??

            ])
            ->add('competences', EntityType::class, [
                'class' => ApcCompetence::class,
                'choice_label' => 'nomCourt',
                'label' => 'label.nomCourt.competence',
                'attr' => ['data-action' => 'change->apc-sae-form#changeCompetence'],
                'expanded' => true,
                'multiple' => true,
                'query_builder' => fn (ApcComptenceRepository $apcComptenceRepository) => $apcComptenceRepository->findByReferentielBuilder($this->diplome?->getReferentiel()),
                'help' => 'Ajoutez les compétences couvertes par la SAÉ.',
            ])
            ->add('exemples', TextareaType::class,
                [
                    'label' => 'label.exemples',
                    'attr' => ['rows' => 20],
                    'required' => false,
                    'help' => 'Il est possible d\'utiliser la syntaxe Markdown dans ce bloc de texte',
                ])
            ->add('bonification', YesNoType::class,
                [
                    'label' => 'label.bonification',
                    'required' => true,
                    'help' => 'Indique si cette note dot être considérée comme une bonification (PAC, sport, ...).',
                ])
            ->add('suspendu', YesNoType::class, ['label' => 'label.suspendu', 'help' => 'Une matière suspendue n\'entre pas dans le calcul des moyennes.'])

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ApcSae::class,
            'diplome' => null,
            'semestre' => null,
            'translation_domain' => 'form',
        ]);
    }
}
