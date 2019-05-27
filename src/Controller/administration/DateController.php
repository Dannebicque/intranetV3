<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/DateController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Date;
use App\Form\DatesType;
use App\MesClasses\MyExport;
use App\Repository\DateRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/dates")
 */
class DateController extends BaseController
{
    /**
     * @Route("/", name="administration_date_index", methods="GET")
     * @param DateRepository $dateRepository
     *
     * @return Response
     */
    public function index(DateRepository $dateRepository): Response
    {
        return $this->render('administration/date/index.html.twig', ['dates' => $dateRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="administration_date_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport          $myExport
     * @param DateRepository    $dateRepository
     * @param                   $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, DateRepository $dateRepository, $_format): Response
    {
        $dates = $dateRepository->findByDepartement($this->dataUserSession->getDepartement(), 0);
        $response = $myExport->genereFichierGenerique(
            $_format,
            $dates,
            'dates',
            ['date_administration', 'utilisateur'],
            ['titre', 'texte', 'type', 'personnel' => ['nom', 'prenom']]
        );

        return $response;
    }

    /**
     * @Route("/new", name="administration_date_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $date = new Date();
        $form = $this->createForm(
            DatesType::class,
            $date,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($date);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'date.create.success.flash');

            return $this->redirectToRoute('administration_date_index');
        }

        return $this->render('administration/date/new.html.twig', [
            'date' => $date,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_date_show", methods="GET")
     * @param Date $date
     *
     * @return Response
     */
    public function show(Date $date): Response
    {
        return $this->render('administration/date/show.html.twig', ['date' => $date]);
    }

    /**
     * @Route("/{id}/edit", name="administration_date_edit", methods="GET|POST")
     * @param Request $request
     * @param Date    $date
     *
     * @return Response
     */
    public function edit(Request $request, Date $date): Response
    {
        $form = $this->createForm(
            DatesType::class,
            $date,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'date.edit.success.flash');

            return $this->redirectToRoute('administration_date_edit', ['id' => $date->getId()]);
        }

        return $this->render('administration/date/edit.html.twig', [
            'date' => $date,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_date_duplicate", methods="GET")
     * @param Date $date
     *
     * @return Response
     */
    public function duplicate(Date $date): Response
    {
        $newDate = clone $date;
        $this->entityManager->persist($newDate);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'date.duplicate.success.flash');

        return $this->redirectToRoute('administration_date_edit', ['id' => $newDate->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_date_delete", methods="DELETE")
     * @param Request $request
     * @param Date    $date
     *
     * @return Response
     */
    public function delete(Request $request, Date $date): Response
    {
        $id = $date->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($date);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'date.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'date.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
