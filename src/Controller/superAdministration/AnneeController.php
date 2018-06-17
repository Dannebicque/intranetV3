<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Annee;
use App\Entity\Diplome;
use App\Form\AnneeType;
use App\Repository\AnneeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"super-administration/structure/annee",
 *         "en":"super-administration/organization/year"}
 *)
 */
class AnneeController extends BaseController
{
    /**
     * @Route({"fr":"/", "en":"/"}, name="sa_annee_index", methods="GET")
     * @param AnneeRepository $anneeRepository
     *
     * @return Response
     */
    public function index(AnneeRepository $anneeRepository): Response
    {
        //todo: comment l'exploiter...
        //filtrer par formation ou diplome ?
        return $this->render('structure/annee/index.html.twig', ['annees' => $anneeRepository->findAll()]);
    }

    /**
     * @Route({"fr":"/aide", "en":"/help"}, name="sa_annee_help", methods="GET")
     */
    public function help(): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/annee/help.html.twig');
    }

    /**
     * @Route({"fr":"/sauvegarder", "en":"/save"}, name="sa_annee_save", methods="GET")
     * @throws \InvalidArgumentException
     */
    public function save(): Response
    {
        //todo: comment l'exploiter...
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route({"fr":"/imprimer", "en":"/print"}, name="sa_annee_print", methods="GET")
     * @throws \InvalidArgumentException
     */
    public function imprimer(): Response
    {
        //todo: comment l'exploiter...
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route({"fr":"/nouveau/{diplome}", "en":"/new/{diplome}"}, name="sa_annee_new",
     *                                    methods="GET|POST")
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     *
     * @param Diplome                $diplome
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function create(EntityManagerInterface $entityManager, Request $request, Diplome $diplome)
    {
        if ($diplome->getFormation() !== null) {
            $annee = new Annee();
            $annee->setDiplome($diplome);
            $form = $this->createForm(AnneeType::class, $annee, ['formation' => $diplome->getFormation()]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $entityManager->persist($annee);
                $entityManager->flush();

                return $this->redirectToRoute('sa_structure_index',
                    ['formation' => $diplome->getFormation()->getId()]);
            }

            return $this->render('structure/annee/new.html.twig', [
                'annee' => $annee,
                'form'  => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route({"fr":"/{id}", "en":"/{id}"}, name="sa_annee_show", methods="GET")
     * @param Annee $annee
     *
     * @return Response
     */
    public function show(Annee $annee): Response
    {
        return $this->render('structure/annee/show.html.twig', ['annee' => $annee]);
    }

    /**
     * @Route({"fr":"/{id}/modifier", "en":"/{id}/edit"}, name="sa_annee_edit", methods="GET|POST")
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     * @param Annee                  $annee
     *
     * @return Response
     */
    public function edit(EntityManagerInterface $entityManager, Request $request, Annee $annee): Response
    {
        if ($annee->getDiplome() !== null && $annee->getDiplome()->getFormation() !== null) {
            $form = $this->createForm(AnneeType::class, $annee,
                ['formation' => $annee->getDiplome()->getFormation()->getId()]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $entityManager->flush();

                return $this->redirectToRoute('sa_structure_index',
                    ['formation' => $annee->getDiplome()->getFormation()->getId()]);
            }

            return $this->render('structure/annee/edit.html.twig', [
                'annee' => $annee,
                'form'  => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}/duplicate", name="sa_annee_duplicate", methods="GET|POST")
     * @param EntityManagerInterface $entityManager
     * @param Annee                  $annee
     *
     * @return Response
     */
    public function duplicate(EntityManagerInterface $entityManager, Annee $annee): Response
    {
        $newAnnee = clone $annee;

        $entityManager->persist($newAnnee);
        $entityManager->flush();

        return $this->redirectToRoute('sa_annee_edit', ['id' => $newAnnee->getId()]);
    }

    /**
     * @Route({"fr":"/{id}", "en":"/{id}"}, name="sa_annee_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
