<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Bac;
use App\Entity\Constantes;
use App\Form\BacType;
use App\MesClasses\MyExport;
use App\Repository\BacRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/bac")
 */
class BacController extends BaseController
{
    /**
     * @Route("/", name="sa_bac_index", methods={"GET"})
     */
    public function index(BacRepository $bacRepository): Response
    {
        return $this->render('super-administration/bac/index.html.twig', ['bacs' => $bacRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="sa_bac_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param BacRepository $bacRepository
     *
     * @param                     $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function export(MyExport $myExport, BacRepository $bacRepository, $_format): Response
    {
        $bacs = $bacRepository->findAll();
        $response = $myExport->genereFichierGenerique(
            $_format,
            $bacs,
            'bacs',
            ['actualite_administration', 'utilisateur'],
            ['titre', 'texte', 'formation' => ['libelle']]
        );//todo: ajuster les champs

        return $response;
    }

    /**
     * @Route("/new", name="sa_bac_new", methods={"GET","POST"})
     */
    public function create(Request $request): Response
    {
        $bac = new Bac();
        $form = $this->createForm(BacType::class, $bac);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($bac);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bac.add.success.flash');

            return $this->redirectToRoute('sa_bac_index');
        }

        return $this->render('super-administration/bac/new.html.twig', [
            'bac' => $bac,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_bac_show", methods={"GET"})
     */
    public function show(Bac $bac): Response
    {
        return $this->render('super-administration/bac/show.html.twig', ['bac' => $bac]);
    }

    /**
     * @Route("/{id}/edit", name="sa_bac_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Bac $bac): Response
    {
        $form = $this->createForm(BacType::class, $bac);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bac.edit.success.flash');
            return $this->redirectToRoute('sa_bac_index', ['id' => $bac->getId()]);
        }

        return $this->render('super-administration/bac/edit.html.twig', [
            'bac' => $bac,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_bac_duplicate", methods="GET|POST")
     * @param Bac $bac
     *
     * @return Response
     */
    public function duplicate(Bac $bac): Response
    {
        $newBac = clone $bac;

        $this->entityManager->persist($newBac);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_bac_edit', ['id' => $newBac->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_bac_delete", methods="DELETE")
     * @param Request $request
     * @param Bac   $bac
     *
     * @return Response
     */
    public function delete(Request $request, Bac $bac): Response
    {
        if ($this->isCsrfTokenValid('delete' . $bac->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($bac);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bac.delete.success.flash');
        }

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bac.delete.error.flash');

        return $this->redirectToRoute('sa_bac_index');
    }
}
