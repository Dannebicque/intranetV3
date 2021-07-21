<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcRessourceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 09:03
 */

namespace App\Form;

use App\Entity\ApcCompetence;
use App\Entity\ApcRessource;
use App\Entity\Diplome;
use App\Entity\Semestre;
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
    protected ?Diplome $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('codeMatiere', TextType::class, ['label' => 'codeRessource'])
            ->add('codeElement', TextType::class, ['label' => 'code_element'])
            ->add('libelle', TextType::class, ['label' => 'libelle'])
            ->add('libelleCourt', TextType::class, ['label' => 'libelle.court', 'attr' => ['maxlength' => 25]])
            ->add('preRequis', TextareaType::class,
                ['label' => 'preRequis', 'attr' => ['rows' => 5], 'required' => false])
            ->add('description', TextareaType::class,
                [
                    'attr' => ['rows' => 20],
                    'label' => 'description',
                    'required' => false,
                    'help' => 'Il est possible d\'utiliser la syntaxe Markdown dans ce bloc de texte'
                ])
            ->add('motsCles', TextType::class,
                [
                    'label' => 'motsCles',
                    'help' => 'Utilisez le "," pour séparer les mots clés.',
                    'required' => false,
                ])
            ->add('tdPpn', TextType::class, ['label' => 'cmtd_ppn'])
            ->add('tpPpn', TextType::class, ['label' => 'tp_ppn'])
            ->add('cmFormation', TextType::class, ['label' => 'cm_formation'])
            ->add('tdFormation', TextType::class, ['label' => 'td_formation'])
            ->add('tpFormation', TextType::class, ['label' => 'tp_formation'])
            ->add('semestre', EntityType::class, [
                'class' => Semestre::class,
                'required' => true,
                'choice_label' => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label' => 'semestre',
                'expanded' => true,
            ])
            ->add('competences', EntityType::class, [
                'class' => ApcCompetence::class,
                'choice_label' => 'nomCourt',
                'label' => 'nomCourt.competence',
                'expanded' => true,
                'multiple' => true,
                'query_builder' => function(ApcComptenceRepository $apcComptenceRepository) {
                    return $apcComptenceRepository->findByDiplomeBuilder($this->diplome);
                },
                'help' => 'Ajoutez les compétences couvertes par la ressource.',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ApcRessource::class,
            'diplome' => null,
            'translation_domain' => 'form',
        ]);
    }
}
