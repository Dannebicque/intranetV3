<?php
/*
 * Copyright (c) 2026. | IntranetV3 - All Rights Reserved
 */

namespace App\Controller\superAdministration;

use App\Classes\Pdf\PdfManager;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Evenement;
use App\Form\EvenementForm;
use App\Repository\EtudiantEvenementRepository;
use App\Repository\EvenementRepository;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use App\Service\QrCodeService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/evenement')]
class EvenementController extends BaseController
{
    public function __construct(private readonly QrCodeService $qrCodeService)
    {
    }

    #[Route(path: '/', name: 'sa_evenement_index', methods: ['GET'])]
    public function index(EvenementRepository $evenementRepository): Response
    {
        $evenements = $evenementRepository->findBy([], ['date' => 'DESC', 'debut' => 'ASC']);

        $qrKeys = [];
        foreach ($evenements as $ev) {
            $id = $ev->getId();
            if (null !== $id) {
                $qrKeys[$id] = base64_encode((string) $id);
            }
        }

        return $this->render('super-administration/evenement/index.html.twig', [
            'evenements' => $evenements,
            'qrKeys' => $qrKeys,
        ]);
    }

    #[Route(path: '/new', name: 'sa_evenement_new', methods: ['GET', 'POST'])]
    public function create(Request $request): Response
    {
        $evenement = new Evenement();
        $form = $this->createForm(EvenementForm::class, $evenement, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Hydrater la relation via la table de liaison EtudiantEvenement depuis le hidden etudiantsIds
            $ids = (string) ($form->get('etudiantsIds')->getData() ?? '');
            $idsArray = array_filter(array_map('intval', array_unique(preg_split('/[,\s]+/', $ids) ?: [])));

            // Vider les liaisons existantes
            foreach ($evenement->getEtudiantEvenements()->toArray() as $ee) {
                $evenement->removeEtudiantEvenement($ee);
            }

            // Recréer les liaisons
            if (!empty($idsArray)) {
                $etudiantRepo = $this->entityManager->getRepository(\App\Entity\Etudiant::class);
                foreach ($idsArray as $id) {
                    $etu = $etudiantRepo->find($id);
                    if (null !== $etu) {
                        $ee = new \App\Entity\EtudiantEvenement();
                        $ee->setEtudiant($etu);
                        $ee->setEvenement($evenement);
                        $evenement->addEtudiantEvenement($ee);
                        $this->entityManager->persist($ee);
                    }
                }
            }

            $this->entityManager->persist($evenement);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'evenement.add.success.flash');

            return $this->redirectToRoute('sa_evenement_index');
        }

        // Passer la liste des départements pour le modal (sélecteur dans le front)
        $departements = $this->entityManager->getRepository(\App\Entity\Departement::class)->findAll();

        return $this->render('super-administration/evenement/new.html.twig', [
            'evenement' => $evenement,
            'form' => $form,
            'departements' => $departements,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_evenement_show', methods: ['GET'])]
    public function show(Evenement $evenement, EtudiantEvenementRepository $etudiantEvenementRepository): Response
    {
        $etudiantsEvenement = $evenement->getEtudiantEvenements();

        return $this->render('super-administration/evenement/show.html.twig', [
            'evenement' => $evenement,
            'etudiantsEvenement' => $etudiantsEvenement,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_evenement_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Evenement $evenement): Response
    {
        $form = $this->createForm(EvenementForm::class, $evenement, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Mettre à jour la relation via EtudiantEvenement depuis les IDs cachés si fournis
            $ids = (string) ($form->get('etudiantsIds')->getData() ?? '');
            if ($ids !== '') {
                $idsArray = array_filter(array_map('intval', array_unique(preg_split('/[,\s]+/', $ids) ?: [])));

                // Supprimer les liaisons existantes
                foreach ($evenement->getEtudiantEvenements()->toArray() as $ee) {
                    $evenement->removeEtudiantEvenement($ee);
                    $this->entityManager->remove($ee);
                }

                // Recréer les liaisons
                if (!empty($idsArray)) {
                    $etudiantRepo = $this->entityManager->getRepository(\App\Entity\Etudiant::class);
                    foreach ($idsArray as $id) {
                        $etu = $etudiantRepo->find($id);
                        if (null !== $etu) {
                            $ee = new \App\Entity\EtudiantEvenement();
                            $ee->setEtudiant($etu);
                            $ee->setEvenement($evenement);
                            $evenement->addEtudiantEvenement($ee);
                            $this->entityManager->persist($ee);
                        }
                    }
                }
            }

            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'evenement.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('sa_evenement_index');
            }

            return $this->redirectToRoute('sa_evenement_edit', ['id' => $evenement->getId()]);
        }

        $departements = $this->entityManager->getRepository(\App\Entity\Departement::class)->findAll();

        return $this->render('super-administration/evenement/edit.html.twig', [
            'evenement' => $evenement,
            'form' => $form,
            'departements' => $departements,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_evenement_duplicate', methods: ['GET', 'POST'])]
    public function duplicate(Evenement $evenement): Response
    {
        $newEvenement = clone $evenement;
        $this->entityManager->persist($newEvenement);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'evenement.duplicate.success.flash');

        return $this->redirectToRoute('sa_evenement_edit', ['id' => $newEvenement->getId()]);
    }

    #[Route(path: '/{id}/generate_qr', name: 'sa_evenement_generate_qr', methods: ['GET', 'POST'])]
    public function generateQr(Evenement $evenement): Response
    {
        $qrCodeData = $this->qrCodeService->generateForEvenement($evenement);

        if ($qrCodeData) {
            return $this->json(['qrCode' => $qrCodeData], Response::HTTP_OK);
        }

        return $this->json(['error' => 'QR code generation failed'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/qr/{key}.pdf', name: 'sa_evenement_qr_pdf', methods: ['GET'])]
    public function qrPdf(string $key, PdfManager $myPDF): Response
    {
        // Décoder la clé (base64 de l'id) comme dans EmargementController
        $decoded = base64_decode($key, true);
        if (false === $decoded || !ctype_digit($decoded)) {
            throw $this->createNotFoundException('Clé invalide');
        }

        $id = (int) $decoded;
        $evenement = $this->entityManager->getRepository(Evenement::class)->find($id);
        if (null === $evenement) {
            throw $this->createNotFoundException('Événement introuvable');
        }

        // Génère le QR code (data URI)
        $qrCodeData = $this->qrCodeService->generateForEvenement($evenement);
        $fileName = 'evenement-qr-' . ($evenement->getId() ?? 'nouveau');

        return $myPDF->pdf()::generePdf(
            'pdf/evenement/qr.html.twig',
            [
                'evenement' => $evenement,
                'qrCode' => $qrCodeData,
                'titre' => sprintf('QR – %s', (string) $evenement->getLibelle()),
            ],
            $fileName
        );
    }

    #[Route(path: '/{id}', name: 'sa_evenement_delete', methods: ['DELETE'])]
    public function delete(Request $request, Evenement $evenement): Response
    {
        $id = $evenement->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($evenement);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
