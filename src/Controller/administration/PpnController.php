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
 * @Route("/administration/programme-pedagogique")
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
     * @Route("/copie", name="administration_ppn_copie_integrale", methods="POST")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function copieIntegrale(Request $request): Response
    {
        //effacer contenu PPN de destination
        //todo: a finaliser
        //Copie PPN

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.copie.integrale.success.flash');

        return $this->redirectToRoute('administration_ppn_index');
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
            'departement' => $this->dataUserSession->getDepartement(),
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
            'departement' => $this->dataUserSession->getDepartement(),
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

    /**
     * @Route("/{id}/duplicate", name="administration_ppn_duplicate", methods="GET|POST")
     * @param Ppn $ppn
     *
     * @return Response
     */
    public function duplicate(Ppn $ppn): Response
    {
        $newPpn = clone $ppn;

        $this->entityManager->persist($newPpn);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.duplicate.success.flash');

        return $this->redirectToRoute('administration_ppn_edit', ['id' => $newPpn->getId()]);
    }


}
