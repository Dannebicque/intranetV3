<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcRessourceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/03/2021 18:52
 */

namespace App\Controller\administration\apc;

use App\Classes\Pdf\MyPDF;
use App\Classes\Word\MyWord;
use App\Controller\BaseController;
use App\Entity\ApcRessource;
use App\Entity\ApcRessourceApprentissageCritique;
use App\Entity\ApcSaeRessource;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcRessourceType;
use App\Repository\ApcApprentissageCritiqueRepository;
use App\Repository\ApcRessourceApprentissageCritiqueRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\ApcSaeRessourceRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/apc/ressource", name="administration_")
 */
class ApcRessourceController extends BaseController
{
    /**
     * @Route("/imprime/{id}.docx", name="apc_ressource_export_one_word", methods="GET")
     *
     */
    public function exportWordOne(MyWord $myWord, ApcRessource $apcRessource)
    {
        return $myWord->exportRessource($apcRessource);
    }

    /**
     * @Route("/imprime/{id}.pdf", name="apc_ressource_export_one", methods="GET")
     *
     */
    public function exportOne(MyPDF $myPDF, ApcRessource $apcRessource)
    {
        return $myPDF::generePdf(
            'pdf/apc/fiche_ressource.html.twig',
            ['apc_sae' => $apcRessource],
            'ressource',
            $this->getDepartement()
        );
    }

//    /**
//     * @Route("/export.{_format}", name="administration_apc_sae_export", methods="GET",
//     *                             requirements={"_format"="csv|xlsx|pdf"})
//     *
//     * @param $_format
//     */
//    public function export(MyExport $myExport, ApcSaeRepository $apcSaeRepository, $_format): Response
//    {
//        $actualites = $apcSaeRepository->getByDiplome($this->getDepartement());
//
//        return $myExport->genereFichierGenerique(
//            $_format,
//            $actualites,
//            'actualites',
//            ['actualite_administration', 'utilisateur'],
//            ['titre', 'texte', 'departement' => ['libelle']]
//        );
//    }

    /**
     * @Route("/ajax-ac", name="apc_ressources_ajax_ac", methods={"POST"}, options={"expose":true})
     */
    public function ajaxAc(
        SemestreRepository $semestreRepository,
        ApcRessourceApprentissageCritiqueRepository $apcRessourceApprentissageCritiqueRepository,
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        Request $request
    ): Response {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        $competences = $request->request->get('competences');
        if ($semestre !== null && count($competences) > 0) {
            if ($request->request->get('ressource') !== null) {
                $tabAcSae = $apcRessourceApprentissageCritiqueRepository->findArrayIdAc($request->request->get('ressource'));
            } else {
                $tabAcSae = [];
            }

            $datas = $apcApprentissageCritiqueRepository->findBySemestreAndCompetences($semestre->getAnnee(),
                $competences);

            $t = [];
            foreach ($datas as $d) {
                $b = [];

                $b['id'] = $d->getId();
                $b['libelle'] = $d->getLibelle();
                $b['code'] = $d->getCode();
                $b['checked'] = in_array($d->getId(), $tabAcSae) === true ? 'checked="checked"' : '';
                if ($d->getNiveau() !== null && $d->getNiveau()->getCompetence() !== null && !array_key_exists($d->getNiveau()->getCompetence()->getNomCourt(),
                        $t)) {
                    $t[$d->getNiveau()->getCompetence()->getNomCourt()] = [];
                }
                $t[$d->getNiveau()->getCompetence()->getNomCourt()][] = $b;
            }

            return $this->json($t);
        }

        return $this->json(false);
    }

    /**
     * @Route("/ajax-sae", name="apc_sae_ajax", methods={"POST"}, options={"expose":true})
     */
    public function ajaxSae(
        SemestreRepository $semestreRepository,
        ApcSaeRessourceRepository $apcSaeRessourceRepository,
        ApcSaeRepository $apcSaeRepository,
        Request $request
    ): Response {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        if ($semestre !== null) {
            if ($request->request->get('ressource') !== null) {
                $tabAcSae = $apcSaeRessourceRepository->findArrayIdSae($request->request->get('ressource'));
            } else {
                $tabAcSae = [];
            }

            $datas = $apcSaeRepository->findBySemestre($semestre);

            $t = [];
            foreach ($datas as $d) {
                $b = [];

                $b['id'] = $d->getId();
                $b['libelle'] = $d->getLibelle();
                $b['code'] = $d->getCodeSae();
                $b['checked'] = in_array($d->getId(), $tabAcSae) === true ? 'checked="checked"' : '';
                $t[] = $b;
            }

            return $this->json($t);
        }

        return $this->json(false);
    }

