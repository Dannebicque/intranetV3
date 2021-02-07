<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/DisponibiliteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Disponibilite;
use App\Repository\DisponibiliteRepository;
use Doctrine\ORM\NonUniqueResultException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DisponibiliteController.
 *
 * @Route("/application/personnel/disponibilite")
 * @IsGranted("ROLE_PERMANENT")
 */
class DisponibiliteController extends BaseController
{
    /**
     * @Route("/", name="application_personnel_disponibilite_index")
     */
    public function index(DisponibiliteRepository $disponibiliteRepository): Response
    {
        $disponibilites = $disponibiliteRepository->getDisponibilitesArray($this->getConnectedUser());
        $nbInterdit = 0;
        $nbEviter = 0;
        foreach ($disponibilites as $disponibilite) {
            foreach ($disponibilite as $dispo) {
                if ('E' === $dispo) {
                    ++$nbEviter;
                } elseif ('I' === $dispo) {
                    ++$nbInterdit;
                }
            }
        }

        return $this->render('appPersonnel/disponibilite/index.html.twig', [
            'anneepreparee'  => $this->dataUserSession->getDepartement() ? $this->dataUserSession->getDepartement()->getAnneeUniversitairePrepare() : null,
            'creneaux'       => [1 => '8:00', 2 => '9:30', 3 => '11:00', 4 => '14:00', 5 => '15:30', 6 => '17:00'],
            'disponibilites' => $disponibilites,
            'nb_eviter'      => $nbEviter,
            'nb_interdit'    => $nbInterdit,
        ]);
    }

    /**
     * @Route("/update", name="application_personnel_disponibilite_update", options={"expose"=true})
     *
     * @throws NonUniqueResultException
     */
    public function updateDisponibilites(
        Request $request,
        DisponibiliteRepository $disponibiliteRepository
    ): JsonResponse {
        $jour = $request->request->get('jour');
        $heure = $request->request->get('heure');
        $etat = $request->request->get('etat');

        $disponibilite = $disponibiliteRepository->findByPersonnelCreneau($this->getConnectedUser(), $jour, $heure);

        if (null !== $disponibilite) {
            if ('D' === $etat) {
                $this->entityManager->remove($disponibilite);
            } else {
                $disponibilite->setEtat($etat);
            }
            $this->entityManager->flush();

            return $this->json(true, Response::HTTP_OK);
        }
        $disponibilite = new Disponibilite();
        $disponibilite->setPersonnel($this->getConnectedUser());
        $disponibilite->setJour($jour);
        $disponibilite->setHeure($heure);
        $disponibilite->setEtat($etat);
        $this->entityManager->persist($disponibilite);
        $this->entityManager->flush();

        return $this->json(true, Response::HTTP_OK);
    }
}
