<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\MesClasses\MyAbsences;
use App\MesClasses\MyEtudiant;
use App\MesClasses\Tools;
use App\Repository\AbsenceRepository;
use App\Repository\MatiereRepository;
use App\Repository\TypeGroupeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceController
 * @package App\Controller
 * @Route({"fr":"application/personnel/absence",
 *         "en":"application/team/absence"}
 *)
 * @IsGranted("ROLE_PERMANENT")
 */
class AbsenceController extends BaseController
{
    private $myAbsences;

    /**
     * AbsenceController constructor.
     *
     * @param MyAbsences $myAbsences
     */
    public function __construct(MyAbsences $myAbsences)
    {
        $this->myAbsences = $myAbsences;
    }

    /**
     * @Route("/{matiere}", name="application_personnel_absence_index", requirements={"matiere"="\d+"})
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function index(
        MatiereRepository $matiereRepository,
        TypeGroupeRepository $typeGroupeRepository,
        Matiere $matiere
    ): Response
    {
        $semestre = $matiere->getSemestre();

        if ($semestre !== null) {
            return $this->render('appPersonnel/absence/index.html.twig', [
                'matiere'     => $matiere,
                'matieres'    => $matiereRepository->findBySemestre($semestre),
                'typeGroupes' => $typeGroupeRepository->findBySemestre($semestre)
            ]);
        } else {
            return $this->redirectToRoute('erreur_666');
        }
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
            'matiere'  => $matiere,
            'absences' => $this->myAbsences->getAbsencesMatiere($matiere,
                $this->dataUserSession->getAnneeUniversitaire())
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

    /**
     * @Route("/ajax/absences/{matiere}", name="application_personnel_absence_get_ajax", methods="GET",
     *                                    options={"expose":true})
     *
     */
    public function ajaxGetAbsencesMatiere(AbsenceRepository $absenceRepository, Matiere $matiere)
    {
        $absences = $absenceRepository->getAbsencesMatiereArray($matiere,
            $this->dataUserSession->getAnneeUniversitaire());

        return $this->json($absences);
    }

    /**
     * @Route("/ajax/saisie/{matiere}/{etudiant}", name="application_personnel_absence_saisie_ajax", methods="POST",
     *                                             options={"expose":true})
     *
     */
    public function ajaxSaisie(
        MyEtudiant $myEtudiant,
        AbsenceRepository $absenceRepository,
        Request $request,
        Matiere $matiere,
        Etudiant $etudiant
    ) {
        $date = Tools::convertDateToObject($request->request->get('date'));
        $heure = Tools::convertTimeToObject($request->request->get('heure'));
        $absence = $absenceRepository->findBy(array(
            'matiere'            => $matiere->getId(),
            'etudiant'           => $etudiant->getId(),
            'date'               => $date,
            'heure'              => $heure,
            'anneeuniversitaire' => $this->dataUserSession->getAnneeUniversitaire()
        ));

        if ($request->get('action') === 'saisie' && count($absence) === 0) {
            //if ($this->saisieAutorise($connect->getFormation()->getPgNbjourssaisie(), $datesymfony)) {
            $myEtudiant->setEtudiant($etudiant);

            $add = $myEtudiant->addAbsence(
                $date,
                $heure,
                $matiere,
                $this->dataUserSession->getUser(),
                $this->dataUserSession->getAnneeUniversitaire());

            $absences = $absenceRepository->getAbsencesMatiereArray($matiere,
                $this->dataUserSession->getAnneeUniversitaire());

            return $this->json($absences);


            //}
            //saisie interdite
            //return new response('out', 500);
        } elseif (count($absence) === 1) {


            //un tableau, donc une absence ?
            //envoyer un mail de confirmation de la suppression à l'étudiant et au responsable
            $myEtudiant->setIdEtudiant($request->request->get('etudiant'));
            $myEtudiant->removeAbsence($absence[0]);

            $absences = $absenceRepository->getAbsencesMatiereArray($matiere,
                $this->dataUserSession->getAnneeUniversitaire());

            return $this->json($absences);

        } else {
            return new response('nok', 500);
        }
    }

}