    /**
     * @Route("/new/{diplome}", name="apc_ressource_new", methods={"GET","POST"})
     */
    public function new(
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        ApcSaeRepository $apcSaeRepository,
        Request $request,
        Diplome $diplome
    ): Response {
        $apcRessource = new ApcRessource();
        $form = $this->createForm(ApcRessourceType::class, $apcRessource, [
            'diplome' => $diplome
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcRessource);

            $acs = $request->request->get('ac');
            if (is_array($acs)) {
                foreach ($acs as $idAc) {
                    $ac = $apcApprentissageCritiqueRepository->find($idAc);
                    $saeAc = new ApcRessourceApprentissageCritique($apcRessource, $ac);
                    $this->entityManager->persist($saeAc);
                }
            }

            $saes = $request->request->get('saes');
            if (is_array($saes)) {
                foreach ($saes as $idAc) {
                    $apcSae = $apcSaeRepository->find($idAc);
                    $saeRes = new ApcSaeRessource($apcSae, $apcRessource);
                    $this->entityManager->persist($saeRes);
                }
            }

            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.new.success.flash'
            );

            return $this->redirectToRoute('administration_matiere_index', ['diplome' => $diplome->getId()]);
        }

        return $this->render('apc/apc_ressource/new.html.twig', [
            'apc_ressource' => $apcRessource,
            'diplome' => $diplome,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/{id}", name="apc_ressource_show", methods={"GET"})
     */
    public function show(ApcRessource $apcRessource): Response
    {
        return $this->render('apc/apc_ressource/show.html.twig', [
            'apc_ressource' => $apcRessource,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="apc_ressource_edit", methods={"GET","POST"})
     */
    public function edit(
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        ApcSaeRepository $apcSaeRepository,
        Request $request,
        ApcRessource $apcRessource
    ): Response {
        $form = $this->createForm(ApcRessourceType::class, $apcRessource, [
            'diplome' => $apcRessource->getDiplome()
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            foreach ($apcRessource->getApcRessourceApprentissageCritiques() as $ac) {
                $this->entityManager->remove($ac);
            }

            $acs = $request->request->get('ac');
            if (is_array($acs)) {
                foreach ($acs as $idAc) {
                    $ac = $apcApprentissageCritiqueRepository->find($idAc);
                    $saeAc = new ApcRessourceApprentissageCritique($apcRessource, $ac);
                    $this->entityManager->persist($saeAc);
                }
            }

            foreach ($apcRessource->getApcSaeRessources() as $ac) {
                $this->entityManager->remove($ac);
            }
            $saes = $request->request->get('saes');
            if (is_array($saes)) {
                foreach ($saes as $idAc) {
                    $apcSae = $apcSaeRepository->find($idAc);
                    $saeRes = new ApcSaeRessource($apcSae, $apcRessource);
                    $this->entityManager->persist($saeRes);
                }
            }

            $this->entityManager->flush();

            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.edit.success.flash'
            );

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_matiere_index',
                    ['diplome' => $apcRessource->getDiplome()->getId()]);
            }

            return $this->redirectToRoute('administration_apc_ressource_edit',
                ['id' => $apcRessource->getId()]);
        }

        return $this->render('apc/apc_ressource/edit.html.twig', [
            'apc_ressource' => $apcRessource,
            'form' => $form->createView(),
            'diplome' => $apcRessource->getDiplome()
        ]);
    }

    /**
     * @Route("/{id}", name="apc_ressource_delete", methods="DELETE")
     */
    public function delete(Request $request, ApcRessource $apcRessource): Response
    {
        $id = $apcRessource->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($apcRessource);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.ressource.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="apc_ressource_duplicate", methods="GET|POST")
     */
    public function duplicate(ApcRessource $apcRessource): Response
    {
        $newApcRessource = clone $apcRessource;

        $this->entityManager->persist($newApcRessource);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.ressource.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_ressource_edit', ['id' => $newApcRessource->getId()]);
    }
}
