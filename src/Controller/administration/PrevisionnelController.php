<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Form\ImportPrevisionnelType;
use App\MesClasses\MyPrevisionnel;
use App\MesClasses\Tools;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController
 * @package App\Controller\administration
 * @Route("/administration/service-previsionnel")
 */
class PrevisionnelController extends BaseController
{
    /**
     * @Route("/annee/{annee}", name="administration_previsionnel_index", options={"expose":true})
     * @param MatiereRepository $matiereRepository
     *
     * @param int               $annee
     *
     * @return Response
     */
    public function index(MatiereRepository $matiereRepository, $annee = 0): Response
    {
        if ($annee === 0 && $this->dataUserSession->getFormation() !== null) {
            $annee = $this->dataUserSession->getFormation()->getOptAnneePrevisionnel();
        }

        return $this->render('administration/previsionnel/index.html.twig', [
            'matieres' => $matiereRepository->findByFormation($this->dataUserSession->getFormation()),
            'annee'    => $annee
        ]);
    }

    /**
     * @Route("/matiere/{matiere}/{annee}", name="administration_previsionnel_matiere", options={"expose":true})
     * @param MyPrevisionnel $myPrevisionnel
     * @param Matiere        $matiere
     *
     * @param int            $annee
     *
     * @return Response
     */
    public function matiere(MyPrevisionnel $myPrevisionnel, Matiere $matiere, $annee = 0): Response
    {
        if ($annee === 0 && $this->dataUserSession->getFormation() !== null) {
            $annee = $this->dataUserSession->getFormation()->getOptAnneePrevisionnel();
        }

        $myPrevisionnel->getPrevisionnelMatiere($matiere, $annee);

        return $this->render('administration/previsionnel/matiere.html.twig', [
            'previsionnel' => $myPrevisionnel,
            'annee'        => $annee
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/{annee}", name="administration_previsionnel_semestre", options={"expose":true})
     *
     * @param MyPrevisionnel $myPrevisionnel
     * @param Semestre       $semestre
     *
     * @param int            $annee
     * @return Response
     */
    public function semestre(MyPrevisionnel $myPrevisionnel, Semestre $semestre, $annee = 0): Response
    {
        if ($annee === 0 && $this->dataUserSession->getFormation() !== null) {
            $annee = $this->dataUserSession->getFormation()->getOptAnneePrevisionnel();
        }

        $myPrevisionnel->getPrevisionnelSemestre($semestre, $annee);

        return $this->render('administration/previsionnel/semestre.html.twig', [
            'previsionnel' => $myPrevisionnel,
            'annee'        => $annee

        ]);
    }

    /**
     * @Route("/personnel/{personnel}/{annee}", name="administration_previsionnel_personnel", options={"expose":true})
     * @param MyPrevisionnel $myPrevisionnel
     * @param Personnel      $personnel
     *
     * @param int            $annee
     * @return Response
     */
    public function personnel(MyPrevisionnel $myPrevisionnel, Personnel $personnel, $annee = 0): Response
    {
        if ($annee === 0 && $this->dataUserSession->getFormation() !== null) {
            $annee = $this->dataUserSession->getFormation()->getOptAnneePrevisionnel();
        }

        $myPrevisionnel->setPersonnel($personnel);
        $myPrevisionnel->getPrevisionnelEnseignantBySemestre($annee);
        $myPrevisionnel->getHrsEnseignant($annee);

        return $this->render('administration/previsionnel/personnel.html.twig', [
            'previsionnel' => $myPrevisionnel,
            'annee'        => $annee
        ]);
    }

    /**
     * @Route("/edit", name="administration_previsionnel_edit", options={"expose":true})
     * @param MyPrevisionnel $myPrevisionnel
     * @param Request        $request
     *
     * @return JsonResponse
     */
    public function edit(MyPrevisionnel $myPrevisionnel, Request $request): JsonResponse
    {
        $id = $request->request->get('pk');
        $name = $request->request->get('name');
        $value = Tools::convertToFloat($request->request->get('value'));

        $update = $myPrevisionnel->update($id, $name, $value);

        return $update ? new JsonResponse('', 200) : new JsonResponse('erreur', 500);
    }

    /**
     * @Route("/new", name="administration_previsionnel_new", methods="GET|POST")
     * @param PersonnelRepository $personnelRepository
     * @param MatiereRepository   $matiereRepository
     * @param Request             $request
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function create(
        PersonnelRepository $personnelRepository,
        MatiereRepository $matiereRepository,
        Request $request
    ) {
        if ($request->isMethod('POST')) {
            $matiere = $matiereRepository->find($request->request->get('previsionnel_matiere'));

            $annee = $request->request->get('previsionnel_annee_previsionnel') !== '' ? $request->request->get('previsionnel_annee_previsionnel') : $this->dataUserSession->getAnneePrevisionnel();

            if ($matiere !== null) {
                $nbLignes = $request->request->get('nbLignes');
                for ($i = 1; $i <= $nbLignes; $i++) {
                    $personnel = $personnelRepository->find($request->request->get('intervenant_' . $i));
                    if ($personnel !== null) {
                        $previsionnel = new Previsionnel($matiere, $personnel, $annee);
                        $previsionnel->setNbHCm($request->request->get('cm_' . $i));
                        $previsionnel->setNbHTd($request->request->get('td_' . $i));
                        $previsionnel->setNbHTp($request->request->get('tp_' . $i));
                        $previsionnel->setNbGrCm($request->request->get('gr_cm_' . $i));
                        $previsionnel->setNbGrTd($request->request->get('gr_td_' . $i));
                        $previsionnel->setNbGrTp($request->request->get('gr_tp_' . $i));
                        $this->entityManager->persist($previsionnel);
                    }
                }
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.add.success.flash');

                return $this->redirectToRoute('administration_previsionnel_new');
            }

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.add.error.flash');

            return $this->redirectToRoute('administration_previsionnel_new');
        }

        return $this->render('administration/previsionnel/new.html.twig', [
        ]);
    }

    /**
     * @Route("/import", name="administration_previsionnel_import", methods="GET|POST")
     * @param MyPrevisionnel $myPrevisionnel
     * @param Request        $request
     *
     * @return Response
     */
    public function import(MyPrevisionnel $myPrevisionnel, Request $request): Response
    {
        $form = $this->createForm(
            ImportPrevisionnelType::class,
            null,
            [
                'formation' => $this->dataUserSession->getFormation(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $myPrevisionnel->importCsv($form->getData());
        }

        return $this->render('administration/previsionnel/import.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @param MyPrevisionnel $myPrevisionnel
     * @param                $annee
     *
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     * @Route("/{annee}/export_omega", name="administration_previsionnel_export_omega", methods="GET")
     *
     */
    public function exportOmega(MyPrevisionnel $myPrevisionnel, $annee)
    {
        return $myPrevisionnel->exportOmegaFormation($this->dataUserSession->getFormation(), $annee);
    }

    /**
     * @Route("/annee/duplicate", name="administration_previsionnel_duplicate_annee", methods="POST")
     *
     * @param PrevisionnelRepository $previsionnelRepository
     * @param Request                $request
     *
     * @return Response
     */
    public function duplicateAnnee(PrevisionnelRepository $previsionnelRepository, Request $request): Response
    {
        $anneeDepart = $request->request->get('annee_depart');
        $annee_destination = $request->request->get('annee_destination');
        $annee_concerver = $request->request->get('annee_concerver');

        //on efface, sauf si la case est cochée.
        if ($annee_concerver === null || $annee_concerver !== 'true') {
            $previsionnels = $previsionnelRepository->findByFormation($this->dataUserSession->getFormation(),
                $annee_destination);
            foreach ($previsionnels as $previsionnel) {
                $this->entityManager->remove($previsionnel);
            }
            $this->entityManager->flush();
        }

        $previsionnels = $previsionnelRepository->findByFormation($this->dataUserSession->getFormation(),
            $anneeDepart);

        /** @var Previsionnel $previsionnel */
        foreach ($previsionnels as $previsionnel) {
            $newPrevisonnel = clone $previsionnel;
            $newPrevisonnel->setAnnee($annee_destination);
            $this->entityManager->persist($newPrevisonnel);
        }
        $this->entityManager->flush();

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.duplicate_annee.success.flash');

        return $this->redirectToRoute('administration_previsionnel_index', ['annee' => $annee_destination]);
    }

    /**
     * @Route("/{id}/dupliquer", name="administration_previsionnel_duplicate",
     *                                 methods="GET")
     * @param Previsionnel $previsionnel
     *
     * @return Response
     */
    public function duplicate(Previsionnel $previsionnel): Response
    {
        $newprevisionnel = clone $previsionnel;
        $this->entityManager->persist($newprevisionnel);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.duplicate.success.flash');

        /* todo: faire revenir sur la page à l'origine de la duplication. */

        return $this->redirectToRoute('administration_previsionnel_index');
    }

    /**
     * @Route("/{id}", name="administration_previsionnel_delete", methods="DELETE")
     * @param Request      $request
     * @param Previsionnel $previsionnel
     *
     * @return Response
     */
    public function delete(
        Request $request,
        Previsionnel $previsionnel
    ): Response {
        $id = $previsionnel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($previsionnel);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/supprimer/annee", name="administration_previsionnel_supprimer_annee", methods="DELETE")
     * @param Request                $request
     *
     * @param PrevisionnelRepository $previsionnelRepository
     * @return Response
     */
    public function supprimer(Request $request, PrevisionnelRepository $previsionnelRepository): Response
    {
        if ($this->isCsrfTokenValid('supprimer', $request->request->get('_token'))) {
            $hrs = $previsionnelRepository->findByFormation($this->dataUserSession->getFormation(),
                $request->request->get('annee_supprimer'));
            foreach ($hrs as $hr) {
                $this->entityManager->remove($hr);
            }
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.delete.success.flash');
        }

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.delete.error.flash');

        return $this->redirectToRoute('administration_previsionnel_index');
    }
}
