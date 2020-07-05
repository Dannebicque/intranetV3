<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BlocNotesAbsencesController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller;

use App\MesClasses\MyEtudiant;
use App\MesClasses\MyPrevisionnel;
use App\Repository\MatiereRepository;
use Exception;
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
     * @return Response
     */
    public function personnel(MyPrevisionnel $myPrevisionnel): Response
    {
        return $this->render('bloc_notes_absences/personnel.html.twig', [
            'previsionnel' => $myPrevisionnel->getPrevisionnelEnseignantDepartement(
                $this->getConnectedUser(),
                $this->dataUserSession->getDepartement()
            )
        ]);
    }

    /**
     * @param MyEtudiant $myEtudiant
     *
     * @return Response
     * @throws Exception
     */
    public function etudiant(MyEtudiant $myEtudiant): Response
    {
        $myEtudiant->setEtudiant($this->getConnectedUser());
        $myEtudiant->getNotesAbsences($this->getConnectedUser()->getSemestre(),
            $this->getConnectedUser()->getAnneeUniversitaire());
        $myEtudiant->getAbsencesSemestre($this->getConnectedUser()->getSemestre());

        return $this->render('bloc_notes_absences/etudiant.html.twig', [
            'myEtudiant' => $myEtudiant,
        ]);
    }

    public function mccSemestre(MatiereRepository $matiereRepository): Response
    {
        return $this->render('bloc_notes_absences/mcc.html.twig', [
            'matieres' => $matiereRepository->findBySemestre($this->getConnectedUser()->getSemestre())
        ]);
    }
}
