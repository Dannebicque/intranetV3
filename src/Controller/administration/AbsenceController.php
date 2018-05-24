<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\MesClasses\MyAbsences;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class AbsenceController
 * @package App\Controller\administration
 * @Route({"fr":"administration/absence",
 *         "en":"administration/en-absence"}
 *)
 */
class AbsenceController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}/liste", name="administration_absences_semestre_liste")
     * @param MyAbsences $myAbsences
     * @param Semestre   $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Doctrine\ORM\ORMException
     */
    public function liste(MyAbsences $myAbsences, Semestre $semestre): Response
    {
        $myAbsences->getAbsencesSemestre($semestre, $this->dataUserSession->getFormation()->getAnneeCourante());

        return $this->render('administration/absence/liste.html.twig', [
            'semestre' => $semestre,
            'absences' => $myAbsences
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/justifier", name="administration_absences_semestre_justifier")
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function justifier(Semestre $semestre): Response
    {
        return $this->render('administration/absence/justifier.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/saisie", name="administration_absences_semestre_saisie")
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function saisie(Semestre $semestre): Response
    {
        return $this->render('administration/absence/saisie.html.twig', [
            'semestre' => $semestre
        ]);
    }
}
