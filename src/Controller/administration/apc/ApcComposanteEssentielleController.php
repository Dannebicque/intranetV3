<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcComposanteEssentielleController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/10/2020 09:08

namespace App\Controller\administration\apc;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\ApcComposanteEssentielle;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcComposanteEssentielleType;
use App\Repository\ApcComposanteEssentielleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/apc/composante/essentielle")
 */
class ApcComposanteEssentielleController extends BaseController
{
    /**
     * @Route("/", name="administration_apc_composante_essentielle_index", methods={"GET"})
     * @param ApcComposanteEssentielleRepository $apcComposanteEssentielleRepository
     *
     * @return Response
     */
    public function index(ApcComposanteEssentielleRepository $apcComposanteEssentielleRepository): Response
    {
        return $this->render('administration/apc/apc_composante_essentielle/index.html.twig', [
            'apc_composante_essentielles' => $apcComposanteEssentielleRepository->findAll(),
        ]);
    }

    /**
     * @Route("/{diplome}/export.{_format}", name="administration_apc_composante_essentielle_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport                           $myExport
     * @param ApcComposanteEssentielleRepository $apcComposanteEssentielleRepository
     * @param Diplome                            $diplome
     * @param                                    $_format
     *
     * @return Response
     */
    public function export(
        MyExport $myExport,
        ApcComposanteEssentielleRepository $apcComposanteEssentielleRepository,
        Diplome $diplome,
        $_format
    ): Response {
        $actualites = $apcComposanteEssentielleRepository->getByDiplome($diplome);

        return $myExport->genereFichierGenerique(
            $_format,
            $actualites,
            'actualites',
            ['actualite_administration', 'utilisateur'],
            ['titre', 'texte', 'departement' => ['libelle']]
        );
    }

    /**
     * @Route("/new", name="administration_apc_composante_essentielle_new", methods={"GET","POST"})
     * @param Request $request
     *
     * @return Response
     */
    public function new(Request $request): Response
    {
        $apcComposanteEssentielle = new ApcComposanteEssentielle();
        $form = $this->createForm(ApcComposanteEssentielleType::class, $apcComposanteEssentielle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcComposanteEssentielle);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.composanteEssentielle.create.success.flash');

            return $this->redirectToRoute('administration_apc_composante_essentielle_index');
        }

        return $this->render('administration/apc/apc_composante_essentielle/new.html.twig', [
            'apc_composante_essentielle' => $apcComposanteEssentielle,
            'form'                       => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_apc_composante_essentielle_show", methods={"GET"})
     * @param ApcComposanteEssentielle $apcComposanteEssentielle
     *
     * @return Response
     */
    public function show(ApcComposanteEssentielle $apcComposanteEssentielle): Response
    {
        return $this->render('administration/apc/apc_composante_essentielle/show.html.twig', [
            'apc_composante_essentielle' => $apcComposanteEssentielle,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="administration_apc_composante_essentielle_edit", methods={"GET","POST"})
     * @param Request                  $request
     * @param ApcComposanteEssentielle $apcComposanteEssentielle
     *
     * @return Response
     */
    public function edit(Request $request, ApcComposanteEssentielle $apcComposanteEssentielle): Response
    {
        $form = $this->createForm(ApcComposanteEssentielleType::class, $apcComposanteEssentielle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.composanteEssentielle.edit.success.flash');

            return $this->redirectToRoute('administration_apc_composante_essentielle_index');
        }

        return $this->render('administration/apc/apc_composante_essentielle/edit.html.twig', [
            'apc_composante_essentielle' => $apcComposanteEssentielle,
            'form'                       => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_apc_composante_essentielle_delete", methods={"DELETE"})
     * @param Request                  $request
     * @param ApcComposanteEssentielle $apcComposanteEssentielle
     *
     * @return Response
     */
    public function delete(Request $request, ApcComposanteEssentielle $apcComposanteEssentielle): Response
    {
        if ($this->isCsrfTokenValid('delete' . $apcComposanteEssentielle->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($apcComposanteEssentielle);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.composanteEssentielle.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.composanteEssentielle.delete.error.flash');

        return $this->redirectToRoute('administration_apc_composante_essentielle_index');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_apc_composante_essentielle_duplicate", methods="GET|POST")
     * @param ApcComposanteEssentielle $apcComposanteEssentielle
     *
     * @return Response
     */
    public function duplicate(ApcComposanteEssentielle $apcComposanteEssentielle): Response
    {
        $newApcComposanteEssentielle = clone $apcComposanteEssentielle;

        $this->entityManager->persist($newApcComposanteEssentielle);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.composanteEssentielle.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_composante_essentielle_edit',
            ['id' => $newApcComposanteEssentielle->getId()]);
    }
}
