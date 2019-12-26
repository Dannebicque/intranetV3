<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/CelcatCalendrierController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:58
// @lastUpdate 25/11/2019 10:58

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Calendrier;
use App\Entity\Constantes;
use App\Form\CelcatCalendrierType;
use App\MesClasses\Celcat\MyCelcat;
use App\MesClasses\MyExport;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\CalendrierRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("super-administration/emploi-du-temps/calendrier")
 */
class CelcatCalendrierController extends BaseController
{
    /**
     * @Route("/", name="sa_celcat_calendrier_index", methods="GET")
     * @param CalendrierRepository $celcatCalendrierRepository
     *
     * @return Response
     */
    public function index(CalendrierRepository $celcatCalendrierRepository): Response
    {
        return $this->render('super-administration/celcat_calendrier/index.html.twig',
            ['celcat_calendriers' => $celcatCalendrierRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="sa_celcat_calendrier_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport             $myExport
     * @param CalendrierRepository $celcatCalendrierRepository
     * @param                      $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, CalendrierRepository $celcatCalendrierRepository, $_format): Response
    {
        $articles = $celcatCalendrierRepository->findAll();
        return $myExport->genereFichierGenerique(
            $_format,
            $articles,
            'celcat',
            ['celcat_administration'],
            ['semaineFormation', 'semaineReelle', 'dateLundi']
        );
    }

    /**
     * @Route("/new", name="sa_celcat_calendrier_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $celcatCalendrier = new Calendrier();
        $form = $this->createForm(CelcatCalendrierType::class, $celcatCalendrier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($celcatCalendrier);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'celcat_calendrier.create.success.flash');

            return $this->redirectToRoute('sa_celcat_calendrier_index');
        }

        return $this->render('super-administration/celcat_calendrier/new.html.twig', [
            'celcat_calendrier' => $celcatCalendrier,
            'form'              => $form->createView(),
        ]);
    }

    /**
     * @Route("/new/year", name="sa_celcat_calendrier_new_year", methods="GET|POST")
     * @param Request                      $request
     *
     * @param AnneeUniversitaireRepository $anneeUniversitaireRepository
     *
     * @return Response
     */
    public function createNewYear(
        Request $request,
        AnneeUniversitaireRepository $anneeUniversitaireRepository
    ): Response {
        if ($request->isMethod('POST')) {
            $annee = $anneeUniversitaireRepository->find($request->request->get('annee_universitaire'));
            if ($annee) {
                MyCelcat::getCalendar();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'celcat_calendrier.create_year.success.flash');
            } else {
                $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'celcat_calendrier.create_year.error.flash');
            }

            return $this->redirectToRoute('sa_celcat_calendrier_index');
        }

        return $this->render('super-administration/celcat_calendrier/create_new_year.html.twig',
            ['annees' => $anneeUniversitaireRepository->findAll()]);
    }

    /**
     * @Route("/{id}", name="sa_celcat_calendrier_show", methods="GET")
     * @param Calendrier $celcatCalendrier
     *
     * @return Response
     */
    public function show(Calendrier $celcatCalendrier): Response
    {
        return $this->render('super-administration/celcat_calendrier/show.html.twig',
            ['celcat_calendrier' => $celcatCalendrier]);
    }

    /**
     * @Route("/{id}/edit", name="sa_celcat_calendrier_edit", methods="GET|POST")
     * @param Request    $request
     * @param Calendrier $celcatCalendrier
     *
     * @return Response
     */
    public function edit(Request $request, Calendrier $celcatCalendrier): Response
    {
        $form = $this->createForm(CelcatCalendrierType::class, $celcatCalendrier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'celcat_calendrier.edit.success.flash');

            return $this->redirectToRoute('sa_celcat_calendrier_edit', ['id' => $celcatCalendrier->getId()]);
        }

        return $this->render('super-administration/celcat_calendrier/edit.html.twig', [
            'celcat_calendrier' => $celcatCalendrier,
            'form'              => $form->createView(),
        ]);
    }


    /**
     * @Route("/{id}", name="sa_celcat_calendrier_delete", methods="DELETE")
     * @param Request    $request
     * @param Calendrier $celcatCalendrier
     *
     * @return Response
     */
    public function delete(Request $request, Calendrier $celcatCalendrier): Response
    {
        $id = $celcatCalendrier->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($celcatCalendrier);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'celcat_calendrier.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'celcat_calendrier.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_celcat_calendrier_duplicate", methods="GET|POST")
     * @param Calendrier $celcatCalendrier
     *
     * @return Response
     */
    public function duplicate(Calendrier $celcatCalendrier): Response
    {
        $newCelcatCalendrier = clone $celcatCalendrier;

        $this->entityManager->persist($newCelcatCalendrier);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'celcat_calendrier.duplicate.success.flash');

        return $this->redirectToRoute('sa_celcat_calendrier_edit', ['id' => $newCelcatCalendrier->getId()]);
    }
}
