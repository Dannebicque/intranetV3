<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/CreneauCoursController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\CreneauCours;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\CreneauCoursRepository;
use DateTime;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/creneau/cours")
 * @deprecated
 * Encore utilisé ?
 */
class CreneauCoursController extends BaseController
{
    /**
     * @Route("/", name="administration_creneau_cours_index", methods={"GET"})
     */
    public function index(
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        CreneauCoursRepository $creneauCoursRepository
    ): Response {
        return $this->render('administration/creneau_cours/index.html.twig', [
            'creneau_cours' => $creneauCoursRepository->findByAnneeDepartement($this->dataUserSession->getDepartement(),
                $this->dataUserSession->getAnneeUniversitaire()),
            'annee_universitaires' => $anneeUniversitaireRepository->findAll(),
            'defaut' => $this->dataUserSession->getDepartement()?->getAnneeUniversitairePrepare(),
        ]);
    }

    /**
     * @Route("/liste/{annee_universitaire}", name="administration_creneau_cours_liste", methods={"GET"},
     *                                        options={"expose"=true})
     */
    public function liste(
        AnneeUniversitaire $annee_universitaire,
        CreneauCoursRepository $creneauCoursRepository
    ): Response {
        return $this->render('administration/creneau_cours/_liste_creneaux.html.twig', [
            'creneau_cours' => $creneauCoursRepository->findByAnneeDepartement($this->dataUserSession->getDepartement(),
                $annee_universitaire),
        ]);
    }

    /**
     * @Route("/export.{_format}", name="administration_creneau_cours_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     */
    public function export(MyExport $myExport, CreneauCoursRepository $creneauCoursRepository, $_format): Response
    {
        $creneaux = $creneauCoursRepository->findByAnneeDepartement($this->dataUserSession->getDepartement(),
            null !== $this->dataUserSession->getDepartement() ? $this->dataUserSession->getDepartement()->getAnneeUniversitairePrepare() : date('Y'));

        return $myExport->genereFichierGenerique(
            $_format,
            $creneaux,
            'creneaux',
            ['creneau_cours_administration', 'utilisateur'],
            ['titre', 'texte', 'type', 'personnel' => ['nom', 'prenom']]
        );
    }

    /**
     * @Route("/new", name="administration_creneau_cours_new", methods={"POST"}, options={"expose"=true})
     *
     * @throws Exception
     */
    public function new(
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        Request $request
    ): Response {
        $annee = $anneeUniversitaireRepository->find($request->request->get('anneeUniversitaire'));

        if ($annee) {
            $creneauCour = new CreneauCours();
            $creneauCour->setDepartement($this->dataUserSession->getDepartement());
            $creneauCour->setAnneeUniversitaire($annee);
            $creneauCour->setDebut(new DateTime($request->request->get('debut')));
            $creneauCour->setFin(new DateTime($request->request->get('fin')));
            $creneauCour->setJour($request->request->get('jour'));
            $this->entityManager->persist($creneauCour);
            $this->entityManager->flush();

            return $this->json(true, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}", name="administration_creneau_cours_show", methods={"GET"})
     */
    public function show(CreneauCours $creneauCour): Response
    {
        return $this->render('administration/creneau_cours/show.html.twig', [
            'creneau_cour' => $creneauCour,
        ]);
    }

    /**
     * @Route("/{id}", name="administration_creneau_cours_delete", methods="DELETE")
     */
    public function delete(Request $request, CreneauCours $creneau_cours): Response
    {
        $id = $creneau_cours->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($creneau_cours);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'creneau_cours.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'creneau_cours.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_creneau_cours_duplicate", methods="GET|POST")
     */
    public function duplicate(CreneauCours $creneau_cours): Response
    {
        $newCreneauCours = clone $creneau_cours;

        $this->entityManager->persist($newCreneauCours);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'creneau_cours.duplicate.success.flash');

        return $this->redirectToRoute('administration_creneau_cours_index');
    }

    /**
     * @Route("/annee/duplicate", name="administration_creneau_cour_duplicate_annee", methods="POST")
     */
    public function duplicateAnnee(
        CreneauCoursRepository $creneauCoursRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        Request $request
    ): Response {
        $annee_depart = $anneeUniversitaireRepository->find($request->request->get('annee_depart'));
        $annee_destination = $anneeUniversitaireRepository->find($request->request->get('annee_destination'));

        //on efface, sauf si la case est cochée.
        if (null !== $annee_destination) {
            $creneaux = $creneauCoursRepository->findByAnneeDepartement($this->dataUserSession->getDepartement(),
                $annee_destination);
            foreach ($creneaux as $creneau) {
                $this->entityManager->remove($creneau);
            }
            $this->entityManager->flush();
        }

        $creneaux = $creneauCoursRepository->findByAnneeDepartement($this->dataUserSession->getDepartement(),
            $annee_depart);

        /** @var CreneauCours $creneau */
        foreach ($creneaux as $creneau) {
            $newCreneau = clone $creneau;
            $newCreneau->setAnneeUniversitaire($annee_destination);
            $this->entityManager->persist($newCreneau);
        }
        $this->entityManager->flush();

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'creneau_cours.duplicate_annee.success.flash');

        return $this->redirectToRoute('administration_creneau_cours_index', ['annee' => $annee_destination]);
    }
}
