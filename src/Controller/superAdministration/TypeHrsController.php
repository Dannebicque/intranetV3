<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/TypeHrsController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeHrs;
use App\Form\TypeHrsType;
use App\Classes\MyExport;
use App\Repository\TypeHrsRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/type-hrs")
 */
class TypeHrsController extends BaseController
{
    /**
     * @Route("/", name="sa_type_hrs_index", methods="GET")
     * @param TypeHrsRepository $typeHrsRepository
     *
     * @return Response
     */
    public function index(TypeHrsRepository $typeHrsRepository): Response
    {
        return $this->render('super-administration/type_hrs/index.html.twig',
            ['type_hrs' => $typeHrsRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="sa_type_hrs_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param TypeHrsRepository   $typeHrsRepository
     *
     * @param                     $_format
     *
     * @return Response
     */
    public function export(MyExport $myExport, TypeHrsRepository $typeHrsRepository, $_format): Response
    {
        $typeHrs = $typeHrsRepository->findAll();

        return $myExport->genereFichierGenerique(
            $_format,
            $typeHrs,
            'typeHrs',
            ['type_hrs_administration'],
            ['libelle', 'type', 'incluService', 'maximum']
        );
    }

    /**
     * @Route("/new", name="sa_type_hrs_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $typeHr = new TypeHrs();
        $form = $this->createForm(TypeHrsType::class, $typeHr, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($typeHr);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_hrs.add.success.flash');

            return $this->redirectToRoute('sa_type_hrs_index');
        }

        return $this->render('super-administration/type_hrs/new.html.twig', [
            'type_hr' => $typeHr,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_type_hrs_show", methods="GET")
     * @param TypeHrs $typeHr
     *
     * @return Response
     */
    public function show(TypeHrs $typeHr): Response
    {
        return $this->render('super-administration/type_hrs/show.html.twig', ['type_hr' => $typeHr]);
    }

    /**
     * @Route("/{id}/edit", name="sa_type_hrs_edit", methods="GET|POST")
     * @param Request $request
     * @param TypeHrs $typeHr
     *
     * @return Response
     */
    public function edit(Request $request, TypeHrs $typeHr): Response
    {
        $form = $this->createForm(TypeHrsType::class, $typeHr, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_hrs.edit.success.flash');

            if ($request->request->get('btn_update') !== null) {
                return $this->redirectToRoute('sa_type_hrs_index');
            }
            return $this->redirectToRoute('sa_type_hrs_edit', ['id' => $typeHr->getId()]);
        }

        return $this->render('super-administration/type_hrs/edit.html.twig', [
            'type_hrs' => $typeHr,
            'form'     => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_type_hrs_duplicate", methods="GET|POST")
     * @param TypeHrs $typeHrs
     *
     * @return Response
     */
    public function duplicate(TypeHrs $typeHrs): Response
    {
        $newTypeHrs = clone $typeHrs;

        $this->entityManager->persist($newTypeHrs);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_type_hrs_edit', ['id' => $newTypeHrs->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_type_hrs_delete", methods="DELETE")
     * @param Request $request
     * @param TypeHrs $typeHrs
     *
     * @return Response
     */
    public function delete(Request $request, TypeHrs $typeHrs): Response
    {
        $id = $typeHrs->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            if (count($typeHrs->getHrs()) === 0) {
                $this->entityManager->remove($typeHrs);
                $this->entityManager->flush();


                return $this->json($id, Response::HTTP_OK);
            }

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }


        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
