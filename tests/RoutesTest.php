<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\BrowserKit\Cookie;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;

class RoutesTest extends WebTestCase
{
    private $client = null;

    public function setUp()
    {
        $this->client = static::createClient();

        $session = $this->client->getContainer()->get('session');


        $token = new UsernamePasswordToken('permanent@gmail.com', 'test', 'main', ['ROLE_PERMANENT']);
        $session->set('_security_main', serialize($token));
        $session->save();

        $cookie = new Cookie($session->getName(), $session->getId());
        $this->client->getCookieJar()->set($cookie);
    }


    /**
     * @dataProvider providePermanentUrls
     */
    public function testPermanentUrl($url)
    {
        $crawler = $this->client->request('GET', $url);

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
