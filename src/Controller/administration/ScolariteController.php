<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/ScolariteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/04/2024 06:26
 */

namespace App\Controller\administration;

use App\Classes\MyScolarite;
use App\Controller\BaseController;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Enums\DecisionUeEnum;
use App\Form\ScolariteType;
use App\Repository\AnneeUniversitaireRepository;
use App\Utils\Tools;
use Exception;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class ScolariteController.
 */
#[Route(path: '/administration/scolarite')]
class ScolariteController extends BaseController
{
    #[Route(path: '/edit/{slug}/{scolarite?<\d+>}', name: 'administration_scolarite_etudiant_edit')]
    public function editScolariteEtudiant(
        Request                                            $request,
        #[MapEntity(mapping: ['slug' => 'slug'])] Etudiant $etudiant,
        ?Scolarite                                         $scolarite = null): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $etudiant->getSemestre());
        $edit = true;
        if (null === $scolarite) {
            $scolarite = new Scolarite($etudiant, $etudiant->getSemestre(),
                $this->dataUserSession->getAnneeUniversitaire());
            $edit = false;
        }
        $isApc = $scolarite->getSemestre()?->getDiplome()?->isApc();
        //todo: gérer avec stimulus la partie édit...
        $form = $this->createForm(ScolariteType::class, $scolarite,
            [
                'departement' => $this->getDepartement(),
                'isApc' => $isApc
            ]);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $this->entityManager->persist($scolarite);
            $tUes = [];
            /** @var UE $ue */
            foreach ($scolarite->getSemestre()?->getUes() as $ue) {
                $idUe = $ue->getId();
                $tUes[$idUe]['moyenne'] = Tools::convertToFloat($request->request->get('ue_'.$idUe));
                if ($isApc) {
                    $tUes[$idUe]['decision'] = $request->request->get('ue_decision_' . $idUe, DecisionUeEnum::UE_EN_COURS->value);
                }
                $tUes[$idUe]['rang'] = -1;
            }
            $scolarite->setMoyennesUes($tUes);
            $this->entityManager->flush();
            $this->addFlashBag('success', 'adm.scolarite.add.flashbag');

            return $this->redirectToRoute('administration_scolarite_etudiant_edit', ['slug' => $etudiant->getSlug()]);
        }

        return $this->render('administration/scolarite/edit.html.twig', [
            'etudiant' => $etudiant,
            'scolarites' => $etudiant->getScolarites(),
            'form' => $form,
            'scolarite' => $scolarite,
            'edit' => $edit,
            'ueDecisions' => DecisionUeEnum::cases()
        ]);
    }

    #[Route(path: '/ajax/ues/{semestre}', name: 'administration_scolarite_ues_semestre', options: ['expose' => true])]
    public function uesSemestre(Semestre $semestre): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $ues = $semestre->getUes();
        $t = [];
        /** @var Ue $ue */
        foreach ($ues as $ue) {
            $t[$ue->getId()] = $ue->getNumeroUe();
        }

        return $this->json($t, Response::HTTP_OK);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/import-intranet', name: 'administration_scolarite_import_intranetv2')]
    public function importScolarite(AnneeUniversitaireRepository $anneeUniversitaireRepository, MyScolarite $myScolarite, Request $request): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $anneeUniversitaire = $anneeUniversitaireRepository->find($request->request->get('annee'));
        $myScolarite->importCsv($request->files->get('fichierImport'), $this->getDepartement(), $anneeUniversitaire);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'parcours.scolarite.import.success.flash');

        return $this->redirectToRoute('administration_cohorte_index');
    }

    #[Route(path: '/saisie/promo/{semestre}', name: 'administration_scolarite_saisie_promo')]
    public function saisiePromotion(AnneeUniversitaireRepository $anneeUniversitaireRepository, Semestre $semestre): Response
    {
        return $this->render('administration/scolarite/saisiePromotion.html.twig', [
            'semestre' => $semestre,
            'semestres' => $this->dataUserSession->getSemestres(),
            'anneesUniversitaires' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    #[Route(path: '/ajax-saisie/promo/{semestre}/{anneeUniversitaire}', name: 'administration_scolarite_saisie_promo_ajax', options: ['expose' => true])]
    public function saisiePromotionAjax(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): Response
    {
        return $this->render('administration/scolarite/_saisiePromotion.html.twig', [
            'semestre' => $semestre,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);
    }

    #[Route(path: '/ajax-import/promo/{semestre}/{anneeUniversitaire}', name: 'administration_scolarite_saisie_promo_import_ajax', options: ['expose' => true])]
    public function importPromotionAjax(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): Response
    {
        return $this->render('administration/scolarite/_importPromotion.html.twig', [
            'semestre' => $semestre,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);
    }
}
