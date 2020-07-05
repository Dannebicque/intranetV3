<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/FinSemestreController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Classes\MyEtudiant;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FinSemestreController
 * @package App\Controller\administration
 * @Route("/administration/fin-semestre")
 */
class FinSemestreController extends BaseController
{
    /**
     * @Route("/{semestre}", name="administration_fin_semestre_index", requirements={"semestre":"\d+"})
     * @param DepartementRepository $departementRepository
     * @param EtudiantRepository    $etudiantRepository
     * @param Semestre              $semestre
     *
     * @return Response
     */
    public function index(
        DepartementRepository $departementRepository,
        EtudiantRepository $etudiantRepository,
        Semestre $semestre
    ): Response {
        $etudiants = $etudiantRepository->findBySemestre($semestre);
        //$sc = $this->getDoctrine()->getRepository('DAKernelBundle:ScEtudiantSemestre')->findSemestre($semestre->getId());

        $tab = [];

        /** @var Etudiant $e */
        foreach ($etudiants as $e) {
            $tab[$e->getId()] = null;
        }

//          todo: a gérer...
//        /** @var  $s */
//        foreach ($sc as $s) {
//            $tab[$s->getEtudiant()->getId()] = $s;
//        }

        return $this->render('administration/fin_semestre/index.html.twig', [
            'semestre'     => $semestre,
            'etudiants'    => $etudiants,
            'tab'          => $tab,
            'departements' => $departementRepository->findAll()
        ]);
    }

    /**
     * @Route("/confirme/{semestre}", name="administration_fin_semestre_confirme")
     * @param EtudiantRepository $etudiantRepository
     * @param Request            $request
     * @param SemestreRepository $semestreRepository
     * @param MyEtudiant         $myEtudiant
     * @param Semestre           $semestre
     *
     * @return Response
     * @throws Exception
     */
    public function confirme(
        EtudiantRepository $etudiantRepository,
        Request $request,
        SemestreRepository $semestreRepository,
        MyEtudiant $myEtudiant,
        Semestre $semestre
    ): Response {

        $etudiants = $etudiantRepository->findBySemestre($semestre->getId());

        /** @var Etudiant $e */
        foreach ($etudiants as $e) {
            $valeur = $request->request->get('etu_' . $e->getId());

            $myEtudiant->setEtudiant($e)->suppressionGroupes();
            if ($valeur !== '') {
                switch ($valeur) {
                    case 'REO':
                        $e->setAnneeSortie(date('Y'));
                        $e->setSemestre(null);
                        //todo: mettre à jour la scolarité si résultats non publiés?
                        break;
                    case 'DEM':
                        $e->setAnneeSortie(date('Y'));
                        $e->setSemestre(null);
                        //todo: mettre à jour la scolarité si résultats non publiés?
                        break;
                    case 'DUT':
                        $e->setAnneeSortie(date('Y'));
                        $e->setSemestre(null);
                        //todo: mettre à jour la scolarité si résultats non publiés?
                        break;
                    case 'ATT':
                        null;
                        break;
                    case 'TRANSFERT':
                        //si transfert dans un autre département, faire un mail au département
                        //todo: mettre à jour la scolarité si résultats non publiés?
                        break;
                    default:
                        //transfert dans un semestre
                        $se = $semestreRepository->find($valeur);
                        if ($se !== null) {
                            $e->setSemestre($se);
                        }

                        $p = new Scolarite();
                        $p->setSemestre($se);
                        $p->setEtudiant($e);
                        $p->setDecision('E.C.');
                        $p->setOrdre($se->getOrdreLmd());//todo: vérifier si pas déjà un semestre ?
                        $this->entityManager->persist($p);
                        break;
                }
                $this->entityManager->persist($e);
            }
        }

        $this->entityManager->flush();

        $this->addFlashBag('success', 'changement.semestre.effectue');

        return $this->redirect($this->generateUrl('administration_semestre_index', ['semestre' => $semestre->getId()]));
    }
}
