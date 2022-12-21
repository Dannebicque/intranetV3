<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/plan_cours/personnel/PlanCoursController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/12/2022 17:36
 */

namespace App\Controller\plan_cours\personnel;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\PlanCours\PlanCours;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Components\PlanCours\PlanCoursRegistry;
use App\Controller\BaseController;
use App\Entity\Constantes;
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
    #[Route('/edit/{previsionnel}', name: 'app_plan_cours_apc_new', methods: ['GET', 'POST'])]
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

        return $this->render('plan_cours/personnel/plan_cours/new.html.twig', parameters: [
            'matiere' => $matiere,
            'previsionnel' => $previsionnel,
            'step' => $request->query->get('step') ?? 1,
        ]);
    }

    /**
     * @throws \App\Components\PlanCours\Exceptions\PlanCoursNotFoundException
     */
    #[Route('/step/{previsionnel}', name: 'app_plan_cours_apc_step', methods: ['GET', 'POST'])]
    public function step(
        PlanCoursRegistry $planCoursRegistry,
        TypeMatiereManager $typeMatiereManager,
        Request $request,
        Previsionnel $previsionnel
    ): Response {
        $step = $request->query->get('step');
        $planCoursManager = $planCoursRegistry->getPlanCours($previsionnel->getTypeMatiere());
        $matiere = $typeMatiereManager->getMatiereFromSelect($previsionnel->getTypeIdMatiere());
        if (null === $planCoursManager) {
            throw new \Exception('Plan de cours non trouvé');
        }

        $planCours = $planCoursManager->createPlanCours($matiere,
            $this->getAnneeUniversitaire()); // todo: récupérer si déjà existant ??

        $form = $this->createForm(constant(get_class($planCoursManager) . '::FORM_STEP_' . $step), $planCours, [
            'action' => $this->generateUrl('app_plan_cours_apc_step', [
                'previsionnel' => $previsionnel->getId(),
                'step' => $step,
            ]),
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $planCoursManager->add($planCours, true);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'plan_cours.add.success.flash');

            return $this->redirectToRoute('app_plan_cours_apc_new', [
                'previsionnel' => $previsionnel->getId(),
                'step' => $step
            ], Response::HTTP_SEE_OTHER);
        }

        return $this->render('components/plan_cours/_step' . $step . '.html.twig', parameters: [
            'plan_cours' => $planCours,
            'form' => $form->createView(),
            'matiere' => $matiere,
            'previsionnel' => $previsionnel,
            'step' => $step,
            'template' => constant(get_class($planCoursManager) . '::TEMPLATE_FORM_STEP_' . $step),
        ]);
    }

    #[Route('/{id}', name: 'app_plan_cours_apc_show', methods: ['GET'])]
    public function show($planCoursApc): Response
    {
        return $this->render('plan_cours/personnel/plan_cours/show.html.twig', [
            'plan_cours_apc' => $planCoursApc,
        ]);
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
