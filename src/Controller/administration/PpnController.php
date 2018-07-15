<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Ppn;
use App\Form\PpnType;
use App\Repository\PpnRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/programme-pedagogique",
 *         "en":"administration/educational-program"}
 *)
 */
class PpnController extends BaseController
{
    /**
     * @Route("/", name="administration_ppn_index", methods="GET")
     * @param PpnRepository $ppnRepository
     *
     * @return Response
     */
    public function index(PpnRepository $ppnRepository): Response
    {
        return $this->render('administration/ppn/index.html.twig', ['ppns' => $ppnRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="administration_ppn_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_ppn_new", methods="GET|POST")
     * @param Request                $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $ppn = new Ppn();
        $form = $this->createForm(PpnType::class, $ppn, [
            'formation' => $this->dataUserSession->getFormation(),
            'attr'      => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($ppn);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.add.success.flash');

            return $this->redirectToRoute('administration_ppn_index');
        }

        return $this->render('administration/ppn/new.html.twig', [
            'ppn'  => $ppn,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_ppn_show", methods="GET")
     * @param Ppn $ppn
     *
     * @return Response
     */
    public function show(Ppn $ppn): Response
    {
        return $this->render('administration/ppn/show.html.twig', ['ppn' => $ppn]);
    }

    /**
     * @Route("/{id}/edit", name="administration_ppn_edit", methods="GET|POST")
     * @param Request                $request
     * @param Ppn                    $ppn
     *
     * @return Response
     */
    public function edit(Request $request, Ppn $ppn): Response
    {
        $form = $this->createForm(PpnType::class, $ppn, [
            'formation' => $this->dataUserSession->getFormation(),
            'attr'      => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.edit.success.flash');

            return $this->redirectToRoute('administration_ppn_index');
        }

        return $this->render('administration/ppn/edit.html.twig', [
            'ppn'  => $ppn,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_ppn_delete", methods="DELETE")
     */
    public function delete(): void
    {
        //todo: comment gérer les matièrs ?
    }
}
