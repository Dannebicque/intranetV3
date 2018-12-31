<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\RattrapageRepository;
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
     * @Route("/{semestre}", name="administration_semestre_index")
     * @param AbsenceJustificatifRepository $absenceJustificatifRepository
     * @param RattrapageRepository          $rattrapageRepository
     * @param Semestre                      $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
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
