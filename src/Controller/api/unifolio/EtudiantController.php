<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/EtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/09/2026 09:59
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

class EtudiantController extends BaseController
{
    public function __construct(private readonly SemestreRepository $semestreRepository)
    {
    }

    #[Route(path: '/api/unifolio/etudiant', name: 'api_etudiant_liste')]
    public function listeEtudiant(
        Request            $request,
        EtudiantRepository $etudiantRepository,
    ): JsonResponse
    {
        $this->checkAccessApi($request);

        $username = $request->query->get('username');
        $semestreId = $request->query->get('semestre');

        if ($username) {
            $etudiant = $etudiantRepository->findOneBy(['username' => $username]);

            $tabEtudiant = [];
            if ($etudiant) {

                $groupes = [];
                foreach ($etudiant->getGroupes() as $groupe) {
                    $groupes[] = [
                        'id' => $groupe->getId(),
                        'libelle' => $groupe->getLibelle(),
                    ];
                }

                $semestre = $etudiant->getSemestreActif($this->getAnneeUniversitaire());
                if (null !== $semestre) {
                    $semestre = [
                        'id' => $semestre->getId(),
                        'libelle' => $semestre->getLibelle(),
                    ];
                } else {
                    $semestre = null;
                }

                $tabEtudiant[$etudiant->getId()] = [
                    'id' => $etudiant->getId(),
                    'nom' => $etudiant->getNom(),
                    'prenom' => $etudiant->getPrenom(),
                    'username' => $etudiant->getUsername(),
                    'mail_univ' => $etudiant->getMailUniv(),
                    'mail_perso' => $etudiant->getMailPerso(),
                    'telephone' => $etudiant->getTel1(),
                    'semestre' => $semestre,
                    'annee_sortie' => $etudiant->getAnneeSortie(),
                    'groupes' => $groupes,
                ];
            }
        } elseif ($semestreId) {
            $semestre = $this->semestreRepository->find($semestreId);
            if (null === $semestre) {
                return $this->json(['error' => 'Semestre introuvable'], 404);
            }
            $etudiants = $etudiantRepository->findBySemestre($semestre, $this->getAnneeUniversitaire());
            $semestre = [
                'id' => $semestre->getId(),
                'libelle' => $semestre->getLibelle(),
            ];

            $tabEtudiant = [];
            foreach ($etudiants as $etudiant) {

                $groupes = [];
                foreach ($etudiant->getGroupes() as $groupe) {
                    $groupes[] = [
                        'id' => $groupe->getId(),
                        'libelle' => $groupe->getLibelle(),
                    ];
                }

                $tabEtudiant[$etudiant->getId()] = [
                    'id' => $etudiant->getId(),
                    'nom' => $etudiant->getNom(),
                    'prenom' => $etudiant->getPrenom(),
                    'username' => $etudiant->getUsername(),
                    'mail_univ' => $etudiant->getMailUniv(),
                    'mail_perso' => $etudiant->getMailPerso(),
                    'telephone' => $etudiant->getTel1(),
                    'semestre' => $semestre,
                    'annee_sortie' => $etudiant->getAnneeSortie(),
                    'groupes' => $groupes,
                ];
            }
        }

        return $this->json($tabEtudiant);
    }

}
