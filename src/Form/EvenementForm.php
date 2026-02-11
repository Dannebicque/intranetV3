<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Form;

use App\Entity\Etudiant;
use App\Entity\Evenement;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EvenementForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle')
            ->add('date')
            ->add('debut')
            ->add('fin')
            ->add('adresse')
            ->add('description')
            // Champ laissé présent (non mappé) pour compatibilité éventuelle, mais non utilisé; la sélection est gérée via le champ caché et le modal JS.
            ->add('etudiants', EntityType::class, [
                'class' => Etudiant::class,
                'choice_label' => 'id',
                'multiple' => true,
                'required' => false,
                'choices' => [], // évite de charger tous les étudiants; géré par le modal JS
                'row_attr' => ['class' => 'd-none'], // masqué dans le rendu par défaut
                'mapped' => false, // IMPORTANT: l'entité Evenement n'expose plus "etudiants"
            ])
            // IDs sélectionnés via le modal (non mappé)
            ->add('etudiantsIds', HiddenType::class, [
                'mapped' => false,
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Evenement::class,
        ]);
    }

    // Force le préfixe du formulaire pour générer des noms d'inputs de type "evenement[... ]"
    public function getBlockPrefix(): string
    {
        return 'evenement';
    }
}
