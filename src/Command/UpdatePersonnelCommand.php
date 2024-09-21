<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Command;

use App\Repository\PersonnelRepository;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:update-personnel',
    description: 'Add a short description for your command',
)]
class UpdatePersonnelCommand extends Command
{
    public function __construct(
        protected PersonnelRepository $personnelRepository,
    )
    {
        parent::__construct();
    }

    protected function configure(): void
    {
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $personnels = $this->personnelRepository->findAllWithEduSign();

        // MMI : 1
        // CJ : 2
        // GMP : 3
        // GEII : 4
        // TC : 5
        // GEA : 6

        $diplomesKeys = [
            62 => 52,
//            1 => 51,
//            2 => 59,
//            3 => 52,
//            4 => 53,
//            5 => 54,
//            6 => 57,
        ];

        foreach ($personnels as $personnel) {
            $idEduSign = $personnel->getIdEduSign();
            if (null !== $idEduSign) {
                foreach ($idEduSign as $key => $value) {
                    if (array_key_exists($key, $diplomesKeys)) {
                        $idEduSign[$diplomesKeys[$key]] = $value;
                        unset($idEduSign[$key]);
                    }
                }
                $personnel->setIdEduSign($idEduSign);
                $this->personnelRepository->save($personnel);
            }
        }


        $io->success('clés edusign des enseaignants mises à jours');

        return Command::SUCCESS;
    }
}
