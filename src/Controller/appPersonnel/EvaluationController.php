<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/EvaluationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 20:09
 */

namespace App\Controller\appPersonnel;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyEvaluation;
use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\Repository\GroupeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class NotesController.
 *
 * @Route("/application/personnel/evaluation")
 * @IsGranted("ROLE_PERMANENT")
 */
class EvaluationController extends BaseController
{
    /**
     * @Route("/details/{uuid}", name="application_personnel_evaluation_show",
     *                                    requirements={"evaluation"="\d+"})
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     */
    public function detailsEvaluation(
        TypeMatiereManager $typeMatiereManager,
        MyEvaluation $myEvaluation,
        Evaluation $evaluation
    ): Response {
        $matiere = $typeMatiereManager->getMatiere($evaluation->getIdMatiere(), $evaluation->getTypeMatiere());
        $this->denyAccessUnlessGranted('CAN_ADD_NOTE', $matiere);

        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();

        return $this->render('appPersonnel/note/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'notes' => $notes,
            'matiere' => $matiere,
            'autorise' => $evaluation->getAutorise($this->getUser()->getId(), $this->dataUserSession),
        ]);
    }

    /**
     * @Route("/visible/{uuid}/{etat}", name="application_personnel_evaluation_visible",
     *                                    requirements={"evaluation"="\d+"})
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     */
    public function evaluationVisible(MyEvaluation $myEvaluation, Evaluation $evaluation, $etat): Response
    {
        //todo: tester au niveau évaluation
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();
        $evaluation->setVisible('visible' === $etat);
        $this->entityManager->flush();

        return $this->render('appPersonnel/note/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'notes' => $notes,
            'autorise' => $evaluation->getAutorise($this->getUser()->getId(), $this->dataUserSession),
        ]);
    }

    /**
     * @Route("/update/{uuid}", name="application_personnel_evaluation_update")
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     */
    public function updateEvaluation(Request $request, Evaluation $evaluation): Response
    {
        //todo: tester au niveau évaluation
        //mise à jour d'un champ d'une évaluation
        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $evaluation->updateData($name, $value);
        $this->entityManager->flush();

        return $this->json(true, Response::HTTP_OK);
    }

    /**
     * @Route("/export/{uuid}/{type}/{_format}", name="application_personnel_evaluation_export",
     *                                    requirements={"evaluation"="\d+","_format"="csv|xlsx|pdf"})
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     *
     * @return Response|StreamedResponse|null
     *
     * @throws SyntaxError
     * @throws LoaderError
     * @throws RuntimeError
     * @throws \App\Exception\MatiereNotFoundException
     */
    public function exportEvaluation(
        GroupeRepository $groupeRepository,
        MyEvaluation $myEvaluation,
        Evaluation $evaluation,
        $type,
        $_format
    ) {
        //todo: tester au niveau évaluation
        $t = explode('_', $type);
        if ('groupe' === $t[0]) {
            $grp = $groupeRepository->find($t[1]);
            $data = [$grp];
        } elseif ('all' === $t[0] && null !== $evaluation->getTypeGroupe()) {
            $data = $evaluation->getTypeGroupe()->getGroupes();
        } else {
            return $this->render('bundles/TwigBundle/Exception/error666.html.twig');
        }

        return $myEvaluation->setEvaluation($evaluation)->exportReleve($_format, $data,
            $this->dataUserSession->getDepartement());
    }
}
