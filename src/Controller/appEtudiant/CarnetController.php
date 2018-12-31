<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\CahierTexte;
use App\Repository\CahierTexteRepository;
use App\Repository\MatiereRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CarnetController
 * @package App\Controller
 * @Route("/application/etudiant/carnet")
 * @IsGranted("ROLE_ETUDIANT")
 */
class CarnetController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_carnet_index")
     * @param CahierTexteRepository $cahierTexteRepository
     * @param MatiereRepository     $matiereRepository
     *
     * @return Response
     */
    public function index(CahierTexteRepository $cahierTexteRepository, MatiereRepository $matiereRepository): Response
    {
        return $this->render('appEtudiant/carnet/index.html.twig', [
            'carnets'    => $cahierTexteRepository->findBySemestre($this->getUser()->getSemestre()),
            'personnels' => $this->dataUserSession->getPersonnels(),
            'matieres'   => $matiereRepository->findBySemestre($this->getUser()->getSemestre())
        ]);
    }

    /**
     * @Route("/{id}", name="application_etudiant_carnet_show")
     * @param CahierTexte $carnet
     *
     * @return Response
     */
    public function show(CahierTexte $carnet): Response
    {
        return $this->render('appEtudiant/carnet/show.html.twig', [
            'carnet' => $carnet
        ]);
    }
}
