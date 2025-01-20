<?php

namespace App\Controller\transfertV4;

use App\Classes\Matieres\MatiereManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\PrevisionnelRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/transfert/previsionnels')]
class TransfertPreviController extends AbstractController
{
    #[Route('/matiere', name: 'api_transfert_previsonnels_matieres', methods: ['GET', 'POST'])]
    public function getPrevisMatiere(
        PrevisionnelRepository $previsionnelRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        TypeMatiereManager $matiereManager
    ): Response
    {
        $tabPrevisionnels = [];
        $previsionnels = $previsionnelRepository->findBy(['typeMatiere' => 'matiere']);

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
        TypeMatiereManager $matiereManager
    ): Response
    {
        $tabPrevisionnels = [];
        $previsionnels = $previsionnelRepository->findBy(['typeMatiere' => 'ressource']);

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
        TypeMatiereManager $matiereManager
    ): Response
    {
        $tabPrevisionnels = [];
        $previsionnels = $previsionnelRepository->findBy(['typeMatiere' => 'sae']);

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
