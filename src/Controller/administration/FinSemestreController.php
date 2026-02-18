<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/FinSemestreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/01/2026 18:22
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
use App\Repository\SemestreLienRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class FinSemestreController.
 */
#[Route(path: '/administration/fin-semestre')]
class FinSemestreController extends BaseController
{
    #[Route(path: '/{semestre}', name: 'administration_fin_semestre_index', requirements: ['semestre' => '\d+'])]
    public function index(
        SemestreLienRepository $semestreLienRepository,
        DepartementRepository $departementRepository, EtudiantRepository $etudiantRepository, ScolariteRepository $scolariteRepository, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $etudiants = $etudiantRepository->findBySemestre($semestre);
        $scolarites = $scolariteRepository->findBySemestreArray($semestre,
            $this->dataUserSession->getAnneeUniversitaire());

        $semestresSuivants = $semestreLienRepository->findSuivants($semestre);
        $semestresPrecedents = $semestreLienRepository->findPrecedents($semestre);
        $semestresDecales = $semestreLienRepository->findDecales($semestre);

        return $this->render('administration/fin_semestre/index.html.twig', [
            'semestre' => $semestre,
            'semestresSuivants' => $semestresSuivants,
            'semestresPrecedents' => $semestresPrecedents,
            'semestresDecales' => $semestresDecales,
            'etudiants' => $etudiants,
            'scolarites' => $scolarites,
            'departements' => $departementRepository->findAll(),
        ]);
    }

    #[Route(path: '/confirme/{semestre}', name: 'administration_fin_semestre_confirme')]
    public function confirme(EtudiantScolarite $etudiantScolarite, EtudiantRepository $etudiantRepository, Request $request, SemestreRepository $semestreRepository, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $etudiants = $etudiantRepository->findBySemestre($semestre);
        /** @var Etudiant $e */
        foreach ($etudiants as $e) {
            $valeur = $request->request->get('etu_'.$e->getId());
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
                        // si transfert dans un autre département, faire un mail au département
                        // todo: mettre à jour la scolarité si résultats non publiés?
                        break;
                    default:
                        // transfert dans un semestre
                        $se = $semestreRepository->find($valeur);
                        if (null !== $se) {
                            //on ajoute le semestre à la liste des semestres
                            $e->addSemestre($se);
                            $se->addEtudiantsSemestre($e);
                        }
                        break;
                }
                $this->entityManager->persist($e);
            }
        }
        $this->entityManager->flush();
        $this->addFlashBag('success', 'changement.semestre.effectue');

        return $this->redirectToRoute('administration_semestre_index', ['semestre' => $semestre->getId()]);
    }
}
