<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/CelcatCalendrierController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\superAdministration;

use App\Classes\Celcat\MyCelcat;
use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Calendrier;
use App\Entity\Constantes;
use App\Form\CelcatCalendrierType;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\CalendrierRepository;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/emploi-du-temps/calendrier')]
class CelcatCalendrierController extends BaseController
{
    #[Route(path: '/', name: 'sa_celcat_calendrier_index', methods: 'GET')]
    public function index(CalendrierRepository $celcatCalendrierRepository): Response
    {
        return $this->render('super-administration/celcat_calendrier/index.html.twig',
            ['celcat_calendriers' => $celcatCalendrierRepository->findAll()]);
    }

    #[Route(path: '/export.{_format}', name: 'sa_celcat_calendrier_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, CalendrierRepository $celcatCalendrierRepository, string $_format): Response
    {
        $celcatCalendrier = $celcatCalendrierRepository->findAll();
        $data = $mySerializer->getDataFromSerialization(
            $celcatCalendrier,
            ['semaineFormation', 'semaineReelle', 'dateLundi', 'anneeUniversitaire' => ['libelle']],
            ['celcat_administration']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'celcatCalendrier',
        );
    }

    #[Route(path: '/new', name: 'sa_celcat_calendrier_new', methods: 'GET|POST')]
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
            'form' => $form,
        ]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/new/year', name: 'sa_celcat_calendrier_new_year', methods: 'GET|POST')]
    public function createNewYear(MyCelcat $myCelcat, Request $request, AnneeUniversitaireRepository $anneeUniversitaireRepository): Response
    {
        if ($request->isMethod('POST')) {
            $annee = $anneeUniversitaireRepository->find($request->request->get('annee_universitaire'));
            if ($annee) {
                $myCelcat->getCalendar($annee);
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'celcat_calendrier.create_year.success.flash');
            } else {
                $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'celcat_calendrier.create_year.error.flash');
            }

            return $this->redirectToRoute('sa_celcat_calendrier_index');
        }

        return $this->render('super-administration/celcat_calendrier/create_new_year.html.twig',
            ['annees' => $anneeUniversitaireRepository->findAll()]);
    }

    #[Route(path: '/{id}', name: 'sa_celcat_calendrier_show', methods: 'GET')]
    public function show(Calendrier $celcatCalendrier): Response
    {
        return $this->render('super-administration/celcat_calendrier/show.html.twig',
            ['celcat_calendrier' => $celcatCalendrier]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_celcat_calendrier_edit', methods: 'GET|POST')]
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
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_celcat_calendrier_delete', methods: 'DELETE')]
    public function delete(Request $request, Calendrier $celcatCalendrier): Response
    {
        $id = $celcatCalendrier->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($celcatCalendrier);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'celcat_calendrier.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'celcat_calendrier.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_celcat_calendrier_duplicate', methods: 'GET|POST')]
    public function duplicate(Calendrier $celcatCalendrier): Response
    {
        $newCelcatCalendrier = clone $celcatCalendrier;
        $this->entityManager->persist($newCelcatCalendrier);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'celcat_calendrier.duplicate.success.flash');

        return $this->redirectToRoute('sa_celcat_calendrier_edit', ['id' => $newCelcatCalendrier->getId()]);
    }
}
