<?php

namespace App\Controller\administration;

use App\Entity\Semestre;
use App\MesClasses\MyEvaluations;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class NoteController
 * @package App\Controller\administration
 * @Route({"fr":"administration/note",
 *         "en":"administration/mark"}
 *)
 */
class NoteController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_notes_semestre_index")
     * @param MyEvaluations $myEvaluations
     * @param Semestre      $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Doctrine\ORM\ORMException
     */
    public function index(MyEvaluations $myEvaluations, Semestre $semestre): Response
    {
        $myEvaluations->setSemestre($semestre);

        return $this->render('administration/notes/index.html.twig', [
            'semestre' => $semestre,
            'matieres' => $myEvaluations->getMatieresSemestre(),
            'evaluations' => $myEvaluations->getEvaluationsSemestre(),
        ]);
    }
}
