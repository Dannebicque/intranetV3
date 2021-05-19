<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcRessourceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/05/2021 15:41
 */

namespace App\Form;

use App\Entity\ApcCompetence;
use App\Entity\ApcRessource;
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
    protected $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('codeMatiere', TextType::class, ['label' => 'label.codeRessource'])
            ->add('codeElement', TextType::class, ['label' => 'label.code_element'])
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('preRequis', TextareaType::class,
                ['label' => 'label.preRequis', 'attr' => ['rows' => 5], 'required' => false])
            ->add('description', TextareaType::class,
                ['attr' => ['rows' => 20], 'label' => 'label.description', 'required' => false])
            ->add('motsCles', TextType::class,
                [
                    'label' => 'label.motsCles',
                    'help' => 'Utilisez le "," pour séparer les mots clés.',
                    'required' => false
                ])
            ->add('tdPpn', TextType::class, ['label' => 'label.cmtd_ppn'])
            ->add('tpPpn', TextType::class, ['label' => 'label.tp_ppn'])
            ->add('cmFormation', TextType::class, ['label' => 'label.cm_formation'])
            ->add('tdFormation', TextType::class, ['label' => 'label.td_formation'])
            ->add('tpFormation', TextType::class, ['label' => 'label.tp_formation'])
            ->add('semestre', EntityType::class, [
                'class' => Semestre::class,
                'required' => true,
                'choice_label' => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label' => 'label.semestre',
                'expanded' => true,
            ])
            ->add('competences', EntityType::class, [
                'class' => ApcCompetence::class,
                'choice_label' => 'nomCourt',
                'label' => 'label.nomCourt.competence',
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
            'translation_domain' => 'form'
        ]);
    }
}
