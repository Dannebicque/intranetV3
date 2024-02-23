<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/PlanCoursController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Exception\DiplomeNotFoundException;
use App\Repository\DiplomeRepository;
use App\Table\PlanCoursTableType;
use JsonException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/administration/plan/cours', name: 'administration_plan_cours_')]
class PlanCoursController extends BaseController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('plan_cours/administration/index.html.twig', [
            'diplomeSelect' => null,
        ]);
    }

    /**
     * @throws DiplomeNotFoundException
     * @throws JsonException
     */
    #[Route('/diplome', name: 'diplome')]
    public function diplome(
        DiplomeRepository $diplomeRepository,
        Request $request
    ): Response {
        $diplome = $diplomeRepository->find($request->query->get('diplome'));

        if (null === $diplome) {
            throw new DiplomeNotFoundException();
        }

        $table = $this->createTable(PlanCoursTableType::class, [
            'diplome' => $diplome,
            'annee' => $this->getAnneeUniversitaire()->getAnnee(),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('plan_cours/administration/diplome.html.twig', [
            'diplome' => $diplome,
            'table' => $table,
        ]);
    }

    #[Route('/recherche', name: 'recherche')]
    public function recherche(): Response
    {
        return $this->render('plan_cours/administration/recherche.html.twig', [
            'diplomeSelect' => null,
        ]);
    }
}
