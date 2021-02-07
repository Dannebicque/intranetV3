<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/FinSemestreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */


namespace App\Controller\administration;

use App\Classes\Etudiant\EtudiantScolarite;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use App\Repository\ScolariteRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FinSemestreController.
 *
 * @Route("/administration/fin-semestre")
 */
class FinSemestreController extends BaseController
{
    /**
     * @Route("/{semestre}", name="administration_fin_semestre_index", requirements={"semestre":"\d+"})
     */
    public function index(
        DepartementRepository $departementRepository,
        EtudiantRepository $etudiantRepository,
        ScolariteRepository $scolariteRepository,
        Semestre $semestre
    ): Response {
        $etudiants = $etudiantRepository->findBySemestre($semestre);
        $scolarites = $scolariteRepository->findBySemestreArray($semestre,
            $this->dataUserSession->getAnneeUniversitaire());

        return $this->render('administration/fin_semestre/index.html.twig', [
            'semestre'     => $semestre,
            'etudiants'    => $etudiants,
            'scolarites'   => $scolarites,
            'departements' => $departementRepository->findAll(),
        ]);
    }

    /**
     * @Route("/confirme/{semestre}", name="administration_fin_semestre_confirme")
     */
    public function confirme(
        EtudiantScolarite $etudiantScolarite,
        EtudiantRepository $etudiantRepository,
        Request $request,
        SemestreRepository $semestreRepository,
        Semestre $semestre
    ): Response {
        $etudiants = $etudiantRepository->findBySemestre($semestre->getId());

        /** @var Etudiant $e */
        foreach ($etudiants as $e) {
            $valeur = $request->request->get('etu_' . $e->getId());
            $etudiantScolarite->setEtudiant($e);
            $etudiantScolarite->setSemestre($semestre);
            $etudiantScolarite->setAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire());
            if ('' !== $valeur && 'ATT' !== $valeur) {
                switch ($valeur) {
                    case Constantes::SEMESTRE_REORIENTE:
                    case Constantes::SEMESTRE_DEMISSIONNAIRE:
                    case Constantes::SCOLARITE_DIPLOME:
                        $etudiantScolarite->changeEtat($valeur);
                        break;
                    case 'TRANSFERT':
                        //si transfert dans un autre département, faire un mail au département
                        //todo: mettre à jour la scolarité si résultats non publiés?
                        break;
                    default:
                        //transfert dans un semestre
                        $se = $semestreRepository->find($valeur);
                        if (null !== $se) {
                            $e->setSemestre($se);
                        }
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
