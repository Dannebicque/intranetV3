<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/UfrController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Ufr;
use App\Form\UfrType;
use App\Classes\MyExport;
use App\Repository\UfrRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/ufr")
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
     * @param UfrRepository       $ufrRepository
     *
     * @param                     $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, UfrRepository $ufrRepository, $_format): Response
    {
        $ufrs = $ufrRepository->findAll();

        return $myExport->genereFichierGenerique(
            $_format,
            $ufrs,
            'ufr',
            ['ufr_administration', 'utilisateur'],
            ['libelle', 'responsable' => ['nom', 'prenom', 'mailUniv']]
        );
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
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ufr.duplicate.success.flash');

        return $this->redirectToRoute('sa_ufr_edit', ['id' => $newUfr->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_ufr_delete", methods="DELETE")
     * @param Request $request
     * @param Ufr     $ufr
     *
     * @return Response
     */
    public function delete(Request $request, Ufr $ufr): Response
    {
        $id = $ufr->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            if (count($ufr->getDepartements()) === 0) {
                $this->entityManager->remove($ufr);
                $this->entityManager->flush();

                return $this->json($id, Response::HTTP_OK);
            }

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
