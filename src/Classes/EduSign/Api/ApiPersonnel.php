<?php

namespace App\Classes\EduSign\Api;

use App\Classes\EduSign\DTO\EduSignEnseignant;
use App\Classes\EduSign\GetCleApi;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpClient\HttpClient;

class ApiPersonnel
{

    public function __construct(
        protected GetCleApi           $getCleApi,
        protected PersonnelRepository $personnelRepository
    )
    {
    }

    public function addEnseignant(EduSignEnseignant $enseignant, Personnel $personnel, Diplome $diplome, $cleApi): array
    {
        try {
            $client = HttpClient::create();

            $response = $client->request('POST', 'https://ext.edusign.fr/v1/professor', [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
                ],
                'json' => ['professor' => $enseignant->toArray(), 'dontSendCredentials' => $enseignant->dontSendCredentials],
            ]);

            $statusCode = $response->getStatusCode();

            $content = $response->getContent();
            // convertit JSON en tableau associatif PHP
            $data = json_decode($content, true);

            // accéder à la valeur de l'ID
            $id = $data['result']['ID'] ?? "";

            $diplomeId = $diplome->getId();
            $existingIdEduSign = $personnel->getIdEduSign();

            // Supprimer les entrées avec des valeurs nulles
            if ($existingIdEduSign !== null) {
                foreach ($existingIdEduSign as $key => $value) {
                    if ($value === null || $value === '') {
                        unset($existingIdEduSign[$key]);
                    }
                }
                $personnel->setIdEduSign($existingIdEduSign);
                $this->personnelRepository->save($personnel);
            }
            if ($existingIdEduSign === null || !array_key_exists($diplomeId, $existingIdEduSign)) {
                $jsonId = [$diplomeId => $id];

                if ($existingIdEduSign === null) {
                    // Si idEduSign est null, le définir comme le nouveau tableau $jsonId
                    $personnel->setIdEduSign($jsonId);
                } else {
                    // Autrement, ajoute le nouveau tableau $jsonId à l'ancien tableau $existingIdEduSign
                    $personnel->setIdEduSign($existingIdEduSign + $jsonId);
                }
            }

            $this->personnelRepository->save($personnel);

            return ['success' => true, 'data' => $content]; // En cas de succès
        } catch (\Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()]; // En cas d'erreur
        }
    }

    public function getEnseignant(string $cleApi): mixed
    {
        $client = HttpClient::create();

        $response = $client->request('GET', 'https://ext.edusign.fr/v1/professor', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
            ]
        ]);

        $content = $response->getContent();
        // convertit JSON en tableau associatif PHP
        $data = json_decode($content, true);

        return $data['result'] ?? "";
    }

    public function updateEnseignant(EduSignEnseignant $enseignant, string $cleApi): void
    {
        $client = HttpClient::create();

        $response = $client->request('PATCH', 'https://ext.edusign.fr/v1/professor/', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
            ],
            'json' => ['professor' => $enseignant->toArray()],
        ]);
    }
}