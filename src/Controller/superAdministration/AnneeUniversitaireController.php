<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Form\AnneeUniversitaireType;
use App\MesClasses\MyExport;
use App\Repository\AnneeUniversitaireRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/annee-universitaire")
 */
class AnneeUniversitaireController extends BaseController
{
    /**
     * @Route("/", name="sa_annee_universitaire_index", methods={"GET"})
     */
    public function index(AnneeUniversitaireRepository $anneeUniversitaireRepository): Response
    {
        return $this->render('super-administration/annee_universitaire/index.html.twig', [
            'annee_universitaires' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    /**
     * @Route("/export.{_format}", name="sa_annee_universitaire_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param AnneeUniversitaireRepository $anneeUniversitaireRepository
     *
     * @param                     $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function export(MyExport $myExport, AnneeUniversitaireRepository $anneeUniversitaireRepository, $_format): Response
    {
        $annee_universitaires = $anneeUniversitaireRepository->findAll();
        $response = $myExport->genereFichierGenerique(
            $_format,
            $annee_universitaires,
            'bacs',
            ['actualite_administration', 'utilisateur'],
            ['titre', 'texte', 'formation' => ['libelle']]
        );//todo: ajuster les champs

        return $response;
    }


    /**
     * @Route("/new", name="sa_annee_universitaire_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $anneeUniversitaire = new AnneeUniversitaire();
        $form = $this->createForm(AnneeUniversitaireType::class, $anneeUniversitaire);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($anneeUniversitaire);
            $entityManager->flush();

            return $this->redirectToRoute('sa_annee_universitaire_index');
        }

        return $this->render('super-administration/annee_universitaire/new.html.twig', [
            'annee_universitaire' => $anneeUniversitaire,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_annee_universitaire_show", methods={"GET"})
     */
    public function show(AnneeUniversitaire $anneeUniversitaire): Response
    {
        return $this->render('super-administration/annee_universitaire/show.html.twig', [
            'annee_universitaire' => $anneeUniversitaire,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="sa_annee_universitaire_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, AnneeUniversitaire $anneeUniversitaire): Response
    {
        $form = $this->createForm(AnneeUniversitaireType::class, $anneeUniversitaire);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('sa_annee_universitaire_index', [
                'id' => $anneeUniversitaire->getId(),
            ]);
        }

        return $this->render('super-administration/annee_universitaire/edit.html.twig', [
            'annee_universitaire' => $anneeUniversitaire,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_annee_universitaire_duplicate", methods="GET|POST")
     * @param AnneeUniversitaire $annee_universitaire
     *
     * @return Response
     */
    public function duplicate(AnneeUniversitaire $annee_universitaire): Response
    {
        $newAnneeUniversitaire = clone $annee_universitaire;

        $this->entityManager->persist($newAnneeUniversitaire);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_annee_universitaire_edit', ['id' => $newAnneeUniversitaire->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_annee_universitaire_delete", methods="DELETE")
     * @param Request $request
     * @param AnneeUniversitaire   $annee_universitaire
     *
     * @return Response
     */
    public function delete(Request $request, AnneeUniversitaire $annee_universitaire): Response
    {
        if ($this->isCsrfTokenValid('delete' . $annee_universitaire->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($annee_universitaire);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee_universitaire.delete.success.flash');
        }

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee_universitaire.delete.error.flash');

        return $this->redirectToRoute('sa_annee_universitaire_index');
    }
}
