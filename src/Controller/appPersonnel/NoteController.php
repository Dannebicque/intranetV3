<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/NoteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/10/2020 18:19

namespace App\Controller\appPersonnel;

use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\MyEvaluation;
use App\Classes\MyEvaluations;
use App\Classes\MyExport;
use App\Classes\MyUpload;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Form\EvaluationType;
use App\Repository\EtudiantRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\RedirectResponse;
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
            $myEvaluations->getEvaluationsMatiere($this->dataUserSession->getAnneeUniversitaire());

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
     * @return RedirectResponse|Response
     * @throws Exception
     */
    public function saisie(Request $request, Matiere $matiere)
    {
        if ($matiere !== null && $matiere->getUe() !== null) {
            $evaluation = new Evaluation($this->getConnectedUser(), $matiere, $this->dataUserSession->getDepartement());
            $form = $this->createForm(
                EvaluationType::class,
                $evaluation,
                [
                    'departement'     => $this->dataUserSession->getDepartement(),
                    'semestre'        => $matiere->getSemestre(),
                    'matiereDisabled' => false,
                    'locale'          => $request->getLocale(),
                    'attr'            => [
                        'data-provide' => 'validation'
                    ]
                ]
            );

            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $evaluation->setAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire());
                $this->entityManager->persist($evaluation);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'evaluation.add.success.flash');

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
     * @param Request      $request
     * @param MyEvaluation $myEvaluation
     * @param Evaluation   $evaluation
     *
     * @return Response
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     *
     */
    public function saisieNotes(Request $request, MyEvaluation $myEvaluation, Evaluation $evaluation): Response
    {
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();

        return $this->render('appPersonnel/note/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'notes'      => $notes,
            'autorise'   => true
        ]);
    }

    /**
     * @param EtudiantNotes      $etudiantNotes
     * @param EtudiantRepository $etudiantRepository
     * @param Request            $request
     *
     * @param Evaluation         $evaluation
     *
     * @return RedirectResponse|Response
     * @throws Exception
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     *
     * @Route("/sauvegarde/{uuid}",
     *     name="application_personnel_note_ajax_saisie",
     *     methods={"POST|GET"},
     *     options={"expose":true})
     */
    public function enregistreNoteAction(
        EtudiantNotes $etudiantNotes,
        EtudiantRepository $etudiantRepository,
        Request $request,
        Evaluation $evaluation
    ) {
        $tnote = $request->request->get('notes')['notes'];

        foreach ($tnote as $iValue) {
            $etudiant = $etudiantRepository->find($iValue['id']);
            if ($etudiant !== null) {
                $etudiantNotes->setEtudiant($etudiant);
                $etudiantNotes->addNote($evaluation, $iValue, $this->getConnectedUser());
            }
        }

        return new Response();
    }

    /**
     * @Route("/import/{evaluation}", name="application_personnel_note_import", requirements={"evaluation"="\d+"})
     * @param Request      $request
     * @param MyUpload     $myUpload
     * @param MyEvaluation $myEvaluation
     * @param Evaluation   $evaluation
     *
     * @return Response
     * @throws Exception
     */
    public function import(
        Request $request,
        MyUpload $myUpload,
        MyEvaluation $myEvaluation,
        Evaluation $evaluation
    ): Response {
        //upload
        $fichier = $myUpload->upload($request->files->get('fichier_import'), 'temp/');

        //traitement de l'import des notes.
        $notes = $myEvaluation->importEvaluation($evaluation, $fichier);
        $this->addFlashBag('success', 'import_note_a_verifier');

        return $this->render('appPersonnel/note/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'notes'      => $notes,
            'import'     => true,
            'autorise'   => true
        ]);
    }

    /**
     * @Route("/modele-import/{evaluation}", name="application_personnel_note_import_modele", methods="GET")
     * @param MyExport   $myExport
     *
     * @param Evaluation $evaluation
     *
     * @return Response|null
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function modeleImport(MyExport $myExport, Evaluation $evaluation): ?Response
    {
        return $myExport->genereModeleImportNote($evaluation);
    }
}
