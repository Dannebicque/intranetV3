<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/AlternanceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Alternance;
use App\Entity\Constantes;
use App\Form\AlternanceEtudiantType;
use App\Repository\AlternanceRepository;
use Doctrine\ORM\NonUniqueResultException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AlternanceController.
 *
 * @Route("/application/etudiant/alternance")
 * @IsGranted("ROLE_ETUDIANT")
 */
class AlternanceController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_alternance_index")
     *
     * @throws NonUniqueResultException
     */
    public function index(AlternanceRepository $alternanceRepository): Response
    {
        /** @var Alternance $alternance */
        $alternance = $alternanceRepository->getOneByEtudiantAndAnneeUniversitaire($this->getConnectedUser(),
            $this->getEtudiantAnneeUniversitaire());
        $form = null;
        if (null !== $alternance) {
            $form = $this->createForm(
                AlternanceEtudiantType::class,
                $alternance,
                [
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
            'form'        => null !== $form ? $form->createView() : null,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="application_etudiant_alternance_update", methods="GET|POST")
     */
    public function edit(Request $request, Alternance $alternance): Response
    {
        $form = $this->createForm(
            AlternanceEtudiantType::class,
            $alternance,
            [
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
