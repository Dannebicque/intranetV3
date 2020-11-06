<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/CovidAttestationPersonnelController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/11/2020 15:33

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Classes\Tools;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\CovidAttestationPersonnel;
use App\Event\CovidEvent;
use App\Repository\ActualiteRepository;
use App\Repository\CovidAttestationPersonnelRepository;
use DateTime;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * @Route("/administratif/covid/attestation/personnel", name="sa_")
 */
class CovidAttestationPersonnelController extends BaseController
{
    /**
     * @Route("/", name="covid_attestation_personnel_index", methods={"GET"})
     * @param CovidAttestationPersonnelRepository $covidAttestationPersonnelRepository
     *
     * @return Response
     */
    public function index(CovidAttestationPersonnelRepository $covidAttestationPersonnelRepository): Response
    {
        return $this->render('super-administration/covid_attestation_personnel/index.html.twig', [
            'covid_attestation_personnels' => $covidAttestationPersonnelRepository->findAll(),
        ]);
    }

    /**
     * @Route("/export.{_format}", name="covid_attestation_personnel_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport                            $myExport
     *
     * @param CovidAttestationPersonnelRepository $covidAttestationPersonnelRepository
     * @param                                     $_format
     *
     * @return Response
     */
    public function export(
        MyExport $myExport,
        CovidAttestationPersonnelRepository $covidAttestationPersonnelRepository,
        $_format
    ): Response {
        $actualites = $covidAttestationPersonnelRepository->findAll();

        return $myExport->genereFichierGenerique(
            $_format,
            $actualites,
            'actualites',
            ['actualite_administration', 'utilisateur'],
            ['titre', 'texte', 'departement' => ['libelle']]
        );
    }

    /**
     * @Route("/change-etat/{id}/{etat}", name="covid_attestation_personnel_change_etat", methods={"GET"})
     * @param EventDispatcherInterface  $eventDispatcher
     * @param CovidAttestationPersonnel $covidAttestationPersonnel
     * @param                           $etat
     *
     * @return Response
     */
    public function changeEtat(
        EventDispatcherInterface $eventDispatcher,
        CovidAttestationPersonnel $covidAttestationPersonnel,
        $etat
    ): Response {
        $covidAttestationPersonnel->setValidationDepartement(Tools::convertToBool($etat));
        $covidAttestationPersonnel->setDateValidationDepartement(new DateTime());
        $this->entityManager->flush();

        $event = new CovidEvent($covidAttestationPersonnel);
        if ($covidAttestationPersonnel->getValidationDepartement() === true) {
            $eventDispatcher->dispatch($event, CovidEvent::COVID_AUTORISATION_VALIDEE_DEPARTEMENT);
        } else {
            $eventDispatcher->dispatch($event, CovidEvent::COVID_AUTORISATION_REFUSEE_DEPARTEMENT);
        }

        return $this->redirectToRoute('sa_covid_attestation_personnel_index');
    }

    /**
     * @Route("/{id}", name="covid_attestation_personnel_show", methods={"GET"})
     * @param CovidAttestationPersonnel $covidAttestationPersonnel
     *
     * @return Response
     */
    public function show(CovidAttestationPersonnel $covidAttestationPersonnel): Response
    {
        if ($covidAttestationPersonnel->getPersonnel()->getId() === $this->getConnectedUser()->getId()) {
            return $this->render('super-administration/covid_attestation_personnel/show.html.twig', [
                'covid_attestation_personnel' => $covidAttestationPersonnel,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="covid_attestation_personnel_delete", methods="DELETE")
     * @param Request                   $request
     * @param CovidAttestationPersonnel $covidAttestationPersonnel
     *
     * @return Response
     */
    public function delete(Request $request, CovidAttestationPersonnel $covidAttestationPersonnel): Response
    {
        $id = $covidAttestationPersonnel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($covidAttestationPersonnel);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'covid_attestation_personnel.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'covid_attestation_personnel.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

}
