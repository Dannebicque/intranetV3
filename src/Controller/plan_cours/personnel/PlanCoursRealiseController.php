<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/plan_cours/personnel/PlanCoursRealiseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\plan_cours\personnel;

use App\Components\PlanCours\Form\PlanCoursHistoriqueEdtType;
use App\Entity\PlanCoursHistoriqueEdt;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/application/personnel/plan-cours', name: 'app_personnel_plan_cours_')]
#[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_PERMANENT')]
class PlanCoursRealiseController extends AbstractController
{
    #[Route('/realise', name: 'realise')]
    public function realise(): Response
    {
        $pcHistorique = new PlanCoursHistoriqueEdt();
        $pcHistorique->setEnseignant($this->getUser());
        $form = $this->createForm(
            PlanCoursHistoriqueEdtType::class,
            $pcHistorique,
            [
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );

        return $this->render('plan_cours/personnel/realise/index.html.twig', [
            'form' => $form,
        ]);
    }
}
