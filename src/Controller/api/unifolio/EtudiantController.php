<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/EtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

class EtudiantController extends BaseController
{
    #[Route(path: '/api/unifolio/etudiant', name: 'api_etudiant_liste')]
    public function listeEtudiant(
        Request            $request,
        EtudiantRepository $etudiantRepository,
    ): JsonResponse
    {
//        $this->checkAccessApi($request);

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

                $semestre = $etudiant->getSemestre();
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
            $etudiants = $etudiantRepository->findBy(['semestre' => $semestreId]);

            $tabEtudiant = [];
            foreach ($etudiants as $etudiant) {

                $groupes = [];
                foreach ($etudiant->getGroupes() as $groupe) {
                    $groupes[] = [
                        'id' => $groupe->getId(),
                        'libelle' => $groupe->getLibelle(),
                    ];
                }

                $semestre = $etudiant->getSemestre();
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
        }

        return $this->json($tabEtudiant);
    }

}
