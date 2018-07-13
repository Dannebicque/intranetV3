<?php

namespace App\Controller;

use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AgendaController
 * @package App\Controller
 * @Route({"fr":"trombinoscope",
 *         "en":"who-s-who"})
 */
class TrombinoscopeController extends BaseController
{
    /**
     * @Route("/", name="trombinoscope_index")
     */
    public function index(): Response
    {
        return $this->render('trombinoscope/index.html.twig', [
        ]);
    }

    /**
     * @Route("/etudiant/{semestre}/{typegroupe}", name="trombinoscope_etudiant_semestre", options={"expose":true})
     * @param Semestre        $semestre
     *
     * @param TypeGroupe|null $typegroupe
     *
     * @return Response
     */
    public function trombiEtudiantSemestre(Semestre $semestre, TypeGroupe $typegroupe = null): Response
    {
        return $this->render('trombinoscope/trombiEtudiant.html.twig', [
            'semestre'           => $semestre,
            'selectedTypeGroupe' => $typegroupe

        ]);
    }

    /**
     * @Route("/personnel/{type}", name="trombinoscope_personnel", options={"expose":true})
     * @param PersonnelRepository $personnelRepository
     * @param                     $type
     *
     * @return Response
     */
    public function trombiPersonnel(PersonnelRepository $personnelRepository, $type): Response
    {
        $personnels = $personnelRepository->findByType($type,
            $this->dataUserSession->getFormationId());

        return $this->render('trombinoscope/trombiPersonnel.html.twig', [
            'personnels' => $personnels,
            'type'       => $type
        ]);
    }
}
