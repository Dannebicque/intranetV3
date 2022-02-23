<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/DiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:30
 */

namespace App\Controller\superAdministration;

use App\Classes\Structure\DiplomeExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Form\DiplomeType;
use function count;
use Exception;
use RuntimeException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/structure/diplome')]
class DiplomeController extends BaseController
{
    #[Route(path: '/new/{departement}', name: 'sa_diplome_new', methods: 'GET|POST')]
    public function create(Request $request, Departement $departement): Response
    {
        $diplome = new Diplome($departement);
        $form = $this->createForm(DiplomeType::class, $diplome, [
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
            'form' => $form->createView(),
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
                'form' => $form->createView(),
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
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.duplicate.success.flash');

        return $this->redirectToRoute('sa_diplome_edit', ['id' => $newDiplome->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_diplome_delete', methods: 'DELETE')]
    public function delete(Request $request, Diplome $diplome): Response
    {
        $id = $diplome->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->request->get('_token'))) {
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

    /**
     * @IsGranted("ROLE_SUPER_ADMIN")
     */
    #[Route(path: '/activate/{diplome}/{etat}', name: 'sa_diplome_activate', methods: ['GET'])]
    public function activate(Diplome $diplome, bool $etat): RedirectResponse
    {
        $diplome->setActif($etat);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.activate.'.$etat.'.flash');

        return $this->redirectToRoute('super_admin_homepage');
    }
}
