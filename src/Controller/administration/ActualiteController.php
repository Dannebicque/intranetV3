<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/ActualiteController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:46 PM
 *  *
 *
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Actualite;
use App\Entity\Constantes;
use App\Form\ActualiteType;
use App\MesClasses\MyExport;
use App\Repository\ActualiteRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/actualites")
 */
class ActualiteController extends BaseController
{
    /**
     * @Route("/", name="administration_actualite_index", methods="GET")
     * @param ActualiteRepository $actualiteRepository
     *
     * @return Response
     */
    public function index(ActualiteRepository $actualiteRepository): Response
    {
        return $this->render(
            'administration/actualite/index.html.twig',
            ['actualites' => $actualiteRepository->findByDepartement($this->dataUserSession->getDepartement())]
        );
    }

    /**
     * @Route("/export.{_format}", name="administration_actualite_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param ActualiteRepository $actualiteRepository
     *
     * @param                     $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, ActualiteRepository $actualiteRepository, $_format): Response
    {
        $actualites = $actualiteRepository->findByDepartement($this->dataUserSession->getDepartement(), 0);
        $response = $myExport->genereFichierGenerique(
            $_format,
            $actualites,
            'actualites',
            ['actualite_administration', 'utilisateur'],
            ['titre', 'texte', 'departement' => ['libelle']]
        );

        return $response;
    }

    /**
     * @Route("/new", name="administration_actualite_new", methods="GET|POST")
     * @param Request                $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $actualite = new Actualite($this->dataUserSession->getDepartement());
        $form = $this->createForm(ActualiteType::class, $actualite, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($actualite);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'actualite.add.success.flash');

            return $this->redirectToRoute('administration_actualite_index');
        }

        return $this->render('administration/actualite/new.html.twig', [
            'actualite' => $actualite,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_actualite_show", methods="GET")
     * @param Actualite $actualite
     *
     * @return Response
     */
    public function show(Actualite $actualite): Response
    {
        return $this->render('administration/actualite/show.html.twig', ['actualite' => $actualite]);
    }

    /**
     * @Route("/{id}/edit", name="administration_actualite_edit", methods="GET|POST")
     * @param Request                $request
     * @param Actualite              $actualite
     *
     * @return Response
     */
    public function edit(Request $request, Actualite $actualite): Response
    {
        $form = $this->createForm(ActualiteType::class, $actualite, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'actualite.edit.success.flash');

            return $this->redirectToRoute('administration_actualite_edit', ['id' => $actualite->getId()]);
        }

        return $this->render('administration/actualite/edit.html.twig', [
            'actualite' => $actualite,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_actualite_delete", methods="DELETE")
     * @param Request                $request
     * @param Actualite              $actualite
     *
     * @return Response
     */
    public function delete(Request $request, Actualite $actualite): Response
    {
        $id = $actualite->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($actualite);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'actualite.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'actualite.delete.error.flash');
        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_actualite_duplicate", methods="GET|POST")
     * @param Actualite $actualite
     *
     * @return Response
     */
    public function duplicate(Actualite $actualite): Response
    {
        $newActualite = clone $actualite;

        $this->entityManager->persist($newActualite);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'actualite.duplicate.success.flash');

        return $this->redirectToRoute('administration_actualite_edit', ['id' => $newActualite->getId()]);
    }
}
