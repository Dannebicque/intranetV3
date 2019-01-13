<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Form\MatiereType;
use App\Repository\MatiereRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/matiere")
 */
class MatiereController extends BaseController
{
    /**
     * @Route("/", name="administration_matiere_index", methods="GET")
     * @param MatiereRepository $matiereRepository
     *
     * @return Response
     */
    public function index(MatiereRepository $matiereRepository): Response
    {
        return $this->render('administration/matiere/index.html.twig', ['matieres' => $matiereRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="administration_matiere_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new/{diplome}", name="administration_matiere_new", methods="GET|POST")
     * @param Request $request
     *
     * @param Diplome $diplome
     *
     * @return Response
     */
    public function create(Request $request, Diplome $diplome): Response
    {
        $matiere = new Matiere();
        $form = $this->createForm(MatiereType::class, $matiere, [
            'diplome' => $diplome,
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($matiere);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.add.success.flash');

            return $this->redirectToRoute('administration_matiere_index');
        }

        return $this->render('administration/matiere/new.html.twig', [
            'matiere' => $matiere,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_matiere_show", methods="GET")
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function show(Matiere $matiere): Response
    {
        return $this->render('administration/matiere/show.html.twig', ['matiere' => $matiere]);
    }

    /**
     * @Route("/{id}/edit", name="administration_matiere_edit", methods="GET|POST")
     * @param Request                $request
     * @param Matiere                $matiere
     *
     * @return Response
     */
    public function edit(Request $request, Matiere $matiere): Response
    {
        $form = $this->createForm(MatiereType::class, $matiere, [
            'diplome' => $matiere->getSemestre()->getAnnee()->getDiplome(),
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.edit.success.flash');

            return $this->redirectToRoute('administration_matiere_index');
        }

        return $this->render('administration/matiere/edit.html.twig', [
            'matiere' => $matiere,
            'form'    => $form->createView(),
        ]);
    }


    /**
     * @Route("/{id}/duplicate", name="administration_matiere_duplicate", methods="GET|POST")
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function duplicate(Matiere $matiere): Response
    {
        $newMatiere = clone $matiere;

        $this->entityManager->persist($newMatiere);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.duplicate.success.flash');

        return $this->redirectToRoute('administration_matiere_edit', ['id' => $newMatiere->getId()]);
    }

        /**
     * @Route("/{id}", name="administration_matiere_delete", methods="DELETE")
     */
    public function delete(): void
    {
    }
}
