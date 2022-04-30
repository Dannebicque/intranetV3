<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/BCDemandeInitialeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:02
 */

namespace App\Form;

use App\Entity\BCDemande;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Form\Type\YesNoType;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BCDemandeInitialeType extends AbstractType
{
    protected Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('service', ChoiceType::class,
                ['label' => 'label.bc.service', 'choices' => BCDemande::BC_TABS_SERVICES, 'required' => false])
            ->add('prestation', ChoiceType::class,
                ['label' => 'label.bc.prestation', 'choices' => BCDemande::BC_TABS_PRESTATIONS, 'expanded' => true])
            ->add('objet', TextType::class, ['label' => 'label.bc.objet'])
            ->add('description', TextareaType::class, ['label' => 'label.bc.description'])
            ->add('montantTTC', TextType::class, [
                'label' => 'label.bc.montantTTC',
                'input_suffix' => '<span class="input-group-text">€</span>',
                'required' => false,
            ])
            ->add('montantHT', TextType::class, [
                'label' => 'label.bc.montantHT',
                'input_suffix' => '<span class="input-group-text">€</span>',
                'required' => false,
            ])
            ->add('commandeMarche', YesNoType::class, ['label' => 'label.bc.commandeMarche'])
            ->add('numeroBC', TextType::class, ['label' => 'label.bc.numeroBC'])
            ->add('departement', EntityType::class, [
                'label' => 'label.departement',
                'class' => Departement::class,
                'choice_label' => 'libelle',
                'required' => false,
            ])
            ->add('responsable', EntityType::class, [
                'label' => 'label.bc.responsable',
                'class' => Personnel::class,
                'choice_label' => 'displayPr',
                'query_builder' => fn (PersonnelRepository $personnelRepository) => $personnelRepository->findByDepartementBuilder($this->departement),
            ])
            ->add('fournisseur');
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => BCDemande::class,
            'translation_domain' => 'form',
            'departement' => null,
        ]);
    }
}
