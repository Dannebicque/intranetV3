<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EvaluationInitialisationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 07:59
 */

namespace App\Controller\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\Entity\Semestre;
use App\Repository\EvaluationRepository;
use function count;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EvaluationInitialisationController.
 *
 * @Route("/administration/initialisation-des-evaluations")
 */
class EvaluationInitialisationController extends BaseController
{
    /**
     * @Route("/{semestre}", name="administration_evaluation_initialisation_index", methods="GET|POST")
     *
     * @throws Exception
     */
    public function index(
        Request $request,
        TypeMatiereManager $typeMatiereManager,
        EvaluationRepository $evaluationRepository,
        Semestre $semestre
    ): Response {
        $matieres = $typeMatiereManager->findBySemestre($semestre);
        $evaluations = $evaluationRepository->findBySemestre($matieres,
            $this->dataUserSession->getAnneeUniversitaire());

        if ('POST' === $request->getMethod()) {
            $tGroupes = [];
            foreach ($semestre->getTypeGroupes() as $tg) {
                $tGroupes[$tg->getId()] = $tg;
            }

            $tPersonnels = [];
            foreach ($this->dataUserSession->getPersonnels() as $tg) {
                $tPersonnels[$tg->getId()] = $tg;
            }

            /** @var \App\DTO\Matiere $matiere */
            foreach ($matieres as $matiere) {
                $nbNotes = $matiere->nbNotes;
                for ($i = 1; $i <= $nbNotes; ++$i) {
                    if (!empty($request->request->get('commentaire_' . $matiere->getTypeIdMatiere() . '_' . $i))) {
                        $nbEnseignant = count($request->request->get('enseignant_' . $matiere->getTypeIdMatiere() . '_' . $i));
                        if ($nbEnseignant > 0) {
                            $pers = $tPersonnels[$request->request->get('enseignant_' . $matiere->getTypeIdMatiere() . '_' . $i)[0]];
                        } else {
                            $pers = $this->getConnectedUser();
                        }
                        $eval = new Evaluation($pers, $matiere);
                        $eval->setCoefficient($request->request->get('coefficient_' . $matiere->getTypeIdMatiere() . '_' . $i));
                        $eval->setLibelle($request->request->get('commentaire_' . $matiere->getTypeIdMatiere() . '_' . $i));
                        $eval->setTypegroupe($tGroupes[$request->request->get('typeGroupe_' . $matiere->getTypeIdMatiere() . '_' . $i)]);

                        for ($j = 1; $j < $nbEnseignant; ++$j) {
                            $eval->addPersonnelAutorise($tPersonnels[$request->request->get('enseignant_' . $matiere->getTypeIdMatiere() . '_' . $i)[$j]]);
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
            'semestre' => $semestre,
            'matieres' => $matieres,
            'evaluations' => $evaluations,
        ]);
    }
}
