<?php

namespace App\Controller;

use App\MesClasses\DataUserSession;
use App\MesClasses\MyPrevisionnel;
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
    public function personnel(MyPrevisionnel $myPrevisionnel)
   {
       return $this->render('bloc_notes_absences/personnel.html.twig',[
           'previsionnel' => $myPrevisionnel->getPrevisionnelEnseignantFormation($this->getUser(), $this->dataUserSession->getFormation())
       ]);
   }

    public function etudiant()
    {
        return $this->render('bloc_notes_absences/etudiant.html.twig',[

        ]);
    }
}
