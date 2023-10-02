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
use App\Classes\EduSign\DTO\EduSignEnseignant;
use App\Repository\PersonnelRepository;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\EventDispatcher\Event;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class ApiEduSign
{
    private string $cleApi;

    public function __construct(
        ParameterBagInterface            $parameterBag,
        PersonnelRepository              $personnelRepository,
        private EventDispatcherInterface $eventDispatcher
    )
    {
        $this->personnelRepository = $personnelRepository;
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
        // convertit JSON en tableau associatif PHP
        $data = json_decode($content, true);

//        if (! isset($data['result']['ID'])) {
//            throw new \Exception('API did not return an ID for ' . $enseignant->email);
//        }

        // accéder à la valeur de l'ID
        $id = "";
        if (isset($data['result']) && isset($data['result']['ID'])) {
            $id = $data['result']['ID'];
        }
        dump($statusCode);
        dump($id);

        $personnel = $this->personnelRepository->findOneBy(['mailUniv' => $enseignant->email]);
        if (null === $personnel) {
            throw new \Exception('Personnel not found for ' . $enseignant->email);
        }
//        dump($personnel);
        $this->eventDispatcher->dispatch(new Event(), 'enseignant.added');

        if ($personnel->getIdEduSign() != $id) {
            $personnel->setIdEduSign($id);
            $this->personnelRepository->save($personnel);
        }
            $this->eventDispatcher->dispatch(new EnseignantUpdatedEvent($id));


//        dump($enseignant);
//        dump($statusCode);
        dump($content);
    }
}
