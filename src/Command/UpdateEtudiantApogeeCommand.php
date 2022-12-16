<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/UpdateEtudiantApogeeCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Command;

use App\Classes\Apogee\ApogeeEtudiant;
use App\Repository\AnneeRepository;
use App\Repository\BacRepository;
use App\Repository\EtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'app:update-etudiant-apogee',
    description: 'Mise à jour de la date de naissance, du lieu de naissance, et du bac'
)]
class UpdateEtudiantApogeeCommand extends Command
{
    public function __construct(
        private readonly AnneeRepository $anneeRepository,
        private readonly EtudiantRepository $etudiantRepository,
        private readonly ApogeeEtudiant $apogeeEtudiant,
        private readonly BacRepository $bacRepository,
        private readonly EntityManagerInterface $entityManager
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('annee', InputArgument::REQUIRED, 'Code Etape annee');
    }

    /**
     * @throws \Exception
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $codeAnnee = $input->getArgument('annee');
        $annee = $this->anneeRepository->findOneBy(['codeEtape' => $codeAnnee]);

        if (null !== $annee) {
            $stid = $this->apogeeEtudiant->getEtudiantsAnnee($annee);
            while ($row = $stid->fetch()) {
                $dataApogee = $this->apogeeEtudiant->transformeApogeeToArray($row,
                    $this->bacRepository->getApogeeArray());
                $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];
                $etudiant = $this->etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                if (null !== $etudiant) {
                    $etudiant->setDateNaissance($dataApogee['etudiant']['setDateNaissance']);
                    $etudiant->setBac($dataApogee['etudiant']['setBac']);
                    $etudiant->setLieuNaissance($dataApogee['etudiant']['setLieuNaissance']);
                    $output->writeln('Mise à jour de '.$etudiant->getDisplayPr());
                }
            }

            $this->entityManager->flush();
        }

        return (int)Command::SUCCESS;
    }
}
