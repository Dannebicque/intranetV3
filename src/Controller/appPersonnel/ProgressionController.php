<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appPersonnel/ProgressionController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\Entity\ProgressionPedagogique;
use App\Repository\PrevisionnelRepository;
use App\Repository\ProgressionPedagogiqueRepository;
use Doctrine\ORM\NonUniqueResultException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ProgressionController
 * @package App\Controller
 * @Route("/application/personnel/progression")
 * @IsGranted("ROLE_PERMANENT")
 */
class ProgressionController extends BaseController
{
    /**
     * @Route("/", name="application_personnel_progression_index")
     * @param PrevisionnelRepository           $previsionnelRepository
     *
     * @param ProgressionPedagogiqueRepository $progressionPedagogiqueRepository
     *
     * @return Response
     */
    public function index(
        PrevisionnelRepository $previsionnelRepository,
        ProgressionPedagogiqueRepository $progressionPedagogiqueRepository
    ): Response {
        $progressions = $progressionPedagogiqueRepository->getProgressionsArray($this->getConnectedUser());
        $matieres = $previsionnelRepository->findPrevisionnelEnseignantDepartement($this->getConnectedUser(),
            $this->dataUserSession->getDepartement());

        return $this->render('appPersonnel/progression/index.html.twig', [
            'matieres'     => $matieres,
            'progressions' => $progressions
        ]);
    }

    /**
     * @Route("/update/{matiere}", name="application_personnel_progression_update", options={"expose"=true})
     * @param Request                          $request
     * @param Matiere                          $matiere
     * @param ProgressionPedagogiqueRepository $progressionPedagogiqueRepository
     *
     * @return JsonResponse
     * @throws NonUniqueResultException
     */
    public function updateDisponibilites(
        Request $request,
        Matiere $matiere,
        ProgressionPedagogiqueRepository $progressionPedagogiqueRepository
    ): JsonResponse {
        $semaine = $request->request->get('semaine');
        $typeCours = $request->request->get('typecours');
        $nbSeances = $request->request->get('nbSeances');

        $progression = $progressionPedagogiqueRepository->findBySemaineTypeMatiere($this->getConnectedUser(), $semaine,
            $typeCours, $matiere);

        if ($progression !== null) {
            if ($nbSeances !== '0' && trim($nbSeances) !== '') {
                $progression->setNbSeance($nbSeances);
                $this->entityManager->flush();

                return $this->json(true, Response::HTTP_OK);
            }
            $this->entityManager->remove($progression);
            $this->entityManager->flush();

            return $this->json(true, Response::HTTP_OK);

        }
        $progression = new ProgressionPedagogique();
        $progression->setPersonnel($this->getConnectedUser());
        $progression->setMatiere($matiere);
        $progression->setNbSeance($nbSeances);
        $progression->setTypeCours($typeCours);
        $progression->setSemaine($semaine);
        $this->entityManager->persist($progression);
        $this->entityManager->flush();

        return $this->json(true, Response::HTTP_OK);

    }
}
