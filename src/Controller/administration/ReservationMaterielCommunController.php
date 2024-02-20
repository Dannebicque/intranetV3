<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/ReservationMaterielCommunController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration;

use App\Classes\MyMaterielCommun;
use App\Classes\MyMaterielCommunReservation;
use App\Controller\BaseController;
use App\Repository\MaterielCommunPretRepository;
use App\Repository\MaterielCommunRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class AbsenceController.
 */
#[Route(path: '/administration/materiel-commun/reservation')]
class ReservationMaterielCommunController extends BaseController
{
    #[Route(path: '/', name: 'administration_reservation_materiel_commun', methods: ['GET'])]
    public function reservation(MaterielCommunRepository $materielCommunRepository, MaterielCommunPretRepository $materielCommunPretRepository, MyMaterielCommun $myMaterielCommun): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());
        $emprunts = $materielCommunPretRepository->findAll();
        $jr = $myMaterielCommun->getJours();
        $dispomateriel = $myMaterielCommun->obtainDispoMateriel($jr);

        return $this->render('administration/reservation_materiel_commun/reservation.html.twig', [
            'materiels' => $materielCommunRepository->findAll(),
            'emprunts' => $emprunts,
            'dispo' => $dispomateriel,
            'jours' => $jr,
            'creneau' => ['0800', '0930', '1100', '1400', '1530', '1700'],
        ]);
    }

    /**
     * @throws \Exception
     */
    #[Route(path: '/ajax/add', name: 'administration_reservation_materiel_commun_add', options: ['expose' => true], methods: ['POST'])]
    public function addReservation(MyMaterielCommunReservation $myReservationMaterielCommun, Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());
        $t = explode('_', (string) $request->request->get('id'));
        $rep = $myReservationMaterielCommun->addReservation($t[2], $t[0], $t[1], $this->getUser());

        return new Response($rep, $rep ? Response::HTTP_OK : Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/ajax/suppr', name: 'administration_reservation_materiel_commun_suppr', options: ['expose' => true], methods: ['DELETE'])]
    public function supprReservation(MyMaterielCommunReservation $myReservationMaterielCommun, Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());
        $id = $request->request->get('id');
        $rep = $myReservationMaterielCommun->supprReservation($id);

        return new Response($rep, $rep ? Response::HTTP_OK : Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
