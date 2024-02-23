<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/UpdateVilleCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Command;

use App\Repository\CodeInseeRepository;
use App\Repository\EtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use function array_key_exists;

#[AsCommand(
    name: 'app:update-ville',
    description: 'Mise à jour des villes par rapport au code INSEE'
)]
class UpdateVilleCommand extends Command
{
    /**
     * ClearOldNotificationCommand constructor.
     */
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly EtudiantRepository $etudiantRepository,
        private readonly CodeInseeRepository $codeInseeRepository
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $codes = $this->codeInseeRepository->findVilles();
        $codeVille = [];
        foreach ($codes as $code) {
            $codeVille[trim($code['code_insee'])] = $code['ville'];
        }

        $datas = $this->etudiantRepository->findAll();
        $i = 0;
        $io->writeln('depart');
        foreach ($datas as $data) {
            $adresse = $data->getAdresse();

            if (null !== $adresse && null !== $adresse->getVille() && 1 === preg_match("(\d{5})",
                    $adresse->getVille()) && array_key_exists(trim($adresse->getVille()), $codeVille)) {
                $adresse->setVille($codeVille[trim($adresse->getVille())]);
                $this->entityManager->persist($adresse);
                ++$i;
            }
        }
        $this->entityManager->flush();

        $io->success(sprintf('%d Villes mises à jour.', $i));

        return Command::SUCCESS;
    }
}
