<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/questionnaire/QuestionnaireController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/09/2021 07:59
 */

namespace App\Controller\questionnaire;

use App\Classes\Enquetes\EnqueteRelance;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\QuestionnaireQualite;
use App\Repository\EtudiantRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QualiteController.
 */
class QuestionnaireMailsController extends BaseController
{
    #[Route('/questionnaire/relance/{questionnaire}', name: 'administratif_enquete_relance')]
    public function relance(
        Request $request,
        EnqueteRelance $enqueteRelance,
        EtudiantRepository $etudiantRepository,
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        QuestionnaireQualite $questionnaire
    ): RedirectResponse {
        $reponses = $quizzEtudiantRepository->findByQuestionnaireQualite($questionnaire);
        $etudiants = $etudiantRepository->findBySemestre($questionnaire->getSemestre());

        $enqueteRelance->envoyerRelance($questionnaire, $reponses, $etudiants);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Message de relance envoyé');

        return new RedirectResponse($request->headers->get('referer'));
    }

    #[Route('/questionnaire/relance/{questionnaire}/{etudiant}', name: 'enquete_relance_individuelle', options: ['expose' => true])]
    public function relanceIndividuelle(
        EnqueteRelance $enqueteRelance,
        QuestionnaireQualite $questionnaire, Etudiant $etudiant): JsonResponse
    {
        $enqueteRelance->envoyerRelanceIndividuelle($questionnaire, $etudiant);

        return $this->json(true);
    }
}
