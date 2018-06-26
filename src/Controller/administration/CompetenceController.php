<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Competence;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\CompetenceType;
use App\MesClasses\Csv\Csv;
use App\Repository\CompetenceRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/competences",
 *         "en":"administration/capacities"}
 *)
 */
class CompetenceController extends BaseController
{
    /**
     * @Route("/", name="administration_competence_index", methods="GET")
     * @param CompetenceRepository $competenceRepository
     *
     * @return Response
     */
    public function index(CompetenceRepository $competenceRepository): Response
    {
        return $this->render('administration/competence/index.html.twig',
            ['competences' => $competenceRepository->findAll()]);
    }

    /**
     * @Route("/new/{diplome}", name="administration_competence_new", methods="GET|POST")
     * @param Request $request
     * @param Diplome $diplome
     *
     * @return Response
     */
    public function create(Request $request, Diplome $diplome = null): Response
    {
        $competence = new Competence($diplome);
        $form = $this->createForm(CompetenceType::class, $competence, ['diplome' => $diplome]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($competence);
            $this->entityManager->flush();

            return $this->redirectToRoute('administration_competence_index');
        }

        return $this->render('administration/competence/new.html.twig', [
            'competence' => $competence,
            'form'       => $form->createView(),
        ]);
    }

    /**
     * @Route("/save", name="administration_competence_save", methods="GET")
     * @param Csv                  $csv
     * @param CompetenceRepository $competenceRepository
     *
     * @return Response
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function save(Csv $csv, CompetenceRepository $competenceRepository): Response
    {
        $competences = $competenceRepository->findByFormation($this->dataUserSession->getFormation(), 0);
        $csv->export('competences.csv', $competences, array('acutalite_administration'));

        return $csv->response();
    }

    /**
     * @Route("/imprimer", name="administration_competence_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/{id}", name="administration_competence_show", methods="GET")
     * @param Competence $competence
     *
     * @return Response
     */
    public function show(Competence $competence): Response
    {
        return $this->render('administration/competence/show.html.twig', ['competence' => $competence]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_competence_duplicate", methods="GET")
     * @param Competence $competence
     *
     * @return Response
     */
    public function duplicate(Competence $competence): Response
    {
        $newCompetence = clone $competence;
        $this->entityManager->persist($newCompetence);
        $this->entityManager->flush();

        return $this->redirectToRoute('administration_competence_edit', ['id' => $newCompetence->getId()]);

    }

    /**
     * @Route("/{id}/edit", name="administration_competence_edit", methods="GET|POST")
     * @param Request    $request
     * @param Competence $competence
     *
     * @return Response
     */
    public function edit(Request $request, Competence $competence): Response
    {
        $form = $this->createForm(CompetenceType::class, $competence, ['diplome' => $competence->getDiplome()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return $this->redirectToRoute('administration_competence_index');
        }

        return $this->render('administration/competence/edit.html.twig', [
            'competence' => $competence,
            'form'       => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_competence_delete", methods="DELETE")
     * @param Request    $request
     * @param Competence $competence
     *
     * @return Response
     */
    public function delete(Request $request, Competence $competence): Response
    {
        $id = $competence->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
//todo: vérifier le cascade delete s'il y a des enfants ...
            $this->entityManager->remove($competence);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'competence.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/help", name="administration_competence_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/competence/help.html.twig');
    }
}
