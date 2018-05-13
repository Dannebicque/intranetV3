<?php

namespace App\Controller;

use App\MesClasses\DataUserSession;
use App\MesClasses\MyEtudiant;
use App\MesClasses\MyPrevisionnel;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class BlocNotesAbsencesController extends Controller
{
    private $dataUserSession;

    public function __construct(DataUserSession $dataUserSession)
    {
        $this->dataUserSession = $dataUserSession;
    }

    /**
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function personnel(MyPrevisionnel $myPrevisionnel) :Response
   {
       return $this->render('bloc_notes_absences/personnel.html.twig',[
           'previsionnel' => $myPrevisionnel->getPrevisionnelEnseignantFormation($this->getUser(), $this->dataUserSession->getFormation())
       ]);
   }

    /**
     * @return Response
     */
    public function etudiant(MyEtudiant $myEtudiant) :Response
    {
        $myEtudiant->setEtudiant($this->getUser());
        $myEtudiant->getNotesAbsences();

        return $this->render('bloc_notes_absences/etudiant.html.twig',[
            'etudiant' => $myEtudiant,
        ]);
    }
}
