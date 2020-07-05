<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EvaluationInitialisationController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Repository\EvaluationRepository;
use App\Repository\MatiereRepository;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EvaluationInitialisationController
 * @package App\Controller\administration
 * @Route("/administration/initialisation-des-evaluations")
 */
class EvaluationInitialisationController extends BaseController
{
    /**
     * @Route("/{semestre}", name="administration_evaluation_initialisation_index", methods="GET|POST")
     *
     * @param Request              $request
     * @param MatiereRepository    $matiereRepository
     * @param EvaluationRepository $evaluationRepository
     * @param Semestre             $semestre
     *
     * @return Response
     * @throws Exception
     */
    public function index(
        Request $request,
        MatiereRepository $matiereRepository,
        EvaluationRepository $evaluationRepository,
        Semestre $semestre
    ): Response {
        $matieres = $matiereRepository->findBySemestre($semestre);
        $evaluations = $evaluationRepository->findBySemestre($semestre,
            $this->dataUserSession->getAnneeUniversitaire());

        if ($request->getMethod() === 'POST') {
            $tGroupes = [];
            foreach ($semestre->getTypeGroupes() as $tg) {
                $tGroupes[$tg->getId()] = $tg;
            }

            $tPersonnels = [];
            foreach ($this->dataUserSession->getPersonnels() as $tg) {
                $tPersonnels[$tg->getId()] = $tg;
            }

            /** @var Matiere $matiere */
            foreach ($matieres as $matiere) {
                $nbNotes = $matiere->getNbnotes();
                for ($i = 1; $i <= $nbNotes; $i++) {
                    if (!empty($request->request->get('commentaire_' . $matiere->getId() . '_' . $i))) {
                        $nbEnseignant = count($request->request->get('enseignant_' . $matiere->getId() . '_' . $i));
                        if ($nbEnseignant > 0) {
                            $pers = $tPersonnels[$request->request->get('enseignant_' . $matiere->getId() . '_' . $i)[0]];
                        } else {
                            $pers = $this->getConnectedUser();
                        }
                        $eval = new Evaluation($pers, $matiere, $this->dataUserSession->getDepartement());
                        $eval->setCoefficient($request->request->get('coefficient_' . $matiere->getId() . '_' . $i));
                        $eval->setLibelle($request->request->get('commentaire_' . $matiere->getId() . '_' . $i));
                        $eval->setTypegroupe($tGroupes[$request->request->get('typeGroupe_' . $matiere->getId() . '_' . $i)]);

                        for ($j = 1; $j < $nbEnseignant; $j++) {
                            $eval->addPersonnelAutorise($tPersonnels[$request->request->get('enseignant_' . $matiere->getId() . '_' . $i)[$j]]);
                        }
                        $this->entityManager->persist($eval);
                    }
                }
            }
            $this->entityManager->flush();
            $this->addFlashBag('success', 'evaluation.initialisee.success');

            return $this->redirectToRoute('administration_notes_semestre_index', ['semestre' => $semestre->getId()]);
        }

        return $this->render('administration/evaluationInitialisation/index.html.twig', [
            'semestre'    => $semestre,
            'matieres'    => $matieres,
            'evaluations' => $evaluations
        ]);
    }
}
