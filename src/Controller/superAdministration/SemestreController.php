<?php

namespace App\Controller\superAdministration;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Form\SemestreType;
use App\Repository\SemestreRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"super-administration/structure/semestre",
 *         "en":"super-administration/organization/semester"}
 *)
 */
class SemestreController extends Controller
{
    /**
     * @Route("/", name="sa_semestre_index", methods="GET")
     * @param SemestreRepository $semestreRepository
     *
     * @return Response
     */
    public function index(SemestreRepository $semestreRepository): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/semestre/index.html.twig', ['semestres' => $semestreRepository->findAll()]);
    }

    /**
     * @Route("/help", name="sa_semestre_help", methods="GET")
     */
    public function help(): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/semestre/help.html.twig');
    }

    /**
     * @Route("/save", name="sa_semestre_save", methods="GET")
     */
    public function save(): Response
    {
        //todo: comment l'exploiter...
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="sa_semestre_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //todo: comment l'exploiter...
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new/{annee}", name="sa_semestre_new", methods="GET|POST")
     * @param Request $request
     * @param Annee   $annee
     *
     * @return Response
     */
    public function create(Request $request, Annee $annee): Response
    {
        if ($annee->getDiplome() !== null) {
            $semestre = new Semestre();
            $semestre->setAnnee($annee);
            $form = $this->createForm(SemestreType::class, $semestre, ['diplome' => $annee->getDiplome()]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($semestre);
                $em->flush();

                return $this->redirectToRoute('sa_structure_index',
                    ['formation' => $semestre->getAnnee()->getDiplome()->getFormation()->getId()]);
            }

            return $this->render('structure/semestre/new.html.twig', [
                'semestre' => $semestre,
                'form'     => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="sa_semestre_show", methods="GET")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function show(Semestre $semestre): Response
    {
        return $this->render('structure/semestre/show.html.twig', ['semestre' => $semestre]);
    }

    /**
     * @Route("/{id}/edit", name="sa_semestre_edit", methods="GET|POST")
     * @param Request  $request
     * @param Semestre $semestre
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Semestre $semestre): Response
    {
        if ($semestre->getAnnee() !== null && $semestre->getAnnee()->getDiplome() !== null) {
            $form = $this->createForm(SemestreType::class, $semestre,
                ['diplome' => $semestre->getAnnee()->getDiplome()]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->getDoctrine()->getManager()->flush();

                return $this->redirectToRoute('sa_structure_index',
                    ['formation' => $semestre->getAnnee()->getDiplome()->getFormation()->getId()]);
            }

            return $this->render('structure/semestre/edit.html.twig', [
                'semestre' => $semestre,
                'form'     => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}/duplicate", name="sa_semestre_duplicate", methods="GET|POST")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function duplicate(Semestre $semestre): Response
    {
        $newSemestre = clone $semestre;

        $em = $this->getDoctrine()->getManager();
        $em->persist($newSemestre);
        $em->flush();

        return $this->redirectToRoute('sa_semestre_edit', ['id' => $newSemestre->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_semestre_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
