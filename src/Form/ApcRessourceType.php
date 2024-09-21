<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ApcRessourceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/09/2024 10:17
 */

namespace App\Form;

use App\Entity\ApcCompetence;
use App\Entity\ApcRessource;
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

class ApcRessourceType extends AbstractType
{
    protected ?Diplome $diplome = null;
    protected ?Semestre $semestre = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->diplome = $options['diplome'];
        $this->semestre = $options['semestre'];

        $builder
            ->add('ressourceParent', YesNoType::class, ['label' => 'label.ressourceParent', 'help' => 'help.ressourceParent'])
            ->add('mutualisee', YesNoType::class, ['label' => 'label.mutualisee'])
            ->add('codeMatiere', TextType::class, ['label' => 'label.codeRessource', 'attr' => ['maxlength' => 20], 'help' => 'Code de la Ressource. Maximum 20 caractères'])
            ->add('codeElement', TextType::class, ['label' => 'label.code_element', 'attr' => ['maxlength' => 20]])
            ->add('hasCoefficientDifferent', YesNoType::class, ['label' => 'Coefficient(s) différent(s) selon les parcours ', 'help' => 'Possibilité de différencier les coefficients sur les UE selon les parcours. Implique de saisir les coefficients sur tous les parcours où la ressource est utilisée.'])
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('libelleCourt', TextType::class, ['label' => 'label.libelle.court', 'attr' => ['maxlength' => 25]])
            ->add('preRequis', TextareaType::class,
                ['label' => 'label.preRequis', 'attr' => ['rows' => 5], 'required' => false])
            ->add('description', TextareaType::class,
                [
                    'attr' => ['rows' => 20],
                    'label' => 'label.description',
                    'required' => false,
                    'help' => 'Il est possible d\'utiliser la syntaxe Markdown dans ce bloc de texte',
                ])
            ->add('motsCles', TextType::class,
                [
                    'label' => 'label.motsCles',
                    'help' => 'Utilisez le "," pour séparer les mots clés.',
                    'required' => false,
                ])
            ->add('tdPpn', TextType::class, ['label' => 'label.cmtd_ppn'])
            ->add('tpPpn', TextType::class, ['label' => 'label.tp_ppn'])
            ->add('cmFormation', TextType::class, ['label' => 'label.cm_formation'])
            ->add('tdFormation', TextType::class, ['label' => 'label.td_formation'])
            ->add('tpFormation', TextType::class, ['label' => 'label.tp_formation'])
            ->add('semestres', EntityType::class, [
                'class' => Semestre::class,
                'required' => true,
                'choice_label' => 'display',
                'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findAllSemestreByDiplomeApcBuilder($this->diplome),
                'label' => 'label.semestre',
                'choice_attr' => function (Semestre $semestre) {
                    return ['data-ordre' => $semestre->getOrdreLmd()];
                },
                'expanded' => true,
                'multiple' => true,
                'attr' => ['data-action' => 'change->apc-ressource-form#changeSemestre'],
            ])
            ->add('competences', EntityType::class, [
                'class' => ApcCompetence::class,
                'choice_label' => 'nomCourt',
                'label' => 'label.nomCourt.competence',
                'expanded' => true,
                'multiple' => true,
                'query_builder' => fn (ApcComptenceRepository $apcComptenceRepository) => $apcComptenceRepository->findByReferentielBuilder($this->diplome?->getReferentiel()),
                'help' => 'Ajoutez les compétences couvertes par la ressource.',
                'attr' => ['data-action' => 'change->apc-ressource-form#changeCompetence'],
            ])
            ->add('suspendu', YesNoType::class, ['label' => 'label.suspendu', 'help' => 'Une matière suspendue n\'entre pas dans le calcul des moyennes.'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ApcRessource::class,
            'diplome' => null,
            'semestre' => null,
            'translation_domain' => 'form',
        ]);
    }
}
