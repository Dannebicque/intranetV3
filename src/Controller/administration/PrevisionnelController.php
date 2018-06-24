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
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController
 * @package App\Controller\administration
 * @Route({"fr":"administration/service-previsionnel",
 *         "en":"administration/estimated-service"}
 *)
 */
class PrevisionnelController extends BaseController
{
    /**
     * @Route("/", name="administration_previsionnel_index")
     * @param MatiereRepository $matiereRepository
     *
     * @return Response
     */
    public function index(MatiereRepository $matiereRepository): Response
    {
        return $this->render('administration/previsionnel/index.html.twig', [
            'matieres' => $matiereRepository->findAll()
        ]);
    }

    /**
     * @Route("/matiere/{matiere}", name="administration_previsionnel_matiere", options={"expose":true})
     * @param MyPrevisionnel $myPrevisionnel
     * @param Matiere        $matiere
     *
     * @return Response
     */
    public function matiere(MyPrevisionnel $myPrevisionnel, Matiere $matiere): Response
    {
        $myPrevisionnel->getPrevisionnelMatiere($matiere, $this->dataUserSession->getAnneePrevisionnel());

        return $this->render('administration/previsionnel/matiere.html.twig', [
            'previsionnel' => $myPrevisionnel
        ]);
    }

    /**
     * @Route("/semestre/{semestre}", name="administration_previsionnel_semestre", options={"expose":true})
     *
     * @param MyPrevisionnel $myPrevisionnel
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function semestre(MyPrevisionnel $myPrevisionnel, Semestre $semestre): Response
    {
        $myPrevisionnel->getPrevisionnelSemestre($semestre, $this->dataUserSession->getAnneePrevisionnel());

        return $this->render('administration/previsionnel/semestre.html.twig', [
            'previsionnel' => $myPrevisionnel

        ]);
    }

    /**
     * @Route("/personnel/{personnel}", name="administration_previsionnel_personnel", options={"expose":true})
     * @param MyPrevisionnel $myPrevisionnel
     * @param Personnel      $personnel
     *
     * @return Response
     */
    public function personnel(MyPrevisionnel $myPrevisionnel, Personnel $personnel): Response
    {
        $myPrevisionnel->setPersonnel($personnel);
        $myPrevisionnel->getPrevisionnelEnseignantBySemestre($this->dataUserSession->getAnneePrevisionnel());
        $myPrevisionnel->getHrsEnseignant($this->dataUserSession->getAnneePrevisionnel());

        return $this->render('administration/previsionnel/personnel.html.twig', [
            'previsionnel' => $myPrevisionnel
        ]);
    }

    /**
     * @Route("/new", name="administration_previsionnel_new", methods="GET|POST")
     */
    public function create(
        PersonnelRepository $personnelRepository,
        MatiereRepository $matiereRepository,
        Request $request
    )
    {
        if ($request->isMethod('POST')) {
            $matiere = $matiereRepository->find($request->request->get('previsionnel_matiere'));

            $annee = $request->request->get('previsionnel_annee_previsionnel') !== '' ? $request->request->get('previsionnel_annee_previsionnel') : $this->dataUserSession->getAnneePrevisionnel();

            if ($matiere !== null) {
                for ($i = 1; $i <= $request->request->get('nbLignes'); $i++) {
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
     */
    public function import(Request $request)
    {
        $form = $this->createForm(ImportPrevisionnelType::class, null,
            ['formation' => $this->dataUserSession->getFormation()]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // data is an array with "name", "email", and "message" keys
            $data = $form->getData();
        }

        return $this->render('administration/previsionnel/import.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/imprimer", name="administration_previsionnel_print", methods="GET")
     */
    public function imprimer(): Response
    {
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/save", name="administration_previsionnel_save", methods="GET")
     */
    public function save(): Response
    {
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route({"fr":"/{id}", "en":"/{id}"}, name="administration_previsionnel_delete", methods="DELETE")
     * @param Request                $request
     * @param Previsionnel           $previsionnel
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
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
