<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/transfertV4/TransfertRessourceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/12/2024 21:51
 */

namespace App\Controller\transfertV4;

use App\Repository\ApcRessourceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/transfert')]
class TransfertRessourceController extends AbstractController
{
    #[Route('/ressources', name: 'api_transfert_ressource', methods: ['GET', 'POST'])]
    public function getRessources(
        ApcRessourceRepository $apcRessourceRepository,
    ): Response
    {
        $tabRessources = [];
        $ressources = $apcRessourceRepository->findAll();

        foreach ($ressources as $ressource) {
            $res = [
                'libelle' => $ressource->getLibelle(),
                'code_matiere' => $ressource->getCodeMatiere(),
                'code_element' => $ressource->getCodeElement(),
                'cm_ppn' => $ressource->getCmPpn(),
                'td_ppn' => $ressource->getTdPpn(),
                'tp_ppn' => $ressource->getTpPpn(),
                'cm_formation' => $ressource->getCmFormation(),
                'td_formation' => $ressource->getTdFormation(),
                'tp_formation' => $ressource->getTpFormation(),
                'description' => $ressource->getDescription(),
                'nb_notes' => $ressource->getNbNotes(),
                'libelle_court' => $ressource->getLibelleCourt(),
                'suspendu' => $ressource->isSuspendu(),
                'mutualisee' => $ressource->getMutualisee(),
                'mots_cles' => $ressource->getMotsCles(),
                'pre_requis' => $ressource->getPreRequis(),
                'id' => $ressource->getId(),
            ];

            $semestres = $ressource->getSemestres();
            //récupérer les ues de chaque semestre, récupérer les compétences de la ressource, si la compétence est liée à une ue de la ressource, on ajoute la compétence à la ressource

            foreach ($semestres as $semestre) {
                $ues = $semestre->getUes();
                foreach ($ues as $ue) {
                    $competences = $ressource->getApcRessourceCompetences();
                    foreach ($competences as $competence) {
                        if ($competence->getCompetence()?->getUe()->contains($ue)) {
                            $res['ues'][] = [
                                'ue_id' => $ue->getId(),
                                'coefficient' => $competence->getCoefficient(),
                                'parcours' => $competence->getParcours()?->getId(),
                            ];
                        }
                    }
                }
            }


            $tabRessources[] = $res;
        }

        return $this->json($tabRessources);
    }
}
