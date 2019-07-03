<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\BrowserKit\Cookie;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\Storage\MockFileSessionStorage;
use Symfony\Component\Security\Guard\Token\PostAuthenticationGuardToken;

class RoutesTest extends WebTestCase
{
    private $client;

    public function setUp()
    {
        $this->client = static::createClient();

        $session = $this->client->getContainer()->get('session');

        $token = new PostAuthenticationGuardToken('permanent',  'main', ['ROLE_PERMANENT']);
        $session->set('_security_main', serialize($token));
        $session->set('departement', '23004287-e45b-413e-82a1-f578aad12e73');

        $session->save();
        $cookie = new Cookie($session->getName(), $session->getId());
        $this->client->getCookieJar()->set($cookie);
    }


    /**
     * @dataProvider providePermanentUrls
     */
    public function testPermanentUrl($url)
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
            ['/fr/tableau-de-bord'],
            ['/fr/trombinoscope/'],
            ['/fr/agenda/'],
            ['/fr/application'],
            ['/fr/document/'],
            ['/fr/information/'],
            ['/fr/administration/'],
            // ...
        ];
    }
}
