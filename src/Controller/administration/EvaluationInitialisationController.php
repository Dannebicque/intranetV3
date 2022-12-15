<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EvaluationInitialisationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/10/2022 19:15
 */

namespace App\Controller\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelManager;
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
 */
#[Route(path: '/administration/initialisation-des-evaluations')]
class EvaluationInitialisationController extends BaseController
{
    /**
     * @throws Exception
     */
    #[Route(path: '/{semestre}', name: 'administration_evaluation_initialisation_index', methods: 'GET|POST')]
    public function index(
        Request $request,
        PrevisionnelManager $previsionnelManager,
        TypeMatiereManager $typeMatiereManager,
        EvaluationRepository $evaluationRepository,
        Semestre $semestre
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);

        if (true === $semestre->getDiplome()->isApc()) {
            $matieres = $typeMatiereManager->findBySemestreAndReferentiel($semestre, $semestre->getDiplome()?->getReferentiel());
        } else {
            $matieres = $typeMatiereManager->findBySemestre($semestre);
        }

        $typeGroupes = $semestre->getTypeGroupess();
        $previsionnels = $previsionnelManager->getPrevisionnelSemestre($semestre, $this->getAnneeUniversitaire()->getAnnee());

        $tabprevi = [];
        foreach ($previsionnels as $previsionnel) {
            if (!array_key_exists($previsionnel->getTypeIdMatiere(), $tabprevi)) {
                $tabprevi[$previsionnel->getTypeIdMatiere()] = [];
            }
            $tabprevi[$previsionnel->getTypeIdMatiere()][$previsionnel->personnel_id]['id'] = $previsionnel->personnel_id;
            $tabprevi[$previsionnel->getTypeIdMatiere()][$previsionnel->personnel_id]['display'] = $previsionnel->personnelDisplay();
        }

        $evaluations = $evaluationRepository->findBySemestre($semestre,
            $this->getAnneeUniversitaire());
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
                    if (!empty($request->request->get('commentaire_'.$matiere->getTypeIdMatiere().'_'.$i))) {
                        $nbEnseignant = false === $request->request->has('enseignant_'.$matiere->getTypeIdMatiere().'_'.$i) ? 0 : count($request->request->all()['enseignant_'.$matiere->getTypeIdMatiere().'_'.$i]);
                        if ($nbEnseignant > 0) {
                            $pers = $tPersonnels[$request->request->all()['enseignant_'.$matiere->getTypeIdMatiere().'_'.$i][0]];
                        } else {
                            $pers = $this->getUser();
                        }
                        $eval = new Evaluation($pers, $matiere, $semestre);
                        $eval->setCoefficient($request->request->get('coefficient_'.$matiere->getTypeIdMatiere().'_'.$i));
                        $eval->setLibelle($request->request->get('commentaire_'.$matiere->getTypeIdMatiere().'_'.$i));
                        $eval->setTypegroupe($tGroupes[$request->request->get('typeGroupe_'.$matiere->getTypeIdMatiere().'_'.$i)]);

                        for ($j = 1; $j < $nbEnseignant; ++$j) {
                            $eval->addPersonnelAutorise($tPersonnels[$request->request->all()['enseignant_'.$matiere->getTypeIdMatiere().'_'.$i][$j]]);
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
            'tabPrevi' => $tabprevi,
            'evaluations' => $evaluations,
            'typeGroupes' => $typeGroupes,
        ]);
    }
}
