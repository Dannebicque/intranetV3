<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcNiveauController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/10/2020 09:08

namespace App\Controller\administration\apc;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\ApcNiveau;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcNiveauType;
use App\Repository\ApcNiveauRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/apc/niveau")
 */
class ApcNiveauController extends BaseController
{
    /**
     * @Route("/", name="administration_apc_niveau_index", methods={"GET"})
     * @param ApcNiveauRepository $apcNiveauRepository
     *
     * @return Response
     */
    public function index(ApcNiveauRepository $apcNiveauRepository): Response
    {
        return $this->render('administration/apc/apc_niveau/index.html.twig', [
            'apc_niveaus' => $apcNiveauRepository->findAll(),
        ]);
    }

    /**
     * @Route("/{diplome}/export.{_format}", name="administration_apc_niveau_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param ApcNiveauRepository $apcNiveauRepository
     * @param Diplome             $diplome
     * @param                     $_format
     *
     * @return Response
     */
    public function export(
        MyExport $myExport,
        ApcNiveauRepository $apcNiveauRepository,
        Diplome $diplome,
        $_format
    ): Response {
        $niveaux = $apcNiveauRepository->getByDiplome($diplome);

        return $myExport->genereFichierGenerique(
            $_format,
            $niveaux,
            'apc_niveau',
            ['actualite_administration', 'utilisateur'],
            ['titre', 'texte', 'departement' => ['libelle']]
        );
    }

    /**
     * @Route("/new", name="administration_apc_niveau_new", methods={"GET","POST"})
     * @param Request $request
     *
     * @return Response
     */
    public function new(Request $request): Response
    {
        $apcNiveau = new ApcNiveau();
        $form = $this->createForm(ApcNiveauType::class, $apcNiveau);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcNiveau);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apcNiveau.create.success.flash');

            return $this->redirectToRoute('administration_apc_niveau_index');
        }

        return $this->render('administration/apc/apc_niveau/new.html.twig', [
            'apc_niveau' => $apcNiveau,
            'form'       => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_apc_niveau_show", methods={"GET"})
     * @param ApcNiveau $apcNiveau
     *
     * @return Response
     */
    public function show(ApcNiveau $apcNiveau): Response
    {
        return $this->render('administration/apc/apc_niveau/show.html.twig', [
            'apc_niveau' => $apcNiveau,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="administration_apc_niveau_edit", methods={"GET","POST"})
     * @param Request   $request
     * @param ApcNiveau $apcNiveau
     *
     * @return Response
     */
    public function edit(Request $request, ApcNiveau $apcNiveau): Response
    {
        $form = $this->createForm(ApcNiveauType::class, $apcNiveau);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apcNiveau.edit.success.flash');

            return $this->redirectToRoute('administration_apc_niveau_index');
        }

        return $this->render('administration/apc/apc_niveau/edit.html.twig', [
            'apc_niveau' => $apcNiveau,
            'form'       => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_apc_niveau_delete", methods={"DELETE"})
     * @param Request   $request
     * @param ApcNiveau $apcNiveau
     *
     * @return Response
     */
    public function delete(Request $request, ApcNiveau $apcNiveau): Response
    {
        if ($this->isCsrfTokenValid('delete' . $apcNiveau->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($apcNiveau);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apcNiveau.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apcNiveau.delete.error.flash');

        return $this->redirectToRoute('administration_apc_niveau_index');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_apc_niveau_duplicate", methods="GET|POST")
     * @param ApcNiveau $apcNiveau
     *
     * @return Response
     */
    public function duplicate(ApcNiveau $apcNiveau): Response
    {
        $newApcNiveau = clone $apcNiveau;

        $this->entityManager->persist($newApcNiveau);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apcNiveau.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_niveau_edit', ['id' => $newApcNiveau->getId()]);
    }
}
