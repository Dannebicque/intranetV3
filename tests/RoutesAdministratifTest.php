<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/tests/RoutesAdministratifTest.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/09/2020 20:10

namespace App\Tests;

use App\Repository\PersonnelRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RoutesAdministratifTest extends WebTestCase
{
    private $client;

    public function setUp(): void
    {
        $this->client = static::createClient();
        $personnelRepository = static::$container->get(PersonnelRepository::class);
        $testUser = $personnelRepository->findOneBy(['username' => 'superAdmin']);

        // simulate $testUser being logged in
        $this->client->loginUser($testUser);
    }

    /**
     * @dataProvider providePermanentUrls
     */
    public function testPermanentUrl($url): void
    {
        $this->client->request('GET', $url);
        $this->assertEquals(
            200, // or Symfony\Component\HttpFoundation\Response::HTTP_OK
            $this->client->getResponse()->getStatusCode()
        );
        $this->assertTrue($this->client->getResponse()->isSuccessful());
    }

    public function providePermanentUrls()
    {
        return [
            ['/fr/administratif/'],
            ['/fr/administratif/etudiants/'],
            ['/fr/administratif/scolarite/'],
            ['/fr/administratif/ressources-humaines/'],
            ['/fr/administratif/previsionnel'],
            ['/fr/administratif/celcat/'],
            ['/fr/administratif/qualite/'],

        ];
    }
}
