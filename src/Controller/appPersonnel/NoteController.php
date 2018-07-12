<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Form\EvaluationType;
use App\MesClasses\MyEtudiant;
use App\MesClasses\MyEvaluation;
use App\MesClasses\MyEvaluations;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NotesController
 * @package App\Controller
 * @Route({"fr":"application/personnel/note",
 *         "en":"application/team/mark"}
 *)
 * @IsGranted("ROLE_PERMANENT")
 */
class NoteController extends BaseController
{
    /**
     * @Route("/{matiere}/{index}", name="application_personnel_note_index", requirements={"matiere"="\d+"})
     * @param MyEvaluations $myEvaluations
     * @param Matiere       $matiere
     *
     * @param int           $index
     *
     * @return Response
     */
    public function index(MyEvaluations $myEvaluations, Matiere $matiere, $index = 0): Response
    {
        $myEvaluations->setMatiere($matiere);
        $myEvaluations->getEvaluationsMatiere($this->dataUserSession->getAnneeUniversitaire());

        return $this->render('appPersonnel/note/index.html.twig', [
            'matiere'     => $matiere,
            'evaluations' => $myEvaluations,
            'indexEval'   => $index
        ]);
    }

    /**
     * @Route("/saisie/etape-1/{matiere}", name="application_personnel_note_saisie", requirements={"matiere"="\d+"})
     * @param Request                $request
     * @param Matiere                $matiere
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function saisie(Request $request, Matiere $matiere)
    {
        if ($matiere !== null && $matiere->getUe() !== null) {
            $evaluation = new Evaluation($this->getUser(), $matiere, $this->dataUserSession->getFormation());
            $form = $this->createForm(EvaluationType::class, $evaluation,
                [
                    'formation'       => $this->dataUserSession->getFormation(),
                    'semestre'        => $matiere->getUe()->getSemestre(),
                    'matiereDisabled' => true,
                    'attr'            => [
                        'data-provide' => 'validation'
                    ]
                ]);

            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($evaluation);
                $this->entityManager->flush();

                return $this->redirectToRoute('application_personnel_note_saisie_2',
                    ['evaluation' => $evaluation->getId()]);
            }

            return $this->render('appPersonnel/note/saisie.html.twig', [
                'matiere' => $matiere,
                'form'    => $form->createView()
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/saisie/etape-2/{evaluation}", name="application_personnel_note_saisie_2",
     *                                        requirements={"matiere"="\d+"})
     * @param MyEvaluation $myEvaluation
     * @param Evaluation   $evaluation
     *
     * @return Response
     */
    public function saisieNotes(MyEvaluation $myEvaluation, Evaluation $evaluation): Response
    {
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();
        return $this->render('appPersonnel/note/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'notes'      => $notes
        ]);
    }

    /**
     * @param MyEtudiant $myEtudiant
     * @param Request    $request
     *
     * @param Evaluation $evaluation
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     * @Route("/sauvegarde/{evaluation}",
     *     name="application_personnel_note_ajax_saisie",
     *     methods={"POST|GET"},
     *     options={"expose":true})
     */
    public function enregistreNoteAction(MyEtudiant $myEtudiant, Request $request, Evaluation $evaluation)
    {
        //vérifier $this->get('request')->request->get('notes)['notes']
        $tnote = $request->request->get('notes')['notes'];

        $nbNotes = \count($tnote);
        for ($i = 0; $i < $nbNotes; $i++) {
            $myEtudiant->setIdEtudiant($tnote[$i]['id']);
            $myEtudiant->addNote($evaluation, $tnote[$i]);
        }

        return new Response();
    }

    /**
     * @Route("/import/{matiere}", name="application_personnel_note_import", requirements={"matiere"="\d+"})
     * @param Request $request
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function import(Request $request, Matiere $matiere): Response
    {
        $evaluation = new Evaluation($this->getUser(), $matiere, $this->dataUserSession->getFormation());
        $form = $this->createForm(EvaluationType::class, $evaluation,
            [
                'formation'       => $this->dataUserSession->getFormation(),
                'semestre'        => $matiere->getUe() !== null ? $matiere->getUe()->getSemestre() : '',
                'import'          => true,
                'matiereDisabled' => true,
                'attr'            => [
                    'data-provide' => 'validation'
                ]
            ]);

        $form->handleRequest($request);

        if ($form->isSubmitted()) { //&& $form->isValid()
            //dump($request->files);
            $this->entityManager->persist($evaluation);
            $this->entityManager->flush();


            //traitement de l'import des notes.

            //return $this->redirectToRoute('application_personnel_note_confirme_import',
            //    ['evaluation' => $evaluation->getId()]);
        }

        return $this->render('appPersonnel/note/import.html.twig', [
            'matiere' => $matiere,
            'form'    => $form->createView()
        ]);
    }


    /**
     * @Route("/aide", name="application_personnel_note_help", methods="GET")
     */
    public function help(): Response
    {
        return new Response('', Response::HTTP_OK);
    }
}
