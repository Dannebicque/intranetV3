<?php


namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RoutesTest extends WebTestCase
{
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
