<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/QuestionnaireIntroType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/12/2022 09:36
 */

namespace App\Form;

use App\Entity\QuestQuestionnaire;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireIntroType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $listeDestinataires = $options['listeDestinataires'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle',
                'help' => 'Libellé court, affiché dans l\'administration',
            ])
            ->add('titre', TextType::class, [
                'label' => 'label.titre',
                'help' => 'Titre du questionnaire affiché aux étudiants',
            ])
            ->add('texteExplication', TextareaType::class, [
                'attr' => ['data-controller' => 'interface--editor', 'class' => 'tinyMce', 'rows' => 10],
                'label' => 'label.texteExplication',
                'required' => false,
                'help' => 'Texte d\'explication du questionnaire. Affiché dans la liste des questionnaires.',
            ])
            ->add('texteDebut', TextareaType::class, [
                'attr' => ['data-controller' => 'interface--editor', 'class' => 'tinyMce', 'rows' => 10],
                'label' => 'label.texteDebut',
                'required' => false,
                'help' => 'Texte introductif du questionnaire, affiché au début de l\'enquête',
            ])
            ->add('typeDestinataire', ChoiceType::class, [
                'choices' => $listeDestinataires,
                'label' => 'label.typeDestinataire',
                'required' => false,
                'help' => 'Choisir le type de destinataire du questionnaire',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuestQuestionnaire::class,
            'translation_domain' => 'form',
            'listeDestinataires' => null,
        ]);
    }
}
