<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/EvaluationController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\Form\EvaluationsPersonnelsType;
use App\MesClasses\MyEvaluation;
use App\Repository\GroupeRepository;
use PhpOffice\PhpSpreadsheet\Exception;
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
 * Class NotesController
 * @package App\Controller
 * @Route("/application/personnel/evaluation")
 * @IsGranted("ROLE_PERMANENT")
 */
class EvaluationController extends BaseController
{
    /**
     * @Route("/details/{uuid}", name="application_personnel_evaluation_show",
     *                                    requirements={"evaluation"="\d+"})
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     * @param MyEvaluation $myEvaluation
     * @param Evaluation   $evaluation
     *
     * @return Response
     */
    public function detailsEvaluation(MyEvaluation $myEvaluation, Evaluation $evaluation): Response
    {
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();

        return $this->render('appPersonnel/note/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'notes'      => $notes,
            'autorise'   => true //todo: a calculer
        ]);
    }

    /**
     * @Route("/visible/{uuid}/{etat}", name="application_personnel_evaluation_visible",
     *                                    requirements={"evaluation"="\d+"})
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     * @param MyEvaluation $myEvaluation
     * @param Evaluation   $evaluation
     *
     * @param              $etat
     *
     * @return Response
     */
    public function evaluationVisible(MyEvaluation $myEvaluation, Evaluation $evaluation, $etat): Response
    {
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();
        $evaluation->setVisible($etat === 'visible');
        $this->entityManager->flush();

        return $this->render('appPersonnel/note/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'notes'      => $notes,
            'autorise'   => true
        ]);
    }

    /**
     * @Route("/update/{uuid}", name="application_personnel_evaluation_update")
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     * @param Request    $request
     *
     * @param Evaluation $evaluation
     *
     * @return Response
     */
    public function updateEvaluation(Request $request, Evaluation $evaluation): Response
    {
        //mise à jour d'un champ d'une évaluation
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        if ($evaluation) {
            $evaluation->updateData($name, $value);
            $this->entityManager->flush();

            return $this->json(true, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/export/{uuid}/{type}/{_format}", name="application_personnel_evaluation_export",
     *                                    requirements={"evaluation"="\d+","_format"="csv|xlsx|pdf"})
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     * @param GroupeRepository $groupeRepository
     * @param MyEvaluation     $myEvaluation
     * @param Evaluation       $evaluation
     * @param                  $type
     * @param                  $_format
     *
     * @return Response|StreamedResponse|null
     * @throws Exception
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportEvaluation(
        GroupeRepository $groupeRepository,
        MyEvaluation $myEvaluation,
        Evaluation $evaluation,
        $type,
        $_format
    ) {
        $t = explode('_', $type);
        if ($t[0] === 'groupe') {
            $grp = $groupeRepository->find($t[1]);
            $data = [$grp];
        } elseif ($t[0] === 'all' && $evaluation->getTypeGroupe() !== null) {
            $data = $evaluation->getTypeGroupe()->getGroupes();
        } else {
            return $this->render('bundles/TwigBundle/Exception/error666.html.twig');
        }

        return $myEvaluation->setEvaluation($evaluation)->exportReleve($_format, $data,
            $this->dataUserSession->getDepartement());
    }

    /**
     * @Route("/ajax/gere/{uuid}", name="application_personnel_evaluation_ajax_autorise", methods="GET|POST")
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     * @param Request    $request
     * @param Evaluation $evaluation
     *
     * @return Response
     */
    public function ajaxAddPersonneAction(Request $request, Evaluation $evaluation): Response
    {
        if ($evaluation !== null)
        {
            $form = $this->createForm(EvaluationsPersonnelsType::class, $evaluation, [
                'attr'     => ['id' => 'formPersonne', 'class' => 'form-horizontal'],
                'semestre' => $evaluation->getSemestre(),
                'action'   => $this->generateUrl('application_personnel_evaluation_ajax_autorise',
                    ['uuid' => $evaluation->getUuidString()])
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $this->entityManager->flush();

                return $this->redirectToRoute('application_personnel_evaluation_show',
                    ['uuid' => $evaluation->getUuidString()]);
            }


            return $this->render('appPersonnel/note/addPersonne.html.twig',
                [
                    'form' => $form->createView(),
                    'eval' => $evaluation
                ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error666.html.twig');
    }
}
