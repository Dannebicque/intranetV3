<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Form\ImportEtudiantType;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpFoundation\Request;
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
     * @Route("/ajouter", name="administration_etudiant_new", methods="GET|POST")
     */
    public function create(): Response
    {
        return $this->render('administration/etudiant/new.html.twig');
    }

    /**
     * @Route("/import", name="administration_etudiant_import", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function import(Request $request): Response
    {
        $form = $this->createForm(ImportEtudiantType::class, null,
            [
                'formation' => $this->dataUserSession->getFormation(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
            ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // data is an array with "name", "email", and "message" keys
            $data = $form->getData();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant.import.success.flash');

        }

        return $this->render('administration/etudiant/import.html.twig', [
            'form' => $form->createView(),
        ]);

    }


    /**
     * @Route("/export.{_format}", name="administration_all_etudiant_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }
}
