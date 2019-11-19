<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administratif/enquete/EnqueteCreationController.php
// @author     David Annebicque
// @project intranetv3
// @date 19/11/2019 07:35
// @lastUpdate 19/11/2019 07:34

namespace App\Controller\administratif\enquete;

use App\Entity\QualiteQuestionnaire;
use App\Entity\Semestre;
use App\Form\QualiteQuestionnaireType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/enquete-creation")
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

        return $this->render('administratif/enqueteCreation/wizard1.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
