<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/QuestSectionType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 16:07
 */

namespace App\Form;

use App\Components\Questionnaire\Section\ConfigurableSection;
use App\Components\Questionnaire\Section\MatiereSectionAdapter;
use App\Components\Questionnaire\Section\PrevisionnelSectionAdapter;
use App\Components\Questionnaire\Section\RessourceSectionAdapter;
use App\Components\Questionnaire\Section\SaeSectionAdapter;
use App\Components\Questionnaire\Section\Section;
use App\Entity\QuestSection;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestSectionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre', TextType::class, [
                'label' => 'Titre',
                'required' => true,
            ])
            ->add('textExplicatif', TextareaType::class, [
                'label' => 'Texte explicatif',
                'required' => false,
                'attr' => ['rows' => 5],
                'help' => 'Texte affiché en introduction de la section',
            ])
            ->add('typeSection', ChoiceType::class, [
                //todo: passer par un tableau dans le registry?
                'label' => 'Type de section',
                'required' => true,
                'choices' => [
                    'Section standard' => Section::class,
                    'Section paramétrable (SAE, ressources, prévisionnel, ...)' => ConfigurableSection::class,
                ],
            ])
            ->add('enabled', YesNoType::class, [
                'label' => 'Section activée',
                'required' => true,
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, static function(FormEvent $event) {
                $question = $event->getData();

                $config = $question->getConfig();
                $form = $event->getForm();
                $form->add('configSection', ChoiceType::class, [
                    //todo: passer par un tableau dans le registry?
                    'label' => 'Type de configuration',
                    'required' => false,
                    'mapped' => false,
                    'choices' => [
                        'Matière' => MatiereSectionAdapter::class,
                        'Prévisionnel' => PrevisionnelSectionAdapter::class,
                        'Ressources' => RessourceSectionAdapter::class,
                        'SAE' => SaeSectionAdapter::class,
                    ],
                    'data' => $config['configSection'] ?? null,
                ]);
            })
            ->addEventListener(FormEvents::POST_SUBMIT, static function(FormEvent $event) {
                $section = $event->getData();
                $form = $event->getForm();
                $t = $section->getConfig();
                $t['configSection'] = $form->get('configSection')->getData();
                $section->setConfig($t);
            });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuestSection::class,
        ]);
    }
}
