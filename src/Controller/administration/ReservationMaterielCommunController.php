<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/ReservationMaterielCommunController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller\administration;

use App\Classes\MyMaterielCommun;
use App\Classes\MyMaterielCommunReservation;
use App\Controller\BaseController;
use App\Repository\MaterielCommunPretRepository;
use App\Repository\MaterielCommunRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceController.
 *
 * @Route("/administration/materiel-commun/reservation")
 */
class ReservationMaterielCommunController extends BaseController
{
    /**
     * @Route("/", name="administration_reservation_materiel_commun", methods={"GET"})
     */
    public function reservation(
        MaterielCommunRepository $materielCommunRepository,
        MaterielCommunPretRepository $materielCommunPretRepository,
        MyMaterielCommun $myMaterielCommun
    ): Response {
        $emprunts = $materielCommunPretRepository->findAll();
        $jr = $myMaterielCommun->getJours();
        $dispomateriel = $myMaterielCommun->obtainDispoMateriel($jr);

        return $this->render('administration/reservation_materiel_commun/reservation.html.twig', [
            'materiels' => $materielCommunRepository->findAll(),
            'emprunts'  => $emprunts,
            'dispo'     => $dispomateriel,
            'jours'     => $jr,
            'creneau'   => ['0800', '0930', '1100', '1400', '1530', '1700'],
        ]);
    }

    /**
     * @throws \Exception
     * @Route("/ajax/add", name="administration_reservation_materiel_commun_add", methods={"POST"},
     *                     options={"expose"=true})
     */
    public function addReservation(MyMaterielCommunReservation $myReservationMaterielCommun, Request $request): Response
    {
        $t = explode('_', $request->request->get('id'));
        $rep = $myReservationMaterielCommun->addReservation($t[2], $t[0], $t[1], $this->getConnectedUser());

        return new Response($rep, $rep ? Response::HTTP_OK : Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/ajax/suppr", name="administration_reservation_materiel_commun_suppr", methods={"DELETE"},
     *                       options={"expose"=true})
     */
    public function supprReservation(
        MyMaterielCommunReservation $myReservationMaterielCommun,
        Request $request
    ): Response {
        $id = $request->request->get('id');
        $rep = $myReservationMaterielCommun->supprReservation($id);

        return new Response($rep, $rep ? Response::HTTP_OK : Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
