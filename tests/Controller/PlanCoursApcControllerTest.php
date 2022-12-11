<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/tests/Controller/PlanCoursApcControllerTest.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/08/2022 22:32
 */

namespace App\Test\Controller;

use App\Entity\PlanCoursApc;
use App\Repository\PlanCoursApcRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class PlanCoursApcControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private PlanCoursApcRepository $repository;
    private string $path = '/plan/cours/apc/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = (static::getContainer()->get('doctrine'))->getRepository(PlanCoursApc::class);

        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('PlanCoursApc index');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $originalNumObjectsInRepository = count($this->repository->findAll());

        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            'plan_cours_apc[created]' => 'Testing',
            'plan_cours_apc[updated]' => 'Testing',
            'plan_cours_apc[typeMatiere]' => 'Testing',
            'plan_cours_apc[idMatiere]' => 'Testing',
            'plan_cours_apc[intervenant]' => 'Testing',
            'plan_cours_apc[anneeUniversitaire]' => 'Testing',
        ]);

        self::assertResponseRedirects('/plan/cours/apc/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new PlanCoursApc();
        $fixture->setCreated('My Title');
        $fixture->setUpdated('My Title');
        $fixture->setTypeMatiere('My Title');
        $fixture->setIdMatiere('My Title');
        $fixture->setIntervenant('My Title');
        $fixture->setAnneeUniversitaire('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('PlanCoursApc');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new PlanCoursApc();
        $fixture->setCreated('My Title');
        $fixture->setUpdated('My Title');
        $fixture->setTypeMatiere('My Title');
        $fixture->setIdMatiere('My Title');
        $fixture->setIntervenant('My Title');
        $fixture->setAnneeUniversitaire('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'plan_cours_apc[created]' => 'Something New',
            'plan_cours_apc[updated]' => 'Something New',
            'plan_cours_apc[typeMatiere]' => 'Something New',
            'plan_cours_apc[idMatiere]' => 'Something New',
            'plan_cours_apc[intervenant]' => 'Something New',
            'plan_cours_apc[anneeUniversitaire]' => 'Something New',
        ]);

        self::assertResponseRedirects('/plan/cours/apc/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getCreated());
        self::assertSame('Something New', $fixture[0]->getUpdated());
        self::assertSame('Something New', $fixture[0]->getTypeMatiere());
        self::assertSame('Something New', $fixture[0]->getIdMatiere());
        self::assertSame('Something New', $fixture[0]->getIntervenant());
        self::assertSame('Something New', $fixture[0]->getAnneeUniversitaire());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new PlanCoursApc();
        $fixture->setCreated('My Title');
        $fixture->setUpdated('My Title');
        $fixture->setTypeMatiere('My Title');
        $fixture->setIdMatiere('My Title');
        $fixture->setIntervenant('My Title');
        $fixture->setAnneeUniversitaire('My Title');

        $this->repository->add($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/plan/cours/apc/');
    }
}
