<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/SynchroIcalController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/06/2021 21:20
 */

namespace App\Controller;

use App\Classes\Edt\MyEdtExport;
use App\Repository\EtudiantRepository;
use App\Repository\PersonnelRepository;
use Carbon\Carbon;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtController.
 */
#[Route(path: '/api/synchronisation/ical')]
class SynchroIcalController extends AbstractController
{
    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/intervenant/{code}.{_format}', name: 'edt_intervenant_synchro_ical')]
    public function synchroIntervenantIcal(MyEdtExport $myEdtExport, PersonnelRepository $personnelRepository, $code, $_format): Response
    {
        //Toutes les semaines
        $personnel = $personnelRepository->findByCode($code);
        if (null !== $personnel) {
            $ical = $myEdtExport->export($personnel, $_format, 'Personnel');
            $timestamp = Carbon::now();

            return new Response($ical, 200, [
                'Content-Type' => 'text/calendar; charset=utf-8',
                'Content-Disposition' => 'inline; filename="ical'.$timestamp->format('YmdHis').'.ics"',
            ]);
        }

        return new Response(null, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/etudiant/{code}.{_format}', name: 'edt_etudiant_synchro_ical')]
    public function synchroEtudiantIcal(MyEdtExport $myEdtExport, EtudiantRepository $etudiantRepository, $code, $_format): Response
    {
        $etudiant = $etudiantRepository->findByCode($code);
        if (null !== $etudiant) {
            $ical = $myEdtExport->export($etudiant, $_format, 'Etudiant');
            $timestamp = Carbon::now();

            return new Response($ical, 200, [
                'Content-Type' => 'text/calendar; charset=utf-8',
                'Content-Disposition' => 'inline; filename="ical'.$timestamp->format('YmdHis').'.ics"',
            ]);
        }

        return new Response(null, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
