<?php

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
 * @Route({"fr":"super-administration/aide",
 *         "en":"administration/help"}
 *)
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
     * @Route("/help", name="sa_help_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('super-administration/help/help.html.twig');
    }

    /**
     * @Route("/save", name="sa_help_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="sa_help_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
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
        $form = $this->createForm(HelpType::class, $help);
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
        $form = $this->createForm(HelpType::class, $help,
            ['formation' => $this->dataUserSession->getFormation()]);
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
