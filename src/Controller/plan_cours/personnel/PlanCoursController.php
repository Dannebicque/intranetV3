<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/plan_cours/personnel/PlanCoursController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:39
 */

namespace App\Controller\plan_cours\personnel;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\PlanCours\PlanCours;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Components\PlanCours\Exceptions\PlanCoursNotFoundException;
use App\Components\PlanCours\PlanCoursRegistry;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Previsionnel;
use App\Enums\PlanCoursEnum;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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
        $tPrevisionnel = [];
        foreach ($previsionnels as $previsionnel) {
            $tPrevisionnel[$previsionnel->getTypeIdMatiere()] = $previsionnel;
        }

        return $this->render('plan_cours/personnel/plan_cours/index.html.twig', [
            'previsionnels' => $tPrevisionnel,
            'plansCours' => $planCours->getPlansCoursPrevisionnel($previsionnels, $this->getUser(),
                $this->getAnneeUniversitaire()),
        ]);
    }

    /**
     */
    #[Route('/edit/{previsionnel}', name: 'app_plan_cours_apc_new', methods: ['GET', 'POST'])]
    public function new(
        TypeMatiereManager $typeMatiereManager,
        Request $request,
        Previsionnel $previsionnel
    ): Response {
        $matiere = $typeMatiereManager->getMatiereFromSelect($previsionnel->getTypeIdMatiere());

        return $this->render('plan_cours/personnel/plan_cours/new.html.twig', parameters: [
            'matiere' => $matiere,
            'previsionnel' => $previsionnel,
            'step' => $request->query->get('step') ?? 1,
        ]);
    }

    /**
     * @throws PlanCoursNotFoundException
     */
    #[Route('/step/{previsionnel}', name: 'app_plan_cours_apc_step', methods: ['GET', 'POST'])]
    public function step(
        PlanCoursRegistry $planCoursRegistry,
        TypeMatiereManager $typeMatiereManager,
        Request $request,
        Previsionnel $previsionnel,
        PlanCours    $cPlanCours
    ): Response {
        $step = $request->query->get('step');
        $planCoursManager = $planCoursRegistry->getPlanCours($previsionnel->getTypeMatiere());
        if (null === $planCoursManager) {
            throw new Exception('Plan de cours non trouvé');
        }

        $matiere = $typeMatiereManager->getMatiereFromSelect($previsionnel->getTypeIdMatiere());

        if (null === $matiere) {
            throw new Exception('Matière non trouvée');
        }

        $planCours = $planCoursManager->createPlanCours(
            $matiere,
            $this->getAnneeUniversitaire(),
            $this->getUser());

        $form = $this->createForm(constant(get_class($planCoursManager) . '::FORM_STEP_' . $step), $planCours, [
            'previsionnel' => $previsionnel,
            'anneeUniversitaire' => $this->getAnneeUniversitaire(),
            'action' => $this->generateUrl('app_plan_cours_apc_step', [
                'previsionnel' => $previsionnel->getId(),
                'step' => $step,
            ]),
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($step === "3" && $request->request->has('btn_valide') && $request->request->get('btn_valide') === 'transmettre') {
                $planCours->setEtatPlanCours(PlanCoursEnum::COMPLET);
                $planCoursManager->add($planCours, true);
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'plan_cours.add-transmis.success.flash');
                return $this->redirectToRoute('application_index', ['onglet' => 'plan_cours'], Response::HTTP_SEE_OTHER);
            } else {
                $planCours->setEtatPlanCours(PlanCoursEnum::EN_COURS);
                $planCoursManager->add($planCours, true);
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'plan_cours.add.success.flash');
            }

            return $this->redirectToRoute('app_plan_cours_apc_new', [
                'previsionnel' => $previsionnel->getId(),
                'step' => $step
            ], Response::HTTP_SEE_OTHER);
        }

        if ($matiere->getSemestres()->first()->getDiplome()->getReferentiel() !== null) {
        $matieresArray = $typeMatiereManager->findByReferentielOrdreSemestreArray($matiere->getSemestres()->first(), $matiere->getSemestres()->first()->getDiplome()->getReferentiel());
        } else {
            $matieresArray = $typeMatiereManager->findBySemestreArray($matiere->getSemestres()->first());
        }
