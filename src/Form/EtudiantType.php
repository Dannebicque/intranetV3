<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/EtudiantType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Form;

use App\Entity\Bac;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Form\Type\CiviliteType;
use App\Form\Type\YesNoType;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class EtudiantType
 * @package App\Form
 */
class EtudiantType extends AbstractType
{
    private $departement;


    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];


        $builder
            ->add('civilite', CiviliteType::class, [
                'label'                     => 'label.civilite'
            ])
            ->add('nom', TextType::class, ['label' => 'label.nom'])
            ->add('prenom', TextType::class, ['label' => 'label.prenom'])
            ->add('mail_univ', TextType::class, ['label' => 'label.mail_univ'])
            ->add('site_univ', TextType::class, ['label' => 'label.site_univ', 'required' => false])
            ->add('mail_perso', TextType::class, ['label' => 'label.mail_perso', 'required' => false])
            ->add('site_perso', TextType::class, ['label' => 'label.site_perso', 'required' => false])
            ->add('date_naissance', BirthdayType::class, ['label' => 'label.date_naissance'])
            ->add('tel1', TextType::class, ['label' => 'label.tel1', 'required' => false])
            ->add('tel2', TextType::class, ['label' => 'label.tel2', 'required' => false])
            ->add('remarque', TextareaType::class, ['label' => 'label.remarque', 'required' => false])
            ->add('signature', TextType::class, ['label' => 'label.signature', 'required' => false])
            ->add('visible', YesNoType::class, ['label' => 'label.visible'])
            ->add('photoFile', VichFileType::class, ['label' => 'label.photo'])
            ->add('adresse', AdresseType::class, ['label' => 'label.adresse', 'required' => false])
            ->add('numEtudiant', TextType::class, ['label' => 'label.num_etudiant'])
            ->add('numIne', TextType::class, ['label' => 'label.num_ine', 'required' => false])
            ->add('bac', EntityType::class, ['label' => 'label.bac', 'class' => Bac::class, 'choice_label' => 'libelle', 'required' => false])
            ->add('semestre', EntityType::class, [
                'label'         => 'label.semestre',
                'class'         => Semestre::class,
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDepartementBuilder($this->departement);
                },
                'choice_label'  => 'libelle'
            ])
            ->add('anneeBac', TextType::class, ['label' => 'label.annee_bac'])
            ->add('username', TextType::class, ['label' => 'label.username'])
            ->add('demandeurEmploi', YesNoType::class, ['label' => 'label.demandeurEmploi'])
            ->add('boursier', YesNoType::class, ['label' => 'label.boursier'])
            ->add('amenagementsParticuliers', TextareaType::class, ['label' => 'label.amenagementsParticuliers', 'required' => false])
            ->add('promotion', TextType::class, ['label' => 'label.promotion'])
;
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Etudiant::class,
            'translation_domain' => 'form',
            'departement'        => null,
        ]);
    }
}
