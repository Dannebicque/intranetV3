<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/DiplomeCodificationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Diplome;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/structure/diplome/codification', name: 'sa_diplome_codification_')]
class DiplomeCodificationController extends BaseController
{
    #[Route(path: '/{diplome}', name: 'index', methods: ['GET'])]
    public function liste(Diplome $diplome): Response
    {
        return $this->render('super-administration/structure/diplome/codification/index.html.twig', [
            'diplome' => $diplome,
        ]);
    }

    #[Route(path: '/{diplome}', name: 'maj_codification', methods: ['POST'])]
    public function majCodification(Request $request, Diplome $diplome): Response
    {
        $codeDiplome = $request->request->get('codeDiplome');
        $codeVersion = $request->request->get('codeVersion');
        $lettreDiplome = $request->request->get('lettreDiplome');

        $diplome->setCodeDiplome($codeDiplome);
        $diplome->setCodeVersion($codeVersion);
        $diplome->getReferentiel()?->setLettreDiplome($lettreDiplome);

        foreach ($diplome->getAnnees() as $annee) {
            if ($request->request->has('codeEtape_'.$annee->getId())) {
                $annee->setCodeEtape($request->request->get('codeEtape_'.$annee->getId()));
            }

            if ($request->request->has('codeVersion_'.$annee->getId())) {
                $annee->setCodeVersion($request->request->get('codeVersion_'.$annee->getId()));
            }

            if ($request->request->has('ordreAnnee_'.$annee->getId())) {
                $annee->setOrdre($request->request->get('ordreAnnee_'.$annee->getId()));
            }

            foreach ($annee->getSemestres() as $semestre) {
                if ($request->request->has('codeElement_'.$semestre->getId())) {
                    $semestre->setCodeElement($request->request->get('codeElement_'.$semestre->getId()));
                }

                if ($request->request->has('ordreLmd_'.$semestre->getId())) {
                    $semestre->setOrdreLmd($request->request->get('ordreLmd_'.$semestre->getId()));
                }

                foreach ($semestre->getUes() as $ue) {
                    if ($request->request->has('codeElement_'.$ue->getId())) {
                        $ue->setCodeElement($request->request->get('codeElement_'.$ue->getId()));
                    }

                    if ($request->request->has('numeroUe_'.$ue->getId())) {
                        $ue->setNumeroUe($request->request->get('numeroUe_'.$ue->getId()));
                    }

                    if ($request->request->has('ects_'.$ue->getId())) {
                        $ue->setNbEcts($request->request->get('ects_'.$ue->getId()));
                    }
                }
            }
        }

        $this->entityManager->flush();

        return $this->redirectToRoute('sa_diplome_codification_index', [
            'diplome' => $diplome->getId(),
        ]);
    }
}
