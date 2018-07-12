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
     * @Route("/help", name="administration_etudiant_semestre_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/etudiant/help.html.twig');
    }

    /**
     * @Route("/save/{semestre}.{_format}",
     *     name="administration_etudiant_semestre_save",
     *     methods="GET",
     *     requirements={
     *     "semestre"="\d+",
     *     "_format"="csv|xlsx|pdf"
     * })
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }


}
