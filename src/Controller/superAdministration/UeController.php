<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Form\UeType;
use App\Repository\UeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"super-administration/structure/unite-enseignement",
 *         "en":"super-administration/organization/teaching-unit"}
 *)
 */
class UeController extends BaseController
{
    /**
     * @Route("/help", name="sa_ue_help", methods="GET")
     */
    public function help(): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/ue/help.html.twig');
    }

    /**
     * @Route("/save", name="sa_ue_save", methods="GET")
     */
    public function save(): Response
    {
        //todo: comment l'exploiter...
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="sa_ue_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //todo: comment l'exploiter...
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new/{semestre}", name="sa_ue_new", methods="GET|POST")
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     *
     * @param Semestre               $semestre
     *
     * @return Response
     */
    public function create(EntityManagerInterface $entityManager, Request $request, Semestre $semestre): Response
    {
        if ($semestre->getAnnee() !== null) {
            $ue = new Ue($semestre);
            $form = $this->createForm(UeType::class, $ue, ['diplome' => $semestre->getAnnee()->getDiplome()]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $entityManager->persist($ue);
                $entityManager->flush();

                return $this->redirectToRoute('sa_structure_index',
                    ['formation' => $ue->getSemestre()->getAnnee()->getDiplome()->getFormation()->getId()]);
            }

            return $this->render('structure/ue/new.html.twig', [
                'ue'   => $ue,
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');

    }

    /**
     * @Route("/{id}", name="sa_ue_show", methods="GET")
     * @param Ue $ue
     *
     * @return Response
     */
    public function show(Ue $ue): Response
    {
        return $this->render('structure/ue/show.html.twig', ['ue' => $ue]);
    }

    /**
     * @Route("/{id}/edit", name="sa_ue_edit", methods="GET|POST")
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     * @param Ue                     $ue
     *
     * @return Response
     */
    public function edit(EntityManagerInterface $entityManager, Request $request, Ue $ue): Response
    {
        if ($ue->getDiplome() !== null) {

            $form = $this->createForm(UeType::class, $ue, ['diplome' => $ue->getDiplome()->getId()]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $entityManager->flush();

                return $this->redirectToRoute('sa_structure_index',
                    ['formation' => $ue->getSemestre()->getAnnee()->getDiplome()->getFormation()->getId()]);
            }

            return $this->render('structure/ue/edit.html.twig', [
                'ue'   => $ue,
                'form' => $form->createView(),
            ]);
        }

        return $this->render('erreur/404.html.twig');
    }

    /**
     * @Route("/{id}/duplicate", name="sa_ue_duplicate", methods="GET|POST")
     * @param EntityManagerInterface $entityManager
     * @param Ue                     $ue
     *
     * @return Response
     */
    public function duplicate(EntityManagerInterface $entityManager, Ue $ue): Response
    {
        $newUe = clone $ue;

        $entityManager->persist($newUe);
        $entityManager->flush();

        return $this->redirectToRoute('sa_ue_edit', ['id' => $newUe->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_ue_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
