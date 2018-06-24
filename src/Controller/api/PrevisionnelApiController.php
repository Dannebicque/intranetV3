<?php

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Matiere;

use App\Entity\Previsionnel;
use App\Repository\PrevisionnelRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Normalizer\PropertyNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class MatiereApiController
 * @package App\Controller
 * @Route("/api/previsionnel")
 */
class PrevisionnelApiController extends BaseController
{
    /**
     * @Route("/maiere/{matiere}", name="api_previsionnel_matiere", options={"expose":true})
     * @param Matiere $matiere
     *
     * @return JsonResponse
     */
    public function previsionnelMatiereAjax(
        PrevisionnelRepository $previsionnelRepository,
        Matiere $matiere
    ): JsonResponse {
        $previsionnel = $previsionnelRepository->findPrevisionnelMatiere($matiere,
            $this->dataUserSession->getAnneePrevisionnel());

        $t = array();

        /** @var Previsionnel $p */
        foreach ($previsionnel as $p) {
            $tp = array();
            $tp['id'] = $p->getId();
            $tp['personnel'] = $p->getPersonnel() ? $p->getPersonnel()->getDisplayPr() : 'non-defini';
            $tp['nbHCm'] = $p->getNbHCm();
            $tp['nbGrCm'] = $p->getNbGrCm();
            $tp['nbSeanceCm'] = number_format($p->getNbHCm() / Constantes::DUREE_COURS, 2);
            $tp['nbHTd'] = $p->getNbHTd();
            $tp['nbGrTd'] = $p->getNbGrTd();
            $tp['nbSeanceTd'] = number_format($p->getNbHTd() / Constantes::DUREE_COURS, 2);
            $tp['nbHTp'] = $p->getNbHTp();
            $tp['nbGrTp'] = $p->getNbGrTp();
            $tp['nbSeanceTp'] = number_format($p->getNbHTp() / Constantes::DUREE_COURS, 2);
            $t[] = $tp;
        }

        return new JsonResponse($t);
    }
}
