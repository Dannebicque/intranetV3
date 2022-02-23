<?php

namespace App\Tests\Smoke;

use App\Repository\EtudiantRepository;
use App\Repository\PersonnelRepository;
use Generator;
use RuntimeException;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\User\UserInterface;

abstract class SmokeTestCase extends WebTestCase
{
    /**
     * @return Generator<string, array{path: string, email: string|null}>
     */
    abstract public function provideRoutes(): Generator;

    /**
     * @test
     *
     * @dataProvider provideRoutes
     */
    public function shouldReturnSuccessfulResponse(
        string $path,
        ?string $username = null,
        ?string $type = 'personnel'
    ): void {
        $client = self::createClient();

        if (null !== $username) {
            if ('personnel' === $type) {
                $userRepository = $client->getContainer()->get(PersonnelRepository::class);
            } elseif ('etudiant' === $type) {
                $userRepository = $client->getContainer()->get(EtudiantRepository::class);
            } else {
                throw new RuntimeException(sprintf('Type %s inexistant.', $type));
            }

            /** @var UserInterface|null $user */
            $user = $userRepository->findOneByUsername($username);

            if (null === $user) {
                throw new RuntimeException(sprintf('The user %s does not exist.', $username));
            }

            $client->loginUser($user);
        }

        $client->request(Request::METHOD_GET, $path);

        self::assertResponseIsSuccessful();
    }
}
