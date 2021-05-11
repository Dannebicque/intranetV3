<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/CovidAttestationPersonnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Controller\administration;

use App\Utils\Tools;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\CovidAttestationPersonnel;
use App\Event\CovidEvent;
use App\Repository\CovidAttestationPersonnelRepository;
use DateTime;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * @Route("/administration/covid/attestation/personnel", name="administration_")
 */
class CovidAttestationPersonnelController extends BaseController
{
    /**
     * @Route("/", name="covid_attestation_personnel_index", methods={"GET"})
     */
    public function index(CovidAttestationPersonnelRepository $covidAttestationPersonnelRepository): Response
    {
        return $this->render('administration/covid_attestation_personnel/index.html.twig', [
            'covid_attestation_personnels' => $covidAttestationPersonnelRepository->findByDepartement($this->getDepartement()),
        ]);
    }

    /**
     * @Route("/change-etat/{id}/{etat}", name="covid_attestation_personnel_change_etat", methods={"GET"})
     *
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
        if (true === $covidAttestationPersonnel->getValidationDepartement()) {
            $eventDispatcher->dispatch($event, CovidEvent::COVID_AUTORISATION_VALIDEE_DEPARTEMENT);
        } else {
            $eventDispatcher->dispatch($event, CovidEvent::COVID_AUTORISATION_REFUSEE_DEPARTEMENT);
        }

        return $this->redirectToRoute('administration_covid_attestation_personnel_index');
    }

    /**
     * @Route("/{id}", name="covid_attestation_personnel_show", methods={"GET"})
     */
    public function show(CovidAttestationPersonnel $covidAttestationPersonnel): Response
    {
        return $this->render('administration/covid_attestation_personnel/show.html.twig', [
            'covid_attestation_personnel' => $covidAttestationPersonnel,
        ]);
    }

    /**
     * @Route("/{id}", name="covid_attestation_personnel_delete", methods="DELETE")
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
