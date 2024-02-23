<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/AlternanceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Alternance;
use App\Entity\Constantes;
use App\Form\AlternanceEtudiantType;
use App\Repository\AlternanceRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * Class AlternanceController.
 */
#[Route(path: '/application/etudiant/alternance')]
#[IsGranted('ROLE_ETUDIANT')]
class AlternanceController extends BaseController
{
    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/', name: 'application_etudiant_alternance_index')]
    public function index(AlternanceRepository $alternanceRepository): Response
    {
        /** @var Alternance $alternance */
        $alternance = $alternanceRepository->getOneByEtudiantAndAnneeUniversitaire($this->getUser(),
            $this->getAnneeUniversitaire());
        $form = null;
        if (null !== $alternance) {
            $form = $this->createForm(
                AlternanceEtudiantType::class,
                $alternance,
                [
                    'departement' => $this->getDepartement(),
                    'attr' => [
                        'data-provide' => 'validation',
                    ],
                    'action' => $this->generateUrl('application_etudiant_alternance_update',
                        ['id' => $alternance->getId()]),
                ]
            );
        }

        return $this->render('appEtudiant/alternance/index.html.twig', [
            'alternances' => $alternance,
            'form' => $form?->createView(),
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'application_etudiant_alternance_update', methods: 'GET|POST')]
    public function edit(Request $request, Alternance $alternance): Response
    {
        $form = $this->createForm(
            AlternanceEtudiantType::class,
            $alternance,
            [
                'departement' => $this->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
                'action' => $this->generateUrl('application_etudiant_alternance_update',
                    ['id' => $alternance->getId()]),
            ]
        );
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $alternance->setEtat(Alternance::ALTERNANCE_ETAT_COMPLETE);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'alternance.edit.success.flash');
        } else {
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'alternance.edit.error.flash');
        }

        return $this->redirectToRoute('application_index', ['onglet' => 'alternance']);
    }
}
