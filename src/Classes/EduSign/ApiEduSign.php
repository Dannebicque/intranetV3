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
use App\Classes\EduSign\DTO\EduSignEtudiant;
use App\Classes\EduSign\DTO\EduSignGroupe;
use App\Entity\Groupe;
use App\Repository\EdtPlanningRepository;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\EventDispatcher\Event;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class ApiEduSign
{
    private string $cleApi;

    public function __construct(
        ParameterBagInterface            $parameterBag,
        protected PersonnelRepository              $personnelRepository,
        protected EdtPlanningRepository            $edtPlanningRepository,
        protected SemestreRepository               $semestreRepository,
        protected GroupeRepository                 $groupeRepository,
        protected EtudiantRepository               $etudiantRepository,
        private EventDispatcherInterface $eventDispatcher
    )
    {
        $this->personnelRepository = $personnelRepository;
        $this->edtPlanningRepository = $edtPlanningRepository;
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

        $data = json_decode($content, true);
        // accéder à la valeur de l'ID
        $id = "";
        if (isset($data['result']) && isset($data['result']['ID'])) {
            $id = $data['result']['ID'];
        }

        $edt = $this->edtPlanningRepository->findOneBy(['id' => $course->api_id]);
        if (null === $edt) {
            throw new \Exception('Course not found for ' . $edt->api_id);
        }

        if ($edt->getIdEduSign() == null) {
            $edt->setIdEduSign($id);
            $this->edtPlanningRepository->save($edt);
        }

        dump($statusCode);
        dump($content);
    }

    public function deleteCourse(EduSignCourse $course)
    {
        $client = HttpClient::create();

        $response = $client->request('DELETE', 'https://ext.edusign.fr/v1/course/'.$course->id_edu_sign, [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->cleApi,
            ],
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        $edt = $this->edtPlanningRepository->findOneBy(['idEduSign' => $course->id_edu_sign]);
        if ($edt) {
            $edt->setIdEduSign(null);
            $this->edtPlanningRepository->save($edt);
        }

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

        $data = json_decode($content, true);
        // accéder à la valeur de l'ID
        $id = "";
        if (isset($data['result']) && isset($data['result']['ID'])) {
            $id = $data['result']['ID'];
        }

        $semestre = $this->semestreRepository->findOneBy(['id' => $groupe->api_id]);
        if ($semestre && null === $semestre) {
            throw new \Exception('Group not found for ' . $semestre->api_id);
        }

        if ($semestre && $semestre->getIdEduSign() == null) {
            $semestre->setIdEduSign($id);
            $this->semestreRepository->save($semestre);
        }

        $groupeAdd = $this->groupeRepository->findOneBy(['id' => $groupe->api_id]);
        if ($groupeAdd && null === $groupeAdd) {
            throw new \Exception('Group not found for ' . $groupeAdd->api_id);
        }

        if ($groupeAdd && $groupeAdd->getIdEduSign() == null) {
            $groupeAdd->setIdEduSign($id);
            $this->groupeRepository->save($groupeAdd);
        }

        dump($statusCode);
        dump($content);
    }

    public function deleteGroupe(EduSignGroupe $groupe)
    {
        $client = HttpClient::create();

        $response = $client->request('DELETE', 'https://ext.edusign.fr/v1/group/'.$groupe->id_edu_sign, [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->cleApi,
            ],
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        $groupe = $this->groupeRepository->findOneBy(['idEduSign' => $groupe->id_edu_sign]);
        if ($groupe) {
            $groupe->setIdEduSign(null);
            $this->groupeRepository->save($groupe);
        }

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

        $data = json_decode($content, true);
        // accéder à la valeur de l'ID
        $id = "";
        if (isset($data['result']) && isset($data['result']['ID'])) {
            $id = $data['result']['ID'];
        }

        $etudiant = $this->etudiantRepository->findOneBy(['id' => $etudiant->api_id]);
        if ($etudiant && null === $etudiant) {
            throw new \Exception('Etudiant not found for ' . $etudiant->api_id);
        }

        if ($etudiant && $etudiant->getIdEduSign() == null) {
            $etudiant->setIdEduSign($id);
            $this->etudiantRepository->save($etudiant);
        }

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
