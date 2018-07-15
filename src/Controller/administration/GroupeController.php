<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Form\GroupeType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class GroupeController
 * @package App\Controller\administration
 * @Route({"fr":"administration/groupe",
 *         "en":"administration/group"}
 *)
 */
class GroupeController extends BaseController
{
    /**
     * @Route("/", name="administration_groupe_index")
     */
    public function index(): Response
    {
        return $this->render('administration/groupe/index.html.twig', [
        ]);
    }

    /**
     * @Route("/new/{semestre}", name="administration_groupe_new", methods="GET|POST")
     * @param Request                $request
     * @param Semestre               $semestre
     *
     * @return Response
     */
    public function create(Request $request, Semestre $semestre): Response
    {
        $groupe = new Groupe();
        $form = $this->createForm(GroupeType::class, $groupe, [
            'semestre' => $semestre,
            'attr'     => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($groupe);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.add.success.flash');

            return $this->redirectToRoute('administration_groupe_index');
        }

        return $this->render('administration/groupe/new.html.twig', [
            'groupe' => $groupe,
            'form'   => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_groupe_show", methods="GET")
     * @param Groupe $groupe
     *
     * @return Response
     */
    public function show(Groupe $groupe): Response
    {
        return $this->render('administration/groupe/show.html.twig', ['groupe' => $groupe]);
    }

    /**
     * @Route("/{id}/edit", name="administration_groupe_edit", methods="GET|POST")
     * @param Request                $request
     * @param Groupe                 $groupe
     *
     * @return Response
     */
    public function edit(Request $request, Groupe $groupe): Response
    {
        if ($groupe->getTypeGroupe() !== null && $groupe->getTypeGroupe()->getSemestre() !== null) {
            $form = $this->createForm(GroupeType::class, $groupe,
                [
                    'semestre' => $groupe->getTypeGroupe()->getSemestre(),
                    'attr'     => [
                        'data-provide' => 'validation'
                    ]
                ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.edit.success.flash');

                return $this->redirectToRoute('administration_groupe_index');
            }

            return $this->render('administration/groupe/edit.html.twig', [
                'groupe' => $groupe,
                'form'   => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_groupe_duplicate", methods="GET|POST")
     * @param Groupe                 $groupe
     *
     * @return Response
     */
    public function duplicate(Groupe $groupe): Response
    {
        $newGroupe = clone $groupe;

        $this->entityManager->persist($newGroupe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.duplicate.success.flash');

        return $this->redirectToRoute('administration_groupe_edit', ['id' => $newGroupe->getId()]);
    }

    /**
     * @Route({"fr":"/{id}", "en":"/{id}"}, name="administration_groupe_delete", methods="DELETE")
     * @param Request $request
     * @param Groupe  $groupe
     *
     * @return Response
     */
    public function delete(Request $request, Groupe $groupe): Response
    {//todo: tester delete cascade

        $id = $groupe->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            $this->entityManager->remove($groupe);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }


    /**
     * @Route("/export.{_format}", name="administration_groupe_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }
}
