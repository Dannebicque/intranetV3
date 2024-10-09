<?php

namespace App\Classes\EduSign\Api;

use App\Classes\EduSign\DTO\EduSignCourse;
use App\Classes\EduSign\GetCleApi;
use App\Entity\Diplome;
use App\Repository\EdtCelcatRepository;
use App\Repository\EdtPlanningRepository;
use Exception;
use Symfony\Component\HttpClient\HttpClient;

class ApiCours
{
    public function __construct(
        protected GetCleApi             $getCleApi,
        protected EdtPlanningRepository $edtPlanningRepository,
        protected EdtCelcatRepository   $edtCelcatRepository,

    )
    {
    }

    public function addCourse(EduSignCourse $course, string $cleApi, ?Diplome $diplome): mixed
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'https://ext.edusign.fr/v1/course', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
            ],
            'json' => ['course' => $course->toArray()],
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        $data = json_decode($content, true);
        // accéder à la valeur de l'ID
        $id = $data['result']['ID'] ?? null;

        if (str_contains($course->type_edt, 'intranet')) {
            $edt = $this->edtPlanningRepository->findOneBy(['id' => $course->api_id]);
            $rep = $this->edtPlanningRepository;
        } elseif (str_contains($course->type_edt, 'celcat')) {
            $edt = $this->edtCelcatRepository->findOneBy(['id' => $course->api_id]);
            $rep = $this->edtCelcatRepository;
        } else {
            $edt = null;
            $rep = null;
        }

        $edt->setIdEduSign($id);
        $rep->save($edt);

        dump($data);

        // si $data n'a pas : "status" => "success"
        if ($data['status'] !== 'success') {
            return $content;
        } else {
            return null;
        }
    }

    public function updateCourse(EduSignCourse $course, string $cleApi, Diplome $diplome): mixed
    {
        $client = HttpClient::create();

        $response = $client->request('PATCH', 'https://ext.edusign.fr/v1/course/', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
            ],
            'json' => ['course' => $course->toArray()],
        ]);
        $statusCode = $response->getStatusCode();
        $content = $response->getContent();
        $data = json_decode($content, true);

        $id = $course->id;

        if (str_contains($course->type_edt, 'intranet')) {
            $edt = $this->edtPlanningRepository->findOneBy(['id' => $course->api_id]);
            $rep = $this->edtPlanningRepository;
        } elseif (str_contains($course->type_edt, 'celcat')) {
            $edt = $this->edtCelcatRepository->findOneBy(['id' => $course->api_id]);
            $rep = $this->edtCelcatRepository;
        } else {
            $edt = null;
            $rep = null;
        }

        if (null === $edt) {
            dump('Course not found for ' .$course->type_edt.'-'.$course->api_id);
        } else {
            if ($edt->getIdEduSign() == null && $rep !== null) {
                $edt->setIdEduSign($id);
                $rep->save($edt);
            }
        }

        dump('UPDATE COURSE | '.$diplome->getLibelle(), $course->api_id, $this->getCleApi->getCleApi($cleApi));


        // si $data n'a pas : "status" => "success"
        if ($data['status'] !== 'success') {
            return $content;
        } else {
            return null;
        }
    }

    public function getCourseIdByApiId(string $apiId, string $cleApi): mixed
    {
        $client = HttpClient::create();

        $response = $client->request('GET', 'https://ext.edusign.fr/v1/course/get-id/' . $apiId, [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
            ]
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();
        // convertit JSON en tableau associatif PHP
        $data = json_decode($content, true);

        return $data['result'] ?? "";
    }

    public function getCourses(?string $id, string $cleApi): mixed
    {
        $client = HttpClient::create();

        $response = $client->request('GET', 'https://ext.edusign.fr/v1/course/' . $id, [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
            ]
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();
        // convertit JSON en tableau associatif PHP
        $data = json_decode($content, true);

        return $data['result'] ?? "";
    }

    public function getAllCourses(string $cleApi): mixed
    {
        $client = HttpClient::create();

        $response = $client->request('GET', 'https://ext.edusign.fr/v1/course', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
            ]
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();
        // convertit JSON en tableau associatif PHP
        $data = json_decode($content, true);

        return $data['result'] ?? null;
    }

    public function getAllCoursesWeek(string $cleApi, $start, $end): mixed
    {
        $client = HttpClient::create();

        $response = $client->request('GET', 'https://ext.edusign.fr/v1/course?start='.$start.'&end='.$end, [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
            ]
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();
        // convertit JSON en tableau associatif PHP
        $data = json_decode($content, true);

        return $data['result'] ?? null;
    }

    public function deleteCourse(?string $id, string $cleApi): mixed
    {
        $client = HttpClient::create();

        $response = $client->request('DELETE', 'https://ext.edusign.fr/v1/course/' . $id, [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->getCleApi->getCleApi($cleApi),
            ],
        ]);

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();
        $data = json_decode($content, true);

        $edt = $this->edtPlanningRepository->findOneBy(['idEduSign' => $id]);
        if ($edt) {
            $edt->setIdEduSign(null);
            $this->edtPlanningRepository->save($edt);
        }

        return $data['status'] ?? null;

    }
}
