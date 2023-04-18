<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Groupe;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class EtudiantController extends BaseController
{
    #[Route(path: '/api/unifolio/etudiant/liste/{groupe}', name: 'api_etudiant_liste')]
    public function listeEtudiant(
        Request $request,
        Groupe $groupe
    )
    {
        //TODO: décommenter ça quand lien avec Unifolio OK
//        $this->checkAccessApi($request);

        $tabEtudiant = [];

        foreach ($groupe->getEtudiants() as $etudiant) {
            $tabEtudiant[$etudiant->getId()] = [
                'id' => $etudiant->getId(),
                'nom' => $etudiant->getNom(),
                'prenom' => $etudiant->getPrenom(),
                'mail_perso' => $etudiant->getMailPerso(),
                'mail_univ' => $etudiant->getMailUniv(),
                'groupe' => $etudiant->getGroupe()->getId(),
            ];
        }

        return $this->json($tabEtudiant);
    }

}