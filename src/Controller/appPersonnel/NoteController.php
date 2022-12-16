<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/NoteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Controller\appPersonnel;

use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyEvaluation;
use App\Classes\MyEvaluations;
use App\Classes\MyExport;
use App\Classes\MyUpload;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Evaluation;
use App\Entity\Semestre;
use App\Exception\MatiereNotFoundException;
use App\Form\EvaluationType;
use App\Repository\EtudiantRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_PERMANENT')]
#[Route(path: '/application/personnel/note')]
class NoteController extends BaseController
{
    /**
     * @throws \App\Exception\MatiereNotFoundException
     */
    #[Route(path: '/saisie/etape-1/{matiere}/{semestre}', name: 'application_personnel_note_saisie')]
    public function saisie(TypeMatiereManager $typeMatiereManager, Request $request, string $matiere, Semestre $semestre): RedirectResponse|Response
    {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null === $mat) {
            throw new MatiereNotFoundException();
        }
        $this->denyAccessUnlessGranted('CAN_ADD_NOTE', ['matiere' => $mat, 'semestre' => $semestre]);
        $evaluation = new Evaluation($this->getUser(), $mat, $semestre);
        $form = $this->createForm(
            EvaluationType::class,
            $evaluation,
            [
                'departement' => $this->getDepartement(),
                'semestre' => $semestre,
                'matiereDisabled' => false,
                'personnelDisabled' => true,
                'autorise' => true,
                'locale' => $request->getLocale(),
                'enfant' => $mat->isEnfant(),
                'groupeEnfant' => $mat->groupesEnfant(),
            ]
        );
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $evaluation->setAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire());
            if ($mat->isEnfant()) {
                $evaluation->setTypeGroupe($mat->groupesEnfant()?->first()->getTypeGroupe()); // todo: en attendant mieux. Car peut y avoir plusieurs groupes, et donc plusieurs types groupes.
            }
            $this->entityManager->persist($evaluation);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'evaluation.add.success.flash');

            return $this->redirectToRoute(
                'application_personnel_note_saisie_2',
                ['uuid' => $evaluation->getUuidString()]
            );
        }

        return $this->render('appPersonnel/note/saisie.html.twig', [
            'matiere' => $mat,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/saisie/etape-2/{uuid}', name: 'application_personnel_note_saisie_2', requirements: ['matiere' => '\d+'])]
    #[ParamConverter('evaluation', options: ['mapping' => ['uuid' => 'uuid']])]
    public function saisieNotes(TypeMatiereManager $typeMatiereManager, MyEvaluation $myEvaluation, Evaluation $evaluation): Response
    {
        $matiere = $typeMatiereManager->getMatiere($evaluation->getIdMatiere(), $evaluation->getTypeMatiere());
        $this->denyAccessUnlessGranted('CAN_ADD_NOTE', ['matiere' => $matiere, 'semestre' => $evaluation->getSemestre()]);
        // todo: vérifier s'il est autorisé dans l'évaluation
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();

        return $this->render('appPersonnel/note/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'matiere' => $matiere,
            'notes' => $notes,
            'autorise' => true,
        ]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/sauvegarde/{uuid}', name: 'application_personnel_note_ajax_saisie', options: ['expose' => true], methods: ['POST|GET'])]
    #[ParamConverter('evaluation', options: ['mapping' => ['uuid' => 'uuid']])]
    public function enregistreNoteAction(EtudiantNotes $etudiantNotes, EtudiantRepository $etudiantRepository, Request $request, Evaluation $evaluation): Response
    {
        $tnote = $request->request->all();
        $tnote = $tnote['notes']['notes'];
        foreach ($tnote as $iValue) {
            $etudiant = $etudiantRepository->find($iValue['id']);
            if (null !== $etudiant) {
                $etudiantNotes->setEtudiant($etudiant);
                $etudiantNotes->addNote($evaluation, $iValue, $this->getUser());
            }
        }

        return new Response();
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/import/{evaluation}/{semestre}', name: 'application_personnel_note_import', requirements: ['evaluation' => '\d+'])]
    public function import(
        TypeMatiereManager $typeMatiereManager,
        Request $request,
        MyUpload $myUpload,
        MyEvaluation $myEvaluation,
        Evaluation $evaluation,
        Semestre $semestre): Response
    {
        // upload
        $fichier = $myUpload->upload($request->files->get('fichier_import'));
        $matiere = $typeMatiereManager->getMatiere($evaluation->getIdMatiere(), $evaluation->getTypeMatiere());
        $this->denyAccessUnlessGranted('CAN_ADD_NOTE', ['matiere' => $matiere, 'semestre' => $evaluation->getSemestre()]);
        if (null === $matiere) {
            throw new MatiereNotFoundException();
        }
        // traitement de l'import des notes.
        $myEvaluation->importEvaluation($evaluation, $fichier, $semestre,
            $request->request->has('ecrase_notes') && 'true' === $request->request->get('ecrase_notes'));
        $this->addFlashBag('success', 'import_note_a_verifier');

        return $this->redirectToRoute('administration_evaluation_show', ['uuid' => $evaluation->getUuidString()]);
    }

    /**
     * @throws \App\Exception\MatiereNotFoundException
     * @throws \App\Exception\SemestreNotFoundException
     */
    #[Route(path: '/modele-import/{evaluation}/{semestre}', name: 'application_personnel_note_import_modele', methods: 'GET')]
    public function modeleImport(TypeMatiereManager $typeMatiereManager, MyExport $myExport, Evaluation $evaluation, Semestre $semestre): ?Response
    {
        $matiere = $typeMatiereManager->getMatiere($evaluation->getIdMatiere(), $evaluation->getTypeMatiere());
        $this->denyAccessUnlessGranted('CAN_ADD_NOTE', ['matiere' => $matiere, 'semestre' => $evaluation->getSemestre()]);
        if (null === $matiere) {
            throw new MatiereNotFoundException();
        }

        return $myExport->genereModeleImportNote($semestre);
    }

    /**
     * @throws \App\Exception\MatiereNotFoundException
     */
    #[Route(path: '/{matiere}/{index}/{semestre}', name: 'application_personnel_note_index')]
    public function index(TypeMatiereManager $typeMatiereManager, MyEvaluations $myEvaluations, string $matiere, Semestre $semestre, int $index = 0): Response
    {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        $this->denyAccessUnlessGranted('CAN_ADD_NOTE', ['matiere' => $mat, 'semestre' => $semestre]);
        if (null === $mat) {
            throw new MatiereNotFoundException();
        }

        $myEvaluations->setMatiere($mat);
        $myEvaluations->getEvaluationsMatiere($this->dataUserSession->getAnneeUniversitaire());

        return $this->render('appPersonnel/note/index.html.twig', [
            'matiere' => $mat,
            'evaluations' => $myEvaluations,
            'indexEval' => $index,
            'semestre' => $semestre,
        ]);
    }
}
