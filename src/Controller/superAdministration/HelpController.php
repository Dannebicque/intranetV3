<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/HelpController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Help;
use App\Form\HelpType;
use App\Repository\HelpRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/structure/aide")
 */
class HelpController extends BaseController
{
    /**
     * @Route("/", name="sa_help_index", methods="GET")
     * @param HelpRepository $helpRepository
     *
     * @return Response
     */
    public function index(HelpRepository $helpRepository): Response
    {
        return $this->render('super-administration/help/index.html.twig', ['helps' => $helpRepository->findAll()]);
    }

    /**
     * @Route("/new", name="sa_help_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $help = new Help();
        $form = $this->createForm(HelpType::class, $help, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($help);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'help.add.success.flash');

            return $this->redirectToRoute('sa_help_index');
        }

        return $this->render('super-administration/help/new.html.twig', [
            'help' => $help,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_help_show", methods="GET")
     * @param Help $help
     *
     * @return Response
     */
    public function show(Help $help): Response
    {
        return $this->render('super-administration/help/show.html.twig', ['help' => $help]);
    }

    /**
     * @Route("/{id}/edit", name="sa_help_edit", methods="GET|POST")
     * @param Request $request
     * @param Help    $help
     *
     * @return Response
     */
    public function edit(Request $request, Help $help): Response
    {
        $form = $this->createForm(
            HelpType::class,
            $help,
            [
                'attr' => [
                    'data-provide' => 'validation'
                ]
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'help.edit.success.flash');

            return $this->redirectToRoute('sa_help_edit', ['id' => $help->getId()]);
        }

        return $this->render('super-administration/help/edit.html.twig', [
            'help' => $help,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_help_duplicate", methods="GET|POST")
     * @param Help $help
     *
     * @return Response
     */
    public function duplicate(Help $help): Response
    {
        $newHelp = clone $help;

        $this->entityManager->persist($newHelp);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_help_edit', ['id' => $newHelp->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_help_delete", methods="DELETE")
     * @param Request $request
     * @param Help    $help
     *
     * @return Response
     */
    public function delete(Request $request, Help $help): Response
    {
        $id = $help->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($help);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'help.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'help.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
