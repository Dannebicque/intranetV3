<?php

namespace App\Controller;

use App\MesClasses\MyEtudiant;
use App\MesClasses\MyPrevisionnel;
use App\Repository\MatiereRepository;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class BlocNotesAbsencesController
 * @package App\Controller
 */
class BlocNotesAbsencesController extends BaseController
{
    /**
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function personnel(MyPrevisionnel $myPrevisionnel): Response
    {
        return $this->render('bloc_notes_absences/personnel.html.twig', [
            'previsionnel' => $myPrevisionnel->getPrevisionnelEnseignantFormation(
                $this->getUser(),
                $this->dataUserSession->getFormation()
            )
        ]);
    }

    /**
     * @param MyEtudiant $myEtudiant
     *
     * @return Response
     */
    public function etudiant(MyEtudiant $myEtudiant): Response
    {
        $myEtudiant->setEtudiant($this->getUser());
        $myEtudiant->getNotesAbsences($this->getUser()->getSemestre(), $this->getUser()->getSemestre()->getAnneeUniversitaire());

        return $this->render('bloc_notes_absences/etudiant.html.twig', [
            'etudiant' => $myEtudiant,
        ]);
    }

    public function mccSemestre(MatiereRepository $matiereRepository): Response
    {
        return $this->render('bloc_notes_absences/mcc.html.twig', [
            'matieres' => $matiereRepository->findBySemestre($this->getUser()->getSemestre())
        ]);
    }
}
