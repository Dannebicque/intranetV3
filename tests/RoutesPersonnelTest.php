<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/tests/RoutesPersonnelTest.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2020 13:59

namespace App\Tests;

use App\Repository\DepartementRepository;
use App\Repository\PersonnelRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\BrowserKit\Cookie;
use Symfony\Component\Security\Guard\Token\PostAuthenticationGuardToken;

class RoutesPersonnelTest extends WebTestCase
{
    private $client;

    public function setUp(): void
    {

        $this->client = static::createClient();
        $this->logIn();
    }

    public function login()
    {
        $session = self::$container->get('session');

        $personnelRepository = self::$container->get(PersonnelRepository::class);
        $user = $personnelRepository->findOneBy(['username' => 'permanent']);

        $firewallName = 'main';
        // if you don't define multiple connected firewalls, the context defaults to the firewall name
        // See https://symfony.com/doc/current/reference/configuration/security.html#firewall-context
        $firewallContext = 'main';

        // you may need to use a different token class depending on your application.
        // for example, when using Guard authentication you must instantiate PostAuthenticationGuardToken
        $token = new PostAuthenticationGuardToken($user, $firewallName, $user->getRoles());
        $departementRepository = self::$container->get(DepartementRepository::class);
        $departement = $departementRepository->find(1);
        $session->set('departement', $departement->getUuid());
        $session->set('_security_' . $firewallContext, serialize($token));
        $session->save();

        $cookie = new Cookie($session->getName(), $session->getId());
        $this->client->getCookieJar()->set($cookie);

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
            ['/fr/tableau-de-bord'],
            ['/fr/trombinoscope'],
            ['/fr/agenda'],
            ['/fr/application'],
            ['/fr/document'],
            ['/fr/information'],
        ];
    }
}
