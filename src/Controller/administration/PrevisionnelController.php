<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\MesClasses\MyPrevisionnel;
use App\Repository\MatiereRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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
    public function index(MatiereRepository $matiereRepository) :Response
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
    public function matiere(MyPrevisionnel $myPrevisionnel, Matiere $matiere) :Response
    {
        $myPrevisionnel->getPrevisionnelMatiere($matiere, $this->dataUserSession->getFormation()->getOptAnneePrevisionnel());
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
        $myPrevisionnel->getPrevisionnelSemestre($semestre, $this->dataUserSession->getFormation()->getOptAnneePrevisionnel());

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
        $myPrevisionnel->getPrevisionnelEnseignantBySemestre($this->dataUserSession->getFormation()->getOptAnneePrevisionnel());
        $myPrevisionnel->getHrsEnseignant($this->dataUserSession->getFormation()->getOptAnneePrevisionnel());

        return $this->render('administration/previsionnel/personnel.html.twig', [
            'previsionnel' => $myPrevisionnel
        ]);
    }

    /**
     * @Route("/new", name="administration_previsionnel_new", methods="GET|POST")
     */
    public function ajout()
    {
        return $this->render('administration/previsionnel/new.html.twig', [
            'controller_name' => 'PrevisionnelController',
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
     * @param Request      $request
     * @param Previsionnel $previsionnel
     *
     * @return Response
     */
    public function delete(
        EntityManagerInterface $entityManager,
        Request $request,
        Previsionnel $previsionnel
    ): Response
    {
        $id = $previsionnel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            $entityManager->remove($previsionnel);
            $entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
