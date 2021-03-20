<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcSaeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/03/2021 17:50
 */

namespace App\Controller\administration\apc;

use App\Classes\Pdf\MyPDF;
use App\Classes\Word\MyWord;
use App\Controller\BaseController;
use App\Entity\ApcSae;
use App\Entity\ApcSaeApprentissageCritique;
use App\Entity\ApcSaeRessource;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcSaeType;
use App\Repository\ApcApprentissageCritiqueRepository;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeApprentissageCritiqueRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\ApcSaeRessourceRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/apc/sae", name="administration_")
 */
class ApcSaeController extends BaseController
{
    /**
     * @Route("/imprime/{id}.docx", name="apc_sae_export_one_word", methods="GET")
     *
     */
    public function exportWordOne(MyWord $myWord, ApcSae $apcSae)
    {
        return $myWord->exportSae($apcSae);
    }

    /**
     * @Route("/imprime/{id}.pdf", name="apc_sae_export_one", methods="GET")
     *
     */
    public function exportOne(MyPDF $myPDF, ApcSae $apcSae)
    {
        return $myPDF::generePdf(
            'pdf/apc/fiche_sae.html.twig',
            ['apc_sae' => $apcSae],
            'sae',
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
     * @Route("/ajax-ac", name="apc_sae_ajax_ac", methods={"POST"}, options={"expose":true})
     */
    public function ajaxAc(
        SemestreRepository $semestreRepository,
        ApcSaeApprentissageCritiqueRepository $apcSaeApprentissageCritiqueRepository,
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        Request $request
    ): Response {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        $competences = $request->request->get('competences');
        if ($semestre !== null && count($competences) > 0) {
            if ($request->request->get('sae') !== null) {
                $tabAcSae = $apcSaeApprentissageCritiqueRepository->findArrayIdAc($request->request->get('sae'));
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
            if ($request->request->get('sae') !== null) {
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
                $b['code'] = $d->getCodeRessource();
                $b['checked'] = in_array($d->getId(), $tabAcSae) === true ? 'checked="checked"' : '';
                $t[] = $b;
            }

            return $this->json($t);
        }

        return $this->json(false);
    }

    /**
     * @Route("/new/{diplome}", name="apc_sae_new", methods={"GET","POST"})
     */
    public function new(
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        ApcRessourceRepository $apcRessourceRepository,
        Request $request,
        Diplome $diplome
    ): Response {
        $apcSae = new ApcSae();
        $form = $this->createForm(ApcSaeType::class, $apcSae, ['diplome' => $diplome]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $this->entityManager->persist($apcSae);
            //sauvegarde des AC
            $acs = $request->request->get('ac');
            foreach ($acs as $idAc) {
                $ac = $apcApprentissageCritiqueRepository->find($idAc);
                $saeAc = new ApcSaeApprentissageCritique($apcSae, $ac);
                $this->entityManager->persist($saeAc);
            }

            $acs = $request->request->get('ressources');
            foreach ($acs as $idAc) {
                $res = $apcRessourceRepository->find($idAc);
                $saeRes = new ApcSaeRessource($apcSae, $res);
                $this->entityManager->persist($saeRes);
            }

            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.sae.new.success.flash'
            );

            return $this->redirectToRoute('administration_matiere_index', ['diplome' => $diplome->getId()]);
        }

        return $this->render('apc/apc_sae/new.html.twig', [
            'apc_sae' => $apcSae,
            'form' => $form->createView(),
            'diplome' => $diplome,
        ]);
    }

    /**
     * @Route("/voir/{id}", name="apc_sae_show", methods={"GET"})
     */
    public function show(ApcSae $apcSae): Response
    {
        return $this->render('apc/apc_sae/show.html.twig', [
            'apc_sae' => $apcSae,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="apc_sae_edit", methods={"GET","POST"})
     */
    public function edit(ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        Request $request, ApcSae $apcSae): Response
    {
        $form = $this->createForm(ApcSaeType::class, $apcSae, ['diplome' => $apcSae->getDiplome()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //on supprimer ceux présent
            foreach ($apcSae->getApcSaeApprentissageCritiques() as $ac)
            {
                $this->entityManager->remove($ac);
            }

            //sauvegarde des AC
            $acs = $request->request->get('ac');
            foreach ($acs as $idAc) {
                $ac = $apcApprentissageCritiqueRepository->find($idAc);
                $saeAc = new ApcSaeApprentissageCritique($apcSae, $ac);
                $this->entityManager->persist($saeAc);
            }

            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.sae.edit.success.flash'
            );

            return $this->redirectToRoute('administration_matiere_index', ['diplome' => $apcSae->getDiplome()->getId()]);
        }

        return $this->render('apc/apc_sae/edit.html.twig', [
            'apc_sae' => $apcSae,
            'form' => $form->createView(),
            'diplome' => $apcSae->getDiplome()
        ]);
    }

    /**
     * @Route("/{id}", name="apc_sae_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ApcSae $apcSae): Response
    {
        $id = $apcSae->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($apcSae);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.sae.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.sae.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="apc_sae_duplicate", methods="GET|POST")
     */
    public function duplicate(ApcSae $apcSae): Response
    {
        $newApcSae = clone $apcSae;

        $this->entityManager->persist($newApcSae);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.sae.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_sae_edit', ['id' => $newApcSae->getId()]);
    }
}
