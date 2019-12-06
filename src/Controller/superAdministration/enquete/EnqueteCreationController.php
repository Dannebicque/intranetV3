<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administratif/enquete/EnqueteCreationController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration\enquete;

use App\Entity\QualiteQuestionnaire;
use App\Entity\Semestre;
use App\Form\QualiteQuestionnaireType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/enquete-creation")
 */
class EnqueteCreationController extends AbstractController
{
    /**
     * @Route("/wizard-1/{semestre}", name="administratif_enquete_wizard_1")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function wizard1(Semestre $semestre): Response
    {
        $qualiteQuestionnaire = new QualiteQuestionnaire($semestre);
        $form = $this->createForm(QualiteQuestionnaireType::class, $qualiteQuestionnaire, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);

        return $this->render('super-administration/enqueteCreation/wizard1.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
