<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/stage/etudiant/FormulaireController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/12/2022 12:54
 */

// src/Controller/FormulaireController.php

namespace App\Controller\stage\etudiant;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Contact;
use App\Entity\StageEtudiant;
use App\Event\StageEvent;
use App\Form\stage\FormTypeEntreprise;
use App\Form\stage\FormTypeStage;
use App\Form\stage\FormTypeTuteur;
use App\Form\stage\FormTypeVosInformations;
use App\Form\stage\ResponsableType;
use App\Form\stage\StageAdresseFormType;
use App\Repository\ContactRepository;
use App\Repository\StageEtudiantRepository;
use Carbon\Carbon;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class FormulaireController extends BaseController
{
    // todo: ajouter les contraintes de validation + message d'erreur

    // -------------------------------------------1ERE ETAPE-------------------------------------------------
    // ------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------

    #[Route('/formulaire/vous/{stageEtudiant}', name: 'app_stage_etudiant_formulaire')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function new_form_vous(
        StageEtudiantRepository $stageEtudiantRepository,
        Request $request,
        StageEtudiant $stageEtudiant
    ): Response {
        $form = $this->createForm(FormTypeVosInformations::class, $stageEtudiant, [
            'csrf_protection' => false,
            'action' => $this->generateUrl('app_stage_etudiant_formulaire',
                ['stageEtudiant' => $stageEtudiant->getUuidString()]),
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $stageEtudiantRepository->save($stageEtudiant, true);

            return $this->json([
                'route' => $this->generateUrl('app_formulaireEntreprise',
                    ['stageEtudiant' => $stageEtudiant->getUuidString()]),
            ]);
        }
        if ($form->isSubmitted() && !$form->isValid()) {
            $errors = [];
            foreach ($form->getErrors(true) as $formError) {
                $errors[$formError->getOrigin()->getName()] = $formError->getMessage();
            }

//            dump($errors);
            return $this->json($errors);
        }

        return $this->render('stage/formulaire/index.html.twig',
            ['form_vous' => $form->createView(), 'step' => 1, 'stageEtudiant' => $stageEtudiant->getUuidString()]);
    }

    // -------------------------------------------2EME ETAPE-------------------------------------------------
    // ------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------

    #[Route('/formulaire/entreprise/{stageEtudiant}', name: 'app_formulaireEntreprise')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function new_form_entreprise(
        Request $request,
        StageEtudiantRepository $stageEtudiantRepository,
        StageEtudiant $stageEtudiant
    ): Response {
        $form2 = $this->createForm(FormTypeEntreprise::class, $stageEtudiant, [
            'csrf_protection' => false,
            'action' => $this->generateUrl('app_formulaireEntreprise',
                ['stageEtudiant' => $stageEtudiant->getUuidString()]),
        ]);

        $form2->handleRequest($request);
        if ($form2->isSubmitted()) {
            if ($form2->isValid()) {
                $stageEtudiantRepository->save($stageEtudiant, true);

                if ('form_type_entreprise_suivant' == $request->request->get('button')) {
                    return $this->json([
                        'route' => $this->generateUrl('app_formulaireResponsable',
                            ['stageEtudiant' => $stageEtudiant->getUuidString()]),
                    ]);
                } else {
                    return $this->json([
                        'route' => $this->generateUrl('app_stage_etudiant_formulaire',
                            ['stageEtudiant' => $stageEtudiant->getUuidString()]),
                    ]);
                }
            }
        }

        return $this->renderForm('stage/formulaire/index.html.twig',
            ['form_entreprise' => $form2, 'step' => 2, 'stageEtudiant' => $stageEtudiant]);
    }

    // -------------------------------------------3EME ETAPE-------------------------------------------------
    // ------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------

    #[Route('/formulaire/responsable/{stageEtudiant}', name: 'app_formulaireResponsable')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function new_form_responsable(
        Request $request,
        StageEtudiantRepository $stageEtudiantRepository,
        StageEtudiant $stageEtudiant
    ): Response {
        if (null == $stageEtudiant->getEntreprise()->getResponsable()) {
            $responsable = new Contact();
            $stageEtudiant->getEntreprise()->setResponsable($responsable);
        } else {
            $responsable = $stageEtudiant->getEntreprise()->getResponsable();
        }

        $form3 = $this->createForm(ResponsableType::class, $responsable, [
            'csrf_protection' => false,
            'action' => $this->generateUrl('app_formulaireResponsable',
                ['stageEtudiant' => $stageEtudiant->getUuidString()]),
        ]);

        $form3->handleRequest($request);
        if ($form3->isSubmitted()) {
            if ($form3->isValid()) {
                $stageEtudiantRepository->save($stageEtudiant, true);

                if ('responsable_suivant' === $request->request->get('button')) {
                    return $this->json([
                        'route' => $this->generateUrl('app_formulaireTuteur',
                            ['stageEtudiant' => $stageEtudiant->getUuidString()]),
                    ]);
                } else {
                    return $this->json([
                        'route' => $this->generateUrl('app_formulaireEntreprise',
                            ['stageEtudiant' => $stageEtudiant->getUuidString()]),
                    ]);
                }
            }
        }

        return $this->renderForm('stage/formulaire/index.html.twig',
            ['form_responsable' => $form3, 'step' => 3, 'stageEtudiant' => $stageEtudiant]);
    }

    // -------------------------------------------4EME ETAPE-------------------------------------------------
    // ------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------

    #[Route('/formulaire/tuteur/{stageEtudiant}', name: 'app_formulaireTuteur')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function new_form_tuteur(
        Request $request,
        StageEtudiantRepository $stageEtudiantRepository,
        ContactRepository $contactRepository,
        StageEtudiant $stageEtudiant
    ): Response {
        $form4 = $this->createForm(FormTypeTuteur::class, $stageEtudiant, [
            'csrf_protection' => false,
        ]);

        $form4->handleRequest($request);

        if ($form4->isSubmitted()) {
            if ($form4->get('suivant')->isClicked()) {
                $stageEtudiantRepository->save($stageEtudiant, true);

                return $this->redirectToRoute('app_formulaireAdresseStage',
                    ['stageEtudiant' => $stageEtudiant->getUuidString()]);
            } elseif ($form4->get('retour')->isClicked()) {
                return $this->redirectToRoute('app_formulaireResponsable',
                    ['stageEtudiant' => $stageEtudiant->getUuidString()]);
            } elseif ($form4->get('recup_informations')->isClicked()) {
                $stageEtudiant->setTuteur($stageEtudiant->getEntreprise()->getResponsable());
                $form4 = $this->createForm(FormTypeTuteur::class, $stageEtudiant, [
                    'csrf_protection' => false,
                ]);
            }
        }

        return $this->renderForm('stage/formulaire/index.html.twig',
            ['form_tuteur' => $form4, 'step' => 4, 'stageEtudiant' => $stageEtudiant]);
    }

    // -------------------------------------------5EME ETAPE-------------------------------------------------
    // ------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------

    #[Route('/formulaire/adresse_stage/{stageEtudiant}', name: 'app_formulaireAdresseStage')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function new_form_adresse_stage(
        Request $request,
        StageEtudiantRepository $stageEtudiantRepository,
        StageEtudiant $stageEtudiant
    ): Response {
        $form5 = $this->createForm(StageAdresseFormType::class, $stageEtudiant, [
            'csrf_protection' => false,
        ]);

        $form5->handleRequest($request);
        if ($form5->isSubmitted()) {
            if ($form5->isValid()) {
                $stageEtudiantRepository->save($stageEtudiant, true);

                if ('stage_adresse_form_suivant' === $request->request->get('button')) {
                    return $this->json([
                        'route' => $this->generateUrl('app_formulaireStage',
                            ['stageEtudiant' => $stageEtudiant->getUuidString()]),
                    ]);
                } elseif ('stage_adresse_form_retour' === $request->request->get('button')) {
                    return $this->json([
                        'route' => $this->generateUrl('app_formulaireTuteur',
                            ['stageEtudiant' => $stageEtudiant->getUuidString()]),
                    ]);
                }
            }
        }

        return $this->renderForm('stage/formulaire/index.html.twig',
            ['form_adss_stage' => $form5, 'step' => 5, 'stageEtudiant' => $stageEtudiant]);
    }

    #[Route('/formulaire/stage/{stageEtudiant}', name: 'app_formulaireStage')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function new_form_stage(
        Request $request,
        StageEtudiantRepository $stageEtudiantRepository,
        StageEtudiant $stageEtudiant
    ): Response {
        $form6 = $this->createForm(FormTypeStage::class, $stageEtudiant, [
            'csrf_protection' => false,
            'flexible' => $stageEtudiant->getStagePeriode()?->getDatesFlexibles(),
        ]);

        $form6->handleRequest($request);
        if ($form6->isSubmitted() && $form6->isValid()) {
            // Si clic sur "retour"
            if ($form6->get('retour')->isClicked()) {
                // Alors location->formulaire/entreprise
                return $this->redirectToRoute('app_formulaireAdresseStage',
                    ['stageEtudiant' => $stageEtudiant->getUuidString()]);
            } // Si clic sur "suivant"

            $stageEtudiantRepository->save($stageEtudiant, true);

            return $this->redirectToRoute('app_formulaireRecap',
                ['stageEtudiant' => $stageEtudiant->getUuidString()]);
        }

        return $this->renderForm('stage/formulaire/index.html.twig',
            ['form_stage' => $form6, 'step' => 6, 'stageEtudiant' => $stageEtudiant]);
    }

    #[Route('/calendar', name: 'calendar')]
    public function calculJoursDeStage(Request $request): Response
    {
        $tab = json_decode($request->getContent(), true);
        $date_debut = Carbon::createFromFormat('d/m/Y', $tab['date1']); // new \DateTime($tab['date1']);
        $date_fin = Carbon::createFromFormat('d/m/Y', $tab['date2']); // new \DateTime($tab['date2']);
        $interval = $date_debut->diff($date_fin);

        $interval = $interval->format('%y') * 365 + $interval->format('%m') * 30 + $interval->format('%d');

        $annee1 = $date_debut->format('Y');
        $annee2 = $date_fin->format('Y');

        $tab = [];
        for ($i = $annee1; $i <= $annee2; ++$i) {
            $easter = easter_date($annee1, CAL_FRENCH); // paque (dimanche)
            $easterDay = (int) date('d', $easter);
            $easterMonth = (int) date('m', $easter);
            $easterYear = (int) date('Y', $easter);

            $lundiPaque = mktime(0, 0, 0, $easterMonth, $easterDay + 1, $easterYear);
            $jeudiAscension = mktime(0, 0, 0, $easterMonth, $easterDay + 39, $easterYear);
            $lundiPentecote = mktime(0, 0, 0, $easterMonth, $easterDay + 50, $easterYear);

            $tabJoursFeries = [
                $i.'-11-01', // toussaints
                $i.'-11-11', // armistice
                $i.'-12-25', // noel
                $i.'-01-01', // jour de l'an
                $i.'-05-01', // fete du travail
                $i.'-05-08', // victoire
                $i.'-07-14', // fete nationale
                $i.'-08-15', // assomption
                date('Y-m-d', $easter), // dimanche de pâque
                date('Y-m-d', $lundiPaque), // lundi de pâque
                date('Y-m-d', $jeudiAscension), // jeudi ascension
                date('Y-m-d', $lundiPentecote), // lundi de pentecote
            ];
            $tab[] = $tabJoursFeries;
        }
        $tabFeries = array_merge(...$tab);

        while ($date_debut <= $date_fin) {
            if (in_array($date_debut->format('Y-m-d'), $tabFeries, true)) {
                --$interval;
            } elseif ('Saturday' == $date_debut->format('l') || 'Sunday' == $date_debut->format('l')) {
                --$interval;
            }
            $date_debut->add(new \DateInterval('P1D'));
        }

        return $this->json(['duree' => $interval]);
    }

    #[Route('/formulaire/stage/recapitulatif/{stageEtudiant}', name: 'app_formulaireRecap')]
    #[ParamConverter('stageEtudiant', options: ['mapping' => ['stageEtudiant' => 'uuid']])]
    public function new_form_stage_recapitulatif(
        EventDispatcherInterface $eventDispatcher,
        Request $request,
        StageEtudiant $stageEtudiant
    ): Response {
        if ($request->isMethod('POST')) {
            $stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_DEPOSE);
            $stageEtudiant->setDateDepotFormulaire(Carbon::now());
            $this->entityManager->flush();

            $event = new StageEvent($stageEtudiant);
            $eventDispatcher->dispatch($event, StageEvent::CHGT_ETAT_STAGE_DEPOSE);

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.formulaire.success.flash');

            return $this->redirectToRoute('application_index', ['onglet' => 'stage']);
        }

        return $this->renderForm('stage/formulaire/index.html.twig',
            ['step' => 7, 'stageEtudiant' => $stageEtudiant]);
    }
}
