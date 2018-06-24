<?php

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Repository\EtudiantRepository;
use App\Repository\MatiereRepository;
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
 * @Route("/api/matiere")
 */
class MatiereApiController extends BaseController
{
    /** @var MatiereRepository */
    protected $matiereRepository;

    /**
     * MatiereApiController constructor.
     *
     * @param MatiereRepository $matiereRepository
     */
    public function __construct(MatiereRepository $matiereRepository)
    {
        $this->matiereRepository = $matiereRepository;
    }

    /**
     * @Route("/semestre/{semestre}", name="api_matieres_semestre", options={"expose":true})
     * @param Semestre $semestre
     *
     * @return JsonResponse
     */
    public function matieresSemestreAjax(Semestre $semestre): JsonResponse
    {
        $matieres = $this->matiereRepository->findBySemestre($semestre);

        $tmatieres = array();
        /** @var Matiere $m */
        foreach ($matieres as $m) {
            $t['id'] = $m->getId();
            $t['libelle'] = $m->getLibelle();
            $t['display'] = $m->getUe() ? $m->getUe()->getLibelle() : '-';
            $tmatieres[] = $t;
        }

        return new JsonResponse($tmatieres);
    }

    /**
     * @Route("/{matiere}", name="api_matiere", options={"expose":true})
     * @param Matiere $matiere
     *
     * @return JsonResponse
     */
    public function matiereAjax(Matiere $matiere): JsonResponse
    {
        //$serializer = new Serializer([new GetSetMethodNormalizer()]);
        //dump($serializer->normalize($matiere));
        //return new Response($serializer->serialize($matiere, 'json'));

        //todo: sérializer
        $t['id'] = $matiere->getId();
        $t['libelle'] = $matiere->getLibelle();
        $t['display'] = $matiere->getUe() ? $matiere->getUe()->getLibelle() : '-';
        $t['cmFormation'] = $matiere->getCmFormation();
        $t['tdFormation'] = $matiere->getTdFormation();
        $t['tpFormation'] = $matiere->getTpFormation();
        $t['cmPpn'] = $matiere->getCmPpn();
        $t['tdPpn'] = $matiere->getTdPpn();
        $t['tpPpn'] = $matiere->getTpPpn();

        return new JsonResponse($t);
    }
}
