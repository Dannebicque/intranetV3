<?php

namespace App\Controller\transfertV4;

use App\Classes\Matieres\TypeMatiereManager;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\PrevisionnelRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/transfert/previsionnels')]
class TransfertPreviController extends AbstractController
{
    #[Route('/matiere', name: 'api_transfert_previsonnels_matieres', methods: ['GET', 'POST'])]
    public function getPrevisMatiere(
        PrevisionnelRepository $previsionnelRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        TypeMatiereManager $matiereManager,
        Request $request
    ): Response
    {
        $page = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 50);

        $previsionnels = $previsionnelRepository->findByTypeMatiereWithPagination('matiere', $page, $limit);

        $tabPrevisionnels = [];
        foreach ($previsionnels as $previsionnel) {
            $annee = $anneeUniversitaireRepository->findOneBy(['annee' => $previsionnel->getAnnee()]);
            $matiere = $matiereManager->getMatiere($previsionnel->getIdMatiere(), $previsionnel->getTypeMatiere());
            if (null === $matiere) {
                continue;
            }

            $prev = [
                'annee' => $annee->getId(),
                'personnel' => $previsionnel->getPersonnel()?->getId() ?? null,
                'matiere' => [
                    'id' => $matiere->id,
                    'type' => $matiere->typeMatiere,
                ],
                'nbHCm' => $previsionnel->getNbHCm(),
                'nbHTd' => $previsionnel->getNbHTd(),
                'nbHTp' => $previsionnel->getNbHTp(),
                'nbGrCm' => $previsionnel->getNbGrCm(),
                'nbGrTd' => $previsionnel->getNbGrTd(),
                'nbGrTp' => $previsionnel->getNbGrTp(),
                'referent' => $previsionnel->getReferent(),
            ];
            $tabPrevisionnels[] = $prev;
        }

        return $this->json($tabPrevisionnels);
    }

    #[Route('/ressource', name: 'api_transfert_previsonnels_ressources', methods: ['GET', 'POST'])]
    public function getPrevisRessource(
        PrevisionnelRepository $previsionnelRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        TypeMatiereManager $matiereManager,
        Request $request
    ): Response
    {
        $page = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 50);

        $previsionnels = $previsionnelRepository->findByTypeMatiereWithPagination('ressource', $page, $limit);

        foreach ($previsionnels as $previsionnel) {
            $annee = $anneeUniversitaireRepository->findOneBy(['annee' => $previsionnel->getAnnee()]);

            $matiere = $matiereManager->getMatiere($previsionnel->getIdMatiere(), $previsionnel->getTypeMatiere());
            if (null === $matiere) {
                continue;
            }

            $prev = [
                'annee' => $annee->getId(),
                'personnel' => $previsionnel->getPersonnel()?->getId() ?? null,
                'matiere' => [
                    'id' => $matiere->id,
                    'type' => $matiere->typeMatiere,
                ],
                'nbHCm' => $previsionnel->getNbHCm(),
                'nbHTd' => $previsionnel->getNbHTd(),
                'nbHTp' => $previsionnel->getNbHTp(),
                'nbGrCm' => $previsionnel->getNbGrCm(),
                'nbGrTd' => $previsionnel->getNbGrTd(),
                'nbGrTp' => $previsionnel->getNbGrTp(),
                'referent' => $previsionnel->getReferent(),
            ];
            $tabPrevisionnels[] = $prev;
        }

        return $this->json($tabPrevisionnels);
    }

    #[Route('/sae', name: 'api_transfert_previsonnels_saes', methods: ['GET', 'POST'])]
    public function getPrevisSae(
        PrevisionnelRepository $previsionnelRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        TypeMatiereManager $matiereManager,
        Request $request
    ): Response
    {
        $page = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 50);

        $previsionnels = $previsionnelRepository->findByTypeMatiereWithPagination('matiere', $page, $limit);

        foreach ($previsionnels as $previsionnel) {
            $annee = $anneeUniversitaireRepository->findOneBy(['annee' => $previsionnel->getAnnee()]);

            $matiere = $matiereManager->getMatiere($previsionnel->getIdMatiere(), $previsionnel->getTypeMatiere());
            if (null === $matiere) {
                continue;
            }

            $prev = [
                'annee' => $annee->getId(),
                'personnel' => $previsionnel->getPersonnel()?->getId() ?? null,
                'matiere' => [
                    'id' => $matiere->id,
                    'type' => $matiere->typeMatiere,
                ],
                'nbHCm' => $previsionnel->getNbHCm(),
                'nbHTd' => $previsionnel->getNbHTd(),
                'nbHTp' => $previsionnel->getNbHTp(),
                'nbGrCm' => $previsionnel->getNbGrCm(),
                'nbGrTd' => $previsionnel->getNbGrTd(),
                'nbGrTp' => $previsionnel->getNbGrTp(),
                'referent' => $previsionnel->getReferent(),
            ];
            $tabPrevisionnels[] = $prev;
        }

        return $this->json($tabPrevisionnels);
    }

}