//        dd($matieresArray);

        return $this->render('components/plan_cours/_step' . $step . '.html.twig', parameters: [
            'plan_cours' => $planCours,
            'form' => $form,
            'matiere' => $matiere,
            'previsionnel' => $previsionnel,
            'step' => $step,
            'matieresArray' => $matieresArray,
            'template' => constant(get_class($planCoursManager) . '::TEMPLATE_FORM_STEP_' . $step),
            'listePlansCours' => $cPlanCours->getPlansCoursSemestre($matiere->getSemestres()->first(), $this->getUser(),
                $this->getAnneeUniversitaire()),
        ]);
    }

    #[Route('/recopie/{previsionnel}', name: 'app_plan_cours_recopie', methods: ['POST'])]
    public function recopiePlanCours(
        EntityManagerInterface $entityManager,
        Request                $request,
        PlanCoursRegistry      $planCoursRegistry,
        Previsionnel           $previsionnel,
    ): Response
    {

        $planCoursManager = $planCoursRegistry->getPlanCours($previsionnel->getTypeMatiere());
        if (null === $planCoursManager) {
            throw new Exception('Plan de cours non trouvé');
        }

        $planCoursOrigin = $planCoursManager->getRepository()->find($request->request->get('recopiePlan'));

        if ($planCoursOrigin) {
            //recopie des données de planCoursOrigin dans planCours
            $planCours = $planCoursManager->recopiePlanCours($planCoursOrigin, $previsionnel);
            $entityManager->persist($planCours);
            $entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'plan_cours.recopie.success.flash');
        }

        return $this->redirectToRoute('app_plan_cours_apc_new', [
            'previsionnel' => $previsionnel->getId(),
            'step' => 1
        ], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{previsionnel}', name: 'app_plan_cours_apc_show', methods: ['GET'])]
    public function show(
        PlanCoursRegistry  $planCoursRegistry,
        TypeMatiereManager $typeMatiereManager,
        Previsionnel       $previsionnel
    ): Response
    {
        $planCoursManager = $planCoursRegistry->getPlanCours($previsionnel->getTypeMatiere());
        $matiere = $typeMatiereManager->getMatiereFromSelect($previsionnel->getTypeIdMatiere());
        if (null === $planCoursManager) {
            throw new Exception('Plan de cours non trouvé');
        }

        $planCours = $planCoursManager->createPlanCours(
            $matiere,
            $this->getAnneeUniversitaire(),
            $this->getUser());

        return $this->render('plan_cours/personnel/plan_cours/show.html.twig', [
            'pc' => $planCours,
            'matiere' => $matiere,
            'template' => constant(get_class($planCoursManager) . '::TEMPLATE_SHOW'),
        ]);
    }

    #[Route('/export/{id}.pdf', name: 'app_plan_cours_export_pdf', methods: ['GET'])]
    public function export(
        TypeMatiereManager $typeMatiereManager,
        PlanCoursRegistry $planCoursRegistry,
        Previsionnel $previsionnel
    ): Response {
        $planCoursManager = $planCoursRegistry->getPlanCours($previsionnel->getTypeMatiere());
        $matiere = $typeMatiereManager->getMatiereFromSelect($previsionnel->getTypeIdMatiere());
        if (null === $planCoursManager) {
            throw new Exception('Plan de cours non trouvé');
        }

        $pe = $planCoursManager->export($matiere, $this->getAnneeUniversitaire(), $this->getDepartement());

        if ($pe === null) {
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'plan_cours.export.error.flash');
            return new JsonResponse(['error' => 'Erreur lors de l\'export du plan de cours'], Response::HTTP_BAD_REQUEST);
        }
        return $pe;
    }

    #[Route('/{id}', name: 'app_plan_cours_apc_delete', methods: ['POST'])]
    public function delete(
        Request $request,
        $planCoursApc,
    ): Response {
        if ($this->isCsrfTokenValid('delete' . $planCoursApc->getId(), $request->request->get('_token'))) {
            // todo
        }

        return $this->redirectToRoute('application_personnel_plan_cours_index', [], Response::HTTP_SEE_OTHER);
    }
}
