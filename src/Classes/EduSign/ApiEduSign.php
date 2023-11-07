<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/ApiEduSign.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/11/2023 07:30
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\DTO\EduSignCourse;
use App\Classes\EduSign\DTO\EduSignEnseignant;
use App\Classes\EduSign\DTO\EduSignEtudiant;
use App\Classes\EduSign\DTO\EduSignGroupe;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\EdtCelcatRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpClient\HttpClient;

class ApiEduSign
{
    private string $cleApi;

    public function __construct(
        ParameterBagInterface            $parameterBag,
        protected PersonnelRepository    $personnelRepository,
        protected EdtPlanningRepository  $edtPlanningRepository,
        protected EdtCelcatRepository  $edtCelcatRepository,
        protected SemestreRepository     $semestreRepository,
        protected GroupeRepository       $groupeRepository,
        protected EtudiantRepository     $etudiantRepository,
    )
    {
    }

    public function addCourse(EduSignCourse $course, string $cleApi)
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'https://ext.edusign.fr/v1/course', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $cleApi,
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

        if (str_contains($course->type_edt, 'intranet')) {
            $edt = $this->edtPlanningRepository->findOneBy(['id' => $course->api_id]);
            $rep = $this->edtPlanningRepository;
        } elseif (str_contains($course->type_edt, 'celcat')) {
            $edt = $this->edtCelcatRepository->findOneBy(['id' => $course->api_id]);
            $rep = $this->edtCelcatRepository;
        } else {
            $edt = null;
        }

        if (null === $edt) {
            throw new \Exception('Course not found for ' . $edt->api_id);
        }

        if ($edt->getIdEduSign() == null) {
            $edt->setIdEduSign($id);
            $rep->save($edt);
        }

    }

    public function deleteCourse(EduSignCourse $course)
    {
        $client = HttpClient::create();

        $response = $client->request('DELETE', 'https://ext.edusign.fr/v1/course/' . $course->id_edu_sign, [
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

    }

    public function addGroupe(EduSignGroupe $groupe, $cleApi)
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'https://ext.edusign.fr/v1/group', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $cleApi,
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

    }

    public function deleteGroupe(EduSignGroupe $groupe)
    {
        $client = HttpClient::create();

        $response = $client->request('DELETE', 'https://ext.edusign.fr/v1/group/' . $groupe->id_edu_sign, [
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

    }

    public function addEtudiant(EduSignEtudiant $etudiant, $cleApi)
    {
        $client = HttpClient::create();
        $response = $client->request('POST', 'https://ext.edusign.fr/v1/student', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $cleApi,
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

        if ($etudiant && $etudiant->getIdEduSign() === null) {
            $etudiant->setIdEduSign($id);
            $this->etudiantRepository->save($etudiant);
        }
    }

    public function addEnseignant(EduSignEnseignant $enseignant, Personnel $personnel, Departement $departement, $cleApi)
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'https://ext.edusign.fr/v1/professor', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $cleApi,
            ],
            'json' => ['professor' => $enseignant->toArray(), 'dontSendCredentials' => $enseignant->dontSendCredentials],
        ]);

        $statusCode = $response->getStatusCode();

        $content = $response->getContent();
        // convertit JSON en tableau associatif PHP
        $data = json_decode($content, true);

        // accéder à la valeur de l'ID
        $id = "";
        if (isset($data['result']) && isset($data['result']['ID'])) {
            $id = $data['result']['ID'];
        }

        $jsonId[$departement->getId()] = $id;
        $existingId = $personnel->getIdEduSign();

        if ($existingId !== null && is_array($existingId)) {
            $personnel->setIdEduSign(array_merge($existingId, $jsonId));
        } else {
            $personnel->setIdEduSign($jsonId);
        }
        $this->personnelRepository->save($personnel);
    }
}
