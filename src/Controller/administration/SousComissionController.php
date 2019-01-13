<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\MesClasses\MySousCommission;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SousComissionController
 * @package App\Controller\administration
 * @Route("/administration/sous-commission")
 */
class SousComissionController extends BaseController
{


    /**
     * @Route("/{semestre}", name="administration_sous_comission_index")
     * @param MySousCommission $mySousCommission
     * @param Semestre         $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(MySousCommission $mySousCommission, Semestre $semestre): Response
    {
        $mySousCommission->init($semestre, $semestre->getAnneeUniversitaire());


        return $this->render('administration/sous_commission/index.html.twig', [
            'semestre' => $semestre,
            'sousCommission' => $mySousCommission
        ]);
    }

    /*
     * $t = array();
        $t['matieres'] = $this->getDoctrine()->getRepository('DAKernelBundle:Matieres')->getMatieresSemestre($semestre);
        $t['etudiants'] = $this->getDoctrine()->getRepository('DAKernelBundle:Etudiants')->findEtudiantsSemestre($semestre->getId());
        $t['ue'] = $this->getDoctrine()->getRepository('DAKernelBundle:UE')->findBy(array('semestre' => $semestre->getId()));
        $t['notes'] = $this->getDoctrine()->getRepository('DAKernelBundle:Notes')->getNotesEtudiantsSemestre($semestre->getId(),
            $t['etudiants']);
        $absences = $this->getDoctrine()->getRepository('DAKernelBundle:Absences')->findAbsencesSemestre($semestre->getId());
        $t['semestres'] = $this->calculSemestre($semestre);

        $moyennes = $myEtudiants->calculMoyennesEtudiants($t['etudiants'], $t['matieres'], $t['notes'], $t['ue'],
            $absences);

        return $this->render('@DAKernel/SousCommission/synthese.html.twig', array(
            't'        => $t,
            'semestre' => $semestre,
            'moyennes' => $moyennes,

        ));
     */
}
