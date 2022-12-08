<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/plan_cours/personnel/PlanCoursRealiseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/07/2022 12:00
 */

namespace App\Controller\plan_cours\personnel;

use App\Components\PlanCours\Form\PlanCoursHistoriqueEdtType;
use App\Entity\PlanCoursHistoriqueEdt;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/application/personnel/plan-cours', name: 'app_personnel_plan_cours_')]
#[IsGranted('ROLE_PERMANENT')]
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

        return $this->renderForm('plan_cours/personnel/realise/index.html.twig', [
            'form' => $form,
        ]);
    }
}
