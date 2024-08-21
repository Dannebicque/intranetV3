<?php

namespace App\Classes\EduSign\Api;

use App\Classes\EduSign\DTO\EduSignGroupe;
use App\Classes\EduSign\GetCleApi;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpClient\HttpClient;

class ApiGroupe
{
    public function __construct(
        protected GetCleApi          $getCleApi,
        protected GroupeRepository   $groupeRepository,
        protected SemestreRepository $semestreRepository
    )
    {
    }

    public function getAllGroups(string $cleApi): mixed
    {
        $client = HttpClient::create();

        $response = $client->request('GET', 'https://ext.edusign.fr/v1/group', [
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

    public function addGroupe(EduSignGroupe $groupe, string $cleApi, ?string $type): mixed
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'https://ext.edusign.fr/v1/group', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
            ],
            'json' => ['group' => $groupe->toArray()],
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        $data = json_decode($content, true);
        // accéder à la valeur de l'ID
        $id = $data['result']['ID'] ?? "";

        if ($type === 'semestre') {
            $semestre = $this->semestreRepository->findOneBy(['id' => $groupe->api_id]);
            if ($semestre && $semestre instanceof Semestre) {
                if ($semestre->getIdEduSign() === null) {
                    $semestre->setIdEduSign($id);
                    $this->semestreRepository->save($semestre);
                }
            }
        } elseif ($type === 'groupe') {
            $groupeAdd = $this->groupeRepository->findOneBy(['id' => $groupe->api_id]);
            if ($groupeAdd && $groupeAdd instanceof Groupe) {
                if ($groupeAdd && $groupeAdd->getIdEduSign() === null) {
                    $groupeAdd->setIdEduSign($id);
                    $this->groupeRepository->save($groupeAdd);
                }
            }
        }

        return $content;
    }

    public function updateGroupe(EduSignGroupe $groupe, string $cleApi): mixed
    {
        try {
            $client = HttpClient::create();

            $response = $client->request('PATCH', 'https://ext.edusign.fr/v1/group', [
                'json' => ['group' => $groupe->toArray()],
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

    public function deleteGroupe(EduSignGroupe $groupe, string $cleApi): array
    {
        try {
            $client = HttpClient::create();

            $response = $client->request('DELETE', 'https://ext.edusign.fr/v1/group/' . $groupe->id_edu_sign, [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
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

    public function getAllGroupes(string $cleApi): mixed
    {
        try {
            $client = HttpClient::create();

            $response = $client->request('GET', 'https://ext.edusign.fr/v1/group', [
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