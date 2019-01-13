<?php

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Formation;
use App\Form\FormationType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/structure/formation")
 */
class FormationController extends BaseController
{
    /**
     * @Route("/{id}", name="administration_structure_formation_show", methods="GET")
     * @param Formation $formation
     *
     * @return Response
     */
    public function show(Formation $formation): Response
    {
        return $this->render('structure/formation/show.html.twig', ['formation' => $formation]);
    }

    /**
     * @Route("/{id}/edit", name="administration_structure_formation_edit", methods="GET|POST")
     * @param Request   $request
     * @param Formation $formation
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Formation $formation): Response
    {
        $form = $this->createForm(FormationType::class, $formation, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return $this->redirectToRoute('administration_structure_formation_edit', ['id' => $formation->getId()]);
        }

        return $this->render('structure/formation/edit.html.twig', [
            'formation' => $formation,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_structure_formation_delete", methods="DELETE")
     */
    public function delete(): void
    {
    }
}
