<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\MesClasses\MyAbsences;
use App\MesClasses\MyEtudiant;
use App\MesClasses\Tools;
use App\Repository\AbsenceRepository;
use App\Repository\MatiereRepository;
use App\Repository\TypeGroupeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceController
 * @package App\Controller
 * @Route("/application/personnel/absence")
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
     * @Route("/{matiere}", name="application_personnel_absence_index", requirements={"matiere"="\d+"}, methods={"GET"})
     * @param MatiereRepository    $matiereRepository
     * @param TypeGroupeRepository $typeGroupeRepository
     * @param Matiere              $matiere
     *
     * @return Response
     */
    public function index(
        MatiereRepository $matiereRepository,
        TypeGroupeRepository $typeGroupeRepository,
        Matiere $matiere
    ): Response {
        $semestre = $matiere->getSemestre();

        if ($semestre !== null) {
            return $this->render('appPersonnel/absence/index.html.twig', [
                'matiere'     => $matiere,
                'matieres'    => $matiereRepository->findBySemestre($semestre),
                'typeGroupes' => $typeGroupeRepository->findBySemestre($semestre)
            ]);
        }

        return $this->redirectToRoute('erreur_666');
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
            'absences' => $this->myAbsences->getAbsencesMatiere(
                $matiere,
                $matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : 0
            )
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
     * @Route("/export/{matiere}/export.{_format}", name="application_personnel_absence_export", methods="GET")
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function export(Matiere $matiere): Response
    {
        //save en csv
        return null;
    }

    /**
     * @Route("/{uuid}", name="application_personnel_absence_delete", methods="DELETE")
     * @param MyEtudiant $myEtudiant
     * @param Request    $request
     * @param Absence    $absence
     *
     * @return Response
     * @ParamConverter("absence", options={"mapping": {"uuid": "uuid"}})
     */
    public function supprimer(MyEtudiant $myEtudiant, Request $request, Absence $absence): Response
    {
        $id = $absence->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $myEtudiant->setEtudiant($absence->getEtudiant());
            $myEtudiant->removeAbsence($absence);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'date.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/ajax/absences/{matiere}", name="application_personnel_absence_get_ajax", methods="GET",
     *                                    options={"expose":true})
     * @param AbsenceRepository $absenceRepository
     * @param Matiere           $matiere
     *
     * @return JsonResponse
     */
    public function ajaxGetAbsencesMatiere(
        AbsenceRepository $absenceRepository,
        Matiere $matiere
    ): JsonResponse {
        $absences = $absenceRepository->getByMatiereArray(
            $matiere,
            $matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : 0
        );

        // dump($absences);
        return $this->json($absences);
    }

    /**
     * @Route("/ajax/saisie/{matiere}/{etudiant}", name="application_personnel_absence_saisie_ajax", methods="POST",
     *                                             options={"expose":true})
     * @param MyEtudiant        $myEtudiant
     * @param AbsenceRepository $absenceRepository
     * @param Request           $request
     * @param Matiere           $matiere
     * @param Etudiant          $etudiant
     *
     * @return JsonResponse|Response
     * @throws \Exception
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
        $absence = $absenceRepository->findBy([
            'matiere'            => $matiere->getId(),
            'etudiant'           => $etudiant->getId(),
            'date'               => $date,
            'heure'              => $heure,
            'anneeuniversitaire' => $etudiant->getSemestre() ? $etudiant->getSemestre()->getAnneeUniversitaire() : 0
        ]);

        if ($request->get('action') === 'saisie' && \count($absence) === 0) {
            //if ($this->saisieAutorise($connect->getDepartement()->getPgNbjourssaisie(), $datesymfony)) {
            $myEtudiant->setEtudiant($etudiant);

            $myEtudiant->addAbsence(
                $date,
                $heure,
                $matiere,
                $this->getConnectedUser()
            );

            $absences = $absenceRepository->getByMatiereArray(
                $matiere,
                $matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : 0
            );

            return $this->json($absences);


            //}
            //saisie interdite
            //return new response('out', 500);
        }

        if (\count($absence) === 1) {


            //un tableau, donc une absence ?
            $myEtudiant->setIdEtudiant($request->request->get('etudiant'));
            $myEtudiant->removeAbsence($absence[0]);

            $absences = $absenceRepository->getByMatiereArray(
                $matiere,
                $matiere->getSemestre()->getAnneeUniversitaire()
            );

            return $this->json($absences);
        }

        return new response('nok', 500);
    }
}
