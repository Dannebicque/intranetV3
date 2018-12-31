<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Ufr;
use App\Form\UfrType;
use App\MesClasses\MyExport;
use App\Repository\UfrRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/ufr")
 */
class UfrController extends BaseController
{
    /**
     * @Route("/", name="sa_ufr_index", methods="GET")
     * @param UfrRepository $ufrRepository
     *
     * @return Response
     */
    public function index(UfrRepository $ufrRepository): Response
    {
        return $this->render('super-administration/ufr/index.html.twig', ['ufrs' => $ufrRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="sa_ufr_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param UfrRepository $ufrRepository
     *
     * @param                     $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function export(MyExport $myExport, UfrRepository $ufrRepository, $_format): Response
    {
        $ufrs = $ufrRepository->findAll();
        $response = $myExport->genereFichierGenerique(
            $_format,
            $ufrs,
            'ufr',
            ['actualite_administration', 'utilisateur'],
            ['titre', 'texte', 'formation' => ['libelle']]
        );//todo: ajuster les champs

        return $response;
    }

    /**
     * @Route("/new", name="sa_ufr_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $ufr = new Ufr();
        $form = $this->createForm(UfrType::class, $ufr, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($ufr);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ufr.add.success.flash');

            return $this->redirectToRoute('sa_ufr_index');
        }

        return $this->render('super-administration/ufr/new.html.twig', [
            'ufr'  => $ufr,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_ufr_show", methods="GET")
     * @param Ufr $ufr
     *
     * @return Response
     */
    public function show(Ufr $ufr): Response
    {
        return $this->render('super-administration/ufr/show.html.twig', ['ufr' => $ufr]);
    }

    /**
     * @Route("/{id}/edit", name="sa_ufr_edit", methods="GET|POST")
     * @param Request $request
     * @param Ufr     $ufr
     *
     * @return Response
     */
    public function edit(Request $request, Ufr $ufr): Response
    {
        $form = $this->createForm(UfrType::class, $ufr, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ufr.edit.success.flash');

            return $this->redirectToRoute('sa_ufr_edit', ['id' => $ufr->getId()]);
        }

        return $this->render('super-administration/ufr/edit.html.twig', [
            'ufr'  => $ufr,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_ufr_duplicate", methods="GET|POST")
     * @param Ufr $ufr
     *
     * @return Response
     */
    public function duplicate(Ufr $ufr): Response
    {
        $newUfr = clone $ufr;

        $this->entityManager->persist($newUfr);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_ufr_edit', ['id' => $newUfr->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_ufr_delete", methods="DELETE")
     */
    public function delete(): void
    {
    }
}
