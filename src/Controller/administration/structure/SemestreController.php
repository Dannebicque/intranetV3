<?php

namespace App\Controller\administration\structure;

use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Form\SemestreType;
use App\Repository\SemestreRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}/administration/structure/semestre",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class SemestreController extends Controller
{
    /**
     * @Route("/", name="administration_structure_semestre_index", methods="GET")
     * @param SemestreRepository $semestreRepository
     *
     * @return Response
     */
    public function index(SemestreRepository $semestreRepository): Response
    {
        return $this->render('administration/structure/semestre/index.html.twig', ['semestres' => $semestreRepository->findAll()]);
    }

    /**
    * @Route("/help", name="administration_structure_semestre_help", methods="GET")
    */
    public function help(): Response
    {
        return $this->render('administration/structure/semestre/help.html.twig');
    }

    /**
    * @Route("/save", name="administration_structure_semestre_save", methods="GET")
    */
    public function save(): Response
    {
        //save en csv
        return new Response('', 200);
    }

    /**
    * @Route("/imprimer", name="administration_structure_semestre_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', 200);
    }

    /**
     * @Route("/new/{annee}", name="administration_structure_semestre_new", methods="GET|POST")
     * @param Request $request
     * @param Diplome $diplome
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function new(Request $request, Diplome $diplome): Response
    {
        $semestre = new Semestre();
        $form = $this->createForm(SemestreType::class, $semestre, ['diplome' => $diplome->getId()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($semestre);
            $em->flush();

            return $this->redirectToRoute('administration_structure_semestre_index');
        }

        return $this->render('administration/structure/semestre/new.html.twig', [
            'semestre' => $semestre,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_structure_semestre_show", methods="GET")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function show(Semestre $semestre): Response
    {
        return $this->render('administration/structure/semestre/show.html.twig', ['semestre' => $semestre]);
    }

    /**
     * @Route("/{id}/edit", name="administration_structure_semestre_edit", methods="GET|POST")
     * @param Request  $request
     * @param Semestre $semestre
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Semestre $semestre): Response
    {
        if ($semestre->getAnnee()->getDiplome() !== null) {
            $form = $this->createForm(SemestreType::class, $semestre,
                ['diplome' => $semestre->getAnnee()->getDiplome()->getId()]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->getDoctrine()->getManager()->flush();

                return $this->redirectToRoute('administration_structure_semestre_edit', ['id' => $semestre->getId()]);
            }

            return $this->render('administration/structure/semestre/edit.html.twig', [
                'semestre' => $semestre,
                'form'     => $form->createView(),
            ]);
        }
    }

    /**
     * @Route("/{id}", name="administration_structure_semestre_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
