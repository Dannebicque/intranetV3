<?php

namespace App\Classes\EduSign\Api;

use App\Classes\EduSign\DTO\EduSignEtudiant;
use App\Classes\EduSign\GetCleApi;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpClient\HttpClient;

class ApiEtudiant
{
    public function __construct(
        protected GetCleApi          $getCleApi,
        protected EtudiantRepository $etudiantRepository
    )
    {
    }

    public function addEtudiant(EduSignEtudiant $etudiant, string $cleApi): array
    {
        try {
            $client = HttpClient::create();

            $response = $client->request('POST', 'https://ext.edusign.fr/v1/student', [
                'json' => ['student' => $etudiant->toArray()],
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
                    'accept' => 'application/json',
                    'content-type' => 'application/json',
                ],
            ]);

            $content = $response->getContent();
            $data = json_decode($content, true);

            if (isset($data['status']) && $data['status'] === 'error') {
                return ['success' => false, 'error' => $data['message']];
            }

            $id = $data['result']['ID'] ?? "";

            $etudiant = $this->etudiantRepository->findOneBy(['id' => $etudiant->api_id]);
            if ($etudiant && null === $etudiant) {
                return ['success' => false, 'error' => 'Etudiant non trouvé'];
            }

            if ($etudiant && $etudiant->getIdEduSign() === null) {
                $etudiant->setIdEduSign($id);
                $this->etudiantRepository->save($etudiant);
            }

            return ['success' => true, 'data' => $data];
        } catch (\Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    public function updateEtudiant(EduSignEtudiant $etudiant, string $cleApi): array
    {
        try {
            $client = HttpClient::create();

            $response = $client->request('PATCH', 'https://ext.edusign.fr/v1/student', [
                'json' => ['student' => $etudiant->toArray()],
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
                    'accept' => 'application/json',
                    'content-type' => 'application/json',
                ],
            ]);

            $content = $response->getContent();
            $data = json_decode($content, true);

            if (isset($data['status']) && $data['status'] === 'error') {
                return ['success' => false, 'error' => $data['message']];
            }

            return ['success' => true, 'data' => $data];
        } catch (\Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    public function getAllEtudiants(string $cleApi): mixed
    {
        try {
            $client = HttpClient::create();

            $response = $client->request('GET', 'https://ext.edusign.fr/v1/student', [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
                ]
            ]);

            $content = $response->getContent();
            $data = json_decode($content, true);

            if (isset($data['status']) && $data['status'] === 'error') {
                return ['success' => false, 'error' => $data['message']];
            }

            return $data['result'] ?? null;
        } catch (\Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    public function getEtudiant(?string $etudiant, string $cleApi): mixed
    {
        try {
            $client = HttpClient::create();

            $response = $client->request('GET', 'https://ext.edusign.fr/v1/student/' . $etudiant, [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
                ]
            ]);

            $content = $response->getContent();
            $data = json_decode($content, true);

            if (isset($data['status']) && $data['status'] === 'error') {
                return ['success' => false, 'error' => $data['message']];
            }

            return $data['result'] ?? null;
        } catch (\Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    public function deleteEtudiant(string $etudiantId, string $cleApi): mixed
    {
        try {
            $client = HttpClient::create();

            $response = $client->request('DELETE', 'https://ext.edusign.fr/v1/student/' . $etudiantId, [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
                ]
            ]);

            $content = $response->getContent();
            $data = json_decode($content, true);

            if (isset($data['status']) && $data['status'] === 'error') {
                return ['success' => false, 'error' => $data['message']];
            }

            return $data['result'] ?? null;
        } catch (\Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
}