<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/SiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/02/2024 18:55
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Site;
use App\Form\SiteType;
use App\Repository\SiteRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use function count;

#[Route(path: '/administratif/site')]
class SiteController extends BaseController
{
    #[Route(path: '/', name: 'sa_site_index', methods: 'GET')]
    public function index(SiteRepository $siteRepository): Response
    {
        return $this->render('super-administration/site/index.html.twig', ['sites' => $siteRepository->findAll()]);
    }

    #[Route(path: '/export.{_format}', name: 'sa_site_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, SiteRepository $siteRepository, string $_format): Response
    {
        $sites = $siteRepository->findAll();

        $data = $mySerializer->getDataFromSerialization(
            $sites,
            ['libelle', 'adresse' => ['adresse1', 'adresse2', 'adresse3', 'codePostal', 'ville', 'pays']],
            ['sites_administration', 'adresse']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'sites',
        );
    }

    #[Route(path: '/new', name: 'sa_site_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $site = new Site();
        $form = $this->createForm(SiteType::class, $site, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($site);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'site.add.success.flash');

            return $this->redirectToRoute('sa_site_index');
        }

        return $this->render('super-administration/site/new.html.twig', [
            'site' => $site,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_site_show', methods: 'GET')]
    public function show(Site $site): Response
    {
        return $this->render('super-administration/site/show.html.twig', ['site' => $site]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_site_edit', methods: 'GET|POST')]
    public function edit(Request $request, Site $site): Response
    {
        $form = $this->createForm(SiteType::class, $site, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'site.edit.success.flash');

            return $this->redirectToRoute('sa_site_edit', ['id' => $site->getId()]);
        }

        return $this->render('super-administration/site/edit.html.twig', [
            'site' => $site,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_site_duplicate', methods: 'GET|POST')]
    public function duplicate(Site $site): Response
    {
        $newSite = clone $site;
        $newSite->setAdresse(null);
        $this->entityManager->persist($newSite);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'site.duplicate.success.flash');

        return $this->redirectToRoute('sa_site_edit', ['id' => $newSite->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_site_delete', methods: 'DELETE')]
    public function delete(Request $request, Site $site): Response
    {
        $id = $site->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            if (0 === count($site->getUfrs()) && 0 === count($site->getUfrPrincipales())) {
                $this->entityManager->remove($site);
                $this->entityManager->flush();

                return $this->json($id, Response::HTTP_OK);
            }

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
