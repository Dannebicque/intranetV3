<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/projet/ProjetPeriodeGestionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration\projet;

use App\Classes\MyExport;
use App\Classes\MyProjet;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\ProjetPeriode;
use App\Repository\ProjetPeriodeRepository;
use JsonException;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class StagePeriodeGestionController.
 */
#[Route(path: '/administration/projet/periode/gestion')]
class ProjetPeriodeGestionController extends BaseController
{
    /**
     * @throws JsonException
     */
    #[Route(path: '/{uuid}/export.{_format}', name: 'administration_projet_periode_gestion_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, ProjetPeriode $projetPeriode, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $projetPeriode->getSemestres()->first());
        $projetEtudiants = $projetPeriode->getProjetEtudiants();

        $data = $mySerializer->getDataFromSerialization(
            $projetEtudiants,
            [
                'etudiant' => ['nom', 'prenom'],
                'entreprise' => ['raisonSociale'],
                'tuteur' => ['nom', 'prenom', 'fonction', 'telephone', 'email'],
                'tuteurUniversitaire' => ['nom', 'prenom'],
                'dateDebutStage',
                'dateFinStage',
            ],
            ['projet_periode_gestion', 'utilisateur', 'projet_entreprise_administration', 'adresse'],
            ['dateDebutStage' => MySerializer::ONLY_DATE, 'dateFinStage' => MySerializer::ONLY_DATE]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'periode_projet_'.$projetPeriode->getLibelle(),
        );
    }

    #[Route(path: '/{uuid}', name: 'administration_projet_periode_gestion')]
    public function periode(ProjetPeriodeRepository $projetPeriodeRepository, MyProjet $myProjet, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    ProjetPeriode                                   $projetPeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $projetPeriode->getSemestres()->first());
        $periodes = [];
        foreach ($this->dataUserSession->getDiplomes() as $diplome) {
            $pers = $projetPeriodeRepository->findByDiplome($diplome, $this->getAnneeUniversitaire());
            foreach ($pers as $periode) {
                $periodes[] = $periode;
            }
        }

        return $this->render('administration/projet/projet_periode_gestion/index.html.twig', [
            'projetPeriode' => $projetPeriode,
            'periodes' => $periodes,
            'myProjet' => $myProjet->getDataPeriode($projetPeriode),
        ]);
    }
}
