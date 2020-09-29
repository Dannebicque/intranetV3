<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/tests/RoutesTest.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/09/2020 08:46

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RoutesTest extends WebTestCase
{
    public function testShowPost()
    {
        //$client = static::createClient();

        $this->client->request('GET', '/fr/connexion');

        $this->assertEquals(200, $this->client->getResponse()->getStatusCode());
    }

    private $client;

    public function setUp(): void
    {
        $this->client = static::createClient();
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
            ['/fr/connexion'],
            ['/fr/mentions-legales/'],
            ['/fr/mentions-legales/about'],
            ['/fr/mentions-legales/rgpd']
        ];
    }
}
