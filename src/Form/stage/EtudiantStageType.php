<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/stage/EtudiantStageType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/12/2022 16:06
 */

namespace App\Form\stage;

use App\Entity\Departement;
use App\Entity\Etudiant;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class EtudiantType.
 */
class EtudiantStageType extends AbstractType
{
    protected Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('intituleSecuriteSociale', TextType::class, [
                'label' => 'Organisme de sécurité sociale * :',
                'attr' => ['for' => 'nom de l\'organisme de sécurité soiale'],
                'help' => 'Indiquer "CPAM" pour le régime de sécurité social général ou le nom de votre régime spécial (ou celui de vos parents).',
            ])
            ->add('adresseSecuriteSociale', TextType::class, ['label' => 'Adresse de l\'organisme :', 'attr' => ['for' => 'adresse de l\'organisme de sécurité soiale'], 'help' => 'Uniquement si vous n\'êtes pas au régime général de la sécurité sociale.', 'required' => false])
            ->add('adresse', AdresseType::class, ['label' => 'Récapitulatif'])
            ->add('mail_perso', EmailType::class, ['label' => 'Votre email personnel :', 'help' => 'l\'email doit être saisi sous la forme : xxxxxx@xxx.xxx.',
            ])
            ->add('tel1', TextType::class, ['label' => 'Votre numéro de téléphone :', 'help' => 'le numéro de téléphone doit comporter 10 chiffres.',
            ]);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Etudiant::class,
            'translation_domain' => 'form',
        ]);
    }
}
