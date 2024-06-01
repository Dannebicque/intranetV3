<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/SemestreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/06/2024 21:40
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\RattrapageRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class SemestreController.
 */
#[Route(path: '/administration/semestre')]
class SemestreController extends BaseController
{
    #[Route(path: '/active/{semestre}', name: 'administration_semestre_actif', methods: ['GET'])]
    public function activeSemestre(Semestre $semestre, Request $request): RedirectResponse
    {
        $actif = (bool)$request->query->get('actif');

        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);
        $semestre->setActif($actif);
        $this->entityManager->persist($semestre);
        $this->entityManager->flush();

        return $this->redirectToRoute('administration_semestre_index', ['semestre' => $semestre->getId()]);
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    #[Route(path: '/{semestre}', name: 'administration_semestre_index', requirements: ['semestre' => '\d+'])]
    public function index(AbsenceJustificatifRepository $absenceJustificatifRepository, RattrapageRepository $rattrapageRepository, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        $this->breadcrumbHelper->addAdministration()
            ->addLastItem('Gestion du semestre ' . $semestre->getLibelle());

        return $this->render('administration/semestre/index.html.twig', [
            'semestre' => $semestre,
            'nbJustificatifs' => $absenceJustificatifRepository->findBySemestreCount($semestre, $this->getAnneeUniversitaire()),
            'nbRattrapages' => $rattrapageRepository->findBySemestreCount($semestre, $this->getAnneeUniversitaire()),
        ]);
    }
}
