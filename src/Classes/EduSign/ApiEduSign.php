<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/ApiEduSign.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 16:00
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\DTO\EduSignCourse;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpClient\HttpClient;

class ApiEduSign
{
    private string $cleApi;

    public function __construct(
        ParameterBagInterface $parameterBag)
    {
        $this->cleApi = $parameterBag->get('api_edu_sign');
    }

    public function addCourse(EduSignCourse $course)
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'https://ext.edusign.fr/v1/course', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->cleApi,
            ],
            'json' => ['course' => $course->toArray()],
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        dump($statusCode);
        dump($content);
    }

    public function addGroupe(EduSignGroupe $groupe)
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'https://ext.edusign.fr/v1/group', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->cleApi,
            ],
            'json' => ['group' => $groupe->toArray()],
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        dump($statusCode);
        dump($content);
    }

    public function addEtudiant(EduSignEtudiant $etudiant)
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'https://ext.edusign.fr/v1/student', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->cleApi,
            ],
            'json' => ['student' => $etudiant->toArray()],
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        dump($statusCode);
        dump($content);
    }

    public function addEnseignant(EduSignEnseignant $enseignant)
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'https://ext.edusign.fr/v1/professor', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->cleApi,
            ],
            'json' => ['professor' => $enseignant->toArray(), 'dontSendCredentials' => $enseignant->dontSendCredentials],
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        dump($statusCode);
        dump($content);
    }
}
