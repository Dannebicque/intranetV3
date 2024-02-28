<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/DiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/02/2024 14:51
 */

namespace App\Controller\superAdministration;

use App\Classes\Structure\DiplomeExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Form\DiplomeType;
use App\Repository\DiplomeRepository;
use Exception;
use RuntimeException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use function count;

#[Route(path: '/{type}/structure/diplome', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class DiplomeController extends BaseController
{
    #[Route(path: '/liste', name: 'sa_diplome_liste', methods: 'GET|POST')]
    public function liste(DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('super-administration/structure/diplome/liste.html.twig', [
            'diplomes' => $diplomeRepository->findAll(),
        ]);
    }

    #[Route(path: '/new/{departement}', name: 'sa_diplome_new', methods: 'GET|POST')]
    public function create(
        DiplomeRepository $diplomeRepository,
        Request $request,
        Departement $departement
    ): Response {
        $dipParent = null;
        if (null !== $request->query->get('diplome')) {
            $dipParent = $diplomeRepository->find($request->query->get('diplome'));
        }

        $diplome = new Diplome($departement, $dipParent);
        $form = $this->createForm(DiplomeType::class, $diplome, [
            'departement' => $departement,
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($diplome);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.add.success.flash');

            return $this->redirectToRoute('sa_structure_index', ['departement' => $departement->getId()]);
        }

        return $this->render('structure/diplome/new.html.twig', [
            'diplome' => $diplome,
            'departement' => $departement,
            'form' => $form,
        ]);
    }

    #[Route(path: '/export-referentiel/{id}', name: 'sa_diplome_export_referentiel', methods: 'GET')]
    public function exportReferentiel(DiplomeExport $diplomeExport, Diplome $diplome): Response
    {
        return $diplomeExport->exportRefentiel($diplome);
    }

    #[Route(path: '/export-maquette-apogee/{id}', name: 'sa_diplome_export_maquette_apogee', methods: 'GET')]
    public function exportMaquetteApogee(DiplomeExport $diplomeExport, Diplome $diplome): Response
    {
        return $diplomeExport->exportMaquetteApogee($diplome);
    }

    #[Route(path: '/export-programme/{id}', name: 'sa_diplome_export_programme', methods: 'GET')]
    public function exportProgramme(DiplomeExport $diplomeExport, Diplome $diplome): Response
    {
        return $diplomeExport->exportProgramme($diplome);
    }

    #[Route(path: '/{id}', name: 'sa_diplome_show', methods: 'GET')]
    public function show(Diplome $diplome): Response
    {
        return $this->render('structure/diplome/show.html.twig', ['diplome' => $diplome]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/{id}/edit', name: 'sa_diplome_edit', methods: 'GET|POST')]
    public function edit(Request $request, Diplome $diplome): Response
    {
        if (null !== $diplome->getDepartement()) {
            $form = $this->createForm(DiplomeType::class, $diplome, [
                'departement' => $diplome->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.edit.success.flash');

                return $this->redirectToRoute('sa_structure_index',
                    ['departement' => $diplome->getDepartement()->getId()]);
            }

            return $this->render('structure/diplome/edit.html.twig', [
                'diplome' => $diplome,
                'form' => $form,
            ]);
        }
        throw new RuntimeException('Le diplôme n\'est pas attaché à un département');
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/{id}/edit-ajax', name: 'sa_diplome_edit_ajax', options: ['expose' => true], methods: 'POST')]
    public function editAjax(Request $request, Diplome $diplome): Response
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        $update = $diplome->update($name, $value);
        $this->entityManager->flush();

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_diplome_duplicate', methods: 'GET|POST')]
    public function duplicate(Diplome $diplome): Response
    {
        $newDiplome = clone $diplome;
        $newDiplome->setLibelle($newDiplome->getLibelle().' copie');
        $this->entityManager->persist($newDiplome);

        // dupliquer les années
        foreach ($diplome->getAnnees() as $annee) {
            $newAnnee = clone $annee;
            $newAnnee->setDiplome($newDiplome);
            $this->entityManager->persist($newAnnee);

            // dupliquer les semestres
            foreach ($annee->getSemestres() as $semestre) {
                $newSemestre = clone $semestre;
                $newSemestre->setAnnee($newAnnee);
                $this->entityManager->persist($newSemestre);

                // dupliquer les UEs
                foreach ($semestre->getUes() as $ue) {
                    $newUe = clone $ue;
                    $newUe->setSemestre($newSemestre);
                    $this->entityManager->persist($newUe);
                }
            }
        }

        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.duplicate.success.flash');

        return $this->redirectToRoute('sa_diplome_edit', ['id' => $newDiplome->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_diplome_delete', methods: 'DELETE')]
    public function delete(Request $request, Diplome $diplome): Response
    {
        $id = $diplome->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            if (0 === count($diplome->getAnnees())) {
                $this->entityManager->remove($diplome);
                $this->entityManager->flush();
                $this->addFlashBag(
                    Constantes::FLASHBAG_SUCCESS,
                    'diplome.delete.success.flash'
                );

                return $this->json($id, Response::HTTP_OK);
            }

            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'diplome.delete.error.non-vide.flash');

            return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'diplome.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/activate/{diplome}/{etat}', name: 'sa_diplome_activate', methods: ['GET'])]
    #[IsGranted('ROLE_SUPER_ADMIN')]
    public function activate(Diplome $diplome, bool $etat): RedirectResponse
    {
        $diplome->setActif($etat);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.activate.'.$etat.'.flash');

        return $this->redirectToRoute('super_admin_homepage');
    }
}
