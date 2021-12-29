<?php

namespace App\Tests\Controller;

use App\Repository\DepartementRepository;
use App\Repository\PersonnelDepartementRepository;
use App\Repository\PersonnelRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class DefaultTest extends WebTestCase
{
    private SessionInterface $session;
    private KernelBrowser $client;

    public function setUp(): void
    {
        $this->client = static::createClient();
        $this->session = $this->client->getContainer()->get('session');
    }


    public function testHomepage(): void
    {


        $userRepository = static::getContainer()->get(PersonnelRepository::class);

        // retrieve the test user
        $testUser = $userRepository->findOneByMailUniv('permanent@gmail.com');
        // simulate $testUser being logged in
        $this->client->loginUser($testUser);
        $departement = static::getContainer()->get(DepartementRepository::class)->findDepartementPersonnelDefaut($testUser);
        $this->session->set('departement', $departement[0]->getUuid()); //on sauvegarde

        // test e.g. the profile page
        $this->client->request('GET', '/fr/tableau-de-bord');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Hello John!');
    }
}
