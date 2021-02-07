<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/ProgressionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

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
 * Class ProgressionController.
 *
 * @Route("/application/personnel/progression")
 * @IsGranted("ROLE_PERMANENT")
 */
class ProgressionController extends BaseController
{
    /**
     * @Route("/", name="application_personnel_progression_index")
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
            'progressions' => $progressions,
        ]);
    }

    /**
     * @Route("/update/{matiere}", name="application_personnel_progression_update", options={"expose"=true})
     *
     * @throws NonUniqueResultException
     */
    public function updateDisponibilites(
        Request $request,
        Matiere $matiere,
        ProgressionPedagogiqueRepository $progressionPedagogiqueRepository
    ): JsonResponse
    {
        $semaine = $request->request->get('semaine');
        $typeCours = $request->request->get('typecours');
        $nbSeances = $request->request->get('nbSeances');

        $progression = $progressionPedagogiqueRepository->findBySemaineTypeMatiere($this->getConnectedUser(), $semaine,
            $typeCours, $matiere);

        if (null !== $progression) {
            if ('0' !== $nbSeances && '' !== trim($nbSeances)) {
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
