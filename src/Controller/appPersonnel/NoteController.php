<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Form\EvaluationType;
use App\MesClasses\MyEvaluations;
use Doctrine\ORM\EntityManagerInterface;
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
     * @Route("/{matiere}", name="application_personnel_note_index", requirements={"matiere"="\d+"})
     * @param MyEvaluations $myEvaluations
     * @param Matiere       $matiere
     *
     * @return Response
     */
    public function index(MyEvaluations $myEvaluations, Matiere $matiere): Response
    {
        $myEvaluations->setMatiere($matiere);
        $myEvaluations->getEvaluationsMatiere($this->dataUserSession->getAnneeUniversitaire());

        return $this->render('appPersonnel/note/index.html.twig', [
            'matiere'     => $matiere,
            'evaluations' => $myEvaluations,
            'indexEval'   => 0 //todo à prendre en parametre
        ]);
    }

    /**
     * @Route("/saisie/etape-1/{matiere}", name="application_personnel_note_saisie", requirements={"matiere"="\d+"})
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     * @param Matiere                $matiere
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function saisie(EntityManagerInterface $entityManager, Request $request, Matiere $matiere)
    {
        $evaluation = new Evaluation($this->getUser(), $matiere, $this->dataUserSession->getFormation());
        $form = $this->createForm(EvaluationType::class, $evaluation,
            ['formation' => $this->dataUserSession->getFormation()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($evaluation);
            $entityManager->flush();

            return $this->redirectToRoute('application_personnel_note_saisie_2',
                ['evaluation' => $evaluation->getId()]);
        }

        return $this->render('appPersonnel/note/saisie.html.twig', [
            'matiere' => $matiere,
            'form'    => $form->createView()
        ]);
    }

    /**
     * @Route("/saisie/etape-2/{evaluation}", name="application_personnel_note_saisie_2",
     *                                        requirements={"matiere"="\d+"})
     * @param Request    $request
     * @param Evaluation $evaluation
     *
     * @return Response
     */
    public function saisie2(Request $request, Evaluation $evaluation)
    {
        return $this->render('appPersonnel/note/saisie_2.html.twig', [
            'evaluation' => $evaluation,
        ]);
    }

    /**
     * @Route("/import/{matiere}", name="application_personnel_note_import", requirements={"matiere"="\d+"})
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function import(Matiere $matiere)
    {
        return $this->render('appPersonnel/note/import.html.twig', [
            'matiere' => $matiere,
        ]);
    }

    /**
     * @Route("/aide", name="application_personnel_note_help", methods="GET")
     */
    public function help(): Response
    {
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/save/{evaluation}", name="application_personnel_note_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer/{evaluation}", name="application_personnel_note_imprimer", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/{id}", name="application_personnel_Note_delete", methods="DELETE")
     */
    public function supprimer(): Response
    {
        return new Response('', Response::HTTP_OK);
    }
}
