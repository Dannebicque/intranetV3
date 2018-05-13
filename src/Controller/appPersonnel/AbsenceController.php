<?php

namespace App\Controller\appPersonnel;

use App\Entity\Absence;
use App\Entity\Matiere;
use App\MesClasses\DataUserSession;
use App\MesClasses\MyAbsences;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class AbsenceController
 * @package App\Controller
 * @Route({"fr":"application/personnel/absence",
 *         "en":"application/team/absence"}
 *)
 * @IsGranted("ROLE_PERMANENT")
 */
class AbsenceController extends Controller
{
    private $myAbsences;
    private $dataUserSession;

    public function __construct(MyAbsences $myAbsences, DataUserSession $dataUserSession)
    {
        $this->myAbsences = $myAbsences;
        $this->dataUserSession = $dataUserSession;
    }

    /**
     * @Route("/{matiere}", name="application_personnel_absence_index", requirements={"matiere"="\d+"})
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function index(Matiere $matiere): Response
    {
       return $this->render('appPersonnel/absence/index.html.twig', [
            'matiere' => $matiere
       ]);
    }

    /**
     * @Route("/saisie/{matiere}", name="application_personnel_absence_voir", requirements={"matiere"="\d+"})
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function voir(Matiere $matiere): Response
    {
        return $this->render('appPersonnel/absence/voir.html.twig', [
            'matiere' => $matiere,
            'absences' => $this->myAbsences->getAbsencesMatiere($matiere, $this->dataUserSession->getFormation()->getAnneeCourante())
        ]);
    }

    /**
     * @Route("/aide", name="application_personnel_absence_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('appPersonnel/absence/help.html.twig');
    }

    /**
     * @Route("/save/{matiere}", name="application_personnel_absence_save", methods="GET")
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function save(Matiere $matiere): Response
    {
        //save en csv
    }

    /**
     * @Route("/imprimer/{matiere}", name="application_personnel_absence_imprimer", methods="GET")
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function imprimer(Matiere $matiere): Response
    {
        //print (pdf)
    }

    /**
     * @Route("/{id}", name="application_personnel_absence_delete", methods="DELETE")
     * @param Absence $absence
     *
     * @return Response
     */
    public function supprimer(Absence $absence): Response
    {

    }

}
