<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/ArticleController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\QuestionnaireQualite;
use App\Exception\SemestreNotFoundException;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Table\QualiteTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/qualite')]
class QualiteController extends BaseController
{
    #[Route('/', name: 'administration_qualite_index', methods: ['GET', 'POST'], options: ['expose' => true])]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $table = $this->createTable(QualiteTableType::class, [
            'departement' => $this->getDepartement(),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/qualite/index.html.twig',
            [
                'table' => $table,
            ]);
    }

    #[Route('/{id}', name: 'administration_qualite_show', methods: ['GET'])]
    public function show(QuestionnaireEtudiantRepository $quizzEtudiantRepository, QuestionnaireQualite $questionnaireQualite): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $semestre = $questionnaireQualite->getSemestre();
        if (null === $semestre) {
            throw new SemestreNotFoundException();
        }

        $etudiants = $semestre->getEtudiants();
        $quizzEtudiants = $quizzEtudiantRepository->findBySemestreArray($semestre);

        return $this->render('administration/qualite/show.html.twig',
            [
                'semestre' => $semestre,
                'etudiants' => $etudiants,
                'questionnaire' => $questionnaireQualite,
                'quizzEtudiant' => $quizzEtudiants,
            ]);
    }
}
