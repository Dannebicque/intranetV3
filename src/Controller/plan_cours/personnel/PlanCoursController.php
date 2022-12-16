<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/plan_cours/personnel/PlanCoursController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:03
 */

namespace App\Controller\plan_cours\personnel;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\PlanCours\PlanCours;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Components\PlanCours\PlanCoursRegistry;
use App\Controller\BaseController;
use App\Entity\Previsionnel;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/plan/cours/apc')]
class PlanCoursController extends BaseController
{
    #[Route('/', name: 'application_personnel_plan_cours_index', methods: ['GET'])]
    public function index(
        PrevisionnelManager $previsionnelManager,
        PlanCours $planCours
    ): Response {
        $previsionnels = $previsionnelManager->getPrevisionnelEnseignantAnnee($this->getUser(),
            $this->getAnneeUniversitaire()?->getAnnee());

        return $this->render('plan_cours/personnel/plan_cours/index.html.twig', [
            'previsionnels' => $previsionnels,
            'plansCours' => $planCours->getPlansCoursPrevisionnel($previsionnels, $this->getUser(),
                $this->getAnneeUniversitaire()),
        ]);
    }

    /**
     * @throws \App\Components\PlanCours\Exceptions\PlanCoursNotFoundException
     */
    #[Route('/new/{previsionnel}', name: 'app_plan_cours_apc_new', methods: ['GET', 'POST'])]
    public function new(
        PlanCoursRegistry $planCoursRegistry,
        TypeMatiereManager $typeMatiereManager,
        Request $request,
        Previsionnel $previsionnel
    ): Response {
        $planCoursManager = $planCoursRegistry->getPlanCours($previsionnel->getTypeMatiere());
        $matiere = $typeMatiereManager->getMatiereFromSelect($previsionnel->getTypeIdMatiere());
        if (null === $planCoursManager) {
            throw new \Exception('Plan de cours non trouvé');
        }

        $planCours = $planCoursManager->createPlanCours();
        $form = $this->createForm($planCoursManager::FORM, $planCours);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $planCoursManager->add($planCours, true);

            return $this->redirectToRoute('application_personnel_plan_cours_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('plan_cours/personnel/plan_cours/new.html.twig', parameters: [
            'plan_cours' => $planCours,
            'form' => $form,
            'matiere' => $matiere,
            'template' => $planCoursManager::TEMPLATE_FORM,
        ]);
    }

    #[Route('/{id}', name: 'app_plan_cours_apc_show', methods: ['GET'])]
    public function show($planCoursApc): Response
    {
        return $this->render('plan_cours/personnel/plan_cours/show.html.twig', [
            'plan_cours_apc' => $planCoursApc,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_plan_cours_apc_edit', methods: ['GET', 'POST'])]
    public function edit(
        $planCoursApc,
    ): Response {
        // todo:
    }

    #[Route('/{id}', name: 'app_plan_cours_apc_delete', methods: ['POST'])]
    public function delete(
        Request $request,
        $planCoursApc,
    ): Response {
        if ($this->isCsrfTokenValid('delete'.$planCoursApc->getId(), $request->request->get('_token'))) {
            // todo
        }

        return $this->redirectToRoute('application_personnel_plan_cours_index', [], Response::HTTP_SEE_OTHER);
    }
}
