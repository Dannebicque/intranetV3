<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EtudiantController
 * @package App\Controller\administration
 * @Route({"fr":"administration/etudiant",
 *         "en":"administration/student"}
 *)
 */
class EtudiantController extends BaseController
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
     * @Route("/", name="administration_etudiant_index")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(): Response
    {
        return $this->render('administration/etudiant/index.html.twig', [
        ]);
    }

    /**
     * @Route("/semestre/{semestre}", name="administration_etudiant_semestre_index")
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
}
