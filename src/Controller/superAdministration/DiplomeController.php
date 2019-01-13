<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Formation;
use App\Form\DiplomeType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/structure/diplome")
 */
class DiplomeController extends BaseController
{
    /**
     * @Route("/new/{formation}", name="sa_diplome_new", methods="GET|POST")
     * @param Request   $request
     *
     * @param Formation $formation
     *
     * @return Response
     */
    public function create(Request $request, Formation $formation): Response
    {
        $diplome = new Diplome($formation);
        $form = $this->createForm(DiplomeType::class, $diplome, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($diplome);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.add.success.flash');

            return $this->redirectToRoute('sa_structure_index', ['formation' => $formation->getId()]);
        }

        return $this->render('structure/diplome/new.html.twig', [
            'diplome' => $diplome,
            'formation' => $formation,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_diplome_show", methods="GET")
     * @param Diplome $diplome
     *
     * @return Response
     */
    public function show(Diplome $diplome): Response
    {
        return $this->render('structure/diplome/show.html.twig', ['diplome' => $diplome]);
    }

    /**
     * @Route("/{id}/edit", name="sa_diplome_edit", methods="GET|POST")
     * @param Request                $request
     * @param Diplome                $diplome
     *
     * @return Response
     */
    public function edit(Request $request, Diplome $diplome): Response
    {
        $form = $this->createForm(DiplomeType::class, $diplome, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.edit.success.flash');

            return $this->redirectToRoute('sa_structure_index', ['formation' => $diplome->getFormation()->getId()]);
        }

        return $this->render('structure/diplome/edit.html.twig', [
            'diplome' => $diplome,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_diplome_duplicate", methods="GET|POST")
     * @param Diplome                $diplome
     *
     * @return Response
     */
    public function duplicate(Diplome $diplome): Response
    {
        $newDiplome = clone $diplome;

        $this->entityManager->persist($newDiplome);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.duplicate.success.flash');

        return $this->redirectToRoute('sa_diplome_edit', ['id' => $newDiplome->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_diplome_delete", methods="DELETE")
     * @param Request $request
     * @param Diplome $diplome
     * @return Response
     */
    public function delete(Request $request, Diplome $diplome): Response
    {
        $id = $diplome->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            if (count($diplome->getAnnees()) === 0) {
                $this->entityManager->remove($diplome);
                $this->entityManager->flush();
                $this->addFlashBag(
                    Constantes::FLASHBAG_SUCCESS,
                    'diplome.delete.success.flash'
                );

                return $this->json($id, Response::HTTP_OK);
            }

            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'diplome.delete.error.non-vide.flash');

            return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'diplome.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
