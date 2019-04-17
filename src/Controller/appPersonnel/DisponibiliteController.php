<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\CreneauCours;
use App\Entity\Disponibilite;
use App\Repository\CalendrierRepository;
use App\Repository\CreneauCoursRepository;
use App\Repository\DisponibiliteRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DisponibiliteController
 * @package App\Controller
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
        $nbInterdit=0;
        $nbEviter=0;
        foreach ($disponibilites as $disponibilite) {
            foreach ($disponibilite as $dispo) {
                if ($dispo === 'E') {
                    $nbEviter++;
                } elseif ($dispo === 'I') {
                    $nbInterdit++;
                }
            }
        }

        return $this->render('appPersonnel/disponibilite/index.html.twig', [
            'anneepreparee' => $this->dataUserSession->getDepartement() ? $this->dataUserSession->getDepartement()->getAnneeUniversitairePrepare() : null,
            'creneaux' => [1 => '8:00', 2=>'9:30', 3=>'11:00', 4=>'14:00', 5=>'15:30',6=>'17:00'],
            'disponibilites' => $disponibilites,
            'nb_eviter' => $nbEviter,
            'nb_interdit' => $nbInterdit,
        ]);
    }

    /**
     * @Route("/update", name="application_personnel_disponibilite_update", options={"expose"=true})
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function updateDisponibilites(Request $request, DisponibiliteRepository $disponibiliteRepository) {
        $jour = $request->request->get('jour');
        $heure = $request->request->get('heure');
        $etat = $request->request->get('etat');

        $disponibilite = $disponibiliteRepository->findByPersonnelCreneau($this->getConnectedUser(), $jour, $heure);

        if ($disponibilite !== null) {
            if ($etat === 'D') {
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
