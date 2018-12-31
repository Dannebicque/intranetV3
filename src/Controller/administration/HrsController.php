<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Hrs;
use App\Form\HrsType;
use App\Repository\HrsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController
 * @package App\Controller\administration
 * @Route("/administration/service-previsionnel/hrs")
 */
class HrsController extends BaseController
{
    /**
     * @Route("/{annee}", name="administration_hrs_index", methods="GET", options={"expose":true}, requirements={"annee":"\d+"})
     * @param HrsRepository $hrsRepository
     *
     * @param int           $annee
     *
     * @return Response
     */
    public function index(HrsRepository $hrsRepository, $annee = 0): Response
    {
        if ($annee === 0 && $this->dataUserSession->getFormation() !== null) {
            $annee = $this->dataUserSession->getFormation()->getOptAnneePrevisionnel();
        }

        return $this->render('administration/hrs/index.html.twig', [
            'hrs'   => $hrsRepository->findHrsFormation($this->dataUserSession->getFormation(), $annee),
            'annee' => $annee
        ]);
    }

    /**
     * @Route("/{id}/edit", name="administration_hrs_edit", methods="GET|POST")
     * @param Request $request
     * @param Hrs     $hrs
     *
     * @return Response
     */
    public function edit(Request $request, Hrs $hrs): Response
    {
        $form = $this->createForm(HrsType::class, $hrs, [
            'formation' => $this->dataUserSession->getFormation(),
            'attr'      => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.edit.success.flash');

            return $this->redirectToRoute('administration_hrs_index');
        }

        return $this->render('administration/hrs/edit.html.twig', [
            'hrs'  => $hrs,
            'form' => $form->createView(),
        ]);
    }


    /**
     * @Route("/new", name="administration_hrs_new", methods="GET|POST", options={"expose": true})
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function ajout(Request $request)
    {
        if ($this->dataUserSession->getFormation() !== null) {
            $hrs = new Hrs($this->dataUserSession->getFormation()->getOptAnneePrevisionnel());
            $form = $this->createForm(HrsType::class, $hrs, [
                'formation' => $this->dataUserSession->getFormation(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($hrs);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.add.success.flash');

                return $this->redirectToRoute('administration_hrs_index');
            }

            return $this->render('administration/hrs/new.html.twig', [
                'hrs'  => $hrs,
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/annee/duplicate", name="administration_hrs_duplicate_annee", methods="POST")
     *
     * @return Response
     */
    public function duplicateAnnee(HrsRepository $hrsRepository, Request $request): Response
    {
        $anneeDepart = $request->request->get('annee_depart');
        $annee_destination = $request->request->get('annee_destination');
        $annee_concerver = $request->request->get('annee_concerver');

        //on efface, sauf si la case est cochée.
        if ($annee_concerver === null || $annee_concerver !== 'true') {
            $hrs = $hrsRepository->findHrsFormation($this->dataUserSession->getFormation(), $annee_destination);
            foreach ($hrs as $hr) {
                $this->entityManager->remove($hr);
            }
            $this->entityManager->flush();
        }

        $hrs = $hrsRepository->findHrsFormation($this->dataUserSession->getFormation(), $anneeDepart);

        /** @var Hrs $hr */
        foreach ($hrs as $hr) {
            $newHrs = clone $hr;
            $newHrs->setAnnee($annee_destination);
            $this->entityManager->persist($newHrs);
        }
        $this->entityManager->flush();

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.duplicate_annee.success.flash');

        return $this->redirectToRoute('administration_hrs_index', ['annee' => $annee_destination]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_hrs_duplicate", methods="GET")
     * @param Hrs $hrs
     *
     * @return Response
     */
    public function duplicate(Hrs $hrs): Response
    {
        $newHrs = clone $hrs;
        $this->entityManager->persist($newHrs);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.duplicate.success.flash');

        //'Copie effectuée avec succès. VOus pouvez modifier le nouvel élément.'
        return $this->redirectToRoute('administration_hrs_edit', ['id' => $newHrs->getId()]);
    }


    /**
     * @Route("/export.{_format}", name="administration_hrs_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(): Response
    {
        //todo: a faire
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/{id}", name="administration_hrs_show", methods="GET")
     * @param Hrs $hrs
     *
     * @return Response
     */
    public function show(Hrs $hrs): Response
    {
        return $this->render('administration/hrs/show.html.twig', ['hrs' => $hrs]);
    }

    /**
     * @Route("/{id}", name="administration_hrs_delete", methods="DELETE")
     * @param Request $request
     * @param Hrs     $hrs
     *
     * @return Response
     */
    public function delete(Request $request, Hrs $hrs): Response
    {
        $id = $hrs->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($hrs);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
