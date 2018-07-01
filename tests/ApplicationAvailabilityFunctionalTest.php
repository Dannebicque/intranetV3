<?php
// tests/ApplicationAvailabilityFunctionalTest.php
namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\BrowserKit\Cookie;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;

class ApplicationAvailabilityFunctionalTest extends WebTestCase
{

    private $client = null;

    public function setUp()
    {
        $this->client = static::createClient();
    }

    /**
     * @dataProvider urlProvider
     */
    public function testPageIsSuccessful($url)
    {
        $this->logIn();

        $crawler = $this->client->request('GET', $url);
        $this->assertSame(Response::HTTP_OK, $this->client->getResponse()->getStatusCode());
    }

    public function urlProvider()
    {
        yield['/administration/'];
        yield['/agenda/'];
        yield['/application/'];
        yield['/'];
        yield['/document/'];
        yield['/document/ajax/typedocument'];
        yield['/document/ajax/document/{typedocument}'];
        yield['/404'];
        yield['/faq/'];
        yield['/aide/'];

        yield['/informations/'];
        yield['/internationale/'];
        yield['/mentions-legales/'];
        yield['/messagerie/'];
        yield['/previsionnel/'];
        yield['/previsionnel/chronologique'];
        yield['/login'];

        yield['/trombinoscope/'];
        yield['/user/mon-profil'];
        yield['/user/settings'];

        yield['/administration/article/'];
        yield['/administration/article/help'];
        yield['/administration/article/save'];
        yield['/administration/article/imprimer'];
        yield['/administration/article/new'];

        yield['/cohorte/'];
        yield['/administration/configuration/configuration'];
        yield['/administration/date/'];
        yield['/administration/date/help'];
        yield['/administration/date/save'];
        yield['/administration/date/imprimer'];
        yield['/administration/date/new'];
        yield['/administration/date/{id}'];
        yield['/administration/document/'];
        yield['/administration/document/save'];
        yield['/administration/document/imprimer'];
        yield['/administration/document/new'];

        yield['/administration/emploi-du-temps/'];
        yield['/administration/etudiant/'];

        yield['/administration/groupe/'];
        yield['/administration/matiere/'];
        yield['/administration/matiere/help'];
        yield['/administration/matiere/save'];
        yield['/administration/matiere/imprimer'];
        yield['/administration/matiere/new'];

        yield['/administration/personnel/'];
        yield['/administration/personnel/help'];
        yield['/administration/personnel/save'];
        yield['/administration/personnel/imprimer'];
        yield['/administration/personnel/add'];
        yield['/administration/personnel/create'];

        yield['/administration/ppn/'];
        yield['/administration/ppn/help'];
        yield['/administration/ppn/save'];
        yield['/administration/ppn/imprimer'];
        yield['/administration/ppn/new'];

        yield['/administration/previsionnel/'];
        yield['/administration/previsionnel/new'];
        yield['/administration/previsionnel/imprimer'];
        yield['/administration/previsionnel/save'];

        yield['/administration/stage/'];
        yield['/administration/stage/gestion/'];
        yield['/administration/statistique/'];
        yield['/administration/structure/'];
        yield['/administration/type-document/'];
        yield['/administration/type-document/help'];
        yield['/administration/type-document/save'];
        yield['/administration/type-document/imprimer'];
        yield['/administration/type-document/new'];

        yield['/administration/structure/annee/'];
        yield['/administration/structure/annee/help'];
        yield['/administration/structure/annee/save'];
        yield['/administration/structure/annee/imprimer'];

        yield['/administration/structure/diplome/'];
        yield['/administration/structure/diplome/help'];
        yield['/administration/structure/diplome/save'];
        yield['/administration/structure/diplome/imprimer'];

        yield['/administration/structure/formation/'];
        yield['/administration/structure/formation/help'];
        yield['/administration/structure/formation/save'];
        yield['/administration/structure/formation/imprimer'];
        yield['/administration/structure/formation/new'];

        yield['/administration/structure/semestre/'];
        yield['/administration/structure/semestre/help'];
        yield['/administration/structure/semestre/save'];
        yield['/administration/structure/semestre/imprimer'];

        yield['/administration/structure/ue/'];
        yield['/administration/structure/ue/help'];
        yield['/administration/structure/ue/save'];
        yield['/administration/structure/ue/imprimer'];

        yield['/application/etudiant/absence/absence'];

        yield['/application/personnel/absence/aide'];

        yield['/application/personnel/note/aide'];

        yield['/social/'];
        yield['/super-administration/'];
        yield['/super-administration/site/'];
        yield['/super-administration/site/help'];
        yield['/super-administration/site/save'];
        yield['/super-administration/site/imprimer'];
        yield['/super-administration/site/new'];

        yield['/super-administration/type-diplome/'];
        yield['/super-administration/type-diplome/save'];
        yield['/super-administration/type-diplome/imprimer'];
        yield['/super-administration/type-diplome/new'];

        yield['/super-administration/type-hrs/'];
        yield['/super-administration/type-hrs/help'];
        yield['/super-administration/type-hrs/save'];
        yield['/super-administration/type-hrs/imprimer'];
        yield['/super-administration/type-hrs/new'];

        yield['/super-administration/ufr/'];
        yield['/super-administration/ufr/help'];
        yield['/super-administration/ufr/save'];
        yield['/super-administration/ufr/imprimer'];
        yield['/super-administration/ufr/new'];

        yield['/logout'];

    }

    private function logIn()
    {
        $session = $this->client->getContainer()->get('session');

        // the firewall context defaults to the firewall name
        $firewallContext = 'main';

        $token = new UsernamePasswordToken('annebi01', 'test', $firewallContext, array('ROLE_PERMANENT'));
        $session->set('_security_'.$firewallContext, serialize($token));
        $session->save();

        $cookie = new Cookie($session->getName(), $session->getId());
        $this->client->getCookieJar()->set($cookie);
    }
}