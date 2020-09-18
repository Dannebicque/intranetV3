<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/projet/ProjetEtudiantController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/09/2020 08:50

namespace App\Controller\administration\projet;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\ProjetEtudiant;
use App\Entity\ProjetPeriode;
use App\Entity\StagePeriode;
use App\Form\ProjetEtudiantType;
use App\Classes\MyProjetEtudiant;
use App\Repository\PersonnelRepository;
use Doctrine\ORM\NonUniqueResultException;
use Dompdf\Dompdf;
use Dompdf\Options;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 *  * @Route("/administration/projet/etudiant")
 */
class ProjetEtudiantController extends BaseController
{
    /**
     * @Route("/{id}", name="administration_projet_etudiant_show", methods="GET")
     * @param PersonnelRepository $personnelRepository
     * @param ProjetEtudiant      $projetEtudiant
     *
     * @return Response
     */
    public function show(PersonnelRepository $personnelRepository, ProjetEtudiant $projetEtudiant): Response
    {
        return $this->render(
            'administration/projet/projet_etudiant/show.html.twig',
            [
                'projetEtudiant' => $projetEtudiant,
                'personnels'     => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement())
            ]
        );
    }

    /**
     * @Route("/{id}/edit", name="administration_projet_etudiant_edit", methods="GET|POST")
     * @param Request        $request
     * @param ProjetEtudiant $projetEtudiant
     *
     * @return Response
     */
    public function edit(Request $request, ProjetEtudiant $projetEtudiant): Response
    {
        $form = $this->createForm(ProjetEtudiantType::class, $projetEtudiant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_etudiant.create.success.flash');

            return $this->redirectToRoute('administration_projet_etudiant_edit', ['id' => $projetEtudiant->getId()]);
        }

        return $this->render('administration/projet/projet_etudiant/edit.html.twig', [
            'projetEtudiant' => $projetEtudiant,
            'form'           => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_projet_etudiant_delete", methods="DELETE")
     * @param Request        $request
     * @param ProjetEtudiant $projetEtudiant
     *
     * @return Response
     */
    public function delete(Request $request, ProjetEtudiant $projetEtudiant): Response
    {
        $id = $projetEtudiant->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($projetEtudiant);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_etudiant.delete.success.flash');
        } else {
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'projet_etudiant.delete.error.flash');
        }

        return $this->json([
            'redirect' => true,
            'url'      => $projetEtudiant->getProjetPeriode() !== null ? $this->generateUrl('administration_projet_periode_gestion',
                ['uuid' => $projetEtudiant->getProjetPeriode()->getUuidString()]) : $this->generateUrl('administration_index')
        ]);
    }

    /**
     * @param MyProjetEtudiant $myProjetEtudiant
     * @param ProjetPeriode    $projetPeriode
     * @param Etudiant         $etudiant
     * @param                  $etat
     *
     * @return RedirectResponse
     * @throws NonUniqueResultException
     * @Route("/change-etat/{projetPeriode}/{etudiant}/{etat}", name="administration_projet_etudiant_change_etat")
     * @ParamConverter("projetPeriode", options={"mapping": {"projetPeriode": "uuid"}})
     */
    public function changeEtat(
        MyProjetEtudiant $myProjetEtudiant,
        ProjetPeriode $projetPeriode,
        Etudiant $etudiant,
        $etat
    ) {
        $myProjetEtudiant->changeEtat($projetPeriode, $etudiant, $etat);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_etudiant.change_etat.success.flash');

        return $this->redirectToRoute('administration_projet_periode_gestion',
            ['uuid' => $projetPeriode->getUuidString()]);
    }

    /**
     * @Route("/change-tuteur/{projetEtudiant}/{tuteur}", name="administration_projet_etudiant_change_tuteur",
     *                                                   options={"expose"=true})
     * @param ProjetEtudiant $projetEtudiant
     * @param Personnel      $tuteur
     *
     * @return JsonResponse
     */
    public function changeTuteur(
        ProjetEtudiant $projetEtudiant,
        Personnel $tuteur
    ): JsonResponse {
        $projetEtudiant->setTuteurUniversitaire($tuteur);
        $this->entityManager->persist($projetEtudiant);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_etudiant.change_tuteur.success.flash');

        return $this->json(true, Response::HTTP_OK);
    }

    /**
     * @Route("/convention/pdf/{id}", name="administration_projet_etudiant_convention_pdf", methods="GET")
     * @param ProjetEtudiant $projetEtudiant
     *
     * @return Response
     */
    public function conventionPdf(ProjetEtudiant $projetEtudiant): Response
    {
        //1. regarder si convention existe dans le répertoire ? (un champ avec le nom dans la BDD ?)
        //2. Si oui envoyer
        //3. Si non générer et envoyer + sauvegarde
        //todo: prevoir bouton pour "regenerer" la convention
        $html = $this->renderView('pdf/conventionStagePDF.html.twig', [
            'proposition' => $projetEtudiant,
        ]);

        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $options->set('isPhpEnabled', true);

        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->render();

        return new Response($dompdf->stream('Convention-' . $projetEtudiant->getEtudiant()->getNom(),
            ['Attachment' => 1]));

    }


    /**
     * @Route("/courrier/pdf/{id}", name="administration_projet_etudiant_courrier_pdf", methods="GET")
     * @param ProjetEtudiant $projetEtudiant
     *
     * @return Response
     */
    public function courrierPdf(ProjetEtudiant $projetEtudiant): Response
    {

    }

    /**
     * @Route("/fiche-enseignant/{id}", name="administration_projet_etudiant_fiche_enseignant", methods="GET")
     * @param ProjetEtudiant $projetEtudiant
     *
     * @return Response
     */
    public function ficheEnseignant(ProjetEtudiant $projetEtudiant): Response
    {
        $html = $this->renderView('pdf/fichePDFStage.html.twig',
            [
                'projetEtudiant' => $projetEtudiant
            ]);

        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $options->set('isPhpEnabled', true);

        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->render();

        return new Response ($dompdf->stream('Fiche-Enseignant-projet-' . $projetEtudiant->getEtudiant()->getNom(),
            ['Attachment' => 1]));
    }
}
