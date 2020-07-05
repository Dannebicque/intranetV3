<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/SemestreController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\RattrapageRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SemestreController
 * @package App\Controller\administration
 * @Route("/administration/semestre")
 */
class SemestreController extends BaseController
{
    /**
     * @param Semestre $semestre
     * @param          $actif
     *
     * @return RedirectResponse
     *
     * @Route("/active/{semestre}/{actif}",
     *     name="administration_semestre_actif",
     *     methods={"GET"})
     */
    public function activeSemestreAction(Semestre $semestre, bool $actif): RedirectResponse
    {
        $semestre->setActif($actif);
        $this->entityManager->persist($semestre);
        $this->entityManager->flush();

        return $this->redirect($this->generateUrl('administration_semestre_index', ['semestre' => $semestre->getId()]));
    }

    /**
     * @Route("/{semestre}", name="administration_semestre_index", requirements={"semestre" : "\d+"})
     * @param AbsenceJustificatifRepository $absenceJustificatifRepository
     * @param RattrapageRepository          $rattrapageRepository
     * @param Semestre                      $semestre
     *
     * @return Response
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function index(
        AbsenceJustificatifRepository $absenceJustificatifRepository,
        RattrapageRepository $rattrapageRepository,
        Semestre $semestre
    ): Response {
        return $this->render('administration/semestre/index.html.twig', [
            'semestre' => $semestre,
            'nbJustificatifs' => $absenceJustificatifRepository->findBySemestreCount($semestre),
            'nbRattrapages' => $rattrapageRepository->findBySemestreCount($semestre)
        ]);
    }
}
