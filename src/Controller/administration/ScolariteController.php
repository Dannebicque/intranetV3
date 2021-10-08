<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/ScolariteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 10:52
 */

namespace App\Controller\administration;

use App\Classes\MyScolarite;
use App\Utils\Tools;
use App\Controller\BaseController;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Form\ScolariteType;
use App\Repository\AnneeUniversitaireRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController.
 *
 * @Route("/administration/scolarite")
 */
class ScolariteController extends BaseController
{
    /**
     * @Route("/edit/{slug}/{scolarite?<\d+>}", name="administration_scolarite_etudiant_edit")
     *
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function editScolariteEtudiant(
        Request $request,
        Etudiant $etudiant,
        ?Scolarite $scolarite = null
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $etudiant->getSemestre());

        $edit = true;
        if (null === $scolarite) {
            $scolarite = new Scolarite($etudiant, $etudiant->getSemestre(),
                $this->dataUserSession->getAnneeUniversitaire());
            $edit = false;
        }

        $form = $this->createForm(ScolariteType::class, $scolarite,
            ['departement' => $this->dataUserSession->getDepartement()]);

        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $this->entityManager->persist($scolarite);
            $tUes = [];
            /** @var UE $ue */
            foreach ($scolarite->getSemestre()->getUes() as $ue) {
                $tUes[$ue->getId()]['moyenne'] = Tools::convertToFloat($request->request->get('ue_' . $ue->getId()));
                $tUes[$ue->getId()]['rang'] = -1;
            }
            $scolarite->setMoyennesUes($tUes);
            $this->entityManager->flush();
            $this->addFlashBag('success', 'adm.scolarite.add.flashbag');

            return $this->redirectToRoute('administration_scolarite_etudiant_edit', ['slug' => $etudiant->getSlug()]);
        }

        return $this->render('administration/scolarite/edit.html.twig', [
            'etudiant'   => $etudiant,
            'scolarites' => $etudiant->getScolarites(),
            'form'       => $form->createView(),
            'scolarite'  => $scolarite,
            'edit'       => $edit,
        ]);
    }

    /**
     * @Route("/ajax/ues/{semestre}", name="administration_scolarite_ues_semestre", options={"expose"=true})
     */
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
     * @Route("/import-intranet", name="administration_scolarite_import_intranetv2")
     *
     * @throws Exception
     */
    public function importScolarite(
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        MyScolarite $myScolarite,
        Request $request
    ): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $anneeUniversitaire = $anneeUniversitaireRepository->find($request->request->get('annee'));
        $myScolarite->importCsv($request->files->get('fichierImport'), $this->getDepartement(), $anneeUniversitaire);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'parcours.scolarite.import.success.flash');

        return $this->redirectToRoute('administration_cohorte_index');
    }

//    /**
//     * @Route("/init-scolarite/{semestre}", name="administration_scolarite_init_semestre")
//     * @param MyScolarite $myScolarite
//     * @param Semestre    $semestre
//     *
//     * @return RedirectResponse
//     */
//    public function initParcoursScolarite(MyScolarite $myScolarite, Semestre $semestre)
//    {
//        $myScolarite->initSemestre($semestre, $this->dataUserSession->getAnneeUniversitaire());
//        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'parcours.scolarite.init.semestre.success.flash');
//
//        return $this->redirectToRoute('administration_semestre_index', ['semestre' => $semestre->getId()]);
//    }

    /**
     * @Route("/saisie/promo/{semestre}", name="administration_scolarite_saisie_promo")
     */
    public function saisiePromotion(
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        Semestre $semestre
    ): Response {
        return $this->render('administration/scolarite/saisiePromotion.html.twig', [
            'semestre'             => $semestre,
            'semestres'            => $this->dataUserSession->getSemestres(),
            'anneesUniversitaires' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    /**
     * @Route("/ajax-saisie/promo/{semestre}/{anneeUniversitaire}", name="administration_scolarite_saisie_promo_ajax",
     *                                                              options={"expose"=true})
     */
    public function saisiePromotionAjax(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): Response
    {
        return $this->render('administration/scolarite/_saisiePromotion.html.twig', [
            'semestre'           => $semestre,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);
    }

    /**
     * @Route("/ajax-import/promo/{semestre}/{anneeUniversitaire}", name="administration_scolarite_saisie_promo_import_ajax",
     *                                                              options={"expose"=true})
     */
    public function importPromotionAjax(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): Response
    {
        return $this->render('administration/scolarite/_importPromotion.html.twig', [
            'semestre'           => $semestre,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);
    }
}
