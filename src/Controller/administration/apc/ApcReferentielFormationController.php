<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcReferentielFormationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:48
 */

namespace App\Controller\administration\apc;

use App\Classes\Apc\ApcCoefficient;
use App\Controller\BaseController;
use App\Entity\ApcCompetence;
use App\Entity\ApcRessourceCompetence;
use App\Entity\ApcSaeCompetence;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\ApcNiveauRepository;
use App\Repository\ApcRessourceCompetenceRepository;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeCompetenceRepository;
use App\Repository\ApcSaeRepository;
use App\Utils\JsonRequest;
use App\Utils\Tools;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administration/referentiel-formation', name: 'administration_')]
class ApcReferentielFormationController extends BaseController
{
    #[Route(path: '/grille/{diplome}', name: 'apc_referentiel_formation_grille', methods: 'GET')]
    public function grille(Diplome $diplome): Response
    {
        return $this->render('apc/referentiel-formation/grille.html.twig',
            [
                'diplome' => $diplome,
            ]);
    }

    public function grilleCoefficientsSemestre(
        ApcCoefficient $apcCoefficient,
        ApcNiveauRepository $apcNiveauRepository,
        ApcSaeRepository $apcSaeRepository,
        ApcRessourceRepository $apcRessourceRepository,
        Semestre $semestre
    ): Response {
        $saes = $apcSaeRepository->findBySemestreReferentiel($semestre, $semestre->getDiplome()->getReferentiel());
        $ressources = $apcRessourceRepository->findBySemestreReferentiel($semestre, $semestre->getDiplome()->getReferentiel());

        return $this->render('apc/referentiel-formation/_grilleCoefficientsSemestre.html.twig',
            [
                'semestre' => $semestre,
                'niveaux' => $apcNiveauRepository->findByOrdreAnneAndReferentiel($semestre->getAnnee()->getOrdre(), $semestre->getDiplome()->getReferentiel()),
                'saes' => $saes,
                'ressources' => $ressources,
                'coefficients' => $apcCoefficient->calculsCoefficients($saes, $ressources),
            ]);
    }

    #[Route(path: '/ajax-edit/{id}/nb-notes/{type}', name: 'apc_referentiel_formation_nb_notes_ajax', options: ['expose' => true], methods: ['POST'])]
    public function ajaxEditNbNotes(ApcSaeRepository $apcSaeRepository, ApcRessourceRepository $apcRessourceRepository, Request $request, int $id, string $type): Response
    {
        $value = JsonRequest::getValueFromRequest($request, 'value');
        if ('ressource' === $type) {
            $ressource = $apcRessourceRepository->find($id);
            if (null !== $ressource) {
                $ressource->setNbNotes(Tools::convertToInt($value));
                $this->entityManager->flush();
            } else {
                $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Erreur lors de la modification du nombre de notes');

                return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Nombre de notes modifié');

            return new JsonResponse(true, Response::HTTP_OK);
        }
        if ('sae' === $type) {
            $sae = $apcSaeRepository->find($id);
            if (null !== $sae) {
                $sae->setNbNotes(Tools::convertToInt($value));
                $this->entityManager->flush();
            } else {
                $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Erreur lors de la modification du nombre de notes');

                return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Nombre de notes modifié');

            return new JsonResponse(true, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Type inexistant');

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/ajax-edit/{id}/{competence}/{type}', name: 'apc_referentiel_formation_ajax', options: ['expose' => true], methods: ['POST'])]
    public function ajaxEdit(ApcSaeCompetenceRepository $apcSaeCompetenceRepository, ApcSaeRepository $apcSaeRepository, ApcRessourceRepository $apcRessourceRepository, ApcRessourceCompetenceRepository $apcRessourceCompetenceRepository, Request $request, int $id, ApcCompetence $competence, string $type): Response
    {
        $value = JsonRequest::getValueFromRequest($request, 'value');
        if ('ressource' === $type) {
            $ressource = $apcRessourceRepository->find($id);
            if (null !== $ressource) {
                $obj = $apcRessourceCompetenceRepository->findOneBy([
                    'ressource' => $id,
                    'competence' => $competence->getId(),
                ]);
                if (null === $obj && Tools::convertToFloat($value) > 0) { // n'eiste pas et > 0 on créé
                    $obj = new ApcRessourceCompetence($ressource, $competence);
                    $obj->setCoefficient(Tools::convertToFloat($value));
                    $this->entityManager->persist($obj);
                } elseif (Tools::convertToFloat($value) > 0) { // existe et > 0 on met à jour
                    $obj->setCoefficient(Tools::convertToFloat($value));
                } else if ($obj !== null) {
                    $this->entityManager->remove($obj);
                }
                $this->entityManager->flush();
            } else {
                $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Erreur lors de la modification du coefficient');

                return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Coefficient modifié');

            return new JsonResponse(true, Response::HTTP_OK);
        }
        if ('sae' === $type) {
            $sae = $apcSaeRepository->find($id);
            if (null !== $sae) {
                $obj = $apcSaeCompetenceRepository->findOneBy(['sae' => $id, 'competence' => $competence->getId()]);
                if (null === $obj && Tools::convertToFloat($value) > 0) {
                    $obj = new ApcSaeCompetence($sae, $competence);
                    $obj->setCoefficient(Tools::convertToFloat($value));
                    $this->entityManager->persist($obj);
                } elseif (Tools::convertToFloat($value) > 0) {
                    $obj->setCoefficient(Tools::convertToFloat($value));
                } else if ($obj !== null) {
                    $this->entityManager->remove($obj);
                }
                $this->entityManager->flush();
            } else {
                $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Erreur lors de la modification du coefficient');

                return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Coefficient modifié');

            return new JsonResponse(true, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Type inexistant');

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
