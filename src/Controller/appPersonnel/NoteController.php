<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Form\EvaluationType;
use App\MesClasses\MyEtudiant;
use App\MesClasses\MyEvaluation;
use App\MesClasses\MyEvaluations;
use App\MesClasses\MyUpload;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NotesController
 * @package App\Controller
 * @Route("/application/personnel/note")
 *
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
        if ($matiere->getSemestre()) {
            $myEvaluations->setMatiere($matiere);
            $myEvaluations->getEvaluationsMatiere($matiere->getSemestre()->getAnneeUniversitaire());

            return $this->render('appPersonnel/note/index.html.twig', [
                'matiere'     => $matiere,
                'evaluations' => $myEvaluations,
                'indexEval'   => $index
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/saisie/etape-1/{matiere}", name="application_personnel_note_saisie", requirements={"matiere"="\d+"})
     * @param Request $request
     * @param Matiere $matiere
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     * @throws \Exception
     */
    public function saisie(Request $request, Matiere $matiere)
    {
        if ($matiere !== null && $matiere->getUe() !== null) {
            $evaluation = new Evaluation($this->getUser(), $matiere, $this->dataUserSession->getFormation());
            $form = $this->createForm(
                EvaluationType::class,
                $evaluation,
                [
                    'formation'       => $this->dataUserSession->getFormation(),
                    'semestre'        => $matiere->getUe()->getSemestre(),
                    'matiereDisabled' => false,
                    'locale' =>$request->getLocale(),
                    'attr'            => [
                        'data-provide' => 'validation'
                    ]
                ]
            );

            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($evaluation);
                $this->entityManager->flush();

                return $this->redirectToRoute(
                    'application_personnel_note_saisie_2',
                    ['uuid' => $evaluation->getUuidString()]
                );
            }

            return $this->render('appPersonnel/note/saisie.html.twig', [
                'matiere' => $matiere,
                'form'    => $form->createView()
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/saisie/etape-2/{uuid}", name="application_personnel_note_saisie_2",
     *                                        requirements={"matiere"="\d+"})
     * @param MyEvaluation $myEvaluation
     * @param Evaluation   $evaluation
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
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
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     * @Route("/sauvegarde/{uuid}",
     *     name="application_personnel_note_ajax_saisie",
     *     methods={"POST|GET"},
     *     options={"expose":true})
     * @throws \Exception
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
     * @param Request      $request
     * @param MyUpload     $myUpload
     * @param MyEvaluation $myEvaluation
     * @param Matiere      $matiere
     *
     * @return Response
     * @throws \Exception
     */
    public function import(Request $request, MyUpload $myUpload, MyEvaluation $myEvaluation, Matiere $matiere): Response
    {
        $evaluation = new Evaluation($this->getUser(), $matiere, $this->dataUserSession->getFormation());
        $form = $this->createForm(
            EvaluationType::class,
            $evaluation,
            [
                'formation'       => $this->dataUserSession->getFormation(),
                'semestre'        => $matiere->getUe() !== null ? $matiere->getUe()->getSemestre() : '',
                'import'          => true,
                'matiereDisabled' => true,
                'locale' =>$request->getLocale(),
                'attr'            => [
                    'data-provide' => 'validation'
                ]
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted()) { //&& $form->isValid()
            //todo: peut être simplement traiter et ne psa sauvegarder en BDD et sauvegarder une fois la confirmation faite ?
            $this->entityManager->persist($evaluation);
            $this->entityManager->flush();

            //upload
            $fichier = $myUpload->upload($request->files->get('evaluation')['fichier_import'], 'temp/');

            //traitement de l'import des notes.
            $myEvaluation->importEvaluation($evaluation, $fichier);

            /*return $this->redirectToRoute('application_personnel_note_confirme_import',
                ['evaluation' => $evaluation->getId()]);*/
        }

        return $this->render('appPersonnel/note/import.html.twig', [
            'matiere' => $matiere,
            'form'    => $form->createView()
        ]);
    }

    /**
     * @Route("/confirme-import/{evaluation}", name="application_personnel_note_confirme_import", methods="GET")
     * @param Evaluation $evaluation
     *
     * @return Response
     */
    public function confirmeImport(Evaluation $evaluation): Response
    {
        //todo: voir comment exploiter saisie_2?
        return $this->render('appPersonnel/note/confirmeImport.html.twig', [
            'evaluation' => $evaluation,

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
