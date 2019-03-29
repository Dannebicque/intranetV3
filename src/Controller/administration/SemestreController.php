<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\RattrapageRepository;
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
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
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
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function index(AbsenceJustificatifRepository $absenceJustificatifRepository, RattrapageRepository $rattrapageRepository, Semestre $semestre): Response
    {
        return $this->render('administration/semestre/index.html.twig', [
            'semestre' => $semestre,
            'nbJustificatifs' => $absenceJustificatifRepository->findBySemestreCount($semestre),
            'nbRattrapages' => $rattrapageRepository->findBySemestreCount($semestre)
        ]);
    }


}
