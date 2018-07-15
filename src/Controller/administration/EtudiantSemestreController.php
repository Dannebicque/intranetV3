<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\MesClasses\MyExport;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EtudiantController
 * @package App\Controller\administration
 * @Route({"fr":"administration/etudiant/semestre",
 *         "en":"administration/student/semester"}
 *)
 */
class EtudiantSemestreController extends BaseController
{
    /** @var EtudiantRepository */
    private $etudiantRepository;

    /**
     * EtudiantController constructor.
     *
     * @param EtudiantRepository $etudiantRepository
     */
    public function __construct(EtudiantRepository $etudiantRepository)
    {
        $this->etudiantRepository = $etudiantRepository;
    }

    /**
     * @Route("/parcours/{semestre}", name="administration_etudiant_parcours_semestre_index")
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function parcoursSemestre(Semestre $semestre): Response
    {
        return $this->render('administration/etudiant/parcours.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @Route("/{semestre}", name="administration_etudiant_semestre_index")
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function semestre(Semestre $semestre): Response
    {
        return $this->render('administration/etudiant/semestre.html.twig', [
            'semestre' => $semestre
        ]);
    }


    /**
     * @Route("/export/{semestre}.{_format}",
     *     name="administration_etudiant_semestre_export",
     *     methods="GET",
     *     requirements={
     *     "semestre"="\d+",
     *     "_format"="csv|xlsx|pdf"
     * })
     * @param MyExport $myExport
     * @param EtudiantRepository $etudiantRepository
     * @param Semestre $semestre
     * @param                    $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function exportAllAbsences(
        MyExport $myExport,
        EtudiantRepository $etudiantRepository,
        Semestre $semestre,
        $_format
    ): Response
    {
        $etudiants = $etudiantRepository->findBySemestre($semestre);
        $response = $myExport->genereFichierGenerique($_format, $etudiants, 'etudiants_' . $semestre->getLibelle(),
            ['etudiants_administration', 'utilisateur'], ['nom', 'prenom', 'sexe', 'numEtudiant', 'bac', 'mailUniv']);

        return $response;
    }


}
